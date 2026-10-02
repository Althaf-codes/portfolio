'use client';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IndexMedia } from './IndexMedia';
import { Icon } from '@/components/ui/Icon';
import { projects,uiStudies } from '@/data/projects';
import { categories,type Category } from '@/types/project';
import s from './explorer.module.css';
export function ProjectExplorer(){
  const[category,setCategory]=useState<Category>('All');const[active,setActive]=useState('huntiq');
  useEffect(()=>{const sync=()=>{const value=new URLSearchParams(window.location.search).get('category');setCategory(categories.includes(value as Category)?value as Category:'All')};sync();window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync)},[]);
  const filtered=projects.filter(p=>category==='All'||p.categories.includes(category));const preview=filtered.find(p=>p.slug===active)||filtered[0];
  function select(value:Category){setCategory(value);const url=new URL(window.location.href);if(value==='All')url.searchParams.delete('category');else url.searchParams.set('category',value);window.history.pushState(null,'',url)}
  return <div>
    <div className={s.filters} role="group" aria-label="Filter projects">{categories.map(c=><button key={c} aria-pressed={c===category} onClick={()=>select(c)}>{c}</button>)}</div>
    <p className={s.count} aria-live="polite">{filtered.length} projects · {category}</p>
    <div className={s.layout}><div className={s.rows}>{filtered.map((p,i)=>{
      const demo=p.links.find(link=>link.label==='Live demo');
      return <article key={p.slug} className={s.row} onMouseEnter={()=>setActive(p.slug)} onFocus={()=>setActive(p.slug)}>
        <span className={s.number}>{String(i+1).padStart(2,'0')}</span><div>
          <Link href={`/work/${p.slug}`} className={s.projectLink}>{p.media[0]&&<div className={s.mobilePreview}><IndexMedia project={p} mobile/></div>}<h3>{p.shortTitle}</h3></Link>
          <p>{p.summary}</p><small>{p.capabilities.slice(0,2).join(' / ')} · {p.projectType}</small>
          {demo&&<a className={s.demoLink} href={demo.href} target="_blank" rel="noopener noreferrer" aria-label={`Live demo: ${p.shortTitle}`}>Live demo <Icon name="external"/></a>}
        </div>
      </article>;
    })}</div>
    <aside className={s.preview} aria-label="Project preview"><div className={s.previewCanvas}><IndexMedia key={preview.slug} project={preview}/></div><span className="eyebrow">{preview.status}</span><h3>{preview.shortTitle}</h3><p>{preview.subtitle}</p><Link className="text-link" href={`/work/${preview.slug}`}>Explore project</Link></aside></div>
    {(category==='All'||category==='Flutter / Mobile')&&<section className={s.studies} aria-labelledby="ui-studies-title"><div className={s.studiesHeading}><div><span className="eyebrow">SMALLER EXPLORATIONS</span><h3 id="ui-studies-title">UI studies</h3></div><p>Short Flutter interface projects, ready to explore in your browser.</p></div><div className={s.studyGrid}>{uiStudies.map(study=><article key={study.slug}><a href={study.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo: ${study.title}`}><div className={s.studyImage}><Image src={study.image} alt={`${study.title} interface from the live Flutter demo`} width={300} height={650} sizes="(max-width:760px) 180px, 220px"/></div><div className={s.studyTitle}><h4>{study.title}</h4><Icon name="external"/></div><p>{study.summary}</p><span className={s.studyAction}>View demo</span></a></article>)}</div></section>}
  </div>
}
