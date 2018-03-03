for(var numbers=[100,1,32,99,24,7,4444],ul=document.querySelector("ul"),span=document.querySelector("span"),liList="",biggest=numbers[0],i=0;i<numbers.length;i++)liList+='<li class="list-item list-item-'+(i+1)+'">'+numbers[i]+"</li>",numbers[i]>biggest&&(biggest=numbers[i]);ul.innerHTML=liList,span.innerHTML=biggest;
//# sourceMappingURL=maps/script.js.map
