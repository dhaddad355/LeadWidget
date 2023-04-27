(()=>{"use strict";function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=a.call(e)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}function e(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var o=["init","tag"],a="well shit";function i(e,r){if(!e)throw Error("API method required");if(e=e.toLowerCase(),-1===o.indexOf(e))throw Error("Method ".concat(e," is not supported"));switch(console.log("Handling API call ".concat(e),r),e){case"message":case"tag":!function(e,r){for(var o=document.getElementsByTagName("form"),a=0;a<o.length;a++)console.log("listening to form:"+o[a].name),o[a].addEventListener("submit",(function(e){e.preventDefault();var o={tenant:r};console.log(this.elements);var a,i=n(new FormData(this));try{for(i.s();!(a=i.n()).done;){var l=t(a.value,2),c=l[0],u=l[1];o[c]=u}}catch(t){i.e(t)}finally{i.f()}return console.log(o),fetch("https://eo26cjqkx5o16i5.m.pipedream.net",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}}),!0}))}(0,a);break;default:console.warn("No handler defined for ".concat(e))}}function l(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}!function(t){console.log("JS-Widget starting");var n={tenant:""},e=t[t["JS-Widget"]],r=e.q;if(r)for(var o=0;o<r.length;o++)"init"==r[o][0].toLowerCase()?(n=l(n,r[o][1]),console.log("JS-Widget started",n),a=n.tenant):i(r[o][0],r[o][1]);(e=i).configurations=n}(window)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwibWFwcGluZ3MiOiIwcURBRUEsSUFBTUEsRUFBZSxDQUFDLE9BQVEsT0FDMUJDLEVBQU0sWUFrQ1YsU0FBU0MsRUFBV0MsRUFBS0MsR0FDckIsSUFBS0QsRUFBSyxNQUFNRSxNQUFNLHVCQUd0QixHQUZBRixFQUFNQSxFQUFJRyxlQUV5QixJQUEvQk4sRUFBYU8sUUFBUUosR0FBYSxNQUFNRSxNQUFNLFVBQURHLE9BQVdMLEVBQUcsc0JBSS9ELE9BRkFNLFFBQVFDLElBQUkscUJBQURGLE9BQXNCTCxHQUFPQyxHQUVoQ0QsR0FFSixJQUFLLFVBR0wsSUFBSyxPQ2hETixTQUFjUSxFQUFNQyxHQUduQixJQURKLElBQUlDLEVBQWtCQyxTQUFTQyxxQkFBcUIsUUFDeENDLEVBQUUsRUFBRUEsRUFBRUgsRUFBZ0JJLE9BQU9ELElBRWpDUCxRQUFRQyxJQUFJLHFCQUF1QkcsRUFBZ0JHLEdBQUdFLE1BQ3RETCxFQUFnQkcsR0FBR0csaUJBQWlCLFVBQVUsU0FBU0MsR0FDdkRBLEVBQUVDLGlCQUNGLElBQUlDLEVBQU0sQ0FBQyxPQUFTVixHQUNwQkgsUUFBUUMsSUFBSWEsS0FBS0MsVUFDakIsSUFDNkJDLEVBRENDLEVBQUFDLEVBQW5CLElBQUlDLFNBQVNMLE9BQ0ssSUFBN0IsSUFBQUcsRUFBQUcsTUFBQUosRUFBQUMsRUFBQUksS0FBQUMsTUFBK0IsS0FBQUMsRUFBQUMsRUFBQVIsRUFBQVMsTUFBQSxHQUFyQkMsRUFBR0gsRUFBQSxHQUFFRSxFQUFLRixFQUFBLEdBQWNWLEVBQUlhLEdBQU9ELENBQVEsQ0FDckQsT0FBQUUsR0FBQVYsRUFBQU4sRUFBQWdCLEVBQUEsU0FBQVYsRUFBQVcsR0FBQSxDQVdBLE9BVkE1QixRQUFRQyxJQUFJWSxHQUNaZ0IsTUFBTSwwQ0FBMkMsQ0FDN0NDLE9BQVEsT0FDUkMsS0FBTUMsS0FBS0MsVUFDUHBCLEdBRUpxQixRQUFTLENBQ0wsZUFBZ0Isc0NBR2pCLENBQ1AsR0FFWixDRHVCWUMsQ0FBS3hDLEVBQVFILEdBQ2IsTUFDSixRQUNJUSxRQUFRb0MsS0FBSywwQkFBRHJDLE9BQTJCTCxJQUVuRCxDQUVBLFNBQVMyQyxFQUFhQyxFQUFHQyxHQUNyQixJQUFLLElBQUliLEtBQU9hLEVBQ1JBLEVBQUVDLGVBQWVkLEtBQ2pCWSxFQUFFWixHQUFPYSxFQUFFYixJQUNuQixPQUFPWSxDQUNYLEVBekRBLFNBQWFHLEdBQ1R6QyxRQUFRQyxJQUFJLHNCQUdaLElBQUl5QyxFQUFpQixDQUNqQnZDLE9BQVEsSUFJUndDLEVBQWVGLEVBQU9BLEVBQU8sY0FDN0JHLEVBQVFELEVBQWFFLEVBQ3pCLEdBQUlELEVBQ0EsSUFBSyxJQUFJckMsRUFBSSxFQUFHQSxFQUFJcUMsRUFBTXBDLE9BQVFELElBQ0csUUFBN0JxQyxFQUFNckMsR0FBRyxHQUFHVixlQUNaNkMsRUFBaUJMLEVBQWFLLEVBQWdCRSxFQUFNckMsR0FBRyxJQUN2RFAsUUFBUUMsSUFBSSxvQkFBcUJ5QyxHQUNqQ2xELEVBQU1rRCxFQUFldkMsUUFHckJWLEVBQVdtRCxFQUFNckMsR0FBRyxHQUFJcUMsRUFBTXJDLEdBQUcsS0FLN0NvQyxFQUFlbEQsR0FDRmlELGVBQWlCQSxDQUNsQyxDQWlDQUksQ0FBSUwsTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3cgfSBmcm9tICcuL3ZpZXdzL21lc3NhZ2UnXG5cbmNvbnN0IHN1cHBvcnRlZEFQSSA9IFsnaW5pdCcsICd0YWcnXTsgLy8gc3VwcG9ydGVkIChlLmcuIGBtdygnZXZlbnQnLCAndXNlci1sb2dpbicpO2ApXG52YXIgdGlkID0gJ3dlbGwgc2hpdCc7XG5cbi8vIEVudHJ5XG5mdW5jdGlvbiBhcHAod2luZG93KSB7XG4gICAgY29uc29sZS5sb2coJ0pTLVdpZGdldCBzdGFydGluZycpO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgY29uZmlndXJhdGlvbnNcbiAgICBsZXQgY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgIHRlbmFudDogJydcbiAgICB9O1xuXG4gICAgLy8gYWxsIG1ldGhvZHMgdGhhdCB3ZXJlIGNhbGxlZCB0aWxsIG5vdyBhbmQgc3RvcmVkIGluIHF1ZXVlXG4gICAgbGV0IGdsb2JhbE9iamVjdCA9IHdpbmRvd1t3aW5kb3dbJ0pTLVdpZGdldCddXTtcbiAgICBsZXQgcXVldWUgPSBnbG9iYWxPYmplY3QucTtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHF1ZXVlW2ldWzBdLnRvTG93ZXJDYXNlKCkgPT0gJ2luaXQnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbnMgPSBleHRlbmRPYmplY3QoY29uZmlndXJhdGlvbnMsIHF1ZXVlW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSlMtV2lkZ2V0IHN0YXJ0ZWQnLCBjb25maWd1cmF0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGlkID0gY29uZmlndXJhdGlvbnMudGVuYW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGFwaUhhbmRsZXIocXVldWVbaV1bMF0sIHF1ZXVlW2ldWzFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG92ZXJyaWRlIHRlbXBvcmFyeVxuICAgIGdsb2JhbE9iamVjdCA9IGFwaUhhbmRsZXI7XG4gICAgZ2xvYmFsT2JqZWN0LmNvbmZpZ3VyYXRpb25zID0gY29uZmlndXJhdGlvbnM7XG59XG5cbi8qKlxuICAgIE1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIEFQSSBjYWxsc1xuICAgICovXG5mdW5jdGlvbiBhcGlIYW5kbGVyKGFwaSwgcGFyYW1zKSB7XG4gICAgaWYgKCFhcGkpIHRocm93IEVycm9yKCdBUEkgbWV0aG9kIHJlcXVpcmVkJyk7XG4gICAgYXBpID0gYXBpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoc3VwcG9ydGVkQVBJLmluZGV4T2YoYXBpKSA9PT0gLTEpIHRocm93IEVycm9yKGBNZXRob2QgJHthcGl9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhgSGFuZGxpbmcgQVBJIGNhbGwgJHthcGl9YCwgcGFyYW1zKTtcblxuICAgIHN3aXRjaCAoYXBpKSB7XG4gICAgICAgIC8vIFRPRE86IGFkZCBBUEkgaW1wbGVtZW50YXRpb25cbiAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgICBzaG93KHBhcmFtcywgdGlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgc2hvdyhwYXJhbXMsIHRpZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gaGFuZGxlciBkZWZpbmVkIGZvciAke2FwaX1gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9iamVjdChhLCBiKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGIpXG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgcmV0dXJuIGE7XG59XG5cbmFwcCh3aW5kb3cpOyIsIlxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdyh0ZXh0LCB0ZW5hbnQpIHtcbiAgIFxuICAgIHZhciBmb3Jtc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIik7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8Zm9ybXNDb2xsZWN0aW9uLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW5pbmcgdG8gZm9ybTonICsgZm9ybXNDb2xsZWN0aW9uW2ldLm5hbWUpO1xuICAgICAgICAgICAgZm9ybXNDb2xsZWN0aW9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgIGxldCBvYmogPSB7J3RlbmFudCc6dGVuYW50fTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBba2V5LCB2YWx1ZV0gb2YgZGF0YSkgeyAgb2JqW2tleV0gPSB2YWx1ZTsgIH1cbiAgICAgICAgICAgIC8vIFNob3VsZCBiZSB0cmlnZ2VyZWQgb24gZm9ybSBzdWJtaXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vZW8yNmNqcWt4NW8xNmk1Lm0ucGlwZWRyZWFtLm5ldFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgb2JqXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59XG4iXSwibmFtZXMiOlsic3VwcG9ydGVkQVBJIiwidGlkIiwiYXBpSGFuZGxlciIsImFwaSIsInBhcmFtcyIsIkVycm9yIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJ0ZW5hbnQiLCJmb3Jtc0NvbGxlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaSIsImxlbmd0aCIsIm5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2JqIiwidGhpcyIsImVsZW1lbnRzIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIkZvcm1EYXRhIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwia2V5IiwiZXJyIiwiZiIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwic2hvdyIsIndhcm4iLCJleHRlbmRPYmplY3QiLCJhIiwiYiIsImhhc093blByb3BlcnR5Iiwid2luZG93IiwiY29uZmlndXJhdGlvbnMiLCJnbG9iYWxPYmplY3QiLCJxdWV1ZSIsInEiLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9