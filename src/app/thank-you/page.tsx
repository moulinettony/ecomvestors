'use client'

import { Button } from '@/components/ui/button'
import { BackSquare, Home } from 'iconsax-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Heart, ThumbsUp } from 'lucide-react'

export default function ThankyouPage() {
    const router = useRouter()

    return (
        <div className="flex min-h-screen w-full flex-col justify-between">
            <main className="container flex w-full flex-1 flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center text-center md:max-w-xl">
                    <div className="flex justify-center space-x-4">
                        <Heart className="h-16 w-16 animate-pulse text-pink-500" />
                        <ThumbsUp className="h-16 w-16 text-blue-500" />
                    </div>
                    <h1 className="mb-8 mt-4 w-full text-3xl font-black tracking-tighter text-zinc-100 sm:text-2xl">
                        ! شكرًا لتقديم طلبك
                    </h1>
                    <h3 className="mb-8 mt-4 w-full text-xl font-black tracking-wide text-zinc-100 sm:text-2xl">
                        سيقوم فريقنا المتخصص بمراجعة معلوماتك بعناية لتحديد مدى توافقك مع معايير الاختيار لدينا. إذا تم
                        اختيارك، سيتواصل معك أحد وكلائنا ذوي الخبرة قريبًا لمناقشة الخطوات التالية. نحن نقدّر اهتمامك
                        ونتطلع إلى فرصة العمل معًا
                    </h3>

                    <div className="mt-10 flex w-full flex-wrap items-center justify-between gap-3">
                        <Button
                            type="button"
                            variant="default"
                            asChild
                            size="lg"
                            shape="pill"
                            className="flex flex-1 items-center justify-center"
                        >
                            <Link href="/">
                                <Home variant="Bulk" color="currentColor" />
                                <span className="whitespace-nowrap text-base font-semibold">Go back home</span>
                            </Link>
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            shape="pill"
                            className="flex flex-1 items-center justify-center"
                            onClick={() => {
                                router.back()
                            }}
                        >
                            <BackSquare variant="Bulk" color="currentColor" />
                            <span className="text-base font-semibold">Previous page</span>
                        </Button>{' '}
                    </div>
                </div>
            </main>
            <footer className="w-full px-6 py-4 text-center text-sm leading-7 text-muted-foreground sm:py-8 lg:px-8">
                <strong>Contact Morpheus</strong> for guidance if all else fails. Just kidding, but our{' '}
                <a
                    href="mailto:support@ecomvestors.com"
                    className="thover:underline font-semibold text-sky-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Support Team
                </a>{' '}
                can help!
            </footer>
        </div>
    )
}
