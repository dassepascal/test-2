/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50:  '#eff6ff',
                    100: '#dbeafe',
                    500: '#2563EB',
                    600: '#1D4ED8',
                    700: '#1e40af',
                },
                surface: {
                    DEFAULT: '#F8F9FA',
                },
                ink: {
                    DEFAULT: '#1A1A2E',
                    muted:   '#6B7280',
                },
                border: '#E5E7EB',
                success: '#10B981',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
