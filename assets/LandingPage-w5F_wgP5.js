import{_ as h}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,r as u,a as e,w as m,b as f,n as q,p as y,d as j,t as C,e as _,f as c,g as w,h as I,i as z}from"./index-89EX7AMM.js";import{_ as N}from"./logo-VDId8S0D.js";const L={name:"QrCodeScanner",components:{},props:{qrbox:{type:Number,default:250},fps:{type:Number,default:10}},data(){return{}},computed:{},methods:{onScanSuccess(s,t){this.$emit("result",{decodedText:s,decodedResult:t})},onScanFailure(s){}},mounted(){console.log("window.innerHeight"),console.log(window.innerHeight),console.log("window.innerWidth"),console.log(window.innerWidth);const s={fps:10,qrbox:{width:250,height:250}};new Html5QrcodeScanner("qr-code-full-region",s).render(this.onScanSuccess,this.onScanFailure)},created(){}},V={id:"qr-code-full-region",style:{width:"100vw",height:"100vh"}};function E(s,t,o,p,n,d){return i(),a("div",V)}const $=h(L,[["render",E]]),R={name:"Modal",components:{QrCodeScanner:$},data(){return{}},computed:{},methods:{close(){this.$emit("close")},result(s){this.$emit("resultmain",s)}},mounted(){}},Q={class:"modal fade modal-visible show",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},A={class:"modal-dialog"},B={class:"modal-content",style:{}},D={style:{width:"100vw",height:"100vh"}};function F(s,t,o,p,n,d){const l=u("qr-code-scanner");return i(),a("div",null,[e("div",Q,[e("div",A,[e("div",B,[e("button",{onClick:t[0]||(t[0]=m((...x)=>d.close&&d.close(...x),["prevent"])),type:"button",style:{position:"fixed","z-index":"300",color:"red",height:"10px",width:"10px","font-weight":"bolder",left:"8px",top:"2px","font-size":"1.5rem"}},"x"),e("div",D,[f(l,{onResult:d.result,style:{}},null,8,["onResult"])])])])])])}const P=h(R,[["render",F],["__scopeId","data-v-4f0281b3"]]),H={name:"spinner"},T={class:"spinner-cover",id:"spinner-cover",style:{}},Z=e("div",{class:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")],-1),W=[Z];function O(s,t,o,p,n,d){return i(),a("div",T,W)}const v=h(H,[["render",O]]),U={name:"SpinnerModal",components:{Spinner:v},data(){return{}},computed:{},methods:{},mounted(){}},G={class:"modal fade modal-visible show",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},J={class:"modal-dialog"},K={class:"modal-content",style:{width:"100vw",height:"100vh","padding-top":"200px"}};function X(s,t,o,p,n,d){const l=u("spinner");return i(),a("div",null,[e("div",G,[e("div",J,[e("div",K,[f(l)])])])])}const Y=h(U,[["render",X],["__scopeId","data-v-116ca650"]]),ee={name:"StudentModal",components:{Spinner:v},props:["student"],data(){return{}},computed:{},methods:{close(){this.$emit("close")}},mounted(){}},r=s=>(y("data-v-b662e1b2"),s=s(),j(),s),te={class:"modal fade modal-visible show",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},se={class:"modal-dialog"},oe={class:"modal-content",style:{width:"100vw",height:"100vh","padding-top":"50px"}},ne={class:"col",style:{background:"white",width:"400px",margin:"0 auto","padding-top":"20px"}},de={class:"row"},ie=r(()=>e("div",{class:"col-xl-8",style:{height:"100px",width:"100px",margin:"0 auto",background:"url('/images/success.png')","background-size":"cover","border-radius":"50%"}},null,-1)),le=r(()=>e("div",{class:"col-xl-8",style:{margin:"0 auto","padding-top":"20px"}},[e("h2",{style:{"font-weight":"bolder",width:"100%","text-align":"center"}},"Student ID Valid !!!"),e("br")],-1)),ae={class:"col-xl-8"},re={class:"submit-field"},ce=r(()=>e("h5",null,"Full name ",-1)),ue=["value"],he={class:"col-xl-8"},pe={class:"submit-field"},_e=r(()=>e("h5",null,"Mat No.",-1)),me=["value"],ve={class:"col-xl-8"},ge={class:"submit-field"},xe=r(()=>e("h5",null,"Department",-1)),be=["value"],fe={class:"col-xl-8"},we={class:"submit-field"},ye=r(()=>e("h5",null,"Level",-1)),je=["value"],$e=r(()=>e("div",{class:"col-xl-4"},null,-1)),ke=r(()=>e("div",{class:"col-xl-8"},[e("br")],-1));function Se(s,t,o,p,n,d){return i(),a("div",null,[e("div",te,[e("div",se,[e("div",oe,[e("button",{onClick:t[0]||(t[0]=m((...l)=>d.close&&d.close(...l),["prevent"])),type:"button",style:{position:"fixed","z-index":"300",color:"red",height:"10px",width:"10px","font-weight":"bolder",left:"8px",top:"2px","font-size":"1.5rem"}},"x"),e("div",ne,[e("div",de,[ie,le,e("div",{class:"col-xl-8",style:q(`height: 200px; width: 200px; margin: 0 auto; background: url('${o.student.imageLink}'); background-size:cover;border-radius: 50%`)},null,4),e("div",ae,[e("div",re,[ce,e("input",{type:"text",class:"with-border",value:o.student.name,disabled:"",required:""},null,8,ue)])]),e("div",he,[e("div",pe,[_e,e("input",{type:"text",class:"with-border",value:o.student.matno,disabled:"",required:""},null,8,me)])]),e("div",ve,[e("div",ge,[xe,e("input",{type:"text",class:"with-border",value:o.student.department,disabled:"",required:""},null,8,be)])]),e("div",fe,[e("div",we,[ye,e("input",{type:"text",class:"with-border",value:o.student.level,disabled:"",required:""},null,8,je)])]),$e,ke])])])])])])}const Me=h(ee,[["render",Se],["__scopeId","data-v-b662e1b2"]]),qe={name:"ErrorModal",components:{Spinner:v},props:["error"],data(){return{}},computed:{},methods:{close(){this.$emit("close")}},mounted(){}},g=s=>(y("data-v-473b6b0c"),s=s(),j(),s),Ce={class:"modal fade modal-visible show",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ie={class:"modal-dialog"},ze={class:"modal-content",style:{width:"100vw",height:"100vh","padding-top":"50px"}},Ne={class:"col",style:{background:"white",width:"400px",margin:"0 auto","padding-top":"20px"}},Le={class:"row"},Ve=g(()=>e("div",{class:"col-xl-8",style:{height:"100px",width:"100px",margin:"0 auto",background:"url('/images/failed.png')","background-size":"cover","border-radius":"50%"}},null,-1)),Ee={class:"col-xl-8",style:{margin:"0 auto","padding-top":"20px"}},Re=g(()=>e("h2",{style:{"font-weight":"bolder",width:"100%","text-align":"center"}},"Student ID Invalid !!!",-1)),Qe=g(()=>e("br",null,null,-1)),Ae=g(()=>e("div",{class:"col-xl-8"},[e("br")],-1));function Be(s,t,o,p,n,d){return i(),a("div",null,[e("div",Ce,[e("div",Ie,[e("div",ze,[e("button",{onClick:t[0]||(t[0]=m((...l)=>d.close&&d.close(...l),["prevent"])),type:"button",style:{position:"fixed","z-index":"300",color:"red",height:"10px",width:"10px","font-weight":"bolder",left:"8px",top:"2px","font-size":"1.5rem"}},"x"),e("div",Ne,[e("div",Le,[Ve,e("div",Ee,[Re,e("p",null,C(o.error),1),Qe]),Ae])])])])])])}const De=h(qe,[["render",Be],["__scopeId","data-v-473b6b0c"]]),Fe={name:"LandingPage",components:{ErrorModal:De,StudentModal:Me,SpinnerModal:Y,Spinner:v,Modal:P,QrCodeScanner:$},data(){return{modalStatus:0,spinnerModal:0,studentModal:0,errorModal:0,fetchedStudent:"",error:""}},computed:{},methods:{async resultLoaded(s){this.modalStatus=0,this.spinnerModal=1;try{let t=await axios.post("/fetch-student-by-qr",{qr:s.decodedText});this.fetchedStudent=t.data.data.student,this.spinnerModal=0,this.studentModal=1}catch(t){this.spinnerModal=0,this.errorModal=1;let o=t.response.data.message?t.response.data.message:"";this.error=`${t.message}
${o}`}}},mounted(){console.log("Component mounted.")},created(){var s=["https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js","https://code.jquery.com/jquery-3.5.0.min.js","https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/6.1.8/jquery.mmenu.js","https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.2/tippy.all.min.js","https://cdnjs.cloudflare.com/ajax/libs/simplebar/2.6.1/simplebar.min.js","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.2/bootstrap-slider.min.js","https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js","https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js","https://code.jquery.com/jquery-3.5.0.min.js","/js/full_page.js","js/mmenu.min.js","/js/bootstrap-select.min.js","/js/bootstrap-slider.min.js","/js/snackbar.js","/js/tippy.all.min.js","/js/simplebar.min.js","/js/counterup.min.js","/js/magnific-popup.min.js","/js/slick.min.js","/js/custom.js","https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"];s.forEach(t=>{let o=document.createElement("script");o.setAttribute("src",t),document.head.appendChild(o)})}},Pe={id:"wrapper"},He={id:"header-container",class:"fullwidth"},Te={id:"header"},Ze={class:"container"},We=z('<div class="left-side"><div id="logo"><a href="index.html"><img src="'+N+'" alt=""></a></div><nav id="navigation"><ul id="responsive"></ul></nav><div class="clearfix"></div></div>',1),Oe={class:"right-side"},Ue={class:"mmenu-trigger"},Ge=e("div",{class:"clearfix"},null,-1),Je={class:"intro-banner","data-background-image":"/images/home-background.jpg"},Ke={class:"container",style:{"background-size":"cover"},ref:"background"},Xe=e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("div",{class:"banner-headline"})])],-1),Ye={class:"row",style:{height:"60vh","margin-top":"10vh"}},et=e("div",{class:"col-3 text-center"},null,-1),tt={class:"col-6 text-center",style:{"align-content":"center",width:"500px"}},st=e("div",{style:{width:"200px",height:"200px",background:"url('/images/fupre_logo.png')",margin:"0 auto","background-size":"cover"}},null,-1),ot={style:{width:"500px",margin:"0 auto","align-content":"center","text-align":"center"}},nt=e("h2",{class:"text-center",style:{"font-weight":"bolder"}},"FUPRE SCANNER VERIFICATION APP",-1),dt=e("p",{style:{"font-weight":"bolder",color:"black"},class:"text-center"},"Scan QR code on Id to verify it.",-1),it={style:{width:"20px",height:"20px","margin-bottom":"-4px","margin-right":"10px"},"data-slot":"icon","aria-hidden":"true",fill:"none","stroke-width":"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},lt=e("path",{d:"M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),at=e("path",{d:"M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),rt=[lt,at],ct=e("div",{class:"intro-search-button text-center",style:{"align-content":"center","text-align":"center",width:"100%",margin:"0 auto"}},null,-1),ut=e("div",{class:"col-2 text-center"},null,-1),ht=e("div",{class:"background-image-container",style:{}},null,-1);function pt(s,t,o,p,n,d){const l=u("modal"),x=u("spinner-modal"),k=u("student-modal"),S=u("error-modal"),M=u("router-link");return i(),a("div",Pe,[n.modalStatus==1?(i(),_(l,{key:0,onResultmain:d.resultLoaded,onClose:t[0]||(t[0]=b=>n.modalStatus=0)},null,8,["onResultmain"])):c("",!0),n.spinnerModal==1?(i(),_(x,{key:1})):c("",!0),n.studentModal==1?(i(),_(k,{key:2,onClose:t[1]||(t[1]=b=>n.studentModal=0),student:n.fetchedStudent},null,8,["student"])):c("",!0),n.errorModal==1?(i(),_(S,{key:3,onClose:t[2]||(t[2]=b=>n.errorModal=0),error:n.error},null,8,["error"])):c("",!0),e("header",He,[e("div",Te,[e("div",Ze,[We,e("div",Oe,[c("",!0),c("",!0),e("span",Ue,[c("",!0)])])])])]),Ge,e("div",Je,[e("div",Ke,[Xe,e("div",Ye,[et,e("div",tt,[st,e("div",ot,[nt,dt,e("button",{class:"button ripple-effect text-center",onClick:t[3]||(t[3]=m(b=>n.modalStatus=1,["prevent"]))},[(i(),a("svg",it,rt)),w(" Scan Code ")]),ct,f(M,{to:{name:"view_students"},class:"text-center",style:{"font-weight":"bolder"}},{default:I(()=>[w("Dashboard")]),_:1})])]),ut])],512),ht])])}const gt=h(Fe,[["render",pt]]);export{gt as default};
