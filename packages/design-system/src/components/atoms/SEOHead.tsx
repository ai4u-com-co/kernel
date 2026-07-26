import React from 'react';

// react-helmet-async es opcional (peer) — se bundlea si está presente.
// Importamos con un fallback para no romper builds sin él.
let HelmetComponent: React.ComponentType<{ children?: React.ReactNode }> | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  HelmetComponent = (require('react-helmet-async') as { Helmet: typeof HelmetComponent }).Helmet;
} catch {
  // react-helmet-async no instalado — SEOHead no renderiza nada
}

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  /** URL canónica completa. En Next.js App Router usa `metadata.alternates.canonical` en su lugar. */
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

/**
 * SEOHead — inyecta meta tags en SPAs (react-helmet-async).
 *
 * En Next.js App Router NO uses este componente: declara `export const metadata`
 * o `generateMetadata()` en el layout/page directamente.
 * Usa `buildSEOMetadata()` para obtener un objeto compatible con el metadata API de Next.js.
 */
const SEOHead: React.FC<SEOHeadProps> = (props) => {
  // En SSR o sin react-helmet-async instalado, no renderizamos nada.
  if (typeof window === 'undefined' || !HelmetComponent) return null;

  const Helmet = HelmetComponent as React.ComponentType<{ children?: React.ReactNode }>;

  const {
    title = 'AI4U - Inteligencia Artificial para tu Negocio',
    description = 'Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.',
    keywords = 'inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia',
    canonical,
    ogImage = '/assets/images/ai4u-logo.png',
    ogType = 'website',
    structuredData,
    noIndex = false,
    noFollow = false,
  } = props;

  const fullTitle = title.includes('AI4U') ? title : `${title} | AI4U`;
  const fullCanonical = canonical ?? window.location.href;
  const robotsContent = noIndex || noFollow
    ? `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AI4U" />
      <meta property="og:locale" content="es_CO" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@ai4u_co" />
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

/**
 * Devuelve un objeto compatible con `metadata` de Next.js App Router.
 *
 * @example
 * // app/page.tsx
 * export const metadata = buildSEOMetadata({ title: 'Inicio', description: '...' });
 */
export const buildSEOMetadata = (props: SEOHeadProps = {}) => {
  const {
    title = 'AI4U - Inteligencia Artificial para tu Negocio',
    description = 'Soluciones de Inteligencia Artificial personalizadas para tu negocio.',
    keywords,
    canonical,
    ogImage = '/assets/images/ai4u-logo.png',
    ogType = 'website',
    noIndex = false,
    noFollow = false,
  } = props;

  const fullTitle = title.includes('AI4U') ? title : `${title} | AI4U`;

  return {
    title: fullTitle,
    description,
    ...(keywords && { keywords }),
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: { index: !noIndex, follow: !noFollow },
    },
    ...(canonical && { alternates: { canonical } }),
    openGraph: {
      title: fullTitle,
      description,
      type: ogType as 'website',
      ...(canonical && { url: canonical }),
      images: [{ url: ogImage }],
      siteName: 'AI4U',
      locale: 'es_CO',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: fullTitle,
      description,
      images: [ogImage],
      site: '@ai4u_co',
    },
  };
};

export default SEOHead; 