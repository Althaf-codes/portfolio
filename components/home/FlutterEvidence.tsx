'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion,useReducedMotion } from 'motion/react';
import { getProject } from '@/data/projects';
import s from './home.module.css';
const evidence=[{label:'State & Architecture',slug:'100xdev',title:'Room for complexity.',body:'I separate feature state, repositories and services to give a growing Flutter product clear boundaries.',tech:'BLOC / REPOSITORIES / SERVICES'},{label:'Real-Time',slug:'complete-chat',title:'Keep everyone in sync.',body:'Socket.IO events connect conversations, presence and receipts. MongoDB keeps the history.',tech:'SOCKET.IO / PROVIDER / REDIS'},{label:'Offline',slug:'100xdev',title:'Keep the content close.',body:'I cache blog records with Hive so reading can continue beyond a successful network request.',tech:'HIVE / LOCAL PERSISTENCE'},{label:'Media',slug:'video-on-demand',title:'From pipeline to playback.',body:'A Flutter viewing experience connects to HLS media produced by an AWS processing pipeline.',tech:'HLS / BLOC / AWS'},{label:'Specialized Interfaces',slug:'dental',title:'Built around the task.',body:'A custom tooth interface turns a specialized dental-record workflow into a direct visual interaction.',tech:'CUSTOM WIDGETS / PROVIDER'},{label:'Hardware / Devices',slug:'vehicle-monitoring',title:'Beyond the touchscreen.',body:'A Flutter application connects an Arduino prototype, vehicle telemetry and location information.',tech:'ARDUINO / FIREBASE / MAPS'}];
const webEvidence=[
  {label:'Product & Full Stack',slug:'huntiq',title:'Across the whole product.',body:'I built HuntIQ across a Chrome extension, web experience and Fastify backend, connecting candidate workflows with product services.',tech:'FASTIFY / POSTGRESQL / REDIS'},
  {label:'AI & Automation',slug:'huntiq',title:'Less repetitive work.',body:'I connected application automation with job analysis, profile-aware answers and tailored application material.',tech:'BROWSER AUTOMATION / GEMINI / OPENAI / CLAUDE'},
  {label:'Content & Architecture',slug:'dodo-documentation',title:'A system for finding answers.',body:'I connected MDX content, generated navigation and OpenAPI reference rendering in a React documentation frontend.',tech:'REACT / TYPESCRIPT / MDX / OPENAPI'},
  {label:'Search & Navigation',slug:'dodo-documentation',title:'The next useful page.',body:'I integrated MiniSearch with a generated index and a keyboard-accessible search dialog across documentation and API pages.',tech:'MINISEARCH / CONTENT INDEXING'},
  {label:'Interactive Media',slug:'alba-cars',title:'A closer look, on demand.',body:'I built a 72-frame exterior viewer with pointer and keyboard controls, loading nearby frames progressively after activation.',tech:'POINTER EVENTS / WEBP / PROGRESSIVE LOADING'},
  {label:'Product Infrastructure',slug:'huntiq',title:'The services behind access.',body:'I built authentication, trials, payments, entitlements and usage tracking as shared services for the extension and web experience.',tech:'AUTH / PAYMENTS / ENTITLEMENTS'},
];
export function FlutterEvidence(){
  const[mode,setMode]=useState<'flutter'|'web'>('flutter');
  const[index,setIndex]=useState(0);const reduced=useReducedMotion();
  const items=mode==='flutter'?evidence:webEvidence;
  const current=items[index];const project=getProject(current.slug)!;
  const media=project.slug==='100xdev'?project.media[1]:project.media[mode==='web'&&index===3?1:0];
  return <section id="engineering" className={`container ${s.flutter}`}>
    <span id="flutter" className={s.legacyAnchor} aria-hidden="true"/>
    <div className="eyebrow">DEPTH, NOT JUST A TECH STACK</div>
    <div data-scroll-reveal className={s.capabilityHeading}><h2>Engineering, under the surface.</h2><div className={s.modeToggle} role="group" aria-label="Engineering discipline">{(['flutter','web'] as const).map(value=><button key={value} aria-pressed={mode===value} onClick={()=>{setMode(value);setIndex(0)}}>{value==='flutter'?'Flutter':'Web / Full Stack'}</button>)}</div></div>
    <div className={s.capabilityLayout}><div className={s.capabilityButtons} role="group" aria-label={`${mode==='flutter'?'Flutter':'Web'} engineering capabilities`}>{items.map((e,i)=><button key={e.label} aria-pressed={i===index} aria-controls="engineering-evidence" onClick={()=>setIndex(i)}><span><small>0{i+1}</small>{e.label}</span></button>)}</div>
      <motion.div key={`${mode}-${index}`} id="engineering-evidence" className={`${s.capabilityStage} ${mode==='web'?s.webStage:''}`} initial={reduced?false:{y:8}} animate={{opacity:1,y:0}} transition={{duration:.3}}>
        <div>{media&&<Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes={mode==='web'?'(max-width:760px) 85vw, 650px':'(max-width:760px) 40vw, 300px'}/>}</div>
        <div aria-live="polite"><span className="eyebrow">{project.shortTitle}</span><h3>{current.title}</h3><p>{current.body}</p><small>{current.tech}</small><Link className="text-link" href={`/work/${project.slug}`}>Explore the project </Link></div>
      </motion.div>
    </div>
  </section>
}

