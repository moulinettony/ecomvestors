import { people } from '@/app/components/hero-section'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import React from 'react'
import { Cairo } from 'next/font/google'
import { cn } from '@/lib/utils'

const CairoFont = Cairo({
    display: 'swap',
    subsets: ['arabic'],
})

export default function Question() {
    return (
        <div
            dir="rtl"
            className="container relative mt-20 flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-4 text-center sm:px-6 md:px-8"
        >
            <div className="flex w-full flex-row items-center justify-center">
                <AnimatedTooltip items={people} />
            </div>
            <p className={cn('max-w-md text-sm text-gray-400', CairoFont.className)} dir="rtl">
                في سوق تبلغ قيمته 717+ مليار يورو، ألا يمكنك حتى التمتع بشريحة من 1000 دولار في اليوم؟ نحن أول برنامج
                مدفوع بربح مضمون من خلال عقد قانوني. بالإضافة إلى ذلك، نتولى كل شيء من المنتجات إلى الشحن وتحويل الأموال
                - كل شيء يتم العناية به من أجلك.
            </p>
        </div>
    )
}
