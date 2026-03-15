import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: '#040612',
        bgLayer: '#0A1022',
        textStrong: '#F3F7FF',
        textSoft: '#B8C2E0',
        accentCyan: '#67E8F9',
        accentBlue: '#38BDF8',
        accentViolet: '#8B5CF6',
        accentPurple: '#A78BFA',
      },
      boxShadow: {
        premium:
          '0 30px 80px -30px rgba(56, 189, 248, 0.55), 0 20px 40px -30px rgba(167, 139, 250, 0.7)',
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(circle at 80% 0%, rgba(103,232,249,0.12), transparent 30%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.1), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
