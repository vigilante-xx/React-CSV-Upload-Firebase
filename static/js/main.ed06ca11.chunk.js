(this["webpackJsonpcsv-upload-firebase"]=this["webpackJsonpcsv-upload-firebase"]||[]).push([[0],{128:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(60),c=t.n(o),l=(t(72),t(18)),i=t(19),s=t(21),u=t(20),d=t(64),m=t(2),f=(t(73),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),p=t(32),h=t.n(p),b=t(61),g=t.n(b),v=t(66),E=t(63),y=t.n(E),j=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).onDrop=function(e){a.setState({files:e,isLoading:!0});var n=e[0],t=new FileReader;t.onload=function(){y.a.parse(t.result,(function(e,n){for(var t=[],r=function(e){var r={Name:n[e][0],Size:n[e][1],Price:n[e][2]};t.push(r),g.a.post("".concat("https://react-my-burger-eb3bf.firebaseio.com","/burgers.json"),r,{headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t),e===n.length-1&&(a.setState({isLoading:!1}),h.a.toast({html:"Uploaded Successfully!",classes:"#43a047 green darken-1"}))})).catch((function(t){e===n.length-1&&(a.setState({isLoading:!1}),h.a.toast({html:"Uploaded Successfully!",classes:"#43a047 green darken-1"}))}))},o=0;o<n.length;o++)r(o)}))},t.readAsBinaryString(n)},a.state={isLoading:!1},a}return Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{align:"center",onContextMenu:function(){return!1}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{accept:".csv",onDropAccepted:this.onDrop}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Upload or drop your ",r.a.createElement("font",{size:5,color:"#00A4FF"},"CSV"),r.a.createElement("br",null)," file here"));return this.state.isLoading&&(e=r.a.createElement(f,null)),r.a.createElement("div",null,e)}}]),t}(a.Component),w=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:j}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,n,t){e.exports=t(128)},72:function(e,n,t){},73:function(e,n,t){},95:function(e,n){},97:function(e,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.ed06ca11.chunk.js.map