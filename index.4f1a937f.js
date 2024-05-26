var r,t=function(r){return Number(r.dataset.salary.replace(/[$,]/g,""))},e=document.querySelector("ul");(r=Array.from(e.children)).sort(function(r,e){return t(e)-t(r)}),r.forEach(function(r){return e.append(r)}),Array.from(e.children).map(function(r){return{name:r.textContent.trim(),position:r.dataset.position,salary:t(r),age:Number(r.dataset.age)}});
//# sourceMappingURL=index.4f1a937f.js.map
