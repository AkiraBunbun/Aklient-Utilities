function download(e,t){var d=document.createElement("a");d.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),d.setAttribute("download",e),d.style.display="none",document.body.appendChild(d),d.click(),document.body.removeChild(d)}