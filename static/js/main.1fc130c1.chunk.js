(this["webpackJsonpcurrency-calculator-react"]=this["webpackJsonpcurrency-calculator-react"]||[]).push([[0],{11:function(e,n,t){e.exports=t.p+"static/media/money_banknotes_currency_forex_us_dollars_euro_baht_peso-551241.dcdf8117.jpg"},16:function(e,n,t){e.exports=t(25)},21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(10),i=t.n(c),o=(t(21),t(1)),u=t(2),l=t(11),s=t.n(l);function d(){var e=Object(o.a)(["\n    background-image: url(",');\n    background-size: cover;\n    position: relative;\n    z-index: 1;\n\n&::after{\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(240, 255, 255, 0.548);\n    z-index: -1;\n}\n']);return d=function(){return e},e}var m=u.b.div(d(),s.a),f=function(e){var n=e.children;return a.a.createElement(m,null,n)};function b(){var e=Object(o.a)(["\n    height: 100px;\n"]);return b=function(){return e},e}function p(){var e=Object(o.a)([" \n    text-transform: uppercase;\n    font-size: 20px;\n"]);return p=function(){return e},e}function g(){var e=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    padding: 20px;\n    background-color: var(--colorPrime);\n"]);return g=function(){return e},e}var h=u.b.header(g()),v=u.b.h1(p()),x=u.b.img(b()),E=function(){return a.a.createElement(h,null,a.a.createElement(v,null,"Kantor wymiany walut"),a.a.createElement(x,{alt:"logo",src:"https://cdn.onlinewebfonts.com/svg/img_353628.png"}))};function j(){var e=Object(o.a)(["\n    max-width: 1200px;\n    margin: 0 auto;\n    background: white;\n    padding: 30px;\n    min-height: 80vh;\n"]);return j=function(){return e},e}var w=u.b.main(j());function y(){var e=Object(o.a)(["\n    color: red;\n    font-weight: bold;\n    font-size: 25px;\n    width: 75%;\n    text-align: center;\n    @media (max-width: 767px) {\n        width: 90%;\n        font-size: 20px;\n    }\n"]);return y=function(){return e},e}function O(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n   height: 65vh;\n"]);return O=function(){return e},e}var k=u.b.section(O()),z=u.b.p(y()),P=function(e){return e.currencies.failed&&a.a.createElement(k,null,a.a.createElement(z,null,"Ups, co\u015b posz\u0142o nie tak. Sprawd\u017a po\u0142\u0105czenie z internetem. Je\u017celi wszystko jest w porz\u0105dku, problem le\u017cy po naszej stronie.",a.a.createElement("br",null),"Pracujemy nad rozwi\u0105zaniem, przepraszamy za niedogodno\u015bci."))};function S(){var e=Object(o.a)(["\n    font-weight: bold;\n    font-size: 25px;\n    width: 75%;\n    text-align: center;\n    @media (max-width: 767px) {\n        width: 90%;\n        font-size: 20px;\n    }\n"]);return S=function(){return e},e}function C(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n   height: 65vh;\n"]);return C=function(){return e},e}var _=u.b.section(C()),N=u.b.p(S()),D=function(e){return e.currencies.loading&&a.a.createElement(_,null,a.a.createElement(N,null,"Prosimy o chwilk\u0119 cierpliwo\u015bci, pobieramy dla Ciebie najbardziej aktualne kursy z Narodowego Banku Polskiego"))},W=function(e){var n=e.children,t=e.currencies;return a.a.createElement(w,null,n,a.a.createElement(P,{currencies:t}),a.a.createElement(D,{currencies:t}))},q=t(3);function B(){var e=Object(o.a)(["\n    margin: 20px;\n    font-size: 20px;\n    font-family: monospace;\n    text-align: right;\n"]);return B=function(){return e},e}var I=u.b.section(B()),J=function(){var e=function(){var e=Object(r.useState)(new Date),n=Object(q.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return a.a.createElement(I,null,"Dzisiaj jest  ",function(e){return e.toLocaleString("pl",{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}(e))},K=t(7),L=t.n(K),T=t(4),F=t(15),U=function(){var e=Object(r.useState)({loading:!0,date:"",failed:!1,rates:[]}),n=Object(q.a)(e,2),t=n[0],a=n[1],c=function(){var e=Object(F.a)(L.a.mark((function e(n,t){var r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nbp.pl/api/exchangerates/tables/c/");case 3:if((r=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,r.json();case 8:a=e.sent,t(Object(T.a)(Object(T.a)({},n),{},{loading:!1,date:a[0].effectiveDate,rates:a[0].rates})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t(Object(T.a)(Object(T.a)({},n),{},{loading:!1,failed:!0}));case 15:case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){setTimeout((function(){c(t,a)}),2e3)}),[]),t};function V(){var e=Object(o.a)(["\n    text-align: center;\n    font-size: 30px;\n    margin: 40px auto;\n    max-width: 80%;\n"]);return V=function(){return e},e}var A=u.b.p(V()),M=function(e){var n=e.answerValue,t=e.resultCode;return n&&a.a.createElement(A,null,"Na rachunek powi\u0105zany z Twoim kontem zosta\u0142o przelane",a.a.createElement("p",null,n,"\xa0",t))};function $(){var e=Object(o.a)(["\n    display: block;\n    width: 200px;\n    padding: 20px;\n    border: 3px solid var(--colorPrime);\n    background-color: transparent;\n    margin: 20px auto;\n    transition: 0.3s;\n\n    &:hover {\n    background-color: var(--colorPrime);\n    };\n\n    &:focus {\n    background-color: hsl(135, 67%, 63%);\n    outline: none;\n    }\n"]);return $=function(){return e},e}function G(){var e=Object(o.a)(["\n    display: block;\n    height: 2em;\n    font-weight: bold;\n"]);return G=function(){return e},e}function H(){var e=Object(o.a)(["\n    max-width: 400px;\n    padding: 10px;\n    border: 3px solid var(--colorPrime);\n    margin: 20px auto;\n    text-align: center;\n"]);return H=function(){return e},e}function Q(){var e=Object(o.a)(["\n    display: inline-block;\n    padding: 5px;\n    border: 1px solid var(--colorPrime);\n"]);return Q=function(){return e},e}function R(){var e=Object(o.a)(["\n    display: inline-block;\n    "]);return R=function(){return e},e}function X(){var e=Object(o.a)(["\n    display: block;\n    margin: 10px 10px;\n    \n    ","\n"]);return X=function(){return e},e}function Y(){var e=Object(o.a)(["\n    flex-basis: 300px;\n    margin: 0 auto;\n    text-align: center;\n"]);return Y=function(){return e},e}function Z(){var e=Object(o.a)(["\n    list-style: none;\n    flex-basis: 300px;\n    "]);return Z=function(){return e},e}function ee(){var e=Object(o.a)(["\n    display: flex;\n    margin: 0 auto;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n"]);return ee=function(){return e},e}function ne(){var e=Object(o.a)(["\n    padding: 20px;\n    border: 3px solid var(--colorPrime);\n"]);return ne=function(){return e},e}var te=u.b.div(ne()),re=u.b.div(ee()),ae=u.b.ul(Z()),ce=u.b.div(Y()),ie=u.b.span(X(),(function(e){return e.inline&&Object(u.a)(R())})),oe=u.b.input(Q()),ue=u.b.div(H()),le=u.b.p(G()),se=u.b.button($()),de=function(e){var n=e.currencies,t=Object(r.useState)(!0),c=Object(q.a)(t,2),i=c[0],o=c[1],u=Object(r.useState)(""),l=Object(q.a)(u,2),s=l[0],d=l[1],m=Object(r.useState)(""),f=Object(q.a)(m,2),b=f[0],p=f[1],g=function(){var e=U(),n=Object(r.useState)("USD"),t=Object(q.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)({currency:"",code:"",ask:"",bid:""}),o=Object(q.a)(i,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){e.rates.length>0&&l(e.rates.find((function(e){return e.code===a})))}),[e.rates,a]),[u,a,c]}(),h=Object(q.a)(g,3),v=h[0],x=h[1],E=h[2],j=i?v.code:"PLN",w=function(){return i?(Number(s)/v.ask).toFixed(2):(Number(s)*v.bid).toFixed(2)};return n.rates.length>0&&a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p(w())}},a.a.createElement(te,null,a.a.createElement("legend",null,"Co chcesz zrobi\u0107?"),a.a.createElement(re,null,a.a.createElement(ae,null,a.a.createElement("li",null,a.a.createElement("label",null,a.a.createElement("input",{type:"radio",name:"what-you-gona-do",required:!0,checked:i,onChange:function(){o(!0),p("")}}),a.a.createElement(ie,{inline:!0},"Kupuj\u0119"))),a.a.createElement("li",null,a.a.createElement("label",null,a.a.createElement("input",{type:"radio",name:"what-you-gona-do",checked:!i,onChange:function(){o(!1),p("")},required:!0}),a.a.createElement(ie,{inline:!0},"Sprzedaj\u0119")))),a.a.createElement(ce,null,a.a.createElement("label",null,a.a.createElement(ie,null,"Wybierz walut\u0119"),a.a.createElement(oe,{as:"select",required:!0,name:"currency",value:x,onChange:function(e){var n=e.target;E(n.value),p("")}},n.rates.map((function(e){return a.a.createElement("option",{value:e.code,key:e.code},e.currency)}))))),a.a.createElement(ce,null,a.a.createElement("label",null,a.a.createElement(ie,null,"Chc\u0119 wymieni\u0107",a.a.createElement("strong",null,"(",i?"PLN":v.code,")")),a.a.createElement(oe,{name:"to-exchange",required:!0,type:"number",min:"1",value:s,onChange:function(e){var n=e.target;d(n.value),p("")}}))))),a.a.createElement(ue,null,a.a.createElement("p",null,"Otrzymasz"),a.a.createElement(le,null,w()," (",j,")")),a.a.createElement(se,null,"Wymie\u0144"),a.a.createElement(M,{answerValue:b,resultCode:j}))};function me(){var e=Object(o.a)(["\n        background: var(--colorPrime);\n        text-transform: uppercase;\n        font-weight: 400;\n    "]);return me=function(){return e},e}function fe(){var e=Object(o.a)(["\n    padding: 20px;\n    border: 3px solid #333;\n    text-align: center;\n    ","\n"]);return fe=function(){return e},e}function be(){var e=Object(o.a)(["\n    text-transform: uppercase;\n    font-weight: bold;\n    text-align: right;\n    margin: 10px 0;\n"]);return be=function(){return e},e}function pe(){var e=Object(o.a)(["\n    border-collapse: collapse;\n    width: 100%;\n"]);return pe=function(){return e},e}function ge(){var e=Object(o.a)(["\n    max-width: 600px;\n    overflow-x: auto;\n    padding: 20px;\n    margin: 0 auto;\n"]);return ge=function(){return e},e}var he=u.b.section(ge()),ve=u.b.table(pe()),xe=u.b.caption(be()),Ee=u.b.td(fe(),(function(e){return e.header&&Object(u.a)(me())})),je=function(e){var n=e.currencies;return n.rates.length>0&&a.a.createElement(he,null,a.a.createElement(ve,null,a.a.createElement(xe,null,"Tabela kurs\xf3w walut aktualna na dzie\u0144 ",n.date),a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(Ee,{as:"th",header:!0},"Waluta"),a.a.createElement(Ee,{as:"th",header:!0},"Kupno"),a.a.createElement(Ee,{as:"th",header:!0},"Sprzeda\u017c"))),a.a.createElement("tbody",null,n.rates.map((function(e){return a.a.createElement("tr",{key:e.code},a.a.createElement(Ee,{as:"th",header:!0},e.currency),a.a.createElement(Ee,null,e.ask),a.a.createElement(Ee,null,e.bid))})))))};function we(){var e=Object(o.a)(["\n    text-align: center;\n    font-weight: bold;\n"]);return we=function(){return e},e}function ye(){var e=Object(o.a)(["\n    background-color: var(--colorPrime);\n    width: 100%;\n    margin-top: 0;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return ye=function(){return e},e}var Oe=u.b.footer(ye()),ke=u.b.p(we()),ze=function(){return a.a.createElement(Oe,null,a.a.createElement(ke,null,"Nie jeste\u015bmy prawdziwym kantorem, ale kursy s\u0105 prawdziwe i pobrane z NBP API"))};var Pe=function(){var e=U();return a.a.createElement(f,null,a.a.createElement(E,null),a.a.createElement(W,{currencies:e},a.a.createElement(J,null),a.a.createElement(de,{currencies:e}),a.a.createElement(je,{currencies:e})),a.a.createElement(ze,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1fc130c1.chunk.js.map