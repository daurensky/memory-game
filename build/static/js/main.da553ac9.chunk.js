(this.webpackJsonpmind=this.webpackJsonpmind||[]).push([[0],{17:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(5),s=n.n(a),i=(n(17),n(3)),u=i.c,o=function(){return Object(i.b)()},d=n(7),l=n(2),f=Object(l.b)({name:"game",initialState:{won:!1,started:!1,points:0,result:[]},reducers:{win:function(t){t.won=!0},resetWin:function(t){t.won=!1},gameStart:function(t){t.started=!0},gameStop:function(t){t.started=!1},addPoint:function(t){t.points+=1},addResult:function(t,e){var n=e.payload;t.result=[n].concat(Object(d.a)(t.result))},resetPoints:function(t){t.points=0}}}),j=f.actions,m=j.win,v=j.resetWin,b=j.gameStart,O=j.gameStop,h=j.addPoint,p=j.addResult,x=j.resetPoints,g=f.reducer,w=n(11),S=n.n(w),I=Object(l.b)({name:"time",initialState:{timer:5,stopwatch:"00:00:00"},reducers:{tickTimer:function(t){t.timer-=1},tickStopWatch:function(t,e){var n=e.payload;t.stopwatch=S()().hour(0).minute(0).second(n).format("HH:mm:ss")},resetTimer:function(t){t.timer=5},resetStopwatch:function(t){t.stopwatch="00:00:00"}}}),R=I.actions,y=R.tickTimer,N=R.resetTimer,k=R.tickStopWatch,V=R.resetStopwatch,E=I.reducer,C=Object(l.b)({name:"cards",initialState:{first:{id:null,value:null},second:{id:null,value:null},inGame:[],valuesOfRemoved:[]},reducers:{setFirstId:function(t,e){var n=e.payload;t.first.id=n},setFirstValue:function(t,e){var n=e.payload;t.first.value=n},setSecondId:function(t,e){var n=e.payload;t.second.id=n},setSecondValue:function(t,e){var n=e.payload;t.second.value=n},removeValueOfPairedCards:function(t,e){var n=e.payload;t.valuesOfRemoved=[].concat(Object(d.a)(t.valuesOfRemoved),[n])},resetCards:function(t){t.first.id=null,t.first.value=null,t.second.id=null,t.second.value=null},resetValuesOfRemoved:function(t){t.valuesOfRemoved=[]}}}),P=C.actions,T=P.setFirstId,F=P.setFirstValue,W=P.setSecondId,M=P.setSecondValue,q=P.resetCards,H=P.removeValueOfPairedCards,J=P.resetValuesOfRemoved,B=C.reducer,G=n(1);var U=function(){var t=o(),e=u((function(t){return t.time.stopwatch})),n=u((function(t){return t.time.timer})),c=u((function(t){return t.game.points})),a=u((function(t){return t.game.started})),s=u((function(t){return t.game.won}));return Object(r.useEffect)((function(){0===n&&t(O())}),[n]),Object(r.useEffect)((function(){if(a){var n=1,r=setInterval((function(){t(k(n++))}),1e3);return function(){return clearInterval(r)}}"00:00:00"!==e&&t(p({stopwatch:s?"\ud83d\udc51 ".concat(e):e,points:c})),t(q()),t(J()),t(V()),t(N()),t(x())}),[a]),Object(G.jsxs)("div",{className:"header",children:[Object(G.jsx)("h2",{children:e}),Object(G.jsxs)("h2",{children:["\u0421\u0447\u0435\u0442: ",c]}),Object(G.jsx)("button",{onClick:function(){t(v()),t(a?O():b())},className:"start-btn",children:a?"\u0421\u0442\u043e\u043f":"\u0421\u0442\u0430\u0440\u0442"})]})},z=n(12);var A=function(){return Object(G.jsx)("div",{className:"win",children:"\ud83d\udc51 \ud83c\udf89 \u0412\u044b \u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0438!"})};var D=function(){var t=u((function(t){return t.time.timer}));return Object(G.jsx)("span",{className:"countdown",children:t})};var K=function(t){var e=t.id,n=t.value,r=t.firstId,c=t.secondId,a=t.gameStarted,s=t.cardRemoved,i=o();return Object(G.jsx)("td",{children:!s&&Object(G.jsx)("div",{className:"card ".concat(a?"":"disabled"),onClick:function(){a&&(null===r?(i(T(e)),i(F(n))):null===c&&r!==e&&(i(W(e)),i(M(n))))},children:r===e||c===e?Object(G.jsx)("img",{src:"/img/".concat(n,".png"),alt:n.toString(),width:60}):Object(G.jsx)("img",{src:"/img/question.png",alt:"Unselected card",width:60})})})};var L=function(t){var e=t.cards,n=u((function(t){return t.cards.first.id})),r=u((function(t){return t.cards.second.id})),c=u((function(t){return t.cards.valuesOfRemoved})),a=u((function(t){return t.game.won})),s=u((function(t){return t.game.started}));return Object(G.jsx)("table",{className:"playground ".concat(a?"blurred":""),children:Object(G.jsx)("tbody",{children:e.map((function(t,e){return Object(G.jsx)("tr",{children:t.map((function(t){var e=t.id,a=t.value;return Object(G.jsx)(K,{id:e,value:a,cardRemoved:c.includes(a),gameStarted:s,firstId:n,secondId:r},e)}))},e)}))})})};var Q=function(t){return t.sort((function(){return Math.random()-.5}))};var X=function(t){for(var e=[],n=t,r=Math.sqrt(2*+t),c=1,a=1,s=1;s<=r;s++){for(var i=[],u=1;u<=r;u++)c>n&&(c=1),i.push({id:a++,value:c++});e.push(Q(i))}return e};var Y=function(){var t=o(),e=Object(r.useState)([]),n=Object(z.a)(e,2),c=n[0],a=n[1],s=u((function(t){return t.cards.first.value})),i=u((function(t){return t.cards.second.value})),d=u((function(t){return t.cards.valuesOfRemoved})),l=u((function(t){return t.game.won})),f=u((function(t){return t.game.started}));return Object(r.useEffect)((function(){y();a(X("18"))}),[f]),Object(r.useEffect)((function(){if(null!==s){var e=setInterval((function(){t(y())}),1e3);return function(){return clearInterval(e)}}}),[s]),Object(r.useEffect)((function(){null!==s&&null!==i&&setTimeout((function(){s===i&&(t(h()),t(H(s))),t(q()),t(N())}),600)}),[i]),Object(r.useEffect)((function(){"18"===d.length.toString()&&(t(m()),t(O()))}),[d]),Object(G.jsxs)("div",{className:"area",children:[s&&Object(G.jsx)(D,{}),l&&Object(G.jsx)(A,{}),Object(G.jsx)(L,{cards:c})]})};var Z=function(t){var e=t.stopwatch,n=t.points;return Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:e}),Object(G.jsx)("td",{children:n})]})};var $=function(){var t=u((function(t){return t.game.result}));return Object(G.jsxs)("table",{className:"result",children:[Object(G.jsx)("thead",{children:Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"\u0412\u0440\u0435\u043c\u044f"}),Object(G.jsx)("th",{children:"\u0421\u0447\u0435\u0442"})]})}),Object(G.jsx)("tbody",{children:t.map((function(t,e){var n=t.stopwatch,r=t.points;return Object(G.jsx)(Z,{stopwatch:n,points:r},e)}))})]})};var _=function(){return Object(G.jsx)("div",{className:"area",children:Object(G.jsx)($,{})})};var tt=function(){return Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)(U,{}),Object(G.jsxs)("div",{className:"wrapper",children:[Object(G.jsx)(Y,{}),Object(G.jsx)(_,{})]})]})},et=Object(l.a)({reducer:{cards:B,game:g,time:E}});s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(i.a,{store:et,children:Object(G.jsx)(tt,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.da553ac9.chunk.js.map