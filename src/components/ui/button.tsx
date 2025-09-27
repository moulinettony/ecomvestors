import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95',
    ],
    {
        variants: {
            variant: {
                default:
                    'border border-blue-500 bg-white font-bold text-blue-500 shadow-2xl shadow-blue-500/50 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100',
                secondary:
                    'border border-white bg-blue-700 font-bold text-white shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500',
                outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-blue underline-offset-4 hover:underline',
                green: 'border border-white bg-green-600 font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:bg-green-700',
            },
            size: {
                default: 'h-10 px-4 py-2',
                xs: 'h-7 rounded-md px-2',
                sm: 'h-9 rounded-md px-3',
                md: 'h-10 rounded-md px-4',
                lg: 'h-11 rounded-md px-8',
                xl: 'h-12 rounded-md px-16',
                icon: 'size-10',
            },
            shape: {
                round: 'rounded-xl',
                pill: 'rounded-full',
                square: 'rounded-none',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return <Comp className={cn(buttonVariants({ variant, size, shape, className }))} ref={ref} {...props} />
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
