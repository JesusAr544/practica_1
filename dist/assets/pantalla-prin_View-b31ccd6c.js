import{r as k,a as t,o as d,c as p,b as _,F as y,d as V,e,w as n,f as a,t as r,u as C,g as $,h as z}from"./index-8db468e1.js";const A={style:{display:"flex","flex-wrap":"wrap","justify-content":"center"}},D={style:{margin:"6px"}},E=_("br",null,null,-1),H=_("br",null,null,-1),I=_("br",null,null,-1),L={__name:"Pokemones_comp",setup(B){const l=k({});let u=k([]);fetch("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0").then(o=>o.json()).then(o=>l.value=o);const w=()=>{for(let o=0;o<=40;o++)fetch(l.value.results[o].url).then(s=>s.json()).then(s=>u.value.push(s))};return(o,s)=>{const v=t("v-img"),m=t("v-card-title"),f=t("v-card-subtitle"),b=t("v-divider"),h=t("v-card-text"),g=t("v-expand-transition"),x=t("v-card");return d(),p(y,null,[_("button",{type:"button",onClick:w},"generar"),_("div",A,[(d(!0),p(y,null,V(C(u),i=>(d(),p("div",D,[e(x,{style:{"background-color":"rgba(18, 0, 82, 0.459)",border:"6px solid  rgb(213, 223, 76)"},class:"mx-auto","max-width":"344"},{default:n(()=>[e(v,{style:{width:"25vw",height:"50vh","border-block-end":"6px solid rgb(213, 223, 76)","background-color":"rgb(255, 255, 255)"},src:i.sprites.front_default,cover:""},null,8,["src"]),e(m,null,{default:n(()=>[a(r(i.name),1)]),_:2},1024),e(f,null,{default:n(()=>[a(" Tipo: "+r(i.types[0].type.name),1)]),_:2},1024),E,e(g,null,{default:n(()=>[_("div",null,[e(b),e(h,null,{default:n(()=>[a(" Habilidad: "),H,I,a(" "+r(i.abilities[0].ability.name),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)]))),256))])],64)}}},P=$(),q={__name:"pantalla-prin_View",setup(B){const l=k(null),u=[["mdi-inbox-arrow-down","Inbox"],["mdi-send","Send"],["mdi-delete","Trash"],["mdi-alert-octagon","Spam"]];return(w,o)=>{const s=t("v-avatar"),v=t("v-sheet"),m=t("v-divider"),f=t("v-icon"),b=t("v-list-item-title"),h=t("v-list-item"),g=t("v-list"),x=t("v-navigation-drawer"),i=t("v-app-bar-nav-icon"),j=t("v-toolbar-title"),N=t("v-app-bar"),S=t("v-main"),T=t("v-app");return d(),z(T,{id:"inspire"},{default:n(()=>[e(x,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=c=>l.value=c)},{default:n(()=>[e(v,{color:"grey-lighten-4",class:"pa-4"},{default:n(()=>[e(s,{class:"mb-4",color:"grey-darken-1",size:"64"}),_("div",null,r(C(P).Correo),1)]),_:1}),e(m),e(g,null,{default:n(()=>[(d(),p(y,null,V(u,([c,F])=>e(h,{key:c,link:""},{prepend:n(()=>[e(f,null,{default:n(()=>[a(r(c),1)]),_:2},1024)]),default:n(()=>[e(b,null,{default:n(()=>[a(r(F),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1},8,["modelValue"]),e(N,null,{default:n(()=>[e(i,{onClick:o[1]||(o[1]=c=>l.value=!l.value)}),e(j,null,{default:n(()=>[a("Application")]),_:1})]),_:1}),e(S,null,{default:n(()=>[e(L)]),_:1})]),_:1})}}};export{q as default};
