const t=["--connections-particleColor","--connections-lineColor","--connections-particleAmount","--connections-defaultRadius","--connections-variantRadius","--connections-linkRadius"];registerPaint("connections",class{static get inputProperties(){return t}parseProps(n){return t.map(t=>n.get(t).toString().trim()||void 0)}checkDistance(t,n,e,o){return Math.sqrt(Math.pow(e-t,2)+Math.pow(o-n,2))}paint(t,n,e){const{width:o,height:r}=n,[i="rgb(74,74,74)",a="rgb(76,76,76)",s=o*r/1e3,c=1.5,l=3,h=80]=this.parseProps(e);let d=[];const[p,u,g]=a.match(/\d+/g),M=(n,e)=>{let o=+c+Math.random()*+l;return t.beginPath(),t.arc(n,e,o,0,2*Math.PI),t.fillStyle=i,t.fill(),{x:n,y:e}},m=n=>{for(let e=0;e<s;e++){let o=1-this.checkDistance(n.x,n.y,d[e].x,d[e].y)/h;o>0&&(t.lineWidth=.5,t.strokeStyle=`rgba(${p}, ${u}, ${g}, ${o})`,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(d[e].x,d[e].y),t.closePath(),t.stroke())}};for(let t=0;t<s;t++){let t=Math.round(Math.random()*o),n=Math.round(Math.random()*r);d.push(M(t,n))}for(let t=0;t<s;t++)m(d[t])}});
