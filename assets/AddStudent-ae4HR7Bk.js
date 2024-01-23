import{D as m}from"./index-6vvrFHJW.js";import{r as v,o as c,e as g,h as b,a as e,w as f,j as i,v as a,k as u,c as _,g as r,f as h}from"./index-4oOFan7d.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./logo-VDId8S0D.js";const x={name:"AddStudent",components:{Dashboard:m},data(){return{file:"",saving:11,fileTypes:["image"],student:{name:"",matno:"",email:"",department:"",level:"",age:""}}},computed:{},methods:{changed(n){let t=n.target.files[0].type;console.log(t),this.fileTypes.some(l=>t.includes(l))?this.file=n.target.files[0]:toast.warning("File Type Not Allowed")},save(){this.saving=22;let n=new FormData;console.log(this.file),n.append("file",this.file),n.append("name",this.student.name),n.append("matno",this.student.matno),n.append("email",this.student.email),n.append("department",this.student.department),n.append("level",this.student.level),n.append("age",this.student.age),axios.post("/add-student",n,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data.data),toast.success(t.data.message),setTimeout(()=>{this.$router.push({name:"view_student",params:{id:t.data.data.student.id}})},2e3),console.log("SUCCESS!!")}).catch(t=>{let l=t.response.data.message?t.response.data.message:"";toast.warning(`${t.message}
${l}`),console.log("FAILURE!!")}).finally(()=>{this.saving=11})}},mounted(){}},w=e("div",{class:"single-page-header","data-background-image":""},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("div",{class:"single-page-header-inner"},[e("div",{class:"left-side"},[e("div",{class:"header-details"},[e("h1",{class:"margin-bottom-0"},[e("i",{class:"icon-line-awesome-user-plus text-success"}),r(" Add Student")]),e("br"),e("h3",{class:"margin-bottom-0 margin-top-0"},"Add Students to Database")])])])])])]),e("div",{class:"background-image-container",style:{"background-image":"url('/images/add-student.png')"}})],-1),C=e("div",{class:"dashboard-headline"},[e("nav",{id:"breadcrumbs",class:"dark"},[e("ul",null,[e("li",null,[e("a",{href:"#"},"Home")]),e("li",null,"Add Student")])])],-1),E=e("br",null,null,-1),S=e("br",null,null,-1),L={class:"row"},k=e("div",{class:"col-xl-1"},null,-1),M={class:"col-xl-10"},T={class:"dashboard-box margin-top-0"},V={class:"content with-padding padding-bottom-0"},A={class:"row"},D={class:"col-auto"},U={class:"avatar-wrapper","data-tippy-placement":"bottom",title:"Change Logo",style:{background:"url('/images/user-id.png')","background-size":"cover"}},q=e("img",{class:"profile-pic",alt:""},null,-1),P=e("div",{class:"upload-button"},null,-1),N=e("span",null,"Click to choose Student ID Photo",-1),B=e("br",null,null,-1),F=e("br",null,null,-1),G={class:"col"},I={class:"row"},j={class:"col-xl-8"},z={class:"submit-field"},H=e("h5",null,"Full name ",-1),R={class:"col-xl-8"},J={class:"submit-field"},K=e("h5",null,"Mat No.",-1),O=e("div",{class:"col-xl-4"},null,-1),Q={class:"col-xl-8"},W={class:"submit-field"},X=e("h5",null,"Email",-1),Y=e("div",{class:"col-xl-4"},null,-1),Z={class:"col-xl-8"},$={class:"submit-field"},ee=e("h5",null,"Department ",-1),te=e("option",{value:"Computer Science"},"Computer Science",-1),se=e("option",{value:"Mathematics"},"Mathematics",-1),oe=e("option",{value:"Physics"},"Physics",-1),ne=e("option",{value:"Geo Physics"},"Geo Physics",-1),ie=e("option",{value:"Geology"},"Geology",-1),le=e("option",{value:"Chemistry"},"Chemistry",-1),ae=e("option",{value:"Industrial Chemistry"},"Industrial Chemistry",-1),de=e("option",{value:"Science Laboratory Technology"},"Science Laboratory Technology",-1),ce=e("option",{value:"Mechanical Engineering"},"Mechanical Engineering",-1),re=e("option",{value:"Chemical Engineering"},"Chemical Engineering",-1),ue=e("option",{value:"Marine Engineering"},"Marine Engineering",-1),_e=e("option",{value:"Electrical Engineering"},"Electrical Engineering",-1),he=e("option",{value:"Computer Engineering"},"Computer Engineering",-1),pe=e("option",{value:"Civil Engineering"},"Civil Engineering",-1),me=e("option",{value:"Petroleum Engineering"},"Petroleum Engineering",-1),ve=[te,se,oe,ne,ie,le,ae,de,ce,re,ue,_e,he,pe,me],ge={class:"col-xl-8"},be={class:"submit-field"},fe=e("h5",null,"Level ",-1),ye=e("option",{value:"100 Level"},"100 Level",-1),xe=e("option",{value:"200 Level"},"200 Level",-1),we=e("option",{value:"300 Level"},"300 Level",-1),Ce=e("option",{value:"400 Level"},"400 Level",-1),Ee=e("option",{value:"500 Level"},"500 Level",-1),Se=[ye,xe,we,Ce,Ee],Le=e("div",{class:"col-xl-4"},null,-1),ke={class:"col-xl-8"},Me={class:"submit-field"},Te=e("h5",null,"Age",-1),Ve={class:"col-xl-4"},Ae={key:0,type:"submit",class:"button ripple-effect create-button"},De=e("i",{class:"icon-feather-save"},null,-1),Ue={key:1,class:"button ripple-effect create-button disabled"},qe=e("i",{class:"icon-feather-save"},null,-1),Pe=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),Ne=e("div",{class:"col-xl-8"},[e("br")],-1);function Be(n,t,l,Fe,s,d){const p=v("dashboard");return c(),g(p,null,{default:b(()=>[e("div",null,[w,C,E,S,e("div",L,[k,e("div",M,[e("div",T,[e("form",{action:"#",method:"post",onSubmit:t[7]||(t[7]=f(o=>d.save(),["prevent"]))},[e("div",V,[e("div",A,[e("div",D,[e("div",U,[q,P,e("input",{class:"file-upload",type:"file",onChange:t[0]||(t[0]=(...o)=>d.changed&&d.changed(...o)),accept:"image/*",required:""},null,32)]),N,B,F]),e("div",G,[e("div",I,[e("div",j,[e("div",z,[H,i(e("input",{type:"text",class:"with-border","onUpdate:modelValue":t[1]||(t[1]=o=>s.student.name=o),required:""},null,512),[[a,s.student.name]])])]),e("div",R,[e("div",J,[K,i(e("input",{type:"text",class:"with-border","onUpdate:modelValue":t[2]||(t[2]=o=>s.student.matno=o),required:""},null,512),[[a,s.student.matno]])])]),O,e("div",Q,[e("div",W,[X,i(e("input",{type:"email",class:"with-border","onUpdate:modelValue":t[3]||(t[3]=o=>s.student.email=o),required:""},null,512),[[a,s.student.email]])])]),Y,e("div",Z,[e("div",$,[ee,i(e("select",{class:"with-border","onUpdate:modelValue":t[4]||(t[4]=o=>s.student.department=o),required:""},ve,512),[[u,s.student.department]])])]),e("div",ge,[e("div",be,[fe,i(e("select",{class:"with-border","onUpdate:modelValue":t[5]||(t[5]=o=>s.student.level=o),required:""},Se,512),[[u,s.student.level]])])]),Le,e("div",ke,[e("div",Me,[Te,i(e("input",{type:"number",class:"with-border","onUpdate:modelValue":t[6]||(t[6]=o=>s.student.age=o),required:""},null,512),[[a,s.student.age]])])]),e("div",Ve,[s.saving==11?(c(),_("button",Ae,[De,r(" Save ")])):h("",!0),s.saving==22?(c(),_("button",Ue,[qe,r(" Saving.. "),Pe])):h("",!0)]),Ne])])])])],32)])])])])]),_:1})}const He=y(x,[["render",Be]]);export{He as default};