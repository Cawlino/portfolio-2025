import { useState } from 'react';
export default function Navbar() {
 const [open,setOpen]=useState(false);
 return <header className="site-header"><a href="#hero" className="brand">Daniel Barrionuevo<span>Desenvolvedor full stack</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>Menu</button><nav id="navigation" className={open?'navigation open':'navigation'}>{[['Início','hero'],['Projetos','projects'],['Competências','skills'],['Trajetória','experience']].map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}<a href="mailto:danielbgomes11@gmail.com">Vamos conversar ↗</a></nav></header>;
}
