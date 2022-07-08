(function(){"use strict";var e={946:function(e,t,a){var n=a(9242),o=a(3396);function l(e,t){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var r=a(89);const i={},c=(0,r.Z)(i,[["render",l]]);var s=c,d=a(678);function u(e,t,a,n,l,r){const i=(0,o.up)("HeaderDesktop"),c=(0,o.up)("HomeView"),s=(0,o.up)("AboutView"),d=(0,o.up)("ProjectView"),u=(0,o.up)("BackHome"),m=(0,o.up)("ContactView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(c),(0,o.Wm)(s),(0,o.Wm)(d),(0,o.Wm)(u),(0,o.Wm)(m)],64)}const m={class:"bg-black h-screen text-white px-4 py-8 section",id:"home","data-section":"text-white"},p=(0,o.uE)('<div class="flex flex-col items-end text-2xl pr-2 md:hidden"><a href="https://github.com/HugoMrnth"><i class="fa fa-github" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/hugo-marneth/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div><div class="pr-2 w-5/12 md:w-4/12 md:mt-14"><h1 class="text-white flex flex-col text-5xl pb-3">Mr <span class="text-primary">Panda</span></h1><hr class="w-8/12 m-auto md:w-3/12"></div><div class="flex md:h-3/4 justify-between md:w-10/12"><div class="image w-full my-8 md:my-4 md:w-4/6 md:ml-8 md:bg-center"></div><div class="hidden md:flex flex-col text-7xl"><h3 class="flex flex-col mb-6">Front-end <span>Developper</span></h3><h3 class="flex flex-col text-primary text-end">Nantes, <span>France</span></h3></div></div><p class="py-5 text-xl border-dashed border-y-2 md:hidden">Hello Dolly, the name is Hugo and I’m a 26 yo Front-end developper currently studying at the “Web@cadémie” by Epitec in Nantes, France.</p>',4);function f(e,t,a,n,l,r){const i=(0,o.up)("NavMobile");return(0,o.wg)(),(0,o.iD)("div",m,[p,(0,o.Wm)(i)])}const b={class:"flex w-full justify-center py-5 md:hidden text-2xl"},v=(0,o._)("span",{class:"text-white"},"|",-1),h=(0,o._)("span",{class:"text-white"},"|",-1),x=(0,o.aZ)({name:"NavMobile"});var w=(0,o.aZ)({...x,setup(e){function t(e){let t=document.getElementById(e);console.log(t),t?.scrollIntoView({behavior:"smooth"})}return(e,a)=>((0,o.wg)(),(0,o.iD)("nav",b,[(0,o._)("p",{class:"text-white px-2",onClick:a[0]||(a[0]=e=>t("about"))},"About"),v,(0,o._)("p",{class:"text-white px-2",onClick:a[1]||(a[1]=e=>t("project"))},"Projects"),h,(0,o._)("p",{class:"text-white px-2",onClick:a[2]||(a[2]=e=>t("contact"))},"Contact")]))}});const g=w;var y=g,k=(0,o.aZ)({name:"HomeView",components:{NavMobile:y}});const _=(0,r.Z)(k,[["render",f]]);var Z=_,j=a(1251);const C={class:"min-h-screen bg-black px-0 md:px-4 py-8 text-white section",id:"project","data-section":"text-white"},V={class:"md:hidden"},D={class:"hidden md:block py-10 px-4 text-white"};function H(e,t,a,n,l,r){const i=(0,o.up)("PageTitleMobile"),c=(0,o.up)("PageTitleDesktop"),s=(0,o.up)("ProjectGrid");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",V,[(0,o.Wm)(i,{title:"Projects",borderColor:"border-white"})]),(0,o._)("div",D,[(0,o.Wm)(c,{title:"Project"})]),(0,o.Wm)(s)])}var M=a(4003),T=a(6536),W=a(7139),S=a(4870);const I={class:"band text-black w-full p-4 bg-white justify-center items-center flex"},P=["href"],q=(0,o.aZ)({name:"ProjectCard"});var E=(0,o.aZ)({...q,props:{title:{type:String,required:!0},url:{type:String,required:!0},image:{type:String,required:!1}},setup(e){(0,S.iH)("flex"),(0,S.iH)(!1),(0,S.iH)(!0),(0,S.iH)("hidden"),(0,S.iH)("");return(t,a)=>((0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("a",{href:e.url,class:"text-2xl underline"},(0,W.zw)(e.title),9,P)]))}});const A=E;var O=A;const B={class:"h-80 flex justify-center flex-wrap mt-4"},U=(0,o.aZ)({name:"ProjectGrid",components:{ProjectCard:O}});var L=(0,o.aZ)({...U,setup(e){const t=(0,S.iH)([]),a="https://hmportfolio.fr/";return(0,o.bv)((()=>{fetch("https://hmportfolio.fr/api/projects?populate=image",{headers:{Authorization:"Bearer 9ae3f7b5a4da8e2b2c37adaf213a58598ac0912c14fd306aab9b505959b2f30e303b3c4bdc2d1f24377a30405c1e3c86cad4b7cf7d61e24dc3394ba8fe145e20b8f35c56fa62fbae2e5060843d1d37c08a08b56e067af216b31d41a1d21f139ba6e7d4782b49fec98c8b1ee008476a76f8f3e00d6a4361c0a21eedd41db60994"}}).then((e=>e.json())).then((e=>{console.log(e.data[0].attributes.image.data.attributes.url),t.value=e.data}))})),(e,n)=>((0,o.wg)(),(0,o.iD)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"card w-2/5 h-2/6 md:h-1/2 md:w-1/5 bg-slate-900 flex items-end border-8 mx-1 md:mx-2 border-white text-white hover:scale-105 hover:rotate-m12",key:e.id,style:(0,W.j5)({"background-image":`url(${a}${e.attributes.image.data.attributes.url})`})},[(0,o.Wm)(O,{title:e.attributes.titre,url:e.attributes.url},null,8,["title","url"])],4)))),128)),(0,o.Uk)(" "+(0,W.zw)(a))]))}});const z=(0,r.Z)(L,[["__scopeId","data-v-ba4e4cc2"]]);var F=z,$=(0,o.aZ)({name:"ProjectView",components:{PageTitleMobile:M.Z,PageTitleDesktop:T.Z,ProjectGrid:F}});const N=(0,r.Z)($,[["render",H]]);var Y=N;const G=(0,o.uE)('<div class="flex justify-between text-2xl pr-2 opacity-100"><a href="https://github.com/HugoMrnth"><i class="fa fa-github mx-3" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/hugo-marneth/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>',1),K={class:"flex items-end text-xl cursor-pointer"},J=(0,o.aZ)({name:"HeaderDesktop"});var R=(0,o.aZ)({...J,setup(e){const t=(0,S.iH)("text-white");function a(e){let t=document.getElementById(e);t?.scrollIntoView({behavior:"smooth"})}return(0,o.bv)((()=>{const e=document.getElementById("about")?.offsetTop,a=document.getElementById("about")?.offsetHeight,n=e+a-20,o=document.getElementById("contact")?.offsetTop,l=document.getElementById("contact")?.offsetHeight,r=o+l-20;window.onscroll=function(){document.documentElement.scrollTop>e-25&&document.documentElement.scrollTop<n||document.documentElement.scrollTop>o-25&&document.documentElement.scrollTop<r?t.value="text-black":t.value="text-white"};const i={root:null,threshold:0,rootMargin:"0px 0px -50px 0px"},c=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("in-view"),c.unobserve(e.target))}))}),i);window.addEventListener("DOMContentLoaded",(e=>{const t=document.querySelectorAll(".section");for(let a of t)a!==t[0]&&c.observe(a)}))})),(e,n)=>((0,o.wg)(),(0,o.iD)("nav",{class:(0,W.C_)(["hidden md:flex w-full justify-between p-4 fixed nav",t.value])},[G,(0,o._)("div",K,[(0,o._)("p",{class:"px-2",onClick:n[0]||(n[0]=e=>a("about"))},"About"),(0,o._)("p",{class:"px-2",onClick:n[1]||(n[1]=e=>a("project"))},"Projects"),(0,o._)("p",{class:"px-2",onClick:n[2]||(n[2]=e=>a("contact"))},"Contact")])],2))}});const X=R;var Q=X;const ee=(0,o._)("i",{class:"fa fa-long-arrow-up"},null,-1),te=[ee],ae=(0,o.aZ)({name:"BackHome",components:{}});var ne=(0,o.aZ)({...ae,setup(e){const t=(0,S.iH)("md:hidden");function a(){window.scrollTo({top:0,left:0,behavior:"smooth"})}return(0,o.bv)((()=>{let e=document.getElementById("about")?.offsetTop;e/=2,window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>e?t.value="md:block":t.value="md:hidden"}))})),(e,n)=>((0,o.wg)(),(0,o.iD)("button",{class:(0,W.C_)(["hidden md:block rounded-full bg-primary text-white fixed right-0 mr-5 mb-5 bottom-0 px-5 py-2 text-4xl hover:animate-bounce",t.value]),onClick:a},te,2))}});const oe=ne;var le=oe;const re={class:"h-full md:h-screen pt-8 text-black section overflow-hidden",id:"contact","data-section":"text-black"},ie={class:"md:hidden px-4"},ce={class:"hidden md:block pt-10 pb-6 px-4 text-black"},se=(0,o._)("div",{class:"mt-8 px-4 md:text-2xl md:mt-0 mb-4"},[(0,o._)("h2",null,"If you have a question or a proposition I'll be happy to get back at you!")],-1);function de(e,t,a,n,l,r){const i=(0,o.up)("PageTitleMobile"),c=(0,o.up)("PageTitleDesktop"),s=(0,o.up)("ContactForm"),d=(0,o.up)("FooterAll");return(0,o.wg)(),(0,o.iD)("div",re,[(0,o._)("div",ie,[(0,o.Wm)(i,{title:"Contact",borderColor:"border-black"})]),(0,o._)("div",ce,[(0,o.Wm)(c,{title:"Contact"})]),se,(0,o.Wm)(s),(0,o.Wm)(d)])}const ue=["type","placeholder","name"],me=(0,o.aZ)({name:"InputText"});var pe=(0,o.aZ)({...me,props:{placeholder:{type:String,required:!0},type:{type:String,required:!0},name:{type:String,required:!0}},setup(e){const t=e;return(a,n)=>((0,o.wg)(),(0,o.iD)("input",{type:e.type,placeholder:t.placeholder,name:e.name,class:"p-2 border-2 border-black rounded min-w-48 my-2",onInput:n[0]||(n[0]=e=>a.$emit("update:modelValue",e?.target?.value))},null,40,ue))}});const fe=pe;var be=fe;const ve=["rows"],he=(0,o.aZ)({name:"TextArea"});var xe=(0,o.aZ)({...he,props:{rows:{type:String,required:!0}},setup(e){return(t,a)=>((0,o.wg)(),(0,o.iD)("textarea",{class:"w-full rounded p-2",rows:e.rows,placeholder:"Your Message",onInput:a[0]||(a[0]=e=>t.$emit("update:modelValue",e?.target?.value))},null,40,ve))}});const we=xe;var ge=we;const ye={class:"my-2 mx-2 p-2 bg-primary rounded text-white uppercase",type:"submit"},ke=(0,o.aZ)({name:"SubmitBtn"});var _e=(0,o.aZ)({...ke,props:{message:{type:String,required:!0}},setup(e){return(t,a)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",ye,(0,W.zw)(e.message),1)]))}});const Ze=_e;var je=Ze;const Ce={class:"w-11/12 my-10 md:my-2 md:w-6/12 m-auto border-2 border-black rounded bg-slate-900"},Ve=(0,o._)("input",{type:"hidden",name:"apikey",value:"d723d0c8-1c56-47cb-8f7b-6dee329dfc0f"},null,-1),De={class:"flex justify-between"},He={class:"flex justify-end"},Me=(0,o.aZ)({name:"ContactForm",components:{InputText:be,TextArea:ge,SubmitBtn:je}});var Te=(0,o.aZ)({...Me,setup(e){const t=(0,S.iH)({apikey:"d723d0c8-1c56-47cb-8f7b-6dee329dfc0f",name:"",email:"",subject:"",message:""});function a(e){e.preventDefault(),fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.value)}).then((e=>e.json())).then((e=>{console.log(e)}))}return(e,n)=>((0,o.wg)(),(0,o.iD)("div",Ce,[(0,o._)("form",{class:"p-2 m-auto flex flex-col",onSubmit:a},[Ve,(0,o._)("div",De,[(0,o.Wm)(be,{type:"text",placeholder:"Your name",name:"name",modelValue:t.value.name,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value.name=e)},null,8,["modelValue"]),(0,o.Wm)(be,{type:"email",placeholder:"Your email",name:"email",modelValue:t.value.email,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value.email=e)},null,8,["modelValue"])]),(0,o.Wm)(be,{type:"text",placeholder:"Subject",name:"subject",modelValue:t.value.subject,"onUpdate:modelValue":n[2]||(n[2]=e=>t.value.subject=e)},null,8,["modelValue"]),(0,o.Wm)(ge,{rows:"10",modelValue:t.value.message,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value.message=e)},null,8,["modelValue"]),(0,o._)("div",He,[(0,o.Wm)(je,{message:"Submit"})])],32)]))}});const We=Te;var Se=We;const Ie={class:"flex bg-black w-full justify-center py-4 md:hidden text-2xl static bottom-0"},Pe=(0,o._)("span",{class:"text-white"},"|",-1),qe=(0,o._)("span",{class:"text-white"},"|",-1),Ee=(0,o._)("nav",{class:"hidden md:flex bg-black text-white w-full p-5 mt-5"},[(0,o._)("p",null,[(0,o._)("i",{class:"fa fa-copyright","aria-hidden":"true"}),(0,o.Uk)(" 2022 - created by Hugo Marneth")])],-1),Ae=(0,o.aZ)({name:"FooterAll"});var Oe=(0,o.aZ)({...Ae,setup(e){function t(e){let t=document.getElementById(e);t?.scrollIntoView({behavior:"smooth"})}return(e,a)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",Ie,[(0,o._)("p",{class:"text-white px-2",onClick:a[0]||(a[0]=e=>t("about"))},"About"),Pe,(0,o._)("p",{class:"text-white px-2",onClick:a[1]||(a[1]=e=>t("project"))},"Projects"),qe,(0,o._)("p",{class:"text-white px-2",onClick:a[2]||(a[2]=e=>t("contact"))},"Contact")]),Ee],64))}});const Be=Oe;var Ue=Be,Le=(0,o.aZ)({name:"ContactView",components:{PageTitleMobile:M.Z,PageTitleDesktop:T.Z,ContactForm:Se,FooterAll:Ue}});const ze=(0,r.Z)(Le,[["render",de]]);var Fe=ze,$e=(0,o.aZ)({name:"MainView",components:{HomeView:Z,AboutView:j["default"],ProjectView:Y,HeaderDesktop:Q,BackHome:le,ContactView:Fe}});const Ne=(0,r.Z)($e,[["render",u]]);var Ye=Ne;const Ge=[{path:"/",name:"main",component:Ye},{path:"/about",name:"about",component:()=>Promise.resolve().then(a.bind(a,1251))}],Ke=(0,d.p7)({history:(0,d.PO)("/Portfolio/"),routes:Ge});var Je=Ke;(0,n.ri)(s).use(Je).mount("#app")},6536:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3396),o=a(7139);const l={class:"text-left text-5xl"},r=(0,n.aZ)({name:"PageTitleDesktop"});var i=(0,n.aZ)({...r,props:{title:{type:String,required:!0}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h2",l,(0,o.zw)(e.title),1)]))}});const c=i;var s=c},4003:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3396),o=a(7139);const l={class:""},r=(0,n.aZ)({name:"PageTitleMobile"});var i=(0,n.aZ)({...r,props:{title:{type:String,required:!0},borderColor:{type:String,required:!0}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("h2",{class:(0,o.C_)(["w-6/12 p-3 m-auto border-y-2 text-center text-4xl",e.borderColor])},(0,o.zw)(e.title),3)]))}});const c=i;var s=c},1251:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(3396),o=a(4870),l=a(4003);const r={class:"py-5 px-6 my-8 bg-card h-1/2 text-2xl w-11/12 m-auto border-2 border-black"},i=(0,n._)("p",null,[(0,n._)("i",{class:"fa fa-envelope","aria-hidden":"true"}),(0,n._)("span",null," hugo.marneth@yahoo.fr")],-1),c=(0,n._)("p",null,[(0,n._)("i",{class:"fa fa-mobile text-4xl mx-1","aria-hidden":"true"}),(0,n._)("span",null," +33 6 66 72 95 17")],-1),s=[i,c],d=(0,n.aZ)({name:"ContactCardMobile"});var u=(0,n.aZ)({...d,setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("div",r,s))}});const m=u;var p=m;const f={class:"flex flex-col items-end mr-8 text-2xl"},b=(0,n._)("p",{class:"click"},"Click me",-1),v=(0,n._)("i",{class:"fa fa-long-arrow-down text-6xl mt-2 mr-10","aria-hidden":"true"},null,-1),h=[b,v],x=(0,n.aZ)({name:"ClickMeMobile"});var w=(0,n.aZ)({...x,setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("div",f,h))}});const g=w;var y=g,k=a(7139);const _=(0,n.aZ)({name:"InfosSectionMobile"});var Z=(0,n.aZ)({..._,props:{title:{type:String,required:!0}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"h-full text-center flex justify-center items-center bg-black border-2 border-white",onClick:a[0]||(a[0]=e=>t.$emit("update:modelValue",!0))},[(0,n._)("p",null,(0,k.zw)(e.title),1)]))}});const j=Z;var C=j,V=a(5068);const D={class:"absolute h-full top-0 left-0 bg-slate-900 text-white w-full md:hidden p-2"},H={class:"flex justify-end"},M={class:"text-4xl text-center"},T={class:"w-8/12 m-auto text-center flex justify-center items-center mt-10"},W=["innerHTML"],S=(0,n.aZ)({name:"InfoModalMobile"});var I=(0,n.aZ)({...S,props:{title:{type:String,required:!0},id:{type:String,required:!0}},setup(e){const t=e,a=(0,o.iH)("");return(0,n.bv)((()=>{fetch(`/api/infos/${t.id}`,{headers:{Authorization:"Bearer 401554c355310447b849f051bc86a6b29abc3287baff153cbd2816964c62c38c89c9b8e96baf52bddf41df2c496eeaa092dd29aade320c34c38ad5e7df9c5308e8c591e6435c54ffcc5c3ef15c899697ab99f7a6277f5d98b1ff75f109675fce091b04043d9c0afeab9e2ccd62f3dd24d4f9de2fe47a5109071fb0450795bb74"}}).then((e=>e.json())).then((e=>{a.value=(0,V.TU)(e.data.attributes.Main_Content)}))})),(t,o)=>((0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("div",H,[(0,n._)("button",{class:"rounded-full bg-primary border-2 border-primary py-1 px-2",onClick:o[0]||(o[0]=e=>t.$emit("update:modelValue",!1))},"X")]),(0,n._)("h3",M,(0,k.zw)(e.title),1),(0,n._)("div",T,[(0,n._)("div",{class:"text-3xl mainMobile max-w-full",innerHTML:a.value},null,8,W)])]))}});const P=I;var q=P,E=a(6536);const A={class:"h-80 mt-2 grid-photo grid grid-rows-2 grid-cols-3"};function O(e,t,a,o,l,r){const i=(0,n.up)("InfoCardDesktop");return(0,n.wg)(),(0,n.iD)("div",A,[(0,n.Wm)(i,{title:"About",id:"1"}),(0,n.Wm)(i,{title:"Contact",id:"2"}),(0,n.Wm)(i,{title:"Coding Skills",id:"3"}),(0,n.Wm)(i,{title:"Soft Skills",id:"4"}),(0,n.Wm)(i,{title:"Languages",id:"5"}),(0,n.Wm)(i,{title:"Interests",id:"6"})])}var B=a(9242);const U={key:0,class:"front text-3xl justify-center items-center h-full w-full flex"},L={class:"text-white"},z={key:0,class:"back bg-slate-900 text-white w-full h-full justify-center items-center flex"},F=["innerHTML"],$=(0,n.aZ)({name:"InfoCardDesktop"});var N=(0,n.aZ)({...$,props:{title:{type:String,required:!0},id:{type:String,required:!0}},setup(e){const t=e,a=(0,o.iH)("flex"),l=(0,o.iH)(!1),r=(0,o.iH)(!0),i=(0,o.iH)("hidden"),c=(0,o.iH)("");function s(){r.value=!1,l.value=!0,a.value="hidden",i.value="flex"}function d(){i.value="hidden",l.value=!1,r.value=!0,a.value="flex"}return(0,n.bv)((()=>{fetch(`https://hmportfolio.fr/api/infos/${t.id}`,{headers:{Authorization:"Bearer 9ae3f7b5a4da8e2b2c37adaf213a58598ac0912c14fd306aab9b505959b2f30e303b3c4bdc2d1f24377a30405c1e3c86cad4b7cf7d61e24dc3394ba8fe145e20b8f35c56fa62fbae2e5060843d1d37c08a08b56e067af216b31d41a1d21f139ba6e7d4782b49fec98c8b1ee008476a76f8f3e00d6a4361c0a21eedd41db60994"}}).then((e=>e.json())).then((e=>{c.value=(0,V.TU)(e.data.attributes.Main_Content)}))})),(t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"card h-full text-center bg-transparent border-4 border-white overflow-hidden",onMouseover:s,onMouseleave:d},[(0,n.Wm)(B.uT,{name:"fade"},{default:(0,n.w5)((()=>[r.value?((0,n.wg)(),(0,n.iD)("div",U,[(0,n._)("p",L,(0,k.zw)(e.title),1)])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(B.uT,{name:"slide-fade"},{default:(0,n.w5)((()=>[l.value?((0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("div",{class:"w-8/12 main",innerHTML:c.value},null,8,F)])):(0,n.kq)("",!0)])),_:1})],32))}});const Y=N;var G=Y,K=(0,n.aZ)({name:"InfosGridMobile",components:{InfoCardDesktop:G}}),J=a(89);const R=(0,J.Z)(K,[["render",O],["__scopeId","data-v-d704630a"]]);var X=R;const Q={class:"h-screen px-4 py-8 text-black section",id:"about","data-section":"text-black"},ee={class:"mobile md:hidden relative"},te={class:"h-2/full grid grid-rows-2 grid-cols-2 text-3xl bg-white text-white"},ae=(0,n._)("a",{href:"https://www.youtube.com/watch?v=Tish3KkNnLc",class:"h-full text-center flex justify-center items-center bg-black border-2 border-white"},"Resume",-1),ne={class:"desktop hidden md:block py-10 px-4"},oe=(0,n.aZ)({name:"AboutView",components:{PageTitleMobile:l.Z,ContactCardMobile:p,ClickMeMobile:y,InfosSectionMobile:C,InfosModalMobile:q,PageTitleDesktop:E.Z,InfosGridDesktop:X}});var le=(0,n.aZ)({...oe,setup(e){const t=(0,o.iH)(!1),a=(0,o.iH)(!1),r=((0,o.iH)(!1),(0,o.iH)(!1));return(e,o)=>((0,n.wg)(),(0,n.iD)("div",Q,[(0,n._)("div",ee,[(0,n.Wm)(l.Z,{title:"About",borderColor:"border-black"}),(0,n.Wm)(p),(0,n.Wm)(y),(0,n._)("div",te,[(0,n.Wm)(C,{title:"Coding Skills",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,["modelValue"]),(0,n.Wm)(C,{title:"Languages",modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e)},null,8,["modelValue"]),ae,(0,n.Wm)(C,{title:"Interests",modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=e=>r.value=e)},null,8,["modelValue"])]),t.value?((0,n.wg)(),(0,n.j4)(q,{key:0,title:"Coding Skills",id:"3",modelValue:t.value,"onUpdate:modelValue":o[3]||(o[3]=e=>t.value=e)},null,8,["modelValue"])):(0,n.kq)("",!0),a.value?((0,n.wg)(),(0,n.j4)(q,{key:1,title:"Languages",id:"5",modelValue:a.value,"onUpdate:modelValue":o[4]||(o[4]=e=>a.value=e)},null,8,["modelValue"])):(0,n.kq)("",!0),r.value?((0,n.wg)(),(0,n.j4)(q,{key:2,title:"Interests",id:"6",modelValue:r.value,"onUpdate:modelValue":o[5]||(o[5]=e=>r.value=e)},null,8,["modelValue"])):(0,n.kq)("",!0)]),(0,n._)("div",ne,[(0,n.Wm)(E.Z,{title:"About",borderColor:"border-black"}),(0,n.Wm)(X)])]))}});const re=le;var ie=re}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],l=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,l<r&&(r=l));if(i){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,r=n[0],i=n[1],c=n[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(n);s<r.length;s++)l=r[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(946)}));n=a.O(n)})();
//# sourceMappingURL=app.5b290905.js.map