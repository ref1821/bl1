(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},38:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(23),r=n.n(a),i=(n(30),n(31),n(8)),o=n(3),j=(n(32),n(0)),l=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("h1",{className:"title",children:"Blackjack"}),Object(j.jsx)("div",{className:"navi",children:Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.c,{to:"/react-blackjack/home",className:"n",children:"Home"}),Object(j.jsx)(i.c,{to:"/react-blackjack/games",className:"n",children:"Games"}),Object(j.jsx)(i.c,{to:"/react-blackjack/about",className:"n",children:"About"})]})})]})},h=(n(38),n(16)),u=n(25),b=n(21),d=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"https://www.instagram.com/wdes798/",children:Object(j.jsx)(h.a,{icon:u.a,className:"insta"})})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"https://ref1821.github.io/wdes798/",children:Object(j.jsx)(h.a,{icon:b.a,className:"home"})})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"https://ref1821.github.io/wdes798/about",children:Object(j.jsx)(h.a,{icon:b.b,className:"contact"})})}),Object(j.jsx)("h3",{className:"h",children:"Made by WDES"})]})},m=(n(42),function(){return Object(j.jsxs)("div",{className:"con",children:[Object(j.jsx)(l,{}),Object(j.jsx)(i.b,{to:"/react-blackjack/play",className:"pla",children:"Play"}),Object(j.jsx)(d,{})]})}),O=(n(43),n(10)),x=n(11),f=n(13),v=n(12),p=(n(44),function(t){Object(f.a)(n,t);var e=Object(v.a)(n);function n(t){var s;return Object(O.a)(this,n),(s=e.call(this,t)).state={text:"",number:0},s}return Object(x.a)(n,[{key:"Howe",value:function(){var t=this;0===this.state.number?this.setState({number:this.state.number+1,text:this.state.text="Take cards until you get 21 or close, if you go ahead you lose"},(function(){console.log(t.state.text)})):1===this.state.number&&this.setState({number:this.state.number-1,text:this.state.text=""},(function(){console.log(t.state.text)}))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"how",children:[Object(j.jsx)("button",{onClick:function(){return t.Howe()},id:"btn",children:"How to play"}),Object(j.jsx)("p",{id:"how",children:this.state.text})]})}}]),n}(s.Component)),k=(n(45),function(t){Object(f.a)(n,t);var e=Object(v.a)(n);function n(t){var s;Object(O.a)(this,n),s=e.call(this,t);var c=new Array(1,2,3,4,5,6,7,8,9,10,10,10,10),a=c[Math.floor(Math.random()*c.length)],r=c[Math.floor(Math.random()*c.length)];return s.state={n:"",num:a,num2:r,dnum3:0,totalUno:a+r,qwe:0},s}return Object(x.a)(n,[{key:"NN",value:function(){var t=this,e=new Array(1,2,3,4,5,6,7,8,9,10,10,10,10);new Array("yes","yes","yes","no","no");this.state.totalUno<=21?this.setState({dnum3:e[Math.floor(Math.random()*e.length)]},(function(){t.setState({n:t.state.n+"your new number is "+t.state.dnum3+"---------------------",totalUno:t.state.totalUno+t.state.dnum3})})):0===this.state.qwe&&this.state.totalUno>21&&(this.setState({n:this.state.n+"you lost",qwe:this.state.qwe+1}),console.log(this.state.qwe))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"person",children:[Object(j.jsx)("h2",{className:"letter",children:"Your numbers"}),Object(j.jsxs)("p",{children:["Your numbers are ",this.state.num," and ",this.state.num2]}),Object(j.jsxs)("p",{children:["Total: ",this.state.totalUno]}),Object(j.jsx)("button",{onClick:function(){return t.NN()},className:"bnn",children:"New number"}),Object(j.jsx)("p",{children:this.state.n})]})}}]),n}(s.Component)),y=function(t){Object(f.a)(n,t);var e=Object(v.a)(n);function n(t){var s;Object(O.a)(this,n),s=e.call(this,t);var c=new Array(1,2,3,4,5,6,7,8,9,10,10,10,10),a=c[Math.floor(Math.random()*c.length)],r=c[Math.floor(Math.random()*c.length)];return s.state={cnum:a,cnum2:r,cTotal:a+r,cnum3:0,fn:"",n:0},s}return Object(x.a)(n,[{key:"Finish",value:function(){var t=this;console.log(this.state.cnum+" "+this.state.cnum2+" "+this.state.cTotal);var e=new Array(1,2,3,4,5,6,7,8,9,10,10,10,10),n=new Array("yes","yes","yes","no","no"),s=n[Math.floor(Math.random()*n.length)];console.log(s),this.state.cTotal>=15&&this.state.cTotal<21&&0===this.state.n?"yes"===s&&this.setState({cnum3:e[Math.floor(Math.random()*e.length)]},(function(){t.setState({cTotal:t.state.cTotal+t.state.cnum3},(function(){t.setState({fn:"computer's number: "+t.state.cTotal})})),console.log(t.state.cTotal)})):this.setState({fn:"computer's number: "+this.state.cTotal}),this.setState({n:this.state.n+1})}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"compu",children:[Object(j.jsx)("h2",{className:"letter",children:"Computer's numbers"}),Object(j.jsxs)("p",{children:["Computer's numbers are ",this.state.cnum,"  and ",this.state.cnum2," "]}),Object(j.jsx)("p",{children:this.state.fn})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return t.Finish()},children:"Finish Game"})})]})}}]),n}(s.Component),w=function(){return Object(j.jsxs)("div",{className:"play",children:[Object(j.jsx)(p,{className:"how"}),Object(j.jsx)(k,{}),Object(j.jsx)(y,{})]})},N=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(w,{}),Object(j.jsx)(d,{})]})},g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(d,{})]})},M=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(d,{})]})};var S=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/react-blackjack/games",exact:!0,children:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"/react-blackjack/about",exact:!0,children:Object(j.jsx)(M,{})}),Object(j.jsx)(o.a,{path:"/react-blackjack/play",exact:!0,children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/react-blackjack/home",children:Object(j.jsx)(m,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(m,{})})]})})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),a(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.48fe9dbe.chunk.js.map