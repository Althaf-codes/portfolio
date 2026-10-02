import Image from 'next/image';
import s from './media.module.css';

export function HuntVisual(){return <div className={s.huntMedia}><Image src="/projects/huntiq/product.png" width={1536} height={1024} alt="HuntIQ product artwork: job-search dashboard, application automation, AI documents, tracking and referrals" sizes="(max-width:760px) 92vw, 900px"/></div>}
