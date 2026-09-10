export interface PageMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
}

export const SITE_CONFIG = {
  name: 'DevWorks Studio',
  domain: 'https://devworks.studio',
  defaultOgImage: 'https://devworks.studio/og-image.jpg',
  defaultLocale: 'es_MX',
  twitterHandle: '@devworks_studio',
  phone: '+528781234567',
  email: 'contacto@devworks.studio',
  city: 'Piedras Negras',
  region: 'Coahuila',
  country: 'MX',
};

export const PAGES_METADATA: Record<string, PageMetadata> = {
  home: {
    title: 'DevWorks Studio | Infraestructura Digital y Validación Comercial en Coahuila',
    description:
      'Instalamos plataformas web de alta conversión, correos corporativos blindados y dominio en Google Maps para clínicas y empresas de transporte en Coahuila.',
    canonical: 'https://devworks.studio/',
    ogType: 'website',
    keywords: [
      'diseño web piedras negras',
      'infraestructura digital coahuila',
      'páginas web coahuila',
      'agencia digital piedras negras',
      'google maps negocios coahuila',
      'correo corporativo google workspace',
    ],
  },
  salud: {
    title: 'Sistema Digital de Citas y Confianza Médica en Coahuila | DevWorks',
    description:
      'Atrae pacientes privados y de Texas a tu clínica. Sitios web médicos bilingües, dominio en Google Maps y agenda directa a WhatsApp en Piedras Negras y Coahuila.',
    canonical: 'https://devworks.studio/salud',
    ogType: 'website',
    keywords: [
      'marketing médico coahuila',
      'turismo médico piedras negras',
      'diseño web clínicas dentales',
      'posicionamiento médicos eagle pass',
      'páginas web para doctores coahuila',
      'citas whatsapp clínicas',
    ],
  },
  transporte: {
    title: 'Validación de Flota y Confianza Comercial para Transporte | DevWorks',
    description:
      'Proyecta la solidez y seguridad que exigen las maquiladoras y brokers de carga para cerrar contratos de fletes. Infraestructura corporativa en Piedras Negras y Coahuila.',
    canonical: 'https://devworks.studio/transporte',
    ogType: 'website',
    keywords: [
      'páginas web líneas de transporte',
      'validación de flota maquiladoras',
      'licitaciones fletes coahuila',
      'autotransporte federal piedras negras',
      'fletes binacionales transfer',
      'proveedores transporte maquila',
      'alta de proveedores autotransporte',
    ],
  },
  piedrasNegras: {
    title: 'Diseño Web e Infraestructura Comercial en Piedras Negras | DevWorks',
    description:
      'Desarrollo web de alta velocidad, correos corporativos y optimización de Google Maps para empresas y especialistas en Piedras Negras, Coahuila.',
    canonical: 'https://devworks.studio/diseno-web-piedras-negras',
    keywords: [
      'diseño web piedras negras',
      'creación de páginas web piedras negras',
      'agencia web piedras negras coahuila',
      'google maps piedras negras',
    ],
  },
  acuna: {
    title: 'Diseño Web y Posicionamiento Local en Ciudad Acuña | DevWorks Studio',
    description:
      'Plataformas web bilingües y captación digital para especialistas médicos y empresas en Ciudad Acuña, Coahuila. Entrega en 10 días.',
    canonical: 'https://devworks.studio/diseno-web-acuna',
    keywords: [
      'diseño web acuña',
      'páginas web ciudad acuña coahuila',
      'marketing digital acuña',
      'turismo médico acuña del rio',
    ],
  },
  saltillo: {
    title: 'Validación Digital y Presencia Web en Saltillo | DevWorks Studio',
    description:
      'Sistemas digitales corporativos para contratistas industriales, transportistas y proveedores de maquila en Saltillo y Ramos Arizpe.',
    canonical: 'https://devworks.studio/diseno-web-saltillo',
    keywords: [
      'diseño web saltillo',
      'páginas web industriales saltillo',
      'proveedores maquila ramos arizpe',
      'infraestructura digital saltillo',
    ],
  },
  torreon: {
    title: 'Diseño Web y Captación Comercial en Torreón | DevWorks Studio',
    description:
      'Plataformas de alta conversión y posicionamiento en Google para empresas y clínicas en Torreón y La Laguna.',
    canonical: 'https://devworks.studio/diseno-web-torreon',
    keywords: [
      'diseño web torreón',
      'páginas web la laguna',
      'marketing digital torreón coahuila',
    ],
  },
};

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/dw-logo.png`,
    image: `${SITE_CONFIG.domain}/og-image.jpg`,
    description:
      'Firma de infraestructura digital y validación comercial en Coahuila. Especialistas en salud, turismo médico y autotransporte de carga.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.region,
      addressCountry: SITE_CONFIG.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.7000,
      longitude: -100.5235,
    },
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: [
      { '@type': 'City', name: 'Piedras Negras' },
      { '@type': 'City', name: 'Ciudad Acuña' },
      { '@type': 'City', name: 'Saltillo' },
      { '@type': 'City', name: 'Torreón' },
      { '@type': 'State', name: 'Coahuila' },
    ],
    priceRange: '$$',
    sameAs: [
      'https://www.linkedin.com/company/devworks-studio',
      'https://www.facebook.com/devworks.studio',
      'https://www.instagram.com/devworks.studio',
    ],
  };
}

export function getFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
