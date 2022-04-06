"use strict";(self["webpackChunkmusic_app"]=self["webpackChunkmusic_app"]||[]).push([[692],{4692:function(a,e,l){l.r(e),l.d(e,{default:function(){return g}});var t=l(3396),c=l(7139),s=l(9242);const r={class:"player"},n={class:"player__description"},i=["src"],o={class:"player__description__info"},u={class:"player__actions"},m={class:"player__config"};function p(a,e,l,p,v,d){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",n,[(0,t._)("img",{src:a.cover,alt:"Cover Track"},null,8,i),(0,t._)("div",o,[(0,t._)("strong",null,(0,c.zw)(a.title),1),(0,t._)("span",null,(0,c.zw)(a.album),1)])]),(0,t._)("div",u,[(0,t._)("i",{class:"fa-solid fa-backward",onClick:e[0]||(e[0]=(...e)=>a.prev&&a.prev(...e))}),a.isPlaying?((0,t.wg)(),(0,t.iD)("i",{key:0,class:"fa-solid fa-circle-pause player__actions__play",onClick:e[1]||(e[1]=(...e)=>a.pause&&a.pause(...e))})):((0,t.wg)(),(0,t.iD)("i",{key:1,class:"fa-solid fa-circle-play player__actions__play",onClick:e[2]||(e[2]=(...e)=>a.play&&a.play(...e))})),(0,t._)("i",{class:"fa-solid fa-forward",onClick:e[3]||(e[3]=(...e)=>a.next&&a.next(...e))})]),(0,t._)("div",m,[(0,t.wy)((0,t._)("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":e[4]||(e[4]=e=>a.volume=e),onChange:e[5]||(e[5]=(...e)=>a.changeVolume&&a.changeVolume(...e))},null,544),[[s.nr,a.volume]]),(0,t._)("i",{class:(0,c.C_)(a.volumenIcon),onClick:e[6]||(e[6]=(...e)=>a.changeVolState&&a.changeVolState(...e))},null,2)])])}var v=l(7627),d=l(4870);const _=(a,e=30)=>a.length>e?`${a.slice(0,e)}...`:a;var k=(0,t.aZ)({name:"MusicPlayer",setup(){const a=(0,v.oR)(),e=(0,d.iH)(!0),l=(0,d.iH)(15),c=(0,t.Fl)((()=>a.state.currentTrack.preview)),s=(0,d.iH)("fa-solid fa-volume-low"),r=a.state.tracks.length,n=new Audio,i=()=>{k(),n.play(),e.value=!0},o=()=>{n.pause(),e.value=!1},u=()=>{const e=a.state.tracks.findIndex((e=>e.id===a.state.currentTrack.id));e+1===r?a.commit("setCurrentTrack",a.state.tracks[0]):a.commit("setCurrentTrack",a.state.tracks[e+1])},m=()=>{const e=a.state.tracks.findIndex((e=>e.id===a.state.currentTrack.id));0===e?a.commit("setCurrentTrack",a.state.tracks[r-1]):a.commit("setCurrentTrack",a.state.tracks[e-1])},p=()=>{s.value=n.volume>.6?"fa-solid fa-volume-high":n.volume>0?"fa-solid fa-volume-low":"fa-solid fa-volume-xmark"},k=()=>{n.volume=l.value/100,p()},f=()=>{n.volume=n.volume>0?0:l.value/100,p()};return(0,t.YP)(c,(()=>{n.src=c.value,i()})),{cover:(0,t.Fl)((()=>a.state.currentTrack.album.cover_medium)),title:(0,t.Fl)((()=>_(a.state.currentTrack.title))),album:(0,t.Fl)((()=>_(a.state.currentTrack.album.title))),volume:l,audio:c,isPlaying:e,volumenIcon:s,play:i,pause:o,next:u,prev:m,changeVolume:k,changeVolState:f}}}),f=l(89);const y=(0,f.Z)(k,[["render",p],["__scopeId","data-v-49b34a2c"]]);var g=y}}]);
//# sourceMappingURL=692.98069c00.js.map