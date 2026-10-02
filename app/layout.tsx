import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/data/site';
import './globals.css';
const sans = localFont({src:'../public/fonts/Manrope.ttf',variable:'--font-sans',display:'swap'});
const serif = localFont({src:'../public/fonts/InstrumentSerif-Italic.ttf',variable:'--font-serif',display:'swap',weight:'400',style:'italic'});
export const metadata: Metadata = {title:{default:'Althafar Ali — Product Engineer | Flutter & Full Stack',template:'%s | Althafar Ali'},description:site.description,...(site.url ? {metadataBase:new URL(site.url)} : {}),robots:site.url ? {index:true,follow:true} : {index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><Navigation/>{children}<Footer/></body></html>}
