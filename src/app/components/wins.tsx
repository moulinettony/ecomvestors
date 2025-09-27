import WinsGallery from '@/app/components/partials/wins-gallery'
import { SparklesCore } from '@/components/ui/sparkles'
import { cn } from '@/lib/utils'

export default function Wins() {
    return (
        <div dir="rtl" className="mt-10 flex w-full flex-col items-center justify-between">
            <div className="z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className={cn(
                            'container relative mx-auto my-10 w-full max-w-7xl rounded-3xl px-4 sm:px-6 md:px-8'
                        )}
                    >
                        <div className="mb-8 flex justify-center">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                                عرض قصص النجاح
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                                نظرة سريعة على الانتصارات
                            </h1>
                            <p className="mt-6 text-base leading-8 text-gray-400">
                                شاهد النتائج. اطلع على لقطات الشاشة ومقاطع الفيديو من طلابنا الذين يحققون مكاسب حقيقية
                                في سوق الدفع عند الاستلام.
                            </p>
                        </div>
                        <div className="h-auto w-full max-w-[100vw] overflow-hidden">
                            <WinsGallery />
                        </div>
                    </div>

                    {/* الرسومات */}
                    <div className="absolute inset-0 -z-10 h-full w-full">
                        <SparklesCore
                            id="tsparticleswins"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={5}
                            className="h-full w-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                    <div
                        className="absolute right-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute right-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
