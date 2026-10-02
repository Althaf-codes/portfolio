import { ProjectExplorer } from '@/components/projects/ProjectExplorer';
import { site } from '@/data/site';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Selected work',description:'Explore Flutter applications, full-stack products, AI automation and frontend engineering by Althafar Ali.',alternates:site.url?{canonical:`${site.url}/work`}:undefined};
export default function Work(){return <main id="main" className="container" style={{paddingBottom:100}}><div className="page-intro"><span className="eyebrow">THE PROJECT INDEX</span><h1>Different challenges.<br/><em>The same curiosity.</em></h1><p>Products, systems and considered experiments. Explore the work through the kind of engineering that interests you.</p></div><ProjectExplorer/></main>}
