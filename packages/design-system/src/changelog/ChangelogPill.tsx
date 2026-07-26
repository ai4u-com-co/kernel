"use client";

import React, { useEffect, useRef, useState } from 'react';
import { AI4U_PALETTE } from '../tokens/palette';

// ── Tipos del servicio central de changelog ────────────────────────────────
interface ChangelogEntry {
  id: number;
  version: string;
  date: string;
  changes: string[];
  created_at: string;
  /** Instante exacto del commit (ISO 8601 con zona). Se muestra en GMT-5. */
  committed_at?: string;
}

interface ChangelogResponse {
  total: number;
  entries: ChangelogEntry[];
}

export interface ChangelogPillProps {
  /**
   * clientId / tenant registrado en el servicio (ej. "tamaprint", "flexoimpresos").
   * Requerido — el sistema es multitenant, no hay tenant por defecto.
   * Cada app lo provee desde su propia config/env.
   */
  client: string;
  /** appId registrado en el servicio (ej. "kpis", "orderloader"). Requerido. */
  app: string;
  /** URL del servicio central. Por defecto el de producción. */
  serviceUrl?: string;
  /** Cantidad de entradas a listar en el popover. */
  limit?: number;
  /** Tema visual. Por defecto "light". */
  mode?: 'light' | 'dark';
  /** Alineación del popover respecto al botón. Por defecto 'right' (crece a la izquierda). */
  align?: 'left' | 'right';
}

const DEFAULT_SERVICE_URL = 'https://changelog-service-silk.vercel.app';

// ── Colores de tag según semántica de marca (naranja=danger, azul=success) ──
const TAG_COLOR: Record<string, string> = {
  feat: AI4U_PALETTE.moderateBlue, // funcionalidad nueva → success/info
  fix: AI4U_PALETTE.hotOrange, // corrección → atención
  refactor: AI4U_PALETTE.cadetGray,
  chore: AI4U_PALETTE.cadetGray,
  docs: AI4U_PALETTE.cadetGray,
};

/** Muestra fecha + hora del commit en GMT-5 (America/Bogota, sin DST). */
function formatGmt5(entry: ChangelogEntry): string {
  if (!entry.committed_at) return entry.date;
  const d = new Date(entry.committed_at);
  if (isNaN(d.getTime())) return entry.date;
  const time = d.toLocaleTimeString('es-CO', {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return `${entry.date} · ${time}`;
}

function parseChange(raw: string): { prefix: string; text: string } {
  const cleaned = raw.replace(/\s*Co-Authored-By:[^\n]*/gi, '').trim();
  const match = cleaned.match(/^([a-z]+)(?:\([^)]*\))?!?:\s*(.+)$/i);
  if (match) return { prefix: match[1].toLowerCase(), text: match[2] };
  return { prefix: 'chore', text: cleaned };
}

/**
 * Pill de changelog brutalista, MUI-free (React + inline styles).
 * Lee del servicio central (GET público) y muestra el historial en un popover.
 * Multitenant: `client` y `app` son requeridos.
 */
export const ChangelogPill = ({
  client,
  app,
  serviceUrl = DEFAULT_SERVICE_URL,
  limit = 8,
  mode = 'light',
  align = 'right',
}: ChangelogPillProps) => {
  const isLight = mode === 'light';
  const [data, setData] = useState<ChangelogResponse | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const base = serviceUrl.replace(/\/$/, '');
    let active = true;
    fetch(`${base}/api/changelog/${client}/${app}?limit=${limit}`)
      .then((r) => r.json())
      .then((d: ChangelogResponse) => {
        if (active) setData(d);
      })
      .catch(() => {
        if (active) setData(null);
      });
    return () => {
      active = false;
    };
  }, [serviceUrl, client, app, limit]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const version = data?.entries?.[0]?.version ?? null;
  if (!version) return null;

  const fg = isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white;
  const bg = isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black;
  const hardShadow = `6px 6px 0px ${fg}`;
  const mono = 'ui-monospace, "SFMono-Regular", Menlo, monospace';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={`Versión ${version} — ver changelog`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '3px 10px',
          border: `1px solid ${fg}`,
          borderRadius: 0,
          background: bg,
          color: fg,
          fontSize: 12,
          fontFamily: mono,
          fontWeight: 600,
          lineHeight: 1.6,
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: AI4U_PALETTE.moderateBlue,
            flexShrink: 0,
          }}
        />
        v{version}
      </button>

      {open && data && (
        <div
          role="dialog"
          aria-label="Changelog"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            ...(align === 'left' ? { left: 0, right: 'auto' } : { right: 0, left: 'auto' }),
            zIndex: 9999,
            width: 340,
            maxHeight: 420,
            overflowY: 'auto',
            background: bg,
            color: fg,
            border: `1px solid ${fg}`,
            borderRadius: 0,
            boxShadow: hardShadow,
          }}
        >
          <div
            style={{
              padding: '10px 16px',
              borderBottom: `1px solid ${isLight ? AI4U_PALETTE.tints.erieBlack10 : 'rgba(255,255,255,0.15)'}`,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: AI4U_PALETTE.cadetGray,
              fontFamily: mono,
            }}
          >
            Changelog · {app}
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {data.entries.map((entry) => (
              <li
                key={entry.id}
                style={{
                  padding: '10px 16px',
                  borderBottom: `1px solid ${isLight ? AI4U_PALETTE.gray[100] : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, fontFamily: mono }}>v{entry.version}</span>
                  <span style={{ fontSize: 11, color: AI4U_PALETTE.cadetGray, fontFamily: mono }}>
                    {formatGmt5(entry)}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {entry.changes.map((c, i) => {
                    const { prefix, text } = parseChange(c);
                    const color = TAG_COLOR[prefix] ?? AI4U_PALETTE.cadetGray;
                    return (
                      <li key={i} style={{ fontSize: 12, lineHeight: 1.5 }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '1px 5px',
                            marginRight: 5,
                            borderRadius: 0,
                            background: color,
                            color: AI4U_PALETTE.white,
                            fontSize: 10,
                            fontWeight: 700,
                            fontFamily: mono,
                          }}
                        >
                          {prefix}
                        </span>
                        <span style={{ color: isLight ? AI4U_PALETTE.gray[600] : AI4U_PALETTE.gray[300] }}>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>

          {data.total > limit && (
            <div style={{ padding: '8px 16px', fontSize: 11, color: AI4U_PALETTE.cadetGray, fontStyle: 'italic' }}>
              +{data.total - limit} entradas más
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChangelogPill;
