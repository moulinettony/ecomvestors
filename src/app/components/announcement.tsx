'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function Announcement() {
    const [isDismissed, setIsDismissed] = useState(false)

    if (isDismissed) {
        return <Fragment />
    }

    return (
        <div
            dir="rtl"
            className="relative isolate z-50 flex w-full items-center gap-x-6 overflow-hidden border-b border-blue-950 bg-gray-950 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
        >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-gray-200">
                    <strong className="font-semibold">إعلان</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    أذكى طريقة لبناء عمل تجاري عبر الإنترنت يحقق 10,000 دولار - 50,000 دولار شهريًا في عام 2024
                </p>
                <Link
                    href="/#form"
                    className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    سجل الآن <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">تجاهل</span>
                    <XMarkIcon
                        className="size-5 text-gray-100"
                        aria-hidden="true"
                        onClick={() => {
                            setIsDismissed(true)
                        }}
                    />
                </button>
            </div>
        </div>
    )
}
