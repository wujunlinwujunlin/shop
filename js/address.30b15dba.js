(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["address"],{"34af":function(e,t,c){},"67f2":function(e,t,c){"use strict";c("34af")},aa6e:function(e,t,c){"use strict";c("ac1f")},ac1f:function(e,t,c){},bddc:function(e,t,c){"use strict";var n=c("7a23"),a=Object(n["J"])("data-v-45f3cbad");Object(n["t"])("data-v-45f3cbad");var r={class:"docker"},d={class:"docker__title"};Object(n["r"])();var s=a((function(e,t,c,s,i,o){var b=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])("div",r,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(s.dockerList,(function(e,t){return Object(n["q"])(),Object(n["d"])("div",{class:[{docker__item:!0,"docker__item--active":t===c.currentindex},"docker__item "],key:e.icon},[Object(n["g"])(b,{to:e.to},{default:a((function(){return[Object(n["g"])("div",{class:"iconfont",innerHTML:e.icon},null,8,["innerHTML"]),Object(n["g"])("div",d,Object(n["z"])(e.text),1)]})),_:2},1032,["to"])],2)})),128))])})),i={name:"docker",props:["currentindex"],setup:function(){var e=[{icon:"&#xe6f3;",text:"首页",to:{name:"Home"}},{icon:"&#xe7e5;",text:"购物车",to:{name:"cartlist"}},{icon:"&#xe61e;",text:"订单",to:{name:"orderlist"}},{icon:"&#xe660;",text:"我的",to:{name:"address"}}];return{dockerList:e}}};c("67f2");i.render=s,i.__scopeId="data-v-45f3cbad";t["a"]=i},f168:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a=Object(n["J"])("data-v-7791531e");Object(n["t"])("data-v-7791531e");var r={class:"wrapper"},d={class:"title"},s=Object(n["f"])(" 我的地址 "),i={class:"title__create"},o=Object(n["f"])("新建"),b={key:0,class:"address"},u={key:1,class:"address"},l={class:"address__item__basic"},j={class:"address__item__phone"},O={class:"address__item__address"},f=Object(n["g"])("div",{class:"iconfont"},"  ",-1);Object(n["r"])();var v=a((function(e,t,c,v,_,p){var k=Object(n["x"])("router-link"),m=Object(n["x"])("docker");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",r,[Object(n["g"])("div",d,[s,Object(n["g"])("span",i,[Object(n["g"])(k,{to:"/addressedit"},{default:a((function(){return[o]})),_:1})])]),0===v.addresslist.length?(Object(n["q"])(),Object(n["d"])("div",b," 暂无地址信息 ")):Object(n["e"])("",!0),v.addresslist.length>0?(Object(n["q"])(),Object(n["d"])("div",u,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(v.addresslist,(function(e){return Object(n["q"])(),Object(n["d"])("div",{class:"address__item",key:e._id,onClick:function(){return v.handaddressclick(e._id)}},[Object(n["g"])("p",l,[Object(n["f"])(Object(n["z"])(e.name)+" ",1),Object(n["g"])("span",j,Object(n["z"])(e.phone),1)]),Object(n["g"])("p",O,Object(n["z"])(e.city)+Object(n["z"])(e.department)+Object(n["z"])(e.houseNumber),1),f],8,["onClick"])})),128))])):Object(n["e"])("",!0)]),Object(n["g"])(m,{currentindex:3})],64)})),_=(c("96cf"),c("1da1")),p=c("bddc"),k=c("b775"),m=c("6c02"),g=function(){var e=Object(n["v"])([]),t=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(k["a"])("/api/user/address");case 2:n=t.sent,0===(null===n||void 0===n?void 0:n.errno)&&(null===n||void 0===n||null===(c=n.data)||void 0===c?void 0:c.length)&&(e.value=n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{getaddresslist:t,addresslist:e}},x={name:"address",components:{docker:p["a"]},setup:function(){var e=Object(m["d"])(),t=g(),c=t.addresslist,n=t.getaddresslist;n();var a=function(t){e.push("/addressedit?id=".concat(t))};return{addresslist:c,handaddressclick:a}}};c("aa6e");x.render=v,x.__scopeId="data-v-7791531e";t["default"]=x}}]);
//# sourceMappingURL=address.30b15dba.js.map