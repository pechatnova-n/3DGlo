(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),o=()=>{let e=(()=>{let e=(new Date("1 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining<=0?(t.textContent="00",r.textContent="00",a.textContent="00"):(t.textContent=n(e.hours),r.textContent=n(e.minutes),a.textContent=n(e.seconds)),setInterval((function(){e.timeRemaining>0&&o()}),1e3)},n=e=>e<10?"0"+e:e;o()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),r=t.querySelectorAll("a"),a=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",a),r.forEach((e=>e.addEventListener("click",(e=>{e.target.closest("menu")&&a()}))))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),r=document.querySelectorAll(".popup-btn"),a=window.screen.width;r.forEach((r=>{r.addEventListener("click",(()=>{let r,o=0;t.style.top="0%";const n=()=>{a<768?(e.style.display="block",t.style.top="30%"):(o++,r=requestAnimationFrame(n),o<=85?(e.style.display="block",t.style.top=.2*o+"%"):cancelAnimationFrame(r))};n()}))})),e.addEventListener("click",(t=>{console.log(t.target.closest(".popup-content")),t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(e=>{(e=>{e.target.value=e.target.value.replace(/\D+/,"")})(e)}))})),(()=>{const e=document.querySelectorAll("input[type = text]"),t=document.querySelectorAll("input[type = email]"),r=document.querySelectorAll("input[type = tel]"),a=document.getElementById("form2-message");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\sа-яА-Я-]+/i,"")}))})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\sа-яА-Я-]+/i,"")})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@_\-.!~*']+/,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d()-]+/,"")}))}));const o=e=>{e.target.value=e.target.value.replace(/^[\s-]*/,""),e.target.value=e.target.value.replace(/[\s-]*$/,""),e.target.value=e.target.value.replace(/-{2,}/g,"-"),e.target.value=e.target.value.replace(/\s{2,}/g," ")};e.forEach((e=>{e.addEventListener("blur",(e=>{o(e)}))})),a.addEventListener("blur",(e=>{o(e)})),t.forEach((e=>{e.addEventListener("blur",(e=>{o(e)}))})),r.forEach((e=>{e.addEventListener("blur",(e=>{o(e)}))})),e.forEach((e=>{e.addEventListener("blur",(e=>{const t=[];let r=e.target.value;r=r.trim().split(" "),r.forEach((e=>{e=e[0].toUpperCase()+e.slice(1).toLowerCase(),t.push(e)})),e.target.value=t.join(" ")}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),r=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const a=t.target.closest(".service-header-tab");r.forEach(((t,r)=>{t===a?(t.classList.add("active"),e[r].classList.remove("d-none")):(t.classList.remove("active"),e[r].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),r=document.querySelectorAll(".dot");let a,o=0;const n=(e,t,r)=>{e[t].classList.remove(r)},l=(e,t,r)=>{e[t].classList.add(r)},c=()=>{n(t,o,"portfolio-item-active"),n(r,o,"dot-active"),o++,o>=t.length&&(o=0),l(t,o,"portfolio-item-active"),l(r,o,"dot-active")},s=(e=1500)=>{a=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot",".portfolio-btn")&&(n(t,o,"portfolio-item-active"),n(r,o,"dot-active"),e.target.matches("#arrow-right")?o++:e.target.matches("#arrow-left")?o--:e.target.classList.contains(".dot")&&r.forEach(((t,r)=>{e.target===t&&(o=r)})),o>=t.length&&(o=0),o<0&&(o=t.length-1),l(t,o,"portfolio-item-active"),l(r,o,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot",".portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot",".portfolio-btn")&&s(2e3)}),!0),s(2e3)})()})();