'use client'

import { Button } from '@/components/ui/button'
import { BackSquare, Home, Refresh } from 'iconsax-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Error404() {
    const router = useRouter()

    return (
        <div className="flex min-h-screen w-full flex-col justify-between">
            <main className="container flex w-full flex-1 flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center text-center md:max-w-xl">
                    <p className="w-full text-base font-semibold text-blue-600">404</p>
                    <h1 className="mt-4 w-full text-3xl font-black tracking-tighter text-zinc-100 sm:text-5xl">
                        You escaped the Matrix!
                    </h1>
                    <p className="mt-6 w-full text-base leading-7 text-zinc-500">
                        <strong>Oops!</strong> It seems you&apos;ve found a portal to the uncharted zones of the Matrix.
                        This reality doesn&apos;t exist... yet.
                    </p>
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
                    <p className="mt-6 w-full text-sm leading-7 text-muted-foreground">
                        Retrace your steps with the buttons above, before the Agents catch on.
                    </p>
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

export default function Error500({ reset }: { error: Error | string; reset: () => void }) {
    const router = useRouter()

    return (
        <div className="flex min-h-screen w-full flex-col justify-between">
            <main className="container flex w-full flex-1 flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center text-center md:max-w-xl">
                    <p className="text-base font-semibold text-destructive">500</p>
                    <h1 className="mt-4 w-full text-3xl font-black tracking-tighter text-zinc-100 sm:text-5xl">
                        Unexpected Error!
                    </h1>
                    {/* <hr className="w-48 h-1 mx-auto my-2 border-0 rounded bg-zinc-500 md:my-10 dark:bg-zinc-300/25" /> */}
                    <p className="mt-6 text-base leading-7 text-zinc-300">
                        <strong>Oops!</strong> It seems something went wrong. Our team of Agents are on the case. Please
                        try again soon.
                    </p>
                    <div className="mt-10 flex w-full flex-wrap items-center justify-between gap-3">
                        <Button
                            type="button"
                            color="default"
                            asChild
                            size="lg"
                            shape="pill"
                            className="flex flex-1 items-center justify-center"
                        >
                            <Link href="/">
                                <span className="text-base font-semibold">Go back home</span>
                                <Home variant="Bulk" color="currentColor" />
                            </Link>
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                reset()
                            }}
                            variant="secondary"
                            size="lg"
                            shape="pill"
                            className="flex flex-1 items-center justify-center"
                        >
                            <span className="text-base font-semibold">Retry</span>
                            <Refresh variant="Bulk" color="currentColor" />
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                router.back()
                            }}
                            variant="secondary"
                            size="lg"
                            shape="pill"
                            className="flex flex-1 items-center justify-center"
                        >
                            <span className="mr-2 text-base font-semibold">Previous Page</span>
                            <BackSquare variant="Bulk" color="currentColor" />
                        </Button>
                    </div>
                </div>
            </main>
            <footer className="w-full px-6 py-4 text-center text-sm leading-7 text-muted-foreground sm:py-8 lg:px-8">
                Need Assistance? Our{' '}
                <a
                    href="mailto:support@protranslate.co"
                    className="text-info-500 dark:text-info-400 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Support Team
                </a>{' '}
                is standing by. Don&apos;t hesitate to reach out if you need help or have any questions.
            </footer>
        </div>
    )
}
