import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function CallToAction() {
    // Transaltion update
    return (
        <div dir="rtl" className=" flex w-full flex-col items-center justify-between">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate px-4 sm:px-8 lg:px-24">
                    <div
                        className={cn(
                            'container relative mx-auto my-10 w-full max-w-7xl rounded-3xl border border-gray-800/50 bg-gray-950/50 px-4 py-4 backdrop-blur-lg sm:px-8 sm:py-8 md:px-16 lg:px-24  lg:py-28'
                        )}
                    >
                        <div className="mb-8 flex justify-center">
                            <Link className="flex size-auto items-center justify-start bg-none" href={'/'}>
                                <Image
                                    src={'/logos/logo-dark-3x.png'}
                                    height={40}
                                    width={200}
                                    alt={'Logo'}
                                    priority={true}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <div className="mb-8 flex justify-center">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                                أطلق حلمك
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                                إتقان التجارة الإلكترونية للمستقبل. متوفر اليوم.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                اكتشف الخطة لتحقيق نجاح التجارة الإلكترونية. شاهد النجاح يتكشف أمامك.
                            </p>
                            <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                                <Link href="/#form" className="flex items-center justify-center">
                                    <Button variant={'default'} size={'lg'} shape={'pill'}>
                                        احصل على مكان
                                    </Button>
                                </Link>
                                <a
                                    href="https://calendly.com/aassimmentoring/ev-partnerships?month=2024-04"
                                    className="flex items-center justify-center"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant={'secondary'} size={'lg'} shape={'pill'}>
                                        كن شريكًا
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* الرسومات */}
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
