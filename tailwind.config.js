module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,jsx}',
    './src/**/*.html',
    './src/**/*.jsx',
    './*.js'
  ],
    theme: {
        // colors: colors,
        fontFamily: {
            sans: ['var(--font-sans)'],
            ivymode: ['ivymode'],
            georgia: ['Georgia Pro', 'serif'],
            verdana: ['Verdana', 'sans-serif']
        },
        screens: {
            'xsm': '552px',
            // => @media (min-width: 640px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '769px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '2xlmx': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xlmx': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lgmx': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'mdmx': { 'max': '768px' },
            // => @media (max-width: 767px) { ... }

            'smmx': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: []
};
