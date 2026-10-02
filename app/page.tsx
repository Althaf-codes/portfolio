import type { Metadata } from 'next';
import { Home } from '@/components/home/Home';
import { site } from '@/data/site';
export const metadata:Metadata={alternates:site.url?{canonical:site.url}:undefined};
export default function Page(){return <main id="main"><Home/></main>}
