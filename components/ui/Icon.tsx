type IconName = 'mail' | 'download' | 'external' | 'chevron';
export function Icon({name}:{name:IconName}) {
  return <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {name==='mail'?<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>:name==='download'?<><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/></>:name==='external'?<><path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/></>:<path d="m9 5 7 7-7 7"/>}
  </svg>;
}
