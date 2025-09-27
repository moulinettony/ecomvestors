import { SparklesCore } from '@/components/ui/sparkles'
import { cn } from '@/lib/utils'
import { EmojiSad, Key, Money, ShoppingCart } from 'iconsax-react'
import React from 'react'

export default function TheOldWay() {
    return (
        <div dir="rtl" className="mt-10 flex w-full flex-col items-center justify-between">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className={cn(
                            'container relative mx-auto mt-10 w-full max-w-7xl rounded-3xl px-4 sm:mb-10 sm:px-6 md:px-8'
                        )}
                    >
                        <div className="mb-8 flex justify-center">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                                الطريقة القديمة
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                                نموذج الدفع عند الاستلام الحالي{' '}
                                <span className={cn(' font-bold tracking-widest')}>متعثر</span>.
                            </h1>
                            <p className="mt-6 text-base leading-8 text-gray-600">
                                قل وداعاً للتكاليف المرتفعة والأسواق المزدحمة
                            </p>
                        </div>

                        <Cards />
                    </div>

                    {/* Graphics */}
                    <div className="absolute inset-0 -z-10 h-full w-full">
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

                    <div
                        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
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
                        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
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

function Cards() {
    return (
        <React.Fragment>
            <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 py-10 md:grid md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Card key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                ))}
            </div>
        </React.Fragment>
    )
}

const Card = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <React.Fragment>
            <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">{icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400">{description}</p>
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
}> = [
    {
        title: 'رسوم الدفع عند الاستلام المرتفعة في أوروبا',
        description:
            '80% من خدمات الدفع عند الاستلام تعتمد على إعادة البيع دون مستودعات خاصة، مما يؤدي إلى رسوم باهظة تصعّب تحقيق الأرباح.',
        icon: <Money {...iconProps} />,
    },
    {
        title: 'الأسواق الأوروبية المزدحمة',
        description:
            'مع ازدحام الأسواق في أوروبا الغربية، نحن نفتح آفاقاً جديدة مع برنامج EV، مستهدفين الفرص الواعدة في أوروبا الشرقية.',
        icon: <ShoppingCart {...iconProps} />,
    },
    {
        title: ' هل مللت من الطرق التقليدية؟',
        description:
            'استعد للسيطرة الكاملة مع فريقك الخاص ومركز اتصالك، وحقق توصيلات بأقل من 4 يورو لكل شحنة، لتجعل العمل مربحاً وممتعاً في آن واحد.',
        icon: <EmojiSad {...iconProps} />,
    },
    {
        title: 'أسرار النجاح في الدفع عند الاستلام',
        description: 'تعرف على ما يجري فعلاً في نموذج أعمال الدفع عند الاستلام واستخدمه لتحقيق النجاح لصالحك.',
        icon: <Key {...iconProps} />,
    },
]
