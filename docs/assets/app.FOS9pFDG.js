import{d as $,b as D,o as _,c as p,f as ue,n as c,_ as N,y as Me,z as Ie,r as m,A as ke,B as Le,C as qe,D as ne,E as Te,G as Xe,H as Ze,I as Ke,J as Qe,K as et,L as tt,M as nt,v as L,x as Q,N as ee,O as A,P as F,Q as J,m as _e,u as i,R as oe,e as h,i as I,w as E,j as se,t as G,F as O,h as V,p as T,g as C,S as st,T as we,U as ot,V as at,W as rt,X as it,Y as lt,Z as ie,$ as ct,a0 as ut,a1 as _t,a2 as dt,a3 as vt,a4 as pt,a5 as mt,a6 as ht,a7 as ft,a8 as gt,a9 as bt,aa as yt,ab as $t,ac as Nt,ad as Mt}from"./chunks/framework.oytdgtbb.js";import{a as B,u as Ce,_ as pe}from"./chunks/anchorIds.Dl3uL4l0.js";const It=$({__name:"LayoutNavItemText",props:{level:{},bold:{type:Boolean},compact:{type:Boolean}},setup(e){const t=e,s=D(()=>Math.round(Math.min(Math.max(t.level,0),2)));return(n,o)=>(_(),p("div",{class:c([n.$style.NavItem_text,s.value==0?n.$style.NavItem_text___level0:"",s.value==1?n.$style.NavItem_text___level1:"",s.value==2?n.$style.NavItem_text___level2:"",t.bold?n.$style.NavItem_text___active:"",t.compact?n.$style.NavItem_text___compact:""])},[ue(n.$slots,"default")],2))}}),kt="Bb",Lt="Cb",Tt="Db",wt="Eb",Ct="Fb",Ot="Gb",Ht="Hb",St={DarkMode:kt,NavItem_text:Lt,NavItem_text___active:Tt,NavItem_text___level0:wt,NavItem_text___level1:Ct,NavItem_text___level2:Ot,NavItem_text___compact:Ht},At={$style:St},Oe=N(It,[["__cssModules",At]]);/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let He;const ae=e=>He=e,Se=Symbol();function le(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var K;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(K||(K={}));function Pt(){const e=Ie(!0),t=e.run(()=>m({}));let s=[],n=[];const o=ke({install(a){ae(o),o._a=a,a.provide(Se,o),a.config.globalProperties.$pinia=o,n.forEach(r=>s.push(r)),n=[]},use(a){return!this._a&&!Ke?n.push(a):s.push(a),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return o}const Ae=()=>{};function me(e,t,s,n=Ae){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),n())};return!s&&et()&&tt(o),o}function z(e,...t){e.slice().forEach(s=>{s(...t)})}const Bt=e=>e();function ce(e,t){e instanceof Map&&t instanceof Map&&t.forEach((s,n)=>e.set(n,s)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],o=e[s];le(o)&&le(n)&&e.hasOwnProperty(s)&&!ne(n)&&!Te(n)?e[s]=ce(o,n):e[s]=n}return e}const Et=Symbol();function Gt(e){return!le(e)||!e.hasOwnProperty(Et)}const{assign:R}=Object;function xt(e){return!!(ne(e)&&e.effect)}function Rt(e,t,s,n){const{state:o,actions:a,getters:r}=t,u=s.state.value[e];let f;function d(){u||(s.state.value[e]=o?o():{});const l=nt(s.state.value[e]);return R(l,a,Object.keys(r||{}).reduce((M,b)=>(M[b]=ke(D(()=>{ae(s);const v=s._s.get(e);return r[b].call(v,v)})),M),{}))}return f=Pe(e,d,t,s,n,!0),f}function Pe(e,t,s={},n,o,a){let r;const u=R({actions:{}},s),f={deep:!0};let d,l,M=[],b=[],v;const P=n.state.value[e];!a&&!P&&(n.state.value[e]={}),m({});let te;function x(y){let g;d=l=!1,typeof y=="function"?(y(n.state.value[e]),g={type:K.patchFunction,storeId:e,events:v}):(ce(n.state.value[e],y),g={type:K.patchObject,payload:y,storeId:e,events:v});const S=te=Symbol();Qe().then(()=>{te===S&&(d=!0)}),l=!0,z(M,g,n.state.value[e])}const U=a?function(){const{state:g}=s,S=g?g():{};this.$patch(W=>{R(W,S)})}:Ae;function ve(){r.stop(),M=[],b=[],n._s.delete(e)}function ze(y,g){return function(){ae(n);const S=Array.from(arguments),W=[],X=[];function Je(w){W.push(w)}function Ue(w){X.push(w)}z(b,{args:S,name:y,store:H,after:Je,onError:Ue});let Z;try{Z=g.apply(this&&this.$id===e?this:H,S)}catch(w){throw z(X,w),w}return Z instanceof Promise?Z.then(w=>(z(W,w),w)).catch(w=>(z(X,w),Promise.reject(w))):(z(W,Z),Z)}}const Ye={_p:n,$id:e,$onAction:me.bind(null,b),$patch:x,$reset:U,$subscribe(y,g={}){const S=me(M,y,g.detached,()=>W()),W=r.run(()=>Le(()=>n.state.value[e],X=>{(g.flush==="sync"?l:d)&&y({storeId:e,type:K.direct,events:v},X)},R({},f,g)));return S},$dispose:ve},H=qe(Ye);n._s.set(e,H);const q=(n._a&&n._a.runWithContext||Bt)(()=>n._e.run(()=>(r=Ie()).run(t)));for(const y in q){const g=q[y];if(ne(g)&&!xt(g)||Te(g))a||(P&&Gt(g)&&(ne(g)?g.value=P[y]:ce(g,P[y])),n.state.value[e][y]=g);else if(typeof g=="function"){const S=ze(y,g);q[y]=S,u.actions[y]=g}}return R(H,q),R(Xe(H),q),Object.defineProperty(H,"$state",{get:()=>n.state.value[e],set:y=>{x(g=>{R(g,y)})}}),n._p.forEach(y=>{R(H,r.run(()=>y({store:H,app:n._a,pinia:n,options:u})))}),P&&a&&s.hydrate&&s.hydrate(H.$state,P),d=!0,l=!0,H}function Dt(e,t,s){let n,o;const a=typeof t=="function";typeof e=="string"?(n=e,o=a?s:t):(o=e,n=e.id);function r(u,f){const d=Ze();return u=u||(d?Me(Se,null):null),u&&ae(u),u=He,u._s.has(n)||(a?Pe(n,t,o,u):Rt(n,o,u)),u._s.get(n)}return r.$id=n,r}const Ft={height:480,width:720};function Wt(){function e(){const t=k();t.viewportSize.width=document.documentElement.clientWidth,t.viewportSize.height=document.documentElement.clientHeight}jt(e)}function jt(e){L(()=>{e(),window.addEventListener("resize",e,{passive:!0})}),Q(()=>{window.removeEventListener("resize",e)})}function Vt(){zt(()=>{const e=k();e.activeHeadingId=Yt()})}function zt(e){Q(()=>{window.removeEventListener("scroll",e)}),ee(()=>{e()}),L(()=>{window.addEventListener("scroll",e,{passive:!0}),A(e)})}function Yt(){const e=k(),t=Be(e.tocItems);return t?t.element.id:e.tocItems[0]?e.tocItems[0].element.id:""}function Be(e){const t=k();for(const s of e.slice().reverse()){const n=Be(s.children);if(n)return n;const o=s.element.getBoundingClientRect(),a=parseInt(window.getComputedStyle(s.element).marginTop);if(o.top<t.visibleAreaRectTop+a)return s}}function Jt(){const e=k();function t(){e.tocItems=Ut()}L(()=>A(t)),ee(t)}function Ut(){const e=k();if(!e.contentForToc)return[];const t=e.contentForToc.$el,s=Array.from(t.querySelectorAll("h1, h2, h3")).flatMap(r=>{var f;const u=(f=Array.from(r.childNodes).find(d=>d.nodeType==Node.TEXT_NODE&&d.textContent))==null?void 0:f.textContent;if(u){const d=qt(r.tagName);return d!=null?[{level:d,children:[],element:r,title:u.trim(),utilityHeading:!1}]:[]}else return console.error("Error while trying to build TOC from headings. Heading is missing a title",r),[]}),n=[];let o=0;for(;;){const{heading:r,index:u}=Ee(s,o,1);if(r)n.push(r),o=u;else break}const a=document.querySelector(`#${B.page.content}`);return a&&n.unshift({children:[],utilityHeading:!0,level:0,title:"(to beginning)",element:a}),n}function qt(e){const t=["H1","H2","H3","H4","H5","H6"].findIndex(s=>s==e);return t!=-1?t+1:(console.error(`Invalid heading tag: ${e}`),null)}function Ee(e,t,s){const n=e[t];if(!n||n.level<s)return{heading:null,index:t};for(t++;;){const{heading:o,index:a}=Ee(e,t,n.level+1);if(o)n.children.push(o),t=a;else break}return{heading:n,index:t}}function Xt(){const e=F(),t=k();L(()=>{A(()=>{e.path,t.isMobileNavPagesOpen=!1})}),ee(()=>{t.isMobileNavPagesOpen=!1})}const j=(e,t)=>{const s=/\.[^.]+$/;e=encodeURI(e.replace(s,"")),t=encodeURI(t.replace(s,""));const n={inside:!1,exact:!1};return t==e&&(n.exact=!0),e.slice(0,t.length)==t&&(n.inside=!0),n};function de(e){return e.url=="/"||!e.children?e:e.children[0]?de(e.children[0]):(console.error("Navitem has an empty children list:",e),{title:"Home",url:"/"})}function Zt(e){const t=F(),s=m(!1);function n(){s.value=j(t.path,e).exact}return ee(n),A(n),s}function Kt(){const e=k(),t=F(),{site:s}=J();L(()=>{A(()=>{var n;e.navMain=[{title:"Home",url:"/"}].concat(s.value.themeConfig.nav),e.navSecondary=((n=s.value.themeConfig.nav.find(o=>j(t.path,o.url).inside))==null?void 0:n.children)??[]})})}const k=Dt("counter",{state:()=>{const e=m(null),t=m(null),s=m(Ft),n=m([]),o=m(""),a=m(!1),r=m(!1),u=m([]),f=m([]),d=m(!1),l=m(!1);return{contentForToc:e,VisibleAreaMarker:t,viewportSize:s,tocItems:n,activeHeadingId:o,isViewportNarrow:d,isHeaderNavOverlapping:l,isMobileNavPagesOpen:a,isMobileNavTocOpen:r,navMain:u,navSecondary:f}},getters:{isCompactModeActive:e=>e.isHeaderNavOverlapping||e.isViewportNarrow,visibleAreaRectTop:e=>e.VisibleAreaMarker?e.VisibleAreaMarker.getBoundingClientRect().top:(console.log("Visible area marker was not initialized"),0),isMobileNavAnythingOpen:e=>e.isMobileNavPagesOpen||e.isMobileNavTocOpen}});function Qt(){const e=k();Wt(),Vt(),Jt(),Kt(),Xt();const t=function(n){e.isViewportNarrow=n.matches};let s=null;return L(()=>{s=matchMedia("screen and (width < 75em)"),s.addEventListener("change",t),e.isViewportNarrow=s.matches}),Q(()=>{s==null||s.removeEventListener("change",t)}),e}function Ge(e,t){Re(e)&&e.scrollIntoView({block:t})}const xe=.5;function he(e,t){return t-e>xe}function fe(e,t){return e-t>xe}function Re(e,t){if(!t){if(!e.parentElement)return!1;t=e.parentElement}const s=t.getBoundingClientRect(),n=e.getBoundingClientRect();return he(n.left,s.left)||fe(n.right,s.right)||he(n.top,s.top)||fe(n.bottom,s.bottom)?!0:t.parentElement?Re(e,t.parentElement):!1}const en=["aria-current"],tn=["href"],nn={key:0},sn=$({__name:"LayoutNavTocItem",props:{heading:{},level:{},isTocLoaded:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){_e(u=>({"55d0d702":i(o)-1}));const s=e,n=t,o=s.level??1,a=D(()=>k().activeHeadingId==s.heading.element.id);L(()=>{A(()=>{!a.value||!r.value||!s.isTocLoaded||r.value&&Ge(r.value,"center")})});const r=m(null);return(u,f)=>{const d=oe("LayoutNavTocItem",!0);return _(),p("li",{class:c(u.$style.TocItem),"aria-current":a.value?"location":void 0},[h("a",{class:c([u.$style.TocItem_link,a.value?u.$style.TocItem_link___active:""]),href:`#${s.heading.element.id}`,onClick:f[0]||(f[0]=l=>n("jumpedToItem")),ref:l=>{r.value=l}},[I(Oe,{level:i(o),bold:a.value&&!s.heading.utilityHeading,class:c([u.$style.TocItem_linkText,s.heading.utilityHeading?u.$style.TocItem_linkText___utilityHeading:""])},{default:E(()=>[se(G(s.heading.title),1)]),_:1},8,["level","bold","class"])],10,tn),s.heading.children.length!=0?(_(),p("ul",nn,[(_(!0),p(O,null,V(s.heading.children,l=>(_(),T(d,{heading:l,level:i(o)+1,onJumpedToItem:f[1]||(f[1]=M=>n("jumpedToItem")),"is-toc-loaded":s.isTocLoaded},null,8,["heading","level","is-toc-loaded"]))),256))])):C("",!0)],10,en)}}}),on="wb",an="xb",rn="yb",ln="zb",cn="Ab",un={DarkMode:on,TocItem:an,TocItem_link:rn,TocItem_link___active:ln,TocItem_linkText___utilityHeading:cn},_n={$style:un},dn=N(sn,[["__cssModules",_n]]),vn=["id"],pn=$({__name:"LayoutNavToc",props:{isMobile:{type:Boolean}},emits:["jumpedToItem"],setup(e,{emit:t}){const s=e,n=t,o=k(),a=m(!1);return L(()=>{a.value=!0}),(r,u)=>(_(),p("nav",{tabindex:"-1",id:i(B).page.toc,"aria-label":"Table of contents",class:c([r.$style.Toc,s.isMobile?r.$style.Toc___mobile:""])},[h("h2",{"aria-hidden":!0,class:c(r.$style.Toc_title)}," On this page: ",2),h("div",{class:c(r.$style.Toc_content)},[h("ul",{class:c(r.$style.Toc_itemList)},[(_(!0),p(O,null,V(i(o).tocItems,f=>(_(),T(dn,{key:f.element.id,heading:f,onJumpedToItem:u[0]||(u[0]=d=>n("jumpedToItem")),isTocLoaded:a.value},null,8,["heading","isTocLoaded"]))),128))],2)],2)],10,vn))}}),mn="F_",hn="G_",fn="H_",gn="I_",bn="J_",yn="K_",$n={DarkMode:mn,Toc:hn,Toc_title:fn,Toc___mobile:gn,Toc_content:bn,Toc_itemList:yn},Nn={$style:$n},ge=N(pn,[["__cssModules",Nn]]),De=Symbol();function Mn(e){const t=m(e);return st(De,t),t}function Fe(){return Me(De)??m(!1)}function We(e){const t=m(null);function s(o){if(t.value==o){t.value=null;return}t.value=o}function n(o){return t.value==o}return{idOpenChild:t,toggleChild:s,isChildOpen:n}}const In="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='16'%20viewBox='0%200%208%2014'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-right'%3e%3cpolyline%20points='1%2013%207%207%201%201'%3e%3c/polyline%3e%3c/svg%3e",kn=["level","aria-current"],Ln=["href"],Tn=$({__name:"LayoutNavPagesItem",props:{navItem:{},depth:{},startingLevel:{},isOpen:{type:Boolean},isNavPagesLoaded:{type:Boolean}},emits:["navItemToggle"],setup(e,{emit:t}){_e(v=>({"5db9b04c":d.value,"1841d356":r,b0415f66:n.navItem.children?"visible":"hidden"}));const s=t,n=e,o=F(),a=k(),r=`url("${In}")`,u=We((n.navItem.children??[]).map(v=>v.url));for(const v of n.navItem.children??[])j(o.path,v.url).inside&&u.toggleChild(v.url);function f(v){u.toggleChild(v.url),v.children||(a.isMobileNavPagesOpen=!1)}const d=D(()=>n.depth??0),l=Zt(n.navItem.url),M=Fe(),b=m(null);return L(()=>{A(()=>{!b.value||!n.isNavPagesLoaded||Ge(b.value,d.value==0?"center":"nearest")})}),(v,P)=>{const te=oe("LayoutNavPagesItem",!0);return _(),p("li",{level:d.value,class:c([v.$style.NavItem,i(M)?v.$style.Dark:"",v.isOpen?v.$style.NavItem___open:""]),"aria-current":i(l)?"page":void 0},[h("a",{href:v.$props.navItem.children?"javascript:":n.navItem.url,class:c([v.$style.NavItem_link]),onClick:P[0]||(P[0]=x=>s("navItemToggle")),ref:x=>{b.value=x}},[I(Oe,{level:d.value+v.startingLevel,class:c(v.$style.NavItem_linkText),bold:i(l)},{default:E(()=>[se(G(n.navItem.title),1)]),_:1},8,["level","class","bold"])],10,Ln),h("div",{class:c(v.$style.NavItem_childrenListWrapper)},[I(we,{"enter-from-class":v.$style.NavItem_childrenList___enterFrom,"enter-to-class":v.$style.NavItem_childrenList___enterTo,"enter-active-class":v.$style.NavItem_childrenList___enterActive,"leave-from-class":v.$style.NavItem_childrenList___leaveFrom,"leave-to-class":v.$style.NavItem_childrenList___leaveTo,"leave-active-class":v.$style.NavItem_childrenList___leaveActive},{default:E(()=>{var x;return[v.isOpen&&((x=n.navItem.children)!=null&&x.length)?(_(),p("ul",{key:0,class:c(v.$style.NavItem_childrenList)},[(_(!0),p(O,null,V(n.navItem.children,U=>(_(),T(te,{depth:d.value+1,"starting-level":v.startingLevel,"nav-item":U,onNavItemToggle:ve=>f(U),"is-open":i(u).isChildOpen(U.url),"is-nav-pages-loaded":n.isNavPagesLoaded},null,8,["depth","starting-level","nav-item","onNavItemToggle","is-open","is-nav-pages-loaded"]))),256))],2)):C("",!0)]}),_:1},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"])],2)],10,kn)}}}),wn="kb",Cn="lb",On="mb",Hn="nb",Sn="ob",An="pb",Pn="qb",Bn="rb",En="sb",Gn="tb",xn="ub",Rn="vb",Dn={DarkMode:wn,NavItem:Cn,NavItem_link:On,NavItem___open:Hn,NavItem_childrenListWrapper:Sn,Dark:An,NavItem_childrenList___enterFrom:Pn,NavItem_childrenList___enterTo:Bn,NavItem_childrenList___enterActive:En,NavItem_childrenList___leaveFrom:Gn,NavItem_childrenList___leaveTo:xn,NavItem_childrenList___leaveActive:Rn},Fn={$style:Dn},Wn=N(Tn,[["__cssModules",Fn]]),jn=["id","aria-label"],Vn=$({__name:"LayoutNavPages",props:{mobile:{type:Boolean}},setup(e){const{site:t}=J(),s=e,n=F(),o=k(),a=D(()=>s.mobile?o.navMain:o.navSecondary),r=m(!1);L(()=>{r.value=!0});const u=D(()=>{var l;return s.mobile?"Menu":(((l=t.value.themeConfig.nav.find(M=>j(n.path,M.url).inside))==null?void 0:l.title)??"").concat("/")}),f=We(a.value.map(l=>l.url));for(const l of a.value)j(n.path,l.url).inside&&f.toggleChild(l.url);function d(l){f.toggleChild(l.url),l.children||(o.isMobileNavPagesOpen=!1)}return(l,M)=>(_(),p("nav",{tabindex:"-1",id:i(B).page.subMenu,"aria-label":`Submenu: ${u.value}`,class:c([l.$style.NavPages,s.mobile?l.$style.NavPages___mobile:""])},[a.value.length>0?(_(),p(O,{key:0},[h("h2",{"aria-hidden":"true",class:c(l.$style.NavPages_title)},G(u.value),3),h("ul",{class:c(l.$style.NavPages_itemList)},[(_(!0),p(O,null,V(a.value,b=>(_(),T(Wn,{"starting-level":s.mobile?0:1,"nav-item":b,"is-open":i(f).isChildOpen(b.url),onNavItemToggle:v=>d(b),"is-nav-pages-loaded":r.value},null,8,["starting-level","nav-item","is-open","onNavItemToggle","is-nav-pages-loaded"]))),256))],2)],64)):C("",!0)],10,jn))}}),zn="z",Yn="A",Jn="B",Un="C",qn={NavPages:zn,NavPages_title:Yn,NavPages_itemList:Jn,NavPages___mobile:Un},Xn={$style:qn},be=N(Vn,[["__cssModules",Xn]]),Zn=["aria-current"],Kn=["aria-current","href"],Qn=$({__name:"LayoutHeaderNavItem",props:{navItem:{}},setup(e){const t=F(),s=e,n=D(()=>{const o=j(t.path,s.navItem.url);return s.navItem.url=="/"?o.exact:o.inside});return(o,a)=>(_(),p("li",{class:c(o.$style.NavItem),"aria-current":n.value?"page":void 0},[h("a",{class:c([o.$style.NavItem_link,n.value?o.$style.NavItem_link___active:""]),"aria-current":n.value?!0:void 0,href:i(de)(s.navItem).url},G(s.navItem.title),11,Kn)],10,Zn))}}),es="Ib",ts="Jb",ns="Kb",ss="Lb",os={DarkMode:es,NavItem:ts,NavItem_link:ns,NavItem_link___active:ss},as={$style:os},rs=N(Qn,[["__cssModules",as]]),is=$({__name:"LayoutHeaderNav",setup(e){const t=k(),s=m(null),n=m(null);return(o,a)=>(_(),p("nav",{class:c(o.$style.HeaderNav),"aria-label":"Main menu",ref:r=>{n.value=r}},[h("ul",{ref:r=>{s.value=r}},[(_(!0),p(O,null,V(i(t).navMain,r=>(_(),T(rs,{"nav-item":r},null,8,["nav-item"]))),256))],512)],2))}}),ls="N",cs={HeaderNav:ls},us={$style:cs},_s=N(is,[["__cssModules",us]]),ds=$({__name:"LayoutHeaderButtonBurger",props:{title:{},isOpen:{type:Boolean},toggleIsOpen:{type:Function},numLines:{},compact:{type:Boolean}},setup(e){const t=e;return(s,n)=>(_(),p("button",{class:c({[s.$style.BurgerWrapper]:!0,[s.$style.open]:t.isOpen}),onClick:n[0]||(n[0]=(...o)=>t.toggleIsOpen&&t.toggleIsOpen(...o))},[h("div",{class:c(s.$style.Burger_title)},G(t.title),3),t.compact?C("",!0):(_(),p("div",{key:0,class:c(s.$style.Burger)},[(_(!0),p(O,null,V(s.numLines,o=>(_(),p("div",{class:c(s.$style.Burger_line)},null,2))),256))],2))],2))}}),vs="U",ps="V",ms="W",hs="X",fs="Y",gs={BurgerWrapper:vs,open:ps,Burger_title:ms,Burger:hs,Burger_line:fs},bs={$style:gs},ye=N(ds,[["__cssModules",bs]]),ys=["href"],$s=$({__name:"LayoutHeaderSkip",props:{title:{},anchorId:{}},setup(e){const t=e;return(s,n)=>(_(),p("a",{class:c(s.$style.SkipLink),href:`#${t.anchorId}`},"Skip to "+G(t.title),11,ys))}}),Ns="M",Ms={SkipLink:Ns},Is={$style:Ms},re=N($s,[["__cssModules",Is]]),ks=$({__name:"LayoutHeader",setup(e){_e(l=>({"9223f6c8":a.value,"5d67c155":i(t).isCompactModeActive?"visible":"hidden","38efce72":i(t).isCompactModeActive&&i(t).tocItems.length?"visible":"hidden"}));const t=k(),s=m(null),n=m(null),o=m(null),a=m("visible"),r=m(!1);u();function u(){let l=null;const M=b=>{r.value=b.matches};L(()=>{l=window.matchMedia("screen and (width < 20rem)"),l.addEventListener("change",M),r.value=l.matches}),Q(()=>l==null?void 0:l.removeEventListener("change",M))}Ce(()=>{f(),d()},()=>s.value,!0);function f(){if(!n.value){console.error("logo ref not set");return}const l=n.value.nextElementSibling;l&&(n.value.getBoundingClientRect().right>l.getBoundingClientRect().left?a.value="hidden":a.value="visible")}function d(){if(!o.value){console.error("Header_navWrapper ref not set");return}const l=o.value.lastElementChild;l&&(t.isHeaderNavOverlapping=l.getBoundingClientRect().right>o.value.getBoundingClientRect().right)}return(l,M)=>(_(),p("header",{class:c(l.$style.Header),role:"banner",ref:b=>{s.value=b}},[I(re,{class:c(l.$style.Header_skipLink),title:"content","anchor-id":i(B).page.content},null,8,["class","anchor-id"]),i(t).isCompactModeActive?C("",!0):(_(),p(O,{key:0},[i(t).navSecondary.length?(_(),T(re,{key:0,class:c(l.$style.Header_skipLink),title:"submenu","anchor-id":i(B).page.subMenu},null,8,["class","anchor-id"])):C("",!0),i(t).tocItems.length?(_(),T(re,{key:1,class:c(l.$style.Header_skipLink),title:"outline","anchor-id":i(B).page.toc},null,8,["class","anchor-id"])):C("",!0)],64)),h("div",{class:c(l.$style.Header_logoWrapper),ref:b=>{n.value=b}},[h("img",{class:c(l.$style.Header_logo),src:ot,alt:"website logo",title:"website logo",style:{aspectRatio:1}},null,2)],2),h("div",{class:c(l.$style.Header_spacer)},null,2),h("div",{class:c(l.$style.Header_navWrapper),ref:b=>{o.value=b}},[I(_s,{style:at({visibility:i(t).isCompactModeActive?"hidden":"visible"}),class:c(l.$style.Header_nav)},null,8,["style","class"])],2),I(ye,{class:c(l.$style.BurgerToc),title:"On this page","is-open":i(t).isMobileNavTocOpen,"toggle-is-open":()=>{i(t).isMobileNavTocOpen=!i(t).isMobileNavTocOpen},compact:r.value,"num-lines":3},null,8,["class","is-open","toggle-is-open","compact"]),I(ye,{class:c(l.$style.BurgerMenu),title:"Menu","is-open":i(t).isMobileNavPagesOpen,"toggle-is-open":()=>{i(t).isMobileNavPagesOpen=!i(t).isMobileNavPagesOpen},compact:r.value,"num-lines":5},null,8,["class","is-open","toggle-is-open","compact"])],2))}}),Ls="D",Ts="E",ws="F",Cs="G",Os="H",Hs="I",Ss="J",As="K",Ps="L",Bs={Header:Ls,Header_skipLink:Ts,Header_logoWrapper:ws,Header_logo:Cs,Header_spacer:Os,Header_navWrapper:Hs,Header_nav:Ss,BurgerMenu:As,BurgerToc:Ps},Es={$style:Bs},Gs=N(ks,[["__cssModules",Es]]),xs=$({__name:"LayoutNavMobile",props:{isOpen:{type:Boolean},setIsOpen:{type:Function}},setup(e){const t=e,s=m(null);return L(()=>{function n(o){s.value&&(s.value.contains(o.target)||t.setIsOpen(!1))}A(()=>{t.isOpen?window.requestAnimationFrame(()=>window.addEventListener("click",n)):window.removeEventListener("click",n)})}),(n,o)=>(_(),T(we,{"enter-from-class":n.$style.NavMobile___enterFrom,"enter-to-class":n.$style.NavMobile___enterTo,"enter-active-class":n.$style.NavMobile___enterActive,"leave-from-class":n.$style.NavMobile___leaveFrom,"leave-to-class":n.$style.NavMobile___leaveTo,"leave-active-class":n.$style.NavMobile___leaveActive},{default:E(()=>[t.isOpen?(_(),p("div",{key:0,class:c([n.$style.NavMobile]),ref:a=>{s.value=a}},[ue(n.$slots,"default",{close:()=>t.setIsOpen(!1)})],2)):C("",!0)]),_:3},8,["enter-from-class","enter-to-class","enter-active-class","leave-from-class","leave-to-class","leave-active-class"]))}}),Rs="U_",Ds="V_",Fs="W_",Ws="X_",js="Y_",Vs="Z_",zs="_b",Ys="ab",Js={DarkMode:Rs,NavMobile:Ds,NavMobile___enterFrom:Fs,NavMobile___enterTo:Ws,NavMobile___enterActive:js,NavMobile___leaveFrom:Vs,NavMobile___leaveTo:zs,NavMobile___leaveActive:Ys},Us={$style:Js},$e=N(xs,[["__cssModules",Us]]),qs=$({__name:"LayoutOverlay",setup(e){const t=k(),s=rt();return A(()=>{var n,o;t.isMobileNavAnythingOpen?(n=document.querySelector("body"))==null||n.classList.add(s.noScroll):(o=document.querySelector("body"))==null||o.classList.remove(s.noScroll)}),(n,o)=>(_(),p("div",{class:c([i(s).Overlay,i(t).isMobileNavAnythingOpen?i(s).Overlay___shaded:""])},[I(Gs,{class:c(i(s).Header)},null,8,["class"]),h("div",{class:c(i(s).NavContainer)},[i(t).isCompactModeActive?C("",!0):(_(),p(O,{key:0},[h("div",{class:c(i(s).NavPagesWrapper)},[i(t).navSecondary.length?(_(),T(be,{key:0,class:c(i(s).NavPages)},null,8,["class"])):C("",!0)],2),h("div",{"aria-hidden":"true",class:c(i(s).Overlay_spacer___content)},null,2),h("div",{class:c(i(s).TocWrapper)},[i(t).tocItems.length?(_(),T(ge,{key:0,class:c(i(s).Toc)},null,8,["class"])):C("",!0)],2)],64)),I($e,{class:c(i(s).NavMobile),isOpen:i(t).isMobileNavTocOpen,setIsOpen:a=>{i(t).isMobileNavTocOpen=a}},{default:E(({close:a})=>[I(ge,{"is-mobile":"",onJumpedToItem:a},null,8,["onJumpedToItem"])]),_:1},8,["class","isOpen","setIsOpen"]),I($e,{class:c(i(s).NavMobile),isOpen:i(t).isMobileNavPagesOpen,setIsOpen:a=>{i(t).isMobileNavPagesOpen=a}},{default:E(()=>[I(be,{mobile:""})]),_:1},8,["class","isOpen","setIsOpen"])],2)],2))}}),Xs="h",Zs="i",Ks="j",Qs="k",eo="l",to="m",no="n",so="o",oo="p",ao="q",ro="r",io={noScroll:Xs,Overlay:Zs,Header:Ks,NavContainer:Qs,Overlay_spacer___content:eo,Overlay___shaded:to,NavPagesWrapper:no,NavPages:so,TocWrapper:oo,Toc:ao,NavMobile:ro},lo={$style:io},co=N(qs,[["__cssModules",lo]]),uo={};function _o(e,t){return _(),p("p",null,"Page not found")}const vo=N(uo,[["render",_o]]);function je(){const e=F(),{site:t,frontmatter:s}=J();return D(()=>{function n(o){for(const r of o){const u=j(e.path,r.url);if(u.exact)return[r];if(u.inside&&r.children)return[r,...n(r.children)]}return[{title:po(s,e),url:e.path}]}return[{title:"Home",url:"/",children:t.value.themeConfig.nav},...n(t.value.themeConfig.nav)]})}function po(e,t){if(e.value.title)return e.value.title;const s=t.path.match(/[^\/]+$/);if(s){const o=decodeURI(s[0]).replace(/\.[^.]+$/,"");return o.charAt(0).toUpperCase()+o.slice(1)}return"Unknown page"}const mo=500,ho=$({__name:"MarkdownWrapper",setup(e){const t=m(null),s=m(!1),n=je();return Ce(()=>{if(!t.value){console.error("markdown container element ref not set");return}s.value=t.value.clientWidth<mo},()=>t.value,!0),(o,a)=>(_(),p("div",{ref:r=>{t.value=r},class:c([o.$style.Markdown,s.value?o.$style.Markdown___narrow:""])},[h("h1",null,G(i(n)[i(n).length-1].title),1),ue(o.$slots,"default")],2))}}),fo="bb",go="cb",bo="db",yo="eb",$o={DarkMode:fo,Markdown:go,copy:bo,Markdown___narrow:yo},No={$style:$o},Mo=N(ho,[["__cssModules",No]]),Io=["aria-current","href"],ko=$({__name:"YouAreHere",setup(e){const t=Fe(),s=je();return(n,o)=>(_(),p("div",{tabindex:-1,class:c([n.$style.YouAreHere,i(t)?n.$style.YouAreHere___dark:""])},[h("h2",{class:c(n.$style.YouAreHere_title)},"You are here:",2),(_(!0),p(O,null,V(i(s),(a,r)=>(_(),p(O,null,[h("a",{"aria-current":r==i(s).length-1?"page":void 0,href:i(de)(a).url},G(a==null?void 0:a.title),9,Io),h("span",{class:c(n.$style.NavTrace_separator)},"/",2)],64))),256))],2))}}),Lo="fb",To="gb",wo="hb",Co="ib",Oo="jb",Ho={DarkMode:Lo,YouAreHere:To,YouAreHere___dark:wo,YouAreHere_title:Co,NavTrace_separator:Oo},So={$style:Ho},Ao=N(ko,[["__cssModules",So]]),Po=["id"],Bo=$({__name:"LayoutMainDoc",setup(e){const{page:t}=J(),s=k();return(n,o)=>{const a=oe("Content");return _(),p("div",{class:c([n.$style.MainWrapper,i(s).isCompactModeActive?n.$style.MainWrapper___compact:""]),tabindex:"-1",id:i(B).page.content},[h("div",{class:c(n.$style.Main)},[h("div",{class:c(n.$style.CurrentLocation)},[I(Ao)],2),h("main",null,[i(t).isNotFound?(_(),T(vo,{key:0})):(_(),T(Mo,{key:1,class:c(n.$style.Markdown)},{default:E(()=>[I(a,{ref:r=>{i(s).contentForToc=r}},null,512)]),_:1},8,["class"]))])],2)],10,Po)}}}),Eo="O",Go="P",xo="Q",Ro="R",Do={MainWrapper:Eo,CurrentLocation:Go,Main:xo,MainWrapper___compact:Ro},Fo={$style:Do},Wo=N(Bo,[["__cssModules",Fo]]),jo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20d='M8%200c4.42%200%208%203.58%208%208a8.013%208.013%200%200%201-5.45%207.59c-.4.08-.55-.17-.55-.38%200-.27.01-1.13.01-2.2%200-.75-.25-1.23-.54-1.48%201.78-.2%203.65-.88%203.65-3.95%200-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12%200%200-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68%200-1.36.09-2%20.27-1.53-1.03-2.2-.82-2.2-.82-.44%201.1-.16%201.92-.08%202.12-.51.56-.82%201.28-.82%202.15%200%203.06%201.86%203.75%203.64%203.95-.23.2-.44.55-.51%201.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82%201.13.16.45.68%201.31%202.69.94%200%20.67.01%201.3.01%201.49%200%20.21-.15.45-.55.38A7.995%207.995%200%200%201%200%208c0-4.42%203.58-8%208-8Z'%3e%3c/path%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24'%20height='24'%3e%3cpath%20d='M12%20.25a.75.75%200%200%201%20.673.418l3.058%206.197%206.839.994a.75.75%200%200%201%20.415%201.279l-4.948%204.823%201.168%206.811a.751.751%200%200%201-1.088.791L12%2018.347l-6.117%203.216a.75.75%200%200%201-1.088-.79l1.168-6.812-4.948-4.823a.75.75%200%200%201%20.416-1.28l6.838-.993L11.328.668A.75.75%200%200%201%2012%20.25Zm0%202.445L9.44%207.882a.75.75%200%200%201-.565.41l-5.725.832%204.143%204.038a.748.748%200%200%201%20.215.664l-.978%205.702%205.121-2.692a.75.75%200%200%201%20.698%200l5.12%202.692-.977-5.702a.748.748%200%200%201%20.215-.664l4.143-4.038-5.725-.831a.75.75%200%200%201-.565-.41L12%202.694Z'%3e%3c/path%3e%3c/svg%3e",zo={class:"Github"},Yo=["src"],Jo=["src"],Uo=$({__name:"GitHubStars.ce",props:{repo:{type:String}},setup(e){const t=e,s=m(0);async function n(o){try{const a=await fetch(`https://api.github.com/repos/${o}`);return a.ok?(await a.json()).stargazers_count??null:null}catch{return null}}return L(async()=>{const o=`github stars: ${t.repo}`;function a(d){const l=localStorage.getItem(d);if(!l)return null;try{return JSON.parse(l)}catch{return localStorage.removeItem(d),null}}const r=a(o);if((r==null?void 0:r.timeStamp)!=null&&(r==null?void 0:r.stars)!=null){const d=(Date.now()-r.timeStamp)/1e3,l=3600;if(d<300||d<l&&r.stars!=-1){s.value=r.stars;return}}const u=await n(t.repo);if(!u){const d={stars:-1,timeStamp:Date.now()};localStorage.setItem(o,JSON.stringify(d));return}s.value=u;const f={stars:u,timeStamp:Date.now()};localStorage.setItem(o,JSON.stringify(f))}),(o,a)=>(_(),p("div",zo,[I(pe,{href:`https://github.com/${o.repo}`,class:"Github_box Github_box___repo"},{default:E(()=>[h("img",{class:"Github_icon",src:i(jo),alt:"github icon","aria-hidden":"true"},null,8,Yo),se(" GitHub ")]),_:1},8,["href"]),s.value!=-1?(_(),T(pe,{key:0,href:`https://github.com/${o.repo}`,class:"Github_box Github_box___stars"},{default:E(()=>[h("img",{alt:"stars",class:"Github_icon Github_icon___star",src:i(Vo)},null,8,Jo),se(" "+G(s.value),1)]),_:1},8,["href"])):C("",!0)]))}}),qo='.Github{display:flex;flex-direction:row;align-items:center;gap:12rem}.Github_box{border:1rem solid #c0c0c0;border-radius:3rem;background-color:#fff;padding:6rem 12rem;display:flex;flex-direction:row;align-items:center;gap:6rem;text-decoration:none}.Github_box,.Github_box:link,.Github_box:visited{color:#000}.Github_box___repo{box-shadow:0 0 2rem #0003,0 -2rem 4rem #0002 inset;font-weight:700}.Github_box___repo:hover:not(:active){box-shadow:0 0 2rem #0003,0 -2rem 4rem #0004 inset}.Github_box___repo:hover:hover,.Github_box___repo:hover:visited:hover,.Github_box___repo:hover:link:hover{color:#0969da}.Github_box___stars{gap:1.5rem;padding-left:6rem;padding-right:6rem;font-weight:400;position:relative}.Github_box___stars:before,.Github_box___stars:after{content:"";position:absolute;aspect-ratio:1;right:100%;top:50%;transform-origin:center;transform:translateY(-50%) translate(-50%) rotate(-90deg) scaleY(2) scaleX(1)}.Github_box___stars:before{border:6rem solid transparent;border-bottom-color:silver}.Github_box___stars:after{border:5rem solid transparent;border-bottom-color:#fff}.Github_box___stars:hover{border-color:#0969da}.Github_box___stars:hover:before{border-bottom-color:#0969da}.Github_icon{vertical-align:middle;height:1.3em}.Github_icon___star{height:1.2em}.Github{position:relative;z-index:0}.Github_box___repo{z-index:1}.Github_box___stars{z-index:0}.Github_box___repo{transition:box-shadow .2s linear,background-color .1s linear,color .1s linear}.Github_box___repo:active{transition:background-color .1s linear}.Github_box___stars,.Github_box___stars:before{transition:border-color .2s linear}',Xo=N(Uo,[["styles",[qo]]]),Zo=it(Xo);function Ko(){L(()=>{customElements.define("github-stars",Zo)})}function Qo(){const e=F();L(()=>{document.addEventListener("click",Ne)}),Q(()=>document.removeEventListener("click",Ne)),Le(()=>e.path,()=>{const t=location.href.replace(/#.*$/,"");location.href=`${t}#${B.page.root}`})}function Ne(e){var s,n;let t=e.target;for(;t;){if(t.tagName=="A"){const o=(s=t.getAttribute)==null?void 0:s.call(t,"href");if(!o)return;if(o.charAt(0)=="#"){const a=document.querySelector(o);a&&((n=a==null?void 0:a.focus)==null||n.call(a,{preventScroll:!0}))}return}t=t.parentElement??null}}const ea=["id"],ta=["inert"],na=$({__name:"Layout",setup(e){var n;Ko(),Qo();const{frontmatter:t}=J();(n=lt())==null||n.appContext.app.use(Pt());const s=Qt();return Mn(!1),ee(()=>{t.value.title||console.warn("Frontmatter title empty")}),(o,a)=>{const r=oe("Content");return _(),p("div",{class:c(o.$style.Layout),tabindex:"-1",id:i(B).page.root},[I(co,{class:c(o.$style.Overlay)},null,8,["class"]),i(t).hero?(_(),p("div",{key:1,inert:i(s).isMobileNavAnythingOpen?!0:void 0,class:c([o.$style.Main,o.$style.Main___hero,i(s).isMobileNavAnythingOpen?o.$style.Main___nonInteractive:""])},[I(r)],10,ta)):(_(),T(Wo,{key:0,inert:i(s).isMobileNavAnythingOpen?!0:void 0,class:c([o.$style.Main,o.$style.Main___doc,i(s).isMobileNavAnythingOpen?o.$style.Main___nonInteractive:""])},null,8,["inert","class"])),h("div",{"aria-hidden":"true",class:c(o.$style.VisibleRectMarker),ref:u=>{i(s).VisibleAreaMarker=u}},null,2)],10,ea)}}}),sa="_",oa="a",aa="b",ra="c",ia="d",la="e",ca="f",ua={VisibleRectMarker:sa,Layout:oa,Main:aa,Main___doc:ra,Main___hero:ia,Main___nonInteractive:la,Overlay:ca},_a={$style:ua},da=N(na,[["__cssModules",_a]]),va={Layout:da,enhanceApp({}){}};function Ve(e){if(e.extends){const t=Ve(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const Y=Ve(va),pa=$({name:"VitePressApp",setup(){const{site:e}=J();return L(()=>{A(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&yt(),$t(),Nt(),Y.setup&&Y.setup(),()=>Mt(Y.Layout)}});async function ma(){const e=fa(),t=ha();t.provide(ut,e);const s=_t(e.route);return t.provide(dt,s),t.component("Content",vt),t.component("ClientOnly",pt),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),Y.enhanceApp&&await Y.enhanceApp({app:t,router:e,siteData:mt}),{app:t,router:e,data:s}}function ha(){return ht(pa)}function fa(){let e=ie,t;return ft(s=>{let n=gt(s),o=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o=bt(()=>import(n),__vite__mapDeps([]))),ie&&(e=!1),o},Y.NotFound)}ie&&ma().then(({app:e,router:t,data:s})=>{t.go().then(()=>{ct(t.route,s.site),e.mount("#app")})});export{ma as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}