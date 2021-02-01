(this["webpackJsonpkindergarten-ui"]=this["webpackJsonpkindergarten-ui"]||[]).push([[0],{13:function(e,t){},20:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),i=a.n(s),r=a(32),c=a.n(r),o=a(16),l=a(2),d=a(14),u=a(4),h=a(8),m=a(10),j=a(9),b=a(12),g=a.n(b),v=function(e){var t=e.username,a=e.password,s=e.usernameValidation,i=e.passwordValidation,r=e.areCredentialsIncorrect,c=e.onSubmit,o=e.onUsernameChange,l=e.onPasswordChange;return Object(n.jsx)("div",{className:"row",id:"loginForm",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{id:"loginh1",children:"Prisijungimas"}),Object(n.jsxs)("form",{className:"form",onSubmit:c,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"username",children:"Prisijungimo vardas: "}),Object(n.jsx)("input",{className:"largeInput form-control ".concat(s),id:"username",value:t,onChange:o,name:"username"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"\u0160is laukas privalomas."})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",className:"control-label",children:"Slapta\u017eodis: "}),Object(n.jsx)("input",{className:"largeInput form-control ".concat(i),type:"password",id:"password",value:a,onChange:l,name:"password"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"\u0160is laukas privalomas."})]}),Object(n.jsx)("button",{className:"btn btn-primary mb-4",id:"loginButton",children:"Prisijungti"})]}),r&&Object(n.jsx)("div",{className:"alert alert-danger col-12",role:"alert",children:"Prisijungimo duomenys neteisingi"})]})})},p=a(13),x=a.n(p),O=i.a.createContext(null),f=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(d.a)({},n,s)),""!==e.state.usernameValidation&&"username"===n&&e.setState({usernameValidation:""}),""!==e.state.passwordValidation&&"password"===n&&e.setState({passwordValidation:""}),e.state.areCredentialsIncorrect&&e.setState({areCredentialsIncorrect:!1})},e.resetState=function(){e.setState({username:""}),e.setState({password:""}),e.setState({usernameValidation:""}),e.setState({passwordValidation:""}),e.setState({incorrectCredentials:!1})},e.handleSubmit=function(t){t.preventDefault();var a="",n=t.target.username.value,s=t.target.password.value;e.doValidation(n,s),0!==n.trim().length&&0!==s.trim().length&&(g.a.get("".concat(x.a,"/api/users/").concat(n)).then((function(t){var n=t.data.password;a=t.data.role,s===n?(e.context.userService.setCurrentUser(t.data.username),e.context.userService.setUserRole(a),e.context.userService.updateCurrentUser(),e.context.userService.updateUserRole()):e.setState({areCredentialsIncorrect:!0})})).then((function(){"ADMIN"===e.context.userService.getUserRole()?e.props.history.push("/admin"):"EDUCATION_SPECIALIST"===e.context.userService.getUserRole()?e.props.history.push("/education-specialist"):"GUARDIAN"===e.context.userService.getUserRole()&&e.props.history.push("/guardian")})).catch((function(e){return console.log(e)})),e.resetState())},e.doValidation=function(t,a){0===t.trim().length&&e.setState({usernameValidation:"is-invalid"}),0===a.trim().length&&e.setState({passwordValidation:"is-invalid"})},e.state={username:"",password:"",usernameValidation:"",passwordValidation:"",areCredentialsIncorrect:!1},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"loginPage",className:"justify-content-center align-items-center",children:[Object(n.jsx)("h1",{className:"text-center text-info pt-4",children:"Dar\u017eeli\u0173 informacin\u0117 sistema"}),Object(n.jsx)(v,{username:this.state.username,password:this.state.password,usernameValidation:this.state.usernameValidation,passwordValidation:this.state.passwordValidation,areCredentialsIncorrect:this.state.areCredentialsIncorrect,onSubmit:this.handleSubmit,onUsernameChange:this.handleChange,onPasswordChange:this.handleChange})]})}}]),a}(s.Component);f.contextType=O;var S=Object(l.f)(f),C=(a(20),function(e){var t=e.handleLogout,a=e.usersName;return Object(n.jsx)("div",{className:"container-fluid p-4",children:Object(n.jsxs)("div",{className:"container top-line",children:[Object(n.jsx)("p",{className:"lead",children:Object(n.jsx)("strong",{children:a})}),Object(n.jsx)("button",{className:"btn btn-info",onClick:t,children:"Atsijungti"})]})})}),N=a(34),U=a(35),k=function(e){var t=e.handleChange,a=e.handleSubmit,s=Object(U.a)(e,["handleChange","handleSubmit"]),i=s.firstname,r=s.lastname,c=s.firstnameLength,o=s.lastnameLength,l=s.createdUsername,d=s.isCreated;return Object(n.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"mb-4",children:"Paskyros suk\u016brimas"}),Object(n.jsxs)("form",{className:"form",onSubmit:a,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"text",className:"largeInput form-control ".concat(c),id:"firstname",value:i,onChange:t,name:"firstname",placeholder:"Vardas"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"\u0160is laukas privalomas. Vardas turi b\u016bti 2-30 simboli\u0173 ilgio."})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"text",className:"largeInput form-control ".concat(o),id:"lastname",value:r,onChange:t,name:"lastname",placeholder:"Pavard\u0117"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"\u0160is laukas privalomas. Pavard\u0117 turi b\u016bti 2-30 simboli\u0173 ilgio."})]}),Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect01",style:{backgroundColor:"#e3f2fd"},children:"Rol\u0117"})}),Object(n.jsxs)("select",{className:"custom-select",id:"inputGroupSelect01",name:"role",children:[Object(n.jsx)("option",{value:"GUARDIAN",defaultValue:!0,children:"T\u0117vas/glob\u0117jas"}),Object(n.jsx)("option",{value:"EDUCATION_SPECIALIST",children:"\u0160vietimo specialistas"})]})]}),Object(n.jsx)("button",{className:"btn btn-info float-right",children:"I\u0161saugoti"})]})]}),d&&l.length<=30&&Object(n.jsx)("div",{className:"alert alert-success mt-4",role:"alert",children:"Naudotojas sukurtas. Prisijungimo vardas ir slapta\u017eodis: ".concat(l)}),d&&l.length>30&&Object(n.jsx)("div",{className:"alert alert-success mt-4",role:"alert",children:l})]})},A=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,s=a.value;""===s||/^[\w'\-,.][^0-9_!\xa1?\xf7?\xbf/\\+=@#$%\u02c6&*(){}|~<>;:[\]]{31,}$/.test(s)?0===s.length&&e.setState(Object(d.a)({},n,"")):e.setState(Object(d.a)({},n,s)),s.length>=31&&("firstname"===n?e.setState({firstnameLength:"is-invalid"}):e.setState({lastnameLength:"is-invalid"})),""!==e.state.firstnameLength&&"firstname"===n&&30===s.length&&e.setState({firstnameLength:""}),""!==e.state.lastnameLength&&"lastname"===n&&30===s.length&&e.setState({lastnameLength:""}),e.state.isCreated&&(e.setState({isCreated:!1}),e.setState({createdUsername:""}))},e.validate=function(t,a){(t.trim().length<2||t.trim().length>30)&&e.setState({firstnameLength:"is-invalid"}),(a.trim().length<2||a.trim().length>30)&&e.setState({lastnameLength:"is-invalid"})},e.handleSubmit=function(t){t.preventDefault(),e.state.isCreated&&(e.setState({isCreated:!1}),e.setState({createdUsername:""}));var a=t.target.firstname.value,n=t.target.lastname.value;e.validate(a,n),a.length>=2&&a.length<=30&&n.length>=2&&n.length<=30&&(g.a.post("".concat(x.a,"/api/users/admin"),{firstName:a,lastName:n,role:t.target.role.value}).then((function(t){e.setState({isCreated:!0}),e.setState({createdUsername:t.data})})).catch((function(e){return console.log(e)})),e.setState({firstname:""}),e.setState({lastname:""}),e.setState({role:""}),e.setState({firstnameLength:""}),e.setState({lastnameLength:""}))},e.state={firstname:"",lastname:"",role:"",firstnameLength:"",lastnameLength:"",isCreated:!1,createdUsername:""},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(k,Object(N.a)({handleSubmit:this.handleSubmit,handleChange:this.handleChange},this.state))})}}]),a}(s.Component);A.contextType=O;var w=A,I=function(e){var t=e.handleLogout,a=e.handleUserChoice,s=e.choice;return Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{handleLogout:t,usersName:"Administratoriaus paskyra"}),Object(n.jsx)("div",{className:"container p-4",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"admin-actions col-4",children:[Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"adminUsers",children:"Paskyr\u0173 administravimas"}),Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"2",children:"Ka\u017ekas dar"}),Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"3",children:"Ir dar ka\u017ekas"})]}),Object(n.jsxs)("div",{className:"admin-action-placeholder col-8",children:["greeting"===s&&Object(n.jsx)("h1",{children:"Sveiki prisijung\u0119 \u012f dar\u017eeli\u0173 informacin\u0119 sistem\u0105"}),"adminUsers"===s&&Object(n.jsx)(w,{}),"2"===s&&Object(n.jsx)("h1",{children:"Ka\u017ekas dar"}),"3"===s&&Object(n.jsx)("h1",{children:"Ir dar ka\u017ekas"})]})]})})]})},L=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleUserChoice=function(t){e.setState({choice:t.target.name})},e.handleLogout=function(){e.context.userService.setCurrentUser(""),e.context.userService.setUserRole(""),e.context.userService.updateCurrentUser(),e.context.userService.updateUserRole(),e.props.history.push("/")},e.state={choice:"greeting",currentUserFirstame:"",currentUserLastname:""},e}return Object(h.a)(a,[{key:"render",value:function(){return"ADMIN"===this.context.userService.getUserRole()?Object(n.jsx)("div",{className:"pagesBackgorund",children:Object(n.jsx)(I,{handleUserChoice:this.handleUserChoice,handleLogout:this.handleLogout,choice:this.state.choice})}):Object(n.jsx)("h1",{children:"Access denied"})}}]),a}(s.Component);L.contextType=O;var y=L,V=function(e){return Object(n.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"mb-4",children:"Grup\u0117s suk\u016brimas"}),Object(n.jsxs)("form",{className:"form",onSubmit:e.onSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("select",{className:"form-control "+e.fromAgeFieldValidation,name:"fromAge",style:{width:"25em"},value:e.fromAge,onChange:e.onFromAgeChange,children:[Object(n.jsx)("option",{value:"",children:"Am\u017eius nuo"}),Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"}),Object(n.jsx)("option",{value:"4",children:"4"}),Object(n.jsx)("option",{value:"5",children:"5"}),Object(n.jsx)("option",{value:"6",children:"6"}),Object(n.jsx)("option",{value:"7",children:"7"})]}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Pra\u0161om u\u017epildyti am\u017ei\u0173 nuo"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("select",{className:"form-control "+e.toAgeFieldValidation,name:"toAge",style:{width:"25em"},value:e.toAge,onChange:e.onToAgeChange,children:[Object(n.jsx)("option",{value:"",children:"Am\u017eius iki"}),Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"}),Object(n.jsx)("option",{value:"4",children:"4"}),Object(n.jsx)("option",{value:"5",children:"5"}),Object(n.jsx)("option",{value:"6",children:"6"}),Object(n.jsx)("option",{value:"7",children:"7"})]}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Pra\u0161om u\u017epildyti am\u017ei\u0173 iki"})]}),Object(n.jsx)("button",{className:"btn btn-info float-right",children:"Sukurti"}),Object(n.jsx)("div",{className:"row pt-5",children:e.invalidInterval?Object(n.jsx)("span",{style:{color:"red"},children:"Am\u017eius nuo negali b\u016bti didesnis u\u017e am\u017ei\u0173 iki"}):null})]})]})})},F=(a(63),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChangeFromAge=function(t){t.preventDefault(),e.setState({fromAge:t.target.value})},e.handleChangeToAge=function(t){t.preventDefault(),e.setState({toAge:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({fromAgeFieldValidation:""}),e.setState({toAgeFieldValidation:""}),e.setState({invalidInterval:!1}),console.log(e.state.fromAge+" "+e.state.toAge),e.validate(e.state.fromAge,e.state.toAge),e.validInterval(e.state.fromAge,e.state.toAge),e.setState({fromAge:""}),e.setState({toAge:""})},e.validate=function(t,a){""===t&&e.setState({fromAgeFieldValidation:"is-invalid"}),""===a&&e.setState({toAgeFieldValidation:"is-invalid"})},e.validInterval=function(t,a){return t>a&&""!==t&&""!==a?(e.setState({invalidInterval:!0}),!1):t<=a&&""!==t&&""!==a},e.state={fromAge:"",toAge:"",fromAgeFieldValidation:"",toAgeFieldValidation:"",invalidInterval:!1},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"groupsRegistration",children:Object(n.jsx)(V,{fromAge:this.state.fromAge,toAge:this.state.toAge,fromAgeFieldValidation:this.state.fromAgeFieldValidation,toAgeFieldValidation:this.state.toAgeFieldValidation,invalidInterval:this.state.invalidInterval,onSubmit:this.handleSubmit,onFromAgeChange:this.handleChangeFromAge,onToAgeChange:this.handleChangeToAge})})}}]),a}(s.Component));F.contextType=O;var R=Object(l.f)(F),P=function(e){var t=e.handleLogout,a=e.handleUserChoice,s=e.choice;return Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{handleLogout:t,usersName:"\u0160vietimo specialistas"}),Object(n.jsx)("div",{className:"container p-4",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"admin-actions col-4",children:[Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"1",children:"Ka\u017ekas"}),Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"2",children:"Ka\u017ekas dar"}),Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"3",children:"Am\u017eiaus grup\u0117s"})]}),Object(n.jsxs)("div",{className:"admin-action-placeholder col-8",children:["greeting"===s&&Object(n.jsx)("h1",{children:"Sveiki prisijung\u0119 \u012f dar\u017eeli\u0173 informacin\u0119 sistem\u0105"}),"1"===s&&Object(n.jsx)("h1",{children:"Ka\u017ekas"}),"2"===s&&Object(n.jsx)("h1",{children:"Ka\u017ekas dar"}),"3"===s&&Object(n.jsx)(R,{})]})]})})]})},T=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleUserChoice=function(t){e.setState({choice:t.target.name})},e.handleLogout=function(){e.context.userService.setCurrentUser(""),e.context.userService.setUserRole(""),e.context.userService.updateCurrentUser(),e.context.userService.updateUserRole(),e.props.history.push("/")},e.state={choice:"greeting"},e}return Object(h.a)(a,[{key:"render",value:function(){return"EDUCATION_SPECIALIST"===this.context.userService.getUserRole()?Object(n.jsx)(P,{handleUserChoice:this.handleUserChoice,handleLogout:this.handleLogout,choice:this.state.choice}):Object(n.jsx)("h1",{children:"Access denied"})}}]),a}(s.Component);T.contextType=O;var D=T,K=function(e){var t=e.handleLogout,a=e.handleUserChoice,s=e.choice,i=e.currentUserFirstname,r=e.currentUserLastname;return Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{handleLogout:t,usersName:"".concat(i," ").concat(r)}),Object(n.jsx)("div",{className:"container p-4",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"admin-actions col-4",children:[Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"1",children:"Ka\u017ekas"}),Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"2",children:"Ka\u017ekas dar"}),Object(n.jsx)("button",{className:"btn btn-info mb-2 w-100",onClick:a,name:"3",children:"Ir dar ka\u017ekas"})]}),Object(n.jsxs)("div",{className:"admin-action-placeholder col-8",children:["greeting"===s&&Object(n.jsx)("h1",{children:"Sveiki prisijung\u0119 \u012f dar\u017eeli\u0173 informacin\u0119 sistem\u0105"}),"1"===s&&Object(n.jsx)("h1",{children:"Ka\u017ekas"}),"2"===s&&Object(n.jsx)("h1",{children:"Ka\u017ekas dar"}),"3"===s&&Object(n.jsx)("h1",{children:"Ir dar ka\u017ekas"})]})]})})]})},_=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=e.context.userService.getCurrentUser();g.a.get("".concat(x.a,"/api/users/").concat(t)).then((function(t){e.setState({currentUserFirstname:t.data.firstName}),e.setState({currentUserLastname:t.data.lastName})})).catch((function(e){return console.log(e)}))},e.handleUserChoice=function(t){e.setState({choice:t.target.name})},e.handleLogout=function(){e.context.userService.setCurrentUser(""),e.context.userService.setUserRole(""),e.context.userService.updateCurrentUser(),e.context.userService.updateUserRole(),e.props.history.push("/")},e.state={choice:"greeting",currentUserFirstname:"",currentUserLastname:""},e}return Object(h.a)(a,[{key:"render",value:function(){return"GUARDIAN"===this.context.userService.getUserRole()?Object(n.jsx)("div",{children:Object(n.jsx)(K,{handleUserChoice:this.handleUserChoice,handleLogout:this.handleLogout,choice:this.state.choice,currentUserFirstname:this.state.currentUserFirstname,currentUserLastname:this.state.currentUserLastname})}):Object(n.jsx)("h1",{children:"Access denied"})}}]),a}(s.Component);_.contextType=O;var E=_,G=function(e){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"m-5",children:[Object(n.jsx)("h1",{children:"Tokio adreso n\u0117ra"}),Object(n.jsx)("button",{className:"btn btn-primary ml-2 mt-3",onClick:function(){return e.history.push("/")},children:"Eiti \u012f prisijungimo puslap\u012f"})]})})};var M=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(n.jsx)(l.a,{exact:!0,path:"/admin",component:y}),Object(n.jsx)(l.a,{exact:!0,path:"/education-specialist",component:D}),Object(n.jsx)(l.a,{exact:!0,path:"/guardian",component:E}),Object(n.jsx)(l.a,{path:"*",component:G}),Object(n.jsx)(l.a,{component:G})]}),e.children]})},B=function e(){var t=this;Object(u.a)(this,e),this.getCurrentUser=function(){return t._currentUser},this.setCurrentUser=function(e){t._currentUser=e},this.getUserRole=function(){return t._userRole},this.setUserRole=function(e){t._userRole=e},this.updateCurrentUser=function(){},this.updateUserRole=function(){},this._currentUser="",this._userRole=""};a(64),a(65);document.title="Kindergarten App";var J=new B;c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(o.a,{basename:"http://localhost:8080/kindergarten",children:Object(n.jsx)(O.Provider,{value:{userService:J},children:Object(n.jsx)(M,{})})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7de9e089.chunk.js.map