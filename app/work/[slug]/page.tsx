import { projects,getProject } from '@/data/projects';
import { site } from '@/data/site';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ProductStage } from '@/components/home/ProductStage';
import { HuntVisual } from '@/components/projects/HuntVisual';
import type { Metadata } from 'next';
import s from './case-study.module.css';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const p=getProject(slug);return p?{title:p.title,description:p.summary,alternates:site.url?{canonical:`${site.url}/work/${slug}`} : undefined}:{};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const{slug}=await params;const p=getProject(slug);if(!p)notFound();
  const next=projects[(projects.indexOf(p)+1)%projects.length];
  const hero=p.media[0];const isWide=hero&&hero.width>hero.height;
  return <main id="main" className={p.slug==='video-on-demand'?s.cinematic:undefined}>
    <header className={`container ${s.hero}`}>
      <div className={s.topline}><Link className="eyebrow" href="/work">← ALL WORK</Link><span className="eyebrow">{p.projectType} / {String(p.archiveOrder).padStart(2,'0')}</span></div>
      <h1>{p.title}</h1><p className={s.positioning}>{p.subtitle}</p>
      <div className={s.heroBottom}><p>{p.description}</p><div className={s.meta}><div><span className="eyebrow">MY ROLE</span><span>{p.role}</span></div><div><span className="eyebrow">FOCUS</span><span>{p.capabilities.slice(0,2).join(' · ')}</span></div></div></div>
      {p.links.length>0&&<div className={s.links}>{p.links.map(l=><a className="text-link" key={l.href} href={l.href}>{l.label} </a>)}</div>}
    </header>
    <div className={`container ${s.openingMedia}`}>
      {slug==='100xdev'?<ProductStage/>:slug==='huntiq'?<HuntVisual/>:hero?<figure className={`${s.heroMedia} ${isWide?s.wide:s.portrait}`}><Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} sizes={isWide?'(max-width:760px) 90vw, 1200px':'(max-width:760px) 75vw, 420px'} priority/>{!isWide&&p.media[1]&&<Image src={p.media[1].src} alt={p.media[1].alt} width={p.media[1].width} height={p.media[1].height} sizes="(max-width:760px) 45vw, 350px"/>}</figure>:<div className={s.typeStudy}><span className="eyebrow">{p.stack[0]} / {p.projectType}</span><p>{p.subtitle}</p><span>{p.capabilities.join(' · ')}</span></div>}
    </div>
    <section className={`container ${s.introduction}`}><div><span className="eyebrow">01 / THE IDEA</span><h2>{slug==='huntiq'?'Connecting a fragmented search.':slug==='100xdev'?'Learning, with somewhere to go next.':'Why I built it.'}</h2></div><p>{p.caseStudy.context}</p></section>
    {p.caseStudy.flow&&<section className={`container ${s.system}`} aria-labelledby="system-heading"><div className={s.sectionLabel}><h2 id="system-heading">Behind the interface</h2><span className="eyebrow">SYSTEM OVERVIEW</span></div><ol>{p.caseStudy.flow.map((step,i)=><li key={step.label}><span className="eyebrow">0{i+1}</span><h3>{step.label}</h3><p>{step.detail}</p></li>)}</ol></section>}
    <section className={`container ${s.story}`}><div className={s.storyAside}><span className="eyebrow">02 / ENGINEERING THE EXPERIENCE</span><h2>The decisions<br/>inside the product.</h2><p>{p.stack.join(' · ')}</p></div><div className={s.chapters}>{p.caseStudy.architecture.map((a,i)=><article key={a.title}><span className="eyebrow">{String(i+1).padStart(2,'0')}</span><h3>{a.title}</h3><p>{a.detail}</p></article>)}</div></section>
    {isWide&&p.media[1]&&<section className={`container ${s.gallery}`}><figure><Image src={p.media[1].src} alt={p.media[1].alt} width={p.media[1].width} height={p.media[1].height} sizes="(max-width:760px) 90vw, 1150px"/><figcaption>{p.media[1].caption}</figcaption></figure></section>}
    {p.caseStudy.reflection&&<section className={`container ${s.reflection}`}><span className="eyebrow">03 / LOOKING BACK</span><h2>What I take forward.</h2><p>{p.caseStudy.reflection}</p></section>}
    {p.ownership&&<p className={`container ${s.credit}`}>{p.ownership}</p>}
    <section className={`container ${s.next}`}><span className="eyebrow">NEXT PROJECT</span><Link href={`/work/${next.slug}`}><h2>{next.shortTitle}</h2></Link><p>{next.subtitle}</p></section>
  </main>
}
