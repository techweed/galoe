(window.webpackJsonpgaloe=window.webpackJsonpgaloe||[]).push([[0],{16:function(e,t,a){e.exports=a(39)},21:function(e,t,a){},22:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(14),r=a.n(i),c=(a(21),a(7)),s=a(8),l=a(10),m=a(9),u=a(11),d=(a(22),a(15)),h=a.n(d),p=function(){return o.a.createElement(h.a,{params:{particles:{number:{value:150,density:{enable:!0,value_area:1803.4120608655228}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1.5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:0,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex"}})},g=a(3),f={width:"100%",maxWidth:980,margin:"0 auto"},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={center:[0,20],zoom:1,cities:[{name:"Zurich",coordinates:[8.5417,47.3769],gmt:2},{name:"Singapore",coordinates:[103.8198,1.3521],gmt:8},{name:"San Francisco",coordinates:[-122.4194,37.7749],gmt:-7},{name:"Sydney",coordinates:[151.2093,-33.8688],gmt:10},{name:"Lagos",coordinates:[3.3792,6.5244],gmt:1},{name:"India",coordinates:[75.7410984,19.0825223],gmt:5.5},{name:"Shanghai",coordinates:[121.4737,31.2304],gmt:8},{name:"Tokyo",coordinates:[139.42,35.41],gmt:9},{name:"Moscow",coordinates:[37.37,55.45],gmt:3},{name:"Columbia",coordinates:[-76.861046,39.203712],gmt:-4},{name:"Santiago",coordinates:[-70.64827,-33.45694],gmt:-3}]},a.handleCitySelection=function(e){var t=e.target.getAttribute("data-city"),n=a.props.changeTime,o=a.state.cities[t];a.setState({center:o.coordinates,zoom:2}),n(o.name,o.gmt)},a.handleReset=function(){var e=a.props.changeTime;a.setState({center:[0,20],zoom:1}),e("UTC",0)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:f},this.state.cities.map((function(t,a){return o.a.createElement("button",{key:a,className:"btn px1","data-city":a,onClick:e.handleCitySelection},t.name)})),o.a.createElement("button",{onClick:this.handleReset},"Reset")),o.a.createElement("div",{style:f},o.a.createElement(g.ComposableMap,{projectionConfig:{scale:205},width:980,height:551,style:{width:"100%",height:"auto"}},o.a.createElement(g.ZoomableGroup,{center:this.state.center,zoom:this.state.zoom},o.a.createElement(g.Geographies,{geography:"https://unpkg.com/world-atlas@1.1.4/world/50m.json"},(function(e,t){return e.map((function(e,a){return"ATA"!==e.id&&o.a.createElement(g.Geography,{key:a,geography:e,projection:t,style:{default:{fill:"#ECEFF1",stroke:"#607D8B",strokeWidth:.75,outline:"none"},hover:{fill:"#607D8B",stroke:"#607D8B",strokeWidth:.75,outline:"none"},pressed:{fill:"#FF5722",stroke:"#607D8B",strokeWidth:.75,outline:"none"}}})}))})),o.a.createElement(g.Markers,null,this.state.cities.map((function(e,t){return o.a.createElement(g.Marker,{key:t,marker:e},o.a.createElement("circle",{cx:0,cy:0,r:6,fill:"#FF5722",stroke:"#DF3702"}))})))))))}}]),t}(n.Component),b=a(4),v=a.n(b),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={time:v()().utc().format("LTS"),date:v()().format("LL"),country:"UTC",gmt:0},a.updateTime=function(){a.setState({time:v()().utc().add(a.state.gmt,"hours").format("LTS"),country:a.state.country,date:v()().format("LL")})},a.changeTime=function(e,t){a.setState({gmt:t,country:e,time:v()().utc().add(t,"hours").format("LTS"),date:v()().format("LL")})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.updateTime,1e3)}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"particle-component"},o.a.createElement(p,null)),o.a.createElement("div",{className:"counter"},o.a.createElement(y,{changeTime:this.changeTime}),o.a.createElement("h2",{className:"counter-text"},this.state.time+" ("+this.state.country+")"),o.a.createElement("h5",{className:"counter-text"},this.state.date))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.8d46e631.chunk.js.map