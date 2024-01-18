import{_ as g}from"./logo-VDId8S0D.js";import{_ as r}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o as l,c,i as h,r as d,a as s,m as _,b as o,h as b,w as j,g as v,t as $,F as w,q as k}from"./index-PJSeuXwp.js";const y={name:"DashboardHeader",data(){return{user:""}},computed:{},methods:{},mounted(){console.log("Component mounted.")}},x=h('<header id="header-container" class="fullwidth dashboard-header not-sticky"><div id="header"><div class="container"><div class="left-side"><div id="logo"><a href="/"><img src="'+g+'" alt=""></a></div><nav id="navigation"><ul id="responsive"></ul></nav><div class="clearfix"></div></div><div class="right-side"><div class="header-widget hide-on-mobile"><div class="header-notifications"><div class="header-notifications-dropdown"><div class="header-notifications-headline"><h4>Notifications</h4><button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></button></div><div class="header-notifications-content"><div class="header-notifications-scroll" data-simplebar></div></div></div></div><div class="header-notifications"><div class="header-notifications-dropdown"><div class="header-notifications-headline"><h4>Messages</h4><button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></button></div><div class="header-notifications-content"><div class="header-notifications-scroll" data-simplebar></div></div><a href="dashboard-messages.html" class="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i class="icon-material-outline-arrow-right-alt"></i></a></div></div></div><div class="header-widget"><div class="header-notifications user-menu"><div class="header-notifications-dropdown"><div class="user-status"><div class="user-details"></div><div class="status-switch" id="snackbar-user-status"><label class="user-online current-status">Online</label><label class="user-invisible">Invisible</label><span class="status-indicator" aria-hidden="true"></span></div></div><ul class="user-menu-small-nav"></ul></div></div></div><span class="mmenu-trigger" style="display:none !important;"><button class="hamburger hamburger--collapse" type="button"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button></span></div></div></div></header><div class="clearfix"></div>',2),D=[x];function S(a,e,t,p,u,i){return l(),c("div",null,D)}const q=r(y,[["render",S]]),C={name:"DashboardSidebar",data(){return{user:""}},computed:{},methods:{logout(){this.$store.commit("logout"),localStorage.removeItem("xfiles_grpzi"),localStorage.removeItem("xfiles_grpzi_user"),toast.success(`Successfully Logged out !!!
Redirecting to Login Page`),setTimeout(function(){window.location.href="/login"},2e3),console.log("logging out")}},mounted(){console.log("Component mounted.")}},F={class:"dashboard-sidebar"},M={class:"dashboard-sidebar-inner","data-simplebar":""},N={class:"dashboard-nav-container"},V=h('<a href="#" class="dashboard-responsive-nav-trigger"><span class="hamburger hamburger--collapse"><span class="hamburger-box"><span class="hamburger-inner"></span></span></span><span class="trigger-title">Dashboard Navigation</span></a>',1),I={class:"dashboard-nav"},A={class:"dashboard-nav-inner"},L={class:"submenu","data-submenu-title":"Menu"},z=s("i",{class:"icon-material-outline-group"},null,-1),B=s("span",{class:"nav-hide"},"View Students",-1),E=s("i",{class:"icon-material-outline-person-pin"},null,-1),O=s("span",{class:"nav-hide"},"Add Student",-1),R=s("i",{class:"icon-material-outline-power-settings-new"},null,-1),T=s("span",{class:"nav-hide"},"Logout",-1),H=[R,T];function P(a,e,t,p,u,i){const n=d("router-link");return l(),c("div",F,[s("div",M,[s("div",N,[V,s("div",I,[s("div",A,[s("ul",L,[s("li",{class:_({active:["view_students","view_student"].indexOf(a.$route.name)!=-1})},[o(n,{to:{name:"view_students"}},{default:b(()=>[z,B]),_:1})],2),s("li",{class:_({active:["add_student"].indexOf(a.$route.name)!=-1})},[o(n,{to:{name:"add_student"}},{default:b(()=>[E,O]),_:1})],2),s("li",null,[s("a",{class:"dropdown-item",href:"/logout",onClick:e[0]||(e[0]=j(m=>i.logout(),["prevent"]))},H)])])])])])])])}const G=r(C,[["render",P]]),Q={name:"DashboardFooter",data(){return{}},computed:{},methods:{},mounted(){console.log("Component mounted.")}},Y=s("div",{class:"dashboard-footer-spacer"},null,-1),J={class:"small-footer margin-top-15"},K={class:"small-footer-copyrights"},U=s("strong",null,"Fupre Id Scanner",-1),W=h('<ul class="footer-social-links"><li><a href="#" title="Facebook" data-tippy-placement="top"><i class="icon-brand-facebook-f"></i></a></li><li><a href="#" title="Twitter" data-tippy-placement="top"><i class="icon-brand-twitter"></i></a></li><li><a href="#" title="Google Plus" data-tippy-placement="top"><i class="icon-brand-google-plus-g"></i></a></li><li><a href="#" title="LinkedIn" data-tippy-placement="top"><i class="icon-brand-linkedin-in"></i></a></li></ul><div class="clearfix"></div>',2);function X(a,e,t,p,u,i){return l(),c(w,null,[Y,s("div",J,[s("div",K,[v(" © "+$(new Date().getFullYear())+" ",1),U,v(". All Rights Reserved. ")]),W])],64)}const Z=r(Q,[["render",X]]),ss={name:"Dashboard",components:{DashboardFooter:Z,DashboardSidebar:G,"dashboard-header":q},data(){return{}},computed:{},methods:{},mounted(){console.log("Component mounted.")},created(){var a=["https://code.jquery.com/jquery-3.5.0.min.js","https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/6.1.8/jquery.mmenu.js","https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.2/tippy.all.min.js","https://cdnjs.cloudflare.com/ajax/libs/simplebar/2.6.1/simplebar.min.js","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.2/bootstrap-slider.min.js","https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js","https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js","https://code.jquery.com/jquery-3.5.0.min.js","/js/full_page.js","/js/bootstrap-select.min.js","/js/snackbar.js","/js/counterup.min.js","/js/magnific-popup.min.js","/js/slick.min.js","/js/custom.js"];a.forEach(e=>{let t=document.createElement("script");t.setAttribute("src",e),document.head.appendChild(t)})}},as={id:"wrapper"},es={class:"dashboard-container"},ts={class:"dashboard-content-container","data-simplebar":""},os={class:"dashboard-content-inner",id:"app"};function is(a,e,t,p,u,i){const n=d("dashboard-header"),m=d("dashboard-sidebar"),f=d("dashboard-footer");return l(),c("div",as,[o(n),s("div",es,[o(m),s("div",ts,[s("div",os,[k(a.$slots,"default"),o(f)])])])])}const ls=r(ss,[["render",is]]);export{ls as D};