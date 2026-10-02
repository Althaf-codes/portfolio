import type {MetadataRoute} from 'next';
import {site} from '@/data/site';
import {projects} from '@/data/projects';
export default function sitemap():MetadataRoute.Sitemap{return site.url?['','/work',...projects.map(p=>`/work/${p.slug}`)].map(path=>({url:`${site.url}${path}`})):[]}
