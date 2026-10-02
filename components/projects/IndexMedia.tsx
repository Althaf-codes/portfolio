import Image from 'next/image';
import type { Project } from '@/types/project';
import s from './index-media.module.css';

// Presentation belongs to the index; flagship and case-study imagery stay independent.
export function IndexMedia({project,mobile=false}:{project:Project;mobile?:boolean}){
  const media=project.slug==='complete-chat'&&mobile?project.media[1]:project.media[0];
  if(!media)return <div className="empty-media"><strong>{project.shortTitle}</strong><span>{project.capabilities.join(' / ')}</span></div>;
  const phone=media.height>media.width;
  const framed=['dental','pharmacy','snkr'].includes(project.slug);
  const desktop=project.slug==='complete-chat'&&!mobile;
  return <div className={`${s.stage} ${phone?s.portrait:s.landscape} ${project.slug==='video-on-demand'?s.cinema:''}`}>
    <div className={`${s.device} ${phone?(framed?s.existingPhone:s.phone):desktop?s.window:s.artwork}`}>
      {desktop&&<div className={s.windowBar} aria-hidden="true"><span/><span/><span/><small>Complete Chat</small></div>}
      <Image src={media.src} alt={mobile?'':media.alt} width={media.width} height={media.height} unoptimized={framed} sizes={phone?'(max-width:760px) 65vw, 280px':'(max-width:760px) 85vw, 600px'}/>
    </div>
  </div>;
}
