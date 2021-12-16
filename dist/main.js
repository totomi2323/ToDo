(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"header {\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  width: 99%;\n  height: 180px;\n  margin: 0 auto;\n  border: 3px solid black;\n  background-color: rgba(128, 128, 128, 0.5);\n  border-radius: 10px;\n}\n\n.navBar {\n  display: flex;\n  flex-direction: column;\n  line-height: 25px;\n    position: fixed;\n    top : 22%;\n    width: 15%;\n    height: 78%;\n   \n}\n.navButtonStyle {\n  padding: 20px;\n  border-radius: 10px;\n}\n.formStyle {\n  display: none;\n  flex-direction: column;\n  line-height: 35px;\n  align-items:  center;\n  padding: 5px;\n  border: 5px solid black;\n  width: 40%;\n  height : 40%;\n  position: fixed;\n  top:30%;\n  left: 30%;\n  opacity: 1;\n  background-color: azure;\n  border-radius: 10px;\n  \n  \n}\n.content {\n  display: block;\n  position: fixed;\n  top: 22%;\n  left:16%;\n  width: 83%;\n  height: 78%;\n  border: 1px solid black;\n}\n.task {\n  display: flex;\n  justify-content: space-evenly;\n  justify-items: center;\n  width: 100%;\n  padding: 18px;\n  border : 1px solid black;\n  position: relative;\n\n\n}\n.head {\n  display: flex;\n  justify-content: space-evenly;\n  justify-items: center;\n  padding: 10px;\n  background-color: grey;\n\n}\n.head div{\n  position: relative;\n  right: 30px;\n\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n.projectButtons {\n  padding: 15px;\n  width : 90%;\n  align-self:  center;\n  border-radius: 10px;\n  background-color: burlywood;\n}\n.projects {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  width : 90%;\n  align-items: center;\n  align-self: center;\n  border-radius: 10px;\n  background-color:rgb(218, 214, 209);\n  font-weight: bolder;\n  font-size: 18px;\n}\n#addTask {\n  margin: 10px;\n}\n#close, #addTask {\n  padding: 8px;\n}\n#projectName {\n display: block;\n margin: 0 auto;\n padding: 5px;\n width: 90%;\n}",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var l=e[d],c=r.base?l[0]+r.base:l[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:o(m,r),references:1}),i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var l=r(e,o),c=0;c<a.length;c++){var s=n(a[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),l=n.n(d),c=n(216),s=n.n(c),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,(()=>{let e=document.createElement("header");e.innerHTML="To-Do List",document.body.appendChild(e)})();const y=(()=>{const e=document.createElement("div");return e.classList.add("navBar"),document.body.appendChild(e),{addButton:(t,n,r)=>{(t=document.createElement("button")).innerHTML=n,t.id=r,t.classList.add("navButtonStyle"),e.appendChild(t)}}})(),h=()=>{console.log("semmi");const e=document.createElement("form");e.classList.add("formStyle"),e.id="taskForm";const t=document.createElement("span");t.innerHTML="Title:";const n=document.createElement("input");n.name="title",n.type="text";const r=document.createElement("span");r.innerHTML="Description:";const o=document.createElement("input");o.name="description",o.type="text";const a=document.createElement("span");a.innerHTML="Due Date:";const i=document.createElement("input");i.name="duedate",i.type="date";const d=document.createElement("label");d.htmlFor="priority",d.innerHTML="Select a priority level";const l=document.createElement("select");l.name="priority",l.id="priority",l.required=!0;const c=["","Low Priority","Medium Priority","High Priority"];for(let e=0;e<=3;e++){const t=document.createElement("option");t.value=c[e],t.innerHTML=c[e],l.appendChild(t)}const s=document.createElement("button");s.type="button",s.id="addTask",s.innerHTML="Add";const u=document.createElement("button");u.type="button",u.id="close",u.innerHTML="Close",u.addEventListener("click",(function(){document.getElementById("taskForm").style.display="none"})),document.body.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a),e.appendChild(i),e.appendChild(d),e.appendChild(l),e.appendChild(s),e.appendChild(u)},g={del:(e,t)=>{let n=document.querySelectorAll('[delete="del"');void 0===t&&(t=""),n.forEach((n=>{n.addEventListener("click",(function(){let r=n.id;for(var o of(delete e[r],void 0!==typeof t&&delete t[r],v.displayArray(e,t),g.del(e),console.log(Object.keys(e)),Object.keys(e)))console.log(e[o])}))}))},changeDate:e=>{document.querySelectorAll('[change="date"').forEach((t=>{t.addEventListener("change",(function(t){let n=t.path[0].id;e[n].dueDate=t.target.value,console.log(e)}))}))},changePriority:e=>{document.querySelectorAll('[change="priority"').forEach((t=>{t.addEventListener("change",(function(t){let n=t.path[0].id;e[n].priority=t.target.value,console.log(e)}))}))}},v={addTask:e=>{(()=>{let e=document.getElementById("cont"),t=document.createElement("div");t.classList.add("head"),e.appendChild(t);let n=document.createElement("div");n.innerHTML="Title:";let r=document.createElement("div");r.innerHTML="Description:";let o=document.createElement("div");o.innerHTML="Due Date:";let a=document.createElement("div");a.innerHTML="Priority:";let i=document.createElement("div");i.innerHTML="",t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(i)})();const t=document.createElement("div");t.classList.add("task");const n=document.createElement("div");n.innerHTML=e.title;const r=document.createElement("div");r.innerHTML=e.description;const o=document.createElement("input");o.type="date",o.setAttribute("change","date"),o.value=e.dueDate,o.id=e.deleteId;const a=document.createElement("select");a.setAttribute("change","priority"),a.id=e.deleteId;const i=["Low Priority","Medium Priority","High Priority"];for(let e=0;e<=2;e++){const t=document.createElement("option");t.value=i[e],t.innerHTML=i[e],a.appendChild(t)}a.value=e.priority;const d=document.createElement("button");d.innerHTML="Delete",d.id=e.deleteId,d.setAttribute("delete","del"),document.querySelector("#cont").appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(d)},createContainer:()=>{const e=document.createElement("div");e.id="cont",e.classList.add("content"),document.body.appendChild(e)},emptyContainer:()=>{const e=document.querySelector("#cont"),t=document.querySelectorAll(".task"),n=document.querySelectorAll(".head");t.forEach((t=>{e.removeChild(t)})),n.forEach((t=>{e.removeChild(t)}))},displayArray:(e,t)=>{for(var n in v.emptyContainer(),e)Object.prototype.hasOwnProperty.call(e,n)&&v.addTask(e[n]),g.del(e,t),g.changeDate(e),g.changePriority(e)}},b=(()=>{function e(e,t,n,r,o){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.deleteId=o}return{getFormValues:t=>{let n,r=document.querySelector("#taskForm");return n=new e(r.elements[0].value,r.elements[1].value,r.elements[2].value,r.elements[3].value,t),{[t]:n}}}})();function T(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function w(e){T(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function E(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function k(e,t){T(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,a=null==o?0:E(o),i=null==n.weekStartsOn?a:E(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=w(e),l=d.getDay(),c=(l<i?7:0)+l-i;return d.setDate(d.getDate()-c),d.setHours(0,0,0,0),d}function x(e,t,n){T(2,arguments);var r=k(e,n),o=k(t,n);return r.getTime()===o.getTime()}function C(e,t){return T(2,arguments),x(e,t,{weekStartsOn:1})}function D(e){return T(1,arguments),C(e,Date.now())}var S=36e5,L={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},j=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,N=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,M=/^([+-])(\d{2})(?::?(\d{2}))?$/;function A(e,t){T(1,arguments);var n=t||{},r=null==n.additionalDigits?2:E(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,a=O(e);if(a.date){var i=q(a.date,r);o=H(i.restDateString,i.year)}if(isNaN(o)||!o)return new Date(NaN);var d,l=o.getTime(),c=0;if(a.time&&(c=I(a.time),isNaN(c)||null===c))return new Date(NaN);if(!a.timezone){var s=new Date(l+c),u=new Date(0);return u.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),u.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),u}return d=B(a.timezone),isNaN(d)?new Date(NaN):new Date(l+c+d)}function O(e){var t,n={},r=e.split(L.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],L.timeZoneDelimiter.test(n.date)&&(n.date=e.split(L.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=L.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}function q(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var o=r[1]&&parseInt(r[1]),a=r[2]&&parseInt(r[2]);return{year:null==a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}function H(e,t){if(null===t)return null;var n=e.match(j);if(!n)return null;var r=!!n[4],o=P(n[1]),a=P(n[2])-1,i=P(n[3]),d=P(n[4]),l=P(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(t,d,l):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(U[t]||(Z(e)?29:28))}(t,a,i)&&function(e,t){return t>=1&&t<=(Z(e)?366:365)}(t,o)?(c.setUTCFullYear(t,a,Math.max(o,i)),c):new Date(NaN)}function P(e){return e?parseInt(e):1}function I(e){var t=e.match(N);if(!t)return null;var n=F(t[1]),r=F(t[2]),o=F(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,o)?n*S+6e4*r+1e3*o:NaN}function F(e){return e&&parseFloat(e.replace(",","."))||0}function B(e){if("Z"===e)return 0;var t=e.match(M);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,o)?n*(r*S+6e4*o):NaN}var U=[31,null,31,30,31,30,31,31,30,31,30,31];function Z(e){return e%400==0||e%4==0&&e%100}let z=e=>{let t,n=new Date;t=n.getDate()<=9?"0"+n.getDate():n.getDate();let r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+t;console.log(r);let o=new Object;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&e[a].dueDate==r){console.log(e[a].deleteId);let t={[e[a].deleteId]:e[a]};Object.assign(o,t)}return o},R=e=>{let t=new Object;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&!0===D(A(e[n].dueDate))){console.log(A(e[n].dueDate));let r={[e[n].deleteId]:e[n]};Object.assign(t,r)}return t};const Y=(()=>{let e="",t={};const n=()=>{const n=document.getElementById("projectName");if(""!==n.value){let r=n.value,a=document.createElement("button");a.classList.add("projects"),a.setAttribute("pjName",r),a.addEventListener("click",(function(){v.displayArray(t[r]),e=a.getAttribute("pjName")})),a.innerHTML=r;let i=document.createElement("button");i.innerHTML="Add Task",i.id=r,a.appendChild(i),document.querySelector("#allProjects").after(a),e=n.value,o(n.value),n.value=""}},r=e=>{let n;if(t[e]){for(var r in n=Object.keys(t[e]).length,t[e])Object.prototype.hasOwnProperty.call(t[e],r)&&(n=parseInt(r)+1);console.log(n)}else n=0,t[e]={};t[e]=Object.assign(t[e],b.getFormValues(n)),v.displayArray(t[e]),document.querySelector(".formStyle").style.display="none",console.log(t)},o=t=>{let n="#"+t.toString();document.querySelector(n).addEventListener("click",(function(){document.querySelector("#taskForm").remove(),h(),document.querySelector(".formStyle").style.display="flex",document.querySelector("#addTask").addEventListener("click",(function(){r(e)}))}))};return{createAddButton:()=>{let e=document.querySelector("#allProjects"),t=document.createElement("button");t.innerHTML="Add New Project",t.id="newProject",t.classList.add("projectButtons"),e.after(t),t.addEventListener("click",n)},projectTitle:()=>{let e=document.createElement("div"),t=document.createElement("input");t.id="projectName",e.classList.add("getTitleBox"),document.querySelector("#newProject").after(e),e.appendChild(t)},currentProject:e,addTaskFromForm:r}})();y.addButton("button0","All tasks","allTasks"),y.addButton("button1","Today","today"),y.addButton("button2","This Week","week"),y.addButton("button4","All Projects","allProjects"),y.addButton("button5","Add Task","add"),Y.createAddButton(),Y.projectTitle();let $={0:{title:"washing",description:"clothes",dueDate:"2021-10-04",priority:"Low Priority",deleteId:"0"},1:{title:"dancing",description:"allNight",dueDate:"2021-10-05",priority:"Low Priority",deleteId:"1"}};function V(){let e=Object.keys($).length;$=Object.assign($,b.getFormValues(e)),document.querySelector(".formStyle").style.display="none",v.displayArray($),document.querySelector("#addTask").removeEventListener("click",V)}v.createContainer(),v.displayArray($),document.querySelector("#allTasks").addEventListener("click",(function(){v.displayArray($)})),h(),document.querySelector("#add").addEventListener("click",(function(){document.querySelector("#taskForm").remove(),h(),document.querySelector(".formStyle").style.display="flex",document.querySelector("#addTask").addEventListener("click",V)})),document.querySelector("#today").addEventListener("click",(function(){let e=z($);v.displayArray(e,$)})),document.querySelector("#week").addEventListener("click",(function(){let e=R($);v.displayArray(e,$)}))})()})();