import React, { useState } from 'react';
import { Box, Container, Divider, Grid, Stack, Chip } from '@mui/material';
import ThemeProvider, { useColorMode } from '../context/ThemeContext';
import {
  Giant, H1, H2, H3, BodyText, SmallText,
  Button,
  GeometricIcon,
  Logo,
} from '../components/atoms';
import { Card, MetricCard, DiagnosticCTA } from '../components/molecules';
import { AI4U_PALETTE } from '../tokens/palette';

// Brand palette — 6 colores oficiales
const BRAND_SWATCHES = [
  { color: AI4U_PALETTE.mintCream,    label: 'Mint Cream',     token: '--ai4u-mint-cream',    role: 'background' },
  { color: AI4U_PALETTE.erieBlack,    label: 'Erie Black',     token: '--ai4u-erie-black',    role: 'text / dark surface' },
  { color: AI4U_PALETTE.hotOrange,    label: 'Hot Orange',     token: '--ai4u-hot-orange',    role: 'CTA / danger' },
  { color: AI4U_PALETTE.moderateBlue, label: 'Moderate Blue',  token: '--ai4u-moderate-blue', role: 'info / success' },
  { color: AI4U_PALETTE.cadetGray,    label: 'Cadet Gray',     token: '--ai4u-cadet-gray',    role: 'secondary / captions' },
  { color: AI4U_PALETTE.white,        label: 'White',          token: '--ai4u-white',         role: 'cards / elevated' },
];

// ── Section wrapper ────────────────────────────────────────────────────────
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box sx={{ mb: 8 }}>
    <Box sx={{
      display: 'flex', alignItems: 'center', gap: 2, mb: 4,
      borderBottom: '1px solid', borderColor: 'divider', pb: 2,
    }}>
      <SmallText sx={{ letterSpacing: '0.15em', opacity: 0.5, textTransform: 'uppercase' }}>
        {title}
      </SmallText>
    </Box>
    {children}
  </Box>
);

// ── Theme toggle button ────────────────────────────────────────────────────
const ThemeToggle = () => {
  const { mode, toggleColorMode } = useColorMode();
  return (
    <Button variant="outline" onClick={toggleColorMode} size="small">
      {mode === 'light' ? '◐ dark' : '◑ light'}
    </Button>
  );
};

// ── Color swatch ───────────────────────────────────────────────────────────
const Swatch = ({ color, label }: { color: string; label: string }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
    <Box sx={{
      width: 64, height: 64,
      backgroundColor: color,
      border: '1px solid', borderColor: 'divider',
    }} />
    <SmallText sx={{ fontSize: '0.65rem', opacity: 0.7, textAlign: 'center' }}>{label}</SmallText>
    <SmallText sx={{ fontSize: '0.6rem', opacity: 0.4, fontFamily: 'monospace' }}>{color}</SmallText>
  </Box>
);

// ── Main demo ──────────────────────────────────────────────────────────────
const Demo = () => {
  const [activeSection, setActiveSection] = useState('all');

  const sections = ['all', 'tokens', 'logos', 'typography', 'buttons', 'components'];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', color: 'text.primary' }}>
      {/* Header */}
      <Box sx={{
        position: 'sticky', top: 0, zIndex: 100,
        backgroundColor: 'background.default',
        borderBottom: '1px solid', borderColor: 'divider',
        px: 4, py: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Logo />
          <SmallText sx={{ opacity: 0.4, letterSpacing: '0.1em' }}>design_system_v1.0</SmallText>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {sections.map(s => (
            <Chip
              key={s}
              label={s}
              size="small"
              onClick={() => setActiveSection(s)}
              sx={{
                borderRadius: 0,
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.05em',
                backgroundColor: activeSection === s ? 'text.primary' : 'transparent',
                color: activeSection === s ? 'background.default' : 'text.secondary',
                border: '1px solid', borderColor: 'divider',
                cursor: 'pointer',
              }}
            />
          ))}
          <ThemeToggle />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* ── TOKENS ─────────────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'tokens') && (
          <Section title="tokens / paleta">
            {/* Paleta de marca — 6 colores oficiales */}
            <Box sx={{ mb: 5 }}>
              <SmallText sx={{ opacity: 0.4, mb: 2, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                BRAND COLORS (Brand Book 2025)
              </SmallText>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {BRAND_SWATCHES.map(({ color, label, token, role }) => (
                  <Box key={token} sx={{
                    display: 'flex', flexDirection: 'column', gap: 1,
                    width: 120,
                    border: '1px solid', borderColor: 'divider',
                    borderRadius: 2, overflow: 'hidden',
                  }}>
                    <Box sx={{ height: 80, backgroundColor: color }} />
                    <Box sx={{ p: 1.5 }}>
                      <SmallText sx={{ fontWeight: 600, fontSize: '0.75rem' }}>{label}</SmallText>
                      <SmallText sx={{ opacity: 0.5, fontSize: '0.65rem', fontFamily: 'monospace' }}>{color}</SmallText>
                      <SmallText sx={{ opacity: 0.4, fontSize: '0.6rem', mt: 0.5, fontStyle: 'italic' }}>{role}</SmallText>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Tints semánticos */}
            <Box sx={{ mb: 5 }}>
              <SmallText sx={{ opacity: 0.4, mb: 2, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                TINTS SEMÁNTICOS
              </SmallText>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {[
                  { color: AI4U_PALETTE.tints.hotOrange5,    label: 'orange/5',  note: 'error bg suave' },
                  { color: AI4U_PALETTE.tints.hotOrange8,    label: 'orange/8',  note: 'error bg medio' },
                  { color: AI4U_PALETTE.tints.hotOrange30,   label: 'orange/30', note: 'error borde' },
                  { color: AI4U_PALETTE.tints.moderateBlue8,  label: 'blue/8',    note: 'success/info bg' },
                  { color: AI4U_PALETTE.tints.moderateBlue15, label: 'blue/15',   note: 'badge success' },
                  { color: AI4U_PALETTE.tints.erieBlack8,    label: 'black/8',   note: 'hover ghost' },
                  { color: AI4U_PALETTE.tints.erieBlack10,   label: 'black/10',  note: 'borde estándar' },
                  { color: AI4U_PALETTE.tints.erieBlack20,   label: 'black/20',  note: 'borde énfasis' },
                ].map(({ color, label, note }) => (
                  <Box key={label} sx={{
                    display: 'flex', flexDirection: 'column', gap: 0.5,
                    width: 90, alignItems: 'center',
                  }}>
                    <Box sx={{
                      width: 64, height: 40,
                      backgroundColor: color,
                      border: '1px solid', borderColor: 'divider',
                      borderRadius: 1,
                    }} />
                    <SmallText sx={{ fontSize: '0.65rem', fontFamily: 'monospace', textAlign: 'center' }}>{label}</SmallText>
                    <SmallText sx={{ fontSize: '0.6rem', opacity: 0.4, textAlign: 'center' }}>{note}</SmallText>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Semántica crítica */}
            <Box sx={{
              p: 2, borderRadius: 2,
              border: `1px solid ${AI4U_PALETTE.tints.hotOrange30}`,
              backgroundColor: AI4U_PALETTE.tints.hotOrange5,
            }}>
              <SmallText sx={{ fontWeight: 600, mb: 1, color: AI4U_PALETTE.hotOrange }}>
                Inversión semántica crítica
              </SmallText>
              <SmallText sx={{ opacity: 0.8 }}>
                🟠 <strong>Orange = error/danger</strong> — no usar rojo &nbsp;&nbsp;
                🔵 <strong>Blue = success/info</strong> — no usar verde
              </SmallText>
            </Box>
          </Section>
        )}

        {/* ── LOGOS DE MARCA ──────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'logos') && (
          <Section title="logos oficiales de marca">
            <Box sx={{ mb: 5 }}>
              <SmallText sx={{ opacity: 0.4, mb: 3, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                MATRIZ DE LOGOTIPOS OFICIALES AI4U (v1, v2, v3, ISOTIPO)
              </SmallText>

              <Grid container spacing={4}>
                {(['v1', 'v2', 'v3', 'isotipo'] as const).map((version) => (
                  <Grid size={12} key={version}>
                    <Box sx={{ 
                      p: 3, 
                      border: '1px solid', 
                      borderColor: 'divider',
                      backgroundColor: 'background.paper',
                    }}>
                      <SmallText sx={{ fontWeight: 700, mb: 2, fontFamily: 'monospace', textTransform: 'uppercase' }}>
                        Variante: {version}
                      </SmallText>
                      
                      <Grid container spacing={2}>
                        {([
                          { key: 'negro', label: 'Negro', bg: '#EAF4EB' },
                          { key: 'crema', label: 'Crema', bg: '#171717' },
                          { key: 'naranja', label: 'Naranja', bg: '#171717' },
                          { key: 'azul', label: 'Azul', bg: '#EAF4EB' },
                          { key: 'gris', label: 'Gris', bg: '#171717' },
                        ] as const).map(({ key, label, bg }) => (
                          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={key}>
                            <Box sx={{ 
                              p: 2, 
                              backgroundColor: bg,
                              border: '1px solid',
                              borderColor: 'divider',
                              display: 'flex', 
                              flexDirection: 'column', 
                              alignItems: 'center',
                              justifyContent: 'center',
                              minHeight: 100,
                              gap: 1
                            }}>
                              <Logo 
                                version={version} 
                                colorVariant={key} 
                                size={version === 'isotipo' ? 'medium' : 'small'} 
                              />
                              <SmallText sx={{ 
                                fontSize: '0.65rem', 
                                opacity: 0.6, 
                                fontFamily: 'monospace',
                                color: bg === '#171717' ? '#FFFFFF' : '#171717',
                                mt: 1
                              }}>
                                {label}
                              </SmallText>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Section>
        )}

        {/* ── TYPOGRAPHY ─────────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'typography') && (
          <Section title="typography">
            <Stack sx={{ gap: 3 }}>
              <Box>
                <SmallText sx={{ opacity: 0.4, mb: 1, fontFamily: 'monospace' }}>Giant</SmallText>
                <Giant>AI4U</Giant>
              </Box>
              <Divider />
              <Box>
                <SmallText sx={{ opacity: 0.4, mb: 1, fontFamily: 'monospace' }}>H1</SmallText>
                <H1>Inteligencia para tu negocio</H1>
              </Box>
              <Box>
                <SmallText sx={{ opacity: 0.4, mb: 1, fontFamily: 'monospace' }}>H2</SmallText>
                <H2>Automatizamos lo repetitivo</H2>
              </Box>
              <Box>
                <SmallText sx={{ opacity: 0.4, mb: 1, fontFamily: 'monospace' }}>H3</SmallText>
                <H3>Tiempo que recuperas</H3>
              </Box>
              <Box>
                <SmallText sx={{ opacity: 0.4, mb: 1, fontFamily: 'monospace' }}>BodyText</SmallText>
                <BodyText>
                  Diseñado para empresas que quieren crecer sin crecer en costos operativos.
                  La IA no reemplaza personas — libera su tiempo para lo que importa.
                </BodyText>
              </Box>
              <Box>
                <SmallText sx={{ opacity: 0.4, mb: 1, fontFamily: 'monospace' }}>SmallText</SmallText>
                <SmallText>metadata · referencia · etiqueta · código_12</SmallText>
              </Box>
            </Stack>
          </Section>
        )}

        {/* ── BUTTONS ────────────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'buttons') && (
          <Section title="buttons">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
              <Button variant="primary">primary</Button>
              <Button variant="outline">outline</Button>
              <Button variant="minimal">minimal</Button>
              <Button variant="industrial" label="ACTION">industrial</Button>
              <Button variant="text">text</Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center', mt: 3 }}>
              <Button variant="primary" size="small">small</Button>
              <Button variant="primary" size="medium">medium</Button>
              <Button variant="primary" size="large">large</Button>
            </Box>
          </Section>
        )}

        {/* ── ICONS ──────────────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'components') && (
          <Section title="geometric icons">
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
              {(['dot', 'square', 'line', 'triangle', 'cross', 'circle'] as const).map(type => (
                <Box key={type} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <GeometricIcon type={type} size="large" />
                  <SmallText sx={{ opacity: 0.5, fontSize: '0.65rem' }}>{type}</SmallText>
                </Box>
              ))}
            </Box>
          </Section>
        )}

        {/* ── CARDS ──────────────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'components') && (
          <Section title="cards">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <MetricCard
                  value="87%"
                  title="Tiempo recuperado"
                  subtitle="Promedio en clientes activos"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <MetricCard
                  value="3x"
                  title="Productividad"
                  subtitle="Multiplicador medido en 90 días"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <MetricCard
                  value="< 2s"
                  title="Tiempo de respuesta"
                  subtitle="Agentes conversacionales AI4U"
                />
              </Grid>
            </Grid>
          </Section>
        )}

        {/* ── CTA ────────────────────────────────────────────────── */}
        {(activeSection === 'all' || activeSection === 'components') && (
          <Section title="diagnostic CTA">
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <DiagnosticCTA variant="primary" text="Recuperar tiempo" size="large" />
              <DiagnosticCTA variant="secondary" text="Ver diagnóstico" size="medium" />
              <DiagnosticCTA variant="outline" text="Explorar" size="small" />
            </Box>
          </Section>
        )}

      </Container>
    </Box>
  );
};

// ── Root with theme provider ───────────────────────────────────────────────
export default function DemoApp() {
  return (
    <ThemeProvider>
      <Demo />
    </ThemeProvider>
  );
}
