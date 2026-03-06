(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const au="174",om=0,uh=1,lm=2,Jf=1,Kf=2,di=3,Vi=0,ln=1,Mn=2,Ni=0,Kr=1,hh=2,fh=3,dh=4,cm=5,cr=100,um=101,hm=102,fm=103,dm=104,pm=200,mm=201,_m=202,gm=203,Kl=204,Ql=205,vm=206,xm=207,ym=208,Sm=209,Mm=210,Tm=211,Em=212,bm=213,wm=214,$l=0,ec=1,tc=2,rs=3,nc=4,ic=5,rc=6,sc=7,Qf=0,Am=1,Cm=2,Oi=0,Rm=1,Pm=2,Dm=3,Um=4,Lm=5,Fm=6,Im=7,$f=300,ss=301,as=302,ac=303,oc=304,Co=306,ia=1e3,hr=1001,lc=1002,qn=1003,Nm=1004,wa=1005,Fn=1006,rl=1007,fr=1008,yi=1009,ed=1010,td=1011,ra=1012,ou=1013,xr=1014,_i=1015,ma=1016,lu=1017,cu=1018,os=1020,nd=35902,id=1021,rd=1022,Yn=1023,sd=1024,ad=1025,Qr=1026,ls=1027,od=1028,uu=1029,ld=1030,hu=1031,fu=1033,eo=33776,to=33777,no=33778,io=33779,cc=35840,uc=35841,hc=35842,fc=35843,dc=36196,pc=37492,mc=37496,_c=37808,gc=37809,vc=37810,xc=37811,yc=37812,Sc=37813,Mc=37814,Tc=37815,Ec=37816,bc=37817,wc=37818,Ac=37819,Cc=37820,Rc=37821,ro=36492,Pc=36494,Dc=36495,cd=36283,Uc=36284,Lc=36285,Fc=36286,Om=3200,ud=3201,hd=0,Bm=1,Ui="",Ln="srgb",cs="srgb-linear",fo="linear",at="srgb",Dr=7680,ph=519,km=512,zm=513,Gm=514,fd=515,Vm=516,Hm=517,Wm=518,Xm=519,mh=35044,_h="300 es",gi=2e3,po=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,Ic=180/Math.PI;function Ss(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function Ym(s,e){return(s%e+e)%e}function al(s,e,t){return(1-t)*s+t*e}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,n,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=n[0],p=n[3],m=n[6],M=n[1],x=n[4],v=n[7],E=n[2],A=n[5],T=n[8];return r[0]=a*_+o*M+l*E,r[3]=a*p+o*x+l*A,r[6]=a*m+o*v+l*T,r[1]=c*_+u*M+h*E,r[4]=c*p+u*x+h*A,r[7]=c*m+u*v+h*T,r[2]=f*_+d*M+g*E,r[5]=f*p+d*x+g*A,r[8]=f*m+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*a)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Ye;function dd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qm(){const s=mo("canvas");return s.style.display="block",s}const gh={};function sr(s){s in gh||(gh[s]=!0,console.warn(s))}function jm(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Zm(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jm(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Km(){const s={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(n.r=$r(n.r),n.g=$r(n.g),n.b=$r(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?fo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[cs]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:at,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),s}const nt=Km();function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ur;class Qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=mo("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ur}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $m=0;class du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ll(n[a].image)):r.push(ll(n[a]))}else r=ll(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function ll(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e_=0;class jt extends ys{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=hr,n=hr,r=Fn,a=fr,o=Yn,l=yi,c=jt.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Ss(),this.name="",this.source=new du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=$f;jt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,E=(m+1)/2,A=(u+f)/4,T=(h+_)/4,C=(g+p)/4;return x>v&&x>E?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=A/i,r=T/i):v>E?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=T/r,n=C/r),this.set(i,n,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t_ extends ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new jt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new du(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends t_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=qn,this.minFilter=qn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n_ extends jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=qn,this.minFilter=qn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-o;const m=l*f+c*d+u*g+h*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,m*M);p=Math.sin(p*A)/E,o=Math.sin(o*A)/E}const v=o*M;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+_*v,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new Y,yh=new _a;class Tr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Ca.subVectors(this.max,ks),Lr.subVectors(e.a,ks),Fr.subVectors(e.b,ks),Ir.subVectors(e.c,ks),wi.subVectors(Fr,Lr),Ai.subVectors(Ir,Fr),Ji.subVectors(Lr,Ir);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Ji.y,Ji.x,0];return!ul(t,Lr,Fr,Ir,Ca)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Lr,Fr,Ir,Ca))?!1:(Ra.crossVectors(wi,Ai),t=[Ra.x,Ra.y,Ra.z],ul(t,Lr,Fr,Ir,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Vn=new Y,Aa=new Tr,Lr=new Y,Fr=new Y,Ir=new Y,wi=new Y,Ai=new Y,Ji=new Y,ks=new Y,Ca=new Y,Ra=new Y,Ki=new Y;function ul(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ki.fromArray(s,r);const o=n.x*Math.abs(Ki.x)+n.y*Math.abs(Ki.y)+n.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const i_=new Tr,zs=new Y,hl=new Y;class Ro{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):i_.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(zs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(hl)),this.expandByPoint(zs.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new Y,fl=new Y,Pa=new Y,Ci=new Y,dl=new Y,Da=new Y,pl=new Y;class md{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){fl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(fl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=Ci.dot(this.direction),l=-Ci.dot(Pa),c=Ci.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(fl).addScaledVector(Pa,f),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),n=ci.dot(ci)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,n,r){dl.subVectors(t,e),Da.subVectors(i,e),pl.crossVectors(dl,Da);let a=this.direction.dot(pl),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(Da.crossVectors(Ci,Da));if(l<0)return null;const c=o*this.direction.dot(dl.cross(Ci));if(c<0||l+c>a)return null;const u=-o*Ci.dot(pl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p)}set(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,s_)}lookAt(e,t,i){const n=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ri.crossVectors(i,gn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ri.crossVectors(i,gn)),Ri.normalize(),Ua.crossVectors(gn,Ri),n[0]=Ri.x,n[4]=Ua.x,n[8]=gn.x,n[1]=Ri.y,n[5]=Ua.y,n[9]=gn.y,n[2]=Ri.z,n[6]=Ua.z,n[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],x=i[7],v=i[11],E=i[15],A=n[0],T=n[4],C=n[8],y=n[12],S=n[1],U=n[5],P=n[9],L=n[13],F=n[2],z=n[6],O=n[10],j=n[14],H=n[3],K=n[7],Z=n[11],I=n[15];return r[0]=a*A+o*S+l*F+c*H,r[4]=a*T+o*U+l*z+c*K,r[8]=a*C+o*P+l*O+c*Z,r[12]=a*y+o*L+l*j+c*I,r[1]=u*A+h*S+f*F+d*H,r[5]=u*T+h*U+f*z+d*K,r[9]=u*C+h*P+f*O+d*Z,r[13]=u*y+h*L+f*j+d*I,r[2]=g*A+_*S+p*F+m*H,r[6]=g*T+_*U+p*z+m*K,r[10]=g*C+_*P+p*O+m*Z,r[14]=g*y+_*L+p*j+m*I,r[3]=M*A+x*S+v*F+E*H,r[7]=M*T+x*U+v*z+E*K,r[11]=M*C+x*P+v*O+E*Z,r[15]=M*y+x*L+v*j+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-n*c*h-r*o*f+i*c*f+n*o*d-i*l*d)+_*(+t*l*d-t*c*f+r*a*f-n*a*d+n*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+m*(-n*o*u-t*l*h+t*o*f+n*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=h*p*c-_*f*c+_*l*d-o*p*d-h*l*m+o*f*m,x=g*f*c-u*p*c-g*l*d+a*p*d+u*l*m-a*f*m,v=u*_*c-g*h*c+g*o*d-a*_*d-u*o*m+a*h*m,E=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,A=t*M+i*x+n*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(_*f*r-h*p*r-_*n*d+i*p*d+h*n*m-i*f*m)*T,e[2]=(o*p*r-_*l*r+_*n*c-i*p*c-o*n*m+i*l*m)*T,e[3]=(h*l*r-o*f*r-h*n*c+i*f*c+o*n*d-i*l*d)*T,e[4]=x*T,e[5]=(u*p*r-g*f*r+g*n*d-t*p*d-u*n*m+t*f*m)*T,e[6]=(g*l*r-a*p*r-g*n*c+t*p*c+a*n*m-t*l*m)*T,e[7]=(a*f*r-u*l*r+u*n*c-t*f*c-a*n*d+t*l*d)*T,e[8]=v*T,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*m-t*h*m)*T,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*m+t*o*m)*T,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*T,e[12]=E*T,e[13]=(u*_*n-g*h*n+g*i*f-t*_*f-u*i*p+t*h*p)*T,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*p-t*o*p)*T,e[15]=(a*h*n-u*o*n+u*i*l-t*h*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,p=a*h,m=o*h,M=l*c,x=l*u,v=l*h,E=i.x,A=i.y,T=i.z;return n[0]=(1-(_+m))*E,n[1]=(d+v)*E,n[2]=(g-x)*E,n[3]=0,n[4]=(d-v)*A,n[5]=(1-(f+m))*A,n[6]=(p+M)*A,n[7]=0,n[8]=(g+x)*T,n[9]=(p-M)*T,n[10]=(1-(f+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Nr.set(n[0],n[1],n[2]).length();const a=Nr.set(n[4],n[5],n[6]).length(),o=Nr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Hn.copy(this);const c=1/r,u=1/a,h=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=gi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,g;if(o===gi)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===po)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=gi){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(a-r),f=(t+e)*c,d=(i+n)*u;let g,_;if(o===gi)g=(a+r)*h,_=-2*h;else if(o===po)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Nr=new Y,Hn=new pt,r_=new Y(0,0,0),s_=new Y(1,1,1),Ri=new Y,Ua=new Y,gn=new Y,Sh=new pt,Mh=new _a;class ni{constructor(e=0,t=0,i=0,n=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a_=0;const Th=new Y,Or=new _a,ui=new pt,La=new Y,Gs=new Y,o_=new Y,l_=new _a,Eh=new Y(1,0,0),bh=new Y(0,1,0),wh=new Y(0,0,1),Ah={type:"added"},c_={type:"removed"},Br={type:"childadded",child:null},ml={type:"childremoved",child:null};class Zt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new Y,t=new ni,i=new _a,n=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ye}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?La.copy(e):La.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Gs,La,this.up):ui.lookAt(La,Gs,this.up),this.quaternion.setFromRotationMatrix(ui),n&&(ui.extractRotation(n.matrixWorld),Or.setFromRotationMatrix(ui),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c_),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,o_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Zt.DEFAULT_UP=new Y(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new Y,hi=new Y,_l=new Y,fi=new Y,kr=new Y,zr=new Y,Ch=new Y,gl=new Y,vl=new Y,xl=new Y,yl=new rt,Sl=new rt,Ml=new rt;class Xn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Wn.subVectors(e,t),n.cross(Wn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Wn.subVectors(n,t),hi.subVectors(i,t),_l.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(hi),l=Wn.dot(_l),c=hi.dot(hi),u=hi.dot(_l),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return yl.setScalar(0),Sl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(yl,r.x),a.addScaledVector(Sl,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(e,t,i,n){return Wn.subVectors(i,t),hi.subVectors(e,t),Wn.cross(hi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Wn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;kr.subVectors(n,i),zr.subVectors(r,i),gl.subVectors(e,i);const l=kr.dot(gl),c=zr.dot(gl);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,n);const u=kr.dot(vl),h=zr.dot(vl);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(kr,a);xl.subVectors(e,r);const d=kr.dot(xl),g=zr.dot(xl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zr,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Ch.subVectors(r,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(Ch,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(i).addScaledVector(kr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Tl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=nt.workingColorSpace){if(e=Ym(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Tl(a,r,e+1/3),this.g=Tl(a,r,e),this.b=Tl(a,r,e-1/3)}return nt.toWorkingColorSpace(this,n),this}setStyle(e,t=Ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Je(Xt.r*255,0,255))*65536+Math.round(Je(Xt.g*255,0,255))*256+Math.round(Je(Xt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,n=Xt.g,r=Xt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ln){nt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,n=Xt.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Fa);const i=al(Pi.h,Fa.h,t),n=al(Pi.s,Fa.s,t),r=al(Pi.l,Fa.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ze;Ze.NAMES=_d;let u_=0;class ga extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Kr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Ql,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ql&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Po extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new Y,Ia=new Pe;let h_=0;class jn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),e}}class gd extends jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends jn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let f_=0;const Dn=new pt,El=new Zt,Gr=new Y,vn=new Tr,Vs=new Tr,Ft=new Y;class Rn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?vd:gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(vn.min,Vs.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,Vs.max),vn.expandByPoint(Ft)):(vn.expandByPoint(Vs.min),vn.expandByPoint(Vs.max))}vn.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),Ft.add(Gr)),n=Math.max(n,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new Y,l[C]=new Y;const c=new Y,u=new Y,h=new Y,f=new Pe,d=new Pe,g=new Pe,_=new Y,p=new Y;function m(C,y,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(U),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),o[C].add(_),o[y].add(_),o[S].add(_),l[C].add(p),l[y].add(p),l[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,y=M.length;C<y;++C){const S=M[C],U=S.start,P=S.count;for(let L=U,F=U+P;L<F;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new Y,v=new Y,E=new Y,A=new Y;function T(C){E.fromBufferAttribute(n,C),A.copy(E);const y=o[C];x.copy(y),x.sub(E.multiplyScalar(E.dot(y))).normalize(),v.crossVectors(A,y);const U=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,U)}for(let C=0,y=M.length;C<y;++C){const S=M[C],U=S.start,P=S.count;for(let L=U,F=U+P;L<F;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new jn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new pt,Qi=new md,Na=new Ro,Ph=new Y,Oa=new Y,Ba=new Y,ka=new Y,bl=new Y,za=new Y,Dh=new Y,Ga=new Y;class st extends Zt{constructor(e=new Rn,t=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(bl.fromBufferAttribute(h,e),a?za.addScaledVector(bl,u):za.addScaledVector(bl.sub(t),u))}t.add(za)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Na.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Na,Ph)===null||Qi.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Rh.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,E=x;v<E;v+=3){const A=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);n=Va(this,m,e,i,c,u,h,A,T,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=o.getX(p),x=o.getX(p+1),v=o.getX(p+2);n=Va(this,a,e,i,c,u,h,M,x,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,E=x;v<E;v+=3){const A=v,T=v+1,C=v+2;n=Va(this,m,e,i,c,u,h,A,T,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,v=p+2;n=Va(this,a,e,i,c,u,h,M,x,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function d_(s,e,t,i,n,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Vi,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:s}}function Va(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Oa),s.getVertexPosition(l,Ba),s.getVertexPosition(c,ka);const u=d_(s,e,t,i,Oa,Ba,ka,Dh);if(u){const h=new Y;Xn.getBarycoord(Dh,Oa,Ba,ka,h),n&&(u.uv=Xn.getInterpolatedAttribute(n,o,l,c,h,new Pe)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,l,c,h,new Pe)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,h,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};Xn.getNormal(Oa,Ba,ka,f.normal),u.face=f,u.barycoord=h}return u}class On extends Rn{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function g(_,p,m,M,x,v,E,A,T,C,y){const S=v/T,U=E/C,P=v/2,L=E/2,F=A/2,z=T+1,O=C+1;let j=0,H=0;const K=new Y;for(let Z=0;Z<O;Z++){const I=Z*U-L;for(let W=0;W<z;W++){const ee=W*S-P;K[_]=ee*M,K[p]=I*x,K[m]=F,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=A>0?1:-1,u.push(K.x,K.y,K.z),h.push(W/T),h.push(1-Z/C),j+=1}}for(let Z=0;Z<C;Z++)for(let I=0;I<T;I++){const W=f+I+z*Z,ee=f+I+z*(Z+1),N=f+(I+1)+z*(Z+1),k=f+(I+1)+z*Z;l.push(W,ee,k),l.push(ee,N,k),H+=6}o.addGroup(d,H,y),d+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const i=us(s[t]);for(const n in i)e[n]=i[n]}return e}function p_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const yd={clone:us,merge:Qt};var m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sd extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new Y,Uh=new Pe,Lh=new Pe;class Sn extends Sd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Lh),t.subVectors(Lh,Uh)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Hr=1;class g_ extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Sn(Vr,Hr,e,t);n.layers=this.layers,this.add(n);const r=new Sn(Vr,Hr,e,t);r.layers=this.layers,this.add(r);const a=new Sn(Vr,Hr,e,t);a.layers=this.layers,this.add(a);const o=new Sn(Vr,Hr,e,t);o.layers=this.layers,this.add(o);const l=new Sn(Vr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Vr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Md extends jt{constructor(e,t,i,n,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v_ extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Md(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new On(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ni});r.uniforms.tEquirect.value=t;const a=new st(n,r),o=t.minFilter;return t.minFilter===fr&&(t.minFilter=Fn),new g_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class vi extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new mu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y_ extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S_ extends jn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Al=new Y,M_=new Y,T_=new Ye;class ar{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Al.subVectors(i,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Al),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||T_.getNormalMatrix(e),n=this.coplanarPoint(Al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Ro,Ha=new Y;class _u{constructor(e=new ar,t=new ar,i=new ar,n=new ar,r=new ar,a=new ar){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],M=n[13],x=n[14],v=n[15];if(i[0].setComponents(l-r,f-c,p-d,v-m).normalize(),i[1].setComponents(l+r,f+c,p+d,v+m).normalize(),i[2].setComponents(l+a,f+u,p+g,v+M).normalize(),i[3].setComponents(l-a,f-u,p-g,v-M).normalize(),i[4].setComponents(l-o,f-h,p-_,v-x).normalize(),t===gi)i[5].setComponents(l+o,f+h,p+_,v+x).normalize();else if(t===po)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ha.x=n.normal.x>0?e.max.x:e.min.x,Ha.y=n.normal.y>0?e.max.y:e.min.y,Ha.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Td extends jt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ed extends jt{constructor(e,t,i,n,r,a,o,l,c,u=Qr){if(u!==Qr&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qr&&(i=xr),i===void 0&&u===ls&&(i=os),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new du(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const u=i[n],f=i[n+1]-u,d=(a-u)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new Pe:new Y);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Y,n=[],r=[],a=[],o=new Y,l=new pt;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new Y)}r[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(Je(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gu extends ri{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Pe){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E_ extends gu{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vu(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,n(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const Wa=new Y,Cl=new vu,Rl=new vu,Pl=new vu;class b_ extends ri{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new Y){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%r]:(Wa.subVectors(n[0],n[1]).add(n[0]),c=Wa);const h=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(Wa.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Cl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),Rl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),Pl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Rl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Pl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Cl.calc(l),Rl.calc(l),Pl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Y().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fh(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function w_(s,e){const t=1-s;return t*t*e}function A_(s,e){return 2*(1-s)*s*e}function C_(s,e){return s*s*e}function Js(s,e,t,i){return w_(s,e)+A_(s,t)+C_(s,i)}function R_(s,e){const t=1-s;return t*t*t*e}function P_(s,e){const t=1-s;return 3*t*t*s*e}function D_(s,e){return 3*(1-s)*s*s*e}function U_(s,e){return s*s*s*e}function Ks(s,e,t,i,n){return R_(s,e)+P_(s,t)+D_(s,i)+U_(s,n)}class bd extends ri{constructor(e=new Pe,t=new Pe,i=new Pe,n=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Pe){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ks(e,n.x,r.x,a.x,o.x),Ks(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L_ extends ri{constructor(e=new Y,t=new Y,i=new Y,n=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Y){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ks(e,n.x,r.x,a.x,o.x),Ks(e,n.y,r.y,a.y,o.y),Ks(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wd extends ri{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends ri{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends ri{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Js(e,n.x,r.x,a.x),Js(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends ri{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Js(e,n.x,r.x,a.x),Js(e,n.y,r.y,a.y),Js(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Fh(o,l.x,c.x,u.x,h.x),Fh(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Pe().fromArray(n))}return this}}var Nc=Object.freeze({__proto__:null,ArcCurve:E_,CatmullRomCurve3:b_,CubicBezierCurve:bd,CubicBezierCurve3:L_,EllipseCurve:gu,LineCurve:wd,LineCurve3:F_,QuadraticBezierCurve:Ad,QuadraticBezierCurve3:I_,SplineCurve:Cd});class N_ extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Nc[n.type]().fromJSON(n))}return this}}class Ih extends N_{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new wd(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new Ad(this.currentPoint.clone(),new Pe(e,t),new Pe(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new bd(this.currentPoint.clone(),new Pe(e,t),new Pe(i,n),new Pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Cd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const c=new gu(e,t,i,n,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xu extends Rn{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],p=i/2;let m=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(d,2));function M(){const v=new Y,E=new Y;let A=0;const T=(t-e)/i;for(let C=0;C<=r;C++){const y=[],S=C/r,U=S*(t-e)+e;for(let P=0;P<=n;P++){const L=P/n,F=L*l+o,z=Math.sin(F),O=Math.cos(F);E.x=U*z,E.y=-S*i+p,E.z=U*O,h.push(E.x,E.y,E.z),v.set(z,T,O).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-S),y.push(g++)}_.push(y)}for(let C=0;C<n;C++)for(let y=0;y<r;y++){const S=_[y][C],U=_[y+1][C],P=_[y+1][C+1],L=_[y][C+1];(e>0||y!==0)&&(u.push(S,U,L),A+=3),(t>0||y!==r-1)&&(u.push(U,P,L),A+=3)}c.addGroup(m,A,0),m+=A}function x(v){const E=g,A=new Pe,T=new Y;let C=0;const y=v===!0?e:t,S=v===!0?1:-1;for(let P=1;P<=n;P++)h.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;const U=g;for(let P=0;P<=n;P++){const F=P/n*l+o,z=Math.cos(F),O=Math.sin(F);T.x=y*O,T.y=p*S,T.z=y*z,h.push(T.x,T.y,T.z),f.push(0,S,0),A.x=z*.5+.5,A.y=O*.5*S+.5,d.push(A.x,A.y),g++}for(let P=0;P<n;P++){const L=E+P,F=U+P;v===!0?u.push(F,F+1,L):u.push(F+1,F,L),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ms extends Ih{constructor(e){super(e),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Ih().fromJSON(n))}return this}}class O_{static triangulate(e,t,i=2){const n=t&&t.length,r=n?t[0]*i:e.length;let a=Rd(e,0,r,i,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,u,h,f,d,g;if(n&&(a=V_(e,t,a,i)),e.length>80*i){l=u=e[0],c=h=e[1];for(let _=i;_<r;_+=i)f=e[_],d=e[_+1],f<l&&(l=f),d<c&&(c=d),f>u&&(u=f),d>h&&(h=d);g=Math.max(u-l,h-c),g=g!==0?32767/g:0}return sa(a,o,i,l,c,g,0),o}}function Rd(s,e,t,i,n){let r,a;if(n===$_(s,e,t,i)>0)for(r=e;r<t;r+=i)a=Nh(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=Nh(r,s[r],s[r+1],a);return a&&Do(a,a.next)&&(oa(a),a=a.next),a}function Sr(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Do(t,t.next)||xt(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function sa(s,e,t,i,n,r,a){if(!s)return;!a&&r&&q_(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?k_(s,i,n,r):B_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),oa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=z_(Sr(s),e,t),sa(s,e,t,i,n,r,2)):a===2&&G_(s,e,t,i,n,r):sa(Sr(s),e,t,i,n,r,1);break}}}function B_(s){const e=s.prev,t=s,i=s.next;if(xt(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=n<r?n<a?n:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=n>r?n>a?n:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&qr(n,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function k_(s,e,t,i){const n=s.prev,r=s,a=s.next;if(xt(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,u=n.y,h=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Oc(d,g,e,t,i),M=Oc(_,p,e,t,i);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=m&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==n&&x!==a&&qr(o,u,l,h,c,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&qr(o,u,l,h,c,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==n&&x!==a&&qr(o,u,l,h,c,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&qr(o,u,l,h,c,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function z_(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!Do(n,r)&&Pd(n,i,i.next,r)&&aa(n,r)&&aa(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),oa(i),oa(i.next),i=s=r),i=i.next}while(i!==s);return Sr(i)}function G_(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J_(a,o)){let l=Dd(a,o);a=Sr(a,a.next),l=Sr(l,l.next),sa(a,e,t,i,n,r,0),sa(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function V_(s,e,t,i){const n=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=Rd(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Z_(c));for(n.sort(H_),r=0;r<n.length;r++)t=W_(n[r],t);return t}function H_(s,e){return s.x-e.x}function W_(s,e){const t=X_(s,e);if(!t)return e;const i=Dd(t,s);return Sr(i,i.next),Sr(t,t.next)}function X_(s,e){let t=e,i=-1/0,n;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,n=t.x<t.next.x?t:t.next,f===r))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let u=1/0,h;t=n;do r>=t.x&&t.x>=l&&r!==t.x&&qr(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),aa(t,s)&&(h<u||h===u&&(t.x>n.x||t.x===n.x&&Y_(n,t)))&&(n=t,u=h)),t=t.next;while(t!==o);return n}function Y_(s,e){return xt(s.prev,s,e.prev)<0&&xt(e.next,s,s.next)<0}function q_(s,e,t,i){let n=s;do n.z===0&&(n.z=Oc(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,j_(n)}function j_(s){let e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function Oc(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Z_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function qr(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function J_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!K_(s,e)&&(aa(s,e)&&aa(e,s)&&Q_(s,e)&&(xt(s.prev,s,e.prev)||xt(s,e.prev,e))||Do(s,e)&&xt(s.prev,s,s.next)>0&&xt(e.prev,e,e.next)>0)}function xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Do(s,e){return s.x===e.x&&s.y===e.y}function Pd(s,e,t,i){const n=Ya(xt(s,e,t)),r=Ya(xt(s,e,i)),a=Ya(xt(t,i,s)),o=Ya(xt(t,i,e));return!!(n!==r&&a!==o||n===0&&Xa(s,t,e)||r===0&&Xa(s,i,e)||a===0&&Xa(t,s,i)||o===0&&Xa(t,e,i))}function Xa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ya(s){return s>0?1:s<0?-1:0}function K_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Pd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function aa(s,e){return xt(s.prev,s,s.next)<0?xt(s,e,s.next)>=0&&xt(s,s.prev,e)>=0:xt(s,e,s.prev)<0||xt(s,s.next,e)<0}function Q_(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Dd(s,e){const t=new Bc(s.i,s.x,s.y),i=new Bc(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Nh(s,e,t,i){const n=new Bc(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function oa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class Bi{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return Bi.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];Oh(e),Bh(i,e);let a=e.length;t.forEach(Oh);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Bh(i,t[l]);const o=O_.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Oh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Bh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Uo extends Rn{constructor(e=new Ms([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new bt(n,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:eg;let x,v=!1,E,A,T,C;m&&(x=m.getSpacedPoints(u),v=!0,f=!1,E=m.computeFrenetFrames(u,!1),A=new Y,T=new Y,C=new Y),f||(p=0,d=0,g=0,_=0);const y=o.extractPoints(c);let S=y.shape;const U=y.holes;if(!Bi.isClockWise(S)){S=S.reverse();for(let q=0,ce=U.length;q<ce;q++){const D=U[q];Bi.isClockWise(D)&&(U[q]=D.reverse())}}const L=Bi.triangulateShape(S,U),F=S;for(let q=0,ce=U.length;q<ce;q++){const D=U[q];S=S.concat(D)}function z(q,ce,D){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(ce,D)}const O=S.length,j=L.length;function H(q,ce,D){let Me,le,ye;const ne=q.x-ce.x,Te=q.y-ce.y,ue=D.x-q.x,w=D.y-q.y,b=ne*ne+Te*Te,B=ne*w-Te*ue;if(Math.abs(B)>Number.EPSILON){const $=Math.sqrt(b),te=Math.sqrt(ue*ue+w*w),oe=ce.x-Te/$,pe=ce.y+ne/$,he=D.x-w/te,ve=D.y+ue/te,Le=((he-oe)*w-(ve-pe)*ue)/(ne*w-Te*ue);Me=oe+ne*Le-q.x,le=pe+Te*Le-q.y;const fe=Me*Me+le*le;if(fe<=2)return new Pe(Me,le);ye=Math.sqrt(fe/2)}else{let $=!1;ne>Number.EPSILON?ue>Number.EPSILON&&($=!0):ne<-Number.EPSILON?ue<-Number.EPSILON&&($=!0):Math.sign(Te)===Math.sign(w)&&($=!0),$?(Me=-Te,le=ne,ye=Math.sqrt(b)):(Me=ne,le=Te,ye=Math.sqrt(b/2))}return new Pe(Me/ye,le/ye)}const K=[];for(let q=0,ce=F.length,D=ce-1,Me=q+1;q<ce;q++,D++,Me++)D===ce&&(D=0),Me===ce&&(Me=0),K[q]=H(F[q],F[D],F[Me]);const Z=[];let I,W=K.concat();for(let q=0,ce=U.length;q<ce;q++){const D=U[q];I=[];for(let Me=0,le=D.length,ye=le-1,ne=Me+1;Me<le;Me++,ye++,ne++)ye===le&&(ye=0),ne===le&&(ne=0),I[Me]=H(D[Me],D[ye],D[ne]);Z.push(I),W=W.concat(I)}for(let q=0;q<p;q++){const ce=q/p,D=d*Math.cos(ce*Math.PI/2),Me=g*Math.sin(ce*Math.PI/2)+_;for(let le=0,ye=F.length;le<ye;le++){const ne=z(F[le],K[le],Me);X(ne.x,ne.y,-D)}for(let le=0,ye=U.length;le<ye;le++){const ne=U[le];I=Z[le];for(let Te=0,ue=ne.length;Te<ue;Te++){const w=z(ne[Te],I[Te],Me);X(w.x,w.y,-D)}}}const ee=g+_;for(let q=0;q<O;q++){const ce=f?z(S[q],W[q],ee):S[q];v?(T.copy(E.normals[0]).multiplyScalar(ce.x),A.copy(E.binormals[0]).multiplyScalar(ce.y),C.copy(x[0]).add(T).add(A),X(C.x,C.y,C.z)):X(ce.x,ce.y,0)}for(let q=1;q<=u;q++)for(let ce=0;ce<O;ce++){const D=f?z(S[ce],W[ce],ee):S[ce];v?(T.copy(E.normals[q]).multiplyScalar(D.x),A.copy(E.binormals[q]).multiplyScalar(D.y),C.copy(x[q]).add(T).add(A),X(C.x,C.y,C.z)):X(D.x,D.y,h/u*q)}for(let q=p-1;q>=0;q--){const ce=q/p,D=d*Math.cos(ce*Math.PI/2),Me=g*Math.sin(ce*Math.PI/2)+_;for(let le=0,ye=F.length;le<ye;le++){const ne=z(F[le],K[le],Me);X(ne.x,ne.y,h+D)}for(let le=0,ye=U.length;le<ye;le++){const ne=U[le];I=Z[le];for(let Te=0,ue=ne.length;Te<ue;Te++){const w=z(ne[Te],I[Te],Me);v?X(w.x,w.y+x[u-1].y,x[u-1].x+D):X(w.x,w.y,h+D)}}}N(),k();function N(){const q=n.length/3;if(f){let ce=0,D=O*ce;for(let Me=0;Me<j;Me++){const le=L[Me];se(le[2]+D,le[1]+D,le[0]+D)}ce=u+p*2,D=O*ce;for(let Me=0;Me<j;Me++){const le=L[Me];se(le[0]+D,le[1]+D,le[2]+D)}}else{for(let ce=0;ce<j;ce++){const D=L[ce];se(D[2],D[1],D[0])}for(let ce=0;ce<j;ce++){const D=L[ce];se(D[0]+O*u,D[1]+O*u,D[2]+O*u)}}i.addGroup(q,n.length/3-q,0)}function k(){const q=n.length/3;let ce=0;ie(F,ce),ce+=F.length;for(let D=0,Me=U.length;D<Me;D++){const le=U[D];ie(le,ce),ce+=le.length}i.addGroup(q,n.length/3-q,1)}function ie(q,ce){let D=q.length;for(;--D>=0;){const Me=D;let le=D-1;le<0&&(le=q.length-1);for(let ye=0,ne=u+p*2;ye<ne;ye++){const Te=O*ye,ue=O*(ye+1),w=ce+Me+Te,b=ce+le+Te,B=ce+le+ue,$=ce+Me+ue;Ee(w,b,B,$)}}}function X(q,ce,D){l.push(q),l.push(ce),l.push(D)}function se(q,ce,D){ge(q),ge(ce),ge(D);const Me=n.length/3,le=M.generateTopUV(i,n,Me-3,Me-2,Me-1);xe(le[0]),xe(le[1]),xe(le[2])}function Ee(q,ce,D,Me){ge(q),ge(ce),ge(Me),ge(ce),ge(D),ge(Me);const le=n.length/3,ye=M.generateSideWallUV(i,n,le-6,le-3,le-2,le-1);xe(ye[0]),xe(ye[1]),xe(ye[3]),xe(ye[1]),xe(ye[2]),xe(ye[3])}function ge(q){n.push(l[q*3+0]),n.push(l[q*3+1]),n.push(l[q*3+2])}function xe(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return tg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Nc[n.type]().fromJSON(n)),new Uo(i,e.options)}}const eg={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],u=e[n*3+1];return[new Pe(r,a),new Pe(o,l),new Pe(c,u)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Pe(a,1-l),new Pe(c,1-h),new Pe(f,1-g),new Pe(_,1-m)]:[new Pe(o,1-l),new Pe(u,1-h),new Pe(d,1-g),new Pe(p,1-m)]}};function tg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class si extends Rn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*f-a;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const x=M+c*m,v=M+c*(m+1),E=M+1+c*(m+1),A=M+1+c*m;d.push(x,v,A),d.push(v,E,A)}this.setIndex(d),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lo extends Rn{constructor(e=new Ms([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new bt(n,3)),this.setAttribute("normal",new bt(r,3)),this.setAttribute("uv",new bt(a,2));function c(u){const h=n.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;Bi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const M=g[p];Bi.isClockWise(M)===!0&&(g[p]=M.reverse())}const _=Bi.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){const M=d[p];n.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,m=_.length;p<m;p++){const M=_[p],x=M[0]+h,v=M[1]+h,E=M[2]+h;i.push(x,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ng(t,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const a=t[e.shapes[n]];i.push(a)}return new Lo(i,e.curveSegments)}}function ng(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}class yu extends Rn{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new Y,f=new Y,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const M=[],x=m/i;let v=0;m===0&&a===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const A=E/t;h.x=-e*Math.cos(n+A*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(n+A*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(A+v,1-x),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const x=u[m][M+1],v=u[m][M],E=u[m+1][M],A=u[m+1][M+1];(m!==0||a>0)&&d.push(x,v,A),(m!==i-1||l<Math.PI)&&d.push(v,E,A)}this.setIndex(d),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Su extends Rn{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],u=new Y,h=new Y,f=new Y;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){const _=g/n*r,p=d/i*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){const _=(n+1)*d+g-1,p=(n+1)*(d-1)+g-1,m=(n+1)*(d-1)+g,M=(n+1)*d+g;a.push(_,p,M),a.push(p,m,M)}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mu extends ga{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ts extends Mu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ud extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tu extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Dl=new pt,kh=new Y,zh=new Y;class Fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _u,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gh=new pt,Hs=new Y,Ul=new Y;class ig extends Fd{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Ul.copy(i.position),Ul.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ul),i.updateMatrixWorld(),n.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class Id extends Tu{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nd extends Sd{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rg extends Fd{constructor(){super(new Nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ag extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class og extends Rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class lg extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class cg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(){return performance.now()}const Hh=new pt;class ug{constructor(e,t,i=0,n=1/0){this.ray=new md(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return kc(e,this,i,t),i.sort(Wh),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)kc(e[n],this,i,t);return i.sort(Wh),i}}function Wh(s,e){return s.distance-e.distance}function kc(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)kc(r[a],e,t,!0)}}function Xh(s,e,t,i){const n=hg(i);switch(t){case id:return s*e;case sd:return s*e;case ad:return s*e*2;case od:return s*e/n.components*n.byteLength;case uu:return s*e/n.components*n.byteLength;case ld:return s*e*2/n.components*n.byteLength;case hu:return s*e*2/n.components*n.byteLength;case rd:return s*e*3/n.components*n.byteLength;case Yn:return s*e*4/n.components*n.byteLength;case fu:return s*e*4/n.components*n.byteLength;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(s,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(s,8)*Math.max(e,8)/2;case dc:case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ro:case Pc:case Dc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cd:case Uc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Lc:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hg(s){switch(s){case yi:case ed:return{byteLength:1,components:1};case ra:case td:case ma:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case xr:case ou:case _i:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Od(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function fg(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ag=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ng=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:dg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:_g,alphatest_fragment:gg,alphatest_pars_fragment:vg,aomap_fragment:xg,aomap_pars_fragment:yg,batching_pars_vertex:Sg,batching_vertex:Mg,begin_vertex:Tg,beginnormal_vertex:Eg,bsdfs:bg,iridescence_fragment:wg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Dg,color_fragment:Ug,color_pars_fragment:Lg,color_pars_vertex:Fg,color_vertex:Ig,common:Ng,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:kg,displacementmap_vertex:zg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Vg,colorspace_fragment:Hg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:Yg,envmap_pars_fragment:qg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:s0,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:Kg,fog_fragment:Qg,fog_pars_fragment:$g,gradientmap_pars_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:r0,lights_toon_fragment:a0,lights_toon_pars_fragment:o0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:u0,lights_physical_pars_fragment:h0,lights_fragment_begin:f0,lights_fragment_maps:d0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:v0,map_fragment:x0,map_pars_fragment:y0,map_particle_fragment:S0,map_particle_pars_fragment:M0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:E0,morphinstance_vertex:b0,morphcolor_vertex:w0,morphnormal_vertex:A0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:D0,normal_pars_fragment:U0,normal_pars_vertex:L0,normal_vertex:F0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:k0,opaque_fragment:z0,packing:G0,premultiplied_alpha_fragment:V0,project_vertex:H0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:K0,skinbase_vertex:Q0,skinning_pars_vertex:$0,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:av,transmission_pars_fragment:ov,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,worldpos_vertex:hv,background_vert:fv,background_frag:dv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:_v,cube_frag:gv,depth_vert:vv,depth_frag:xv,distanceRGBA_vert:yv,distanceRGBA_frag:Sv,equirect_vert:Mv,equirect_frag:Tv,linedashed_vert:Ev,linedashed_frag:bv,meshbasic_vert:wv,meshbasic_frag:Av,meshlambert_vert:Cv,meshlambert_frag:Rv,meshmatcap_vert:Pv,meshmatcap_frag:Dv,meshnormal_vert:Uv,meshnormal_frag:Lv,meshphong_vert:Fv,meshphong_frag:Iv,meshphysical_vert:Nv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:kv,points_vert:zv,points_frag:Gv,shadow_vert:Vv,shadow_frag:Hv,sprite_vert:Wv,sprite_frag:Xv},Ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},$n={basic:{uniforms:Qt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Qt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Qt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Qt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Qt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Qt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Qt([Ue.points,Ue.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Qt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Qt([Ue.common,Ue.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Qt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Qt([Ue.sprite,Ue.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Qt([Ue.common,Ue.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Qt([Ue.lights,Ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};$n.physical={uniforms:Qt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const qa={r:0,b:0,g:0},er=new ni,Yv=new pt;function qv(s,e,t,i,n,r,a){const o=new Ze(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const E=g(x);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Co)?(u===void 0&&(u=new st(new On(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:us($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),er.copy(v.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(er)),u.material.toneMapped=nt.getTransfer(E.colorSpace)!==at,(h!==E||f!==E.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new st(new si(2,2),new Hi({name:"BackgroundMaterial",uniforms:us($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(qa,xd(s)),i.buffers.color.setClear(qa.r,qa.g,qa.b,v,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:p,dispose:M}}function jv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,a=!1;function o(S,U,P,L,F){let z=!1;const O=h(L,P,U);r!==O&&(r=O,c(r.object)),z=d(S,L,P,F),z&&g(S,L,P,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(S,U,P,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,U,P){const L=P.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let z=F[U.id];z===void 0&&(z={},F[U.id]=z);let O=z[L];return O===void 0&&(O=f(l()),z[L]=O),O}function f(S){const U=[],P=[],L=[];for(let F=0;F<t;F++)U[F]=0,P[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:L,object:S,attributes:{},index:null}}function d(S,U,P,L){const F=r.attributes,z=U.attributes;let O=0;const j=P.getAttributes();for(const H in j)if(j[H].location>=0){const Z=F[H];let I=z[H];if(I===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(I=S.instanceColor)),Z===void 0||Z.attribute!==I||I&&Z.data!==I.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function g(S,U,P,L){const F={},z=U.attributes;let O=0;const j=P.getAttributes();for(const H in j)if(j[H].location>=0){let Z=z[H];Z===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const I={};I.attribute=Z,Z&&Z.data&&(I.data=Z.data),F[H]=I,O++}r.attributes=F,r.attributesNum=O,r.index=L}function _(){const S=r.newAttributes;for(let U=0,P=S.length;U<P;U++)S[U]=0}function p(S){m(S,0)}function m(S,U){const P=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;P[S]=1,L[S]===0&&(s.enableVertexAttribArray(S),L[S]=1),F[S]!==U&&(s.vertexAttribDivisor(S,U),F[S]=U)}function M(){const S=r.newAttributes,U=r.enabledAttributes;for(let P=0,L=U.length;P<L;P++)U[P]!==S[P]&&(s.disableVertexAttribArray(P),U[P]=0)}function x(S,U,P,L,F,z,O){O===!0?s.vertexAttribIPointer(S,U,P,F,z):s.vertexAttribPointer(S,U,P,L,F,z)}function v(S,U,P,L){_();const F=L.attributes,z=P.getAttributes(),O=U.defaultAttributeValues;for(const j in z){const H=z[j];if(H.location>=0){let K=F[j];if(K===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Z=K.normalized,I=K.itemSize,W=e.get(K);if(W===void 0)continue;const ee=W.buffer,N=W.type,k=W.bytesPerElement,ie=N===s.INT||N===s.UNSIGNED_INT||K.gpuType===ou;if(K.isInterleavedBufferAttribute){const X=K.data,se=X.stride,Ee=K.offset;if(X.isInstancedInterleavedBuffer){for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge,X.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ge=0;ge<H.locationSize;ge++)p(H.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ge=0;ge<H.locationSize;ge++)x(H.location+ge,I/H.locationSize,N,Z,se*k,(Ee+I/H.locationSize*ge)*k,ie)}else{if(K.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)m(H.location+X,K.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let X=0;X<H.locationSize;X++)p(H.location+X);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let X=0;X<H.locationSize;X++)x(H.location+X,I/H.locationSize,N,Z,I*k,I/H.locationSize*X*k,ie)}}else if(O!==void 0){const Z=O[j];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(H.location,Z);break;case 3:s.vertexAttrib3fv(H.location,Z);break;case 4:s.vertexAttrib4fv(H.location,Z);break;default:s.vertexAttrib1fv(H.location,Z)}}}}M()}function E(){C();for(const S in i){const U=i[S];for(const P in U){const L=U[P];for(const F in L)u(L[F].object),delete L[F];delete U[P]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const U=i[S.id];for(const P in U){const L=U[P];for(const F in L)u(L[F].object),delete L[F];delete U[P]}delete i[S.id]}function T(S){for(const U in i){const P=i[U];if(P[S.id]===void 0)continue;const L=P[S.id];for(const F in L)u(L[F].object),delete L[F];delete P[S.id]}}function C(){y(),a=!0,r!==n&&(r=n,c(r.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Zv(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jv(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==Yn&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==_i&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function Kv(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new ar,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!n||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,x=M*4;let v=m.clippingState||null;l.value=v,v=u(g,f,x,d);for(let E=0;E!==x;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Qv(s){let e=new WeakMap;function t(a,o){return o===ac?a.mapping=ss:o===oc&&(a.mapping=as),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ac||o===oc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new v_(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const jr=4,Yh=[.125,.215,.35,.446,.526,.582],ur=20,Ll=new Nd,qh=new Ze;let Fl=null,Il=0,Nl=0,Ol=!1;const or=(1+Math.sqrt(5))/2,Wr=1/or,jh=[new Y(-or,Wr,0),new Y(or,Wr,0),new Y(-Wr,0,or),new Y(Wr,0,or),new Y(0,or,-Wr),new Y(0,or,Wr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],$v=new Y;class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:o=$v}=r;Fl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Il,Nl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ma,format:Yn,colorSpace:cs,depthBuffer:!1},n=Jh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ex(r)),this._blurMaterial=tx(r,e,t)}return n}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Ll)}_sceneToCubeUV(e,t,i,n,r){const l=new Sn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(qh),h.toneMapping=Oi,h.autoClear=!1;const g=new Po({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new st(new On,g);let p=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,p=!0):(g.color.copy(qh),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const v=this._cubeSize;ja(n,x*v,M>2?v:0,v,v),h.setRenderTarget(n),p&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===ss||e.mapping===as;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jh[(n-r-1)%jh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new st(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ur-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ur;p>ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ur}`);const m=[];let M=0;for(let T=0;T<ur;++T){const C=T/_,y=Math.exp(-C*C/2);m.push(y),T===0?M+=y:T<p&&(M+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[n],E=3*v*(n>x-jr?n-x+jr:0),A=4*(this._cubeSize-v);ja(t,E,A,3*v,2*v),l.setRenderTarget(t),l.render(h,Ll)}}function ex(s){const e=[],t=[],i=[];let n=s;const r=s-jr+1+Yh.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-jr?l=Yh[a-s+jr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),x=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(y,_*g*A),x.set(f,p*g*A);const S=[A,A,A,A,A,A];v.set(S,m*g*A)}const E=new Rn;E.setAttribute("position",new jn(M,_)),E.setAttribute("uv",new jn(x,p)),E.setAttribute("faceIndex",new jn(v,m)),e.push(E),n>jr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jh(s,e,t){const i=new yr(s,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function tx(s,e,t){const i=new Float32Array(ur),n=new Y(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Kh(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Qh(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nx(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ac||l===oc,u=l===ss||l===as;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zh(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Zh(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ix(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function rx(s,e,t,i){const n={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const E=M[x+0],A=M[x+1],T=M[x+2];f.push(E,A,A,T,T,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const E=x+0,A=x+1,T=x+2;f.push(E,A,A,T,T,E)}}else return;const p=new(dd(f)?vd:gd)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sx(s,e,t){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*_[M];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ax(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function ox(s,e,t){const i=new WeakMap,n=new rt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let E=o.attributes.position.count*v,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*A*4*h),C=new pd(T,E,A,h);C.type=_i,C.needsUpdate=!0;const y=v*4;for(let U=0;U<h;U++){const P=m[U],L=M[U],F=x[U],z=E*A*4*U;for(let O=0;O<P.count;O++){const j=O*y;g===!0&&(n.fromBufferAttribute(P,O),T[z+j+0]=n.x,T[z+j+1]=n.y,T[z+j+2]=n.z,T[z+j+3]=0),_===!0&&(n.fromBufferAttribute(L,O),T[z+j+4]=n.x,T[z+j+5]=n.y,T[z+j+6]=n.z,T[z+j+7]=0),p===!0&&(n.fromBufferAttribute(F,O),T[z+j+8]=n.x,T[z+j+9]=n.y,T[z+j+10]=n.z,T[z+j+11]=F.itemSize===4?n.w:1)}}f={count:h,texture:C,size:new Pe(E,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function lx(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Bd=new jt,$h=new Ed(1,1),kd=new pd,zd=new n_,Gd=new Md,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function Es(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=ef[n];if(r===void 0&&(r=new Float32Array(n),ef[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Fo(s,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function cx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function dx(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;sf.set(i),s.uniformMatrix2fv(this.addr,!1,sf),Pt(t,i)}}function px(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;rf.set(i),s.uniformMatrix3fv(this.addr,!1,rf),Pt(t,i)}}function mx(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;nf.set(i),s.uniformMatrix4fv(this.addr,!1,nf),Pt(t,i)}}function _x(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function yx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Ex(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?($h.compareFunction=fd,r=$h):r=Bd,t.setTexture2D(e||r,n)}function bx(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||zd,n)}function wx(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Gd,n)}function Ax(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||kd,n)}function Cx(s){switch(s){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return _x;case 35667:case 35671:return gx;case 35668:case 35672:return vx;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return Sx;case 36295:return Mx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ax}}function Rx(s,e){s.uniform1fv(this.addr,e)}function Px(s,e){const t=Es(e,this.size,2);s.uniform2fv(this.addr,t)}function Dx(s,e){const t=Es(e,this.size,3);s.uniform3fv(this.addr,t)}function Ux(s,e){const t=Es(e,this.size,4);s.uniform4fv(this.addr,t)}function Lx(s,e){const t=Es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Fx(s,e){const t=Es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ix(s,e){const t=Es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nx(s,e){s.uniform1iv(this.addr,e)}function Ox(s,e){s.uniform2iv(this.addr,e)}function Bx(s,e){s.uniform3iv(this.addr,e)}function kx(s,e){s.uniform4iv(this.addr,e)}function zx(s,e){s.uniform1uiv(this.addr,e)}function Gx(s,e){s.uniform2uiv(this.addr,e)}function Vx(s,e){s.uniform3uiv(this.addr,e)}function Hx(s,e){s.uniform4uiv(this.addr,e)}function Wx(s,e,t){const i=this.cache,n=e.length,r=Fo(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Bd,r[a])}function Xx(s,e,t){const i=this.cache,n=e.length,r=Fo(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||zd,r[a])}function Yx(s,e,t){const i=this.cache,n=e.length,r=Fo(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Gd,r[a])}function qx(s,e,t){const i=this.cache,n=e.length,r=Fo(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||kd,r[a])}function jx(s){switch(s){case 5126:return Rx;case 35664:return Px;case 35665:return Dx;case 35666:return Ux;case 35674:return Lx;case 35675:return Fx;case 35676:return Ix;case 5124:case 35670:return Nx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return zx;case 36294:return Gx;case 36295:return Vx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jx(t.type)}}class Kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function af(s,e){s.seq.push(e),s.map[e.id]=e}function Qx(s,e,t){const i=s.name,n=i.length;for(Bl.lastIndex=0;;){const r=Bl.exec(i),a=Bl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){af(t,c===void 0?new Zx(o,s,e):new Jx(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Kx(o),af(t,h)),t=h}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);Qx(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function of(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const $x=37297;let ey=0;function ty(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const lf=new Ye;function ny(s){nt._getMatrix(lf,nt.workingColorSpace,s);const e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case fo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cf(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+ty(s.getShaderSource(e),a)}else return n}function iy(s,e){const t=ny(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ry(s,e){let t;switch(e){case Rm:t="Linear";break;case Pm:t="Reinhard";break;case Dm:t="Cineon";break;case Um:t="ACESFilmic";break;case Fm:t="AgX";break;case Im:t="Neutral";break;case Lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new Y;function sy(){nt.getLuminanceCoefficients(Za);const s=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ay(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function oy(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ly(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ys(s){return s!==""}function uf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(s){return s.replace(cy,hy)}const uy=new Map;function hy(s,e){let t=je[e];if(t===void 0){const i=uy.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(t)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(s){return s.replace(fy,dy)}function dy(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function df(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function my(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function gy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Am:e="ENVMAP_BLENDING_MIX";break;case Cm:e="ENVMAP_BLENDING_ADD";break}return e}function vy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xy(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=py(t),c=my(t),u=_y(t),h=gy(t),f=vy(t),d=ay(t),g=oy(r),_=n.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`)):(p=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?je.tonemapping_pars_fragment:"",t.toneMapping!==Oi?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=zc(a),a=uf(a,t),a=hf(a,t),o=zc(o),o=uf(o,t),o=hf(o,t),a=ff(a),o=ff(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+a,v=M+m+o,E=of(n,n.VERTEX_SHADER,x),A=of(n,n.FRAGMENT_SHADER,v);n.attachShader(_,E),n.attachShader(_,A),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(U){if(s.debug.checkShaderErrors){const P=n.getProgramInfoLog(_).trim(),L=n.getShaderInfoLog(E).trim(),F=n.getShaderInfoLog(A).trim();let z=!0,O=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,E,A);else{const j=cf(n,E,"vertex"),H=cf(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+j+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||F==="")&&(O=!1);O&&(U.diagnostics={runnable:z,programLog:P,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:m}})}n.deleteShader(E),n.deleteShader(A),C=new so(n,_),y=ly(n,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,$x)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let yy=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new My(e),t.set(e,i)),i}}class My{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}}function Ty(s,e,t,i,n,r,a){const o=new pu,l=new Sy,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,U,P,L){const F=P.fog,z=L.geometry,O=y.isMeshStandardMaterial?P.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),H=j&&j.mapping===Co?j.image.height:null,K=g[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,I=Z!==void 0?Z.length:0;let W=0;z.morphAttributes.position!==void 0&&(W=1),z.morphAttributes.normal!==void 0&&(W=2),z.morphAttributes.color!==void 0&&(W=3);let ee,N,k,ie;if(K){const Ve=$n[K];ee=Ve.vertexShader,N=Ve.fragmentShader}else ee=y.vertexShader,N=y.fragmentShader,l.update(y),k=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const X=s.getRenderTarget(),se=s.state.buffers.depth.getReversed(),Ee=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,xe=!!y.map,q=!!y.matcap,ce=!!j,D=!!y.aoMap,Me=!!y.lightMap,le=!!y.bumpMap,ye=!!y.normalMap,ne=!!y.displacementMap,Te=!!y.emissiveMap,ue=!!y.metalnessMap,w=!!y.roughnessMap,b=y.anisotropy>0,B=y.clearcoat>0,$=y.dispersion>0,te=y.iridescence>0,oe=y.sheen>0,pe=y.transmission>0,he=b&&!!y.anisotropyMap,ve=B&&!!y.clearcoatMap,Le=B&&!!y.clearcoatNormalMap,fe=B&&!!y.clearcoatRoughnessMap,we=te&&!!y.iridescenceMap,Ce=te&&!!y.iridescenceThicknessMap,Re=oe&&!!y.sheenColorMap,de=oe&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Oe=!!y.specularColorMap,qe=!!y.specularIntensityMap,G=pe&&!!y.transmissionMap,me=pe&&!!y.thicknessMap,re=!!y.gradientMap,_e=!!y.alphaMap,be=y.alphaTest>0,Se=!!y.alphaHash,Be=!!y.extensions;let Xe=Oi;y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const ke={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:N,defines:y.defines,customVertexShaderID:k,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&L.instanceColor!==null,instancingMorph:Ee&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?s.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:cs,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:q,envMap:ce,envMapMode:ce&&j.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Me,bumpMap:le,normalMap:ye,displacementMap:f&&ne,emissiveMap:Te,normalMapObjectSpace:ye&&y.normalMapType===Bm,normalMapTangentSpace:ye&&y.normalMapType===hd,metalnessMap:ue,roughnessMap:w,anisotropy:b,anisotropyMap:he,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:$,iridescence:te,iridescenceMap:we,iridescenceThicknessMap:Ce,sheen:oe,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:qe,transmission:pe,transmissionMap:G,thicknessMap:me,gradientMap:re,opaque:y.transparent===!1&&y.blending===Kr&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:be,alphaHash:Se,combine:y.combine,mapUv:xe&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:Me&&_(y.lightMap.channel),bumpMapUv:le&&_(y.bumpMap.channel),normalMapUv:ye&&_(y.normalMap.channel),displacementMapUv:ne&&_(y.displacementMap.channel),emissiveMapUv:Te&&_(y.emissiveMap.channel),metalnessMapUv:ue&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:he&&_(y.anisotropyMap.channel),clearcoatMapUv:ve&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(y.sheenRoughnessMap.channel),specularMapUv:Ie&&_(y.specularMap.channel),specularColorMapUv:Oe&&_(y.specularColorMap.channel),specularIntensityMapUv:qe&&_(y.specularIntensityMap.channel),transmissionMapUv:G&&_(y.transmissionMap.channel),thicknessMapUv:me&&_(y.thicknessMap.channel),alphaMapUv:_e&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ye||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(xe||_e),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:se,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Te&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)S.push(U),S.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(M(S,y),x(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const S=g[y.type];let U;if(S){const P=$n[S];U=yd.clone(P.uniforms)}else U=y.uniforms;return U}function E(y,S){let U;for(let P=0,L=u.length;P<L;P++){const F=u[P];if(F.cacheKey===S){U=F,++U.usedTimes;break}}return U===void 0&&(U=new xy(s,S,y,r),u.push(U)),U}function A(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:C}}function Ey(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function by(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mf(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||by),i.length>1&&i.sort(f||pf),n.length>1&&n.sort(f||pf)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function wy(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new mf,s.set(i,[a])):n>=r.length?(a=new mf,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ay(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ze};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function Cy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ry=0;function Py(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dy(s){const e=new Ay,t=Cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const n=new Y,r=new pt,a=new pt;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,x=0,v=0,E=0,A=0,T=0;c.sort(Py);for(let y=0,S=c.length;y<S;y++){const U=c[y],P=U.color,L=U.intensity,F=U.distance,z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=P.r*L,h+=P.g*L,f+=P.b*L;else if(U.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(U.sh.coefficients[O],L);T++}else if(U.isDirectionalLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,H=t.get(U);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=U.shadow.matrix,M++}i.directional[d]=O,d++}else if(U.isSpotLight){const O=e.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(P).multiplyScalar(L),O.distance=F,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,i.spot[_]=O;const j=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,j.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=j.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=z,v++}_++}else if(U.isRectAreaLight){const O=e.get(U);O.color.copy(P).multiplyScalar(L),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=O,p++}else if(U.isPointLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),O.distance=U.distance,O.decay=U.decay,U.castShadow){const j=U.shadow,H=t.get(U);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=U.shadow.matrix,x++}i.point[g]=O,g++}else if(U.isHemisphereLight){const O=e.get(U);O.skyColor.copy(U.color).multiplyScalar(L),O.groundColor.copy(U.groundColor).multiplyScalar(L),i.hemi[m]=O,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=T,i.version=Ry++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),h++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function _f(s){const e=new Dy(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Uy(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new _f(s),e.set(n,[o])):r>=a.length?(o=new _f(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iy(s,e,t){let i=new _u;const n=new Pe,r=new Pe,a=new rt,o=new Ud({depthPacking:ud}),l=new Ld,c={},u=t.maxTextureSize,h={[Vi]:ln,[ln]:Vi,[Mn]:Mn},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Ly,fragmentShader:Fy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let m=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),S=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Ni),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==di&&this.type===di,F=m===di&&this.type!==di;for(let z=0,O=A.length;z<O;z++){const j=A[z],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const K=H.getFrameExtents();if(n.multiply(K),r.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/K.x),n.x=r.x*K.x,H.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/K.y),n.y=r.y*K.y,H.mapSize.y=r.y)),H.map===null||L===!0||F===!0){const I=this.type!==di?{minFilter:qn,magFilter:qn}:{};H.map!==null&&H.map.dispose(),H.map=new yr(n.x,n.y,I),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Z=H.getViewportCount();for(let I=0;I<Z;I++){const W=H.getViewport(I);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),P.viewport(a),H.updateMatrices(j,I),i=H.getFrustum(),v(T,C,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===di&&M(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(y,S,U)};function M(A,T){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yr(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,C,d,_,null)}function x(A,T,C,y){let S=null;const U=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)S=U;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=S.uuid,L=T.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let z=F[L];z===void 0&&(z=S.clone(),F[L]=z,T.addEventListener("dispose",E)),S=z}if(S.visible=T.visible,S.wireframe=T.wireframe,y===di?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=s.properties.get(S);P.light=C}return S}function v(A,T,C,y,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const L=e.update(A),F=A.material;if(Array.isArray(F)){const z=L.groups;for(let O=0,j=z.length;O<j;O++){const H=z[O],K=F[H.materialIndex];if(K&&K.visible){const Z=x(A,K,y,S);A.onBeforeShadow(s,A,T,C,L,Z,H),s.renderBufferDirect(C,null,L,Z,A,H),A.onAfterShadow(s,A,T,C,L,Z,H)}}}else if(F.visible){const z=x(A,F,y,S);A.onBeforeShadow(s,A,T,C,L,z,null),s.renderBufferDirect(C,null,L,z,A,null),A.onAfterShadow(s,A,T,C,L,z,null)}}const P=A.children;for(let L=0,F=P.length;L<F;L++)v(P[L],T,C,y,S)}function E(A){A.target.removeEventListener("dispose",E);for(const C in c){const y=c[C],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Ny={[$l]:ec,[tc]:rc,[nc]:sc,[rs]:ic,[ec]:$l,[rc]:tc,[sc]:nc,[ic]:rs};function Oy(s,e){function t(){let G=!1;const me=new rt;let re=null;const _e=new rt(0,0,0,0);return{setMask:function(be){re!==be&&!G&&(s.colorMask(be,be,be,be),re=be)},setLocked:function(be){G=be},setClear:function(be,Se,Be,Xe,ke){ke===!0&&(be*=Xe,Se*=Xe,Be*=Xe),me.set(be,Se,Be,Xe),_e.equals(me)===!1&&(s.clearColor(be,Se,Be,Xe),_e.copy(me))},reset:function(){G=!1,re=null,_e.set(-1,0,0,0)}}}function i(){let G=!1,me=!1,re=null,_e=null,be=null;return{setReversed:function(Se){if(me!==Se){const Be=e.get("EXT_clip_control");me?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const Xe=be;be=null,this.setClear(Xe)}me=Se},getReversed:function(){return me},setTest:function(Se){Se?X(s.DEPTH_TEST):se(s.DEPTH_TEST)},setMask:function(Se){re!==Se&&!G&&(s.depthMask(Se),re=Se)},setFunc:function(Se){if(me&&(Se=Ny[Se]),_e!==Se){switch(Se){case $l:s.depthFunc(s.NEVER);break;case ec:s.depthFunc(s.ALWAYS);break;case tc:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case nc:s.depthFunc(s.EQUAL);break;case ic:s.depthFunc(s.GEQUAL);break;case rc:s.depthFunc(s.GREATER);break;case sc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Se}},setLocked:function(Se){G=Se},setClear:function(Se){be!==Se&&(me&&(Se=1-Se),s.clearDepth(Se),be=Se)},reset:function(){G=!1,re=null,_e=null,be=null,me=!1}}}function n(){let G=!1,me=null,re=null,_e=null,be=null,Se=null,Be=null,Xe=null,ke=null;return{setTest:function(Ve){G||(Ve?X(s.STENCIL_TEST):se(s.STENCIL_TEST))},setMask:function(Ve){me!==Ve&&!G&&(s.stencilMask(Ve),me=Ve)},setFunc:function(Ve,ot,ut){(re!==Ve||_e!==ot||be!==ut)&&(s.stencilFunc(Ve,ot,ut),re=Ve,_e=ot,be=ut)},setOp:function(Ve,ot,ut){(Se!==Ve||Be!==ot||Xe!==ut)&&(s.stencilOp(Ve,ot,ut),Se=Ve,Be=ot,Xe=ut)},setLocked:function(Ve){G=Ve},setClear:function(Ve){ke!==Ve&&(s.clearStencil(Ve),ke=Ve)},reset:function(){G=!1,me=null,re=null,_e=null,be=null,Se=null,Be=null,Xe=null,ke=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,x=null,v=null,E=null,A=null,T=new Ze(0,0,0),C=0,y=!1,S=null,U=null,P=null,L=null,F=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=j>=2);let K=null,Z={};const I=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),ee=new rt().fromArray(I),N=new rt().fromArray(W);function k(G,me,re,_e){const be=new Uint8Array(4),Se=s.createTexture();s.bindTexture(G,Se),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<re;Be++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(me+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Se}const ie={};ie[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(s.DEPTH_TEST),a.setFunc(rs),le(!1),ye(uh),X(s.CULL_FACE),D(Ni);function X(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function se(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function Ee(G,me){return h[G]!==me?(s.bindFramebuffer(G,me),h[G]=me,G===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=me),G===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=me),!0):!1}function ge(G,me){let re=d,_e=!1;if(G){re=f.get(me),re===void 0&&(re=[],f.set(me,re));const be=G.textures;if(re.length!==be.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Be=be.length;Se<Be;Se++)re[Se]=s.COLOR_ATTACHMENT0+Se;re.length=be.length,_e=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,_e=!0);_e&&s.drawBuffers(re)}function xe(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const q={[cr]:s.FUNC_ADD,[um]:s.FUNC_SUBTRACT,[hm]:s.FUNC_REVERSE_SUBTRACT};q[fm]=s.MIN,q[dm]=s.MAX;const ce={[pm]:s.ZERO,[mm]:s.ONE,[_m]:s.SRC_COLOR,[Kl]:s.SRC_ALPHA,[Mm]:s.SRC_ALPHA_SATURATE,[ym]:s.DST_COLOR,[vm]:s.DST_ALPHA,[gm]:s.ONE_MINUS_SRC_COLOR,[Ql]:s.ONE_MINUS_SRC_ALPHA,[Sm]:s.ONE_MINUS_DST_COLOR,[xm]:s.ONE_MINUS_DST_ALPHA,[Tm]:s.CONSTANT_COLOR,[Em]:s.ONE_MINUS_CONSTANT_COLOR,[bm]:s.CONSTANT_ALPHA,[wm]:s.ONE_MINUS_CONSTANT_ALPHA};function D(G,me,re,_e,be,Se,Be,Xe,ke,Ve){if(G===Ni){_===!0&&(se(s.BLEND),_=!1);return}if(_===!1&&(X(s.BLEND),_=!0),G!==cm){if(G!==p||Ve!==y){if((m!==cr||v!==cr)&&(s.blendEquation(s.FUNC_ADD),m=cr,v=cr),Ve)switch(G){case Kr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.ONE,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Kr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,x=null,E=null,A=null,T.set(0,0,0),C=0,p=G,y=Ve}return}be=be||me,Se=Se||re,Be=Be||_e,(me!==m||be!==v)&&(s.blendEquationSeparate(q[me],q[be]),m=me,v=be),(re!==M||_e!==x||Se!==E||Be!==A)&&(s.blendFuncSeparate(ce[re],ce[_e],ce[Se],ce[Be]),M=re,x=_e,E=Se,A=Be),(Xe.equals(T)===!1||ke!==C)&&(s.blendColor(Xe.r,Xe.g,Xe.b,ke),T.copy(Xe),C=ke),p=G,y=!1}function Me(G,me){G.side===Mn?se(s.CULL_FACE):X(s.CULL_FACE);let re=G.side===ln;me&&(re=!re),le(re),G.blending===Kr&&G.transparent===!1?D(Ni):D(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const _e=G.stencilWrite;o.setTest(_e),_e&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Te(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?X(s.SAMPLE_ALPHA_TO_COVERAGE):se(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(G){S!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),S=G)}function ye(G){G!==om?(X(s.CULL_FACE),G!==U&&(G===uh?s.cullFace(s.BACK):G===lm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):se(s.CULL_FACE),U=G}function ne(G){G!==P&&(O&&s.lineWidth(G),P=G)}function Te(G,me,re){G?(X(s.POLYGON_OFFSET_FILL),(L!==me||F!==re)&&(s.polygonOffset(me,re),L=me,F=re)):se(s.POLYGON_OFFSET_FILL)}function ue(G){G?X(s.SCISSOR_TEST):se(s.SCISSOR_TEST)}function w(G){G===void 0&&(G=s.TEXTURE0+z-1),K!==G&&(s.activeTexture(G),K=G)}function b(G,me,re){re===void 0&&(K===null?re=s.TEXTURE0+z-1:re=K);let _e=Z[re];_e===void 0&&(_e={type:void 0,texture:void 0},Z[re]=_e),(_e.type!==G||_e.texture!==me)&&(K!==re&&(s.activeTexture(re),K=re),s.bindTexture(G,me||ie[G]),_e.type=G,_e.texture=me)}function B(){const G=Z[K];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(G){ee.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ee.copy(G))}function de(G){N.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),N.copy(G))}function Ie(G,me){let re=c.get(me);re===void 0&&(re=new WeakMap,c.set(me,re));let _e=re.get(G);_e===void 0&&(_e=s.getUniformBlockIndex(me,G.name),re.set(G,_e))}function Oe(G,me){const _e=c.get(me).get(G);l.get(me)!==_e&&(s.uniformBlockBinding(me,_e,G.__bindingPointIndex),l.set(me,_e))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},K=null,Z={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,x=null,v=null,E=null,A=null,T=new Ze(0,0,0),C=0,y=!1,S=null,U=null,P=null,L=null,F=null,ee.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:se,bindFramebuffer:Ee,drawBuffers:ge,useProgram:xe,setBlending:D,setMaterial:Me,setFlipSided:le,setCullFace:ye,setLineWidth:ne,setPolygonOffset:Te,setScissorTest:ue,activeTexture:w,bindTexture:b,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:we,texImage3D:Ce,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:fe,texSubImage2D:oe,texSubImage3D:pe,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Re,viewport:de,reset:qe}}function By(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return d?new OffscreenCanvas(w,b):mo("canvas")}function _(w,b,B){let $=1;const te=ue(w);if((te.width>B||te.height>B)&&($=B/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor($*te.width),pe=Math.floor($*te.height);h===void 0&&(h=g(oe,pe));const he=b?g(oe,pe):h;return he.width=oe,he.height=pe,he.getContext("2d").drawImage(w,0,0,oe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+pe+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){s.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(w,b,B,$,te=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe=b;if(b===s.RED&&(B===s.FLOAT&&(oe=s.R32F),B===s.HALF_FLOAT&&(oe=s.R16F),B===s.UNSIGNED_BYTE&&(oe=s.R8)),b===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(oe=s.R8UI),B===s.UNSIGNED_SHORT&&(oe=s.R16UI),B===s.UNSIGNED_INT&&(oe=s.R32UI),B===s.BYTE&&(oe=s.R8I),B===s.SHORT&&(oe=s.R16I),B===s.INT&&(oe=s.R32I)),b===s.RG&&(B===s.FLOAT&&(oe=s.RG32F),B===s.HALF_FLOAT&&(oe=s.RG16F),B===s.UNSIGNED_BYTE&&(oe=s.RG8)),b===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(oe=s.RG8UI),B===s.UNSIGNED_SHORT&&(oe=s.RG16UI),B===s.UNSIGNED_INT&&(oe=s.RG32UI),B===s.BYTE&&(oe=s.RG8I),B===s.SHORT&&(oe=s.RG16I),B===s.INT&&(oe=s.RG32I)),b===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),B===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),B===s.UNSIGNED_INT&&(oe=s.RGB32UI),B===s.BYTE&&(oe=s.RGB8I),B===s.SHORT&&(oe=s.RGB16I),B===s.INT&&(oe=s.RGB32I)),b===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),B===s.UNSIGNED_INT&&(oe=s.RGBA32UI),B===s.BYTE&&(oe=s.RGBA8I),B===s.SHORT&&(oe=s.RGBA16I),B===s.INT&&(oe=s.RGBA32I)),b===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),b===s.RGBA){const pe=te?fo:nt.getTransfer($);B===s.FLOAT&&(oe=s.RGBA32F),B===s.HALF_FLOAT&&(oe=s.RGBA16F),B===s.UNSIGNED_BYTE&&(oe=pe===at?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(w,b){let B;return w?b===null||b===xr||b===os?B=s.DEPTH24_STENCIL8:b===_i?B=s.DEPTH32F_STENCIL8:b===ra&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xr||b===os?B=s.DEPTH_COMPONENT24:b===_i?B=s.DEPTH_COMPONENT32F:b===ra&&(B=s.DEPTH_COMPONENT16),B}function E(w,b){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==qn&&w.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function A(w){const b=w.target;b.removeEventListener("dispose",A),C(b),b.isVideoTexture&&u.delete(b)}function T(w){const b=w.target;b.removeEventListener("dispose",T),S(b)}function C(w){const b=i.get(w);if(b.__webglInit===void 0)return;const B=w.source,$=f.get(B);if($){const te=$[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(w),Object.keys($).length===0&&f.delete(B)}i.remove(w)}function y(w){const b=i.get(w);s.deleteTexture(b.__webglTexture);const B=w.source,$=f.get(B);delete $[b.__cacheKey],a.memory.textures--}function S(w){const b=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let te=0;te<b.__webglFramebuffer[$].length;te++)s.deleteFramebuffer(b.__webglFramebuffer[$][te]);else s.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)s.deleteFramebuffer(b.__webglFramebuffer[$]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=w.textures;for(let $=0,te=B.length;$<te;$++){const oe=i.get(B[$]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(B[$])}i.remove(w)}let U=0;function P(){U=0}function L(){const w=U;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),U+=1,w}function F(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function z(w,b){const B=i.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(B,w,b);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+b)}function O(w,b){const B=i.get(w);if(w.version>0&&B.__version!==w.version){N(B,w,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+b)}function j(w,b){const B=i.get(w);if(w.version>0&&B.__version!==w.version){N(B,w,b);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+b)}function H(w,b){const B=i.get(w);if(w.version>0&&B.__version!==w.version){k(B,w,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+b)}const K={[ia]:s.REPEAT,[hr]:s.CLAMP_TO_EDGE,[lc]:s.MIRRORED_REPEAT},Z={[qn]:s.NEAREST,[Nm]:s.NEAREST_MIPMAP_NEAREST,[wa]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[rl]:s.LINEAR_MIPMAP_NEAREST,[fr]:s.LINEAR_MIPMAP_LINEAR},I={[km]:s.NEVER,[Xm]:s.ALWAYS,[zm]:s.LESS,[fd]:s.LEQUAL,[Gm]:s.EQUAL,[Wm]:s.GEQUAL,[Vm]:s.GREATER,[Hm]:s.NOTEQUAL};function W(w,b){if(b.type===_i&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===rl||b.magFilter===wa||b.magFilter===fr||b.minFilter===Fn||b.minFilter===rl||b.minFilter===wa||b.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,K[b.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,K[b.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,K[b.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Z[b.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qn||b.minFilter!==wa&&b.minFilter!==fr||b.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ee(w,b){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",A));const $=b.source;let te=f.get($);te===void 0&&(te={},f.set($,te));const oe=F(b);if(oe!==w.__cacheKey){te[oe]===void 0&&(te[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[oe].usedTimes++;const pe=te[w.__cacheKey];pe!==void 0&&(te[w.__cacheKey].usedTimes--,pe.usedTimes===0&&y(b)),w.__cacheKey=oe,w.__webglTexture=te[oe].texture}return B}function N(w,b,B){let $=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=s.TEXTURE_3D);const te=ee(w,b),oe=b.source;t.bindTexture($,w.__webglTexture,s.TEXTURE0+B);const pe=i.get(oe);if(oe.version!==pe.__version||te===!0){t.activeTexture(s.TEXTURE0+B);const he=nt.getPrimaries(nt.workingColorSpace),ve=b.colorSpace===Ui?null:nt.getPrimaries(b.colorSpace),Le=b.colorSpace===Ui||he===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let fe=_(b.image,!1,n.maxTextureSize);fe=Te(b,fe);const we=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type);let Re=x(b.internalFormat,we,Ce,b.colorSpace,b.isVideoTexture);W($,b);let de;const Ie=b.mipmaps,Oe=b.isVideoTexture!==!0,qe=pe.__version===void 0||te===!0,G=oe.dataReady,me=E(b,fe);if(b.isDepthTexture)Re=v(b.format===ls,b.type),qe&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Re,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Re,fe.width,fe.height,0,we,Ce,null));else if(b.isDataTexture)if(Ie.length>0){Oe&&qe&&t.texStorage2D(s.TEXTURE_2D,me,Re,Ie[0].width,Ie[0].height);for(let re=0,_e=Ie.length;re<_e;re++)de=Ie[re],Oe?G&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,de.width,de.height,we,Ce,de.data):t.texImage2D(s.TEXTURE_2D,re,Re,de.width,de.height,0,we,Ce,de.data);b.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(s.TEXTURE_2D,me,Re,fe.width,fe.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,we,Ce,fe.data)):t.texImage2D(s.TEXTURE_2D,0,Re,fe.width,fe.height,0,we,Ce,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Re,Ie[0].width,Ie[0].height,fe.depth);for(let re=0,_e=Ie.length;re<_e;re++)if(de=Ie[re],b.format!==Yn)if(we!==null)if(Oe){if(G)if(b.layerUpdates.size>0){const be=Xh(de.width,de.height,b.format,b.type);for(const Se of b.layerUpdates){const Be=de.data.subarray(Se*be/de.data.BYTES_PER_ELEMENT,(Se+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Se,de.width,de.height,1,we,Be)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,fe.depth,we,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Re,de.width,de.height,fe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,fe.depth,we,Ce,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Re,de.width,de.height,fe.depth,0,we,Ce,de.data)}else{Oe&&qe&&t.texStorage2D(s.TEXTURE_2D,me,Re,Ie[0].width,Ie[0].height);for(let re=0,_e=Ie.length;re<_e;re++)de=Ie[re],b.format!==Yn?we!==null?Oe?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,de.width,de.height,we,de.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?G&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,de.width,de.height,we,Ce,de.data):t.texImage2D(s.TEXTURE_2D,re,Re,de.width,de.height,0,we,Ce,de.data)}else if(b.isDataArrayTexture)if(Oe){if(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Re,fe.width,fe.height,fe.depth),G)if(b.layerUpdates.size>0){const re=Xh(fe.width,fe.height,b.format,b.type);for(const _e of b.layerUpdates){const be=fe.data.subarray(_e*re/fe.data.BYTES_PER_ELEMENT,(_e+1)*re/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,fe.width,fe.height,1,we,Ce,be)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Ce,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,fe.width,fe.height,fe.depth,0,we,Ce,fe.data);else if(b.isData3DTexture)Oe?(qe&&t.texStorage3D(s.TEXTURE_3D,me,Re,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Ce,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Re,fe.width,fe.height,fe.depth,0,we,Ce,fe.data);else if(b.isFramebufferTexture){if(qe)if(Oe)t.texStorage2D(s.TEXTURE_2D,me,Re,fe.width,fe.height);else{let re=fe.width,_e=fe.height;for(let be=0;be<me;be++)t.texImage2D(s.TEXTURE_2D,be,Re,re,_e,0,we,Ce,null),re>>=1,_e>>=1}}else if(Ie.length>0){if(Oe&&qe){const re=ue(Ie[0]);t.texStorage2D(s.TEXTURE_2D,me,Re,re.width,re.height)}for(let re=0,_e=Ie.length;re<_e;re++)de=Ie[re],Oe?G&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,we,Ce,de):t.texImage2D(s.TEXTURE_2D,re,Re,we,Ce,de);b.generateMipmaps=!1}else if(Oe){if(qe){const re=ue(fe);t.texStorage2D(s.TEXTURE_2D,me,Re,re.width,re.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ce,fe)}else t.texImage2D(s.TEXTURE_2D,0,Re,we,Ce,fe);p(b)&&m($),pe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function k(w,b,B){if(b.image.length!==6)return;const $=ee(w,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const oe=i.get(te);if(te.version!==oe.__version||$===!0){t.activeTexture(s.TEXTURE0+B);const pe=nt.getPrimaries(nt.workingColorSpace),he=b.colorSpace===Ui?null:nt.getPrimaries(b.colorSpace),ve=b.colorSpace===Ui||pe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,we=[];for(let _e=0;_e<6;_e++)!Le&&!fe?we[_e]=_(b.image[_e],!0,n.maxCubemapSize):we[_e]=fe?b.image[_e].image:b.image[_e],we[_e]=Te(b,we[_e]);const Ce=we[0],Re=r.convert(b.format,b.colorSpace),de=r.convert(b.type),Ie=x(b.internalFormat,Re,de,b.colorSpace),Oe=b.isVideoTexture!==!0,qe=oe.__version===void 0||$===!0,G=te.dataReady;let me=E(b,Ce);W(s.TEXTURE_CUBE_MAP,b);let re;if(Le){Oe&&qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ie,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){re=we[_e].mipmaps;for(let be=0;be<re.length;be++){const Se=re[be];b.format!==Yn?Re!==null?Oe?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,0,0,Se.width,Se.height,Re,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,0,0,Se.width,Se.height,Re,de,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be,Ie,Se.width,Se.height,0,Re,de,Se.data)}}}else{if(re=b.mipmaps,Oe&&qe){re.length>0&&me++;const _e=ue(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ie,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(fe){Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,we[_e].width,we[_e].height,Re,de,we[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,we[_e].width,we[_e].height,0,Re,de,we[_e].data);for(let be=0;be<re.length;be++){const Be=re[be].image[_e].image;Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,0,0,Be.width,Be.height,Re,de,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,Ie,Be.width,Be.height,0,Re,de,Be.data)}}else{Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re,de,we[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,Re,de,we[_e]);for(let be=0;be<re.length;be++){const Se=re[be];Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,0,0,Re,de,Se.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be+1,Ie,Re,de,Se.image[_e])}}}p(b)&&m(s.TEXTURE_CUBE_MAP),oe.__version=te.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ie(w,b,B,$,te,oe){const pe=r.convert(B.format,B.colorSpace),he=r.convert(B.type),ve=x(B.internalFormat,pe,he,B.colorSpace),Le=i.get(b),fe=i.get(B);if(fe.__renderTarget=b,!Le.__hasExternalTextures){const we=Math.max(1,b.width>>oe),Ce=Math.max(1,b.height>>oe);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,ve,we,Ce,b.depth,0,pe,he,null):t.texImage2D(te,oe,ve,we,Ce,0,pe,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ye(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,te,fe.__webglTexture,0,le(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,te,fe.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function X(w,b,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),b.depthBuffer){const $=b.depthTexture,te=$&&$.isDepthTexture?$.type:null,oe=v(b.stencilBuffer,te),pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=le(b);ye(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,oe,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,w)}else{const $=b.textures;for(let te=0;te<$.length;te++){const oe=$[te],pe=r.convert(oe.format,oe.colorSpace),he=r.convert(oe.type),ve=x(oe.internalFormat,pe,he,oe.colorSpace),Le=le(b);B&&ye(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ve,b.width,b.height):ye(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function se(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const te=$.__webglTexture,oe=le(b);if(b.depthTexture.format===Qr)ye(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(b.depthTexture.format===ls)ye(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const b=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=$}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");se(b.__webglFramebuffer,w)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=s.createRenderbuffer(),X(b.__webglDepthbuffer[$],w,!1);else{const te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),X(b.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(w,b,B){const $=i.get(w);b!==void 0&&ie($.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ee(w)}function xe(w){const b=w.texture,B=i.get(w),$=i.get(b);w.addEventListener("dispose",T);const te=w.textures,oe=w.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=b.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let ve=0;ve<b.mipmaps.length;ve++)B.__webglFramebuffer[he][ve]=s.createFramebuffer()}else B.__webglFramebuffer[he]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)B.__webglFramebuffer[he]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(pe)for(let he=0,ve=te.length;he<ve;he++){const Le=i.get(te[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const ve=te[he];B.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Le=r.convert(ve.format,ve.colorSpace),fe=r.convert(ve.type),we=x(ve.internalFormat,Le,fe,ve.colorSpace,w.isXRRenderTarget===!0),Ce=le(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,we,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,B.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),X(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),W(s.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)ie(B.__webglFramebuffer[he][ve],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ie(B.__webglFramebuffer[he],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let he=0,ve=te.length;he<ve;he++){const Le=te[he],fe=i.get(Le);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),W(s.TEXTURE_2D,Le),ie(B.__webglFramebuffer,w,Le,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),p(Le)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),W(he,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)ie(B.__webglFramebuffer[ve],w,b,s.COLOR_ATTACHMENT0,he,ve);else ie(B.__webglFramebuffer,w,b,s.COLOR_ATTACHMENT0,he,0);p(b)&&m(he),t.unbindTexture()}w.depthBuffer&&Ee(w)}function q(w){const b=w.textures;for(let B=0,$=b.length;B<$;B++){const te=b[B];if(p(te)){const oe=M(w),pe=i.get(te).__webglTexture;t.bindTexture(oe,pe),m(oe),t.unbindTexture()}}}const ce=[],D=[];function Me(w){if(w.samples>0){if(ye(w)===!1){const b=w.textures,B=w.width,$=w.height;let te=s.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=i.get(w),he=b.length>1;if(he)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Le=i.get(b[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,te,s.NEAREST),l===!0&&(ce.length=0,D.length=0,ce.push(s.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ce.push(oe),D.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Le=i.get(b[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const b=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function le(w){return Math.min(n.maxSamples,w.samples)}function ye(w){const b=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(w){const b=a.render.frame;u.get(w)!==b&&(u.set(w,b),w.update())}function Te(w,b){const B=w.colorSpace,$=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==cs&&B!==Ui&&(nt.getTransfer(B)===at?($!==Yn||te!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ye}function ky(s,e){function t(i,n=Ui){let r;const a=nt.getTransfer(n);if(i===yi)return s.UNSIGNED_BYTE;if(i===lu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===cu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return s.BYTE;if(i===td)return s.SHORT;if(i===ra)return s.UNSIGNED_SHORT;if(i===ou)return s.INT;if(i===xr)return s.UNSIGNED_INT;if(i===_i)return s.FLOAT;if(i===ma)return s.HALF_FLOAT;if(i===id)return s.ALPHA;if(i===rd)return s.RGB;if(i===Yn)return s.RGBA;if(i===sd)return s.LUMINANCE;if(i===ad)return s.LUMINANCE_ALPHA;if(i===Qr)return s.DEPTH_COMPONENT;if(i===ls)return s.DEPTH_STENCIL;if(i===od)return s.RED;if(i===uu)return s.RED_INTEGER;if(i===ld)return s.RG;if(i===hu)return s.RG_INTEGER;if(i===fu)return s.RGBA_INTEGER;if(i===eo||i===to||i===no||i===io)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===pc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_c||i===gc||i===vc||i===xc||i===yc||i===Sc||i===Mc||i===Tc||i===Ec||i===bc||i===wc||i===Ac||i===Cc||i===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_c)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===Pc||i===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===Uc||i===Lc||i===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new jt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hi({vertexShader:zy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hy extends ys{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Vy,p=t.getContextAttributes();let m=null,M=null;const x=[],v=[],E=new Pe;let A=null;const T=new Sn;T.viewport=new rt;const C=new Sn;C.viewport=new rt;const y=[T,C],S=new lg;let U=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=x[N];return k===void 0&&(k=new wl,x[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=x[N];return k===void 0&&(k=new wl,x[N]=k),k.getGripSpace()},this.getHand=function(N){let k=x[N];return k===void 0&&(k=new wl,x[N]=k),k.getHandSpace()};function L(N){const k=v.indexOf(N.inputSource);if(k===-1)return;const ie=x[k];ie!==void 0&&(ie.update(N.inputSource,N.frame,c||a),ie.dispatchEvent({type:N.type,data:N.inputSource}))}function F(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",z);for(let N=0;N<x.length;N++){const k=v[N];k!==null&&(v[N]=null,x[N].disconnect(k))}U=null,P=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,n=null,M=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",F),n.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,X=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?ls:Qr,X=p.stencil?os:xr);const Ee={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(Ee),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new yr(f.textureWidth,f.textureHeight,{format:Yn,type:yi,depthTexture:new Ed(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,ie),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new yr(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(N){for(let k=0;k<N.removed.length;k++){const ie=N.removed[k],X=v.indexOf(ie);X>=0&&(v[X]=null,x[X].disconnect(ie))}for(let k=0;k<N.added.length;k++){const ie=N.added[k];let X=v.indexOf(ie);if(X===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=v.length){v.push(ie),X=Ee;break}else if(v[Ee]===null){v[Ee]=ie,X=Ee;break}if(X===-1)break}const se=x[X];se&&se.connect(ie)}}const O=new Y,j=new Y;function H(N,k,ie){O.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(ie.matrixWorld);const X=O.distanceTo(j),se=k.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,ge=se[14]/(se[10]-1),xe=se[14]/(se[10]+1),q=(se[9]+1)/se[5],ce=(se[9]-1)/se[5],D=(se[8]-1)/se[0],Me=(Ee[8]+1)/Ee[0],le=ge*D,ye=ge*Me,ne=X/(-D+Me),Te=ne*-D;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Te),N.translateZ(ne),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),se[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const ue=ge+ne,w=xe+ne,b=le-Te,B=ye+(X-Te),$=q*xe/w*ue,te=ce*xe/w*ue;N.projectionMatrix.makePerspective(b,B,$,te,ue,w),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function K(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;let k=N.near,ie=N.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),S.near=C.near=T.near=k,S.far=C.far=T.far=ie,(U!==S.near||P!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,P=S.far),T.layers.mask=N.layers.mask|2,C.layers.mask=N.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const X=N.parent,se=S.cameras;K(S,X);for(let Ee=0;Ee<se.length;Ee++)K(se[Ee],X);se.length===2?H(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),Z(N,S,X)};function Z(N,k,ie){ie===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(ie.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ic*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let I=null;function W(N,k){if(u=k.getViewerPose(c||a),g=k,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let X=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let ge=0;ge<ie.length;ge++){const xe=ie[ge];let q=null;if(d!==null)q=d.getViewport(xe);else{const D=h.getViewSubImage(f,xe);q=D.viewport,ge===0&&(e.setRenderTargetTextures(M,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(M))}let ce=y[ge];ce===void 0&&(ce=new Sn,ce.layers.enable(ge),ce.viewport=new rt,y[ge]=ce),ce.matrix.fromArray(xe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(xe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(q.x,q.y,q.width,q.height),ge===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),X===!0&&S.cameras.push(ce)}const se=n.enabledFeatures;if(se&&se.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&h){const ge=h.getDepthInformation(ie[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,n.renderState)}}for(let ie=0;ie<x.length;ie++){const X=v[ie],se=x[ie];X!==null&&se!==void 0&&se.update(X,k,c||a)}I&&I(N,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const ee=new Od;ee.setAnimationLoop(W),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}const tr=new ni,Wy=new pt;function Xy(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,xd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,M,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,v=M.envMapRotation;x&&(p.envMap.value=x,tr.copy(v),tr.x*=-1,tr.y*=-1,tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),p.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(tr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Yy(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;i.uniformBlockBinding(M,v)}function c(M,x){let v=n[M.id];v===void 0&&(g(M),v=u(M),n[M.id]=v,M.addEventListener("dispose",p));const E=x.program;i.updateUBOMapping(M,E);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const v=s.createBuffer(),E=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=n[M.id],v=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,S=C.length;y<S;y++){const U=C[y];if(d(U,A,y,E)===!0){const P=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let F=0;for(let z=0;z<L.length;z++){const O=L[z],j=_(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,P+F,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,x,v,E){const A=M.value,T=x+"_"+v;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const C=E[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){const x=M.uniforms;let v=0;const E=16;for(let T=0,C=x.length;T<C;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,U=y.length;S<U;S++){const P=y[S],L=Array.isArray(P.value)?P.value:[P.value];for(let F=0,z=L.length;F<z;F++){const O=L[F],j=_(O),H=v%E,K=H%j.boundary,Z=H+K;v+=K,Z!==0&&E-Z<j.storage&&(v+=E-Z),P.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=j.storage}}}const A=v%E;return A>0&&(v+=E-A),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function m(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}class qy{constructor(e={}){const{canvas:t=qm(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let E=!1,A=0,T=0,C=null,y=-1,S=null;const U=new rt,P=new rt;let L=null;const F=new Ze(0);let z=0,O=t.width,j=t.height,H=1,K=null,Z=null;const I=new rt(0,0,O,j),W=new rt(0,0,O,j);let ee=!1;const N=new _u;let k=!1,ie=!1;this.transmissionResolutionScale=1;const X=new pt,se=new pt,Ee=new Y,ge=new rt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function ce(){return C===null?H:1}let D=i;function Me(R,J){return t.getContext(R,J)}try{const R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${au}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Se,!1),D===null){const J="webgl2";if(D=Me(J,R),D===null)throw Me(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,ye,ne,Te,ue,w,b,B,$,te,oe,pe,he,ve,Le,fe,we,Ce,Re,de,Ie,Oe,qe,G;function me(){le=new ix(D),le.init(),Oe=new ky(D,le),ye=new Jv(D,le,e,Oe),ne=new Oy(D,le),ye.reverseDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),Te=new ax(D),ue=new Ey,w=new By(D,le,ne,ue,ye,Oe,Te),b=new Qv(v),B=new nx(v),$=new fg(D),qe=new jv(D,$),te=new rx(D,$,Te,qe),oe=new lx(D,te,$,Te),Re=new ox(D,ye,w),fe=new Kv(ue),pe=new Ty(v,b,B,le,ye,qe,fe),he=new Xy(v,ue),ve=new wy,Le=new Uy(le),Ce=new qv(v,b,B,ne,oe,d,l),we=new Iy(v,oe,ye),G=new Yy(D,Te,ye,ne),de=new Zv(D,le,Te),Ie=new sx(D,le,Te),Te.programs=pe.programs,v.capabilities=ye,v.extensions=le,v.properties=ue,v.renderLists=ve,v.shadowMap=we,v.state=ne,v.info=Te}me();const re=new Hy(v,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(O,j,!1))},this.getSize=function(R){return R.set(O,j)},this.setSize=function(R,J,ae=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,j=J,t.width=Math.floor(R*H),t.height=Math.floor(J*H),ae===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(O*H,j*H).floor()},this.setDrawingBufferSize=function(R,J,ae){O=R,j=J,H=ae,t.width=Math.floor(R*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,J,ae,V){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,J,ae,V),ne.viewport(U.copy(I).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,J,ae,V){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,J,ae,V),ne.scissor(P.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){ne.setScissorTest(ee=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,ae=!0){let V=0;if(R){let Q=!1;if(C!==null){const Ae=C.texture.format;Q=Ae===fu||Ae===hu||Ae===uu}if(Q){const Ae=C.texture.type,De=Ae===yi||Ae===xr||Ae===ra||Ae===os||Ae===lu||Ae===cu,Fe=Ce.getClearColor(),Ne=Ce.getClearAlpha(),He=Fe.r,We=Fe.g,ze=Fe.b;De?(g[0]=He,g[1]=We,g[2]=ze,g[3]=Ne,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=He,_[1]=We,_[2]=ze,_[3]=Ne,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}J&&(V|=D.DEPTH_BUFFER_BIT),ae&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ce.dispose(),ve.dispose(),Le.dispose(),ue.dispose(),b.dispose(),B.dispose(),oe.dispose(),qe.dispose(),G.dispose(),pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",St),re.removeEventListener("sessionend",en),Vt.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Te.autoReset,J=we.enabled,ae=we.autoUpdate,V=we.needsUpdate,Q=we.type;me(),Te.autoReset=R,we.enabled=J,we.autoUpdate=ae,we.needsUpdate=V,we.type=Q}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Be(R){const J=R.target;J.removeEventListener("dispose",Be),Xe(J)}function Xe(R){ke(R),ue.remove(R)}function ke(R){const J=ue.get(R).programs;J!==void 0&&(J.forEach(function(ae){pe.releaseProgram(ae)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,ae,V,Q,Ae){J===null&&(J=xe);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=qo(R,J,ae,V,Q);ne.setMaterial(V,De);let Ne=ae.index,He=1;if(V.wireframe===!0){if(Ne=te.getWireframeAttribute(ae),Ne===void 0)return;He=2}const We=ae.drawRange,ze=ae.attributes.position;let Qe=We.start*He,$e=(We.start+We.count)*He;Ae!==null&&(Qe=Math.max(Qe,Ae.start*He),$e=Math.min($e,(Ae.start+Ae.count)*He)),Ne!==null?(Qe=Math.max(Qe,0),$e=Math.min($e,Ne.count)):ze!=null&&(Qe=Math.max(Qe,0),$e=Math.min($e,ze.count));const _t=$e-Qe;if(_t<0||_t===1/0)return;qe.setup(Q,V,Fe,ae,Ne);let ht,et=de;if(Ne!==null&&(ht=$.get(Ne),et=Ie,et.setIndex(ht)),Q.isMesh)V.wireframe===!0?(ne.setLineWidth(V.wireframeLinewidth*ce()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(Q.isLine){let Ge=V.linewidth;Ge===void 0&&(Ge=1),ne.setLineWidth(Ge*ce()),Q.isLineSegments?et.setMode(D.LINES):Q.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else Q.isPoints?et.setMode(D.POINTS):Q.isSprite&&et.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))et.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ge=Q._multiDrawStarts,Tt=Q._multiDrawCounts,Ke=Q._multiDrawCount,Kt=Ne?$.get(Ne).bytesPerElement:1,Kn=ue.get(V).currentProgram.getUniforms();for(let Bt=0;Bt<Ke;Bt++)Kn.setValue(D,"_gl_DrawID",Bt),et.render(Ge[Bt]/Kt,Tt[Bt])}else if(Q.isInstancedMesh)et.renderInstances(Qe,_t,Q.count);else if(ae.isInstancedBufferGeometry){const Ge=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Tt=Math.min(ae.instanceCount,Ge);et.renderInstances(Qe,_t,Tt)}else et.render(Qe,_t)};function Ve(R,J,ae){R.transparent===!0&&R.side===Mn&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,Pn(R,J,ae),R.side=Vi,R.needsUpdate=!0,Pn(R,J,ae),R.side=Mn):Pn(R,J,ae)}this.compile=function(R,J,ae=null){ae===null&&(ae=R),m=Le.get(ae),m.init(J),x.push(m),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),R!==ae&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights();const V=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Fe=Ae[De];Ve(Fe,ae,Q),V.add(Fe)}else Ve(Ae,ae,Q),V.add(Ae)}),m=x.pop(),V},this.compileAsync=function(R,J,ae=null){const V=this.compile(R,J,ae);return new Promise(Q=>{function Ae(){if(V.forEach(function(De){ue.get(De).currentProgram.isReady()&&V.delete(De)}),V.size===0){Q(R);return}setTimeout(Ae,10)}le.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ot=null;function ut(R){ot&&ot(R)}function St(){Vt.stop()}function en(){Vt.start()}const Vt=new Od;Vt.setAnimationLoop(ut),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(R){ot=R,re.setAnimationLoop(R),R===null?Vt.stop():Vt.start()},re.addEventListener("sessionstart",St),re.addEventListener("sessionend",en),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(J),J=re.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,J,C),m=Le.get(R,x.length),m.init(J),x.push(m),se.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),N.setFromProjectionMatrix(se),ie=this.localClippingEnabled,k=fe.init(this.clippingPlanes,ie),p=ve.get(R,M.length),p.init(),M.push(p),re.enabled===!0&&re.isPresenting===!0){const Ae=v.xr.getDepthSensingMesh();Ae!==null&&mn(Ae,J,-1/0,v.sortObjects)}mn(R,J,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(K,Z),q=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,q&&Ce.addToRenderList(p,R),this.info.render.frame++,k===!0&&fe.beginShadows();const ae=m.state.shadowsArray;we.render(ae,R,J),k===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,Q=p.transmissive;if(m.setupLights(),J.isArrayCamera){const Ae=J.cameras;if(Q.length>0)for(let De=0,Fe=Ae.length;De<Fe;De++){const Ne=Ae[De];Jn(V,Q,R,Ne)}q&&Ce.render(R);for(let De=0,Fe=Ae.length;De<Fe;De++){const Ne=Ae[De];Bn(p,R,Ne,Ne.viewport)}}else Q.length>0&&Jn(V,Q,R,J),q&&Ce.render(R),Bn(p,R,J);C!==null&&T===0&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,J),qe.resetDefaultState(),y=-1,S=null,x.pop(),x.length>0?(m=x[x.length-1],k===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function mn(R,J,ae,V){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){V&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const De=oe.update(R),Fe=R.material;Fe.visible&&p.push(R,De,Fe,ae,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){const De=oe.update(R),Fe=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ge.copy(De.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){const Ne=De.groups;for(let He=0,We=Ne.length;He<We;He++){const ze=Ne[He],Qe=Fe[ze.materialIndex];Qe&&Qe.visible&&p.push(R,De,Qe,ae,ge.z,ze)}}else Fe.visible&&p.push(R,De,Fe,ae,ge.z,null)}}const Ae=R.children;for(let De=0,Fe=Ae.length;De<Fe;De++)mn(Ae[De],J,ae,V)}function Bn(R,J,ae,V){const Q=R.opaque,Ae=R.transmissive,De=R.transparent;m.setupLightsView(ae),k===!0&&fe.setGlobalState(v.clippingPlanes,ae),V&&ne.viewport(U.copy(V)),Q.length>0&&tn(Q,J,ae),Ae.length>0&&tn(Ae,J,ae),De.length>0&&tn(De,J,ae),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Jn(R,J,ae,V){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new yr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?ma:yi,minFilter:fr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Ae=m.state.transmissionRenderTarget[V.id],De=V.viewport||U;Ae.setSize(De.z*v.transmissionResolutionScale,De.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(F),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),q&&Ce.render(ae);const Ne=v.toneMapping;v.toneMapping=Oi;const He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),k===!0&&fe.setGlobalState(v.clippingPlanes,V),tn(R,ae,V),w.updateMultisampleRenderTarget(Ae),w.updateRenderTargetMipmap(Ae),le.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ze=0,Qe=J.length;ze<Qe;ze++){const $e=J[ze],_t=$e.object,ht=$e.geometry,et=$e.material,Ge=$e.group;if(et.side===Mn&&_t.layers.test(V.layers)){const Tt=et.side;et.side=ln,et.needsUpdate=!0,Dt(_t,ae,V,ht,et,Ge),et.side=Tt,et.needsUpdate=!0,We=!0}}We===!0&&(w.updateMultisampleRenderTarget(Ae),w.updateRenderTargetMipmap(Ae))}v.setRenderTarget(Fe),v.setClearColor(F,z),He!==void 0&&(V.viewport=He),v.toneMapping=Ne}function tn(R,J,ae){const V=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,Ae=R.length;Q<Ae;Q++){const De=R[Q],Fe=De.object,Ne=De.geometry,He=V===null?De.material:V,We=De.group;Fe.layers.test(ae.layers)&&Dt(Fe,J,ae,Ne,He,We)}}function Dt(R,J,ae,V,Q,Ae){R.onBeforeRender(v,J,ae,V,Q,Ae),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(v,J,ae,V,R,Ae),Q.transparent===!0&&Q.side===Mn&&Q.forceSinglePass===!1?(Q.side=ln,Q.needsUpdate=!0,v.renderBufferDirect(ae,J,V,Q,R,Ae),Q.side=Vi,Q.needsUpdate=!0,v.renderBufferDirect(ae,J,V,Q,R,Ae),Q.side=Mn):v.renderBufferDirect(ae,J,V,Q,R,Ae),R.onAfterRender(v,J,ae,V,Q,Ae)}function Pn(R,J,ae){J.isScene!==!0&&(J=xe);const V=ue.get(R),Q=m.state.lights,Ae=m.state.shadowsArray,De=Q.state.version,Fe=pe.getParameters(R,Q.state,Ae,J,ae),Ne=pe.getProgramCacheKey(Fe);let He=V.programs;V.environment=R.isMeshStandardMaterial?J.environment:null,V.fog=J.fog,V.envMap=(R.isMeshStandardMaterial?B:b).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Be),He=new Map,V.programs=He);let We=He.get(Ne);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===De)return Ar(R,Fe),We}else Fe.uniforms=pe.getUniforms(R),R.onBeforeCompile(Fe,v),We=pe.acquireProgram(Fe,Ne),He.set(Ne,We),V.uniforms=Fe.uniforms;const ze=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=fe.uniform),Ar(R,Fe),V.needsLights=Cr(R),V.lightsStateVersion=De,V.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.directionalShadowMap.value=Q.state.directionalShadowMap,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotShadowMap.value=Q.state.spotShadowMap,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMap.value=Q.state.pointShadowMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),V.currentProgram=We,V.uniformsList=null,We}function Rs(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Ar(R,J){const ae=ue.get(R);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function qo(R,J,ae,V,Q){J.isScene!==!0&&(J=xe),w.resetTextureUnits();const Ae=J.fog,De=V.isMeshStandardMaterial?J.environment:null,Fe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cs,Ne=(V.isMeshStandardMaterial?B:b).get(V.envMap||De),He=V.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,We=!!ae.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!ae.morphAttributes.position,Qe=!!ae.morphAttributes.normal,$e=!!ae.morphAttributes.color;let _t=Oi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=v.toneMapping);const ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,et=ht!==void 0?ht.length:0,Ge=ue.get(V),Tt=m.state.lights;if(k===!0&&(ie===!0||R!==S)){const Lt=R===S&&V.id===y;fe.setState(V,R,Lt)}let Ke=!1;V.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Tt.state.version||Ge.outputColorSpace!==Fe||Q.isBatchedMesh&&Ge.batching===!1||!Q.isBatchedMesh&&Ge.batching===!0||Q.isBatchedMesh&&Ge.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ge.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ge.instancing===!1||!Q.isInstancedMesh&&Ge.instancing===!0||Q.isSkinnedMesh&&Ge.skinning===!1||!Q.isSkinnedMesh&&Ge.skinning===!0||Q.isInstancedMesh&&Ge.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ge.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ge.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ge.instancingMorph===!1&&Q.morphTexture!==null||Ge.envMap!==Ne||V.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==fe.numPlanes||Ge.numIntersection!==fe.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==We||Ge.morphTargets!==ze||Ge.morphNormals!==Qe||Ge.morphColors!==$e||Ge.toneMapping!==_t||Ge.morphTargetsCount!==et)&&(Ke=!0):(Ke=!0,Ge.__version=V.version);let Kt=Ge.currentProgram;Ke===!0&&(Kt=Pn(V,J,Q));let Kn=!1,Bt=!1,Ht=!1;const ft=Kt.getUniforms(),kt=Ge.uniforms;if(ne.useProgram(Kt.program)&&(Kn=!0,Bt=!0,Ht=!0),V.id!==y&&(y=V.id,Bt=!0),Kn||S!==R){ne.buffers.depth.getReversed()?(X.copy(R.projectionMatrix),Zm(X),Jm(X),ft.setValue(D,"projectionMatrix",X)):ft.setValue(D,"projectionMatrix",R.projectionMatrix),ft.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ct=ft.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,Ee.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ft.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Bt=!0,Ht=!0)}if(Q.isSkinnedMesh){ft.setOptional(D,Q,"bindMatrix"),ft.setOptional(D,Q,"bindMatrixInverse");const Lt=Q.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ft.setValue(D,"boneTexture",Lt.boneTexture,w))}Q.isBatchedMesh&&(ft.setOptional(D,Q,"batchingTexture"),ft.setValue(D,"batchingTexture",Q._matricesTexture,w),ft.setOptional(D,Q,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",Q._indirectTexture,w),ft.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",Q._colorsTexture,w));const Ut=ae.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&Re.update(Q,ae,Kt),(Bt||Ge.receiveShadow!==Q.receiveShadow)&&(Ge.receiveShadow=Q.receiveShadow,ft.setValue(D,"receiveShadow",Q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(kt.envMap.value=Ne,kt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&J.environment!==null&&(kt.envMapIntensity.value=J.environmentIntensity),Bt&&(ft.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&ya(kt,Ht),Ae&&V.fog===!0&&he.refreshFogUniforms(kt,Ae),he.refreshMaterialUniforms(kt,V,H,j,m.state.transmissionRenderTarget[R.id]),so.upload(D,Rs(Ge),kt,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(so.upload(D,Rs(Ge),kt,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ft.setValue(D,"center",Q.center),ft.setValue(D,"modelViewMatrix",Q.modelViewMatrix),ft.setValue(D,"normalMatrix",Q.normalMatrix),ft.setValue(D,"modelMatrix",Q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Lt=V.uniformsGroups;for(let Ct=0,Ti=Lt.length;Ct<Ti;Ct++){const kn=Lt[Ct];G.update(kn,Kt),G.bind(kn,Kt)}}return Kt}function ya(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function Cr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,J,ae){ue.get(R.texture).__webglTexture=J,ue.get(R.depthTexture).__webglTexture=ae;const V=ue.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=ae===void 0,V.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,J){const ae=ue.get(R);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0};const Ps=D.createFramebuffer();this.setRenderTarget=function(R,J=0,ae=0){C=R,A=J,T=ae;let V=!0,Q=null,Ae=!1,De=!1;if(R){const Ne=ue.get(R);if(Ne.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Ne.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Ne.__hasExternalTextures)w.rebindTextures(R,ue.get(R.texture).__webglTexture,ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&ue.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const We=ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[J])?Q=We[J][ae]:Q=We[J],Ae=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?Q=ue.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?Q=We[ae]:Q=We,U.copy(R.viewport),P.copy(R.scissor),L=R.scissorTest}else U.copy(I).multiplyScalar(H).floor(),P.copy(W).multiplyScalar(H).floor(),L=ee;if(ae!==0&&(Q=Ps),ne.bindFramebuffer(D.FRAMEBUFFER,Q)&&V&&ne.drawBuffers(R,Q),ne.viewport(U),ne.scissor(P),ne.setScissorTest(L),Ae){const Ne=ue.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne.__webglTexture,ae)}else if(De){const Ne=ue.get(R.texture),He=J;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,ae,He)}else if(R!==null&&ae!==0){const Ne=ue.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,ae)}y=-1},this.readRenderTargetPixels=function(R,J,ae,V,Q,Ae,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){ne.bindFramebuffer(D.FRAMEBUFFER,Fe);try{const Ne=R.texture,He=Ne.format,We=Ne.type;if(!ye.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-V&&ae>=0&&ae<=R.height-Q&&D.readPixels(J,ae,V,Q,Oe.convert(He),Oe.convert(We),Ae)}finally{const Ne=C!==null?ue.get(C).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,J,ae,V,Q,Ae,De){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){const Ne=R.texture,He=Ne.format,We=Ne.type;if(!ye.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=R.width-V&&ae>=0&&ae<=R.height-Q){ne.bindFramebuffer(D.FRAMEBUFFER,Fe);const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),D.readPixels(J,ae,V,Q,Oe.convert(He),Oe.convert(We),0);const Qe=C!==null?ue.get(C).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Qe);const $e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jm(D,$e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.deleteBuffer(ze),D.deleteSync($e),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,J=null,ae=0){R.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1]);const V=Math.pow(2,-ae),Q=Math.floor(R.image.width*V),Ae=Math.floor(R.image.height*V),De=J!==null?J.x:0,Fe=J!==null?J.y:0;w.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,ae,0,0,De,Fe,Q,Ae),ne.unbindTexture()};const jo=D.createFramebuffer(),Sa=D.createFramebuffer();this.copyTextureToTexture=function(R,J,ae=null,V=null,Q=0,Ae=null){R.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],J=arguments[2],Ae=arguments[3]||0,ae=null),Ae===null&&(Q!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Q,Q=0):Ae=0);let De,Fe,Ne,He,We,ze,Qe,$e,_t;const ht=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ae!==null)De=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Ne=ae.isBox3?ae.max.z-ae.min.z:1,He=ae.min.x,We=ae.min.y,ze=ae.isBox3?ae.min.z:0;else{const Ut=Math.pow(2,-Q);De=Math.floor(ht.width*Ut),Fe=Math.floor(ht.height*Ut),R.isDataArrayTexture?Ne=ht.depth:R.isData3DTexture?Ne=Math.floor(ht.depth*Ut):Ne=1,He=0,We=0,ze=0}V!==null?(Qe=V.x,$e=V.y,_t=V.z):(Qe=0,$e=0,_t=0);const et=Oe.convert(J.format),Ge=Oe.convert(J.type);let Tt;J.isData3DTexture?(w.setTexture3D(J,0),Tt=D.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(w.setTexture2DArray(J,0),Tt=D.TEXTURE_2D_ARRAY):(w.setTexture2D(J,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,J.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,J.unpackAlignment);const Ke=D.getParameter(D.UNPACK_ROW_LENGTH),Kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kn=D.getParameter(D.UNPACK_SKIP_PIXELS),Bt=D.getParameter(D.UNPACK_SKIP_ROWS),Ht=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,He),D.pixelStorei(D.UNPACK_SKIP_ROWS,We),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const ft=R.isDataArrayTexture||R.isData3DTexture,kt=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){const Ut=ue.get(R),Lt=ue.get(J),Ct=ue.get(Ut.__renderTarget),Ti=ue.get(Lt.__renderTarget);ne.bindFramebuffer(D.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let kn=0;kn<Ne;kn++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.get(R).__webglTexture,Q,ze+kn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ue.get(J).__webglTexture,Ae,_t+kn)),D.blitFramebuffer(He,We,De,Fe,Qe,$e,De,Fe,D.DEPTH_BUFFER_BIT,D.NEAREST);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ue.has(R)){const Ut=ue.get(R),Lt=ue.get(J);ne.bindFramebuffer(D.READ_FRAMEBUFFER,jo),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Sa);for(let Ct=0;Ct<Ne;Ct++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,Q,ze+Ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,Q),kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,Ae,_t+Ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,Ae),Q!==0?D.blitFramebuffer(He,We,De,Fe,Qe,$e,De,Fe,D.COLOR_BUFFER_BIT,D.NEAREST):kt?D.copyTexSubImage3D(Tt,Ae,Qe,$e,_t+Ct,He,We,De,Fe):D.copyTexSubImage2D(Tt,Ae,Qe,$e,He,We,De,Fe);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Tt,Ae,Qe,$e,_t,De,Fe,Ne,et,Ge,ht.data):J.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,Ae,Qe,$e,_t,De,Fe,Ne,et,ht.data):D.texSubImage3D(Tt,Ae,Qe,$e,_t,De,Fe,Ne,et,Ge,ht):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,Qe,$e,De,Fe,et,Ge,ht.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,Qe,$e,ht.width,ht.height,et,ht.data):D.texSubImage2D(D.TEXTURE_2D,Ae,Qe,$e,De,Fe,et,Ge,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ke),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht),Ae===0&&J.generateMipmaps&&D.generateMipmap(Tt),ne.unbindTexture()},this.copyTextureToTexture3D=function(R,J,ae=null,V=null,Q=0){return R.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,V=arguments[1]||null,R=arguments[2],J=arguments[3],Q=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,J,ae,V,Q)},this.initRenderTarget=function(R){ue.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),ne.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,ne.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function pi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Vd(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hs={duration:.5,overwrite:!1,delay:0},bu,Gt,mt,In=1e8,ct=1/In,Gc=Math.PI*2,jy=Gc/4,Zy=0,Hd=Math.sqrt,Jy=Math.cos,Ky=Math.sin,Ot=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Si=function(e){return typeof e=="number"},wu=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},cn=function(e){return e!==!1},Au=function(){return typeof window<"u"},Ja=function(e){return Mt(e)||Ot(e)},Wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Qy=/random\([^)]+\)/g,$y=/,\s*/g,gf=/(?:-?\.?\d|\.)+/gi,Xd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yd=/[+-]=-?[.\d]+/,e1=/[^,'"\[\]\s]+/gi,t1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,Qn,Vc,Cu,An={},_o={},qd,jd=function(e){return(_o=fs(e,An))&&dn},Ru=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},la=function(e,t){return!t&&console.warn(e)},Zd=function(e,t){return e&&(An[e]=t)&&_o&&(_o[e]=t)||An},ca=function(){return 0},n1={suppressEvents:!0,isStart:!0,kill:!1},ao={suppressEvents:!0,kill:!1},i1={suppressEvents:!0},Pu={},ki=[],Hc={},Jd,xn={},zl={},vf=30,oo=[],Du="",Uu=function(e){var t=e[0],i,n;if(ii(t)||Mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=oo.length;n--&&!oo[n].targetTest(t););i=oo[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new yp(e[n],i)))||e.splice(n,1);return e},pr=function(e){return e._gsap||Uu(Nn(e))[0]._gsap},Kd=function(e,t,i){return(i=e[t])&&Mt(i)?e[t]():wu(i)&&e.getAttribute&&e.getAttribute(t)||i},un=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},gt=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},r1=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},go=function(){var e=ki.length,t=ki.slice(0),i,n;for(Hc={},ki.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Lu=function(e){return!!(e._initted||e._startAt||e.add)},Qd=function(e,t,i,n){ki.length&&!Gt&&go(),e.render(t,i,!!(Gt&&t<0&&Lu(e))),ki.length&&!Gt&&go()},$d=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(e1).length<2?t:Ot(e)?e.trim():e},ep=function(e){return e},Cn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},s1=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},fs=function(e,t){for(var i in t)e[i]=t[i];return e},xf=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ii(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},vo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Qs=function(e){var t=e.parent||vt,i=e.keyframes?s1(Jt(e.keyframes)):Cn;if(cn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},a1=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},tp=function(e,t,i,n,r){var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Io=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},o1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wc=function(e,t,i,n){return e._startAt&&(Gt?e._startAt.revert(ao):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},l1=function s(e){return!e||e._ts&&s(e.parent)},yf=function(e){return e._repeat?ds(e._tTime,e=e.duration()+e._rDelay)*e:0},ds=function(e,t){var i=Math.floor(e=gt(e/t));return e&&i===e?i-1:i},xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},No=function(e){return e._end=gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Oo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),No(e),i._dirty||mr(i,e)),e},np=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=xo(e.rawTime(),t),(!t._dur||va(0,t.totalDuration(),i)-t._tTime>ct)&&t.render(i,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ct}},ei=function(e,t,i,n){return t.parent&&Wi(t),t._start=gt((Si(i)?i:i||e!==vt?Un(e,i,t):e._time)+t._delay),t._end=gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),tp(e,t,"_first","_last",e._sort?"_start":0),Xc(t)||(e._recent=t),n||np(e,t),e._ts<0&&Oo(e,e._tTime),e},ip=function(e,t){return(An.ScrollTrigger||Ru("scrollTrigger",t))&&An.ScrollTrigger.create(t,e)},rp=function(e,t,i,n,r){if(Iu(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jd!==Tn.frame)return ki.push(e),e._lazy=[r,n],1},c1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Xc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},u1=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&c1(e)&&!(!e._initted&&Xc(e))||(e._ts<0||e._dp._ts<0)&&!Xc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=va(0,e._tDur,t),u=ds(l,o),e._yoyo&&u&1&&(a=1-a),u!==ds(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Gt||n||e._zTime===ct||!t&&e._zTime){if(!e._initted&&rp(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?ct:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Wc(e,t,i,!0),e._onUpdate&&!i&&En(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wi(e,1),!i&&!Gt&&(En(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},h1=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ps=function(e,t,i,n){var r=e._repeat,a=gt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:gt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&Oo(e,e._tTime=e._tDur*o),e.parent&&No(e),i||mr(e.parent,e),e},Sf=function(e){return e instanceof $t?mr(e):ps(e,e._dur)},f1={_start:0,endTime:ca,totalDuration:ca},Un=function s(e,t,i){var n=e.labels,r=e._recent||f1,a=e.duration()>=In?r.endTime(!1):e._dur,o,l,c;return Ot(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},$s=function(e,t,i){var n=Si(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;a.immediateRender=cn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new At(t[0],a,t[r+1])},ji=function(e,t){return e||e===0?t(e):t},va=function(e,t,i){return i<e?e:i>t?t:i},qt=function(e,t){return!Ot(e)||!(t=t1.exec(e))?"":t[1]},d1=function(e,t,i){return ji(i,function(n){return va(e,t,n)})},Yc=[].slice,sp=function(e,t){return e&&ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==Qn},p1=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ot(n)&&!t||sp(n,1)?(r=i).push.apply(r,Nn(n)):i.push(n)})||i},Nn=function(e,t,i){return mt&&!t&&mt.selector?mt.selector(e):Ot(e)&&!i&&(Vc||!ms())?Yc.call((t||Cu).querySelectorAll(e),0):Jt(e)?p1(e,i):sp(e)?Yc.call(e,0):e?[e]:[]},qc=function(e){return e=Nn(e)[0]||la("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Nn(t,i.querySelectorAll?i:i===e?la("Invalid scope")||Cu.createElement("div"):e)}},ap=function(e){return e.sort(function(){return .5-Math.random()})},op=function(e){if(Mt(e))return e;var t=ii(e)?e:{each:e},i=_r(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,h=n;return Ot(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],h=n[1]),function(f,d,g){var _=(g||t).length,p=a[_],m,M,x,v,E,A,T,C,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,In])[1],!y){for(T=-In;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(p=a[_]=[],m=l?Math.min(y,_)*u-.5:n%y,M=y===In?0:l?_*h/y-.5:n/y|0,T=0,C=In,A=0;A<_;A++)x=A%y-m,v=M-(A/y|0),p[A]=E=c?Math.abs(c==="y"?v:x):Hd(x*x+v*v),E>T&&(T=E),E<C&&(C=E);n==="random"&&ap(p),p.max=T-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(n==="edges"?-1:1),p.b=_<0?r-_:r,p.u=qt(t.amount||t.each)||0,i=i&&_<0?gp(i):i}return _=(p[f]-p.min)/p.max||0,gt(p.b+(i?i(_):_)*p.v)+p.u}},jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=gt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Si(i)?0:qt(i))}},lp=function(e,t){var i=Jt(e),n,r;return!i&&ii(e)&&(n=i=e.radius||In,e.values?(e=Nn(e.values),(r=!Si(e[0]))&&(n*=n)):e=jc(e.increment)),ji(t,i?Mt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=In,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!n||c<=n?e[u]:a,r||u===a||Si(a)?u:u+qt(a)}:jc(e))},cp=function(e,t,i,n){return ji(Jt(e)?!t:i===!0?!!(i=0):!n,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},m1=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},_1=function(e,t){return function(i){return e(parseFloat(i))+(t||qt(i))}},g1=function(e,t,i){return hp(e,t,0,1,i)},up=function(e,t,i){return ji(i,function(n){return e[~~t(n)]})},v1=function s(e,t,i){var n=t-e;return Jt(e)?up(e,s(0,e.length),t):ji(i,function(r){return(n+(r-e)%n)%n+e})},x1=function s(e,t,i){var n=t-e,r=n*2;return Jt(e)?up(e,s(0,e.length-1),t):ji(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},ua=function(e){return e.replace(Qy,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split($y);return cp(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},hp=function(e,t,i,n,r){var a=t-e,o=n-i;return ji(r,function(l){return i+((l-e)/a*o||0)})},y1=function s(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Ot(e),o={},l,c,u,h,f;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else n||(e=fs(Jt(e)?[]:{},e));if(!u){for(l in t)Fu.call(o,e,l,"get",t[l]);r=function(g){return Bu(g,o)||(a?e.p:e)}}}return ji(i,r)},Mf=function(e,t,i){var n=e.labels,r=In,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},En=function(e,t,i){var n=e.vars,r=n[t],a=mt,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&ki.length&&go(),o&&(mt=o),u=l?r.apply(c,l):r.call(c),mt=a,u},qs=function(e){return Wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&En(e,"onInterrupt"),e},Jr,fp=[],dp=function(e){if(e)if(e=!e.name&&e.default||e,Au()||e.headless){var t=e.name,i=Mt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:ca,render:Bu,add:Fu,kill:N1,modifier:I1,rawVars:0},a={targetTest:0,get:0,getSetter:Ou,aliases:{},register:0};if(ms(),e!==n){if(xn[t])return;Cn(n,Cn(vo(e,r),a)),fs(n.prototype,fs(r,vo(e,a))),xn[n.prop=t]=n,e.targetTest&&(oo.push(n),Pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zd(t,n),e.register&&e.register(dn,n,hn)}else fp.push(e)},lt=255,js={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},Gl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*lt+.5|0},pp=function(e,t,i){var n=e?Si(e)?[e>>16,e>>8&lt,e&lt]:0:js.black,r,a,o,l,c,u,h,f,d,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),js[e])n=js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&lt,n&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(gf),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,n.length>3&&(n[3]*=1),n[0]=Gl(l+1/3,r,a),n[1]=Gl(l,r,a),n[2]=Gl(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(Xd),i&&n.length<4&&(n[3]=1),n}else n=e.match(gf)||js.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/lt,a=n[1]/lt,o=n[2]/lt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},mp=function(e){var t=[],i=[],n=-1;return e.split(zi).forEach(function(r){var a=r.match(Zr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Tf=function(e,t,i){var n="",r=(e+n).match(zi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=pp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=mp(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(zi,"1").split(Zr),h=c.length-1;o<h;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(zi),h=c.length-1;o<h;o++)n+=c[o]+r[o];return n+c[h]},zi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in js)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),S1=/hsl[a]?\(/,_p=function(e){var t=e.join(" "),i;if(zi.lastIndex=0,zi.test(t))return i=S1.test(t),e[1]=Tf(e[1],i),e[0]=Tf(e[0],i,mp(e[1])),!0},ha,Tn=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,u,h,f,d,g=function _(p){var m=s()-n,M=p===!0,x,v,E,A;if((m>e||m<0)&&(i+=m-t),n+=m,E=n-i,x=E-a,(x>0||M)&&(A=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=x+(x>=r?4:r-x),v=1),M||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](E,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qd&&(!Vc&&Au()&&(Qn=Vc=window,Cu=Qn.document||{},An.gsap=dn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(dn.version),jd(_o||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),fp.forEach(dp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ha=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,m,M){var x=m?function(v,E,A,T){p(v,E,A,T),h.remove(x)}:p;return h.remove(p),o[M?"unshift":"push"](x),ms(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h})(),ms=function(){return!ha&&Tn.wake()},tt={},M1=/^[\d.\-M][\d.\-,\s]/,T1=/["']/g,E1=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(T1,"").trim():+c,n=l.substr(o+1).trim();return t},b1=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},w1=function(e){var t=(e+"").split("("),i=tt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[E1(t[1])]:b1(e).split(",").map($d)):tt._CE&&M1.test(e)?tt._CE("",e):i},gp=function(e){return function(t){return 1-e(1-t)}},vp=function s(e,t){for(var i=e._first,n;i;)i instanceof $t?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},_r=function(e,t){return e&&(Mt(e)?e:tt[e]||w1(e))||t},Er=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return un(e,function(o){tt[o]=An[o]=r,tt[a=o.toLowerCase()]=i;for(var l in r)tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=tt[o+"."+l]=r[l]}),r},xp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vl=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Gc*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*Ky((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:xp(o);return r=Gc/r,l.config=function(c,u){return s(e,c,u)},l},Hl=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:xp(i);return n.config=function(r){return s(e,r)},n};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Er(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;Er("Elastic",Vl("in"),Vl("out"),Vl());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Er("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Er("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Er("Circ",function(s){return-(Hd(1-s*s)-1)});Er("Sine",function(s){return s===1?1:-Jy(s*jy)+1});Er("Back",Hl("in"),Hl("out"),Hl());tt.SteppedEase=tt.steps=An.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-ct;return function(o){return((n*va(0,a,o)|0)+r)*i}}};hs.ease=tt["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Du+=s+","+s+"Params,"});var yp=function(e,t){this.id=Zy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kd,this.set=t?t.getSetter:Ou},fa=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ps(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),ha||Tn.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ms(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Oo(this,i),!r._dp||r.parent||np(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ei(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Qd(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+yf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+yf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ds(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?xo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ct?0:this._rts,this.totalTime(va(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),No(this),o1(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=gt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ei(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(cn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xo(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=i1);var n=Gt;return Gt=i,Lu(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Sf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Sf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Un(this,i),cn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,cn(n)),this._dur||(this._zTime=-ct),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-ct)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var o=Mt(i)?i:ep,l=function(){var u=n.then;n.then=null,r&&r(),Mt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=u),a(o),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){qs(this)},s})();Cn(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var $t=(function(s){Vd(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=cn(i.sortChildren),vt&&ei(i.parent||vt,pi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ip(pi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return $s(0,arguments,this),this},t.from=function(n,r,a){return $s(1,arguments,this),this},t.fromTo=function(n,r,a,o){return $s(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Qs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new At(n,r,Un(this,a),1),this},t.call=function(n,r,a){return ei(this,At.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new At(n,a,Un(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,u){return a.runBackwards=1,Qs(a).immediateRender=cn(a.immediateRender),this.staggerTo(n,r,a,o,l,c,u)},t.staggerFromTo=function(n,r,a,o,l,c,u,h){return o.startAt=a,Qs(o).immediateRender=cn(o.immediateRender),this.staggerTo(n,r,o,l,c,u,h)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:gt(n),h=this._zTime<0!=n<0&&(this._initted||!c),f,d,g,_,p,m,M,x,v,E,A,T;if(this!==vt&&u>l&&n>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),f=u,v=this._start,x=this._ts,m=!x,h&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,a);if(f=gt(u%p),u===l?(_=this._repeat,f=c):(E=gt(u/p),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=ds(this._tTime,p),!o&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,T=1),_!==E&&!this._lock){var C=A&&E&1,y=C===(A&&_&1);if(_<E&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(T?0:gt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=h1(this,gt(o),gt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&u&&c&&!r&&!E&&(En(this,"onStart"),this._tTime!==u))return this;if(f>=o&&n>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-ct);break}}d=g}else{d=this._last;for(var S=n<0?n:f;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,r,a||Gt&&Lu(d)),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=S?-ct:ct);break}}d=g}}if(M&&!r&&(this.pause(),M.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=v,No(this),this.render(n,r,a);this._onUpdate&&!r&&En(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(En(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Si(r)||(r=Un(this,r,n)),!(n instanceof fa)){if(Jt(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Ot(n))return this.addLabel(n,r);if(Mt(n))n=At.delayedCall(0,n);else return this}return this!==n?ei(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof At?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Ot(n)?this.removeLabel(n):Mt(n)?this.killTweensOf(n):(n.parent===this&&Io(this,n),n===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gt(Tn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Un(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=At.delayedCall(0,r||ca,a);return o.data="isPause",this._hasPause=1,ei(this,o,Un(this,n))},t.removePause=function(n){var r=this._first;for(n=Un(this,n);r;)r._start===n&&r.data==="isPause"&&Wi(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Li!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=Nn(n),l=this._first,c=Si(r),u;l;)l instanceof At?r1(l._targets,o)&&(c?(!Li||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Un(a,n),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=At.to(a,Cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ps(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Cn({startAt:{time:Un(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Mf(this,Un(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Mf(this,Un(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=gt(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return mr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),mr(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=In,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ei(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=gt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ps(a,a===vt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(vt._ts&&(Qd(vt,xo(n,vt)),Jd=Tn.frame),Tn.frame>=vf){vf+=wn.autoSleep||120;var r=vt._first;if((!r||!r._ts)&&wn.autoSleep&&Tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Tn.sleep()}}},e})(fa);Cn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var A1=function(e,t,i,n,r,a,o){var l=new hn(this._pt,e,t,0,1,wp,null,r),c=0,u=0,h,f,d,g,_,p,m,M;for(l.b=i,l.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=ua(n)),a&&(M=[i,n],a(M,e,t),i=M[0],n=M[1]),f=i.match(kl)||[];h=kl.exec(n);)g=h[0],_=n.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?es(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=kl.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Yd.test(n)||m)&&(l.e=0),this._pt=l,l},Fu=function(e,t,i,n,r,a,o,l,c,u){Mt(n)&&(n=n(r||0,e,a));var h=e[t],f=i!=="get"?i:Mt(h)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Mt(h)?c?U1:Ep:Nu,g;if(Ot(n)&&(~n.indexOf("random(")&&(n=ua(n)),n.charAt(1)==="="&&(g=es(f,n)+(qt(f)||0),(g||g===0)&&(n=g))),!u||f!==n||Zc)return!isNaN(f*n)&&n!==""?(g=new hn(this._pt,e,t,+f||0,n-(f||0),typeof h=="boolean"?F1:bp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Ru(t,n),A1.call(this,e,t,f,n,d,l||wn.stringFilter,c))},C1=function(e,t,i,n,r){if(Mt(e)&&(e=ea(e,r,t,i,n)),!ii(e)||e.style&&e.nodeType||Jt(e)||Wd(e))return Ot(e)?ea(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=ea(e[o],r,t,i,n);return a},Sp=function(e,t,i,n,r,a){var o,l,c,u;if(xn[e]&&(o=new xn[e]).init(r,o.rawVars?t[e]:C1(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new hn(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Jr))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Li,Zc,Iu=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!bu,v=e.timeline,E,A,T,C,y,S,U,P,L,F,z,O,j;if(v&&(!f||!r)&&(r="none"),e._ease=_r(r,hs.ease),e._yEase=h?gp(_r(h===!0?r:h,hs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!n.runBackwards,!v||f&&!n.stagger){if(P=p[0]?pr(p[0]).harness:0,O=P&&n[P.prop],E=vo(n,Pu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?ao:n1),_._lazy=0),a){if(Wi(e._startAt=At.set(p,Cn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&cn(l),startAt:null,delay:0,onUpdate:c&&function(){return En(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!d)&&e._startAt.revert(ao),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),T=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&cn(l),immediateRender:o,stagger:0,parent:m},E),O&&(T[P.prop]=O),Wi(e._startAt=At.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(ao):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&cn(l)||l&&!g,A=0;A<p.length;A++){if(y=p[A],U=y._gsap||Uu(p)[A]._gsap,e._ptLookup[A]=F={},Hc[U.id]&&ki.length&&go(),z=M===p?A:M.indexOf(y),P&&(L=new P).init(y,O||E,e,z,M)!==!1&&(e._pt=C=new hn(e._pt,y,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){F[H]=C}),L.priority&&(S=1)),!P||O)for(T in E)xn[T]&&(L=Sp(T,E,e,z,y,M))?L.priority&&(S=1):F[T]=C=Fu.call(e,y,T,"get",E[T],z,M,0,n.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),x&&e._pt&&(Li=e,vt.killTweensOf(y,F,e.globalTime(t)),j=!e.parent,Li=0),e._pt&&l&&(Hc[U.id]=1)}S&&Ap(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&v.render(In,!0,!0)},R1=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Zc=1,e.vars[t]="+=0",Iu(e,o),Zc=0,l?la(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(n||n===0)&&!r?n:u.s+(n||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Et(i)+qt(h.e)),h.b&&(h.b=u.s+qt(h.b))},P1=function(e,t){var i=e[0]?pr(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=fs({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},D1=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(Jt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ea=function(e,t,i,n,r){return Mt(e)?e.call(t,i,n,r):Ot(e)&&~e.indexOf("random(")?ua(e):e},Mp=Du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tp={};un(Mp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Tp[s]=1});var At=(function(s){Vd(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:Qs(n))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=n.parent||vt,x=(Jt(i)||Wd(i)?Si(i[0]):"length"in n)?[i]:Nn(i),v,E,A,T,C,y,S,U;if(o._targets=x.length?Uu(x):la("GSAP target "+i+" not found. https://gsap.com",!wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ja(c)||Ja(u)){if(n=o.vars,v=o.timeline=new $t({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=pi(o),v._start=0,f||Ja(c)||Ja(u)){if(T=x.length,S=f&&op(f),ii(f))for(C in f)~Mp.indexOf(C)&&(U||(U={}),U[C]=f[C]);for(E=0;E<T;E++)A=vo(n,Tp),A.stagger=0,m&&(A.yoyoEase=m),U&&fs(A,U),y=x[E],A.duration=+ea(c,pi(o),E,y,x),A.delay=(+ea(u,pi(o),E,y,x)||0)-o._delay,!f&&T===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),v.to(y,A,S?S(E,y,x):0),v._ease=tt.none;v.duration()?c=u=0:o.timeline=0}else if(g){Qs(Cn(v.vars.defaults,{ease:"none"})),v._ease=_r(g.ease||n.ease||"none");var P=0,L,F,z;if(Jt(g))g.forEach(function(O){return v.to(x,O,">")}),v.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||D1(C,g[C],A,g.easeEach);for(C in A)for(L=A[C].sort(function(O,j){return O.t-j.t}),P=0,E=0;E<L.length;E++)F=L[E],z={ease:F.e,duration:(F.t-(E?L[E-1].t:0))/100*c},z[C]=F.v,v.to(x,z,P),P+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!bu&&(Li=pi(o),vt.killTweensOf(x),Li=0),ei(M,pi(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(h||!c&&!g&&o._start===gt(M._time)&&cn(h)&&l1(pi(o))&&M.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),p&&ip(pi(o),p),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-ct&&!u?l:n<ct?0:n,f,d,g,_,p,m,M,x,v;if(!c)u1(this,n,r,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,r,a);if(f=gt(h%_),h===l?(g=this._repeat,f=c):(p=gt(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,f=c-f),p=ds(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&vp(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(gt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(rp(this,u?n:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!o&&h&&!r&&!p&&(En(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(n<0?n:x._dur*x._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&Wc(this,n,r,a),En(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Wc(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Wi(this,1),!r&&!(u&&!o)&&(h||o||m)&&(En(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){ha||Tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Iu(this,c),u=this._ease(c/this._dur),R1(this,n,r,a,o,u,c,l)?this.resetTo(n,r,a,o,1):(Oo(this,0),this.parent||tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Li&&Li.vars.overwrite!==!0)._first||qs(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Nn(n):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!r||r==="all")&&a1(o,l))return r==="all"&&(this._pt=0),qs(this);for(h=this._op=this._op||[],r!=="all"&&(Ot(r)&&(_={},un(r,function(M){return _[M]=1}),r=_),r=P1(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,g=f,d={}):(d=h[m]=h[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Io(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&qs(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return $s(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return $s(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return vt.killTweensOf(n,r,a)},e})(fa);Cn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(s){At[s]=function(){var e=new $t,t=Yc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Nu=function(e,t,i){return e[t]=i},Ep=function(e,t,i){return e[t](i)},U1=function(e,t,i,n){return e[t](n.fp,i)},L1=function(e,t,i){return e.setAttribute(t,i)},Ou=function(e,t){return Mt(e[t])?Ep:wu(e[t])&&e.setAttribute?L1:Nu},bp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},F1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wp=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Bu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},I1=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},N1=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Io(this,t,"_pt"):t.dep||(i=1),t=n;return!i},O1=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Ap=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},hn=(function(){function s(t,i,n,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||bp,this.d=l||this,this.set=c||Nu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=O1,this.m=i,this.mt=r,this.tween=n},s})();un(Du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Pu[s]=1});An.TweenMax=An.TweenLite=At;An.TimelineLite=An.TimelineMax=$t;vt=new $t({sortChildren:!1,defaults:hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=_p;var gr=[],lo={},B1=[],Ef=0,k1=0,Wl=function(e){return(lo[e]||B1).map(function(t){return t()})},Jc=function(){var e=Date.now(),t=[];e-Ef>2&&(Wl("matchMediaInit"),gr.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=Qn.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Wl("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Ef=e,Wl("matchMedia"))},Cp=(function(){function s(t,i){this.selector=i&&qc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=k1++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){Mt(i)&&(r=n,n=i,i=Mt);var a=this,o=function(){var c=mt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=qc(r)),mt=a,h=n.apply(a,arguments),Mt(h)&&a._r.push(h),mt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===Mt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=mt;mt=null,i(this),mt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof At&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof $t?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof At)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=gr.length;a--;)gr[a].id===this.id&&gr.splice(a,1)},e.revert=function(i){this.kill(i||{})},s})(),z1=(function(){function s(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){ii(i)||(i={matches:i});var a=new Cp(0,r||this.scope),o=a.conditions={},l,c,u;mt&&!a.selector&&(a.selector=mt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?u=1:(l=Qn.matchMedia(i[c]),l&&(gr.indexOf(a)<0&&gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jc):l.addEventListener("change",Jc)));return u&&n(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return dp(n)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ot(e)&&(e=Nn(e)[0]);var r=pr(e||{}).get,a=i?ep:$d;return i==="native"&&(i=""),e&&(t?a((xn[t]&&xn[t].get||r)(e,t,i,n)):function(o,l,c){return a((xn[o]&&xn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Nn(e),e.length>1){var n=e.map(function(u){return dn.quickSetter(u,t,i)}),r=n.length;return function(u){for(var h=r;h--;)n[h](u)}}e=e[0]||{};var a=xn[t],o=pr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Jr._pt=0,h.init(e,i?u+i:u,Jr,0,[e]),h.render(1,h),Jr._pt&&Bu(1,Jr)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=dn.to(e,Cn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_r(e.ease,hs.ease)),xf(hs,e||{})},config:function(e){return xf(wn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!xn[o]&&!An[o]&&la(t+" effect requires "+o+" plugin.")}),zl[t]=function(o,l,c){return i(Nn(o),Cn(l||{},r),c)},a&&($t.prototype[t]=function(o,l,c){return this.add(zl[t](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){tt[e]=_r(t)},parseEase:function(e,t){return arguments.length?_r(e,t):tt},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new $t(e),n,r;for(i.smoothChildTiming=cn(e.smoothChildTiming),vt.remove(i),i._dp=0,i._time=i._tTime=vt._time,n=vt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof At&&n.vars.onComplete===n._targets[0]))&&ei(i,n,n._start-n._delay),n=r;return ei(vt,i,0),i},context:function(e,t){return e?new Cp(e,t):mt},matchMedia:function(e){return new z1(e)},matchMediaRefresh:function(){return gr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Jc()},addEventListener:function(e,t){var i=lo[e]||(lo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=lo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:v1,wrapYoyo:x1,distribute:op,random:cp,snap:lp,normalize:g1,getUnit:qt,clamp:d1,splitColor:pp,toArray:Nn,selector:qc,mapRange:hp,pipe:m1,unitize:_1,interpolate:y1,shuffle:ap},install:jd,effects:zl,ticker:Tn,updateRoot:$t.updateRoot,plugins:xn,globalTimeline:vt,core:{PropTween:hn,globals:Zd,Tween:At,Timeline:$t,Animation:fa,getCache:pr,_removeLinkedListItem:Io,reverting:function(){return Gt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return bu=e}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return yo[s]=At[s]});Tn.add($t.updateRoot);Jr=yo.to({},{duration:0});var G1=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},V1=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=G1(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Xl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Ot(r)&&(l={},un(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}V1(o,r)}}}},dn=yo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Xl("roundProps",jc),Xl("modifiers"),Xl("snap",lp))||yo;At.version=$t.version=dn.version="3.14.2";qd=1;Au()&&ms();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bf,Fi,ts,ku,dr,wf,zu,H1=function(){return typeof window<"u"},Mi={},lr=180/Math.PI,ns=Math.PI/180,Xr=Math.atan2,Af=1e8,Gu=/([A-Z])/g,W1=/(left|right|width|margin|padding|x)/i,X1=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Y1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},q1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},j1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Z1=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Rp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Pp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},J1=function(e,t,i){return e.style[t]=i},K1=function(e,t,i){return e.style.setProperty(t,i)},Q1=function(e,t,i){return e._gsap[t]=i},$1=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},eS=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},tS=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},yt="transform",fn=yt+"Origin",nS=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in Mi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=mi(n,o)}):this.tfm[e]=a.x?a[e]:mi(n,e),e===fn&&(this.tfm.zOrigin=a.zOrigin);else return ti.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(yt)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(fn,t,"")),e=yt}(r||t)&&this.props.push(e,t,r[e])},Dp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iS=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Gu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=zu(),(!r||!r.isStart)&&!i[yt]&&(Dp(i),n.zOrigin&&i[fn]&&(i[fn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Up=function(e,t){var i={target:e,props:[],revert:iS,save:nS};return e._gsap||dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Lp,Qc=function(e,t){var i=Fi.createElementNS?Fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fi.createElement(e);return i&&i.style?i:Fi.createElement(e)},bn=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Gu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,_s(t)||t,1)||""},Cf="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,i){var n=t||dr,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Cf[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Cf[a]:"")+e},$c=function(){H1()&&window.document&&(bf=window,Fi=bf.document,ts=Fi.documentElement,dr=Qc("div")||{style:{}},Qc("div"),yt=_s(yt),fn=yt+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lp=!!_s("perspective"),zu=dn.core.reverting,ku=1)},Rf=function(e){var t=e.ownerSVGElement,i=Qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),ts.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),ts.removeChild(i),r},Pf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Fp=function(e){var t,i;try{t=e.getBBox()}catch{t=Rf(e),i=1}return t&&(t.width||t.height)||i||(t=Rf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Pf(e,["x","cx","x1"])||0,y:+Pf(e,["y","cy","y1"])||0,width:0,height:0}:t},Ip=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fp(e))},Xi=function(e,t){if(t){var i=e.style,n;t in Mi&&t!==fn&&(t=yt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Gu,"-$1").toLowerCase())):i.removeAttribute(t)}},Ii=function(e,t,i,n,r,a){var o=new hn(e._pt,t,i,0,1,a?Pp:Rp);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Df={deg:1,rad:1,turn:1},rS={grid:1,flex:1},Yi=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=dr.style,l=W1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",g,_,p,m;if(n===a||!r||Df[n]||Df[a])return r;if(a!=="px"&&!f&&(r=s(e,t,i,"px")),m=e.getCTM&&Ip(e),(d||a==="%")&&(Mi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Et(d?r/g*h:r/100*g);if(o[l?"width":"height"]=h+(f?a:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Fi||!_.appendChild)&&(_=Fi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Tn.time&&!p.uncache)return Et(r/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+n,g=e[u],M?e.style[t]=M:Xi(e,t)}else(d||a==="%")&&!rS[bn(_,"display")]&&(o.position=bn(e,"position")),_===e&&(o.position="static"),_.appendChild(dr),g=dr[u],_.removeChild(dr),o.position="absolute";return l&&d&&(p=pr(_),p.time=Tn.time,p.width=_[u]),Et(f?g*r/h:g&&r?h/g*r:0)},mi=function(e,t,i,n){var r;return ku||$c(),t in ti&&t!=="transform"&&(t=ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mi[t]&&t!=="transform"?(r=pa(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Mo(bn(e,fn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=So[t]&&So[t](e,t,i)||bn(e,t)||Kd(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Yi(e,t,r,i)+i:r},sS=function(e,t,i,n){if(!i||i==="none"){var r=_s(t,e,1),a=r&&bn(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=bn(e,"borderTopColor"))}var o=new hn(this._pt,e.style,t,0,1,wp),l=0,c=0,u,h,f,d,g,_,p,m,M,x,v,E;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=bn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=bn(e,t)||n,_?e.style[t]=_:Xi(e,t)),u=[i,n],_p(u),i=u[0],n=u[1],f=i.match(Zr)||[],E=n.match(Zr)||[],E.length){for(;h=Zr.exec(n);)p=h[0],M=n.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=es(d,p)+v),m=parseFloat(p),x=p.substr((m+"").length),l=Zr.lastIndex-x.length,x||(x=x||wn.units[t]||v,l===n.length&&(n+=x,o.e+=x)),v!==x&&(d=Yi(e,t,_,x)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Pp:Rp;return Yd.test(n)&&(o.e=0),this._pt=o,o},Uf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aS=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Uf[i]||i,t[1]=Uf[n]||n,t.join(" ")},oS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Mi[o]&&(l=1,o=o==="transformOrigin"?fn:yt),Xi(i,o);l&&(Xi(i,yt),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",pa(i,1),a.uncache=1,Dp(n)))}},So={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new hn(e._pt,t,i,0,0,oS);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},da=[1,0,0,1,0,0],Np={},Op=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lf=function(e){var t=bn(e,yt);return Op(t)?da:t.substr(7).match(Xd).map(Et)},Vu=function(e,t){var i=e._gsap||pr(e),n=e.style,r=Lf(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?da:r):(r===da&&!e.offsetParent&&e!==ts&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ts.appendChild(e)),r=Lf(e),l?n.display=l:Xi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ts.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},eu=function(e,t,i,n,r,a){var o=e._gsap,l=r||Vu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],x=t.split(" "),v=parseFloat(x[0])||0,E=parseFloat(x[1])||0,A,T,C,y;i?l!==da&&(T=d*p-g*_)&&(C=v*(p/T)+E*(-_/T)+(_*M-p*m)/T,y=v*(-g/T)+E*(d/T)-(d*M-g*m)/T,v=C,E=y):(A=Fp(e),v=A.x+(~x[0].indexOf("%")?v/100*A.width:v),E=A.y+(~(x[1]||x[0]).indexOf("%")?E/100*A.height:E)),n||n!==!1&&o.smooth?(m=v-c,M=E-u,o.xOffset=h+(m*d+M*_)-m,o.yOffset=f+(m*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[fn]="0px 0px",a&&(Ii(a,o,"xOrigin",c,v),Ii(a,o,"yOrigin",u,E),Ii(a,o,"xOffset",h,o.xOffset),Ii(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},pa=function(e,t){var i=e._gsap||new yp(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=bn(e,fn)||"0",u,h,f,d,g,_,p,m,M,x,v,E,A,T,C,y,S,U,P,L,F,z,O,j,H,K,Z,I,W,ee,N,k;return u=h=f=_=p=m=M=x=v=0,d=g=1,i.svg=!!(e.getCTM&&Ip(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),n.scale=n.rotate=n.translate="none"),T=Vu(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),eu(e,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,T)),E=i.xOrigin||0,A=i.yOrigin||0,T!==da&&(U=T[0],P=T[1],L=T[2],F=T[3],u=z=T[4],h=O=T[5],T.length===6?(d=Math.sqrt(U*U+P*P),g=Math.sqrt(F*F+L*L),_=U||P?Xr(P,U)*lr:0,M=L||F?Xr(L,F)*lr+_:0,M&&(g*=Math.abs(Math.cos(M*ns))),i.svg&&(u-=E-(E*U+A*L),h-=A-(E*P+A*F))):(k=T[6],ee=T[7],Z=T[8],I=T[9],W=T[10],N=T[11],u=T[12],h=T[13],f=T[14],C=Xr(k,W),p=C*lr,C&&(y=Math.cos(-C),S=Math.sin(-C),j=z*y+Z*S,H=O*y+I*S,K=k*y+W*S,Z=z*-S+Z*y,I=O*-S+I*y,W=k*-S+W*y,N=ee*-S+N*y,z=j,O=H,k=K),C=Xr(-L,W),m=C*lr,C&&(y=Math.cos(-C),S=Math.sin(-C),j=U*y-Z*S,H=P*y-I*S,K=L*y-W*S,N=F*S+N*y,U=j,P=H,L=K),C=Xr(P,U),_=C*lr,C&&(y=Math.cos(C),S=Math.sin(C),j=U*y+P*S,H=z*y+O*S,P=P*y-U*S,O=O*y-z*S,U=j,z=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Et(Math.sqrt(U*U+P*P+L*L)),g=Et(Math.sqrt(O*O+k*k)),C=Xr(z,O),M=Math.abs(C)>2e-4?C*lr:0,v=N?1/(N<0?-N:N):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Op(bn(e,yt)),j&&e.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Et(d),i.scaleY=Et(g),i.rotation=Et(_)+o,i.rotationX=Et(p)+o,i.rotationY=Et(m)+o,i.skewX=M+o,i.skewY=x+o,i.transformPerspective=v+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[fn]=Mo(c)),i.xOffset=i.yOffset=0,i.force3D=wn.force3D,i.renderTransform=i.svg?cS:Lp?Bp:lS,i.uncache=0,i},Mo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yl=function(e,t,i){var n=qt(t);return Et(parseFloat(t)+parseFloat(Yi(e,"x",i+"px",n)))+n},lS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Bp(e,t)},nr="0deg",Ws="0px",ir=") ",Bp=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,M=i.target,x=i.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==nr||u!==nr)){var A=parseFloat(u)*ns,T=Math.sin(A),C=Math.cos(A),y;A=parseFloat(h)*ns,y=Math.cos(A),a=Yl(M,a,T*y*-x),o=Yl(M,o,-Math.sin(A)*-x),l=Yl(M,l,C*y*-x+x)}p!==Ws&&(v+="perspective("+p+ir),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(E||a!==Ws||o!==Ws||l!==Ws)&&(v+=l!==Ws||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ir),c!==nr&&(v+="rotate("+c+ir),u!==nr&&(v+="rotateY("+u+ir),h!==nr&&(v+="rotateX("+h+ir),(f!==nr||d!==nr)&&(v+="skew("+f+", "+d+ir),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ir),M.style[yt]=v||"translate(0, 0)"},cS=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,M=i.forceCSS,x=parseFloat(a),v=parseFloat(o),E,A,T,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ns,c*=ns,E=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=ns,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),E*=y,A*=y)),E=Et(E),A=Et(A),T=Et(T),C=Et(C)):(E=h,C=f,A=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Yi(d,"x",a,"px"),v=Yi(d,"y",o,"px")),(g||_||p||m)&&(x=Et(x+g-(g*E+_*T)+p),v=Et(v+_-(g*A+_*C)+m)),(n||r)&&(y=d.getBBox(),x=Et(x+n/100*y.width),v=Et(v+r/100*y.height)),y="matrix("+E+","+A+","+T+","+C+","+x+","+v+")",d.setAttribute("transform",y),M&&(d.style[yt]=y)},uS=function(e,t,i,n,r){var a=360,o=Ot(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?lr:1),c=l-n,u=n+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Af)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Af)%a-~~(c/a)*a)),e._pt=f=new hn(e._pt,t,i,n,c,Y1),f.e=u,f.u="deg",e._props.push(i),f},Ff=function(e,t){for(var i in t)e[i]=t[i];return e},hS=function(e,t,i){var n=Ff({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,d,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[yt]=t,o=pa(i,1),Xi(i,yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[yt],a[yt]=t,o=pa(i,1),a[yt]=c);for(l in Mi)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=qt(c),g=qt(u),h=d!==g?Yi(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new hn(e._pt,o,l,h,f-h,Kc),e._pt.u=g||0,e._props.push(l));Ff(o,n)};un("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});So[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return mi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var kp={name:"css",register:$c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,d,g,_,p,m,M,x,v,E,A,T,C,y;ku||$c(),this.styles=this.styles||Up(e),C=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(xn[_]&&Sp(_,t,i,n,e,r)))){if(d=typeof u,g=So[_],d==="function"&&(u=u.call(i,n,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ua(u)),g)g(this,e,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",zi.lastIndex=0,zi.test(c)||(p=qt(c),m=qt(u),m?p!==m&&(c=Yi(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,n,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,r):l[_],Ot(c)&&~c.indexOf("random(")&&(c=ua(c)),qt(c+"")||c==="auto"||(c+=wn.units[_]||qt(mi(e,_))||""),(c+"").charAt(1)==="="&&(c=mi(e,_))):c=mi(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in ti&&(_==="autoAlpha"&&(f===1&&mi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Ii(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Mi,x){if(this.styles.save(_),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=bn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=bn(e,"perspective"),S?e.style.perspective=S:Xi(e,"perspective")}h=parseFloat(u)}if(v||(E=e._gsap,E.renderTransform&&!t.parseTransform||pa(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new hn(this._pt,o,yt,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new hn(this._pt,E,"scaleY",E.scaleY,(M?es(E.scaleY,M+h):h)-E.scaleY||0,Kc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(fn,0,o[fn]),u=aS(u),E.svg?eu(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Ii(this,E,"zOrigin",E.zOrigin,m),Ii(this,o,_,Mo(c),Mo(u)));continue}else if(_==="svgOrigin"){eu(e,u,1,A,0,this);continue}else if(_ in Np){uS(this,E,_,f,M?es(f,M+u):u);continue}else if(_==="smoothOrigin"){Ii(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){hS(this,u,e);continue}}else _ in o||(_=_s(_)||_);if(x||(h||h===0)&&(f||f===0)&&!X1.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),m=qt(u)||(_ in wn.units?wn.units[_]:p),p!==m&&(f=Yi(e,_,c,m)),this._pt=new hn(this._pt,x?E:o,_,f,(M?es(f,M+h):h)-f,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Z1:Kc),this._pt.u=m||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=j1):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=q1);else if(_ in o)sS.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,n,r);else if(_!=="parseTransform"){Ru(_,u);continue}x||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}T&&Ap(this)},render:function(e,t){if(t.tween._time||!zu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mi,aliases:ti,getSetter:function(e,t,i){var n=ti[t];return n&&n.indexOf(",")<0&&(t=n),t in Mi&&t!==fn&&(e._gsap.x||mi(e,"x"))?i&&wf===i?t==="scale"?$1:Q1:(wf=i||{})&&(t==="scale"?eS:tS):e.style&&!wu(e.style[t])?J1:~t.indexOf("-")?K1:Ou(e,t)},core:{_removeProperty:Xi,_getMatrix:Vu}};dn.utils.checkPrefix=_s;dn.core.getStyleSaver=Up;(function(s,e,t,i){var n=un(s+","+e+","+t,function(r){Mi[r]=1});un(e,function(r){wn.units[r]="deg",Np[r]=1}),ti[n[13]]=s+","+e,un(i,function(r){var a=r.split(":");ti[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){wn.units[s]="px"});dn.registerPlugin(kp);var dt=dn.registerPlugin(kp)||dn;dt.core.Tween;function fS(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function dS(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var zp=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return zp=function(){return s},s},pS=0,mS=0,ql=!1,ta=Object.create(null),na=Object.create(null),tu=Object.create(null);function bs(s){if((!s||typeof s.init!="function")&&!ql)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!zp())return dS(s);n==null&&(n="#default");var r="workerModule"+ ++pS,a=s.name||r,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(ql=!0,c=bs({workerId:n,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+co(c)+`
)}`}),ql=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=If(n,"registerModule",l.workerModuleData);var h=function(){o=null,na[n].delete(h)};(na[n]||(na[n]=new Set)).add(h)}return o.then(function(f){var d=f.isCallable;if(d)return If(n,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:a,dependencies:e,init:co(t),getTransferables:i&&co(i)},l}function _S(s){na[s]&&na[s].forEach(function(e){e()}),ta[s]&&(ta[s].terminate(),delete ta[s])}function co(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function gS(s){var e=ta[s];if(!e){var t=co(fS);e=ta[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=tu[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete tu[r],a(n)}}return e}function If(s,e,t){return new Promise(function(i,n){var r=++mS;tu[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},gS(s).postMessage({messageId:r,action:e,data:t})})}function Gp(){var s=(function(e){function t(K,Z,I,W,ee,N,k,ie){var X=1-k;ie.x=X*X*K+2*X*k*I+k*k*ee,ie.y=X*X*Z+2*X*k*W+k*k*N}function i(K,Z,I,W,ee,N,k,ie,X,se){var Ee=1-X;se.x=Ee*Ee*Ee*K+3*Ee*Ee*X*I+3*Ee*X*X*ee+X*X*X*k,se.y=Ee*Ee*Ee*Z+3*Ee*Ee*X*W+3*Ee*X*X*N+X*X*X*ie}function n(K,Z){for(var I=/([MLQCZ])([^MLQCZ]*)/g,W,ee,N,k,ie;W=I.exec(K);){var X=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(se){return parseFloat(se)});switch(W[1]){case"M":k=ee=X[0],ie=N=X[1];break;case"L":(X[0]!==k||X[1]!==ie)&&Z("L",k,ie,k=X[0],ie=X[1]);break;case"Q":{Z("Q",k,ie,k=X[2],ie=X[3],X[0],X[1]);break}case"C":{Z("C",k,ie,k=X[4],ie=X[5],X[0],X[1],X[2],X[3]);break}case"Z":(k!==ee||ie!==N)&&Z("L",k,ie,ee,N);break}}}function r(K,Z,I){I===void 0&&(I=16);var W={x:0,y:0};n(K,function(ee,N,k,ie,X,se,Ee,ge,xe){switch(ee){case"L":Z(N,k,ie,X);break;case"Q":{for(var q=N,ce=k,D=1;D<I;D++)t(N,k,se,Ee,ie,X,D/(I-1),W),Z(q,ce,W.x,W.y),q=W.x,ce=W.y;break}case"C":{for(var Me=N,le=k,ye=1;ye<I;ye++)i(N,k,se,Ee,ge,xe,ie,X,ye/(I-1),W),Z(Me,le,W.x,W.y),Me=W.x,le=W.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(K,Z){var I=K.getContext?K.getContext("webgl",c):K,W=l.get(I);if(!W){let Me=function(w){var b=N[w];if(!b&&(b=N[w]=I.getExtension(w),!b))throw new Error(w+" not supported");return b},le=function(w,b){var B=I.createShader(b);return I.shaderSource(B,w),I.compileShader(B),B},ye=function(w,b,B,$){if(!k[w]){var te={},oe={},pe=I.createProgram();I.attachShader(pe,le(b,I.VERTEX_SHADER)),I.attachShader(pe,le(B,I.FRAGMENT_SHADER)),I.linkProgram(pe),k[w]={program:pe,transaction:function(ve){I.useProgram(pe),ve({setUniform:function(fe,we){for(var Ce=[],Re=arguments.length-2;Re-- >0;)Ce[Re]=arguments[Re+2];var de=oe[we]||(oe[we]=I.getUniformLocation(pe,we));I["uniform"+fe].apply(I,[de].concat(Ce))},setAttribute:function(fe,we,Ce,Re,de){var Ie=te[fe];Ie||(Ie=te[fe]={buf:I.createBuffer(),loc:I.getAttribLocation(pe,fe),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Ie.buf),I.vertexAttribPointer(Ie.loc,we,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Ie.loc),ee?I.vertexAttribDivisor(Ie.loc,Re):Me("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ie.loc,Re),de!==Ie.data&&(I.bufferData(I.ARRAY_BUFFER,de,Ce),Ie.data=de)}})}}}k[w].transaction($)},ne=function(w,b){X++;try{I.activeTexture(I.TEXTURE0+X);var B=ie[w];B||(B=ie[w]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,B),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,B),b(B,X)}finally{X--}},Te=function(w,b,B){var $=I.createFramebuffer();se.push($),I.bindFramebuffer(I.FRAMEBUFFER,$),I.activeTexture(I.TEXTURE0+b),I.bindTexture(I.TEXTURE_2D,w),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,w,0);try{B($)}finally{I.deleteFramebuffer($),I.bindFramebuffer(I.FRAMEBUFFER,se[--se.length-1]||null)}},ue=function(){N={},k={},ie={},X=-1,se.length=0};var Ee=Me,ge=le,xe=ye,q=ne,ce=Te,D=ue,ee=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,N={},k={},ie={},X=-1,se=[];I.canvas.addEventListener("webglcontextlost",function(w){ue(),w.preventDefault()},!1),l.set(I,W={gl:I,isWebGL2:ee,getExtension:Me,withProgram:ye,withTexture:ne,withTextureFramebuffer:Te,handleContextLoss:ue})}Z(W)}function h(K,Z,I,W,ee,N,k,ie){k===void 0&&(k=15),ie===void 0&&(ie=null),u(K,function(X){var se=X.gl,Ee=X.withProgram,ge=X.withTexture;ge("copy",function(xe,q){se.texImage2D(se.TEXTURE_2D,0,se.RGBA,ee,N,0,se.RGBA,se.UNSIGNED_BYTE,Z),Ee("copy",a,o,function(ce){var D=ce.setUniform,Me=ce.setAttribute;Me("aUV",2,se.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),D("1i","image",q),se.bindFramebuffer(se.FRAMEBUFFER,ie||null),se.disable(se.BLEND),se.colorMask(k&8,k&4,k&2,k&1),se.viewport(I,W,ee,N),se.scissor(I,W,ee,N),se.drawArrays(se.TRIANGLES,0,3)})})})}function f(K,Z,I){var W=K.width,ee=K.height;u(K,function(N){var k=N.gl,ie=new Uint8Array(W*ee*4);k.readPixels(0,0,W,ee,k.RGBA,k.UNSIGNED_BYTE,ie),K.width=Z,K.height=I,h(k,ie,0,0,W,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(K,Z,I,W,ee,N){N===void 0&&(N=1);var k=new Uint8Array(K*Z),ie=W[2]-W[0],X=W[3]-W[1],se=[];r(I,function(Me,le,ye,ne){se.push({x1:Me,y1:le,x2:ye,y2:ne,minX:Math.min(Me,ye),minY:Math.min(le,ne),maxX:Math.max(Me,ye),maxY:Math.max(le,ne)})}),se.sort(function(Me,le){return Me.maxX-le.maxX});for(var Ee=0;Ee<K;Ee++)for(var ge=0;ge<Z;ge++){var xe=ce(W[0]+ie*(Ee+.5)/K,W[1]+X*(ge+.5)/Z),q=Math.pow(1-Math.abs(xe)/ee,N)/2;xe<0&&(q=1-q),q=Math.max(0,Math.min(255,Math.round(q*255))),k[ge*K+Ee]=q}return k;function ce(Me,le){for(var ye=1/0,ne=1/0,Te=se.length;Te--;){var ue=se[Te];if(ue.maxX+ne<=Me)break;if(Me+ne>ue.minX&&le-ne<ue.maxY&&le+ne>ue.minY){var w=m(Me,le,ue.x1,ue.y1,ue.x2,ue.y2);w<ye&&(ye=w,ne=Math.sqrt(ye))}}return D(Me,le)&&(ne=-ne),ne}function D(Me,le){for(var ye=0,ne=se.length;ne--;){var Te=se[ne];if(Te.maxX<=Me)break;var ue=Te.y1>le!=Te.y2>le&&Me<(Te.x2-Te.x1)*(le-Te.y1)/(Te.y2-Te.y1)+Te.x1;ue&&(ye+=Te.y1<Te.y2?1:-1)}return ye!==0}}function _(K,Z,I,W,ee,N,k,ie,X,se){N===void 0&&(N=1),ie===void 0&&(ie=0),X===void 0&&(X=0),se===void 0&&(se=0),p(K,Z,I,W,ee,N,k,null,ie,X,se)}function p(K,Z,I,W,ee,N,k,ie,X,se,Ee){N===void 0&&(N=1),X===void 0&&(X=0),se===void 0&&(se=0),Ee===void 0&&(Ee=0);for(var ge=g(K,Z,I,W,ee,N),xe=new Uint8Array(ge.length*4),q=0;q<ge.length;q++)xe[q*4+Ee]=ge[q];h(k,xe,X,se,K,Z,1<<3-Ee,ie)}function m(K,Z,I,W,ee,N){var k=ee-I,ie=N-W,X=k*k+ie*ie,se=X?Math.max(0,Math.min(1,((K-I)*k+(Z-W)*ie)/X)):0,Ee=K-(I+se*k),ge=Z-(W+se*ie);return Ee*Ee+ge*ge}var M=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),T=null,C=!1,y={},S=new WeakMap;function U(K){if(!C&&!z(K))throw new Error("WebGL generation not supported")}function P(K,Z,I,W,ee,N,k){if(N===void 0&&(N=1),k===void 0&&(k=null),!k&&(k=T,!k)){var ie=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ie)throw new Error("OffscreenCanvas or DOM canvas not supported");k=T=ie.getContext("webgl",{depth:!1})}U(k);var X=new Uint8Array(K*Z*4);u(k,function(xe){var q=xe.gl,ce=xe.withTexture,D=xe.withTextureFramebuffer;ce("readable",function(Me,le){q.texImage2D(q.TEXTURE_2D,0,q.RGBA,K,Z,0,q.RGBA,q.UNSIGNED_BYTE,null),D(Me,le,function(ye){F(K,Z,I,W,ee,N,q,ye,0,0,0),q.readPixels(0,0,K,Z,q.RGBA,q.UNSIGNED_BYTE,X)})})});for(var se=new Uint8Array(K*Z),Ee=0,ge=0;Ee<X.length;Ee+=4)se[ge++]=X[Ee];return se}function L(K,Z,I,W,ee,N,k,ie,X,se){N===void 0&&(N=1),ie===void 0&&(ie=0),X===void 0&&(X=0),se===void 0&&(se=0),F(K,Z,I,W,ee,N,k,null,ie,X,se)}function F(K,Z,I,W,ee,N,k,ie,X,se,Ee){N===void 0&&(N=1),X===void 0&&(X=0),se===void 0&&(se=0),Ee===void 0&&(Ee=0),U(k);var ge=[];r(I,function(xe,q,ce,D){ge.push(xe,q,ce,D)}),ge=new Float32Array(ge),u(k,function(xe){var q=xe.gl,ce=xe.isWebGL2,D=xe.getExtension,Me=xe.withProgram,le=xe.withTexture,ye=xe.withTextureFramebuffer,ne=xe.handleContextLoss;if(le("rawDistances",function(Te,ue){(K!==Te._lastWidth||Z!==Te._lastHeight)&&q.texImage2D(q.TEXTURE_2D,0,q.RGBA,Te._lastWidth=K,Te._lastHeight=Z,0,q.RGBA,q.UNSIGNED_BYTE,null),Me("main",x,v,function(w){var b=w.setAttribute,B=w.setUniform,$=!ce&&D("ANGLE_instanced_arrays"),te=!ce&&D("EXT_blend_minmax");b("aUV",2,q.STATIC_DRAW,0,A),b("aLineSegment",4,q.DYNAMIC_DRAW,1,ge),B.apply(void 0,["4f","uGlyphBounds"].concat(W)),B("1f","uMaxDistance",ee),B("1f","uExponent",N),ye(Te,ue,function(oe){q.enable(q.BLEND),q.colorMask(!0,!0,!0,!0),q.viewport(0,0,K,Z),q.scissor(0,0,K,Z),q.blendFunc(q.ONE,q.ONE),q.blendEquationSeparate(q.FUNC_ADD,ce?q.MAX:te.MAX_EXT),q.clear(q.COLOR_BUFFER_BIT),ce?q.drawArraysInstanced(q.TRIANGLES,0,3,ge.length/4):$.drawArraysInstancedANGLE(q.TRIANGLES,0,3,ge.length/4)})}),Me("post",a,E,function(w){w.setAttribute("aUV",2,q.STATIC_DRAW,0,A),w.setUniform("1i","tex",ue),q.bindFramebuffer(q.FRAMEBUFFER,ie),q.disable(q.BLEND),q.colorMask(Ee===0,Ee===1,Ee===2,Ee===3),q.viewport(X,se,K,Z),q.scissor(X,se,K,Z),q.drawArrays(q.TRIANGLES,0,3)})}),q.isContextLost())throw ne(),new Error("webgl context lost")})}function z(K){var Z=!K||K===T?y:K.canvas||K,I=S.get(Z);if(I===void 0){C=!0;var W=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);I=N&&ee.length===N.length&&N.every(function(k,ie){return k===ee[ie]}),I||(W="bad trial run results",console.info(ee,N))}catch(k){I=!1,W=k.message}W&&console.warn("WebGL SDF generation not supported:",W),C=!1,S.set(Z,I)}return I}var O=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:L,generateIntoFramebuffer:F,isSupported:z});function j(K,Z,I,W,ee,N){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1);try{return P.apply(O,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),g.apply(M,arguments)}}function H(K,Z,I,W,ee,N,k,ie,X,se){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1),ie===void 0&&(ie=0),X===void 0&&(X=0),se===void 0&&(se=0);try{return L.apply(O,arguments)}catch(Ee){return console.info("WebGL SDF generation failed, falling back to JS",Ee),_.apply(M,arguments)}}return e.forEachPathCommand=n,e.generate=j,e.generateIntoCanvas=H,e.javascript=M,e.pathToLineSegments=r,e.webgl=O,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function vS(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ne,Te){i[ne]=1<<Te+1,n[i[ne]]=ne}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var ne=function(ue){if(t.hasOwnProperty(ue)){var w=0;t[ue].split(",").forEach(function(b){var B=b.split("+"),$=B[0],te=B[1];$=parseInt($,36),te=te?parseInt(te,36):0,u.set(w+=$,i[ue]);for(var oe=0;oe<te;oe++)u.set(++w,i[ue])})}};for(var Te in t)ne(Te)}}function f(ne){return h(),u.get(ne.codePointAt(0))||i.L}function d(ne){return n[f(ne)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ne,Te){var ue=36,w=0,b=new Map,B=Te&&new Map,$;return ne.split(",").forEach(function te(oe){if(oe.indexOf("+")!==-1)for(var pe=+oe;pe--;)te($);else{$=oe;var he=oe.split(">"),ve=he[0],Le=he[1];ve=String.fromCodePoint(w+=parseInt(ve,ue)),Le=String.fromCodePoint(w+=parseInt(Le,ue)),b.set(ve,Le),Te&&B.set(Le,ve)}}),{map:b,reverseMap:B}}var p,m,M;function x(){if(!p){var ne=_(g.pairs,!0),Te=ne.map,ue=ne.reverseMap;p=Te,m=ue,M=_(g.canonical,!1).map}}function v(ne){return x(),p.get(ne)||null}function E(ne){return x(),m.get(ne)||null}function A(ne){return x(),M.get(ne)||null}var T=i.L,C=i.R,y=i.EN,S=i.ES,U=i.ET,P=i.AN,L=i.CS,F=i.B,z=i.S,O=i.ON,j=i.BN,H=i.NSM,K=i.AL,Z=i.LRO,I=i.RLO,W=i.LRE,ee=i.RLE,N=i.PDF,k=i.LRI,ie=i.RLI,X=i.FSI,se=i.PDI;function Ee(ne,Te){for(var ue=125,w=new Uint32Array(ne.length),b=0;b<ne.length;b++)w[b]=f(ne[b]);var B=new Map;function $(nn,Gn){var rn=w[nn];w[nn]=Gn,B.set(rn,B.get(rn)-1),rn&o&&B.set(o,B.get(o)-1),B.set(Gn,(B.get(Gn)||0)+1),Gn&o&&B.set(o,(B.get(o)||0)+1)}for(var te=new Uint8Array(ne.length),oe=new Map,pe=[],he=null,ve=0;ve<ne.length;ve++)he||pe.push(he={start:ve,end:ne.length-1,level:Te==="rtl"?1:Te==="ltr"?0:lh(ve,!1)}),w[ve]&F&&(he.end=ve,he=null);for(var Le=ee|W|I|Z|r|se|N|F,fe=function(nn){return nn+(nn&1?1:2)},we=function(nn){return nn+(nn&1?2:1)},Ce=0;Ce<pe.length;Ce++){he=pe[Ce];var Re=[{_level:he.level,_override:0,_isolate:0}],de=void 0,Ie=0,Oe=0,qe=0;B.clear();for(var G=he.start;G<=he.end;G++){var me=w[G];if(de=Re[Re.length-1],B.set(me,(B.get(me)||0)+1),me&o&&B.set(o,(B.get(o)||0)+1),me&Le)if(me&(ee|W)){te[G]=de._level;var re=(me===ee?we:fe)(de._level);re<=ue&&!Ie&&!Oe?Re.push({_level:re,_override:0,_isolate:0}):Ie||Oe++}else if(me&(I|Z)){te[G]=de._level;var _e=(me===I?we:fe)(de._level);_e<=ue&&!Ie&&!Oe?Re.push({_level:_e,_override:me&I?C:T,_isolate:0}):Ie||Oe++}else if(me&r){me&X&&(me=lh(G+1,!0)===1?ie:k),te[G]=de._level,de._override&&$(G,de._override);var be=(me===ie?we:fe)(de._level);be<=ue&&Ie===0&&Oe===0?(qe++,Re.push({_level:be,_override:0,_isolate:1,_isolInitIndex:G})):Ie++}else if(me&se){if(Ie>0)Ie--;else if(qe>0){for(Oe=0;!Re[Re.length-1]._isolate;)Re.pop();var Se=Re[Re.length-1]._isolInitIndex;Se!=null&&(oe.set(Se,G),oe.set(G,Se)),Re.pop(),qe--}de=Re[Re.length-1],te[G]=de._level,de._override&&$(G,de._override)}else me&N?(Ie===0&&(Oe>0?Oe--:!de._isolate&&Re.length>1&&(Re.pop(),de=Re[Re.length-1])),te[G]=de._level):me&F&&(te[G]=he.level);else te[G]=de._level,de._override&&me!==j&&$(G,de._override)}for(var Be=[],Xe=null,ke=he.start;ke<=he.end;ke++){var Ve=w[ke];if(!(Ve&l)){var ot=te[ke],ut=Ve&r,St=Ve===se;Xe&&ot===Xe._level?(Xe._end=ke,Xe._endsWithIsolInit=ut):Be.push(Xe={_start:ke,_end:ke,_level:ot,_startsWithPDI:St,_endsWithIsolInit:ut})}}for(var en=[],Vt=0;Vt<Be.length;Vt++){var mn=Be[Vt];if(!mn._startsWithPDI||mn._startsWithPDI&&!oe.has(mn._start)){for(var Bn=[Xe=mn],Jn=void 0;Xe&&Xe._endsWithIsolInit&&(Jn=oe.get(Xe._end))!=null;)for(var tn=Vt+1;tn<Be.length;tn++)if(Be[tn]._start===Jn){Bn.push(Xe=Be[tn]);break}for(var Dt=[],Pn=0;Pn<Bn.length;Pn++)for(var Rs=Bn[Pn],Ar=Rs._start;Ar<=Rs._end;Ar++)Dt.push(Ar);for(var qo=te[Dt[0]],ya=he.level,Cr=Dt[0]-1;Cr>=0;Cr--)if(!(w[Cr]&l)){ya=te[Cr];break}var Ps=Dt[Dt.length-1],jo=te[Ps],Sa=he.level;if(!(w[Ps]&r)){for(var R=Ps+1;R<=he.end;R++)if(!(w[R]&l)){Sa=te[R];break}}en.push({_seqIndices:Dt,_sosType:Math.max(ya,qo)%2?C:T,_eosType:Math.max(Sa,jo)%2?C:T})}}for(var J=0;J<en.length;J++){var ae=en[J],V=ae._seqIndices,Q=ae._sosType,Ae=ae._eosType,De=te[V[0]]&1?C:T;if(B.get(H))for(var Fe=0;Fe<V.length;Fe++){var Ne=V[Fe];if(w[Ne]&H){for(var He=Q,We=Fe-1;We>=0;We--)if(!(w[V[We]]&l)){He=w[V[We]];break}$(Ne,He&(r|se)?O:He)}}if(B.get(y))for(var ze=0;ze<V.length;ze++){var Qe=V[ze];if(w[Qe]&y)for(var $e=ze-1;$e>=-1;$e--){var _t=$e===-1?Q:w[V[$e]];if(_t&a){_t===K&&$(Qe,P);break}}}if(B.get(K))for(var ht=0;ht<V.length;ht++){var et=V[ht];w[et]&K&&$(et,C)}if(B.get(S)||B.get(L))for(var Ge=1;Ge<V.length-1;Ge++){var Tt=V[Ge];if(w[Tt]&(S|L)){for(var Ke=0,Kt=0,Kn=Ge-1;Kn>=0&&(Ke=w[V[Kn]],!!(Ke&l));Kn--);for(var Bt=Ge+1;Bt<V.length&&(Kt=w[V[Bt]],!!(Kt&l));Bt++);Ke===Kt&&(w[Tt]===S?Ke===y:Ke&(y|P))&&$(Tt,Ke)}}if(B.get(y))for(var Ht=0;Ht<V.length;Ht++){var ft=V[Ht];if(w[ft]&y){for(var kt=Ht-1;kt>=0&&w[V[kt]]&(U|l);kt--)$(V[kt],y);for(Ht++;Ht<V.length&&w[V[Ht]]&(U|l|y);Ht++)w[V[Ht]]!==y&&$(V[Ht],y)}}if(B.get(U)||B.get(S)||B.get(L))for(var Ut=0;Ut<V.length;Ut++){var Lt=V[Ut];if(w[Lt]&(U|S|L)){$(Lt,O);for(var Ct=Ut-1;Ct>=0&&w[V[Ct]]&l;Ct--)$(V[Ct],O);for(var Ti=Ut+1;Ti<V.length&&w[V[Ti]]&l;Ti++)$(V[Ti],O)}}if(B.get(y))for(var kn=0,Ju=Q;kn<V.length;kn++){var Ku=V[kn],Zo=w[Ku];Zo&y?Ju===T&&$(Ku,T):Zo&a&&(Ju=Zo)}if(B.get(o)){var Ds=C|y|P,Qu=Ds|T,Ma=[];{for(var Rr=[],Pr=0;Pr<V.length;Pr++)if(w[V[Pr]]&o){var Us=ne[V[Pr]],$u=void 0;if(v(Us)!==null)if(Rr.length<63)Rr.push({char:Us,seqIndex:Pr});else break;else if(($u=E(Us))!==null)for(var Ls=Rr.length-1;Ls>=0;Ls--){var Jo=Rr[Ls].char;if(Jo===$u||Jo===E(A(Us))||v(A(Jo))===Us){Ma.push([Rr[Ls].seqIndex,Pr]),Rr.length=Ls;break}}}Ma.sort(function(nn,Gn){return nn[0]-Gn[0]})}for(var Ko=0;Ko<Ma.length;Ko++){for(var eh=Ma[Ko],Ta=eh[0],Qo=eh[1],th=!1,zn=0,$o=Ta+1;$o<Qo;$o++){var nh=V[$o];if(w[nh]&Qu){th=!0;var ih=w[nh]&Ds?C:T;if(ih===De){zn=ih;break}}}if(th&&!zn){zn=Q;for(var el=Ta-1;el>=0;el--){var rh=V[el];if(w[rh]&Qu){var sh=w[rh]&Ds?C:T;sh!==De?zn=sh:zn=De;break}}}if(zn){if(w[V[Ta]]=w[V[Qo]]=zn,zn!==De){for(var Fs=Ta+1;Fs<V.length;Fs++)if(!(w[V[Fs]]&l)){f(ne[V[Fs]])&H&&(w[V[Fs]]=zn);break}}if(zn!==De){for(var Is=Qo+1;Is<V.length;Is++)if(!(w[V[Is]]&l)){f(ne[V[Is]])&H&&(w[V[Is]]=zn);break}}}}for(var Ei=0;Ei<V.length;Ei++)if(w[V[Ei]]&o){for(var ah=Ei,tl=Ei,nl=Q,Ns=Ei-1;Ns>=0;Ns--)if(w[V[Ns]]&l)ah=Ns;else{nl=w[V[Ns]]&Ds?C:T;break}for(var oh=Ae,Os=Ei+1;Os<V.length;Os++)if(w[V[Os]]&(o|l))tl=Os;else{oh=w[V[Os]]&Ds?C:T;break}for(var il=ah;il<=tl;il++)w[V[il]]=nl===oh?nl:De;Ei=tl}}}for(var _n=he.start;_n<=he.end;_n++){var sm=te[_n],Ea=w[_n];if(sm&1?Ea&(T|y|P)&&te[_n]++:Ea&C?te[_n]++:Ea&(P|y)&&(te[_n]+=2),Ea&l&&(te[_n]=_n===0?he.level:te[_n-1]),_n===he.end||f(ne[_n])&(z|F))for(var ba=_n;ba>=0&&f(ne[ba])&c;ba--)te[ba]=he.level}}return{levels:te,paragraphs:pe};function lh(nn,Gn){for(var rn=nn;rn<ne.length;rn++){var bi=w[rn];if(bi&(C|K))return 1;if(bi&(F|T)||Gn&&bi===se)return 0;if(bi&r){var ch=am(rn);rn=ch===-1?ne.length:ch}}return 0}function am(nn){for(var Gn=1,rn=nn+1;rn<ne.length;rn++){var bi=w[rn];if(bi&F)break;if(bi&se){if(--Gn===0)return rn}else bi&r&&Gn++}return-1}}var ge="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",xe;function q(){if(!xe){var ne=_(ge,!0),Te=ne.map,ue=ne.reverseMap;ue.forEach(function(w,b){Te.set(b,w)}),xe=Te}}function ce(ne){return q(),xe.get(ne)||null}function D(ne,Te,ue,w){var b=ne.length;ue=Math.max(0,ue==null?0:+ue),w=Math.min(b-1,w==null?b-1:+w);for(var B=new Map,$=ue;$<=w;$++)if(Te[$]&1){var te=ce(ne[$]);te!==null&&B.set($,te)}return B}function Me(ne,Te,ue,w){var b=ne.length;ue=Math.max(0,ue==null?0:+ue),w=Math.min(b-1,w==null?b-1:+w);var B=[];return Te.paragraphs.forEach(function($){var te=Math.max(ue,$.start),oe=Math.min(w,$.end);if(te<oe){for(var pe=Te.levels.slice(te,oe+1),he=oe;he>=te&&f(ne[he])&c;he--)pe[he]=$.level;for(var ve=$.level,Le=1/0,fe=0;fe<pe.length;fe++){var we=pe[fe];we>ve&&(ve=we),we<Le&&(Le=we|1)}for(var Ce=ve;Ce>=Le;Ce--)for(var Re=0;Re<pe.length;Re++)if(pe[Re]>=Ce){for(var de=Re;Re+1<pe.length&&pe[Re+1]>=Ce;)Re++;Re>de&&B.push([de+te,Re+te])}}}),B}function le(ne,Te,ue,w){var b=ye(ne,Te,ue,w),B=[].concat(ne);return b.forEach(function($,te){B[te]=(Te.levels[$]&1?ce(ne[$]):null)||ne[$]}),B.join("")}function ye(ne,Te,ue,w){for(var b=Me(ne,Te,ue,w),B=[],$=0;$<ne.length;$++)B[$]=$;return b.forEach(function(te){for(var oe=te[0],pe=te[1],he=B.slice(oe,pe+1),ve=he.length;ve--;)B[pe-ve]=he[ve]}),B}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=A,e.getEmbeddingLevels=Ee,e.getMirroredCharacter=ce,e.getMirroredCharactersMap=D,e.getReorderSegments=Me,e.getReorderedIndices=ye,e.getReorderedString=le,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const Vp=/\bvoid\s+main\s*\(\s*\)\s*{/g;function nu(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=je[n];return r?nu(r):i}return s.replace(e,t)}const zt=[];for(let s=0;s<256;s++)zt[s]=(s<16?"0":"")+s.toString(16);function xS(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toUpperCase()}const rr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},yS=Date.now(),Nf=new WeakMap,Of=new Map;let SS=1e10;function iu(s,e){const t=bS(e);let i=Nf.get(s);if(i||Nf.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Of[h];if(!f){const d=MS(this,c,e,t);f=Of[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,rr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-yS}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:SS++}),u.uuid=xS(),u.uniforms=rr({},c.uniforms,e.uniforms),u.defines=rr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=rr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(rr(this.extensions,c.extensions),rr(this.defines,c.defines),rr(this.uniforms,yd.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=iu(s.isDerivedMaterial?s.getDepthMaterial():new Ud({depthPacking:ud}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=iu(s.isDerivedMaterial?s.getDistanceMaterial():new Ld,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function MS(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=nu(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=nu(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,m))?p:`troika_${p}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Bf(e,n,r,a,o),t=Bf(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function Bf(s,e,t,i,n){return(i||n||t)&&(s=s.replace(Vp,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function TS(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let ES=0;const kf=new Map;function bS(s){const e=JSON.stringify(s,TS);let t=kf.get(e);return t==null&&kf.set(e,t=++ES),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function wS(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var g=a.readUint(n,r);r+=4;var _=a.readUint(n,r);r+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,r);r+=2;var g=a(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)(n>>>a&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,r)),r+=2}if(l==2){var f=a.readUshort(n,r);for(r+=2,h=0;h<f;h++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var M=e.CFF.readDict(n,r+m[u],r+m[u+1]);e.CFF._readFDict(n,M,_),d.FDArray.push(M)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var v=o.readUshort(n,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,r+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,r+1)/65535,f=5),c.push(g??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,r+1),f=3),u==29&&(g=o.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var p=n[r+f];f++;var m=p>>4,M=15&p;if(m!=15&&_.push(m),M!=15&&_.push(M),M==15)break}for(var x="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<_.length;E++)x+=v[_[E]];g=parseFloat(x)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var g=o.readUint(n,r);r+=4;var _="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var M=o.readUshort(n,g);M==0?m=e.cmap.parse0(n,g):M==4?m=e.cmap.parse4(n,g):M==6?m=e.cmap.parse6(n,g):M==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+M,f,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;var h=u/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=a.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var M=0,x=0;for(u=0;u<f;u++)M+=c.xs[u],x+=c.ys[u],c.xs[u]=M,c.ys[u]=x}else{var v;c.parts=[];do{v=a.readUshort(o,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=a.readUshort(o,l),l+=2,1&v){var A=a.readShort(o,l);l+=2;var T=a.readShort(o,l);l+=2}else A=a.readInt8(o,l),l++,T=a.readInt8(o,l),l++;2&v?(E.m.tx=A,E.m.ty=T):(E.p1=A,E.p2=T),8&v?(E.m.a=E.m.d=a.readF2dot14(o,l),l+=2):64&v?(E.m.a=a.readF2dot14(o,l),l+=2,E.m.d=a.readF2dot14(o,l),l+=2):128&v&&(E.m.a=a.readF2dot14(o,l),l+=2,E.m.b=a.readF2dot14(o,l),l+=2,E.m.c=a.readF2dot14(o,l),l+=2,E.m.d=a.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var C=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<C;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,a);a+=2;for(var m=0;m<p;m++){var M=c+l.readUshort(n,a);a+=2;var x=l.readUshort(n,M);M+=2;for(var v=[],E=0;E<x;E++){var A=l.readUshort(n,M);M+=2,f!=0&&(P=e.GPOS.readValueRecord(n,M,f),M+=2*g),d!=0&&(L=e.GPOS.readValueRecord(n,M,d),M+=2*_),v.push({gid2:A,val1:P,val2:L})}u.pairsets.push(v)}}if(u.fmt==2){var T=l.readUshort(n,a);a+=2;var C=l.readUshort(n,a);a+=2;var y=l.readUshort(n,a);a+=2;var S=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+C),u.matrix=[],m=0;m<y;m++){var U=[];for(E=0;E<S;E++){var P=null,L=null;f!=0&&(P=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(L=e.GPOS.readValueRecord(n,a,d),a+=2*_),U.push({val1:P,val2:L})}u.matrix.push(U)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var F=l.readUshort(n,a);a+=2;var z=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+z)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);h.markClass=a.readUshort(n,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var f=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,f),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,a)+c;a+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(r==4)for(u.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var p=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var M=l.readUshort(n,a);for(a+=2,d=0;d<M;d++){var x=l.readUshort(n,a);a+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var v=[],E=0;E<f;E++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*E)));a+=2*f,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}f=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(r==7&&u.fmt==1){var A=l.readUshort(n,a);a+=2;var T=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=A;else if(o.ltype!=A)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var u=0;u<c;u++){var h=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,a=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var g=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var M=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var v,E=h[m],A=f+12*c+x;if(g==0)v=o.readUnicode(n,A,M/2);else if(g==3&&_==0)v=o.readUnicode(n,A,M/2);else if(_==0)v=o.readASCII(n,A,M);else if(_==1)v=o.readUnicode(n,A,M/2);else if(_==3)v=o.readUnicode(n,A,M/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;v=o.readASCII(n,A,M),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var T="p"+g+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][E!==void 0?E:m]=v,l[T]._lang=p}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){u=C;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],p=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,_,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,_,p):g?e.U.P.qcurveTo(r,_,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,_,p,(_+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(a.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,M=0;M<_;M++){for(;n[r+m+(1+M)]==-1;)m++;g.chain[M]!=n[r+m+(1+M)]&&(p=!1)}if(p){for(n[r]=g.nglyph,M=0;M<_+m;M++)n[r+M+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,n[r]),v=h.cDef[x+2],E=h.scset[v],A=0;A<E.length;A++){var T=E[A],C=T.input;if(!(C.length>l)){for(p=!0,M=0;M<C.length;M++){var y=e._lctf.getInterval(h.cDef,n[r+1+M]);if(x==-1&&h.cDef[y+2]!=C[M]){p=!1;break}}if(p){var S=T.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var U=h.lookupRec;for(A=0;A<U.length;A+=2){x=U[A];var P=o[U[A+1]];e.U._applySubs(n,r+x,P,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,u){n.cmds.push("C"),n.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,_=r.x,p=r.y,m=0,M=0,x=0,v=0,E=0,A=0,T=0,C=0,y=0,S=0,U={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,U);var P=U.val;if(g+=U.size,P=="o1"||P=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(P=="o6"||P=="o7")for(var L=c.length,F=P=="o6",z=0;z<L;z++){var O=c.shift();F?_+=O:p+=O,F=!F,e.U.P.lineTo(l,_,p)}else if(P=="o8"||P=="o24"){L=c.length;for(var j=0;j+6<=L;)m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),v=M+c.shift(),_=x+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,M,x,v,_,p),j+=6;P=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(M=p,x=(m=_+c.shift())+c.shift(),S=v=M+c.shift(),A=v,C=p,_=(T=(E=(y=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,M,x,v,y,S),e.U.P.curveTo(l,E,A,T,C,_,p)),P=="o1235"&&(m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),v=M+c.shift(),y=x+c.shift(),S=v+c.shift(),E=y+c.shift(),A=S+c.shift(),T=E+c.shift(),C=A+c.shift(),_=T+c.shift(),p=C+c.shift(),c.shift(),e.U.P.curveTo(l,m,M,x,v,y,S),e.U.P.curveTo(l,E,A,T,C,_,p)),P=="o1236"&&(m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),S=v=M+c.shift(),A=v,T=(E=(y=x+c.shift())+c.shift())+c.shift(),C=A+c.shift(),_=T+c.shift(),e.U.P.curveTo(l,m,M,x,v,y,S),e.U.P.curveTo(l,E,A,T,C,_,p)),P=="o1237"&&(m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),v=M+c.shift(),y=x+c.shift(),S=v+c.shift(),E=y+c.shift(),A=S+c.shift(),T=E+c.shift(),C=A+c.shift(),Math.abs(T-_)>Math.abs(C-p)?_=T+c.shift():p=C+c.shift(),e.U.P.curveTo(l,m,M,x,v,y,S),e.U.P.curveTo(l,E,A,T,C,_,p));else if(P=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var H=c.shift(),K=c.shift(),Z=c.shift(),I=c.shift(),W=e.CFF.glyphBySE(a,Z),ee=e.CFF.glyphBySE(a,I);e.U._drawCFF(a.CharStrings[W],r,a,o,l),r.x=H,r.y=K,e.U._drawCFF(a.CharStrings[ee],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),v=M+c.shift(),_=x+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,M,x,v,_,p)}else if(P=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,M=p+c.shift(),_=x=m+c.shift(),p=(v=M+c.shift())+c.shift(),e.U.P.curveTo(l,m,M,x,v,_,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)M=p,x=(m=_+c.shift())+c.shift(),v=M+c.shift(),_=x+c.shift(),p=v,e.U.P.curveTo(l,m,M,x,v,_,p);else if(P=="o10"||P=="o29"){var N=P=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ie=N.Subrs[k+N.Bias];r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ie,r,a,o,l),_=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var X=c.length,se=(j=0,P=="o31");for(j+=X-(L=-3&X);j<L;)se?(M=p,x=(m=_+c.shift())+c.shift(),p=(v=M+c.shift())+c.shift(),L-j==5?(_=x+c.shift(),j++):_=x,se=!1):(m=_,M=p+c.shift(),x=m+c.shift(),v=M+c.shift(),_=x+c.shift(),L-j==5?(p=v+c.shift(),j++):p=v,se=!0),e.U.P.curveTo(l,m,M,x,v,_,p),j+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function AS(){return(function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,L){for(var F=new t(31),z=0;z<31;++z)F[z]=L+=1<<P[z-1];var O=new i(F[30]);for(z=1;z<30;++z)for(var j=F[z];j<F[z+1];++j)O[j]=j-F[z]<<5|z;return[F,O]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(P,L,F){for(var z=P.length,O=0,j=new t(L);O<z;++O)++j[P[O]-1];var H,K=new t(L);for(O=0;O<L;++O)K[O]=K[O-1]+j[O-1]<<1;{H=new t(1<<L);var Z=15-L;for(O=0;O<z;++O)if(P[O])for(var I=O<<4|P[O],W=L-P[O],ee=K[P[O]-1]++<<W,N=ee|(1<<W)-1;ee<=N;++ee)H[f[ee]>>>Z]=I}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var M=_(p,9),x=_(m,5),v=function(P){for(var L=P[0],F=1;F<P.length;++F)P[F]>L&&(L=P[F]);return L},E=function(P,L,F){var z=L/8|0;return(P[z]|P[z+1]<<8)>>(7&L)&F},A=function(P,L){var F=L/8|0;return(P[F]|P[F+1]<<8|P[F+2]<<16)>>(7&L)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(P,L,F){var z=new Error(L||T[P]);if(z.code=P,Error.captureStackTrace&&Error.captureStackTrace(z,C),!F)throw z;return z},y=function(P,L,F){var z=P.length;if(!z||F&&!F.l&&z<5)return L||new e(0);var O=!L||F,j=!F||F.i;F||(F={}),L||(L=new e(3*z));var H,K=function(de){var Ie=L.length;if(de>Ie){var Oe=new e(Math.max(2*Ie,de));Oe.set(L),L=Oe}},Z=F.f||0,I=F.p||0,W=F.b||0,ee=F.l,N=F.d,k=F.m,ie=F.n,X=8*z;do{if(!ee){F.f=Z=E(P,I,1);var se=E(P,I+1,3);if(I+=3,!se){var Ee=P[(ue=((H=I)/8|0)+(7&H&&1)+4)-4]|P[ue-3]<<8,ge=ue+Ee;if(ge>z){j&&C(0);break}O&&K(W+Ee),L.set(P.subarray(ue,ge),W),F.b=W+=Ee,F.p=I=8*ge;continue}if(se==1)ee=M,N=x,k=9,ie=5;else if(se==2){var xe=E(P,I,31)+257,q=E(P,I+10,15)+4,ce=xe+E(P,I+5,31)+1;I+=14;for(var D=new e(ce),Me=new e(19),le=0;le<q;++le)Me[a[le]]=E(P,I+3*le,7);I+=3*q;var ye=v(Me),ne=(1<<ye)-1,Te=_(Me,ye);for(le=0;le<ce;){var ue,w=Te[E(P,I,ne)];if(I+=15&w,(ue=w>>>4)<16)D[le++]=ue;else{var b=0,B=0;for(ue==16?(B=3+E(P,I,3),I+=2,b=D[le-1]):ue==17?(B=3+E(P,I,7),I+=3):ue==18&&(B=11+E(P,I,127),I+=7);B--;)D[le++]=b}}var $=D.subarray(0,xe),te=D.subarray(xe);k=v($),ie=v(te),ee=_($,k),N=_(te,ie)}else C(1);if(I>X){j&&C(0);break}}O&&K(W+131072);for(var oe=(1<<k)-1,pe=(1<<ie)-1,he=I;;he=I){var ve=(b=ee[A(P,I)&oe])>>>4;if((I+=15&b)>X){j&&C(0);break}if(b||C(2),ve<256)L[W++]=ve;else{if(ve==256){he=I,ee=null;break}var Le=ve-254;if(ve>264){var fe=n[le=ve-257];Le=E(P,I,(1<<fe)-1)+c[le],I+=fe}var we=N[A(P,I)&pe],Ce=we>>>4;if(we||C(3),I+=15&we,te=h[Ce],Ce>3&&(fe=r[Ce],te+=A(P,I)&(1<<fe)-1,I+=fe),I>X){j&&C(0);break}O&&K(W+131072);for(var Re=W+Le;W<Re;W+=4)L[W]=L[W-te],L[W+1]=L[W+1-te],L[W+2]=L[W+2-te],L[W+3]=L[W+3-te];W=Re}}F.l=ee,F.p=he,F.b=W,ee&&(Z=1,F.m=k,F.d=N,F.n=ie)}while(!Z);return W==L.length?L:(function(de,Ie,Oe){(Oe==null||Oe>de.length)&&(Oe=de.length);var qe=new(de instanceof t?t:de instanceof i?i:e)(Oe-Ie);return qe.set(de.subarray(Ie,Oe)),qe})(L,0,W)},S=new e(0),U=typeof TextDecoder<"u"&&new TextDecoder;try{U.decode(S,{stream:!0})}catch{}return s.convert_streams=function(P){var L=new DataView(P),F=0;function z(){var xe=L.getUint16(F);return F+=2,xe}function O(){var xe=L.getUint32(F);return F+=4,xe}function j(xe){Ee.setUint16(ge,xe),ge+=2}function H(xe){Ee.setUint32(ge,xe),ge+=4}for(var K={signature:O(),flavor:O(),length:O(),numTables:z(),reserved:z(),totalSfntSize:O(),majorVersion:z(),minorVersion:z(),metaOffset:O(),metaLength:O(),metaOrigLength:O(),privOffset:O(),privLength:O()},Z=0;Math.pow(2,Z)<=K.numTables;)Z++;Z--;for(var I=16*Math.pow(2,Z),W=16*K.numTables-I,ee=12,N=[],k=0;k<K.numTables;k++)N.push({tag:O(),offset:O(),compLength:O(),origLength:O(),origChecksum:O()}),ee+=16;var ie,X=new Uint8Array(12+16*N.length+N.reduce((function(xe,q){return xe+q.origLength+4}),0)),se=X.buffer,Ee=new DataView(se),ge=0;return H(K.flavor),j(K.numTables),j(I),j(Z),j(W),N.forEach((function(xe){H(xe.tag),H(xe.origChecksum),H(ee),H(xe.origLength),xe.outOffset=ee,(ee+=xe.origLength)%4!=0&&(ee+=4-ee%4)})),N.forEach((function(xe){var q,ce=P.slice(xe.offset,xe.offset+xe.compLength);if(xe.compLength!=xe.origLength){var D=new Uint8Array(xe.origLength);q=new Uint8Array(ce,2),y(q,D)}else D=new Uint8Array(ce);X.set(D,xe.outOffset);var Me=0;(ee=xe.outOffset+xe.origLength)%4!=0&&(Me=4-ee%4),X.set(new Uint8Array(Me).buffer,xe.outOffset+xe.origLength),ie=ee+Me})),se.slice(0,ie)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function CS(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let u;function h(T){if(!u){const C={R:r,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let y in i){let S=0;i[y].split(",").forEach(U=>{let[P,L]=U.split("+");P=parseInt(P,36),L=L?parseInt(L,36):0,u.set(S+=P,C[y]);for(let F=L;F--;)u.set(++S,C[y])})}}return u.get(T)||c}const f=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(T){const C=new Uint8Array(T.length);let y=c,S=f,U=-1;for(let P=0;P<T.length;P++){const L=T.codePointAt(P);let F=h(L)|0,z=f;F&o||(y&(n|a|l)?F&(r|a|l)?(z=g,(S===f||S===g)&&C[U]++):F&(n|c)&&(S===d||S===_)&&C[U]--:y&(r|c)&&(S===d||S===_)&&C[U]--,S=C[P]=z,y=F,U=P,L>65535&&P++)}return C}function M(T,C){const y=[];for(let U=0;U<C.length;U++){const P=C.codePointAt(U);P>65535&&U++,y.push(s.U.codeToGlyph(T,P))}const S=T.GSUB;if(S){const{lookupList:U,featureList:P}=S;let L;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,z=[];P.forEach(O=>{if(F.test(O.tag))for(let j=0;j<O.tab.length;j++){if(z[O.tab[j]])continue;z[O.tab[j]]=!0;const H=U[O.tab[j]],K=/^(isol|init|fina|medi)$/.test(O.tag);K&&!L&&(L=m(C));for(let Z=0;Z<y.length;Z++)(!L||!K||p[L[Z]]===O.tag)&&s.U._applySubs(y,Z,H,U)}})}return y}function x(T,C){const y=new Int16Array(C.length*3);let S=0;for(;S<C.length;S++){const F=C[S];if(F===-1)continue;y[S*3+2]=T.hmtx.aWidth[F];const z=T.GPOS;if(z){const O=z.lookupList;for(let j=0;j<O.length;j++){const H=O[j];for(let K=0;K<H.tabs.length;K++){const Z=H.tabs[K];if(H.ltype===1){if(s._lctf.coverageIndex(Z.coverage,F)!==-1&&Z.pos){L(Z.pos,S);break}}else if(H.ltype===2){let I=null,W=U();if(W!==-1){const ee=s._lctf.coverageIndex(Z.coverage,C[W]);if(ee!==-1){if(Z.fmt===1){const N=Z.pairsets[ee];for(let k=0;k<N.length;k++)N[k].gid2===F&&(I=N[k])}else if(Z.fmt===2){const N=s.U._getGlyphClass(C[W],Z.classDef1),k=s.U._getGlyphClass(F,Z.classDef2);I=Z.matrix[N][k]}if(I){I.val1&&L(I.val1,W),I.val2&&L(I.val2,S);break}}}}else if(H.ltype===4){const I=s._lctf.coverageIndex(Z.markCoverage,F);if(I!==-1){const W=U(P),ee=W===-1?-1:s._lctf.coverageIndex(Z.baseCoverage,C[W]);if(ee!==-1){const N=Z.markArray[I],k=Z.baseArray[ee][N.markClass];y[S*3]=k.x-N.x+y[W*3]-y[W*3+2],y[S*3+1]=k.y-N.y+y[W*3+1];break}}}else if(H.ltype===6){const I=s._lctf.coverageIndex(Z.mark1Coverage,F);if(I!==-1){const W=U();if(W!==-1){const ee=C[W];if(v(T,ee)===3){const N=s._lctf.coverageIndex(Z.mark2Coverage,ee);if(N!==-1){const k=Z.mark1Array[I],ie=Z.mark2Array[N][k.markClass];y[S*3]=ie.x-k.x+y[W*3]-y[W*3+2],y[S*3+1]=ie.y-k.y+y[W*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const O=U();if(O!==-1){const j=T.kern.glyph1.indexOf(C[O]);if(j!==-1){const H=T.kern.rval[j].glyph2.indexOf(F);H!==-1&&(y[O*3+2]+=T.kern.rval[j].vals[H])}}}}return y;function U(F){for(let z=S-1;z>=0;z--)if(C[z]!==-1&&(!F||F(C[z])))return z;return-1}function P(F){return v(T,F)===1}function L(F,z){for(let O=0;O<3;O++)y[z*3+O]+=F[O]||0}}function v(T,C){const y=T.GDEF&&T.GDEF.glyphClassDef;return y?s.U._getGlyphClass(C,y):0}function E(...T){for(let C=0;C<T.length;C++)if(typeof T[C]=="number")return T[C]}function A(T){const C=Object.create(null),y=T["OS/2"],S=T.hhea,U=T.head.unitsPerEm,P=E(y&&y.sTypoAscender,S&&S.ascender,U),L={unitsPerEm:U,ascender:P,descender:E(y&&y.sTypoDescender,S&&S.descender,0),capHeight:E(y&&y.sCapHeight,P),xHeight:E(y&&y.sxHeight,P),lineGap:E(y&&y.sTypoLineGap,S&&S.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(T,F)>0},forEachGlyph(F,z,O,j){let H=0;const K=1/L.unitsPerEm*z,Z=M(T,F);let I=0;const W=x(T,Z);return Z.forEach((ee,N)=>{if(ee!==-1){let k=C[ee];if(!k){const{cmds:ie,crds:X}=s.U.glyphToPath(T,ee);let se="",Ee=0;for(let D=0,Me=ie.length;D<Me;D++){const le=t[ie[D]];se+=ie[D];for(let ye=1;ye<=le;ye++)se+=(ye>1?",":"")+X[Ee++]}let ge,xe,q,ce;if(X.length){ge=xe=1/0,q=ce=-1/0;for(let D=0,Me=X.length;D<Me;D+=2){let le=X[D],ye=X[D+1];le<ge&&(ge=le),ye<xe&&(xe=ye),le>q&&(q=le),ye>ce&&(ce=ye)}}else ge=q=xe=ce=0;k=C[ee]={index:ee,advanceWidth:T.hmtx.aWidth[ee],xMin:ge,yMin:xe,xMax:q,yMax:ce,path:se}}j.call(null,k,H+W[N*3]*K,W[N*3+1]*K,I),H+=W[N*3+2]*K,O&&(H+=O*z)}I+=F.codePointAt(I)>65535?2:1}),H}};return L}return function(C){const y=new Uint8Array(C,0,4),S=s._bin.readASCII(y,0,4);if(S==="wOFF")C=e(C);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return A(s.parse(C)[0])}}const RS=bs({name:"Typr Font Parser",dependencies:[wS,AS,CS],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function PS(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var v=x>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&x))},e.prototype.has=function(x){var v=this.buckets.get(x>>5);return v!==void 0&&(v&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach((function(v,E){x.push((+E).toString(36)+":"+v.toString(36))})),x.join(",")},e.prototype.deserialize=function(x){var v=this;this.buckets.clear(),x.split(",").forEach((function(E){var A=E.split(":");v.buckets.set(parseInt(A[0],36),parseInt(A[1],36))}))};var t=Math.pow(2,8),i=t-1,n=~i;function r(x){var v=(function(A){return A&n})(x).toString(16),E=(function(A){return(A&n)+t-1})(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+v+"-"+E+".json"}function a(x,v){var E=x&i,A=v.codePointAt(E/6|0);return((A=(A||48)-48)&1<<E%6)!=0}function o(x,v){var E;(E=x,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(A){return A.split("-").map((function(T){return parseInt(T.trim(),16)}))}))).forEach((function(A){var T=A[0],C=A[1];C===void 0&&(C=T),v(T,C)}))}function l(x,v){o(x,(function(E,A){for(var T=E;T<=A;T++)v(T)}))}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var v=h.get(x);return v||(v=new e,l(x.ranges,(function(E){return v.add(E)})),h.set(x,v)),v}var g,_=new Map;function p(x,v,E){return x[v]?v:x[E]?E:(function(A){for(var T in A)return T})(x)}function m(x,v){var E=v;if(!x.includes(E)){E=1/0;for(var A=0;A<x.length;A++)Math.abs(x[A]-v)<Math.abs(E-v)&&(E=x[A])}return E}function M(x){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(v){g.add(v)}))),g.has(x)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(x,v){v===void 0&&(v={});var E,A=v.lang;A===void 0&&(A=new RegExp("\\p{Script=Hangul}","u").test(E=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var T=v.category;T===void 0&&(T="sans-serif");var C=v.style;C===void 0&&(C="normal");var y=v.weight;y===void 0&&(y=400);var S=(v.dataUrl||f).replace(/\/$/g,""),U=new Map,P=new Uint8Array(x.length),L={},F={},z=new Array(x.length),O=new Map,j=!1;function H(I){var W=_.get(I);return W||(W=fetch(S+"/"+I).then((function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then((function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]}))})).catch((function(ee){if(S!==f)return j||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+ee.message),j=!0),S=f,_.delete(I),H(I);throw ee})),_.set(I,W)),W}for(var K=function(I){var W=x.codePointAt(I),ee=r(W);z[I]=ee,c[ee]||O.has(ee)||O.set(ee,H(ee).then((function(N){c[ee]=N}))),W>65535&&(I++,Z=I)},Z=0;Z<x.length;Z++)K(Z);return Promise.all(O.values()).then((function(){O.clear();for(var I=function(ee){var N=x.codePointAt(ee),k=null,ie=c[z[ee]],X=void 0;for(var se in ie){var Ee=F[se];if(Ee===void 0&&(Ee=F[se]=new RegExp(se).test(A||"en")),Ee){for(var ge in X=se,ie[se])if(a(N,ie[se][ge])){k=ge;break}break}}if(!k){e:for(var xe in ie)if(xe!==X){for(var q in ie[xe])if(a(N,ie[xe][q])){k=q;break e}}}k||(console.debug("No font coverage for U+"+N.toString(16)),k="latin"),z[ee]=k,u[k]||O.has(k)||O.set(k,H("font-meta/"+k+".json").then((function(ce){u[k]=ce}))),N>65535&&(ee++,W=ee)},W=0;W<x.length;W++)I(W);return Promise.all(O.values())})).then((function(){for(var I,W=null,ee=0;ee<x.length;ee++){var N=x.codePointAt(ee);if(W&&(M(N)||d(W).has(N)))P[ee]=P[ee-1];else{W=u[z[ee]];var k=L[W.id];if(!k){var ie=W.typeforms,X=p(ie,T,"sans-serif"),se=p(ie[X],C,"normal"),Ee=m((I=ie[X])===null||I===void 0?void 0:I[se],y);k=L[W.id]=S+"/font-files/"+W.id+"/"+X+"."+se+"."+Ee+".woff"}var ge=U.get(k);ge==null&&(ge=U.size,U.set(k,ge)),P[ee]=ge}N>65535&&(ee++,P[ee]=P[ee-1])}return{fontUrls:Array.from(U.keys()),chars:P}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function DS(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(u=>u(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||M();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let T=0;(function C(y=0){for(let S=y,U=a.length;S<U;S++){const P=a.codePointAt(S);if(T===1&&g[d[S-1]].supportsCodePoint(P)||/\s/.test(a[S]))d[S]=d[S-1],T===2&&(p[p.length-1][1]=S);else for(let L=d[S],F=c.length;L<=F;L++)if(L===F){const z=T===2?p[p.length-1]:p[p.length]=[S,S];z[1]=S,T=2}else{d[S]=L;const{src:z,unicodeRange:O}=c[L];if(!O||x(P,O)){const j=t[z];if(!j){r(z,()=>{C(S)});return}if(j.supportsCodePoint(P)){let H=_.get(j);typeof H!="number"&&(H=g.length,g.push(j),_.set(j,H)),d[S]=H,T=1;break}}}P>65535&&S+1<U&&(d[S+1]=d[S],S++,T===2&&(p[p.length-1][1]=S))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const v=p.map(E=>a.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:A})=>{const T=g.length;let C=0;p.forEach(S=>{for(let U=0,P=S[1]-S[0];U<=P;U++)d[S[0]+U]=A[C++]+T;C++});let y=0;E.forEach((S,U)=>{r(S,P=>{g[U+T]=P,++y===E.length&&M()})})})}else M()}function M(){o({chars:d,fonts:g})}function x(v,E){for(let A=0;A<E.length;A++){const[T,C=T]=E[A];if(T<=v&&v<=C)return!0}return!1}}}const US=bs({name:"FontResolver",dependencies:[DS,RS,PS],init(s,e,t){return s(e,t())}});function LS(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:p,style:m,weight:M,preResolvedFonts:x,unicodeFontsURL:v},E){const A=({chars:T,fonts:C})=>{let y,S;const U=[];for(let P=0;P<T.length;P++)T[P]!==S?(S=T[P],U.push(y={start:P,end:P,fontObj:C[T[P]]})):y.end=P;E(U)};x?A(x):s(g,A,{lang:_,fonts:p,style:m,weight:M,unicodeFontsURL:v})}function o({text:g="",font:_,lang:p,sdfGlyphSize:m=64,fontSize:M=400,fontWeight:x=1,fontStyle:v="normal",letterSpacing:E=0,lineHeight:A="normal",maxWidth:T=1/0,direction:C,textAlign:y="left",textIndent:S=0,whiteSpace:U="normal",overflowWrap:P="normal",anchorX:L=0,anchorY:F=0,metricsOnly:z=!1,unicodeFontsURL:O,preResolvedFonts:j=null,includeCaretPositions:H=!1,chunkedBoundsSize:K=8192,colorRanges:Z=null},I){const W=h(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,E=+E,T=+T,A=A||"normal",S=+S,a({text:g,lang:p,style:v,weight:x,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:O,preResolvedFonts:j},N=>{ee.fontLoad=h()-W;const k=isFinite(T);let ie=null,X=null,se=null,Ee=null,ge=null,xe=null,q=null,ce=null,D=0,Me=0,le=U!=="nowrap";const ye=new Map,ne=h();let Te=S,ue=0,w=new f;const b=[w];N.forEach(pe=>{const{fontObj:he}=pe,{ascender:ve,descender:Le,unitsPerEm:fe,lineGap:we,capHeight:Ce,xHeight:Re}=he;let de=ye.get(he);if(!de){const me=M/fe,re=A==="normal"?(ve-Le+we)*me:A*M,_e=(re-(ve-Le)*me)/2,be=Math.min(re,(ve-Le)*me),Se=(ve+Le)/2*me+be/2;de={index:ye.size,src:he.src,fontObj:he,fontSizeMult:me,unitsPerEm:fe,ascender:ve*me,descender:Le*me,capHeight:Ce*me,xHeight:Re*me,lineHeight:re,baseline:-_e-ve*me,caretTop:Se,caretBottom:Se-be},ye.set(he,de)}const{fontSizeMult:Ie}=de,Oe=g.slice(pe.start,pe.end+1);let qe,G;he.forEachGlyph(Oe,M,E,(me,re,_e,be)=>{re+=ue,be+=pe.start,qe=re,G=me;const Se=g.charAt(be),Be=me.advanceWidth*Ie,Xe=w.count;let ke;if("isEmpty"in me||(me.isWhitespace=!!Se&&new RegExp(n).test(Se),me.canBreakAfter=!!Se&&r.test(Se),me.isEmpty=me.xMin===me.xMax||me.yMin===me.yMax||i.test(Se)),!me.isWhitespace&&!me.isEmpty&&Me++,le&&k&&!me.isWhitespace&&re+Be+Te>T&&Xe){if(w.glyphAt(Xe-1).glyphObj.canBreakAfter)ke=new f,Te=-re;else for(let ot=Xe;ot--;)if(ot===0&&P==="break-word"){ke=new f,Te=-re;break}else if(w.glyphAt(ot).glyphObj.canBreakAfter){ke=w.splitAt(ot+1);const ut=ke.glyphAt(0).x;Te-=ut;for(let St=ke.count;St--;)ke.glyphAt(St).x-=ut;break}ke&&(w.isSoftWrapped=!0,w=ke,b.push(w),D=T)}let Ve=w.glyphAt(w.count);Ve.glyphObj=me,Ve.x=re+Te,Ve.y=_e,Ve.width=Be,Ve.charIndex=be,Ve.fontData=de,Se===`
`&&(w=new f,b.push(w),Te=-(re+Be+E*M)+S)}),ue=qe+G.advanceWidth*Ie+E*M});let B=0;b.forEach(pe=>{let he=!0;for(let ve=pe.count;ve--;){const Le=pe.glyphAt(ve);he&&!Le.glyphObj.isWhitespace&&(pe.width=Le.x+Le.width,pe.width>D&&(D=pe.width),he=!1);let{lineHeight:fe,capHeight:we,xHeight:Ce,baseline:Re}=Le.fontData;fe>pe.lineHeight&&(pe.lineHeight=fe);const de=Re-pe.baseline;de<0&&(pe.baseline+=de,pe.cap+=de,pe.ex+=de),pe.cap=Math.max(pe.cap,pe.baseline+we),pe.ex=Math.max(pe.ex,pe.baseline+Ce)}pe.baseline-=B,pe.cap-=B,pe.ex-=B,B+=pe.lineHeight});let $=0,te=0;if(L&&(typeof L=="number"?$=-L:typeof L=="string"&&($=-D*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),F&&(typeof F=="number"?te=-F:typeof F=="string"&&(te=F==="top"?0:F==="top-baseline"?-b[0].baseline:F==="top-cap"?-b[0].cap:F==="top-ex"?-b[0].ex:F==="middle"?B/2:F==="bottom"?B:F==="bottom-baseline"?-b[b.length-1].baseline:c(F)*B)),!z){const pe=e.getEmbeddingLevels(g,C);ie=new Uint16Array(Me),X=new Uint8Array(Me),se=new Float32Array(Me*2),Ee={},q=[1/0,1/0,-1/0,-1/0],ce=[],H&&(xe=new Float32Array(g.length*4)),Z&&(ge=new Uint8Array(Me*3));let he=0,ve=-1,Le=-1,fe,we;if(b.forEach((Ce,Re)=>{let{count:de,width:Ie}=Ce;if(de>0){let Oe=0;for(let be=de;be--&&Ce.glyphAt(be).glyphObj.isWhitespace;)Oe++;let qe=0,G=0;if(y==="center")qe=(D-Ie)/2;else if(y==="right")qe=D-Ie;else if(y==="justify"&&Ce.isSoftWrapped){let be=0;for(let Se=de-Oe;Se--;)Ce.glyphAt(Se).glyphObj.isWhitespace&&be++;G=(D-Ie)/be}if(G||qe){let be=0;for(let Se=0;Se<de;Se++){let Be=Ce.glyphAt(Se);const Xe=Be.glyphObj;Be.x+=qe+be,G!==0&&Xe.isWhitespace&&Se<de-Oe&&(be+=G,Be.width+=G)}}const me=e.getReorderSegments(g,pe,Ce.glyphAt(0).charIndex,Ce.glyphAt(Ce.count-1).charIndex);for(let be=0;be<me.length;be++){const[Se,Be]=me[be];let Xe=1/0,ke=-1/0;for(let Ve=0;Ve<de;Ve++)if(Ce.glyphAt(Ve).charIndex>=Se){let ot=Ve,ut=Ve;for(;ut<de;ut++){let St=Ce.glyphAt(ut);if(St.charIndex>Be)break;ut<de-Oe&&(Xe=Math.min(Xe,St.x),ke=Math.max(ke,St.x+St.width))}for(let St=ot;St<ut;St++){const en=Ce.glyphAt(St);en.x=ke-(en.x+en.width-Xe)}break}}let re;const _e=be=>re=be;for(let be=0;be<de;be++){const Se=Ce.glyphAt(be);re=Se.glyphObj;const Be=re.index,Xe=pe.levels[Se.charIndex]&1;if(Xe){const ke=e.getMirroredCharacter(g[Se.charIndex]);ke&&Se.fontData.fontObj.forEachGlyph(ke,0,0,_e)}if(H){const{charIndex:ke,fontData:Ve}=Se,ot=Se.x+$,ut=Se.x+Se.width+$;xe[ke*4]=Xe?ut:ot,xe[ke*4+1]=Xe?ot:ut,xe[ke*4+2]=Ce.baseline+Ve.caretBottom+te,xe[ke*4+3]=Ce.baseline+Ve.caretTop+te;const St=ke-ve;St>1&&u(xe,ve,St),ve=ke}if(Z){const{charIndex:ke}=Se;for(;ke>Le;)Le++,Z.hasOwnProperty(Le)&&(we=Z[Le])}if(!re.isWhitespace&&!re.isEmpty){const ke=he++,{fontSizeMult:Ve,src:ot,index:ut}=Se.fontData,St=Ee[ot]||(Ee[ot]={});St[Be]||(St[Be]={path:re.path,pathBounds:[re.xMin,re.yMin,re.xMax,re.yMax]});const en=Se.x+$,Vt=Se.y+Ce.baseline+te;se[ke*2]=en,se[ke*2+1]=Vt;const mn=en+re.xMin*Ve,Bn=Vt+re.yMin*Ve,Jn=en+re.xMax*Ve,tn=Vt+re.yMax*Ve;mn<q[0]&&(q[0]=mn),Bn<q[1]&&(q[1]=Bn),Jn>q[2]&&(q[2]=Jn),tn>q[3]&&(q[3]=tn),ke%K===0&&(fe={start:ke,end:ke,rect:[1/0,1/0,-1/0,-1/0]},ce.push(fe)),fe.end++;const Dt=fe.rect;if(mn<Dt[0]&&(Dt[0]=mn),Bn<Dt[1]&&(Dt[1]=Bn),Jn>Dt[2]&&(Dt[2]=Jn),tn>Dt[3]&&(Dt[3]=tn),ie[ke]=Be,X[ke]=ut,Z){const Pn=ke*3;ge[Pn]=we>>16&255,ge[Pn+1]=we>>8&255,ge[Pn+2]=we&255}}}}}),xe){const Ce=g.length-ve;Ce>1&&u(xe,ve,Ce)}}const oe=[];ye.forEach(({index:pe,src:he,unitsPerEm:ve,ascender:Le,descender:fe,lineHeight:we,capHeight:Ce,xHeight:Re})=>{oe[pe]={src:he,unitsPerEm:ve,ascender:Le,descender:fe,lineHeight:we,capHeight:Ce,xHeight:Re}}),ee.typesetting=h()-ne,I({glyphIds:ie,glyphFontIndices:X,glyphPositions:se,glyphData:Ee,fontData:oe,caretPositions:xe,glyphColors:ge,chunkedBounds:ce,fontSize:M,topBaseline:te+b[0].baseline,blockBounds:[$,te-B,$+D,te],visibleBounds:q,timings:ee})})}function l(g,_){o({...g,metricsOnly:!0},p=>{const[m,M,x,v]=p.blockBounds;_({width:x-m,height:v-M})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],M=g[_*4+1],x=g[_*4+2],v=g[_*4+3],E=(M-m)/p;for(let A=0;A<p;A++){const T=(_+A)*4;g[T]=m+E*A,g[T+1]=m+E*(A+1),g[T+2]=x,g[T+3]=v}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(M){this.data[this.index*d.length+p]=M}}),g),{data:null,index:0}),{typeset:o,measure:l}}const vr=()=>(self.performance||Date).now(),Bo=Gp();let zf;function FS(s,e,t,i,n,r,a,o,l,c,u=!0){return u?NS(s,e,t,i,n,r,a,o,l,c).then(null,h=>(zf||(console.warn("WebGL SDF generation failed, falling back to JS",h),zf=!0),Vf(s,e,t,i,n,r,a,o,l,c))):Vf(s,e,t,i,n,r,a,o,l,c)}const uo=[],IS=5;let ru=0;function Hp(){const s=vr();for(;uo.length&&vr()-s<IS;)uo.shift()();ru=uo.length?setTimeout(Hp,0):0}const NS=(...s)=>new Promise((e,t)=>{uo.push(()=>{const i=vr();try{Bo.webgl.generateIntoCanvas(...s),e({timing:vr()-i})}catch(n){t(n)}}),ru||(ru=setTimeout(Hp,0))}),OS=4,BS=2e3,Gf={};let kS=0;function Vf(s,e,t,i,n,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+kS++%OS;let h=Gf[u];return h||(h=Gf[u]={workerModule:bs({name:u,workerId:u,dependencies:[Gp,vr],init(f,d){const g=f().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const g=vr(),_=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)_[p*4+c]=f[p];return Bo.webglUtils.renderImageData(a,_,o,l,s,e,1<<3-c),d+=vr()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{_S(u)},BS)),{timing:d}})}function zS(s){s._warm||(Bo.webgl.isSupported(s),s._warm=!0)}const GS=Bo.webglUtils.resizeWebGLCanvasWithoutClearing,Zs={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},VS=new Ze;function Yr(){return(self.performance||Date).now()}const Hf=Object.create(null);function HS(s,e){s=XS({},s);const t=Yr(),i=[];if(s.font&&i.push({label:"user",src:YS(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Zs.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Zs.unicodeFontsURL,s.colorRanges!=null){let h={};for(let f in s.colorRanges)if(s.colorRanges.hasOwnProperty(f)){let d=s.colorRanges[f];typeof d!="number"&&(d=VS.set(d).getHex()),h[f]=d}s.colorRanges=h}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=Zs,{sdfGlyphSize:a}=s,o=n/a*4;let l=Hf[a];if(!l){const h=document.createElement("canvas");h.width=n,h.height=a*256/o,l=Hf[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:h,sdfTexture:new jt(h,void 0,void 0,void 0,Fn,Fn),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,WS(l)}const{sdfTexture:c,sdfCanvas:u}=l;jS(s).then(h=>{const{glyphIds:f,glyphFontIndices:d,fontData:g,glyphPositions:_,fontSize:p,timings:m}=h,M=[],x=new Float32Array(f.length*4);let v=0,E=0;const A=Yr(),T=g.map(P=>{let L=l.glyphsByFont.get(P.src);return L||l.glyphsByFont.set(P.src,L=new Map),L});f.forEach((P,L)=>{const F=d[L],{src:z,unitsPerEm:O}=g[F];let j=T[F].get(P);if(!j){const{path:W,pathBounds:ee}=h.glyphData[z][P],N=Math.max(ee[2]-ee[0],ee[3]-ee[1])/a*(Zs.sdfMargin*a+.5),k=l.glyphCount++,ie=[ee[0]-N,ee[1]-N,ee[2]+N,ee[3]+N];T[F].set(P,j={path:W,atlasIndex:k,sdfViewBox:ie}),M.push(j)}const{sdfViewBox:H}=j,K=_[E++],Z=_[E++],I=p/O;x[v++]=K+H[0]*I,x[v++]=Z+H[1]*I,x[v++]=K+H[2]*I,x[v++]=Z+H[3]*I,f[L]=j.atlasIndex}),m.quads=(m.quads||0)+(Yr()-A);const C=Yr();m.sdf={};const y=u.height,S=Math.ceil(l.glyphCount/o),U=Math.pow(2,Math.ceil(Math.log2(S*a)));U>y&&(console.info(`Increasing SDF texture size ${y}->${U}`),GS(u,n,U),c.dispose()),Promise.all(M.map(P=>Wp(P,l,s.gpuAccelerateSDF).then(({timing:L})=>{m.sdf[P.atlasIndex]=L}))).then(()=>{M.length&&!l.contextLost&&(Xp(l),c.needsUpdate=!0),m.sdfTotal=Yr()-C,m.total=Yr()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:r,glyphBounds:x,glyphAtlasIndices:f,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||zS(u)})}function Wp({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Zs,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/i)*i,f=Math.floor(u/(o/i))*i,d=e%4;return FS(i,i,s,t,c,l,n,h,f,d,a)}function WS(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(Wp(r,s,!0))})}),Promise.all(i).then(()=>{Xp(s),s.sdfTexture.needsUpdate=!0})})}function XS(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Ka;function YS(s){return Ka||(Ka=typeof document>"u"?{}:document.createElement("a")),Ka.href=s,Ka.href}function Xp(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const qS=bs({name:"Typesetter",dependencies:[LS,US,vS],init(s,e,t){return s(e,t())}}),jS=bs({name:"Typesetter",dependencies:[qS],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),Wf={};function ZS(s){let e=Wf[s];return e||(e=Wf[s]=new si(1,1,s,s).translate(.5,.5,0)),e}const JS="aTroikaGlyphBounds",Xf="aTroikaGlyphIndex",KS="aTroikaGlyphColor";class QS extends og{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Ro,this.boundingBox=new Tr}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=ZS(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(JS,e,4),this.updateAttributeData(Xf,t,1),this.updateAttributeData(KS,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=r((d+u)/h)!==r((g+u)/h)?-f:a(l(d)*f,l(g)*f),p=r((d-u)/h)!==r((g-u)/h)?f:o(l(d)*f,l(g)*f),m=r((d+n)/h)!==r((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);i.min.set(_,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Xf).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new S_(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const $S=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,eM=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,tM=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,nM=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function iM(s){const e=iu(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Pe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new rt(0,0,0,0)},uTroikaClipRect:{value:new rt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Pe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:$S,vertexTransform:eM,fragmentDefs:tM,fragmentColorTransform:nM,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Vp,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Hu=new Po({color:16777215,side:Mn,transparent:!0}),Yf=8421504,qf=new pt,Qa=new Y,jl=new Y,Xs=[],rM=new Y,Zl="+x+y";function jf(s){return Array.isArray(s)?s[0]:s}let Yp=()=>{const s=new st(new si(1,1),Hu);return Yp=()=>s,s},qp=()=>{const s=new st(new si(1,1,32,1),Hu);return qp=()=>s,s};const sM={type:"syncstart"},aM={type:"synccomplete"},jp=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],oM=jp.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class ko extends st{constructor(){const e=new QS;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Yf,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Zl,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(sM),HS({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(aM),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return iM(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Hu.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return jf(this.material).getDepthMaterial()}get customDistanceMaterial(){return jf(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,p=0;if(t){let{outlineWidth:M,outlineOffsetX:x,outlineOffsetY:v,outlineBlur:E,outlineOpacity:A}=this;c=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(E)||0),f=A,_=this._parsePercent(x)||0,p=this._parsePercent(v)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??Yf),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(_,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const M=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-M,l[1]-M,l[2]+M,l[3]+M)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ze;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||Zl;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Zl&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;Qa.set(0,0,0)[u]=c==="-"?1:-1,jl.set(0,0,0)[f]=h==="-"?-1:1,qf.lookAt(rM,Qa.cross(jl),jl),o.setFromMatrix4(qf)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Pe){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Pe){return Qa.copy(e),this.localPositionToTextCoords(this.worldToLocal(Qa),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?qp():Yp(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Xs.length=0,a.raycast(e,Xs);for(let u=0;u<Xs.length;u++)Xs[u].object=this,t.push(Xs[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,oM.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}jp.forEach(s=>{const e="_private_"+s;Object.defineProperty(ko.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Tr;new Ze;const lM="/8_3/assets/music-CGBQpOJ0.mp3",Jl=new Audio(lM),cM=document.querySelector("#three-canvas"),pn=new y_;pn.background=new Ze("#FFF5F7");pn.fog=new mu("#FFF5F7",.05);const To={width:window.innerWidth,height:window.innerHeight},Gi=new Sn(75,To.width/To.height,.1,1e3);Gi.position.set(0,2,8);pn.add(Gi);const ws=new qy({canvas:cM,antialias:!0,alpha:!0});ws.setSize(To.width,To.height);ws.setPixelRatio(Math.min(window.devicePixelRatio,2));ws.shadowMap.enabled=!0;ws.shadowMap.type=Kf;const uM=new ag(16777215,.8);pn.add(uM);const zo=new sg(16777215,1.8);zo.position.set(5,12,8);zo.castShadow=!0;zo.shadow.mapSize.set(2048,2048);pn.add(zo);const Zp=new Id(16758465,3.5);Zp.position.set(-5,5,2);pn.add(Zp);const Jp=new Id(16777215,2.5,20);Jp.position.set(5,-2,5);pn.add(Jp);const It=new ko,Nt=new ko;pn.add(It,Nt);It.text="8";Nt.text="3";[It,Nt].forEach(s=>{s.color=14037041,s.anchorX="center",s.anchorY="middle",s.outlineWidth=.05,s.outlineColor=16777215,s.sync()});It.fontSize=5.5;Nt.fontSize=5.5;It.position.set(0,0,0);Nt.position.set(0,0,0);It.scale.set(.1,.1,.1);Nt.scale.set(.1,.1,.1);It.visible=!1;Nt.visible=!1;const it=new vi;it.visible=!1;pn.add(it);const Go=document.createElement("canvas");Go.width=512;Go.height=512;const an=Go.getContext("2d");an.fillStyle="#FFFFFF";an.fillRect(0,0,512,512);for(let s=0;s<70;s++){const e=Math.random()>.4;let t=Math.random()*512,i=Math.random()*512;if(e){an.fillStyle=["#FFB7B2","#FF9AA2","#FFDAC1"][Math.floor(Math.random()*3)],an.beginPath();for(let n=0;n<5;n++)an.ellipse(t+Math.cos(n*Math.PI*2/5)*15,i+Math.sin(n*Math.PI*2/5)*15,12,12,0,0,2*Math.PI);an.fill(),an.fillStyle="#E2F0CB",an.beginPath(),an.arc(t,i,6,0,2*Math.PI),an.fill()}else an.fillStyle="#A8D5BA",an.beginPath(),an.ellipse(t,i,18+Math.random()*12,8+Math.random()*4,Math.random()*Math.PI,0,2*Math.PI),an.fill()}const Eo=new Td(Go);Eo.wrapS=Eo.wrapT=ia;Eo.repeat.set(1.5,1.5);const ai=5.5,oi=3.5,Wu=new Ts({map:Eo,color:16777215,roughness:.6,metalness:.1,clearcoat:.2,side:Mn}),hM=new si(ai,oi),Xu=new st(hM,Wu);Xu.position.z=-.05;Xu.receiveShadow=!0;it.add(Xu);const br=new Ms;br.moveTo(-ai/2,-oi/2);br.lineTo(ai/2,-oi/2);br.lineTo(ai/2,oi/2);br.lineTo(0,0);br.lineTo(-ai/2,oi/2);br.lineTo(-ai/2,-oi/2);const fM=new Lo(br),Yu=new st(fM,Wu);Yu.position.z=.05;Yu.receiveShadow=!0;it.add(Yu);const xa=new Ms;xa.moveTo(-ai/2,0);xa.lineTo(ai/2,0);xa.lineTo(0,-oi/2);xa.lineTo(-ai/2,0);const dM=new Lo(xa),Mr=new st(dM,Wu);Mr.position.set(0,oi/2,.06);it.add(Mr);const Zi=new Ms;Zi.moveTo(0,.3);Zi.bezierCurveTo(0,.4,-.2,.65,-.5,.65);Zi.bezierCurveTo(-.9,.65,-.9,.1,-.9,.1);Zi.bezierCurveTo(-.9,-.3,-.5,-.7,0,-1);Zi.bezierCurveTo(.5,-.7,.9,-.3,.9,.1);Zi.bezierCurveTo(.9,.1,.9,.65,.5,.65);Zi.bezierCurveTo(.2,.65,0,.4,0,.3);const pM=new Uo(Zi,{depth:.1,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3}),mM=new Mu({color:14037041,roughness:.3,metalness:.2}),qu=new st(pM,mM);qu.scale.set(.3,.3,.3);qu.position.set(0,-oi/2+.3,.02);Mr.add(qu);const _M=new si(ai-.4,oi-.4),gM=new Ts({color:16777215,roughness:1,side:Mn}),Vo=new st(_M,gM);Vo.position.set(0,0,0);it.add(Vo);const Yt=new vi;Yt.scale.set(1.5,1.5,1.5);pn.add(Yt);const Ho=document.createElement("canvas");Ho.width=512;Ho.height=512;const is=Ho.getContext("2d");is.fillStyle="#FF91A4";is.fillRect(0,0,512,512);is.fillStyle="rgba(255, 255, 255, 0.3)";for(let s=0;s<50;s++)is.beginPath(),is.arc(Math.random()*512,Math.random()*512,5+Math.random()*10,0,Math.PI*2),is.fill();const bo=new Td(Ho);bo.wrapS=bo.wrapT=ia;bo.repeat.set(2,2);const Kp=new Ts({map:bo,color:16748964,roughness:.1,metalness:.1,clearcoat:1,clearcoatRoughness:.02,sheen:1,sheenRoughness:.5,sheenColor:16777215}),As=new Ts({color:14037041,roughness:.1,metalness:.2,clearcoat:1,clearcoatRoughness:.05,sheen:1,sheenRoughness:.5,sheenColor:16777215}),ju=new st(new On(4,4,4),Kp);ju.castShadow=!0;ju.receiveShadow=!0;Yt.add(ju);const vM=new st(new On(4.05,4.05,.5),As),xM=new st(new On(.5,4.05,4.05),As);Yt.add(vM,xM);const yn=new vi;yn.position.y=2.1;const yM={y:2.1};Yt.add(yn);const Qp=new st(new On(4.4,.8,4.4),Kp);Qp.castShadow=!0;yn.add(Qp);const SM=new st(new On(4.42,.82,.52),As),MM=new st(new On(.52,.82,4.42),As);yn.add(SM,MM);const Wo=new vi;Wo.position.y=.5;yn.add(Wo);for(let s=0;s<8;s++){const e=new Su(.6,.12,12,24),t=new st(e,As);t.rotation.y=s/8*Math.PI*2,t.rotation.x=Math.PI/4,Wo.add(t)}Wo.add(new st(new yu(.25,16,16),As));const wr=new vi;wr.position.set(0,.75,2);wr.rotation.set(-.15,0,0);yn.add(wr);const TM=new On(3.2,1.2,.1),EM=new Mu({color:13938487,roughness:.1,metalness:.8,emissive:4469504}),$p=new st(TM,EM);$p.castShadow=!0;wr.add($p);const Zn=new ko;Zn.text="HAPPY 8/3";Zn.fontSize=.5;Zn.color=16777215;Zn.fontWeight="900";Zn.anchorX="center";Zn.anchorY="middle";Zn.position.z=.1;Zn.outlineWidth=.04;Zn.outlineColor=14037041;Zn.sync();wr.add(Zn);const bM=new xu(.015,.015,1),wM=new Ts({color:13938487,metalness:1,roughness:.1}),Zu=new st(bM,wM);Zu.position.set(0,.5,-.6);Zu.rotation.set(Math.PI/3,0,0);wr.add(Zu);const ho=[],Zf=[16739201,16748964,16729943,7381503,2600544,15844367,16747520],em=[];function AM(){const s=new Ms;s.moveTo(0,0),s.bezierCurveTo(0,.1,-.2,.35,-.45,.35),s.bezierCurveTo(-.8,.35,-.8,-.15,-.8,-.15),s.bezierCurveTo(-.8,-.5,-.6,-.8,0,-1.2),s.bezierCurveTo(.6,-.8,.8,-.5,.8,-.15),s.bezierCurveTo(.8,-.15,.8,.35,.45,.35),s.bezierCurveTo(.2,.35,0,.1,0,0);const e=new Uo(s,{depth:.2,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05}),t=new Ts({color:16748964,transparent:!0,opacity:.3,roughness:0,clearcoat:1});for(let i=0;i<50;i++){const n=new st(e,t),r=10+Math.random()*20,a=Math.random()*Math.PI*2;n.position.set(Math.cos(a)*r,(Math.random()-.5)*30,(Math.random()-.5)*20-10),n.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const o=.5+Math.random();n.scale.set(o,o,o),em.push({mesh:n,rotSpeed:(Math.random()-.5)*.01,floatSpeed:.005+Math.random()*.01,offset:Math.random()*Math.PI*2}),pn.add(n)}}AM();const qi=new Pe,$a=new ug;let on=!1,gs=!1,wo=0,Ao=0,vs=0,xs=0,Cs=!1,Xo=0,Yo=0;window.addEventListener("mousedown",s=>{Cs=!0,Xo=vs=s.clientX,Yo=xs=s.clientY});window.addEventListener("touchstart",s=>{Cs=!0;const e=s.touches[0].clientX,t=s.touches[0].clientY;Xo=vs=e,Yo=xs=t,qi.x=e/window.innerWidth*2-1,qi.y=-(t/window.innerHeight)*2+1},{passive:!1});window.addEventListener("mousemove",s=>{qi.x=s.clientX/window.innerWidth*2-1,qi.y=-(s.clientY/window.innerHeight)*2+1,Cs&&!on&&(Ao+=(s.clientX-vs)*.01,wo+=(s.clientY-xs)*.01,vs=s.clientX,xs=s.clientY)});window.addEventListener("touchmove",s=>{if(Cs){s.cancelable&&s.preventDefault();const e=s.touches[0].clientX,t=s.touches[0].clientY;on||(Ao+=(e-vs)*.01,wo+=(t-xs)*.01),vs=e,xs=t}},{passive:!1});window.addEventListener("mouseup",s=>{Cs=!1,Math.abs(s.clientX-Xo)<5&&Math.abs(s.clientY-Yo)<5&&tm()});window.addEventListener("touchend",s=>{Cs=!1;const e=s.changedTouches[0].clientX,t=s.changedTouches[0].clientY;Math.abs(e-Xo)<40&&Math.abs(t-Yo)<40&&(qi.x=e/window.innerWidth*2-1,qi.y=-(t/window.innerHeight)*2+1,tm())});function tm(s){if(gs)return;if(on){$a.setFromCamera(qi,Gi),$a.intersectObjects([it],!0).length>0?nm():su();return}$a.setFromCamera(qi,Gi),$a.intersectObjects([Yt],!0).length>0&&su()}function nm(){gs||(gs=!0,Jl.ended&&(Jl.currentTime=0),Jl.play().catch(s=>console.log("Audio play failed:",s)),dt.to(Mr.rotation,{x:Math.PI,duration:1,ease:"power2.inOut"}),dt.to(Mr.position,{z:-.08,duration:1,ease:"power2.inOut"}),dt.to(it.scale,{x:0,y:0,z:0,duration:.8,delay:.6,ease:"power2.in"}),dt.to(Vo.position,{y:2.2,duration:1,delay:.6,ease:"power2.out",onComplete:()=>{document.getElementById("letter-overlay").classList.add("active"),document.getElementById("three-canvas").classList.add("blur-bg"),it.visible=!1}}))}function CM(){gs=!1,document.getElementById("letter-overlay").classList.remove("active"),document.getElementById("three-canvas").classList.remove("blur-bg"),it.visible=!0;const t=window.innerWidth/window.innerHeight<1?.8:.6;dt.to(it.scale,{x:t,y:t,z:t,duration:.8,ease:"power2.out"}),dt.to(Vo.position,{y:0,duration:1,delay:.4,ease:"power2.in"}),dt.to(Mr.rotation,{x:0,duration:1,delay:.8,ease:"power2.inOut"}),dt.to(Mr.position,{z:.06,duration:1,delay:.8,ease:"power2.inOut",onComplete:()=>{on&&su()}})}document.getElementById("close-letter").addEventListener("click",CM);function su(){if(dt.isTweening(yn.position))return;const e=window.innerWidth/window.innerHeight<1;if(on){on=!1;const t=e?1:.6;dt.to(Yt.scale,{x:t,y:t,z:t,duration:2}),dt.to(it.scale,{x:.1,y:.1,z:.1,duration:1.5,ease:"power2.in",onComplete:()=>{on||(it.visible=!1)}}),dt.to(it.position,{x:0,y:0,z:0,duration:1.5,ease:"power2.in"}),dt.to(it.rotation,{x:0,y:0,z:0,duration:1.5,ease:"power2.in"}),dt.to(It.position,{x:0,duration:2}),dt.to(Nt.position,{x:0,duration:2}),dt.to([It.scale,Nt.scale],{x:.1,y:.1,z:.1,duration:2,onComplete:()=>{on||(It.visible=Nt.visible=!1)}}),yn.visible=!0,dt.to(yn.position,{x:0,y:yM.y,z:0,delay:1,duration:2,ease:"bounce.out"}),dt.to(yn.rotation,{x:0,y:0,z:0,delay:1,duration:2,ease:"power2.out"})}else{on=!0;const t=e?.7:.42;dt.to(Yt.scale,{x:t,y:t,z:t,duration:2.5,ease:"power2.inOut"}),dt.to(yn.position,{x:10,y:40,z:-20,duration:2.5,ease:"back.in(1.2)",onComplete:()=>{on&&(yn.visible=!1)}}),dt.to(yn.rotation,{x:Math.PI*3,y:Math.PI,duration:3}),it.visible=!0,it.position.set(0,2,0),it.scale.set(.1,.1,.1);const i=e?.8:.6;dt.to(it.scale,{x:i,y:i,z:i,duration:3,ease:"back.out(1.2)"}),setTimeout(()=>{on&&!gs&&nm()},1800);const n=0;It.visible=Nt.visible=!0;const r=e?6:5;dt.to(It.position,{x:-r,y:n,duration:2.5}),dt.to(Nt.position,{x:r,y:n,duration:2.5}),dt.to([It.scale,Nt.scale],{x:1,y:1,z:1,duration:2.5,ease:"back.out(1.2)"}),RM()}}function RM(){const s=new si(.1,.1);for(let e=0;e<80;e++){const t=new Po({color:Zf[Math.floor(Math.random()*Zf.length)],side:Mn,transparent:!0}),i=new st(s,t);i.position.set(0,1,0);const n=new Y((Math.random()-.5)*.4,Math.random()*.5+.2,(Math.random()-.5)*.4);ho.push({mesh:i,velocity:n}),pn.add(i)}}const PM=new cg;function im(){const s=PM.getElapsedTime(),e=Math.sin(s*2)*.2;if(Yt.position.y=e,!on)Yt.rotation.x+=(wo-Yt.rotation.x)*.1,Yt.rotation.y+=(Ao-Yt.rotation.y)*.1;else{Yt.rotation.x*=.9,Yt.rotation.y*=.9,wo=Ao=0,It.position.y=Nt.position.y=e;const i=window.innerWidth/window.innerHeight<1?5.5:4.5,n=.5;it.position.x+=(0-it.position.x)*.05,it.position.y+=(i+e*2-it.position.y)*.05,it.position.z+=(n-it.position.z)*.05,gs?(it.rotation.z+=(0-it.rotation.z)*.05,it.rotation.y+=(0-it.rotation.y)*.05):(it.rotation.z=Math.sin(s)*.03,it.rotation.y=Math.cos(s*.5)*.05),wr.rotation.z=.1+Math.sin(s*2)*.05}em.forEach(t=>{t.mesh.rotation.x+=t.rotSpeed,t.mesh.position.y+=Math.sin(s*t.floatSpeed+t.offset)*.01});for(let t=ho.length-1;t>=0;t--){const i=ho[t];i.mesh.position.add(i.velocity),i.velocity.y-=.005,i.mesh.material.opacity-=.005,i.mesh.material.opacity<=0&&(pn.remove(i.mesh),ho.splice(t,1))}ws.render(pn,Gi),requestAnimationFrame(im)}im();function rm(){const s=window.innerWidth/window.innerHeight,e=s<1;Gi.position.z=e?Math.max(14,11/s):6.5,Gi.aspect=s,Gi.updateProjectionMatrix(),ws.setSize(window.innerWidth,window.innerHeight);const t=e?6:5,i=1,n=e?1:.6,r=on?n*.7:n;Yt.scale.set(r,r,r),on&&(It.position.x=-t,Nt.position.x=t,It.position.y=Nt.position.y=0),It.fontSize=5.5*i,Nt.fontSize=5.5*i,[It,Nt].forEach(a=>a.sync())}window.addEventListener("resize",rm);rm();
