/* eslint-disable @typescript-eslint/ban-types */
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const radialGradientPlugin = plugin(
    function ({ matchUtilities, theme }: { matchUtilities: Function; theme: Function }) {
        matchUtilities(
            {
                // map to bg-radient-[*]
                'bg-radient': (value: string) => ({
                    'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
                }),
            },
            { values: theme('radialGradients') }
        )
    },
    {
        theme: {
            radialGradients: _presets(),
        },
    }
)

/**
 * utility class presets
 */
function _presets() {
    const shapes = ['circle', 'ellipse']
    const pos = {
        c: 'center',
        t: 'top',
        b: 'bottom',
        l: 'left',
        r: 'right',
        tl: 'top left',
        tr: 'top right',
        bl: 'bottom left',
        br: 'bottom right',
    }
    const result: Record<string, string> = {}
    for (const shape of shapes)
        for (const [posName, posValue] of Object.entries(pos)) result[`${shape}-${posName}`] = `${shape} at ${posValue}`

    return result
}

const config: Config = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    corePlugins: {
        aspectRatio: true,
    },
    plugins: [
        function ({ addBase, theme }: { addBase: Function; theme: Function }) {
            function extractColorVars(colorObj: Record<string, any>, colorGroup = ''): Record<string, string> {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey]
                    const cssVariable =
                        colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`

                    const newVars =
                        typeof value === 'string' ? { [cssVariable]: value } : extractColorVars(value, `-${colorKey}`)

                    return { ...vars, ...newVars }
                }, {})
            }

            addBase({
                ':root': extractColorVars(theme('colors')),
            })
        },
        radialGradientPlugin,
        'prettier-plugin-tailwindcss',
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
    ],
}

export default config
