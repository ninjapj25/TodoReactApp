(this.webpackJsonptodopractice=this.webpackJsonptodopractice||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(5),o=a.n(c),r=(a(12),a(6)),i=a(1),m=Object(l.createContext)(),s=function(e){var t=Object(l.useState)([{id:1,title:"Study React",completed:!1},{id:2,title:"Study Python",completed:!1}]),a=Object(i.a)(t,2),c=a[0],o=a[1];return n.a.createElement(m.Provider,{value:[c,o]},e.children)};function u(e){var t=e.filteredTodos,a=(e.status,Object(l.useContext)(m)),c=Object(i.a)(a,2),o=c[0],r=c[1];return n.a.createElement("div",null,t().map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement("p",{className:"pink-font"},n.a.createElement("label",{className:"pink-font"},n.a.createElement("span",{className:"pinkfont ".concat(e.completed?"completed":""),onClick:function(t){e.completed=!e.completed,!0===e.completed?(alert(e.title+" moved to completed task"),t.target.parentElement.classList.add("completed")):(alert(e.title+" moved to incomplete task"),t.target.parentElement.classList.remove("completed"))}},e.title),n.a.createElement("i",{className:"material-icons",onClick:function(){r(o.filter((function(t){return t.id!==e.id}),alert("Deleted ".concat(e.title))))}},"delete"))))}))," ")}function d(){var e=Object(l.useContext)(m),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(l.useState)(""),s=Object(i.a)(o,2),d=s[0],p=s[1],f=Object(l.useState)("all"),v=Object(i.a)(f,2),b=v[0],E=v[1];console.log(b);var h=function(e){E(e.target.value)};return n.a.createElement("div",{className:"center-align"},n.a.createElement("button",{className:"btn blue lighten-1 filter waves-effect waves-light",value:"incomplete",onClick:h},"Incomplete"),n.a.createElement("button",{className:"btn blue lighten-1 filter waves-effect waves-light",value:"complete",onClick:h},"Complete"),n.a.createElement("button",{className:"btn blue lighten-1 filter waves-effect waves-light",value:"all",onClick:h},"All"),n.a.createElement(u,{filteredTodos:function(){return a.filter((function(e){return"complete"===b?!0===e.completed:"incomplete"===b?!1===e.completed:e}))},status:b}),n.a.createElement("form",{action:"#",onSubmit:function(e){e.preventDefault(),c([].concat(Object(r.a)(a),[{id:Math.floor(1e3*Math.random()),title:d,completed:!1}])),p("")}},n.a.createElement("div",{className:"input-field col s6 add"},n.a.createElement("input",{placeholder:"Add Todo",type:"text",className:"validate center pink-font input-style",autoComplete:"false",value:d,onChange:function(e){p(e.target.value)}}),n.a.createElement("div",{className:"center-align"},n.a.createElement("button",{className:"waves-effect waves-light btn-large blue lighten-1"},"Add Todo")))))}var p=function(){return n.a.createElement(s,null,n.a.createElement("div",{className:"App container"},n.a.createElement("header",{className:"center"},n.a.createElement("h1",null," PJ's Todo ")),n.a.createElement(d,null)))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5644b997.chunk.js.map