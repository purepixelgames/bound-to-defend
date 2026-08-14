import{H as Pd,I as Nd,K as Py,Lt as ky,O as Ly,S as Gy,V as Oy,Z as Sd,m as Fd,p as Ey,rt as Ug,sn as uv,v as Fy}from"./chunk-I9e1zlsS.js";var x=(t,n)=>n.version;function h(t,n){if(t&1&&(Nd(0,`span`,6),uv(1),Sd()),t&2){let e=Gy().$implicit;Ug(),Fd(e.date)}}function b(t,n){if(t&1&&(Nd(0,`h2`),uv(1),Sd()),t&2){let e=Gy().$implicit;Ug(),Fd(e.title)}}function _(t,n){if(t&1&&(Nd(0,`li`),uv(1),Sd()),t&2){let e=n.$implicit;Pd(`devlog-heading`,e.heading),Ug(),Fd(e.text)}}function E(t,n){if(t&1&&(Nd(0,`article`,3)(1,`header`,4)(2,`span`,5),uv(3),Sd(),ky(4,h,2,1,`span`,6),Sd(),ky(5,b,2,1,`h2`),Nd(6,`ul`,7),Py(7,_,2,3,`li`,8,Ly),Sd()()),t&2){let e=n.$implicit,s=Gy();Ug(3),Fd(e.version),Ug(),Oy(e.date?4:-1),Ug(),Oy(e.title?5:-1),Ug(2),Fy(s.bodyLines(e.body))}}var y=class t{entries=[{version:`v0.1.1`,date:`2026-AUG-10`,title:`Live on itch.io`,body:`Window and linux download available!
6 language localization (still some missing keys)
Mine unlocked 
alchemist unlocked
Auto looter companions unlocked 
1 NEW starting class (total 5 classes) 
16+ unique gear (total unique gear exceeds 136 now) 
60+ different in game skill/stat upgrade choices 
Gear Upgrade system 
Gear Gacha pull system
Currency storage per wave interest added
Wave early start system 
Mid game save system 
Cosmetic equip system (permanent inventory)
End of season leaderboard permanent rewards 
Merge system revamp 
Hud revamp 
Many skill rebalancing 
More additions not even mentioned`},{version:`v0.2`,date:`TBA`,title:`What's Coming`,body:`Full localization overhaul 
Boss waves comes with easy/medium difficulty choice 
Manual/auto stage progression 
Button placeholder swops with npc sprites 
Leaderboard view from within the stage
Additional bosses 
Per run quests (hunting/crafting)rewards will be(skill points)`},{version:`v0.0.6`,date:`2026-SEP-13`,title:``,body:`--------UPDATE NODES----------

*Additional map added stage 2 with its own real time global leaderboard 

*persistant save alongside gear

*auto attack targetting assist mode (auto toggle)

*inventory gear assistance 

*inventory expanded filters  

*item locking and unlocking

*more enemies 

*summons now inherit knock back from player stats 

*summon upgrade now include attack range 

*poison damage life time extended and damage ticks faster 

*max mine traps reduced from 150 to 100and hard cap is 110

*merging gear costs has been largely increased, late gave this becomes trivial`}];bodyLines(n){return n.split(`
`).map(e=>e.trim()).filter(e=>e.length>0).map(e=>{let s=/^-{3,}.+-{3,}$/.test(e);return{text:s?e.replace(/^-+|-+$/g,``).trim():e.replace(/^[-*]\s*/,``),heading:s}})}static ɵfac=function(e){return new(e||t)};static ɵcmp=Ey({type:t,selectors:[[`app-devlogs`]],decls:10,vars:0,consts:[[1,`page-hero`],[1,`section`,`container`],[1,`devlog-list`],[1,`devlog`,`card`],[1,`devlog-head`],[1,`devlog-version`],[1,`devlog-date`],[1,`devlog-body`],[3,`devlog-heading`]],template:function(e,s){e&1&&(Nd(0,`section`)(1,`div`,0)(2,`h1`),uv(3,`Devlogs`),Sd(),Nd(4,`p`),uv(5,` Patch notes and behind-the-scenes updates straight from development. `),Sd()(),Nd(6,`div`,1)(7,`div`,2),Py(8,E,9,3,`article`,3,x),Sd()()()),e&2&&(Ug(8),Fy(s.entries))},styles:[`.devlog-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.devlog[_ngcontent-%COMP%]{padding:1.6rem 1.5rem;display:flex;flex-direction:column;gap:.75rem;text-align:center;transition:transform .15s,box-shadow .15s}.devlog[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:var(--%NS%shadow-pop)}.devlog-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.75rem;flex-wrap:wrap}.devlog-version[_ngcontent-%COMP%]{font-family:var(--%NS%font-display);font-size:.8rem;text-transform:uppercase;letter-spacing:.07em;color:var(--%NS%grass);background:var(--%NS%grass-glow);border:1px solid var(--%NS%grass-dark);border-radius:999px;padding:.22rem .7rem}.devlog-date[_ngcontent-%COMP%]{font-weight:700;color:var(--%NS%cream-dim);font-size:.82rem;text-transform:uppercase;letter-spacing:.06em}.devlog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--%NS%gold)}.devlog-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem;margin:0;padding:0;list-style:disc inside}.devlog-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%cream-dim);font-size:.98rem}.devlog-body[_ngcontent-%COMP%]   li.devlog-heading[_ngcontent-%COMP%]{list-style:none;margin-top:.3rem;font-family:var(--%NS%font-display);font-size:.95rem;text-transform:uppercase;letter-spacing:.07em;color:var(--%NS%gold)}`]})};export{y as Devlogs};