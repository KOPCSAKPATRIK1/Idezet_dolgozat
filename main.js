(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{let e;console.log("Loaded"),async function(){let t=await fetch("/quotes.json");e=await t.json()}(),document.getElementById("betolt").addEventListener("click",(()=>{!function(e){let t=document.getElementById("idezetek");t.innerHTML=" ",e=e.sort(((e,t)=>e.author.localeCompare(t.author)));for(let n of e){let e=document.createElement("li");e.innerHTML=n.author+": "+n.quote,t.appendChild(e)}}(e.quotes)})),document.getElementById("koverites").addEventListener("click",(()=>{!function(e){let t=document.getElementById("boldIdezetek");t.innerHTML=" ";for(let n of e){let e=document.createElement("li"),o=n.quote.split(" ");for(let t=0;t<o.length;t++)"the"!=o[t]&&"The"!=o[t]||(o[t]=o[t].bold()),e.innerHTML+=o[t]+" ";t.appendChild(e)}}(e.quotes)})),document.getElementById("szamolas").addEventListener("click",(()=>{!function(e){let t=[],n=document.getElementById("szamok");for(let n of e)t.push(n.quote.length);let o=t.join(", ");n.innerHTML=o}(e.quotes)}))}))})();