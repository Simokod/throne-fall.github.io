function SetCookie(e,t,n){const o=new Date;o.setTime(o.getTime()+864e6);let i="expires="+o.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}function GetCookie(e){let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let o=n[e];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}