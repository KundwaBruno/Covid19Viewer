(this.webpackJsonpsimpleviewofinstagramprofile=this.webpackJsonpsimpleviewofinstagramprofile||[]).push([[0],{42:function(e,c,s){},43:function(e,c,s){},45:function(e,c,s){},46:function(e,c,s){},48:function(e,c,s){},94:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(16),i=s.n(a),r=(s(42),s(36)),j=s(2),o=s(11),l=s(32),d=s.n(l),b=(s(43),s(0)),h=function(){var e=Object(t.useState)(""),c=Object(o.a)(e,2),s=c[0],n=c[1];return Object(b.jsxs)("div",{className:"search-container",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:Object(b.jsx)(d.a,{onInit:function(e){e.typeString("Get a country's statistics on covid-19").pauseFor(2500).start()}})})}),Object(b.jsx)("div",{className:"search-form",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){e.stopPropagation(),n(e.target.value)},placeholder:"Enter country name"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),window.location.replace("/country=".concat(s))},children:"Go!"})]})})]})},x=(s(45),function(){return Object(b.jsx)("div",{className:"footer-container",children:"Developed With courage By KBM"})}),O=(s(46),function(){return Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(x,{})]})}),u=s(17),m=s.n(u),p=s(33),f=(s(48),s(34)),v=s.n(f),N=s(35),y=s.n(N),E=s(10),T=s.n(E);s(86).config();var g=function(){var e=Object(t.useState)(null),c=Object(o.a)(e,2),s=c[0],a=c[1],i=window.location.href.split("country=")[1],r="https://covid-193.p.rapidapi.com/statistics?country=".concat(i),j="fff1fce876msh0b3711dc206a7b5p18fa5bjsn4ddbf320a268",l="covid-193.p.rapidapi.com";return Object(t.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"GET",url:r,headers:{"x-rapidapi-key":j,"x-rapidapi-host":l}});case 2:c=e.sent,a(c.data.response[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(b.jsxs)(n.a.Fragment,{children:[!s&&Object(b.jsxs)("div",{className:"result-container",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("span",{id:"country-name",children:"Covid-19"}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"Located: ---"}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{id:"date",children:"Results due: ---"}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fas fa-users"}),Object(b.jsx)("span",{children:"--"})]}),Object(b.jsxs)("div",{className:"data-container",children:[Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#DB9126"},children:"CASES"}),Object(b.jsxs)("div",{className:"results-container",children:[Object(b.jsx)("h1",{children:"000"}),Object(b.jsx)("span",{children:"000"})]})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#436BF3"},children:"TESTS"}),Object(b.jsx)("div",{className:"results-container",children:Object(b.jsx)("h1",{children:"000"})})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#15AB2E"},children:"RECOVERED"}),Object(b.jsx)("div",{className:"results-container",children:Object(b.jsx)("h1",{children:"000"})})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#ee6c4d"},children:"DEATHS"}),Object(b.jsxs)("div",{className:"results-container",children:[Object(b.jsx)("h1",{children:"000"}),Object(b.jsx)("span",{children:"---"})]})]})]})]}),s&&Object(b.jsxs)("div",{className:"result-container",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("span",{id:"country-name",children:"".concat(s.country," Covid-19")}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"Located: ".concat(s.continent)}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{id:"date",children:"Results due: ".concat(y()(s.time).calendar())}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{className:"fas fa-users"}),Object(b.jsxs)("span",{children:[" ",s.population]})]}),Object(b.jsxs)("div",{className:"data-container",children:[Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#DB9126"},children:"CASES"}),Object(b.jsxs)("div",{className:"results-container",children:[Object(b.jsx)("h1",{children:Object(b.jsx)(T.a,{id:"animated",animateToNumber:s.cases.total,includeComma:!0,config:{tension:89,friction:40},animationType:"random"})}),Object(b.jsx)("span",{children:s.cases.new})]})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#436BF3"},children:"TESTS"}),Object(b.jsx)("div",{className:"results-container",children:Object(b.jsx)("h1",{children:Object(b.jsx)(T.a,{animateToNumber:s.tests.total,includeComma:!0,config:{tension:89,friction:40},animationType:"calm"})})})]})," ",Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#15AB2E"},children:"RECOVERED"}),Object(b.jsx)("div",{className:"results-container",children:Object(b.jsx)("h1",{children:Object(b.jsx)(T.a,{animateToNumber:s.cases.recovered,includeComma:!0,config:{tension:89,friction:40},animationType:"calm"})})})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h2",{style:{color:"#ee6c4d"},children:"DEATHS"}),Object(b.jsxs)("div",{className:"results-container",children:[Object(b.jsx)("h1",{children:Object(b.jsx)(T.a,{animateToNumber:s.deaths.total,includeComma:!0,config:{tension:89,friction:40},animationType:"random"})}),Object(b.jsx)("span",{children:s.deaths.new})]})]})]})]}),Object(b.jsx)(x,{})]})},S=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",exact:!0,component:O}),Object(b.jsx)(j.a,{path:"/:country",exact:!0,component:g})]})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.e0078ba1.chunk.js.map