"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9444],{9444:(T,c,l)=>{l.r(c),l.d(c,{LoginPage:()=>v});var d=l(177),t=l(4341),a=l(4742),p=l(5079),g=l(5873),n=l(4438),m=l(9763),P=l(70);function f(o,r){1&o&&(n.j41(0,"span",8),n.EFF(1,"This field is required"),n.k0s())}function h(o,r){1&o&&(n.j41(0,"span",8),n.EFF(1,"Your e-mail is invalid."),n.k0s())}function E(o,r){if(1&o&&n.DNE(0,f,2,0,"span",8)(1,h,2,0,"span",8),2&o){let s,e;const i=n.XpG();n.vxM(null!=(s=i.loginForm.get("email"))&&null!=s.errors&&s.errors.required?0:-1),n.R7$(),n.vxM(null!=(e=i.loginForm.get("email"))&&null!=e.errors&&e.errors.email?1:-1)}}function M(o,r){1&o&&(n.j41(0,"span",8),n.EFF(1,"This field is required"),n.k0s())}function C(o,r){1&o&&(n.j41(0,"span",8),n.EFF(1,"Your password should be strong with at least 08 characters."),n.k0s())}function O(o,r){if(1&o&&n.DNE(0,M,2,0,"span",8)(1,C,2,0,"span",8),2&o){let s,e;const i=n.XpG();n.vxM(null!=(s=i.loginForm.get("password"))&&null!=s.errors&&s.errors.required?0:-1),n.R7$(),n.vxM(null!=(e=i.loginForm.get("password"))&&null!=e.errors&&e.errors.minlength?1:-1)}}let v=(()=>{var o;class r{constructor(e,i){this.authenticationService=e,this.router=i,this.loginForm=new t.gE({email:new t.MJ("",[t.k0.required,t.k0.email]),password:new t.MJ("",[t.k0.required,t.k0.minLength(8)])}),this.passwordType="password",this.passwordIcon="eye-outline",(0,p.a)({eyeOutline:g.ov$,eyeOffOutline:g.f_X})}ngOnInit(){}onToggleShowPassword(){"password"===this.passwordType?(this.passwordType="text",this.passwordIcon="eye-off-outline"):(this.passwordType="password",this.passwordIcon="eye-outline")}onSignIn(){this.authenticationService.signInWithEmailAndPassword(this.loginForm.value).then(()=>{this.router.navigate(["contact"])}).catch(e=>{console.log(e)})}}return(o=r).\u0275fac=function(e){return new(e||o)(n.rXU(m.k),n.rXU(P.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],standalone:!0,features:[n.aNF],decls:17,vars:8,consts:[[3,"translucent"],[1,"login",3,"fullscreen"],[3,"formGroup"],["label","E-mail","labelPlacement","stacked","placeholder","email@example.com","formControlName","email"],["label","Password","labelPlacement","stacked","placeholder","***********","formControlName","password",3,"type"],["id","icon-eye",3,"click","name"],[1,"container-button"],["size","medium",3,"click","disabled"],[1,"span-error"]],template:function(e,i){if(1&e&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"Login"),n.k0s()()(),n.j41(4,"ion-content",1)(5,"div")(6,"form",2)(7,"ion-item"),n.nrm(8,"ion-input",3),n.k0s(),n.DNE(9,E,2,2),n.j41(10,"ion-item"),n.nrm(11,"ion-input",4),n.j41(12,"ion-icon",5),n.bIt("click",function(){return i.onToggleShowPassword()}),n.k0s()(),n.DNE(13,O,2,2),n.j41(14,"div",6)(15,"ion-button",7),n.bIt("click",function(){return i.onSignIn()}),n.EFF(16," Sign Up "),n.k0s()()()()()),2&e){let _,u;n.Y8G("translucent",!0),n.R7$(4),n.Y8G("fullscreen",!0),n.R7$(2),n.Y8G("formGroup",i.loginForm),n.R7$(3),n.vxM(null!=(_=i.loginForm.get("email"))&&_.dirty?9:-1),n.R7$(2),n.Y8G("type",i.passwordType),n.R7$(),n.Y8G("name",i.passwordIcon),n.R7$(),n.vxM(null!=(u=i.loginForm.get("password"))&&u.dirty?13:-1),n.R7$(2),n.Y8G("disabled",i.loginForm.invalid)}},dependencies:[d.MD,t.YN,t.qT,t.BC,t.cb,a.bv,a.Jm,a.W9,a.eU,a.iq,a.$w,a.uz,a.BC,a.ai,a.Gw,t.X1,t.j4,t.JD],styles:[".login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]:last-child > ion-item[_ngcontent-%COMP%] > ion-input[_ngcontent-%COMP%]{width:90%}.login[_ngcontent-%COMP%]   #icon-eye[_ngcontent-%COMP%]{display:block;position:absolute;right:15px;top:26px}.login[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}.login[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%}"]}),r})()}}]);