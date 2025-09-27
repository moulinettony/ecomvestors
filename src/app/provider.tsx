'use client'

import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'
import Colors from 'tailwindcss/colors'

const BeamsBackground = () => {
    return (
        <div className="absolute inset-0 -z-30 size-full min-h-screen overflow-hidden">
            {/* Full Size Grid */}
            <div className="background relative -z-30 size-full min-h-screen mix-blend-screen" />
        </div>
    )
}

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <div className="relative z-10 flex size-full min-h-screen flex-col items-start justify-start bg-gray-950">
                <BeamsBackground />
                <NextTopLoader
                    color={Colors.blue[500]}
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={5}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow={'0 0 10px var(--color-indigo-100),0 0 5px var(--color-indigo-100)'}
                />
                {children}
            </div>
        </ThemeProvider>
    )
}
