(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),m=a(5),i=a(1);a(3);function o(e){return c.a.createElement("div",{className:"divItem"},c.a.createElement("div",{className:"itemBtn"},c.a.createElement("button",{className:"delBtn",onClick:function(){return e.deleteItem(e.index)}},"X")),c.a.createElement("div",{className:"item"},e.data))}var u=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),d=u[0],s=u[1],E=function(e){l(a.filter(function(t,a){return a!==e}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,"ToDO List"),c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"left"},c.a.createElement("input",{className:"inputField",type:"text",onChange:function(e){s(e.target.value)},value:d,name:"addItem",placeholder:"Add a Item"}),c.a.createElement("button",{className:"addBtn",onClick:function(){d.length>4?(l([].concat(Object(m.a)(a),[d])),s("")):alert("Item can not be empty!")}},"+")),c.a.createElement("div",{className:"right"},a&&a.map(function(e,t){return c.a.createElement(o,{index:t,key:t,deleteItem:E,data:e})})))))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)))},3:function(e,t,a){},6:function(e,t,a){e.exports=a(16)}},[[6,2,1]]]);
//# sourceMappingURL=main.cae817ae.chunk.js.map