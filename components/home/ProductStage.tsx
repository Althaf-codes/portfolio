'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useId, useRef, useState } from 'react';
import s from './home.module.css';
export function ProductStage({hero=false}:{hero?:boolean}) {
  const ref=useRef<HTMLDivElement>(null),id=useId();
  const [opened,setOpened]=useState(false);
  const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const leftY=useTransform(scrollYProgress,[0,.5,1],hero?[12,0,-8]:[38,0,-18]);
  const rightY=useTransform(scrollYProgress,[0,.5,1],hero?[16,4,-6]:[60,12,-10]);
  return <div ref={ref} className={hero?s.heroStage:s.productStage}>
    <div className={s.stageTop}><span>100xDev / PRODUCT STUDY</span><span>FLUTTER + FULL STACK</span></div>
    <div className={s.deviceComposition}>
      <motion.div className={`${s.sideDevice} ${s.learningDevice}`} style={reduced?undefined:{y:leftY}}>
        <div className={s.screenCrop}><Image src="/projects/100xdev/original.png" width={550} height={453} alt="100xDev course curriculum and learning content" sizes="700px" /></div><span>01 / LEARN</span>
      </motion.div>
      <motion.div className={s.mainDevice} animate={{y:opened?-12:0}} transition={{duration:reduced?0:.6,ease:[.22,1,.36,1]}}>
        <Image src="/projects/100xdev/home.png" width={459} height={864} alt="100xDev learning home with courses and developer content" priority={hero} sizes="(max-width:760px) 52vw, 320px"/>{!hero&&<span>02 / DISCOVER</span>}
      </motion.div>
      <motion.div className={`${s.sideDevice} ${s.launchDevice}`} style={reduced?undefined:{y:rightY}}>
        <div className={s.screenCrop}><Image src="/projects/100xdev/original.png" width={550} height={453} alt="100xDev Launchpad with developer projects, categories and upvotes" sizes="700px"/></div><span>03 / BUILD</span>
      </motion.div>
    </div>
    {!hero&&<><button className={s.revealButton} aria-expanded={opened} aria-controls={id} onClick={()=>setOpened(!opened)}>{opened?'Return to the interface':'Reveal the engineering'} <span aria-hidden="true">{opened?'↑':'↓'}</span></button><motion.div id={id} className={s.systemReveal} initial={false} animate={{height:opened?'auto':0,opacity:opened?1:0}} transition={{duration:reduced?0:.45}} inert={!opened}><div><span>CLIENT</span><strong>Flutter + Bloc</strong><small>Interface & application state</small></div><div><span>SERVICES</span><strong>Node.js + Socket.IO</strong><small>Product APIs & real-time events</small></div><div><span>DATA</span><strong>PostgreSQL + Redis</strong><small>Persistent data & caching</small></div></motion.div></>}
    {hero&&<a href="#huntiq" className={s.huntTeaser}><span><small>ALSO BEHIND THE INTERFACE</small><strong>HuntIQ <span>AI workflows, from browser to backend.</span></strong></span></a>}
  </div>;
}

