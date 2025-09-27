'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { handleSubmit } from '@/actions/handle-submit'
import { useRouter } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google'

export const FormSchema = z.object({
    fullName: z.string().min(3, { message: 'الاسم الكامل مطلوب.' }),
    phoneNumber: z
        .string()
        .min(10, { message: 'رقم الهاتف مطلوب.' })
        .regex(/^\+?1?\d{9,15}$/, 'رقم الهاتف غير صالح.'),
    whereDidYouHear: z.enum(['INSTAGRAM', 'OLD CLIENT', 'SOMEWHERE ELSE'], {
        required_error: 'يجب عليك اختيار مصدر.',
    }),
    experienceInEcom: z.enum(['YES', 'NO'], { required_error: 'يجب عليك اختيار خيار.' }),
    budgetRange: z.enum(['1K$ TO 2.5K$', '2.5K$ TO 5K$', '+5K$'], { required_error: 'يجب عليك اختيار نطاق.' }),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: 'يجب عليك قبول الشروط والأحكام.',
    }),
})

export default function ContactForm() {
    const router = useRouter()
    const [isLoading, setLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullName: '',
            phoneNumber: '',
            whereDidYouHear: 'INSTAGRAM',
            experienceInEcom: 'NO',
            budgetRange: '1K$ TO 2.5K$',
            termsAccepted: false,
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setLoading(true)
            const response = await handleSubmit(data)

            if (response.status === 'success') {
                form.reset()
                sendGTMEvent({ event: 'user_submitted_form', value: 'xyz' })
                toast.success('تم إرسال طلبك بنجاح.')
                router.push('/thank-you')
            } else {
                return toast.error(response.message || 'حدث خطأ أثناء إرسال طلبك.')
            }
        } catch (err: any) {
            console.error('Error sending email:', err)
            toast.error('حدث خطأ أثناء إرسال طلبك.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <div dir="rtl" className="w-full py-12 sm:py-16" id="form">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
                    <div className="max-w-md">
                        <div className="mb-8 flex justify-start">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                                قدم طلبك فقط إذا كنت مستعدًا للبدء وتمتلك رأس المال الكافي كما هو موضح في الخيارات
                            </div>
                        </div>
                        <div className="text-start">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                                ابدأ رحلتك معنا الآن
                            </h1>
                            <p className="mt-6 text-base leading-8 text-gray-400">
                                أكمل النموذج الآن وابدأ رحلتك معنا في برنامج تدريب بنظام 2vs1، المصمم خصيصًا لضمان وصولك
                                إلى أول 1000 يورو يوميًا. إذا كنت تفي بمعاييرنا، سيتواصل معك أحد وكلائنا المخصصين بسرعة
                                لتتخذ الخطوة الأولى نحو فرصة تجارية واعدة في أوروبا.
                            </p>
                        </div>
                    </div>
                    <div role="display" className="relative z-10 flex h-auto w-full flex-col items-start justify-start">
                        <div className="w-full">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem className="flex w-full flex-col items-start justify-start gap-2">
                                                <FormLabel>الاسم الكامل</FormLabel>
                                                <FormControl>
                                                    <div
                                                        className={cn(
                                                            'flex w-full flex-1 flex-row items-stretch justify-start gap-2'
                                                        )}
                                                    >
                                                        <Input
                                                            placeholder="محمد العليمي"
                                                            type="text"
                                                            {...field}
                                                            className="w-full"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                                <FormDescription>
                                                    نحتاج إلى اسمك الكامل لنخاطبك بشكل صحيح.
                                                </FormDescription>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem className="flex w-full flex-col items-start justify-start gap-2">
                                                <FormLabel>رقم الهاتف</FormLabel>
                                                <FormControl>
                                                    <div
                                                        dir="ltr"
                                                        className={cn(
                                                            'flex w-full flex-1 flex-row items-stretch justify-start gap-2'
                                                        )}
                                                    >
                                                        <Input
                                                            placeholder="+212 XXX XXX XXX"
                                                            type="text"
                                                            {...field}
                                                            className="w-full"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                                <FormDescription>نحتاج إلى رقم هاتفك للتواصل معك.</FormDescription>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="whereDidYouHear"
                                        render={({ field }) => (
                                            <FormItem className="flex w-full flex-col items-start justify-start gap-2">
                                                <FormLabel>من أين سمعت عنا؟</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="INSTAGRAM" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                انستغرام
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="OLD CLIENT" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                توصية من عميل قديم
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="SOMEWHERE ELSE" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                مكان آخر
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="experienceInEcom"
                                        render={({ field }) => (
                                            <FormItem className="flex w-full flex-col items-start justify-start gap-2">
                                                <FormLabel>هل لديك خبرة في التجارة الإلكترونية؟</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="YES" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                نعم
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="NO" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                لا
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="budgetRange"
                                        render={({ field }) => (
                                            <FormItem className="flex w-full flex-col items-start justify-start gap-2">
                                                <FormLabel>ما هو نطاق ميزانيتك؟</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="1K$ TO 2.5K$" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                <span dir="ltr">2.5K$</span> من{' '}
                                                                <span dir="ltr">1K$</span> إلى{' '}
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="2.5K$ TO 5K$" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                <span dir="ltr">5K$</span> من{' '}
                                                                <span dir="ltr">2.5K$</span> إلى{' '}
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex flex-row-reverse items-center space-x-3 space-y-0 space-x-reverse">
                                                            <FormControl>
                                                                <RadioGroupItem value="+5K$" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal text-gray-400">
                                                                +5K$
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="termsAccepted"
                                        render={({ field }) => (
                                            <FormItem className="flex w-full flex-col items-start justify-start gap-2">
                                                <FormControl>
                                                    <div className="flex items-start gap-2">
                                                        <Input
                                                            type="checkbox"
                                                            checked={field.value}
                                                            onChange={(e) => field.onChange(e.target.checked)}
                                                            className="h-5 w-5"
                                                            id="termsAccepted"
                                                        />
                                                        <FormLabel
                                                            htmlFor="termsAccepted"
                                                            className="font-normal leading-5 text-gray-400"
                                                        >
                                                            أنا على يقين تام بأنني مستعد ولدي رأس المال الكافي، وأنتظر
                                                            مكالمة من فريق إيكومفستورس للحصول على المزيد من المعلومات.
                                                        </FormLabel>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex w-full flex-row items-center justify-end gap-2">
                                        <Button
                                            type="button"
                                            variant={'secondary'}
                                            shape={'pill'}
                                            onClick={() => form.reset()}
                                        >
                                            إعادة تعيين
                                        </Button>

                                        {isLoading && (
                                            <Button variant={'default'} shape={'pill'} type="button" disabled>
                                                <ReloadIcon className="mr-2 size-4 animate-spin" />
                                                يرجى الانتظار
                                            </Button>
                                        )}
                                        {!isLoading && (
                                            <Button type="submit" variant={'default'} shape={'pill'}>
                                                أرسل طلبك
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
