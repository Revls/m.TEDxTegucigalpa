/*! TEDxTeguigalpa - v0.1.0 - 2013-04-20
* http://revls.alejo.in/
* Copyright (c) 2013 Alejandro Morales; Licensed MIT */
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function(e){function O(e,t){return function(n){return j(e.call(this,n),t)}}function M(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function _(){}function D(e){H(this,e)}function P(e){var t=this._data={},n=e.years||e.year||e.y||0,r=e.months||e.month||e.M||0,i=e.weeks||e.week||e.w||0,s=e.days||e.day||e.d||0,o=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,a=e.seconds||e.second||e.s||0,f=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=f+a*1e3+u*6e4+o*36e5,this._days=s+i*7,this._months=r+n*12,t.milliseconds=f%1e3,a+=B(f/1e3),t.seconds=a%60,u+=B(a/60),t.minutes=u%60,o+=B(u/60),t.hours=o%24,s+=B(o/24),s+=i*7,t.days=s%30,r+=B(s/30),t.months=r%12,n+=B(r/12),t.years=n}function H(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function B(e){return e<0?Math.ceil(e):Math.floor(e)}function j(e,t){var n=e+"";while(n.length<t)n="0"+n;return n}function F(e,t,n){var r=t._milliseconds,i=t._days,s=t._months,o;r&&e._d.setTime(+e+r*n),i&&e.date(e.date()+i*n),s&&(o=e.date(),e.date(1).month(e.month()+s*n).date(Math.min(o,e.daysInMonth())))}function I(e){return Object.prototype.toString.call(e)==="[object Array]"}function q(e,t){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)~~e[s]!==~~t[s]&&i++;return i+r}function R(e,t){return t.abbr=e,s[e]||(s[e]=new _),s[e].set(t),s[e]}function U(e){return e?(!s[e]&&o&&require("./lang/"+e),s[e]):t.fn._lang}function z(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function W(e){var t=e.match(a),n,r;for(n=0,r=t.length;n<r;n++)A[t[n]]?t[n]=A[t[n]]:t[n]=z(t[n]);return function(i){var s="";for(n=0;n<r;n++)s+=typeof t[n].call=="function"?t[n].call(i,e):t[n];return s}}function X(e,t){function r(t){return e.lang().longDateFormat(t)||t}var n=5;while(n--&&f.test(t))t=t.replace(f,r);return C[t]||(C[t]=W(t)),C[t](e)}function V(e){switch(e){case"DDDD":return p;case"YYYY":return d;case"YYYYY":return v;case"S":case"SS":case"SSS":case"DDD":return h;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return m;case"X":return b;case"Z":case"ZZ":return g;case"T":return y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return c;default:return new RegExp(e.replace("\\",""))}}function $(e,t,n){var r,i,s=n._a;switch(e){case"M":case"MM":s[1]=t==null?0:~~t-1;break;case"MMM":case"MMMM":r=U(n._l).monthsParse(t),r!=null?s[1]=r:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":t!=null&&(s[2]=~~t);break;case"YY":s[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~t;break;case"a":case"A":n._isPm=(t+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":s[3]=~~t;break;case"m":case"mm":s[4]=~~t;break;case"s":case"ss":s[5]=~~t;break;case"S":case"SS":case"SSS":s[6]=~~(("0."+t)*1e3);break;case"X":n._d=new Date(parseFloat(t)*1e3);break;case"Z":case"ZZ":n._useUTC=!0,r=(t+"").match(x),r&&r[1]&&(n._tzh=~~r[1]),r&&r[2]&&(n._tzm=~~r[2]),r&&r[0]==="+"&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}t==null&&(n._isValid=!1)}function J(e){var t,n,r=[];if(e._d)return;for(t=0;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];r[3]+=e._tzh||0,r[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(r[0],r[1],r[2]),n.setUTCHours(r[3],r[4],r[5],r[6])):(n.setFullYear(r[0],r[1],r[2]),n.setHours(r[3],r[4],r[5],r[6])),e._d=n}function K(e){var t=e._f.match(a),n=e._i,r,i;e._a=[];for(r=0;r<t.length;r++)i=(V(t[r]).exec(n)||[])[0],i&&(n=n.slice(n.indexOf(i)+i.length)),A[t[r]]&&$(t[r],i,e);e._isPm&&e._a[3]<12&&(e._a[3]+=12),e._isPm===!1&&e._a[3]===12&&(e._a[3]=0),J(e)}function Q(e){var t,n,r,i=99,s,o,u;while(e._f.length){t=H({},e),t._f=e._f.pop(),K(t),n=new D(t);if(n.isValid()){r=n;break}u=q(t._a,n.toArray()),u<i&&(i=u,r=n)}H(e,r)}function G(e){var t,n=e._i;if(w.exec(n)){e._f="YYYY-MM-DDT";for(t=0;t<4;t++)if(S[t][1].exec(n)){e._f+=S[t][0];break}g.exec(n)&&(e._f+=" Z"),K(e)}else e._d=new Date(n)}function Y(t){var n=t._i,r=u.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):typeof n=="string"?G(t):I(n)?(t._a=n.slice(0),J(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function Z(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function et(e,t,n){var i=r(Math.abs(e)/1e3),s=r(i/60),o=r(s/60),u=r(o/24),a=r(u/365),f=i<45&&["s",i]||s===1&&["m"]||s<45&&["mm",s]||o===1&&["h"]||o<22&&["hh",o]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",r(u/30)]||a===1&&["y"]||["yy",a];return f[2]=t,f[3]=e>0,f[4]=n,Z.apply({},f)}function tt(e,n,r){var i=r-n,s=r-e.day();return s>i&&(s-=7),s<i-7&&(s+=7),Math.ceil(t(e).add("d",s).dayOfYear()/7)}function nt(e){var n=e._i,r=e._f;return n===null||n===""?null:(typeof n=="string"&&(e._i=n=U().preparse(n)),t.isMoment(n)?(e=H({},n),e._d=new Date(+n._d)):r?I(r)?Q(e):K(e):Y(e),new D(e))}function rt(e,n){t.fn[e]=t.fn[e+"s"]=function(e){var t=this._isUTC?"UTC":"";return e!=null?(this._d["set"+t+n](e),this):this._d["get"+t+n]()}}function it(e){t.duration.fn[e]=function(){return this._data[e]}}function st(e,n){t.duration.fn["as"+e]=function(){return+this/n}}var t,n="2.0.0",r=Math.round,i,s={},o=typeof module!="undefined"&&module.exports,u=/^\/?Date\((\-?\d+)/i,a=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,f=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,l=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,c=/\d\d?/,h=/\d{1,3}/,p=/\d{3}/,d=/\d{1,4}/,v=/[+\-]?\d{1,6}/,m=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,g=/Z|[\+\-]\d\d:?\d\d/i,y=/T/i,b=/[\+\-]?\d+(\.\d{1,3})?/,w=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,E="YYYY-MM-DDTHH:mm:ssZ",S=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],x=/([\+\-]|\d\d)/gi,T="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),N={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},C={},k="DDD w W M D d".split(" "),L="M D H h m s w W".split(" "),A={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return j(this.year()%100,2)},YYYY:function(){return j(this.year(),4)},YYYYY:function(){return j(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return j(~~(this.milliseconds()/10),2)},SSS:function(){return j(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(e/60),2)+":"+j(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(10*e/6),4)},X:function(){return this.unix()}};while(k.length)i=k.pop(),A[i+"o"]=M(A[i]);while(L.length)i=L.pop(),A[i+i]=O(A[i],2);A.DDDD=O(A.DDD,3),_.prototype={set:function(e){var t,n;for(n in e)t=e[n],typeof t=="function"?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var n,r,i,s;this._monthsParse||(this._monthsParse=[]);for(n=0;n<12;n++){this._monthsParse[n]||(r=t([2e3,n]),i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i"));if(this._monthsParse[n].test(e))return n}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n=="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i=="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n=="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return tt(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},t=function(e,t,n){return nt({_i:e,_f:t,_l:n,_isUTC:!1})},t.utc=function(e,t,n){return nt({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},t.unix=function(e){return t(e*1e3)},t.duration=function(e,n){var r=t.isDuration(e),i=typeof e=="number",s=r?e._data:i?{}:e,o;return i&&(n?s[n]=e:s.milliseconds=e),o=new P(s),r&&e.hasOwnProperty("_lang")&&(o._lang=e._lang),o},t.version=n,t.defaultFormat=E,t.lang=function(e,n){var r;if(!e)return t.fn._lang._abbr;n?R(e,n):s[e]||U(e),t.duration.fn._lang=t.fn._lang=U(e)},t.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),U(e)},t.isMoment=function(e){return e instanceof D},t.isDuration=function(e){return e instanceof P},t.fn=D.prototype={clone:function(){return t(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return this._isValid==null&&(this._a?this._isValid=!q(this._a,(this._isUTC?t.utc(this._a):t(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var n=X(this,e||t.defaultFormat);return this.lang().postformat(n)},add:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,1),this},subtract:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,-1),this},diff:function(e,n,r){var i=this._isUTC?t(e).utc():t(e).local(),s=(this.zone()-i.zone())*6e4,o,u;return n&&(n=n.replace(/s$/,"")),n==="year"||n==="month"?(o=(this.daysInMonth()+i.daysInMonth())*432e5,u=(this.year()-i.year())*12+(this.month()-i.month()),u+=(this-t(this).startOf("month")-(i-t(i).startOf("month")))/o,n==="year"&&(u/=12)):(o=this-i-s,u=n==="second"?o/1e3:n==="minute"?o/6e4:n==="hour"?o/36e5:n==="day"?o/864e5:n==="week"?o/6048e5:o),r?u:B(u)},from:function(e,n){return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(){var e=this.diff(t().startOf("day"),"days",!0),n=e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<t([this.year()]).zone()||this.zone()<t([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e==null?t:this.add({d:e-t})},startOf:function(e){e=e.replace(/s$/,"");switch(e){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return e==="week"&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)>+t(e).startOf(n)},isBefore:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)<+t(e).startOf(n)},isSame:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)===+t(e).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return t.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var n=r((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return e==null?n:this.add("d",e-n)},isoWeek:function(e){var t=tt(this,1,4);return e==null?t:this.add("d",(e-t)*7)},week:function(e){var t=this.lang().week(this);return e==null?t:this.add("d",(e-t)*7)},lang:function(t){return t===e?this._lang:(this._lang=U(t),this)}};for(i=0;i<T.length;i++)rt(T[i].toLowerCase().replace(/s$/,""),T[i]);rt("year","FullYear"),t.fn.days=t.fn.day,t.fn.weeks=t.fn.week,t.fn.isoWeeks=t.fn.isoWeek,t.duration.fn=P.prototype={weeks:function(){return B(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(e){var t=+this,n=et(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:t.fn.lang};for(i in N)N.hasOwnProperty(i)&&(st(i,N[i]),it(i.toLowerCase()));st("Weeks",6048e5),t.lang("en",{ordinal:function(e){var t=e%10,n=~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),o&&(module.exports=t),typeof ender=="undefined"&&(this.moment=t),typeof define=="function"&&define.amd&&define("moment",[],function(){return t})}).call(this);;// moment.js language configuration
// language : spanish (es)
// author : Julio Napurí : https://github.com/julionc
(function(){function e(e){e.lang("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),weekdays:"domingo_lunes_martes_mi\u00e9rcoles_jueves_viernes_s\u00e1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\u00e9._jue._vie._s\u00e1b.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_S\u00e1".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D \\de MMMM \\de YYYY",LLL:"D \\de MMMM \\de YYYY LT",LLLL:"dddd, D \\de MMMM \\de YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(this.hours()!==1?"s":"")+"] LT"},nextDay:function(){return"[ma\u00f1ana a la"+(this.hours()!==1?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(this.hours()!==1?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(this.hours()!==1?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(this.hours()!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\u00eda",dd:"%d d\u00edas",M:"un mes",MM:"%d meses",y:"un a\u00f1o",yy:"%d a\u00f1os"},ordinal:"%d\u00ba",week:{dow:1,doy:4}})}typeof define=="function"&&define.amd&&define(["moment"],e),typeof window!="undefined"&&window.moment&&e(window.moment)})();;var Quo;

Quo = (function() {
  var $$, EMPTY_ARRAY, Q;
  EMPTY_ARRAY = [];
  $$ = function(selector, children) {
    var dom;
    if (!selector) {
      return Q();
    } else if ($$.toType(selector) === "function") {
      return $$(document).ready(selector);
    } else {
      dom = $$.getDOMObject(selector, children);
      return Q(dom, selector);
    }
  };
  Q = function(dom, selector) {
    dom = dom || EMPTY_ARRAY;
    dom.__proto__ = Q.prototype;
    dom.selector = selector || '';
    return dom;
  };
  $$.extend = function(target) {
    Array.prototype.slice.call(arguments, 1).forEach(function(source) {
      var key, _results;
      _results = [];
      for (key in source) {
        _results.push(target[key] = source[key]);
      }
      return _results;
    });
    return target;
  };
  Q.prototype = $$.fn = {};
  return $$;
})();

window.Quo = Quo;

"$$" in window || (window.$$ = Quo);


(function($$) {
  var EMPTY_ARRAY, HTML_CONTAINERS, IS_HTML_FRAGMENT, OBJECT_PROTOTYPE, TABLE, TABLE_ROW, _compact, _flatten;
  EMPTY_ARRAY = [];
  OBJECT_PROTOTYPE = Object.prototype;
  IS_HTML_FRAGMENT = /^\s*<(\w+|!)[^>]*>/;
  TABLE = document.createElement('table');
  TABLE_ROW = document.createElement('tr');
  HTML_CONTAINERS = {
    "tr": document.createElement("tbody"),
    "tbody": TABLE,
    "thead": TABLE,
    "tfoot": TABLE,
    "td": TABLE_ROW,
    "th": TABLE_ROW,
    "*": document.createElement("div")
  };
  $$.toType = function(obj) {
    return OBJECT_PROTOTYPE.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  };
  $$.isOwnProperty = function(object, property) {
    return OBJECT_PROTOTYPE.hasOwnProperty.call(object, property);
  };
  $$.getDOMObject = function(selector, children) {
    var domain, elementTypes, type;
    domain = null;
    elementTypes = [1, 9, 11];
    type = $$.toType(selector);
    if (type === "array") {
      domain = _compact(selector);
    } else if (type === "string" && IS_HTML_FRAGMENT.test(selector)) {
      domain = $$.fragment(selector.trim(), RegExp.$1);
      selector = null;
    } else if (type === "string") {
      domain = $$.query(document, selector);
      if (children) {
        if (domain.length === 1) {
          domain = $$.query(domain[0], children);
        } else {
          domain = $$.map(function() {
            return $$.query(domain, children);
          });
        }
      }
    } else if (elementTypes.indexOf(selector.nodeType) >= 0 || selector === window) {
      domain = [selector];
      selector = null;
    }
    return domain;
  };
  $$.map = function(elements, callback) {
    var i, key, value, values;
    values = [];
    i = void 0;
    key = void 0;
    if ($$.toType(elements) === "array") {
      i = 0;
      while (i < elements.length) {
        value = callback(elements[i], i);
        if (value != null) {
          values.push(value);
        }
        i++;
      }
    } else {
      for (key in elements) {
        value = callback(elements[key], key);
        if (value != null) {
          values.push(value);
        }
      }
    }
    return _flatten(values);
  };
  $$.each = function(elements, callback) {
    var i, key;
    i = void 0;
    key = void 0;
    if ($$.toType(elements) === "array") {
      i = 0;
      while (i < elements.length) {
        if (callback.call(elements[i], i, elements[i]) === false) {
          return elements;
        }
        i++;
      }
    } else {
      for (key in elements) {
        if (callback.call(elements[key], key, elements[key]) === false) {
          return elements;
        }
      }
    }
    return elements;
  };
  $$.mix = function() {
    var arg, argument, child, len, prop;
    child = {};
    arg = 0;
    len = arguments.length;
    while (arg < len) {
      argument = arguments[arg];
      for (prop in argument) {
        if ($$.isOwnProperty(argument, prop) && argument[prop] !== undefined) {
          child[prop] = argument[prop];
        }
      }
      arg++;
    }
    return child;
  };
  $$.fragment = function(markup, tag) {
    var container;
    if (tag == null) {
      tag = "*";
    }
    if (!(tag in HTML_CONTAINERS)) {
      tag = "*";
    }
    container = HTML_CONTAINERS[tag];
    container.innerHTML = "" + markup;
    return $$.each(Array.prototype.slice.call(container.childNodes), function() {
      return container.removeChild(this);
    });
  };
  $$.fn.map = function(fn) {
    return $$.map(this, function(el, i) {
      return fn.call(el, i, el);
    });
  };
  $$.fn.instance = function(property) {
    return this.map(function() {
      return this[property];
    });
  };
  $$.fn.filter = function(selector) {
    return $$([].filter.call(this, function(element) {
      return element.parentNode && $$.query(element.parentNode, selector).indexOf(element) >= 0;
    }));
  };
  $$.fn.forEach = EMPTY_ARRAY.forEach;
  $$.fn.indexOf = EMPTY_ARRAY.indexOf;
  _compact = function(array) {
    return array.filter(function(item) {
      return item !== void 0 && item !== null;
    });
  };
  return _flatten = function(array) {
    if (array.length > 0) {
      return [].concat.apply([], array);
    } else {
      return array;
    }
  };
})(Quo);


(function($$) {
  var IS_WEBKIT, SUPPORTED_OS, _current, _detectBrowser, _detectEnvironment, _detectOS, _detectScreen;
  _current = null;
  IS_WEBKIT = /WebKit\/([\d.]+)/;
  SUPPORTED_OS = {
    Android: /(Android)\s+([\d.]+)/,
    ipad: /(iPad).*OS\s([\d_]+)/,
    iphone: /(iPhone\sOS)\s([\d_]+)/,
    Blackberry: /(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,
    FirefoxOS: /(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,
    webOS: /(webOS|hpwOS)[\s\/]([\d.]+)/
  };
  $$.isMobile = function() {
    _current = _current || _detectEnvironment();
    return _current.isMobile && _current.os.name !== "firefoxOS";
  };
  $$.environment = function() {
    _current = _current || _detectEnvironment();
    return _current;
  };
  $$.isOnline = function() {
    return navigator.onLine;
  };
  _detectEnvironment = function() {
    var environment, user_agent;
    user_agent = navigator.userAgent;
    environment = {};
    environment.browser = _detectBrowser(user_agent);
    environment.os = _detectOS(user_agent);
    environment.isMobile = !!environment.os;
    environment.screen = _detectScreen();
    return environment;
  };
  _detectBrowser = function(user_agent) {
    var is_webkit;
    is_webkit = user_agent.match(IS_WEBKIT);
    if (is_webkit) {
      return is_webkit[0];
    } else {
      return user_agent;
    }
  };
  _detectOS = function(user_agent) {
    var detected_os, os, supported;
    detected_os = null;
    for (os in SUPPORTED_OS) {
      supported = user_agent.match(SUPPORTED_OS[os]);
      if (supported) {
        detected_os = {
          name: (os === "iphone" || os === "ipad" ? "ios" : os),
          version: supported[2].replace("_", ".")
        };
        break;
      }
    }
    return detected_os;
  };
  return _detectScreen = function() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
})(Quo);


(function($$) {
  var CLASS_SELECTOR, ID_SELECTOR, PARENT_NODE, TAG_SELECTOR, _filtered, _findAncestors;
  PARENT_NODE = "parentNode";
  CLASS_SELECTOR = /^\.([\w-]+)$/;
  ID_SELECTOR = /^#[\w\d-]+$/;
  TAG_SELECTOR = /^[\w-]+$/;
  $$.query = function(domain, selector) {
    var elements;
    selector = selector.trim();
    if (CLASS_SELECTOR.test(selector)) {
      elements = domain.getElementsByClassName(selector.replace(".", ""));
    } else if (TAG_SELECTOR.test(selector)) {
      elements = domain.getElementsByTagName(selector);
    } else if (ID_SELECTOR.test(selector) && domain === document) {
      elements = domain.getElementById(selector.replace("#", ""));
      if (!elements) {
        elements = [];
      }
    } else {
      elements = domain.querySelectorAll(selector);
    }
    if (elements.nodeType) {
      return [elements];
    } else {
      return Array.prototype.slice.call(elements);
    }
  };
  $$.fn.find = function(selector) {
    var result;
    if (this.length === 1) {
      result = Quo.query(this[0], selector);
    } else {
      result = this.map(function() {
        return Quo.query(this, selector);
      });
    }
    return $$(result);
  };
  $$.fn.parent = function(selector) {
    var ancestors;
    ancestors = (selector ? _findAncestors(this) : this.instance(PARENT_NODE));
    return _filtered(ancestors, selector);
  };
  $$.fn.siblings = function(selector) {
    var siblings_elements;
    siblings_elements = this.map(function(index, element) {
      return Array.prototype.slice.call(element.parentNode.children).filter(function(child) {
        return child !== element;
      });
    });
    return _filtered(siblings_elements, selector);
  };
  $$.fn.children = function(selector) {
    var children_elements;
    children_elements = this.map(function() {
      return Array.prototype.slice.call(this.children);
    });
    return _filtered(children_elements, selector);
  };
  $$.fn.get = function(index) {
    if (index === undefined) {
      return this;
    } else {
      return this[index];
    }
  };
  $$.fn.first = function() {
    return $$(this[0]);
  };
  $$.fn.last = function() {
    return $$(this[this.length - 1]);
  };
  $$.fn.closest = function(selector, context) {
    var candidates, node;
    node = this[0];
    candidates = $$(selector);
    if (!candidates.length) {
      node = null;
    }
    while (node && candidates.indexOf(node) < 0) {
      node = node !== context && node !== document && node.parentNode;
    }
    return $$(node);
  };
  $$.fn.each = function(callback) {
    this.forEach(function(element, index) {
      return callback.call(element, index, element);
    });
    return this;
  };
  _findAncestors = function(nodes) {
    var ancestors;
    ancestors = [];
    while (nodes.length > 0) {
      nodes = $$.map(nodes, function(node) {
        if ((node = node.parentNode) && node !== document && ancestors.indexOf(node) < 0) {
          ancestors.push(node);
          return node;
        }
      });
    }
    return ancestors;
  };
  return _filtered = function(nodes, selector) {
    if (selector === undefined) {
      return $$(nodes);
    } else {
      return $$(nodes).filter(selector);
    }
  };
})(Quo);


(function($$) {
  var VENDORS, _computedStyle, _existsClass;
  VENDORS = ["-webkit-", "-moz-", "-ms-", "-o-", ""];
  $$.fn.addClass = function(name) {
    return this.each(function() {
      if (!_existsClass(name, this.className)) {
        this.className += " " + name;
        return this.className = this.className.trim();
      }
    });
  };
  $$.fn.removeClass = function(name) {
    return this.each(function() {
      if (!name) {
        return this.className = "";
      } else {
        if (_existsClass(name, this.className)) {
          return this.className = this.className.replace(name, " ").replace(/\s+/g, " ").trim();
        }
      }
    });
  };
  $$.fn.toggleClass = function(name) {
    return this.each(function() {
      if (_existsClass(name, this.className)) {
        return this.className = this.className.replace(name, " ");
      } else {
        this.className += " " + name;
        return this.className = this.className.trim();
      }
    });
  };
  $$.fn.hasClass = function(name) {
    return _existsClass(name, this[0].className);
  };
  $$.fn.style = function(property, value) {
    if (value) {
      return this.each(function() {
        return this.style[property] = value;
      });
    } else {
      return this[0].style[property] || _computedStyle(this[0], property);
    }
  };
  $$.fn.css = function(property, value) {
    return this.style(property, value);
  };
  $$.fn.vendor = function(property, value) {
    var vendor, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = VENDORS.length; _i < _len; _i++) {
      vendor = VENDORS[_i];
      _results.push(this.style("" + vendor + property, value));
    }
    return _results;
  };
  _existsClass = function(name, className) {
    var classes;
    classes = className.split(/\s+/g);
    return classes.indexOf(name) >= 0;
  };
  return _computedStyle = function(element, property) {
    return document.defaultView.getComputedStyle(element, "")[property];
  };
})(Quo);


(function($$) {
  $$.fn.attr = function(name, value) {
    if (this.length === 0) {
      null;
    }
    if ($$.toType(name) === "string" && value === void 0) {
      return this[0].getAttribute(name);
    } else {
      return this.each(function() {
        return this.setAttribute(name, value);
      });
    }
  };
  $$.fn.removeAttr = function(name) {
    return this.each(function() {
      return this.removeAttribute(name);
    });
  };
  $$.fn.data = function(name, value) {
    return this.attr("data-" + name, value);
  };
  $$.fn.removeData = function(name) {
    return this.removeAttr("data-" + name);
  };
  $$.fn.val = function(value) {
    if ($$.toType(value) === "string") {
      return this.each(function() {
        return this.value = value;
      });
    } else {
      if (this.length > 0) {
        return this[0].value;
      } else {
        return null;
      }
    }
  };
  $$.fn.show = function() {
    return this.style("display", "block");
  };
  $$.fn.hide = function() {
    return this.style("display", "none");
  };
  $$.fn.height = function() {
    var offset;
    offset = this.offset();
    return offset.height;
  };
  $$.fn.width = function() {
    var offset;
    offset = this.offset();
    return offset.width;
  };
  $$.fn.offset = function() {
    var bounding;
    bounding = this[0].getBoundingClientRect();
    return {
      left: bounding.left + window.pageXOffset,
      top: bounding.top + window.pageYOffset,
      width: bounding.width,
      height: bounding.height
    };
  };
  return $$.fn.remove = function() {
    return this.each(function() {
      if (this.parentNode != null) {
        return this.parentNode.removeChild(this);
      }
    });
  };
})(Quo);


(function($$) {
  $$.fn.text = function(value) {
    if (value || $$.toType(value) === "number") {
      return this.each(function() {
        return this.textContent = value;
      });
    } else {
      return this[0].textContent;
    }
  };
  $$.fn.html = function(value) {
    var type;
    type = $$.toType(value);
    if (value || type === "number" || type === "string") {
      return this.each(function() {
        var element, _i, _len, _results;
        if (type === "string" || type === "number") {
          return this.innerHTML = value;
        } else {
          this.innerHTML = null;
          if (type === "array") {
            _results = [];
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              element = value[_i];
              _results.push(this.appendChild(element));
            }
            return _results;
          } else {
            return this.appendChild(value);
          }
        }
      });
    } else {
      return this[0].innerHTML;
    }
  };
  $$.fn.append = function(value) {
    var type;
    type = $$.toType(value);
    return this.each(function() {
      var _this = this;
      if (type === "string") {
        return this.insertAdjacentHTML("beforeend", value);
      } else if (type === "array") {
        return value.each(function(index, value) {
          return _this.appendChild(value);
        });
      } else {
        return this.appendChild(value);
      }
    });
  };
  $$.fn.prepend = function(value) {
    var type;
    type = $$.toType(value);
    return this.each(function() {
      var _this = this;
      if (type === "string") {
        return this.insertAdjacentHTML("afterbegin", value);
      } else if (type === "array") {
        return value.each(function(index, value) {
          return _this.insertBefore(value, _this.firstChild);
        });
      } else {
        return this.insertBefore(value, this.firstChild);
      }
    });
  };
  $$.fn.replaceWith = function(value) {
    var type;
    type = $$.toType(value);
    this.each(function() {
      var _this = this;
      if (this.parentNode) {
        if (type === "string") {
          return this.insertAdjacentHTML("beforeBegin", value);
        } else if (type === "array") {
          return value.each(function(index, value) {
            return _this.parentNode.insertBefore(value, _this);
          });
        } else {
          return this.parentNode.insertBefore(value, this);
        }
      }
    });
    return this.remove();
  };
  return $$.fn.empty = function() {
    return this.each(function() {
      return this.innerHTML = null;
    });
  };
})(Quo);


(function($$) {
  var DEFAULT, JSONP_ID, MIME_TYPES, _isJsonP, _parseResponse, _xhrError, _xhrForm, _xhrHeaders, _xhrStatus, _xhrSuccess, _xhrTimeout;
  DEFAULT = {
    TYPE: "GET",
    MIME: "json"
  };
  MIME_TYPES = {
    script: "text/javascript, application/javascript",
    json: "application/json",
    xml: "application/xml, text/xml",
    html: "text/html",
    text: "text/plain"
  };
  JSONP_ID = 0;
  $$.ajaxSettings = {
    type: DEFAULT.TYPE,
    async: true,
    success: {},
    error: {},
    context: null,
    dataType: DEFAULT.MIME,
    headers: {},
    xhr: function() {
      return new window.XMLHttpRequest();
    },
    crossDomain: false,
    timeout: 0
  };
  $$.ajax = function(options) {
    var abortTimeout, settings, xhr;
    settings = $$.mix($$.ajaxSettings, options);
    if (settings.type === DEFAULT.TYPE) {
      settings.url += $$.serializeParameters(settings.data, "?");
    } else {
      settings.data = $$.serializeParameters(settings.data);
    }
    if (_isJsonP(settings.url)) {
      return $$.jsonp(settings);
    }
    xhr = settings.xhr();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        clearTimeout(abortTimeout);
        return _xhrStatus(xhr, settings);
      }
    };
    xhr.open(settings.type, settings.url, settings.async);
    _xhrHeaders(xhr, settings);
    if (settings.timeout > 0) {
      abortTimeout = setTimeout((function() {
        return _xhrTimeout(xhr, settings);
      }), settings.timeout);
    }
    try {
      xhr.send(settings.data);
    } catch (error) {
      xhr = error;
      _xhrError("Resource not found", xhr, settings);
    }
    if (settings.async) {
      return xhr;
    } else {
      return _parseResponse(xhr, settings);
    }
  };
  $$.jsonp = function(settings) {
    var abortTimeout, callbackName, script, xhr;
    if (settings.async) {
      callbackName = "jsonp" + (++JSONP_ID);
      script = document.createElement("script");
      xhr = {
        abort: function() {
          $$(script).remove();
          if (callbackName in window) {
            return window[callbackName] = {};
          }
        }
      };
      abortTimeout = void 0;
      window[callbackName] = function(response) {
        clearTimeout(abortTimeout);
        $$(script).remove();
        delete window[callbackName];
        return _xhrSuccess(response, xhr, settings);
      };
      script.src = settings.url.replace(RegExp("=\\?"), "=" + callbackName);
      $$("head").append(script);
      if (settings.timeout > 0) {
        abortTimeout = setTimeout((function() {
          return _xhrTimeout(xhr, settings);
        }), settings.timeout);
      }
      return xhr;
    } else {
      return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.");
    }
  };
  $$.get = function(url, data, success, dataType) {
    return $$.ajax({
      url: url,
      data: data,
      success: success,
      dataType: dataType
    });
  };
  $$.post = function(url, data, success, dataType) {
    return _xhrForm("POST", url, data, success, dataType);
  };
  $$.put = function(url, data, success, dataType) {
    return _xhrForm("PUT", url, data, success, dataType);
  };
  $$["delete"] = function(url, data, success, dataType) {
    return _xhrForm("DELETE", url, data, success, dataType);
  };
  $$.json = function(url, data, success) {
    return $$.ajax({
      url: url,
      data: data,
      success: success,
      dataType: DEFAULT.MIME
    });
  };
  $$.serializeParameters = function(parameters, character) {
    var parameter, serialize;
    if (character == null) {
      character = "";
    }
    serialize = character;
    for (parameter in parameters) {
      if (parameters.hasOwnProperty(parameter)) {
        if (serialize !== character) {
          serialize += "&";
        }
        serialize += "" + (encodeURIComponent(parameter)) + "=" + (encodeURIComponent(parameters[parameter]));
      }
    }
    if (serialize === character) {
      return "";
    } else {
      return serialize;
    }
  };
  _xhrStatus = function(xhr, settings) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
      if (settings.async) {
        _xhrSuccess(_parseResponse(xhr, settings), xhr, settings);
      }
    } else {
      _xhrError("QuoJS.ajax: Unsuccesful request", xhr, settings);
    }
  };
  _xhrSuccess = function(response, xhr, settings) {
    settings.success.call(settings.context, response, xhr);
  };
  _xhrError = function(type, xhr, settings) {
    settings.error.call(settings.context, type, xhr, settings);
  };
  _xhrHeaders = function(xhr, settings) {
    var header;
    if (settings.contentType) {
      settings.headers["Content-Type"] = settings.contentType;
    }
    if (settings.dataType) {
      settings.headers["Accept"] = MIME_TYPES[settings.dataType];
    }
    for (header in settings.headers) {
      xhr.setRequestHeader(header, settings.headers[header]);
    }
  };
  _xhrTimeout = function(xhr, settings) {
    xhr.onreadystatechange = {};
    xhr.abort();
    _xhrError("QuoJS.ajax: Timeout exceeded", xhr, settings);
  };
  _xhrForm = function(method, url, data, success, dataType) {
    return $$.ajax({
      type: method,
      url: url,
      data: data,
      success: success,
      dataType: dataType,
      contentType: "application/x-www-form-urlencoded"
    });
  };
  _parseResponse = function(xhr, settings) {
    var response;
    response = xhr.responseText;
    if (response) {
      if (settings.dataType === DEFAULT.MIME) {
        try {
          response = JSON.parse(response);
        } catch (error) {
          response = error;
          _xhrError("QuoJS.ajax: Parse Error", xhr, settings);
        }
      } else {
        if (settings.dataType === "xml") {
          response = xhr.responseXML;
        }
      }
    }
    return response;
  };
  return _isJsonP = function(url) {
    return RegExp("=\\?").test(url);
  };
})(Quo);


(function($$) {
  var ELEMENT_ID, EVENTS_DESKTOP, EVENT_METHODS, HANDLERS, READY_EXPRESSION, _createProxy, _createProxyCallback, _environmentEvent, _findHandlers, _getElementId, _subscribe, _unsubscribe;
  ELEMENT_ID = 1;
  HANDLERS = {};
  EVENT_METHODS = {
    preventDefault: "isDefaultPrevented",
    stopImmediatePropagation: "isImmediatePropagationStopped",
    stopPropagation: "isPropagationStopped"
  };
  EVENTS_DESKTOP = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    touch: "click",
    doubletap: "dblclick",
    orientationchange: "resize"
  };
  READY_EXPRESSION = /complete|loaded|interactive/;
  $$.fn.on = function(event, selector, callback) {
    if (selector === "undefined" || $$.toType(selector) === "function") {
      return this.bind(event, selector);
    } else {
      return this.delegate(selector, event, callback);
    }
  };
  $$.fn.off = function(event, selector, callback) {
    if (selector === "undefined" || $$.toType(selector) === "function") {
      return this.unbind(event, selector);
    } else {
      return this.undelegate(selector, event, callback);
    }
  };
  $$.fn.ready = function(callback) {
    if (READY_EXPRESSION.test(document.readyState)) {
      return callback($$);
    } else {
      return $$.fn.addEvent(document, "DOMContentLoaded", function() {
        return callback($$);
      });
    }
  };
  $$.Event = function(type, touch) {
    var event, property;
    event = document.createEvent("Events");
    event.initEvent(type, true, true, null, null, null, null, null, null, null, null, null, null, null, null);
    if (touch) {
      for (property in touch) {
        event[property] = touch[property];
      }
    }
    return event;
  };
  $$.fn.bind = function(event, callback) {
    return this.each(function() {
      _subscribe(this, event, callback);
    });
  };
  $$.fn.unbind = function(event, callback) {
    return this.each(function() {
      _unsubscribe(this, event, callback);
    });
  };
  $$.fn.delegate = function(selector, event, callback) {
    return this.each(function(i, element) {
      _subscribe(element, event, callback, selector, function(fn) {
        return function(e) {
          var evt, match;
          match = $$(e.target).closest(selector, element).get(0);
          if (match) {
            evt = $$.extend(_createProxy(e), {
              currentTarget: match,
              liveFired: element
            });
            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)));
          }
        };
      });
    });
  };
  $$.fn.undelegate = function(selector, event, callback) {
    return this.each(function() {
      _unsubscribe(this, event, callback, selector);
    });
  };
  $$.fn.trigger = function(event, touch) {
    if ($$.toType(event) === "string") {
      event = $$.Event(event, touch);
    }
    return this.each(function() {
      this.dispatchEvent(event);
    });
  };
  $$.fn.addEvent = function(element, event_name, callback) {
    if (element.addEventListener) {
      return element.addEventListener(event_name, callback, false);
    } else if (element.attachEvent) {
      return element.attachEvent("on" + event_name, callback);
    } else {
      return element["on" + event_name] = callback;
    }
  };
  $$.fn.removeEvent = function(element, event_name, callback) {
    if (element.removeEventListener) {
      return element.removeEventListener(event_name, callback, false);
    } else if (element.detachEvent) {
      return element.detachEvent("on" + event_name, callback);
    } else {
      return element["on" + event_name] = null;
    }
  };
  _subscribe = function(element, event, callback, selector, delegate_callback) {
    var delegate, element_handlers, element_id, handler;
    event = _environmentEvent(event);
    element_id = _getElementId(element);
    element_handlers = HANDLERS[element_id] || (HANDLERS[element_id] = []);
    delegate = delegate_callback && delegate_callback(callback, event);
    handler = {
      event: event,
      callback: callback,
      selector: selector,
      proxy: _createProxyCallback(delegate, callback, element),
      delegate: delegate,
      index: element_handlers.length
    };
    element_handlers.push(handler);
    return $$.fn.addEvent(element, handler.event, handler.proxy);
  };
  _unsubscribe = function(element, event, callback, selector) {
    var element_id;
    event = _environmentEvent(event);
    element_id = _getElementId(element);
    return _findHandlers(element_id, event, callback, selector).forEach(function(handler) {
      delete HANDLERS[element_id][handler.index];
      return $$.fn.removeEvent(element, handler.event, handler.proxy);
    });
  };
  _getElementId = function(element) {
    return element._id || (element._id = ELEMENT_ID++);
  };
  _environmentEvent = function(event) {
    var environment_event;
    environment_event = ($$.isMobile() ? event : EVENTS_DESKTOP[event]);
    return environment_event || event;
  };
  _createProxyCallback = function(delegate, callback, element) {
    var proxy;
    callback = delegate || callback;
    proxy = function(event) {
      var result;
      result = callback.apply(element, [event].concat(event.data));
      if (result === false) {
        event.preventDefault();
      }
      return result;
    };
    return proxy;
  };
  _findHandlers = function(element_id, event, fn, selector) {
    return (HANDLERS[element_id] || []).filter(function(handler) {
      return handler && (!event || handler.event === event) && (!fn || handler.callback === fn) && (!selector || handler.selector === selector);
    });
  };
  return _createProxy = function(event) {
    var proxy;
    proxy = $$.extend({
      originalEvent: event
    }, event);
    $$.each(EVENT_METHODS, function(name, method) {
      proxy[name] = function() {
        this[method] = function() {
          return true;
        };
        return event[name].apply(event, arguments);
      };
      return proxy[method] = function() {
        return false;
      };
    });
    return proxy;
  };
})(Quo);


(function($$) {
  var CURRENT_TOUCH, FIRST_TOUCH, GESTURE, GESTURES, HOLD_DELAY, TAPS, TOUCH_TIMEOUT, _angle, _capturePinch, _captureRotation, _cleanGesture, _distance, _fingersPosition, _getTouches, _hold, _isSwipe, _listenTouches, _onTouchEnd, _onTouchMove, _onTouchStart, _parentIfText, _swipeDirection, _trigger;
  TAPS = null;
  GESTURE = {};
  FIRST_TOUCH = [];
  CURRENT_TOUCH = [];
  TOUCH_TIMEOUT = void 0;
  HOLD_DELAY = 650;
  GESTURES = ["touch", "tap", "singleTap", "doubleTap", "hold", "swipe", "swiping", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "rotate", "rotating", "rotateLeft", "rotateRight", "pinch", "pinching", "pinchIn", "pinchOut", "drag", "dragLeft", "dragRight", "dragUp", "dragDown"];
  GESTURES.forEach(function(event) {
    $$.fn[event] = function(callback) {
      var event_name;
      event_name = event === "touch" ? "touchend" : event;
      return $$(document.body).delegate(this.selector, event_name, callback);
    };
    return this;
  });
  $$(document).ready(function() {
    return _listenTouches();
  });
  _listenTouches = function() {
    var environment;
    environment = $$(document.body);
    environment.bind("touchstart", _onTouchStart);
    environment.bind("touchmove", _onTouchMove);
    environment.bind("touchend", _onTouchEnd);
    return environment.bind("touchcancel", _cleanGesture);
  };
  _onTouchStart = function(event) {
    var delta, fingers, now, touches;
    now = Date.now();
    delta = now - (GESTURE.last || now);
    TOUCH_TIMEOUT && clearTimeout(TOUCH_TIMEOUT);
    touches = _getTouches(event);
    fingers = touches.length;
    FIRST_TOUCH = _fingersPosition(touches, fingers);
    GESTURE.el = $$(_parentIfText(touches[0].target));
    GESTURE.fingers = fingers;
    GESTURE.last = now;
    if (!GESTURE.taps) {
      GESTURE.taps = 0;
    }
    GESTURE.taps++;
    if (fingers === 1) {
      if (fingers >= 1) {
        GESTURE.gap = delta > 0 && delta <= 250;
      }
      return setTimeout(_hold, HOLD_DELAY);
    } else if (fingers === 2) {
      GESTURE.initial_angle = parseInt(_angle(FIRST_TOUCH), 10);
      GESTURE.initial_distance = parseInt(_distance(FIRST_TOUCH), 10);
      GESTURE.angle_difference = 0;
      return GESTURE.distance_difference = 0;
    }
  };
  _onTouchMove = function(event) {
    var fingers, is_swipe, touches;
    if (GESTURE.el) {
      touches = _getTouches(event);
      fingers = touches.length;
      if (fingers === GESTURE.fingers) {
        CURRENT_TOUCH = _fingersPosition(touches, fingers);
        is_swipe = _isSwipe(event);
        if (is_swipe) {
          GESTURE.prevSwipe = true;
        }
        if (is_swipe || GESTURE.prevSwipe === true) {
          _trigger("swiping");
        }
        if (fingers === 2) {
          _captureRotation();
          _capturePinch();
          event.preventDefault();
        }
      } else {
        _cleanGesture();
      }
    }
    return true;
  };
  _isSwipe = function(event) {
    var it_is, move_horizontal, move_vertical;
    it_is = false;
    if (CURRENT_TOUCH[0]) {
      move_horizontal = Math.abs(FIRST_TOUCH[0].x - CURRENT_TOUCH[0].x) > 30;
      move_vertical = Math.abs(FIRST_TOUCH[0].y - CURRENT_TOUCH[0].y) > 30;
      it_is = GESTURE.el && (move_horizontal || move_vertical);
    }
    return it_is;
  };
  _onTouchEnd = function(event) {
    var anyevent, drag_direction, pinch_direction, rotation_direction, swipe_direction;
    _trigger("touch");
    if (GESTURE.fingers === 1) {
      if (GESTURE.taps === 2 && GESTURE.gap) {
        _trigger("doubleTap");
        return _cleanGesture();
      } else if (_isSwipe() || GESTURE.prevSwipe) {
        _trigger("swipe");
        swipe_direction = _swipeDirection(FIRST_TOUCH[0].x, CURRENT_TOUCH[0].x, FIRST_TOUCH[0].y, CURRENT_TOUCH[0].y);
        _trigger("swipe" + swipe_direction);
        return _cleanGesture();
      } else {
        _trigger("tap");
        if (GESTURE.taps === 1) {
          return TOUCH_TIMEOUT = setTimeout((function() {
            _trigger("singleTap");
            return _cleanGesture();
          }), 100);
        }
      }
    } else {
      anyevent = false;
      if (GESTURE.angle_difference !== 0) {
        _trigger("rotate", {
          angle: GESTURE.angle_difference
        });
        rotation_direction = GESTURE.angle_difference > 0 ? "rotateRight" : "rotateLeft";
        _trigger(rotation_direction, {
          angle: GESTURE.angle_difference
        });
        anyevent = true;
      }
      if (GESTURE.distance_difference !== 0) {
        _trigger("pinch", {
          angle: GESTURE.distance_difference
        });
        pinch_direction = GESTURE.distance_difference > 0 ? "pinchOut" : "pinchIn";
        _trigger(pinch_direction, {
          distance: GESTURE.distance_difference
        });
        anyevent = true;
      }
      if (!anyevent && CURRENT_TOUCH[0]) {
        if (Math.abs(FIRST_TOUCH[0].x - CURRENT_TOUCH[0].x) > 10 || Math.abs(FIRST_TOUCH[0].y - CURRENT_TOUCH[0].y) > 10) {
          _trigger("drag");
          drag_direction = _swipeDirection(FIRST_TOUCH[0].x, CURRENT_TOUCH[0].x, FIRST_TOUCH[0].y, CURRENT_TOUCH[0].y);
          _trigger("drag" + drag_direction);
        }
      }
      return _cleanGesture();
    }
  };
  _fingersPosition = function(touches, fingers) {
    var i, result;
    result = [];
    i = 0;
    touches = touches[0].targetTouches ? touches[0].targetTouches : touches;
    while (i < fingers) {
      result.push({
        x: touches[i].pageX,
        y: touches[i].pageY
      });
      i++;
    }
    return result;
  };
  _captureRotation = function() {
    var angle, diff, i, symbol;
    angle = parseInt(_angle(CURRENT_TOUCH), 10);
    diff = parseInt(GESTURE.initial_angle - angle, 10);
    if (Math.abs(diff) > 20 || GESTURE.angle_difference !== 0) {
      i = 0;
      symbol = GESTURE.angle_difference < 0 ? "-" : "+";
      while (Math.abs(diff - GESTURE.angle_difference) > 90 && i++ < 10) {
        eval("diff " + symbol + "= 180;");
      }
      GESTURE.angle_difference = parseInt(diff, 10);
      return _trigger("rotating", {
        angle: GESTURE.angle_difference
      });
    }
  };
  _capturePinch = function() {
    var diff, distance;
    distance = parseInt(_distance(CURRENT_TOUCH), 10);
    diff = GESTURE.initial_distance - distance;
    if (Math.abs(diff) > 10) {
      GESTURE.distance_difference = diff;
      return _trigger("pinching", {
        distance: diff
      });
    }
  };
  _trigger = function(type, params) {
    if (GESTURE.el) {
      params = params || {};
      if (CURRENT_TOUCH[0]) {
        params.iniTouch = (GESTURE.fingers > 1 ? FIRST_TOUCH : FIRST_TOUCH[0]);
        params.currentTouch = (GESTURE.fingers > 1 ? CURRENT_TOUCH : CURRENT_TOUCH[0]);
      }
      return GESTURE.el.trigger(type, params);
    }
  };
  _cleanGesture = function(event) {
    FIRST_TOUCH = [];
    CURRENT_TOUCH = [];
    GESTURE = {};
    return clearTimeout(TOUCH_TIMEOUT);
  };
  _angle = function(touches_data) {
    var A, B, angle;
    A = touches_data[0];
    B = touches_data[1];
    angle = Math.atan((B.y - A.y) * -1 / (B.x - A.x)) * (180 / Math.PI);
    if (angle < 0) {
      return angle + 180;
    } else {
      return angle;
    }
  };
  _distance = function(touches_data) {
    var A, B;
    A = touches_data[0];
    B = touches_data[1];
    return Math.sqrt((B.x - A.x) * (B.x - A.x) + (B.y - A.y) * (B.y - A.y)) * -1;
  };
  _getTouches = function(event) {
    if ($$.isMobile()) {
      return event.touches;
    } else {
      return [event];
    }
  };
  _parentIfText = function(node) {
    if ("tagName" in node) {
      return node;
    } else {
      return node.parentNode;
    }
  };
  _swipeDirection = function(x1, x2, y1, y2) {
    var xDelta, yDelta;
    xDelta = Math.abs(x1 - x2);
    yDelta = Math.abs(y1 - y2);
    if (xDelta >= yDelta) {
      if (x1 - x2 > 0) {
        return "Left";
      } else {
        return "Right";
      }
    } else {
      if (y1 - y2 > 0) {
        return "Up";
      } else {
        return "Down";
      }
    }
  };
  return _hold = function() {
    if (GESTURE.last && (Date.now() - GESTURE.last >= HOLD_DELAY)) {
      _trigger("hold");
      return GESTURE.taps = 0;
    }
  };
})(Quo);
;var Lungo=Lungo||{};Lungo.VERSION="2.0",Lungo.Element||(Lungo.Element={}),Lungo.Data||(Lungo.Data={}),Lungo.Sugar||(Lungo.Sugar={}),Lungo.View||(Lungo.View={}),Lungo.Boot||(Lungo.Boot={}),Lungo.Device||(Lungo.Device={}),Lungo.ready||(Lungo.ready=Quo().ready),Lungo.Attributes={count:{selector:"*",html:'<span class="tag theme count">{{value}}</span>'},pull:{selector:"section",html:'<div class="{{value}}" data-control="pull" data-icon="down" data-loading="black">                    <strong>title</strong>                </div>'},progress:{selector:"*",html:'<div class="progress">                    <span class="bar"><span class="value" style="width:{{value}};"></span></span>                </div>'},label:{selector:"*",html:"<abbr>{{value}}</abbr>"},icon:{selector:"*",html:'<span class="icon {{value}}"></span>'},image:{selector:"*",html:'<img src="{{value}}" class="icon" />'},title:{selector:"header",html:'<span class="title centered">{{value}}</span>'},loading:{selector:"*",html:'<div class="loading {{value}}">                    <span class="top"></span>                    <span class="right"></span>                    <span class="bottom"></span>                    <span class="left"></span>                </div>'},back:{selector:"header",html:'<nav class="left"><a href="#back" data-router="section" class="left"><span class="icon {{value}}"></span></a></nav>'}},Lungo.Constants={ELEMENT:{SECTION:"section",ARTICLE:"article",ASIDE:"aside",BODY:"body",DIV:"div",LIST:"<ul></ul>",LI:"li"},QUERY:{LIST_IN_ELEMENT:"article.list, aside.list",ELEMENT_SCROLLABLE:"aside.scroll, article.scroll"},CLASS:{ACTIVE:"active",ASIDE:"aside",SHOW:"show",HIDE:"hide",HIDING:"hiding",RIGHT:"right",LEFT:"left",HORIZONTAL:"horizontal",SMALL:"small"},TRIGGER:{LOAD:"load",UNLOAD:"unload"},TRANSITION:{DURATION:350},ATTRIBUTE:{ID:"id",HREF:"href",TITLE:"title",ARTICLE:"article",CLASS:"class",WIDTH:"width",HEIGHT:"height",PIXEL:"px",PERCENT:"%",ROUTER:"router",FIRST:"first",LAST:"last",EMPTY:""},BINDING:{START:"{{",END:"}}",KEY:"value",SELECTOR:"{{value}}"},ERROR:{DATABASE:"ERROR: Connecting to Data.Sql.",DATABASE_TRANSACTION:"ERROR: Data.Sql >> ",ROUTER:"ERROR: The target does not exists >>",LOADING_RESOURCE:"ERROR: Loading resource: "}},Lungo.Core=function(e,t,n){var r=Array.prototype,i="#",s=function(t,n){e.Core.isMobile()||console[t===1?"log":t===2?"warn":"error"](n)},o=function(){var e=c(arguments),t=e.shift();l(t)==="function"&&t.apply(null,e)},u=function(e,t){return function(){return t.apply(e,c(arguments))}},a=function(){var e=e||{};for(var t=0,n=arguments.length;t<n;t++){var r=arguments[t];for(var i in r)f(r,i)&&(e[i]=r[i])}return e},f=function(e,n){return t.isOwnProperty(e,n)},l=function(e){return t.toType(e)},c=function(e){return r.slice.call(e,0)},h=function(){return t.isMobile()},p=function(){return t.environment()},d=function(e,t,n){var r=n==="desc"?-1:1;return e.sort(function(e,n){return e[t]<n[t]?-r:e[t]>n[t]?r:0})},v=function(e){var t=e.lastIndexOf(i);return t>0?e=e.substring(t):t===-1&&(e=i+e),e},m=function(e,t,n){var r=null;for(var i=0,s=e.length;i<s;i++){var o=e[i];if(o[t]==n){r=o;break}}return r};return{log:s,execute:o,bind:u,mix:a,isOwnProperty:f,toType:l,toArray:c,isMobile:h,environment:p,orderByProperty:d,parseUrl:v,findByProperty:m}}(Lungo,Quo),Lungo.dom=function(e){return $$(e)},Lungo.Events=function(e,t){var n=" ",r=function(t){for(event in t){var r=event.indexOf(n);if(r>0){var i=event.substring(0,r),s=event.substring(r+1);e.dom(s).on(i,t[event])}}};return{init:r}}(Lungo),Lungo.Fallback=function(e,t){var n=function(){env=e.Core.environment(),env.isMobile&&env.os.name==="Android"&&env.os.version<"3"?e.dom(document.body).data("position","absolute"):e.dom(document.body).data("position","fixed")};return{fixPositionInAndroid:n}}(Lungo),Lungo.init=function(e){e&&e.resources&&Lungo.Resource.load(e.resources),Lungo.Boot.Events.init(),Lungo.Boot.Data.init(),Lungo.Boot.Layout.init()},Lungo.Notification=function(e,t){var n=[],r=null,i=null,s=1,o=200,u=e.Constants.ATTRIBUTE,a=e.Constants.BINDING,f={BODY:"body",NOTIFICATION:".notification",MODAL:".notification .window",MODAL_HREF:".notification .window a",WINDOW_CLOSABLE:".notification [data-action=close], .notification > .error, .notification > .success",CONFIRM_BUTTONS:".notification .confirm a.button"},l={MODAL:"modal",VISIBLE:"visible",SHOW:"show",WORKING:"working",INPUT:"input"},c="Lungo.Notification.hide()",h='<div class="notification"><div class="window"></div></div>',p=function(n,r,i,s){var o;if(n!==t)o=x(n,null,r);else{var u=e.Attributes.loading.html;o=u.replace(a.START+a.KEY+a.END,"icon white")}E(o,"growl"),S(i,s)},d=function(){i.removeClass("show"),setTimeout(function(){r.style("display","none").removeClass("html").removeClass("confirm").removeClass("notify").removeClass("growl")},o-50)},v=function(e){n=e;var t=x(e.title,e.description,e.icon);t+=T(e.accept,"accept"),t+=T(e.cancel,"cancel"),E(t,"confirm")},m=function(e,t,n,r,i){y(e,t,n,"success",r,i)},g=function(e,t,n,r,i){y(e,t,n,"error",r,i)},y=function(e,t,n,r,i,s){E(x(e,t,n),r),i&&S(i,s)},b=function(e,t){e+=t?'<a href="#" class="button large anchor" data-action="close">'+t+"</a>":"",E(e,"html")},w=function(){e.dom(f.BODY).append(h),r=e.dom(f.NOTIFICATION),i=r.children(".window"),N()},E=function(e,t){r.show(),i.removeClass(l.SHOW),i.removeClass("error").removeClass("success").removeClass("html").removeClass("growl"),i.addClass(t),i.html(e),setTimeout(function(){i.addClass(l.SHOW)},s)},S=function(e,n){if(e!==t&&e!==0){var r=e*1e3;setTimeout(function(){d(),n&&setTimeout(n,o)},r)}},x=function(e,t,n){return t=t?t:"&nbsp;",'<span class="icon '+n+'"></span><strong class="text bold">'+e+"</strong><small>"+t+"</small>"},T=function(e,t){return'<a href="#" data-callback="'+t+'" class="button anchor large text thin">'+e.label+"</a>"},N=function(){e.dom(f.CONFIRM_BUTTONS).tap(function(t){var r=e.dom(this),i=n[r.data("callback")].callback;i&&i.call(i),d()}),e.dom(f.WINDOW_CLOSABLE).tap(d)};return w(),{show:p,hide:d,error:g,success:m,confirm:v,html:b}}(Lungo),Lungo.Resource=function(e,t,n){var r=e.Constants.ELEMENT,i=e.Constants.ERROR,s=function(t){if(e.Core.toType(t)==="array")for(var n=0,r=t.length;n<r;n++)o(t[n]);else o(t)},o=function(t){try{var n=u(t);a(n)}catch(r){e.Core.log(3,r.message)}},u=function(e){return t.ajax({url:e,async:!1,dataType:"html",error:function(){console.error(i.LOADING_RESOURCE+e)}})},a=function(t){e.Core.toType(t)==="string"&&e.dom(r.BODY).append(t)};return{load:s}}(Lungo,Quo),function(e,t){var n=e.document,r=n.documentElement,i="scroll-enabled",s="ontouchmove"in n,o="WebkitOverflowScrolling"in r.style||!s&&e.screen.width>1200||function(){var t=e.navigator.userAgent,n=t.match(/AppleWebKit\/([0-9]+)/),r=n&&n[1],i=n&&r>=534;return t.match(/Android ([0-9]+)/)&&RegExp.$1>=3&&i||t.match(/ Version\/([0-9]+)/)&&RegExp.$1>=0&&e.blackberry&&i||t.indexOf(/PlayBook/)>-1&&RegExp.$1>=0&&i||t.match(/Fennec\/([0-9]+)/)&&RegExp.$1>=4||t.match(/wOSBrowser\/([0-9]+)/)&&RegExp.$1>=233&&i||t.match(/NokiaBrowser\/([0-9\.]+)/)&&parseFloat(RegExp.$1)===7.3&&n&&r>=533}(),u=function(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t},a=!1,f,l=function(n,r){var i=0,s=n.scrollLeft,o=n.scrollTop,u={top:"+0",left:"+0",duration:100,easing:e.overthrow.easing},a,l;if(r)for(var c in u)r[c]!==t&&(u[c]=r[c]);return typeof u.left=="string"?(u.left=parseFloat(u.left),a=u.left+s):(a=u.left,u.left=u.left-s),typeof u.top=="string"?(u.top=parseFloat(u.top),l=u.top+o):(l=u.top,u.top=u.top-o),f=setInterval(function(){i++<u.duration?(n.scrollLeft=u.easing(i,s,u.left,u.duration),n.scrollTop=u.easing(i,o,u.top,u.duration)):(a!==n.scrollLeft&&(n.scrollLeft=a),l!==n.scrollTop&&(n.scrollTop=l),h())},1),{top:l,left:a,duration:u.duration,easing:u.easing}},c=function(e,t){return!t&&e.className&&e.className.indexOf("scroll")>-1&&e||c(e.parentNode)},h=function(){clearInterval(f)},p=function(){if(a)return;a=!0;if(o||s)r.className+=" "+i;e.overthrow.forget=function(){r.className=r.className.replace(i,""),n.removeEventListener&&n.removeEventListener("touchstart",T,!1),e.overthrow.easing=u,a=!1};if(o||!s)return;var f,p=[],d=[],v,m,g=function(){p=[],v=null},y=function(){d=[],m=null},b=function(){var e=(p[0]-p[p.length-1])*8,t=(d[0]-d[d.length-1])*8,n=Math.max(Math.abs(t),Math.abs(e))/8;e=(e>0?"+":"")+e,t=(t>0?"+":"")+t,!isNaN(n)&&n>0&&(Math.abs(t)>80||Math.abs(e)>80)&&l(f,{left:t,top:e,duration:n})},E,S=function(e){E=f.querySelectorAll("textarea, input");for(var t=0,n=E.length;t<n;t++)E[t].style.pointerEvents=e},x=function(e,r){if(n.createEvent){var i=(!r||r===t)&&f.parentNode||f.touchchild||f,s;i!==f&&(s=n.createEvent("HTMLEvents"),s.initEvent("touchend",!0,!0),f.dispatchEvent(s),i.touchchild=f,f=i,i.dispatchEvent(e))}},T=function(e){h(),g(),y(),f=c(e.target);if(!f||f===r||e.touches.length>1)return;S("none");var t=e,n=f.scrollTop,i=f.scrollLeft,s=f.offsetHeight,o=f.offsetWidth,u=e.touches[0].pageY,a=e.touches[0].pageX,l=f.scrollHeight,w=f.scrollWidth,E=function(e){var r=n+u-e.touches[0].pageY,c=i+a-e.touches[0].pageX,h=r>=(p.length?p[0]:0),b=c>=(d.length?d[0]:0);r>0&&r<l-s||c>0&&c<w-o?e.preventDefault():x(t),v&&h!==v&&g(),m&&b!==m&&y(),v=h,m=b,f.scrollTop=r,f.scrollLeft=c,p.unshift(r),d.unshift(c),p.length>3&&p.pop(),d.length>3&&d.pop()},T=function(e){b(),S("auto"),setTimeout(function(){S("none")},450),f.removeEventListener("touchmove",E,!1),f.removeEventListener("touchend",T,!1)};f.addEventListener("touchmove",E,!1),f.addEventListener("touchend",T,!1)};n.addEventListener("touchstart",T,!1)};e.overthrow={set:p,forget:function(){},easing:u,toss:l,intercept:h,closest:c,support:o?"native":s&&"polyfilled"||"none"},p()}(this),Lungo.Service=function(e,t,n){var r="lungojs_service_cache",i={MINUTE:"minute",HOUR:"hour",DAY:"day"},s=function(e,n,r,i){return t.get(e,n,r,i)},o=function(e,n,r,i){return t.post(e,n,r,i)},u=function(e,n,r){return t.json(e,n,r)},a=function(n,r,i,s,o){var u=n+t.serializeParameters(r);if(!f(u,i))return t.get(n,r,function(e){p(u,e),s.call(s,e)},o);var a=e.Data.Storage.persistent(u);if(a)return s.call(s,a)},f=function(t,n){var i=!1,s=e.Data.Storage.persistent(r);if(s){var o=l(s[t]);i=c(o,n)}return i},l=function(e){var t=(new Date).getTime(),n=(new Date(e)).getTime();return t-n},c=function(e,t){var n=t.split(" "),r=h(n[1],e);return r<n[0]?!0:!1},h=function(e,t){var n=t/1e3/60;return e.indexOf(i.HOUR)>=0?n/=60:e.indexOf(i.DAY)>=0&&(n=n/60/24),n},p=function(t,n){var i=e.Data.Storage.persistent(r)||{};i[t]=new Date,e.Data.Storage.persistent(r,i),e.Data.Storage.persistent(t,n)};return{get:s,post:o,json:u,cache:a,Settings:t.ajaxSettings}}(Lungo,Quo),Lungo.Boot.Data=function(e,t){var n=e.Constants.BINDING,r=function(t){var n=e.dom(t||document.body);n.length>0&&i(n)},i=function(t){for(var n in e.Attributes)e.Core.isOwnProperty(e.Attributes,n)&&s(t,n)},s=function(t,n){attribute=e.Attributes[n];var r=attribute.selector+"[data-"+n+"]";t.find(r).each(function(t,r){var i=e.dom(r);o(i,i.data(n),attribute.html)})},o=function(e,t,r){var i=r.replace(n.START+n.KEY+n.END,t);e.prepend(i)};return{init:r}}(Lungo),Lungo.Boot.Events=function(e,t){var n=e.Constants.ATTRIBUTE,r=e.Constants.CLASS,i=e.Constants.ELEMENT,s={HREF_ASIDE:"header a[href][data-router=aside]",HREF_TARGET:"a[href][data-router]",HREF_TARGET_FROM_ASIDE:"aside a[href][data-router]",INPUT_CHECKBOX:"input[type=range].checkbox"},o=function(){e.dom(s.HREF_TARGET_FROM_ASIDE).tap(a),e.dom(s.HREF_TARGET).tap(u),e.dom(s.INPUT_CHECKBOX).tap(f),e.View.Aside.suscribeEvents(e.dom(s.HREF_ASIDE))},u=function(t){t.preventDefault();var n=e.dom(this);n.data("async")?c(n):l(n)},a=function(t){t.preventDefault(),e.View.Aside.hide()},f=function(t){t.preventDefault();var n=e.dom(this),r=n.val()>0?0:1;n.toggleClass("active").attr("value",r)},l=function(e){var t=e.data(n.ROUTER);switch(t){case i.SECTION:var r=e.attr(n.HREF);h(r);break;case i.ARTICLE:p(e);break;case i.ASIDE:d(e)}},c=function(t){e.Notification.show(),e.Resource.load(t.data("async")),t[0].removeAttribute("data-async"),e.Boot.Data.init(t.attr(n.HREF)),setTimeout(function(){l(t),e.Notification.hide()},e.Constants.TRANSITION.DURATION*2)},h=function(t){t=e.Core.parseUrl(t),t==="#back"?e.Router.back():e.Router.section(t)},p=function(t){var r=e.Router.History.current(),i=t.attr(n.HREF);e.Router.article(r,i,t)},d=function(t){var r=e.Router.History.current(),i=t.attr(n.HREF);e.Router.aside(r,i)};return{init:o}}(Lungo),Lungo.Boot.Layout=function(e,t){var n=e.Constants.ELEMENT,r=e.Constants.CLASS,i=e.Constants.ATTRIBUTE,s=e.Constants.QUERY,o=function(){e.Fallback.fixPositionInAndroid(),u(),a(s.LIST_IN_ELEMENT,f),a(s.ELEMENT_SCROLLABLE,l)},u=function(){var t=e.dom(n.SECTION).first().addClass(r.SHOW);e.Element.Cache.section=t,e.Element.Cache.article=t.children(n.ARTICLE+"."+r.ACTIVE),e.View.Article.switchReferenceItems(e.Element.Cache.article.attr("id"),t);var s="#"+t.attr(i.ID);e.Router.History.add(s)},a=function(t,n){var r=e.dom(t);for(var i=0,s=r.length;i<s;i++){var o=e.dom(r[i]);e.Core.execute(n,o)}},f=function(e){if(e.children().length===0){var t=e.attr(i.ID);e.append(n.LIST)}},l=function(e){e[0].addEventListener("touchstart",function(e){scrollTop=this.scrollTop,scrollTop<=1&&(this.scrollTop=1),scrollTop+this.offsetHeight>=this.scrollHeight&&(this.scrollTop=this.scrollHeight-this.offsetHeight-1)},!1)};return{init:o}}(Lungo),Lungo.Data.Cache=function(e,t){var n={},r=function(t,r){o(t)?n[t]=e.Core.mix(i(t),r):n[t]=r},i=function(e,r){return arguments.length===1?n[e]:n[arguments[0]]?n[arguments[0]][arguments[1]]:t},s=function(e,t){arguments.length===1?delete n[e]:delete n[arguments[0]][arguments[1]]},o=function(e){return n[e]?!0:!1};return{set:r,get:i,remove:s,exists:o}}(Lungo),Lungo.Data.Sql=function(e,t){var n=e.Constants.ERROR,r={name:"lungo_db",version:"1.0",size:65536,schema:[]},i=null,s=function(t){r=e.Core.mix(r,t),i=openDatabase(r.name,r.version,r.name,r.size);if(!i)throw new Error(n.DATABASE);c()},o=function(e,t,n){var r=t?" WHERE "+v(t,"AND"):"";l("SELECT * FROM "+e+r,function(e){var t=[];for(var r=0,i=e.rows.length;r<i;r++)t.push(e.rows.item(r));m(n,t)})},u=function(t,n,r){if(e.Core.toType(n)==="object")g(t,n);else for(row in n)g(t,n[row])},a=function(e,t,n,r){var i="UPDATE "+e+" SET "+v(t,",");n&&(i+=" WHERE "+v(n,"AND")),l(i)},f=function(e,t,n){var r=t?" WHERE "+v(t,"AND"):"";l("DELETE FROM "+e+r+";")},l=function(t,n){e.Core.log(1,"lng.Data.Sql >> "+t),i.transaction(function(e){e.executeSql(t,[],function(e,t){m(n,t)},function(e,n){e.executedQuery=t,y.apply(null,arguments)})})},c=function(){var e=r.schema,t=e.length;if(!t)return;for(var n=0;n<t;n++){var i=e[n];p(i),h(i.name,i.fields)}},h=function(t,n){var r="";for(var i in n)e.Core.isOwnProperty(n,i)&&(r&&(r+=", "),r+=i+" "+n[i]);l("CREATE TABLE IF NOT EXISTS "+t+" ("+r+");")},p=function(e){e.drop===!0&&d(e.name)},d=function(e){l("DROP TABLE IF EXISTS "+e)},v=function(t,n){var r="";for(var i in t)if(e.Core.isOwnProperty(t,i)){var s=t[i];r&&(r+=" "+n+" "),r+=i+"=",r+=isNaN(s)?'"'+s+'"':s}return r},m=function(t,n){e.Core.toType(t)==="function"&&setTimeout(t,100,n)},g=function(t,n){var r="",i="";for(var s in n)if(e.Core.isOwnProperty(n,s)){var o=n[s];r+=r?", "+s:s,i&&(i+=", "),i+=isNaN(o)||o==""?'"'+o+'"':o}l("INSERT INTO "+t+" ("+r+") VALUES ("+i+")")},y=function(e,t){throw new Error(n.DATABASE_TRANSACTION+t.code+": "+t.message+" \n Executed query: "+e.executedQuery)};return{init:s,select:o,insert:u,update:a,drop:f,execute:l}}(Lungo),Lungo.Data.Storage=function(e,t){var n={PERSISTENT:"localStorage",SESSION:"sessionStorage"},r=function(e,t){return s(n.PERSISTENT,e,t)},i=function(e,t){return s(n.SESSION,e,t)},s=function(e,t,n){var e=window[e];if(n)o(e,t,n);else{if(n!==null)return a(e,t);u(e,t)}},o=function(e,t,n){n=JSON.stringify(n),e.setItem(t,n)},u=function(e,t){e.removeItem(t)},a=function(e,t){return value=e.getItem(t),JSON.parse(value)};return{session:i,persistent:r}}(Lungo),Lungo.Element.Cache={section:null,article:null,aside:null,navigation:null},Lungo.Element.Carousel=function(e,t){var n={index:0,speed:300,callback:t,container:e,element:e.children[0],slide:undefined,slides:[],slides_length:0,width:0,start:{},isScrolling:undefined,deltaX:0},r=function(e){n.index&&a(n.index-1,n.speed)},i=function(e){n.index<n.slides_length-1?a(n.index+1,n.speed):a(0,n.speed)},s=function(){return n.index},o=function(){u()},u=function(){n.slides=n.element.children,n.slides_length=n.slides.length;if(n.slides_length<2)return null;n.width="getBoundingClientRect"in n.container?n.container.getBoundingClientRect().width:n.container.offsetWidth;if(!n.width)return null;n.element.style.width=n.slides.length*n.width+"px";var e=n.slides.length;while(e--){var t=n.slides[e];t.style.width=n.width+"px",t.style.display="table-cell",t.style.verticalAlign="top"}a(n.index,0),n.container.style.visibility="visible"},a=function(e,t){var r=n.element.style;t==undefined&&(t=n.speed),r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=t+"ms",r.MozTransform=r.webkitTransform="translate3d("+ -(e*n.width)+"px,0,0)",r.msTransform=r.OTransform="translateX("+ -(e*n.width)+"px)",n.index=e},f=function(){n.element.addEventListener("touchstart",l,!1),n.element.addEventListener("touchmove",c,!1),n.element.addEventListener("touchend",h,!1),n.element.addEventListener("webkitTransitionEnd",p,!1),n.element.addEventListener("msTransitionEnd",p,!1),n.element.addEventListener("oTransitionEnd",p,!1),n.element.addEventListener("transitionend",p,!1),window.addEventListener("resize",u,!1)},l=function(e){n.start={pageX:e.touches[0].pageX,pageY:e.touches[0].pageY,time:Number(new Date)},n.isScrolling=undefined,n.deltaX=0,n.element.style.MozTransitionDuration=n.element.style.webkitTransitionDuration=0,e.stopPropagation()},c=function(e){if(e.touches.length>1||e.scale&&e.scale!==1)return;n.deltaX=e.touches[0].pageX-n.start.pageX,typeof n.isScrolling=="undefined"&&(n.isScrolling=!!(n.isScrolling||Math.abs(n.deltaX)<Math.abs(e.touches[0].pageY-n.start.pageY)));if(!n.isScrolling){e.preventDefault();var t=!n.index&&n.deltaX>0||n.index==n.slides_length-1&&n.deltaX<0?Math.abs(n.deltaX)/n.width+1:1;n.deltaX=n.deltaX/t;var r=n.deltaX-n.index*n.width;n.element.style.MozTransform=n.element.style.webkitTransform="translate3d("+r+"px,0,0)",e.stopPropagation()}},h=function(e){var t=Number(new Date)-n.start.time<250&&Math.abs(n.deltaX)>20||Math.abs(n.deltaX)>n.width/2,r=!n.index&&n.deltaX>0||n.index==n.slides_length-1&&n.deltaX<0;n.isScrolling||a(n.index+(t&&!r?n.deltaX<0?1:-1:0),n.speed),e.stopPropagation()},p=function(e){n.callback&&n.callback.apply(n.callback,[n.index,n.slides[n.index]])};return u(),f(),{prev:r,next:i,position:s,refresh:o}},Lungo.Element.Carousel=function(e,t){var n={gestureStarted:!1,index:0,speed:300,callback:t,container:e,element:e.children[0],slide:undefined,slides:[],slides_length:0,width:0,start:{},isScrolling:undefined,deltaX:0},r=function(e){n.index&&a(n.index-1,n.speed)},i=function(e){var t=n.index<n.slides_length-1?n.index+1:0;a(t,n.speed)},s=function(){return n.index},o=function(){u()},u=function(){n.slides=n.element.children,n.slides_length=n.slides.length;if(n.slides_length<2)return null;n.width="getBoundingClientRect"in n.container?n.container.getBoundingClientRect().width:n.container.offsetWidth;if(!n.width)return null;n.element.style.width=n.slides.length*n.width+"px";var e=n.slides.length;while(e--){var t=n.slides[e];t.style.width=n.width+"px",t.style.display="table-cell",t.style.verticalAlign="top"}a(n.index,0),n.container.style.visibility="visible"},a=function(e,t){var r=n.element.style;t==undefined&&(t=n.speed),r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=t+"ms",r.MozTransform=r.webkitTransform="translate3d("+ -(e*n.width)+"px,0,0)",r.msTransform=r.OTransform="translateX("+ -(e*n.width)+"px)",n.index=e},f=function(){$$(n.element).swiping(function(e){n.gestureStarted?_moveGesture(e):_startGesture(e)}),$$(n.element).swipe(l),$$(n.element).on("webkitTransitionEnd",c,!1),$$(n.element).on("msTransitionEnd",c,!1),$$(n.element).on("oTransitionEnd",c,!1),$$(n.element).on("transitionend",c,!1),$$(window).on("resize",u,!1)};_startGesture=function(e){n.start={pageX:e.currentTouch.x,pageY:e.currentTouch.y,time:Number(new Date)},n.isScrolling=undefined,n.deltaX=0,n.element.style.MozTransitionDuration=n.element.style.webkitTransitionDuration=0,typeof e.stopPropagation=="function"&&e.stopPropagation(),n.gestureStarted=!0},_moveGesture=function(e){n.deltaX=e.currentTouch.x-n.start.pageX,typeof n.isScrolling=="undefined"&&(n.isScrolling=!!(n.isScrolling||Math.abs(n.deltaX)<Math.abs(e.currentTouch.y-n.start.pageY)));if(!n.isScrolling){e.preventDefault();var t=!n.index&&n.deltaX>0||n.index==n.slides_length-1&&n.deltaX<0?Math.abs(n.deltaX)/n.width+1:1;n.deltaX=n.deltaX/t;var r=n.deltaX-n.index*n.width;n.element.style.MozTransform=n.element.style.webkitTransform="translate3d("+r+"px,0,0)",typeof e.stopPropagation=="function"&&e.stopPropagation()}};var l=function(){if(n.gestureStarted){var e=Number(new Date)-n.start.time<250&&Math.abs(n.deltaX)>20||Math.abs(n.deltaX)>n.width/2,t=!n.index&&n.deltaX>0||n.index==n.slides_length-1&&n.deltaX<0;n.isScrolling||a(n.index+(e&&!t?n.deltaX<0?1:-1:0),n.speed),typeof event.stopPropagation=="function"&&event.stopPropagation(),n.gestureStarted=!1}},c=function(e){n.callback&&n.callback.apply(n.callback,[n.index,n.slides[n.index]])};return u(),f(),{prev:r,next:i,position:s,refresh:o}},Lungo.Element.count=function(e,t){var n=Lungo.dom(e);n.children(".bubble.count").remove();if(n&&t){var r=Lungo.Constants.BINDING.SELECTOR;html=Lungo.Attributes.count.html.replace(r,t),n.append(html)}},Lungo.Element.loading=function(e,t){var n=Lungo.dom(e);if(n){var r=null;if(t){var i=Lungo.Constants.BINDING.SELECTOR;r=Lungo.Attributes.loading.html.replace(i,t)}n.html(r)}},Lungo.Element.progress=function(e,t){var n=Lungo.dom(e);n&&(t+=Lungo.Constants.ATTRIBUTE.PERCENT,n.find(".value").style(Lungo.Constants.ATTRIBUTE.WIDTH,t))},Lungo.Element.Pull=function(e,t){var n=60,r=80,i=300,s=0,o=!1,u=$$(e),a=u.siblings('div[data-control="pull"]'),f,l={onPull:"Pull down to refresh",onRelease:"Release to...",onRefresh:"Loading...",callback:undefined};f=Lungo.Core.mix(l,t);var c=function(){h(0,!0),setTimeout(function(){o=!1,document.removeEventListener("touchmove",g,!1)},i),s=0},h=function(e,t){var n=e>r?r:e;t&&u.addClass("pull"),u.style("-webkit-transform","translate(0, "+n+"px)"),t&&setTimeout(function(){u.removeClass("pull")},i)},p=function(e){o=!0,document.addEventListener("touchmove",g,!1),d(f.onRefresh),v(!0),h(n,!0),f.callback&&f.callback.apply(this)},d=function(e){a.find("strong").html(e)},v=function(e){e?a.addClass("refresh"):a.removeClass("refresh")},m=function(e){e?a.addClass("rotate"):a.removeClass("rotate")},g=function(e){e.preventDefault()},y=function(e){h(s,!1),v(!1),s>n?(d(f.onRelease),m(!0)):(d(f.onPull),m(!1))},b=function(e){s>n?p():c()};return function(){var e=!1,t={};u.bind("touchstart",function(n){u[0].scrollTop<=1&&(e=!0,t=$$.isMobile()?n.touches[0].pageY:n.pageY)}).bind("touchmove",function(n){!o&&e&&(current_y=$$.isMobile()?n.touches[0].pageY:n.pageY,s=current_y-t,s>=0&&(u.style("overflow-y","hidden"),y()))}).bind("touchend",function(){e&&(u.style("overflow-y","scroll"),b()),INI_TOUCH={},e=!1})}(),{hide:c}},Lungo.Router=function(e,t){var n=e.Constants.CLASS,r=e.Constants.ELEMENT,i=e.Constants.ERROR,s=e.Constants.TRIGGER,o=e.Constants.ATTRIBUTE,u="#",a=function(t){t=e.Core.parseUrl(t);var i=e.Element.Cache.section;if(h(t,i)){var s=i.siblings(r.SECTION+t);s.length>0&&(target_transition=s.data("transition"),target_transition&&(m(i),v(i,target_transition)),i.removeClass(n.SHOW).addClass(n.HIDE),s.removeClass(n.HIDE).addClass(n.SHOW),e.Element.Cache.section=s,e.Element.Cache.article=s.find(r.ARTICLE+"."+n.ACTIVE),e.Router.History.add(t),d(i,s))}},f=function(t,i,u){i=e.Core.parseUrl(i);var f=e.Element.Cache.article;if(h(i,f)){a(t);var l=e.Element.Cache.section.find(r.ARTICLE+i);l.length>0&&(p(f)!==p(l)&&(f=e.Element.Cache.section.children(r.ARTICLE)),f.removeClass(n.ACTIVE).trigger(s.UNLOAD),l.addClass(n.ACTIVE).trigger(s.LOAD),e.Element.Cache.article=l,e.View.Article.switchNavItems(i),e.View.Article.switchReferenceItems(i,e.Element.Cache.section),u&&e.View.Article.title(u.data(o.TITLE)))}},l=function(t,n){n=e.Core.parseUrl(n),e.View.Aside.toggle(n)},c=function(){var t=e.Element.Cache.section;t.removeClass(n.SHOW).addClass(n.HIDING),setTimeout(function(){t.removeClass(n.HIDING)},e.Constants.TRANSITION.DURATION),e.Router.History.removeLast(),target=t.siblings(r.SECTION+e.Router.History.current()),v(target,target.data("transition-origin")),target.removeClass(n.HIDE).addClass(n.SHOW),e.Element.Cache.section=target,e.Element.Cache.article=target.find(r.ARTICLE+"."+n.ACTIVE),d(t,target)},h=function(e,t){return e!==u+t.attr("id")?!0:!1},p=function(e){return e.parent("section").attr("id")},d=function(e,t){e.trigger(s.UNLOAD),t.trigger(s.LOAD)},v=function(e,t){e.data("transition",t)},m=function(e){e.data("transition-origin",e.data("transition"))};return{section:a,article:f,aside:l,back:c}}(Lungo),Lungo.Router.History=function(e){var t=[],n=function(e){e!==r()&&t.push(e)},r=function(){return t[t.length-1]},i=function(){t.length-=1};return{add:n,current:r,removeLast:i}}(),Lungo.View.Article=function(e,t){var n=e.Constants.ELEMENT,r=e.Constants.CLASS,i=e.Constants.ATTRIBUTE,s={NAVIGATION_ITEM:'a[href][data-router="article"]',REFERENCE_LINK:" a[href][data-article]",TITLE_OF_ARTICLE:"header .title, footer .title",ASIDE_REFERENCE_LIST:"li a.active, li.active"},o=function(t){t&&e.Element.Cache.section.find(s.TITLE_OF_ARTICLE).text(t)},u=function(t){e.Element.Cache.section.find(s.NAVIGATION_ITEM).removeClass(r.ACTIVE);var n='a[href="'+t+'"][data-router="article"]';e.Element.Cache.section.find(n).addClass(r.ACTIVE),e.Element.Cache.aside&&(aside=e.Element.Cache.aside,aside.find(s.ASIDE_REFERENCE_LIST).removeClass(r.ACTIVE),aside.find(n).addClass(r.ACTIVE).parent().addClass(r.ACTIVE))},a=function(e,t){var n="[data-article="+e.replace("#","")+"]";t.find(s.REFERENCE_LINK).hide().siblings(n).show()};return{title:o,switchReferenceItems:a,switchNavItems:u}}(Lungo),Lungo.View.Aside=function(e,t){var n=e.Constants.ELEMENT,r=e.Constants.CLASS,i=e.Constants.ATTRIBUTE,s=function(t){aside=f(t);if(aside){var n=aside.hasClass(r.SHOW);n?e.View.Aside.hide():e.View.Aside.show(aside)}aside=null},o=function(t){e.Core.toType(t)=="string"&&(t=f(e.Core.parseUrl(t)));if(t){e.Element.Cache.aside=t;var n=l(t);t.addClass(r.SHOW),e.Element.Cache.section.addClass(n).addClass(r.ASIDE)}t=null},u=function(t){var n=e.Element.Cache.aside||t;if(n){e.Element.Cache.section.removeClass(r.ASIDE).removeClass(r.RIGHT).removeClass(r.SMALL);var i=l(n);i&&e.Element.Cache.section.removeClass(i),setTimeout(function(){n.removeClass(r.SHOW),e.Element.Cache.aside=null},350)}},a=function(t){var n=parseInt(document.body.getBoundingClientRect().width/3,10);t.each(function(){var t=!1,i=e.dom(this),s=i.closest("section"),a=e.dom(i.attr("href"));s.swiping(function(e){if(!s.hasClass("aside")){var n=e.currentTouch.x-e.iniTouch.x,i=Math.abs(e.currentTouch.y-e.iniTouch.y);t=t?!0:n>3*i&&n<50,t?(n=n>256?256:n<0?0:n,a.addClass(r.SHOW),s.vendor("transform","translateX("+n+"px)"),s.vendor("transition-duration","0s")):s.attr("style","")}}),s.swipe(function(e){var r=e.currentTouch.x-e.iniTouch.x,i=Math.abs(e.currentTouch.y-e.iniTouch.y);s.attr("style",""),r>n&&t?o(a):u(a),t=!1})})},f=function(t){var r=null,i=e.dom(n.ASIDE);if(i.length==1){var s="#"+i[0].id;s==t&&(r=e.dom(i[0]))}else i.length>1&&(r=i.siblings(n.ASIDE+t));return r},l=function(e){var t=e.attr(i.CLASS),n="";return t&&(n+=t.indexOf(r.RIGHT)>-1?r.RIGHT+" ":"",n+=t.indexOf(r.SMALL)>-1?r.SMALL+" ":""),n};return{suscribeEvents:a,toggle:s,show:o,hide:u}}(Lungo);
