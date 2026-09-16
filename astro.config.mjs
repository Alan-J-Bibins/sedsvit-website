import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'THUNDER',
            cssVariable: '--font-thunder',
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-LC.ttf'],
                        weight: 'normal',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-LCItalic.ttf'],
                        weight: 'normal',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-ThinLC.ttf'],
                        weight: '100',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-ThinLCItalic.ttf'],
                        weight: '100',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-ExtraLightLC.ttf'],
                        weight: '200',
                        style: 'normal',
                    },
                    {
                        src: [
                            './src/assets/fonts/THUNDER/OpenType-TT/Thunder-ExtraLightLCItalic.ttf',
                        ],
                        weight: '200',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-LightLC.ttf'],
                        weight: '300',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-LightLCItalic.ttf'],
                        weight: '300',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-MediumLC.ttf'],
                        weight: '500',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-MediumLCItalic.ttf'],
                        weight: '500',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-SemiBoldLC.ttf'],
                        weight: '600',
                        style: 'normal',
                    },
                    {
                        src: [
                            './src/assets/fonts/THUNDER/OpenType-TT/Thunder-SemiBoldLCItalic.ttf',
                        ],
                        weight: '600',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-BoldLC.ttf'],
                        weight: '700',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-BoldLCItalic.ttf'],
                        weight: '700',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-ExtraBoldLC.ttf'],
                        weight: '800',
                        style: 'normal',
                    },
                    {
                        src: [
                            './src/assets/fonts/THUNDER/OpenType-TT/Thunder-ExtraBoldLCItalic.ttf',
                        ],
                        weight: '800',
                        style: 'italic',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-BlackLC.ttf'],
                        weight: '900',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/THUNDER/OpenType-TT/Thunder-BlackLCItalic.ttf'],
                        weight: '900',
                        style: 'italic',
                    },
                ],
            },
        },
    ],
});
