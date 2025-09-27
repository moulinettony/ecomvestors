import { cn } from '@/lib/utils'
import MyIcon from '../../../public/assets/images/part 2 - the weapon.svg'
import Image from 'next/image'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'], weight: '400' })

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A hero section for the landing page.
 *
 * This component renders a hero section that is composed of a background video,
 * a logo, a title, a subtitle, a paragraph, a call-to-action button, and a
 * link to a form. It also includes some graphics and a particle background.
 *
 * The background video is a video of a cityscape, and the logo is the logo of
 * the company that is being promoted. The title is a heading element that
 * contains the title of the company, and the subtitle is a paragraph element
 * that contains a short description of the company. The paragraph is a
 * paragraph element that contains a longer description of the company, and the
 * call-to-action button is a button that links to a form where users can
 * request more information.
 *
 * The graphics are a set of shapes that are used to create a visual interest
 * and to separate the different sections of the component. The particle
 * background is a set of particles that are animated to move around the
 * component, creating a sense of movement and energy.
 *
 * @returns {JSX.Element} The hero section component.
 */
export default function NewHeroSection() {
    return (
        <div dir="rtl" className="flex w-full flex-col items-center justify-between  sm:pb-8 sm:pt-8">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className={cn(
                            'container relative mx-auto w-full max-w-7xl rounded-3xl px-4 sm:my-8 sm:px-6 md:px-8 '
                        )}
                    >
                        <div>
                            <h1
                                style={{ wordSpacing: '0.5rem' }}
                                className="mb-4 mt-6 px-6 text-center text-xl font-medium tracking-tight text-gray-50 sm:mb-6 md:text-3xl md:leading-[50px] xl:text-5xl"
                            >
                                {'السلاح السري الذي يجعل EV سهلاً بشكل خطير…'}
                            </h1>
                            <div className="mb-4 flex items-center justify-center">
                                <Image src={MyIcon} width={1200} alt={'Logo'} />
                            </div>
                            <div className={cairo.className}>
                                <p className="relative mb-3 mt-4 inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text px-8 text-sm font-extrabold uppercase leading-6 tracking-normal text-transparent lg:pb-6 lg:text-2xl">
                                    لنكن واقعيين.
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl lg:leading-10">
                                    التجارة الإلكترونية أصبحت أكثر تحديًا من أي وقت مضى بسبب ازدحام الأسواق والارتفاع
                                    المستمر في تكاليف الإعلانات، مما يؤدي إلى خسارة 70% من البائعين—سواء بسبب منتجات
                                    مشبعة، خدمات غير موثوقة، أو التكاليف المرتفعة للحصول على العملاء.
                                </p>
                                <p className="relative mb-3 mt-4 inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text px-8 text-sm font-extrabold uppercase leading-6 tracking-normal text-transparent lg:pb-6 lg:text-2xl">
                                    لكن، ماذا لو كانت هناك طريقة تناسب الجميع؟
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl lg:leading-10">
                                    في العام الماضي، اكتشفت أن الأشخاص الأكثر نجاحًا في التجارة الإلكترونية لم يتبعوا
                                    الطرق التقليدية، بل اعتمدوا على أساليب مبتكرة ومختلفة.
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl lg:leading-10">
                                    الدفع عند الاستلام (COD) في أوروبا هو من بين أكثر النماذج التجارية ربحية وقابلية
                                    للتوسع في عام 2025، ويُعد بالفعل صناعة بمليارات الدولارات.
                                </p>
                                <p className="relative mb-3 mt-4 inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text px-8 text-sm font-extrabold uppercase leading-6 tracking-normal text-transparent lg:pb-6 lg:text-2xl">
                                    نحن هنا لنساعدك على النجاح:
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl">
                                    نوفر لك منتجًا رابحًا مضمونًا من بين 5 منتجات تم اختبارها بعناية.
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl">
                                    نستند إلى بيانات حصرية من شركائنا الصينيين الذين يقدمون أحدث المنتجات الرائجة.
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl">
                                    نقدم أقل تكاليف للتنفيذ تبدأ من 3 يوروهات فقط مع معدل تأكيد يصل إلى 90%.
                                </p>
                                <p className="relative mb-3 mt-4 inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text px-8 text-sm font-extrabold uppercase leading-6 tracking-normal text-transparent lg:pb-6 lg:text-2xl">
                                    لماذا نفعل هذا؟
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl lg:leading-10">
                                    لأننا نؤمن بأن نجاحك هو استثمارنا الأكبر. عندما تحقق النجاح، فإنك لا تحقق أرباحًا
                                    فقط لنفسك، بل تصبح جزءًا من نجاحنا المستمر. نحن هنا لنضمن أنك تعمل دائمًا بأحدث
                                    الاستراتيجيات والتحديثات التي تضعك في الصدارة.{' '}
                                </p>
                                <p className="mb-3 mt-6 px-8 text-sm tracking-normal text-gray-300 lg:text-2xl lg:leading-10">
                                    ومع كل خطوة تتقدم بها وتحقق أرباحًا، نضمن لك استمرارية النجاح والربحية، مما يجعل
                                    شراكتنا ليست فقط قصيرة المدى، بل علاقة طويلة الأمد قائمة على الثقة والنتائج. نجاحك
                                    هو نجاحنا، وهدفنا أن نبني معًا مستقبلًا مليئًا بالفرص والأرباح المتجددة.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
