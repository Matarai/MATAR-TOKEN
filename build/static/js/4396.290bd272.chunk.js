(self.webpackChunkmatar_landing_page=self.webpackChunkmatar_landing_page||[]).push([[4396],{40008:(e,t,r)=>{"use strict";r.d(t,{E:()=>l,R:()=>s,S:()=>o,a:()=>c});var a=r(2856),i=r(93709),n=r(75144);const s=(()=>i.z.union([i.z.date().transform((e=>a.iC.from(Math.floor(e.getTime()/1e3)))),i.z.number().transform((e=>a.iC.from(e)))]))(),o=(()=>s.default(new Date(0)))(),l=(()=>s.default(new Date(Date.now()+31536e7)))();function c(e,t){if(!e)throw new n.x(t);return e}},50648:(e,t,r)=>{"use strict";r.d(t,{B:()=>l,C:()=>f,N:()=>u,a:()=>c,s:()=>h});var a=r(75144),i=r(93709),n=r(44596);const s=(()=>i.z.object({}).catchall(i.z.union([a.cw,i.z.unknown()])))(),o=(()=>i.z.union([i.z.array(s),s]).optional().nullable())(),l=(()=>i.z.object({name:i.z.union([i.z.string(),i.z.number()]).optional().nullable(),description:i.z.string().nullable().optional().nullable(),image:a.cx.nullable().optional(),animation_url:a.cx.optional().nullable()}))(),c=(()=>l.extend({external_url:a.cx.nullable().optional(),background_color:a.cy.optional().nullable(),properties:o,attributes:o}).catchall(i.z.union([a.cw,i.z.unknown()])))(),u=(()=>i.z.union([c,i.z.string()]))(),f=(()=>c.extend({id:i.z.string(),uri:i.z.string(),image:i.z.string().nullable().optional(),external_url:i.z.string().nullable().optional(),animation_url:i.z.string().nullable().optional()}))();async function h(e,t,i,s){if(!(0,n.i)(i)){const n=(await Promise.resolve().then(r.t.bind(r,2056,19))).default,o=e.getSigner(),l=e.getProvider(),c=new a.cq(o||l,i,n,e.options,e.storage),u=await e.getSignerAddress(),f=e.address;return(await c.read("allowance",[u,f])).lt(t)&&await c.sendTransaction("approve",[f,t]),s}s.value=t}},84396:(e,t,r)=>{"use strict";r.d(t,{A:()=>M,B:()=>Q,C:()=>$,D:()=>L,E:()=>R,F:()=>I,H:()=>J,I:()=>B,J:()=>A,K:()=>Y,L:()=>G,M:()=>le,S:()=>X,a:()=>E,f:()=>N,n:()=>ee,r:()=>ie,s:()=>ne,t:()=>se,u:()=>oe,v:()=>ce,w:()=>ue,x:()=>fe,y:()=>Z,z:()=>O});var a=r(63536),i=r(70200),n=r(24254),s=r(91339),o=r(40100),l=r(2856),c=r(69628),u=r(53708),f=r(75144),h=r(44596),m=r(26252),d=r(68376),p=r(63528),y=r(31076),g=r.n(y),b=r(34716);class w{print(){w.print(this)}bufferIndexOf(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return this.binarySearch(e,t,p.Buffer.compare);return this.linearSearch(e,t,((e,t)=>e.equals(t)))}static binarySearch(e,t,r){let a=0,i=e.length-1;for(;a<=i;){const n=Math.floor((a+i)/2),s=r(e[n],t);if(0===s){for(let a=n-1;a>=0;a--)if(0!==r(e[a],t))return a+1;return 0}s<0?a=n+1:i=n-1}return-1}binarySearch(e,t,r){return w.binarySearch(e,t,r)}static linearSearch(e,t,r){for(let a=0;a<e.length;a++)if(r(e[a],t))return a;return-1}linearSearch(e,t,r){return w.linearSearch(e,t,r)}static bufferify(e){if(!p.Buffer.isBuffer(e)){if("object"===typeof e&&e.words)return p.Buffer.from(e.toString(x),"hex");if(w.isHexString(e))return p.Buffer.from(e.replace(/^0x/,""),"hex");if("string"===typeof e)return p.Buffer.from(e);if("bigint"===typeof e)return p.Buffer.from(e.toString(16),"hex");if(e instanceof Uint8Array)return p.Buffer.from(e.buffer);if("number"===typeof e){let t=e.toString();return t.length%2&&(t="0".concat(t)),p.Buffer.from(t,"hex")}if(ArrayBuffer.isView(e))return p.Buffer.from(e.buffer,e.byteOffset,e.byteLength)}return e}bigNumberify(e){return w.bigNumberify(e)}static bigNumberify(e){if("bigint"===typeof e)return e;if("string"===typeof e)return e.startsWith("0x")&&w.isHexString(e)?BigInt("0x"+e.replace("0x","").toString()):BigInt(e);if(p.Buffer.isBuffer(e))return BigInt("0x"+e.toString("hex"));if(e instanceof Uint8Array)return function(e){const t=Array.from(e).map((e=>e.toString(16).padStart(2,"0"))).join("");return BigInt("0x".concat(t))}(e);if("number"===typeof e)return BigInt(e);throw new Error("cannot bigNumberify")}static isHexString(e){return"string"===typeof e&&/^(0x)?[0-9A-Fa-f]*$/.test(e)}static print(e){console.log(e.toString())}bufferToHex(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return w.bufferToHex(e,t)}static bufferToHex(e){return"".concat(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?"0x":"").concat((e||p.Buffer.alloc(0)).toString("hex"))}bufferify(e){return w.bufferify(e)}bufferifyFn(e){return t=>{const r=e(t);if(p.Buffer.isBuffer(r))return r;if(this.isHexString(r))return p.Buffer.from(r.replace("0x",""),"hex");if("string"===typeof r)return p.Buffer.from(r);if("bigint"===typeof r)return p.Buffer.from(t.toString(16),"hex");if(ArrayBuffer.isView(r))return p.Buffer.from(r.buffer,r.byteOffset,r.byteLength);const a=function(e){const t=new Uint8Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=parseInt(e.substring(r,r+2),16);return t.buffer}(t.toString("hex")),i=function(e){const t=new Uint8Array(e);return Array.from(t).map((e=>e.toString(16).padStart(2,"0"))).join("")}(e(a));return p.Buffer.from(i,"hex")}}isHexString(e){return w.isHexString(e)}log2(e){return 1===e?0:1+this.log2(e/2|0)}zip(e,t){return e.map(((e,r)=>[e,t[r]]))}static hexZeroPad(e,t){return"0x"+e.replace("0x","").padStart(t,"0")}}var v=w;function x(e){const t=e.words,r=new ArrayBuffer(4*t.length),a=new Uint8Array(r);for(let i=0;i<t.length;i++)a[4*i]=t[i]>>24&255,a[4*i+1]=t[i]>>16&255,a[4*i+2]=t[i]>>8&255,a[4*i+3]=255&t[i];return r}class S extends v{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(super(),(0,d.c)(this,"duplicateOdd",!1),(0,d.c)(this,"concatenator",p.Buffer.concat),(0,d.c)(this,"hashLeaves",!1),(0,d.c)(this,"isBitcoinTree",!1),(0,d.c)(this,"leaves",[]),(0,d.c)(this,"layers",[]),(0,d.c)(this,"sortLeaves",!1),(0,d.c)(this,"sortPairs",!1),(0,d.c)(this,"sort",!1),(0,d.c)(this,"fillDefaultHash",null),(0,d.c)(this,"complete",!1),r.complete){if(r.isBitcoinTree)throw new Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw new Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash)if("function"===typeof r.fillDefaultHash)this.fillDefaultHash=r.fillDefaultHash;else{if(!p.Buffer.isBuffer(r.fillDefaultHash)&&"string"!==typeof r.fillDefaultHash)throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');this.fillDefaultHash=(e,t)=>r.fillDefaultHash}this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(t),this.processLeaves(e)}getOptions(){var e,t;return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:null!==(e=null===(t=this.fillDefaultHash)||void 0===t?void 0:t.toString())&&void 0!==e?e:null,duplicateOdd:this.duplicateOdd}}processLeaves(e){if(this.hashLeaves&&(e=e.map(this.hashFn)),this.leaves=e.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(p.Buffer.compare)),this.fillDefaultHash)for(let t=this.leaves.length;t<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));t++)this.leaves.push(this.bufferify(this.fillDefaultHash(t,this.hashFn)));this.createHashes(this.leaves)}createHashes(e){for(this.layers=[e];e.length>1;){const t=this.layers.length;this.layers.push([]);const r=this.complete&&1===t&&!Number.isInteger(Math.log2(e.length))?2*e.length-2**Math.ceil(Math.log2(e.length)):e.length;for(let a=0;a<e.length;a+=2){if(a>=r){this.layers[t].push(...e.slice(r));break}if(a+1===e.length&&e.length%2===1){const r=e[e.length-1];let i=r;if(this.isBitcoinTree){i=this.hashFn(this.concatenator([g()(r),g()(r)])),i=g()(this.hashFn(i)),this.layers[t].push(i);continue}if(!this.duplicateOdd){this.layers[t].push(e[a]);continue}}const i=e[a],n=a+1===e.length?i:e[a+1];let s=null;s=this.isBitcoinTree?[g()(i),g()(n)]:[i,n],this.sortPairs&&s.sort(p.Buffer.compare);let o=this.hashFn(this.concatenator(s));this.isBitcoinTree&&(o=g()(this.hashFn(o))),this.layers[t].push(o)}e=this.layers[t]}}addLeaf(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e=this.hashFn(e)),this.processLeaves(this.leaves.concat(e))}addLeaves(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e=e.map(this.hashFn)),this.processLeaves(this.leaves.concat(e))}getLeaves(e){return Array.isArray(e)?(this.hashLeaves&&(e=e.map(this.hashFn),this.sortLeaves&&(e=e.sort(p.Buffer.compare))),this.leaves.filter((t=>-1!==this.bufferIndexOf(e,t,this.sortLeaves)))):this.leaves}getLeaf(e){return e<0||e>this.leaves.length-1?p.Buffer.from([]):this.leaves[e]}getLeafIndex(e){e=this.bufferify(e);const t=this.getLeaves();for(let r=0;r<t.length;r++){if(t[r].equals(e))return r}return-1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map((e=>this.bufferToHex(e)))}static marshalLeaves(e){return JSON.stringify(e.map((e=>S.bufferToHex(e))),null,2)}static unmarshalLeaves(e){let t=null;if("string"===typeof e)t=JSON.parse(e);else{if(!(e instanceof Object))throw new Error("Expected type of string or object");t=e}if(!t)return[];if(!Array.isArray(t))throw new Error("Expected JSON string to be array");return t.map(S.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce(((e,t)=>(Array.isArray(t)?e.push(t.map((e=>this.bufferToHex(e)))):e.push(t),e)),[])}getLayersFlat(){const e=this.layers.reduce(((e,t)=>(Array.isArray(t)?e.unshift(...t):e.unshift(t),e)),[]);return e.unshift(p.Buffer.from([0])),e}getHexLayersFlat(){return this.getLayersFlat().map((e=>this.bufferToHex(e)))}getLayerCount(){return this.getLayers().length}getRoot(){return 0===this.layers.length?p.Buffer.from([]):this.layers[this.layers.length-1][0]||p.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(e,t){if("undefined"===typeof e)throw new Error("leaf is required");e=this.bufferify(e);const r=[];if(!Number.isInteger(t)){t=-1;for(let r=0;r<this.leaves.length;r++)0===p.Buffer.compare(e,this.leaves[r])&&(t=r)}if(t<=-1)return[];for(let a=0;a<this.layers.length;a++){const e=this.layers[a],i=t%2,n=i?t-1:this.isBitcoinTree&&t===e.length-1&&a<this.layers.length-1?t:t+1;n<e.length&&r.push({position:i?"left":"right",data:e[n]}),t=t/2|0}return r}getHexProof(e,t){return this.getProof(e,t).map((e=>this.bufferToHex(e.data)))}getProofs(){const e=[];return this.getProofsDFS(this.layers.length-1,0,[],e),e}getProofsDFS(e,t,r,a){const i=t%2;if(-1===e)return void(i||a.push([...r].reverse()));if(t>=this.layers[e].length)return;const n=this.layers[e],s=i?t-1:t+1;let o=!1;s<n.length&&(o=!0,r.push({position:i?"left":"right",data:n[s]}));const l=2*t,c=2*t+1;this.getProofsDFS(e-1,l,r,a),this.getProofsDFS(e-1,c,r,a),o&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map((e=>this.bufferToHex(e.data)))}getPositionalHexProof(e,t){return this.getProof(e,t).map((e=>["left"===e.position?0:1,this.bufferToHex(e.data)]))}getProofIndices(e,t){const r=2**t;let a=new Set;for(const l of e){let e=r+l;for(;e>1;)a.add(1^e),e=e/2|0}const i=e.map((e=>r+e)),n=Array.from(a).sort(((e,t)=>e-t)).reverse();a=i.concat(n);const s=new Set,o=[];for(let l of a)if(!s.has(l))for(o.push(l);l>1&&(s.add(l),s.has(1^l));)l=l/2|0;return o.filter((t=>!e.includes(t-r)))}getProofIndicesForUnevenTree(e,t){const r=Math.ceil(Math.log2(t)),a=[];for(let s=0;s<r;s++){t%2!==0&&a.push({index:s,leavesCount:t}),t=Math.ceil(t/2)}const i=[];let n=e;for(let s=0;s<r;s++){let e=n.map((e=>e%2===0?e+1:e-1)).filter((e=>!n.includes(e)));const t=a.find((e=>{let{index:t}=e;return t===s}));t&&n.includes(t.leavesCount-1)&&(e=e.slice(0,-1)),i.push(e),n=[...new Set(n.map((e=>e%2===0?e/2:e%2===0?(e+1)/2:(e-1)/2)))]}return i}getMultiProof(e,t){this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),t||(t=e,e=this.getLayersFlat());if(this.isUnevenTree()&&t.every(Number.isInteger))return this.getMultiProofForUnevenTree(t);if(!t.every(Number.isInteger)){let e=t;this.sortPairs&&(e=e.sort(p.Buffer.compare));let r=e.map((e=>this.bufferIndexOf(this.leaves,e,this.sortLeaves))).sort(((e,t)=>e===t?0:e>t?1:-1));if(!r.every((e=>-1!==e)))throw new Error("Element does not exist in Merkle tree");const a=[],i=[];let n=[];for(let t=0;t<this.layers.length;t++){const e=this.layers[t];for(let t=0;t<r.length;t++){const s=r[t],o=this.getPairNode(e,s);a.push(e[s]),o&&i.push(o),n.push(s/2|0)}r=n.filter(((e,t,r)=>r.indexOf(e)===t)),n=[]}return i.filter((e=>!a.includes(e)))}return this.getProofIndices(t,Math.log2(e.length/2|0)).map((t=>e[t]))}getMultiProofForUnevenTree(e,t){t||(t=e,e=this.getLayers());let r=[],a=t;for(const i of e){const e=[];for(const r of a){if(r%2===0){const t=r+1;if(!a.includes(t)&&i[t]){e.push(i[t]);continue}}const t=r-1;a.includes(t)||!i[t]||e.push(i[t])}r=r.concat(e);const t=new Set;for(const r of a)r%2!==0?r%2!==0?t.add((r-1)/2):t.add((r+1)/2):t.add(r/2);a=Array.from(t)}return r}getHexMultiProof(e,t){return this.getMultiProof(e,t).map((e=>this.bufferToHex(e)))}getProofFlags(e,t){if(!Array.isArray(e)||e.length<=0)throw new Error("Invalid Inputs!");let r;if(r=e.every(Number.isInteger)?[...e].sort(((e,t)=>e===t?0:e>t?1:-1)):e.map((e=>this.bufferIndexOf(this.leaves,e,this.sortLeaves))).sort(((e,t)=>e===t?0:e>t?1:-1)),!r.every((e=>-1!==e)))throw new Error("Element does not exist in Merkle tree");const a=t.map((e=>this.bufferify(e))),i=[],n=[];for(let s=0;s<this.layers.length;s++){const e=this.layers[s];r=r.reduce(((t,r)=>{if(!i.includes(e[r])){const t=this.getPairNode(e,r),s=a.includes(e[r])||a.includes(t);t&&n.push(!s),i.push(e[r]),i.push(t)}return t.push(r/2|0),t}),[])}return n}verify(e,t,r){let a=this.bufferify(t);if(r=this.bufferify(r),!Array.isArray(e)||!t||!r)return!1;for(let i=0;i<e.length;i++){const t=e[i];let r=null,n=null;if("string"===typeof t)r=this.bufferify(t),n=!0;else if(Array.isArray(t))n=0===t[0],r=this.bufferify(t[1]);else if(p.Buffer.isBuffer(t))r=t,n=!0;else{if(!(t instanceof Object))throw new Error("Expected node to be of type string or object");r=this.bufferify(t.data),n="left"===t.position}const s=[];this.isBitcoinTree?(s.push(g()(a)),s[n?"unshift":"push"](g()(r)),a=this.hashFn(this.concatenator(s)),a=g()(this.hashFn(a))):this.sortPairs?-1===p.Buffer.compare(a,r)?(s.push(a,r),a=this.hashFn(this.concatenator(s))):(s.push(r,a),a=this.hashFn(this.concatenator(s))):(s.push(a),s[n?"unshift":"push"](r),a=this.hashFn(this.concatenator(s)))}return 0===p.Buffer.compare(a,r)}verifyMultiProof(e,t,r,a,i){if(this.isUnevenTree())return this.verifyMultiProofForUnevenTree(e,t,r,a,i);const n=Math.ceil(Math.log2(a));e=this.bufferify(e),r=r.map((e=>this.bufferify(e))),i=i.map((e=>this.bufferify(e)));const s={};for(const[c,u]of this.zip(t,r))s[2**n+c]=u;for(const[c,u]of this.zip(this.getProofIndices(t,n),i))s[c]=u;let o=Object.keys(s).map((e=>Number(e))).sort(((e,t)=>e-t));o=o.slice(0,o.length-1);let l=0;for(;l<o.length;){const e=o[l];if(e>=2&&{}.hasOwnProperty.call(s,1^e)){let t=[s[e-e%2],s[e-e%2+1]];this.sortPairs&&(t=t.sort(p.Buffer.compare));const r=t[1]?this.hashFn(this.concatenator(t)):t[0];s[e/2|0]=r,o.push(e/2|0)}l+=1}return!t.length||{}.hasOwnProperty.call(s,1)&&s[1].equals(e)}verifyMultiProofWithFlags(e,t,r,a){e=this.bufferify(e),t=t.map(this.bufferify),r=r.map(this.bufferify);const i=t.length,n=a.length,s=[];let o=0,l=0,c=0;for(let u=0;u<n;u++){const e=[a[u]?o<i?t[o++]:s[l++]:r[c++],o<i?t[o++]:s[l++]].sort(p.Buffer.compare);s[u]=this.hashFn(this.concatenator(e))}return 0===p.Buffer.compare(s[n-1],e)}verifyMultiProofForUnevenTree(e,t,r,a,i){e=this.bufferify(e),r=r.map((e=>this.bufferify(e))),i=i.map((e=>this.bufferify(e)));const n=this.calculateRootForUnevenTree(t,r,a,i);return e.equals(n)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){const e=this.getLayers().map((e=>e.map((e=>this.bufferToHex(e,!1))))),t=[];for(let r=0;r<e.length;r++){const a=[];for(let i=0;i<e[r].length;i++){const n={[e[r][i]]:null};if(t.length){n[e[r][i]]={};const a=t.shift(),s=Object.keys(a)[0];if(n[e[r][i]][s]=a[s],t.length){const a=t.shift(),s=Object.keys(a)[0];n[e[r][i]][s]=a[s]}}a.push(n)}t.push(...a)}return t[0]}resetTree(){this.leaves=[],this.layers=[]}getPairNode(e,t){const r=t%2===0?t+1:t-1;return r<e.length?e[r]:null}toTreeString(){const e=this.getLayersAsObject();return(0,b.asTree)(e,!0,!1)}toString(){return this.toTreeString()}isUnevenTree(e){const t=(null===e||void 0===e?void 0:e.length)||this.getDepth();return!this.isPowOf2(t)}isPowOf2(e){return e&&!(e&e-1)}calculateRootForUnevenTree(e,t,r,a){const i=this.zip(e,t).sort(((e,t)=>{let[r]=e,[a]=t;return r-a})),n=i.map((e=>{let[t]=e;return t})),s=this.getProofIndicesForUnevenTree(n,r);let o=0;const l=[];for(let u=0;u<s.length;u++){const e=s[u],t=o;o+=e.length,l[u]=this.zip(e,a.slice(t,o))}const c=[i];for(let u=0;u<l.length;u++){const e=l[u].concat(c[u]).sort(((e,t)=>{let[r]=e,[a]=t;return r-a})).map((e=>{let[,t]=e;return t})),t=c[u].map((e=>{let[t]=e;return t})),r=[...new Set(t.map((e=>e%2===0?e/2:e%2===0?(e+1)/2:(e-1)/2)))],a=[];for(let i=0;i<r.length;i++){const t=r[i],n=e[2*i],s=e[2*i+1],o=s?this.hashFn(this.concatenator([n,s])):n;a.push([t,o])}c.push(a)}return c[c.length-1][0][1]}}var T=r(40008),P=r(93709),C=r(50648),k=r(89422);function B(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot,pricePerToken:e.pricePerToken,currency:e.currency,quantityLimitPerTransaction:e.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:e.waitTimeInSecondsBetweenClaims||0}}function A(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot,pricePerToken:e.pricePerToken,currency:e.currency,quantityLimitPerWallet:e.maxClaimablePerWallet,metadata:e.metadata||""}}function L(e,t){return"unlimited"===e?a.wB:i.parseUnits(e,t)}async function H(e){const t=25e3,r=Array.from({length:Math.ceil(e.length/t)},((r,a)=>e.slice(a*t,a*t+t))),a=[],i=await Promise.all(r.map((e=>f.bK.parseAsync(e))));for(const n of i)a.push(...n);return a}let I=function(e){return e[e.V1=1]="V1",e[e.V2=2]="V2",e}({});class z{constructor(e,t,r,a,i){this.storage=e,this.shardNybbles=a,this.baseUri=t,this.originalEntriesUri=r,this.tokenDecimals=i,this.shards={},this.trees={}}static async fromUri(e,t){try{const r=await t.downloadJSON(e);if(r.isShardedMerkleTree)return z.fromShardedMerkleTreeInfo(r,t)}catch(r){return}}static async fromShardedMerkleTreeInfo(e,t){return new z(t,e.baseUri,e.originalEntriesUri,e.shardNybbles,e.tokenDecimals)}static hashEntry(e,t,r,a){switch(a){case I.V1:return n.keccak256(["address","uint256"],[e.address,L(e.maxClaimable,t)]);case I.V2:return n.keccak256(["address","uint256","uint256","address"],[e.address,L(e.maxClaimable,t),L(e.price||"unlimited",r),e.currencyAddress||s.e])}}static async fetchAndCacheDecimals(e,t,r){if(!r)return 18;let a=e[r];if(void 0===a){a=(await(0,h.f)(t,r)).decimals,e[r]=a}return a}static async buildAndUpload(e,t,r,a,i){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2;const s=await H(e),l={};for(const o of s){const e=o.address.slice(2,2+n).toLowerCase();void 0===l[e]&&(l[e]=[]),l[e].push(o)}const c={},u=await Promise.all(Object.entries(l).map((async e=>{let[a,n]=e;return[a,new S(await Promise.all(n.map((async e=>{const a=await z.fetchAndCacheDecimals(c,r,e.currencyAddress);return z.hashEntry(e,t,a,i)}))),o.keccak256,{sort:!0}).getHexRoot()]}))),f=Object.fromEntries(u),h=new S(Object.values(f),o.keccak256,{sort:!0}),m=[];for(const[o,b]of Object.entries(l)){const e={proofs:h.getProof(f[o]).map((e=>"0x"+e.data.toString("hex"))),entries:b};m.push({data:JSON.stringify(e),name:"".concat(o,".json")})}const d=await a.uploadBatch(m),p=d[0].slice(0,d[0].lastIndexOf("/")),y=await a.upload(s),g={merkleRoot:h.getHexRoot(),baseUri:p,originalEntriesUri:y,shardNybbles:n,tokenDecimals:t,isShardedMerkleTree:!0};return{shardedMerkleInfo:g,uri:await a.upload(g)}}async getProof(e,t,r){const a=e.slice(2,2+this.shardNybbles).toLowerCase();let i=this.shards[a];const n={};if(void 0===i)try{const e=this.baseUri.endsWith("/")?this.baseUri:"".concat(this.baseUri,"/");i=this.shards[a]=await this.storage.downloadJSON("".concat(e).concat(a,".json"));const s=await Promise.all(i.entries.map((async e=>{const a=await z.fetchAndCacheDecimals(n,t,e.currencyAddress);return z.hashEntry(e,this.tokenDecimals,a,r)})));this.trees[a]=new S(s,o.keccak256,{sort:!0})}catch(h){return null}const s=i.entries.find((t=>t.address.toLowerCase()===e.toLowerCase()));if(!s)return null;const l=await z.fetchAndCacheDecimals(n,t,s.currencyAddress),c=z.hashEntry(s,this.tokenDecimals,l,r),u=this.trees[a].getProof(c).map((e=>"0x"+e.data.toString("hex")));return f.bL.parseAsync({...s,proof:u.concat(i.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(e){return console.warn("Could not fetch original snapshot entries",e),[]}}}async function N(e,t,r,a,i,n){if(!r)return null;const s=r[t];if(s){const r=await i.downloadJSON(s);if(r.isShardedMerkleTree&&r.merkleRoot===t){const t=await z.fromShardedMerkleTreeInfo(r,i);return await t.getProof(e,a,n)}const o=await f.bM.parseAsync(r);if(t===o.merkleRoot)return o.claims.find((t=>t.address.toLowerCase()===e.toLowerCase()))||null}return null}function O(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot.toString(),pricePerToken:e.pricePerToken,currency:e.currency,maxClaimablePerWallet:e.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:e.waitTimeInSecondsBetweenClaims}}function M(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot.toString(),pricePerToken:e.pricePerToken,currency:e.currency,maxClaimablePerWallet:e.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:e.metadata}}async function E(e,t,a,n,s){const o=e.getSigner(),c=e.getProvider(),u=(await Promise.resolve().then(r.t.bind(r,2056,19))).default,h=new f.cq(o||c,t,u,e.options,e.storage),m=await e.getSignerAddress(),d=e.address,p=await h.read("allowance",[m,d]),y=l.iC.from(a).mul(l.iC.from(n)).div(i.parseUnits("1",s));p.lt(y)&&await h.sendTransaction("approve",[d,p.add(y)])}async function R(e,t,r,n,o,u,f,d,p){let y=L(r.maxClaimablePerWallet,o),g=[c.hexZeroPad([0],32)],b=r.price,w=r.currencyAddress;try{if(!r.merkleRootHash.toString().startsWith(s.e)){const t=await N(e,r.merkleRootHash.toString(),await n(),u.getProvider(),f,p);if(t)g=t.proof,y="unlimited"===t.maxClaimable?a.wB:i.parseUnits(t.maxClaimable,o),b=void 0===t.price||"unlimited"===t.price?a.wB:await(0,m.n)(u.getProvider(),t.price,t.currencyAddress||s.e),w=t.currencyAddress||s.e;else if(p===I.V1)throw new Error("No claim found for this address")}}catch(T){if("No claim found for this address"===(null===T||void 0===T?void 0:T.message))throw T;console.warn("failed to check claim condition merkle root hash, continuing anyways",T)}const v=await u.getCallOverrides()||{},x=b.toString()!==a.wB.toString()?b:r.price,S=w!==s.e?w:r.currencyAddress;return x.gt(0)&&((0,h.i)(S)?v.value=l.iC.from(x).mul(t).div(i.parseUnits("1",o)):d&&await E(u,S,x,t,o)),{overrides:v,proofs:g,maxClaimable:y,price:x,currencyAddress:S,priceInProof:b,currencyAddressInProof:w}}const F=(()=>P.z.object({name:P.z.string(),symbol:P.z.string(),decimals:P.z.number()}))(),U=(()=>F.extend({value:f.b5,displayValue:P.z.string()}))(),D=(()=>P.z.object({name:P.z.string().optional()}).catchall(P.z.unknown()))(),j=(()=>P.z.object({startTime:T.S,currencyAddress:P.z.string().default(f.aV),price:f.cv.default(0),maxClaimableSupply:f.cz,maxClaimablePerWallet:f.cz,waitInSeconds:f.b6.default(0),merkleRootHash:f.cA.default(c.hexZeroPad([0],32)),snapshot:P.z.optional(f.bK).nullable(),metadata:D.optional()}))(),W=(()=>P.z.array(j))(),q=(()=>j.extend({availableSupply:f.cz,currentMintSupply:f.cz,currencyMetadata:U.default({value:l.iC.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:f.b5,waitInSeconds:f.b5,startTime:f.b5.transform((e=>new Date(1e3*e.toNumber()))),snapshot:f.bK.optional().nullable()}))();async function V(e,t,r,a,i){const n=[],s=await Promise.all(e.map((async e=>{if(e.snapshot&&e.snapshot.length>0){const s=await async function(e,t,r,a,i){const n=await H(e),s=n.map((e=>e.address));if(new Set(s).size<s.length)throw new f.s;const o=await z.buildAndUpload(n,t,r,a,i);return{merkleRoot:o.shardedMerkleInfo.merkleRoot,snapshotUri:o.uri}}(e.snapshot,t,r,a,i);n.push(s),e.merkleRootHash=s.merkleRoot}else e.merkleRootHash=c.hexZeroPad([0],32);return e})));return{inputsWithSnapshots:s,snapshotInfos:n}}async function J(e,t,r,a,i){const{inputsWithSnapshots:n,snapshotInfos:o}=await V(e,t,r,a,i),c=await W.parseAsync(n),u=(await Promise.all(c.map((e=>async function(e,t,r,a){const i=e.currencyAddress===s.e?f.aV:e.currencyAddress,n=L(e.maxClaimableSupply,t),o=L(e.maxClaimablePerWallet,t);let l;return e.metadata&&(l="string"===typeof e.metadata?e.metadata:await a.upload(e.metadata)),{startTimestamp:e.startTime,maxClaimableSupply:n,supplyClaimed:0,maxClaimablePerWallet:o,pricePerToken:await(0,m.n)(r,e.price,i),currency:i,merkleRoot:e.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:e.waitInSeconds||0,metadata:l}}(e,t,r,a))))).sort(((e,t)=>function(e,t){const r=l.iC.from(e),a=l.iC.from(t);return r.eq(a)?0:r.gt(a)?1:-1}(e.startTimestamp,t.startTimestamp)));return{snapshotInfos:o,sortedConditions:u}}async function _(e,t,r){if(!t)return null;const a=t[e];if(a){const t=await r.downloadJSON(a);if(t.isShardedMerkleTree&&t.merkleRoot===e){const e=await z.fromUri(a,r);return(null===e||void 0===e?void 0:e.getAllEntries())||null}{const r=await f.bM.parseAsync(t);if(e===r.merkleRoot)return r.claims.map((e=>({address:e.address,maxClaimable:e.maxClaimable,price:e.price,currencyAddress:e.currencyAddress})))}}return null}function K(e,t){return e.toString()===a.wB.toString()?"unlimited":i.formatUnits(e,t)}async function Z(e,t,r,a,i,n){var s;const o=await(0,h.a)(r,e.currency,e.pricePerToken),c=K(e.maxClaimableSupply,t),u=K(e.maxClaimablePerWallet,t),f=K(l.iC.from(e.maxClaimableSupply).sub(e.supplyClaimed),t),m=K(e.supplyClaimed,t);let d;return e.metadata&&(d=await i.downloadJSON(e.metadata)),q.parseAsync({startTime:e.startTimestamp,maxClaimableSupply:c,maxClaimablePerWallet:u,currentMintSupply:m,availableSupply:f,waitInSeconds:null===(s=e.waitTimeInSecondsBetweenClaims)||void 0===s?void 0:s.toString(),price:l.iC.from(e.pricePerToken),currency:e.currency,currencyAddress:e.currency,currencyMetadata:o,merkleRootHash:e.merkleRoot,snapshot:n?await _(e.merkleRoot,a,i):void 0,metadata:d})}async function Y(e,t,r){if(e>=r.length)throw Error("Index out of bounds - got index: ".concat(e," with ").concat(r.length," conditions"));const a=r[e].currencyMetadata.decimals,n=r[e].price,s=i.formatUnits(n,a),o=await j.parseAsync({...r[e],price:s,...t}),l=await q.parseAsync({...o,price:n});return r.map(((t,r)=>{let n;n=r===e?l:t;const s=i.formatUnits(n.price,a);return{...n,price:s}}))}let $=function(e){return e.NotEnoughSupply="There is not enough supply to claim.",e.AddressNotAllowed="This address is not on the allowlist.",e.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",e.ClaimPhaseNotStarted="Claim phase has not started yet.",e.AlreadyClaimed="You have already claimed the token.",e.WrongPriceOrCurrency="Incorrect price or currency.",e.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",e.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",e.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",e.NoClaimConditionSet="There is no claim condition set.",e.NoWallet="No wallet connected.",e.Unknown="No claim conditions found.",e}({});function G(e){if(void 0===e){const e=Buffer.alloc(16);return(0,k.c)({},e),c.hexlify(u.kT(e.toString("hex")))}return c.hexlify(e)}const Q=(()=>P.z.object({to:f.b9.refine((e=>e.toLowerCase()!==s.e),{message:"Cannot create payload to mint to zero address"}),price:f.cv.default(0),currencyAddress:f.b8.default(f.aV),mintStartTime:T.S,mintEndTime:T.E,uid:P.z.string().optional().transform((e=>G(e))),primarySaleRecipient:f.b9.default(s.e)}))(),X=(()=>Q.extend({quantity:f.cv}))(),ee=(()=>X.extend({mintStartTime:f.b5,mintEndTime:f.b5}))(),te=(()=>Q.extend({metadata:C.N,royaltyRecipient:P.z.string().default(s.e),royaltyBps:f.cB.default(0)}))(),re=(()=>te.extend({metadata:C.N.default(""),uri:P.z.string(),royaltyBps:f.b5,mintStartTime:f.b5,mintEndTime:f.b5}))(),ae=(()=>te.extend({metadata:C.N.default(""),quantity:f.b6}))(),ie=(()=>ae.extend({tokenId:f.b6}))(),ne=(()=>re.extend({tokenId:f.b5,quantity:f.b5}))(),se=(()=>te.extend({metadata:C.N.default(""),quantity:f.b5.default(1)}))(),oe=(()=>re.extend({quantity:f.b5.default(1)}))(),le=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ce=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ue=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],fe=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}]},31076:e=>{e.exports=function(e){for(var t=new Buffer(e.length),r=0,a=e.length-1;r<=a;++r,--a)t[r]=e[a],t[a]=e[r];return t}},34716:function(e){e.exports=function(){function e(e,t){var r=t?"\u2514":"\u251c";return r+=e?"\u2500 ":"\u2500\u2500\u2510"}function t(e,t){var r=[];for(var a in e)e.hasOwnProperty(a)&&(t&&"function"===typeof e[a]||r.push(a));return r}function r(a,i,n,s,o,l,c){var u,f,h="",m=0,d=s.slice(0);if(d.push([i,n])&&s.length>0&&(s.forEach((function(e,t){t>0&&(h+=(e[1]?" ":"\u2502")+"  "),f||e[0]!==i||(f=!0)})),h+=e(a,n)+a,o&&("object"!==typeof i||i instanceof Date)&&(h+=": "+i),f&&(h+=" (circular ref.)"),c(h)),!f&&"object"===typeof i){var p=t(i,l);p.forEach((function(e){u=++m===p.length,r(e,i[e],u,d,o,l,c)}))}}var a={asLines:function(e,t,a,i){r(".",e,!1,[],t,"function"!==typeof a&&a,i||a)},asTree:function(e,t,a){var i="";return r(".",e,!1,[],t,a,(function(e){i+=e+"\n"})),i}};return a}()}}]);
//# sourceMappingURL=4396.290bd272.chunk.js.map