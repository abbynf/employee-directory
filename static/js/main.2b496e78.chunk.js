(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":"01","name":{"first":"Kim","last":"Bishop"},"location":"London","department":"Sales","employeeNumber":"UBR02447"},{"id":"02","name":{"first":"Jayme","last":"Goff"},"location":"London","department":"Sales","employeeNumber":"DLQ05330"},{"id":"03","name":{"first":"Thomas","last":"Applegate"},"location":"Berlin","department":"Production","employeeNumber":"WPX08224"},{"id":"04","name":{"first":"Bridgette","last":"Richardson"},"location":"Berlin","department":"Production","employeeNumber":"YFM03151"},{"id":"05","name":{"first":"Richard","last":"Smelley"},"location":"Paris","department":"Marketing","employeeNumber":"BRH07514"},{"id":"06","name":{"first":"Lindsay","last":"White"},"location":"London","department":"Production","employeeNumber":"KEA04652"},{"id":"07","name":{"first":"Tracey","last":"Dodds"},"location":"Paris","department":"Sales","employeeNumber":"YKX01500"},{"id":"08","name":{"first":"Mark","last":"Davenport"},"location":"Paris","department":"Production","employeeNumber":"OMX01249"},{"id":"09","name":{"first":"Jack","last":"Berg"},"location":"London","department":"Marketing","employeeNumber":"PCZ03416"},{"id":"10","name":{"first":"Lynn","last":"Obregon"},"location":"Berlin","department":"Marketing","employeeNumber":"VFL05653"}]')},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n.n(a),s=n(4),i=n.n(s),l=(n(3),n(5)),c=n(6),d=n(10),m=n(8),u=n(9);var b=function(e){return console.log(e),Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Name"}),Object(r.jsx)("th",{scope:"col",children:"Location"}),Object(r.jsx)("th",{scope:"col",children:"Department"}),Object(r.jsx)("th",{scope:"col",children:"Employee Number"})]})}),Object(r.jsx)("tbody",{children:e.users.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(r.jsx)("td",{children:e.location}),Object(r.jsx)("td",{children:e.department}),Object(r.jsx)("td",{children:e.employeeNumber})]},e.id)}))})]})},j=n(16);var h=function(e){console.log(e);var t=[];switch(e){case"all":t=j;break;case"first":j.sort((function(e,t){return e.name.first>t.name.first?1:-1})),t=j;break;case"last":j.sort((function(e,t){return e.name.last>t.name.last?1:-1})),t=j;break;case"employeeNumber":j.sort((function(e,t){return e.employeeNumber>t.employeeNumber?1:-1})),t=j;break;case"london":t=[];for(var n=0;n<j.length;n++)"London"===j[n].location&&t.push(j[n]);return t;case"berlin":t=[];for(var r=0;r<j.length;r++)"Berlin"===j[r].location&&t.push(j[r]);return t;case"paris":t=[];for(var a=0;a<j.length;a++)"Paris"===j[a].location&&t.push(j[a]);return t;case"sales":t=[];for(var o=0;o<j.length;o++)"Sales"===j[o].department&&t.push(j[o]);return t;case"production":t=[];for(var s=0;s<j.length;s++)"Production"===j[s].department&&t.push(j[s]);return t;case"marketing":t=[];for(var i=0;i<j.length;i++)"Marketing"===j[i].department&&t.push(j[i]);return t;default:t=j}return t},p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleSort=function(e){e.preventDefault();var t=r.state.qualifier,n=h(t);r.setState({users:n})},r.handleInputChange=function(e){var t=e.target,n=t.name,a=t.value;r.setState({qualifier:a,method:n})},r.state={qualifier:"all",method:"all",users:[]},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=h("all");this.setState({users:e})}},{key:"render",value:function(){var e=this;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.a,{children:Object(r.jsx)("h1",{children:"Employee Directory"})}),Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"row mb-3",children:[Object(r.jsxs)("div",{className:"col-4",children:[Object(r.jsx)("label",{htmlFor:"sortby",children:"Sort by:"}),Object(r.jsxs)("select",{name:"sortby",onChange:this.handleInputChange,children:[Object(r.jsx)("option",{}),Object(r.jsx)("option",{value:"first",children:"First Name"}),Object(r.jsx)("option",{value:"last",children:"Last Name"}),Object(r.jsx)("option",{value:"employeeNumber",children:"Employee Number"})]}),Object(r.jsx)("button",{onClick:this.handleSort,className:"btn btn-info",children:"Sort!"})]}),Object(r.jsxs)("div",{className:"col-4",children:[Object(r.jsx)("label",{htmlFor:"filterby",children:"Filter by:"}),Object(r.jsxs)("select",{name:"filterby",onChange:this.handleInputChange,children:[Object(r.jsx)("option",{}),Object(r.jsx)("option",{value:"london",children:"Location: London"}),Object(r.jsx)("option",{value:"berlin",children:"Location: Berlin"}),Object(r.jsx)("option",{value:"paris",children:"Location: Paris"}),Object(r.jsx)("option",{value:"sales",children:"Department: Sales"}),Object(r.jsx)("option",{value:"production",children:"Department: Production"}),Object(r.jsx)("option",{value:"marketing",children:"Department: Marketing"})]}),Object(r.jsx)("button",{className:"btn btn-info",onClick:this.handleSort,children:"Filter!"})]}),Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(){e.setState({qualifier:"all"}),e.handleSort()},children:"RESET"})})]})}),Object(r.jsx)(b,{users:this.state.users})]})})}}]),n}(o.a.Component);n(17);var f=function(){return Object(r.jsx)(p,{})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2b496e78.chunk.js.map