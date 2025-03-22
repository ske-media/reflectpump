import{b as E}from"/_feather/build/_shared/chunk-23UC2UNS.js";import{c as Z,e as w}from"/_feather/build/_shared/chunk-WKCTKT6D.js";var G=Z((Ce,T)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var a=[],i=0;i<arguments.length;i++){var r=arguments[i];if(!!r){var s=typeof r;if(s==="string"||s==="number")a.push(r);else if(Array.isArray(r)){if(r.length){var o=t.apply(null,r);o&&a.push(o)}}else if(s==="object")if(r.toString===Object.prototype.toString)for(var n in r)e.call(r,n)&&r[n]&&a.push(n);else a.push(r.toString())}}return a.join(" ")}typeof T<"u"&&T.exports?(t.default=t,T.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var P=w(E(),1),S=w(E(),1),y=w(E(),1);var J={data:""},K=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||J;var Q=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,g=(e,t)=>{let a="",i="",r="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?a=s+" "+o+";":i+=s[1]=="f"?g(o,s):s+"{"+g(o,s[1]=="k"?"":t)+"}":typeof o=="object"?i+=g(o,t?t.replace(/([^,])+/g,n=>s.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=g.p?g.p(s,o):s+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+i},k={},H=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+H(e[a]);return t}return e},W=(e,t,a,i,r)=>{let s=H(e),o=k[s]||(k[s]=(n=>{let d=0,l=11;for(;d<n.length;)l=101*l+n.charCodeAt(d++)>>>0;return"go"+l})(s));if(!k[o]){let n=s!==e?e:(d=>{let l,h,m=[{}];for(;l=Q.exec(d.replace(U,""));)l[4]?m.shift():l[3]?(h=l[3].replace(L," ").trim(),m.unshift(m[0][h]=m[0][h]||{})):m[0][l[1]]=l[2].replace(L," ").trim();return m[0]})(e);k[o]=g(r?{["@keyframes "+o]:n}:n,a?"":"."+o)}return((n,d,l)=>{d.data.indexOf(n)==-1&&(d.data=l?n+d.data:d.data+n)})(k[o],t,i),o},X=(e,t,a)=>e.reduce((i,r,s)=>{let o=t[s];if(o&&o.call){let n=o(a),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=d?"."+d:n&&typeof n=="object"?n.props?"":g(n,""):n===!1?"":n}return i+r+(o??"")},"");function $(e){let t=this||{},a=e.call?e(t.p):e;return W(a.unshift?a.raw?X(a,[].slice.call(arguments,1),t.p):a.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):a,K(t.target),t.g,t.o,t.k)}var R,D,M,Pe=$.bind({g:1}),c=$.bind({k:1});function _(e,t,a,i){g.p=t,R=e,D=a,M=i}function p(e,t){let a=this||{};return function(){let i=arguments;function r(s,o){let n=Object.assign({},s),d=n.className||r.className;a.p=Object.assign({theme:D&&D()},n),a.o=/ *go\d+/.test(d),n.className=$.apply(a,i)+(d?" "+d:""),t&&(n.ref=o);let l=e;return e[0]&&(l=n.as||e,delete n.as),M&&l[0]&&M(n),R(l,n)}return t?t(r):r}}var b=w(E(),1);var j=w(E(),1),Y=e=>typeof e=="function",C=(e,t)=>Y(e)?e(t):e,ee=(()=>{let e=0;return()=>(++e).toString()})(),te=e=>t=>{t&&setTimeout(()=>{let a=t.getBoundingClientRect();e(a)})},q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ae=20,I=new Map,B=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),v({type:4,toastId:e})},1e3);I.set(e,t)},re=e=>{let t=I.get(e);t&&clearTimeout(t)},F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ae)};case 1:return t.toast.id&&re(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:a}=t;return e.toasts.find(s=>s.id===a.id)?F(e,{type:1,toast:a}):F(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?B(i):e.toasts.forEach(s=>{B(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===i||i===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},N=[],z={toasts:[],pausedAt:void 0},v=e=>{z=F(z,e),N.forEach(t=>{t(z)})},se={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},oe=(e={})=>{let[t,a]=(0,P.useState)(z);(0,P.useEffect)(()=>(N.push(a),()=>{let r=N.indexOf(a);r>-1&&N.splice(r,1)}),[t]);let i=t.toasts.map(r=>{var s,o;return{...e,...e[r.type],...r,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||e?.duration||se[r.type],style:{...e.style,...(o=e[r.type])==null?void 0:o.style,...r.style}}});return{...t,toasts:i}},ie=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||ee()}),O=e=>(t,a)=>{let i=ie(t,e,a);return v({type:2,toast:i}),i.id},u=(e,t)=>O("blank")(e,t);u.error=O("error");u.success=O("success");u.loading=O("loading");u.custom=O("custom");u.dismiss=e=>{v({type:3,toastId:e})};u.remove=e=>v({type:4,toastId:e});u.promise=(e,t,a)=>{let i=u.loading(t.loading,{...a,...a?.loading});return e.then(r=>(u.success(C(t.success,r),{id:i,...a,...a?.success}),r)).catch(r=>{u.error(C(t.error,r),{id:i,...a,...a?.error})}),e};var ne=e=>{let{toasts:t,pausedAt:a}=oe(e);(0,S.useEffect)(()=>{if(a)return;let r=Date.now(),s=t.map(o=>{if(o.duration===1/0)return;let n=(o.duration||0)+o.pauseDuration-(r-o.createdAt);if(n<0){o.visible&&u.dismiss(o.id);return}return setTimeout(()=>u.dismiss(o.id),n)});return()=>{s.forEach(o=>o&&clearTimeout(o))}},[t,a]);let i=(0,S.useMemo)(()=>({startPause:()=>{v({type:5,time:Date.now()})},endPause:()=>{a&&v({type:6,time:Date.now()})},updateHeight:(r,s)=>v({type:1,toast:{id:r,height:s}}),calculateOffset:(r,s)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:d}=s||{},l=t.filter(f=>(f.position||d)===(r.position||d)&&f.height),h=l.findIndex(f=>f.id===r.id),m=l.filter((f,x)=>x<h&&f.visible).length;return l.filter(f=>f.visible).slice(...o?[m+1]:[0,m]).reduce((f,x)=>f+(x.height||0)+n,0)}}),[t,a]);return{toasts:t,handlers:i}},le=c`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=c`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=c`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pe=p("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ue=c`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fe=p("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ue} 1s linear infinite;
`,me=c`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ye=c`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,he=p("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ye} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ge=p("div")`
  position: absolute;
`,be=p("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ve=c`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=p("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ve} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?b.createElement(xe,null,t):t:a==="blank"?null:b.createElement(be,null,b.createElement(fe,{...i}),a!=="loading"&&b.createElement(ge,null,a==="error"?b.createElement(pe,{...i}):b.createElement(he,{...i})))},Ee=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ke=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,$e="0%{opacity:0;} 100%{opacity:1;}",je="0%{opacity:1;} 100%{opacity:0;}",Oe=p("div",y.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Te=p("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let a=e.includes("top")?1:-1,[i,r]=q()?[$e,je]:[Ee(a),ke(a)];return{animation:t?`${c(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${c(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ie=y.memo(({toast:e,position:t,style:a,children:i})=>{let r=e!=null&&e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},s=y.createElement(we,{toast:e}),o=y.createElement(Te,{...e.ariaProps},C(e.message,e));return y.createElement(Oe,{className:e.className,style:{...r,...a,...e.style}},typeof i=="function"?i({icon:s,message:o}):y.createElement(y.Fragment,null,s,o))});_(j.createElement);var Ne=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...r}},ze=$`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,A=16,_e=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:r,containerStyle:s,containerClassName:o})=>{let{toasts:n,handlers:d}=ne(a);return j.createElement("div",{style:{position:"fixed",zIndex:9999,top:A,left:A,right:A,bottom:A,pointerEvents:"none",...s},className:o,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(l=>{let h=l.position||t,m=d.calculateOffset(l,{reverseOrder:e,gutter:i,defaultPosition:t}),f=Ne(h,m),x=l.height?void 0:te(V=>{d.updateHeight(l.id,V.height)});return j.createElement("div",{ref:x,className:l.visible?ze:"",key:l.id,style:f},l.type==="custom"?C(l.message,l):r?r(l):j.createElement(Ie,{toast:l,position:h}))}))},Be=u;export{G as a,_e as b,Be as c};
