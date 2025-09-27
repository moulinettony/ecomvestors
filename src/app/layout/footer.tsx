'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className="relative z-10 flex h-auto w-full flex-col flex-wrap items-center justify-center gap-20 border-t border-blue-950 bg-gray-950 px-20 py-5 text-center md:flex-row">
            {/* Logo and Links */}
            <div className="flex size-auto flex-1 flex-col items-center justify-start gap-10 md:flex-row">
                <Link className="flex size-auto items-center justify-start bg-none" href={'/'}>
                    <Image
                        src={'/logos/logo-dark.png'}
                        height={24}
                        width={150}
                        alt={'Logo'}
                        priority={true}
                        quality={100}
                    />
                </Link>
                <div className="w-auto text-sm font-normal leading-snug text-gray-500/75">
                    ©{new Date().getFullYear()} EcomVestors, Inc. All rights reserved.
                </div>
            </div>
        </div>
    )
}
