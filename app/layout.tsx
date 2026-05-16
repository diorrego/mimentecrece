import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mimentecrece.com";
const SITE_NAME = "mimentecrece";
const TITLE_DEFAULT =
  "mimentecrece · Acompañamiento clínico en salud mental · Dra. Camila Collao";
const DESCRIPTION =
  "Dra. Camila Collao, médico con formación en salud mental. Atención online en ansiedad, estrés, burnout y síntomas depresivos. Agenda a través del Centro Médico IntegraMente.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · mimentecrece",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "salud mental",
    "psiquiatría online",
    "atención psicológica Chile",
    "ansiedad",
    "estrés",
    "burnout",
    "depresión",
    "telemedicina",
    "Dra. Camila Collao",
    "Centro Médico IntegraMente",
    "salud mental online Chile",
  ],
  authors: [{ name: "Dra. Camila Collao Iturra" }],
  creator: "Dra. Camila Collao Iturra",
  publisher: "mimentecrece",
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    locale: "es_CL",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "mimentecrece. Que tu mente crezca, no que pese. Dra. Camila Collao.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F1",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-CL",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Dra. Camila Collao Iturra",
      jobTitle: "Médico cirujano con formación en salud mental",
      gender: "Female",
      nationality: "CL",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universidad San Sebastián" },
        { "@type": "CollegeOrUniversity", name: "Universidad de Chile" },
        {
          "@type": "CollegeOrUniversity",
          name: "Pontificia Universidad Católica de Chile",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Médico Cirujano",
          credentialCategory: "degree",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Diplomado en Clínica de Psicosis Esquizofrénicas y Afines",
          credentialCategory: "Diploma",
          recognizedBy: {
            "@type": "Organization",
            name: "Universidad de Chile",
          },
        },
      ],
      memberOf: [
        { "@type": "Organization", name: "Colegio Médico de Chile" },
        { "@type": "Organization", name: "Superintendencia de Salud" },
      ],
      sameAs: [
        "https://instagram.com/mimentecrece",
        "https://centromedicointegramente.cl",
      ],
      url: SITE_URL,
      image: `${SITE_URL}/og.jpg`,
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}#medicalbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og.jpg`,
      description: DESCRIPTION,
      areaServed: { "@type": "Country", name: "Chile" },
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Atención clínica en ansiedad y crisis de pánico",
        },
        {
          "@type": "MedicalTherapy",
          name: "Atención clínica en estrés sostenido y burnout",
        },
        { "@type": "MedicalTherapy", name: "Atención clínica en síntomas depresivos" },
        {
          "@type": "MedicalTherapy",
          name: "Acompañamiento clínico en salud mental",
        },
      ],
      employee: { "@id": `${SITE_URL}#person` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+56968428631",
        availableLanguage: "Spanish",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
