import { SparklesCore } from '@/components/ui/sparkles'
import { cn } from '@/lib/utils'
import { Money, ShoppingCart } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function MasterProgram() {
    return (
        <div dir="rtl" className="mt-5 flex w-full flex-col items-center justify-between">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className={cn(
                            'container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6 md:px-8'
                        )}
                    >
                        {/* <div className="mb-8 flex justify-center">
                            <Link className="flex size-auto items-center justify-start bg-none" href={'/'}>
                                <Image
                                    src={'/logos/icon-dark-3x.png'}
                                    height={250 / 1.5}
                                    width={250 / 1.5}
                                    alt={'Logo'}
                                    priority={true}
                                    quality={100}
                                    className="size-16 rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                                />
                            </Link>
                        </div>
                        <div className="mb-8 flex justify-center">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-lg font-bold uppercase leading-6 text-transparent md:text-2xl">
                                برنامج الماجستير
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                                 إنشاء عنوان أفضل 
                                {'أتقن أسرار الدفع عند الاستلام بنجاح في أوروبا.'}
                            </h1>
                            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
                                هل أنت مستعد لإتقان استراتيجيات الدفع عند الاستلام وتحقيق السيطرة الكاملة؟ برنامجنا يتيح
                                لك تعلم كيفية اختبار أفكارك، التوسع بذكاء، والوصول إلى أرباح تتجاوز 10,000 دولار بسهولة.
                                مع جميع الموارد والدعم الذي نقدمه، ستتمكن من بناء نجاح مستدام في مجال الدفع عند الاستلام
                                في أوروبا.
                            </p>
                            <div className="relative mt-10 flex flex-row items-center justify-center gap-2">
                                <Link href="/#form" className="flex items-center justify-center">
                                    <Button variant={'default'} size={'lg'} shape={'pill'}>
                                        لنبدأ
                                    </Button>
                                </Link>
                            </div>
                        </div>*/}

                        <Cards />
                    </div>

                    {/* الرسوم البيانية */}
                    <div className="absolute inset-0 -z-10 h-screen w-full">
                        <SparklesCore
                            id="tsparticlesoldway"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={4}
                            className="h-full w-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cards() {
    return (
        <React.Fragment>
            <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        image={feature.image}
                        imageSize={feature.imageSize}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}

const Card = ({
    title,
    description,
    // icon,
    image,
    imageSize,
}: {
    title: string
    description: string
    icon: React.ReactNode
    image: string
    imageSize?: string
}) => {
    return (
        <React.Fragment>
            <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                {/* <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">{icon}</div> */}
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400">{description}</p>

                {/* عرض الصورة */}
                <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                    <Image
                        src={image}
                        height={imageSize ? parseInt(imageSize.split('-')[1]) : 200}
                        width={imageSize ? parseInt(imageSize.split('-')[0]) : 200}
                        alt={'Image'}
                        className="size-full rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

const iconProps: {
    className: string
    variant: 'Bulk' | 'Outline' | 'TwoTone' | 'Broken' | 'Linear' | undefined
    color: string
} = {
    className: 'h-full w-full aspect-square text-blue-500',
    variant: 'Bulk',
    color: 'currentColor',
}

const features: Array<{
    title: string
    description: string
    icon: React.ReactNode
    image: string
    imageSize?: string
}> = [
    {
        title: 'أحدث الطرق والهياكل',
        description:
            'كعضو في برنامج EV، ستحصل على وصول حصري إلى أكثر من 35 تحديث فيديو حول طرق وهياكل الدفع عند الاستلام. كن على اطلاع بأحدث المعلومات وتعلم الهياكل اللازمة لتأسيس عملك بنجاح.',
        icon: <Money {...iconProps} />,
        image: '/assets/images/image-1.png',
        imageSize: '1999-1237',
    },
    {
        title: 'تدريب فردي يومي',
        description:
            'في برنامج EV، نعمل جنبًا إلى جنب مع المدربين وفريقك لمساعدتك في تأسيس نموذج عملك للدفع عند الاستلام. من خلال التواصل اليومي وجلسات التدريب الفردي على قناة Slac الخاصة بك، نقدم لك أسهل طريقة للتعلم من خلال الممارسة.',
        icon: <ShoppingCart {...iconProps} />,
        image: '/assets/images/image-2.png',
        imageSize: '1078-716',
    },
]
