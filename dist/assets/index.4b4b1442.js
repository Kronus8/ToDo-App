const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}};w();var b,f=new Uint8Array(16);function g(){if(!b&&(b=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(f)}var x=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function y(e){return typeof e=="string"&&x.test(e)}var o=[];for(var l=0;l<256;++l)o.push((l+256).toString(16).substr(1));function v(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase();if(!y(i))throw TypeError("Stringified UUID is invalid");return i}function k(e,t,i){e=e||{};var a=e.random||(e.rng||g)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){i=i||0;for(var r=0;r<16;++r)t[i+r]=a[r];return t}return v(a)}const p=document.querySelector("#list"),u=document.querySelector("#new-task-form"),c=document.querySelector("#new-task-title"),s=z();s.forEach(h);u==null||u.addEventListener("submit",e=>{if(e.preventDefault(),(c==null?void 0:c.value)==""||(c==null?void 0:c.value)==null)return;const t={id:k(),title:c.value,completed:!1,createdAt:new Date};s.push(t),h(t),c.value=""});function h(e){const t=document.createElement("li"),i=document.createElement("label"),a=document.createElement("input"),r=document.createElement("button");a.type="checkbox",a.checked=e.completed,a.classList.add("checkbox"),a.addEventListener("change",()=>{e.completed=a.checked,m()}),r.classList.add("btn","btn-secondary","btn-sm"),r.innerHTML="Delete",r.addEventListener("click",()=>{const n=s.indexOf(e);s.splice(n,1),t.remove(),m()}),i.append(e.title,a,r),t.append(i),p==null||p.append(t),m()}function m(){localStorage.setItem("TASKS",JSON.stringify(s))}function z(){const e=localStorage.getItem("TASKS");return e==null?[]:JSON.parse(e)}
