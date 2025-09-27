import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { Button } from '@/components/ui/button'
import { SparklesCore } from '@/components/ui/sparkles'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Video from 'next-video'
import EcomvestorsVsl from '@/videos/Aassim vsl.mp4.json'

// bg-[#151480]

export default function HeroSection() {
    return (
        <div dir="rtl" className="flex w-full flex-col items-center justify-between ">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className={cn(
                            'container relative mx-auto w-full max-w-7xl rounded-3xl px-4 sm:my-2 sm:px-6  md:px-8 '
                        )}
                    >
                        <div className="mt-2 flex justify-center px-4 sm:mb-8">
                            <Link className="flex size-auto items-center justify-start bg-none" href={'/'}>
                                <Image
                                    src={'/logos/new-logo.png'}
                                    height={50}
                                    width={200}
                                    alt={'Logo'}
                                    priority={true}
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <div className="mb-8 mt-6 flex justify-center ">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-[10px] font-bold text-transparent lg:text-sm">
                                تقديم النسخة 4.0 من برنامج إيكومفيستورز
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="px-8 text-right text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl lg:leading-10">
                                إليك خطة محكمة لتحقيق دخل يتراوح بين 20,000€ إلى 50,000€ شهريًا أو أكثر، من خلال التجارة{' '}
                                <br className="max-lg:hidden" /> الإلكترونية في أوروبا الشرقية
                            </p>
                            <p className="px-8 text-right text-sm tracking-normal text-gray-300 lg:text-xl lg:leading-10">
                                أكثر من 800 عضو • أكثر من 650 منتج رابح •{' '}
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    {' '}
                                    متوسط دخل 20,000€ شهريًا{' '}
                                </span>
                            </p>
                            <p className="px-8 text-right text-sm tracking-normal text-gray-400 lg:text-xl lg:leading-10">
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    الخطوة الأولى:
                                </span>{' '}
                                شاهد الفيديو واحصل على خصم 50٪
                                <br className="max-lg:hidden" /> هل أنت مستعد للبدء؟{' '}
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    سجّل الآن ↓
                                </span>
                            </p>
                            <div className="aspect-w-16 aspect-h-9 mx-auto max-w-[900px] py-8">
                                <Video
                                    className="overflow-hidden rounded-none bg-black py-4  shadow-lg md:rounded-[50px]"
                                    src={EcomvestorsVsl.sources[0].src}
                                    style={{ objectFit: 'cover', border: 'none' }}
                                />
                            </div>
                            <p className="text-sm tracking-normal text-gray-200 max-lg:px-4 lg:text-xl lg:leading-10">
                                اكتشف كيفية بناء عمل تجارة إلكترونية حقيقي بتكلفة منخفضة، تحت إشراف مبتكري نموذج EV.
                                مرحبًا بك في برنامج إيكومفستورس ماستر بروجرام V5
                            </p>

                            <h3
                                style={{ wordSpacing: '0.25rem' }}
                                className="mb-10 mt-2  px-6 text-[10px] font-normal tracking-tight text-gray-50  md:mt-6 md:text-lg  lg:hidden"
                            >
                                {
                                    'اكتشف كيفية بناء عمل تجارة إلكترونية حقيقي بتكلفة منخفضة، تحت إشراف مبتكري نموذج EV. مرحبًا بك في برنامج إيكومفستورس ماستر بروجرام V4'
                                }
                            </h3>

                            {/* Desktop Buttons */}
                            <div className=" mx-4 mt-6 hidden flex-col items-center justify-center gap-3 sm:gap-4 lg:mx-8 lg:mt-12  lg:flex lg:flex-row lg:gap-5">
                                {/* First Image */}
                                <Image
                                    className="pb-4 lg:pb-6 "
                                    src={'/assets/readytostart.png'}
                                    width={170}
                                    height={10}
                                    alt={'Logo'}
                                />

                                {/* Booking Link */}
                                <Link href="/#form" className="flex w-full items-center justify-center lg:w-auto">
                                    <Button variant={'green'} size={'xl'} shape={'pill'}>
                                        احجز مكانك الآن{' '}
                                    </Button>
                                </Link>

                                {/* Partnership Link */}
                                <a
                                    href="https://calendly.com/aassimmentoring/ev-partnerships?month=2024-04"
                                    className="flex w-full items-center justify-center lg:w-auto"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant={'secondary'} size={'xl'} shape={'pill'}>
                                        كن شريكا أو مستثمرًا{' '}
                                    </Button>
                                </a>

                                {/* Second Image */}
                                <Image
                                    className="pt-4 lg:pb-6 lg:pt-0"
                                    src={'/assets/needmoreinfo.png'}
                                    width={170}
                                    height={10}
                                    alt={'Logo'}
                                />
                            </div>

                            {/* Mobile Buttons */}
                            <div className="relative  mt-6 flex flex-row items-center justify-center gap-[1px] lg:hidden">
                                {/* First Image */}
                                <Image
                                    className="ml-1 pt-8"
                                    src={'/assets/readytostart.png'}
                                    width={90}
                                    height={10}
                                    alt={'Logo'}
                                />

                                <div className="flex flex-col items-center gap-2">
                                    {/* Booking Link */}
                                    <Link href="/#form" className="flex w-full items-center justify-center">
                                        <Button className="text-[10px]" variant={'green'} size={'md'} shape={'pill'}>
                                            احجز مكانك الآن{' '}
                                        </Button>
                                    </Link>

                                    {/* Partnership Link */}
                                    <a
                                        href="https://calendly.com/aassimmentoring/ev-partnerships?month=2024-04"
                                        className="flex w-full items-center justify-center"
                                        target="_self"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            className="text-[10px]"
                                            variant={'secondary'}
                                            size={'md'}
                                            shape={'pill'}
                                        >
                                            كن شريكا أو مستثمرًا{' '}
                                        </Button>
                                    </a>
                                </div>

                                {/* Second Image */}
                                <Image
                                    className="pb-14"
                                    src={'/assets/needmoreinfo.png'}
                                    width={90}
                                    height={10}
                                    alt={'Logo'}
                                />
                            </div>

                            {/* Video section */}
                            <div className="relative mt-8 flex flex-col items-center justify-center gap-5 lg:mt-10">
                                <div className="flex w-full flex-row items-center justify-center">
                                    <AnimatedTooltip items={people} />
                                </div>
                                <p className="max-w-md text-xs tracking-widest text-gray-400 md:text-sm">
                                    يسعدنا أن نرحب بك في مجتمع رواد الأعمال المغربي الذين يحدثون ثورة في نماذج أعمال
                                    الدفع عند الاستلام في أوروبا.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Graphics */}
                    <div className="absolute inset-0 -z-10 h-full w-full">
                        <SparklesCore
                            id="tsparticlesfullpage"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={1}
                            className="h-full w-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
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

export const people = [
    {
        id: 1,
        name: '',
        designation: '',
        image: '/assets/avatars/1.png',
        showTooltip: false,
    },
    {
        id: 2,
        name: '',
        designation: '',
        image: '/assets/avatars/2.png',
        showTooltip: false,
    },
    {
        id: 3,
        name: '',
        designation: '',
        image: '/assets/avatars/3.png',
        showTooltip: false,
    },
    {
        id: 4,
        name: '',
        designation: '',
        image: '/assets/avatars/4.png',
        showTooltip: false,
    },
    {
        id: 5,
        name: '',
        designation: '',
        image: '/assets/avatars/5.png',
        showTooltip: false,
    },
    {
        id: 6,
        name: '',
        designation: '',
        image: '/assets/avatars/6.png',
        showTooltip: false,
    },
    {
        id: 7,
        name: 'أنت',
        designation: 'انضم إلينا',
        image: '/assets/avatars/you1.png',
        showTooltip: true,
    },
]
