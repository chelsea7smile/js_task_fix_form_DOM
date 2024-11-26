document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=e.name,r=e.id,l=document.createElement("label");l.className="field-label",l.setAttribute("for",r),l.textContent=t.charAt(0).toUpperCase()+t.slice(1),e.setAttribute("placeholder",l.textContent),e.parentElement.insertBefore(l,e)})});
//# sourceMappingURL=index.3d9e2c15.js.map
