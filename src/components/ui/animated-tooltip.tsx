'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export const AnimatedTooltip = ({
    items,
}: {
    items: Array<{
        id: number
        name: string
        designation: string
        image: string
        showTooltip?: boolean
    }>
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const springConfig = { stiffness: 100, damping: 5 }
    const x = useMotionValue(0) // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
    // translate the tooltip
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2
        x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
    }

    return (
        <>
            {items.map((item) => (
                <div
                    className="group  relative -mr-4"
                    key={item.name}
                    onMouseEnter={() => {
                        setHoveredIndex(item.id)
                    }}
                    onMouseLeave={() => {
                        setHoveredIndex(null)
                    }}
                >
                    <AnimatePresence mode="wait">
                        {item.showTooltip && hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX,
                                    rotate,
                                    whiteSpace: 'nowrap',
                                }}
                                className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-xs shadow-xl"
                            >
                                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-1/5 bg-gradient-to-r from-transparent via-blue-500 to-transparent " />
                                <div className="absolute -bottom-px left-10 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent " />
                                <div className="relative z-30 text-sm font-bold text-white">{item.name}</div>
                                <div className="text-xs text-gray-500">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Avatar
                        className="border-heather-100 relative !m-0 size-12 rounded-full border-2 !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
                        onMouseMove={handleMouseMove}
                    >
                        <AvatarImage src={item.image} alt={item.name} className="object-cover object-top" asChild>
                            <Image src={item.image} alt={item.name} width={48} height={48} objectFit="cover" />
                        </AvatarImage>
                        <AvatarFallback>{item.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
            ))}
        </>
    )
}
