import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import { GoogleAnalytics } from '@/components/google-analytics'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Malaysia Mounjaro | Mounjaro KwikPen Weight Loss | 猛健乐减肥针 | Tirzepatide Malaysia',
  description: 'Buy Mounjaro KwikPen in Malaysia. FDA-approved Tirzepatide weight loss injection. Safe, effective, fast results. 马来西亚猛健乐减肥针 - 安全有效快速。Mounjaro Malaysia, Mounjaro KwikPen, weight loss injection Malaysia.',
  keywords: [
    'Mounjaro Malaysia',
    'Mounjaro KwikPen',
    'Tirzepatide Malaysia',
    'weight loss Malaysia',
    'weight loss injection',
    'Mounjaro price Malaysia',
    'buy Mounjaro Malaysia',
    'FDA approved weight loss',
    'GLP-1 Malaysia',
    '猛健乐',
    '减肥针',
    '减肥注射',
    '马来西亚减肥',
    'ubat kurus Malaysia',
    'suntikan kurus',
    'Mounjaro Harga',
    '猛健乐价钱',
    'Ozempic Malaysia',
    'Wegovy Malaysia',
    '司美格鲁肽',
    'Saxenda Malaysia',
    '善纖達',
    '瘦瘦针',
    '减肥笔',
    'Phentermine Malaysia',
    '芬特明',
    'Johor Bahru',
    'Kuala Lumpur',
    'Penang',
    'Selangor',
  ],
  authors: [{ name: 'Malaysia Mounjaro' }],
  generator: 'Malaysia Mounjaro',
  applicationName: 'Malaysia Mounjaro',
  referrer: 'origin-when-cross-origin',
  creator: 'Malaysia Mounjaro',
  publisher: 'Malaysia Mounjaro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://malaysiamounjaro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Malaysia Mounjaro | Mounjaro KwikPen Weight Loss | 猛健乐减肥针',
    description: 'FDA-approved Mounjaro KwikPen for safe and effective weight loss in Malaysia. 马来西亚猛健乐减肥针 - 安全有效快速',
    url: 'https://malaysiamounjaro.com',
    siteName: 'Malaysia Mounjaro',
    locale: 'en_MY',
    type: 'website',
    images: [
      {
        url: 'https://malaysiamounjaro.com/banner/malaysia_mounjarro_banner.png',
        width: 1200,
        height: 630,
        alt: 'Mounjaro KwikPen Malaysia - FDA Approved Weight Loss Injection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malaysia Mounjaro | Mounjaro KwikPen Weight Loss',
    description: 'FDA-approved Mounjaro KwikPen for safe and effective weight loss in Malaysia',
    images: ['https://malaysiamounjaro.com/banner/malaysia_mounjarro_banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#562583" />
        <link rel="canonical" href="https://malaysiamounjaro.com" />

        {/* Additional Open Graph tags */}
        <meta property="og:title" content="Malaysia Mounjaro | Mounjaro KwikPen Weight Loss | 猛健乐减肥针" />
        <meta property="og:description" content="FDA-approved Mounjaro KwikPen for safe and effective weight loss in Malaysia. 马来西亚猛健乐减肥针 - 安全有效快速" />
        <meta property="og:image" content="https://malaysiamounjaro.com/banner/malaysia_mounjarro_banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mounjaro KwikPen Malaysia - FDA Approved Weight Loss Injection" />
        <meta property="og:url" content="https://malaysiamounjaro.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Malaysia Mounjaro" />
        <meta property="og:locale" content="en_MY" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Malaysia Mounjaro | Mounjaro KwikPen Weight Loss" />
        <meta name="twitter:description" content="FDA-approved Mounjaro KwikPen for safe and effective weight loss in Malaysia" />
        <meta name="twitter:image" content="https://malaysiamounjaro.com/banner/malaysia_mounjarro_banner.png" />

        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics measurementId="G-04MJNR2ZXC" />
      </body>
    </html>
  )
}
