import{d as _,b as h,o as r,c,j as l,t as i,f as u,s as m,v as T,e as d,n as a,u as f,_ as k}from"./framework.CBd7paq1.js";const g=["href"],w=["href"],C=_({__name:"HyperLink",props:{text:{},href:{},sameTab:{type:Boolean}},setup(t){const o=t,s=h(()=>o.text??"");return(e,n)=>o.sameTab?(r(),c("a",{key:0,href:e.href},[l(i(s.value),1),u(e.$slots,"default")],8,g)):(r(),c("a",{key:1,rel:"noopener",target:"_blank",href:e.href},[l(i(s.value),1),u(e.$slots,"default")],8,w))}});function G(t,o,s){let e=null;m(()=>{e=new ResizeObserver(t),t([]);const n=o();if(n){if(Array.isArray(n)){for(const p of n)p&&e.observe(p);return}e.observe(n)}}),T(()=>{e==null||e.disconnect()})}const B={page:{toc:"toc",subMenu:"subMenu",content:"content",root:"root"}},v="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20id='up-circle'%20class='icon%20glyph'%3e%3cpath%20d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,11.71a1,1,0,0,1-1.42,0L12,11.41l-2.29,2.3a1,1,0,0,1-1.42-1.42l3-3a1,1,0,0,1,1.42,0l3,3A1,1,0,0,1,15.71,13.71Z'%20style='fill:%2316643d'%3e%3c/path%3e%3c/svg%3e",y=["href"],$=["src"],b=_({__name:"BackTop",setup(t){return(o,s)=>(r(),c("div",{class:a(o.$style.BackToTop)},[d("a",{class:a(o.$style.BackToTop_link),href:`#${f(B).page.root}`},[d("img",{alt:"upward arrow",class:a(o.$style.Arrow),src:f(v)},null,10,$),s[0]||(s[0]=l("Back to top"))],10,y)],2))}}),x="g",M="h",A="i",R={BackToTop:x,BackToTop_link:M,Arrow:A},S={$style:R},z=k(b,[["__cssModules",S]]);export{z as B,C as _,B as a,G as u};
