/**
 * NextJS uses localFont to access fonts from your projects
 * that are not in the google font library.
 * Neue Machina is an imported font.
 */

import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

const neue = localFont({ src: './PPNeueMachina-PlainRegular.otf' });

export { neue, plusJakartaSans };
