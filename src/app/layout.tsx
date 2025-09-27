import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Footer from './layout/footer'
import Provider from './provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import { GoogleTagManager } from '@next/third-parties/google'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const FontCairo = Cairo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cairo', // Custom variable name
})

export const metadata: Metadata = {
    metadataBase: new URL('https://ecomvestors.vercel.app/'),
    title: 'EcomVestors - Master Program',
    description: 'EcomVestors is a master program that teaches you how to build a successful e-commerce business.',
    generator: 'Vercel',
    applicationName: 'EcomVestors',
    referrer: 'origin-when-cross-origin',
    keywords: [
        'EcomVestors',
        'Master Program',
        'E-commerce',
        'Business',
        'Online Business',
        'Entrepreneurship',
        'Success',
        'Ecom',
        'Investors',
        'EV',
        'Investment',
    ],
    authors: [
        {
            name: 'Yassine Chettouch',
            url: 'https://www.github.com/eldevyas',
        },
        {
            name: 'Abdellah Moutawakkil',
            url: 'https://github.com/ABdou2365',
        },
    ],
    creator: 'Yassine Chettouch',
    publisher: 'Yassine Chettouch',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/apple-touch-icon.png',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-32x32.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'EcomVestors - Master Program',
        description: 'EcomVestors is a master program that teaches you how to build a successful e-commerce business.',
        siteId: '1467726470533754880',
        creator: '@eldevyas',
        creatorId: '1467726470533754880',
    },
    openGraph: {
        title: 'EcomVestors - Master Program',
        description:
            "Dive into the heart of COD innovation with the EV MasterProgram, Europe's premier gateway to mastering Cash on Delivery strategies for online business growth.",
        url: 'https://ecomvestors.vercel.app/',
        siteName: 'EcomVestors',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: 'https://ecomvestors.vercel.app/site.webmanifest',
}

export const viewport = {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: 'no',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
        { media: '(prefers-color-scheme: dark)', color: '#3b82f6' },
    ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={FontCairo.className}>
                <Provider>
                    <GoogleTagManager gtmId="GTM-MG3SLQ34" />
                    <div className="flex min-h-screen w-full flex-col justify-between">
                        <div className="flex w-full flex-1 flex-col items-center justify-center">{children}</div>
                        <Footer />
                    </div>
                    <Toaster />
                    <SonnerToaster richColors={true} />
                </Provider>
            </body>
        </html>
    )
}
