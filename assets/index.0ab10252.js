const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};g();var l,x=new Uint8Array(16);function y(){if(!l&&(l=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(x)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function k(e){return typeof e=="string"&&v.test(e)}var o=[];for(var m=0;m<256;++m)o.push((m+256).toString(16).substr(1));function z(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase();if(!k(n))throw TypeError("Stringified UUID is invalid");return n}function S(e,t,n){e=e||{};var i=e.random||(e.rng||y)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=i[r];return t}return z(i)}const h=document.querySelector("#list"),w=document.querySelector("#new-task-form"),s=document.querySelector("#new-task-title"),b=E();b.forEach(f);w==null||w.addEventListener("submit",e=>{if(e.preventDefault(),(s==null?void 0:s.value)==""||(s==null?void 0:s.value)==null)return;const t={id:S(),title:s.value,completed:!1,createdAt:new Date};b.push(t),f(t),s.value=""});function f(e){const t=document.createElement("li"),n=document.createElement("label"),i=document.createElement("p"),r=document.createElement("input"),a=document.createElement("button"),c=document.createElement("button");i.innerHTML=e.title,r.type="checkbox",r.checked=e.completed,r.classList.add("checkbox"),r.addEventListener("change",()=>{e.completed=r.checked,p()}),a.classList.add("btn","btn-secondary","btn-sm"),a.innerHTML="Delete",a.addEventListener("click",()=>{const u=b.indexOf(e);b.splice(u,1),t.remove(),p()}),c.classList.add("btn","btn-primary","btn-sm"),c.innerHTML="Edit",c.addEventListener("click",()=>{const u=b.indexOf(e);let d=prompt("Edit Task");d==null||d==""?console.log("No changes made"):(b[u].title=d,n.children[0].innerHTML=d,p())}),n.append(i,r,c,a),t.append(n),h==null||h.append(t),p()}function p(){localStorage.setItem("TASKS",JSON.stringify(b))}function E(){const e=localStorage.getItem("TASKS");return e==null?[]:JSON.parse(e)}