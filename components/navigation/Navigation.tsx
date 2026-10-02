'use client';
import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/data/site';
export function Navigation(){const [open,setOpen]=useState(false);return <header className="navigation"><Link href="/" className="wordmark" aria-label="Althafar Ali home">althafar ali</Link><button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'−':'+'}</span></button><nav id="navigation-links" className={open?'nav-links is-open':'nav-links'} aria-label="Main navigation" onClick={()=>setOpen(false)}><Link href="/#work">Work</Link><Link href="/#engineering">Engineering</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link><span className="nav-divider"/><a href={site.github}>GitHub</a>{site.linkedin?<a href={site.linkedin}>LinkedIn</a>:null}{site.resume?<a href={site.resume} download>Resume</a>:<Link className="resume-link" href="/#contact">Request resume</Link>}</nav></header>}

