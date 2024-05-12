/**
 * NextJS uses localFont to access fonts from your projects
 * that are not in the google font library.
 * Neue Machina is an imported font.
 */

import localFont from "next/font/local"

const neue = localFont({ src: './PPNeueMachina-PlainRegular.otf'}) 

export { neue }