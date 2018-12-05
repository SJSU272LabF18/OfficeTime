const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var jsgraphs = require('js-graph-algorithms');
var arr = require('./array.js');

var weight = arr.weight;
var site = arr.site;
var connected_to = arr.connected_to;
var traffic7 = arr.traffic7;
var traffic8 = arr.traffic8;
var traffic9 = arr.traffic9;
var traffic10 = arr.traffic10;
var traffic11 = arr.traffic11;
var traffic12 = arr.traffic12;
var traffic16 = arr.traffic16;
var traffic17 = arr.traffic17;
var traffic18 = arr.traffic18;
var traffic19 = arr.traffic19;
var traffic20 = arr.traffic20;
var traffic21 = arr.traffic21;
var n = site.length
var g7 = new jsgraphs.WeightedDiGraph(n);
var g8 = new jsgraphs.WeightedDiGraph(n);
var g9 = new jsgraphs.WeightedDiGraph(n);
var g10 = new jsgraphs.WeightedDiGraph(n);
var g11 = new jsgraphs.WeightedDiGraph(n);
var g12 = new jsgraphs.WeightedDiGraph(n);
var g16 = new jsgraphs.WeightedDiGraph(n);
var g17 = new jsgraphs.WeightedDiGraph(n);
var g18 = new jsgraphs.WeightedDiGraph(n);
var g19 = new jsgraphs.WeightedDiGraph(n);
var g20 = new jsgraphs.WeightedDiGraph(n);
var g21 = new jsgraphs.WeightedDiGraph(n);

var route7=[]
var route8=[]
var route9=[]
var route10=[]
var route11=[]
var route12=[]
var route16=[]
var route17=[]
var route18=[]
var route19=[]
var route20=[]
var route21=[]
var route=[]
var routeCost=[]
var routeTime=[]



// var g1 = new jsgraphs.WeightedDiGraph(n);
// var g2 = new jsgraphs.FlowNetwork(n);
// var g3 = new jsgraphs.Graph(n);

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
const port = 3001;

app.use(bodyParser.json())

app.post('/login', function(req,res){

    console.log(req.body)
    var users = new mongoose.Users({
    name : req.body.name,
    token : req.body.token,
    email : req.body.email,
    provider : req.body.provider,
    provider_Id : req.body.provider_Id
    });
    console.log("in post request", users)
    users.save().then(
       user => {
         console.log("user created :", user);
         res.code = 200;
       },err => {
          console.log("User Already exists.");
         res.code = 400;
        }
      );
})

app.post('/query', function(req,res){
  console.log(req.body) 
  
   var s = req.body.source; //source
   var d = req.body.destination;
  // var s = 14; //source
  // var d = 1;
  var route=[]
//-------------------add edges to dijkstras------------------------
for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic7[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g7.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic7[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic8[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g8.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic8[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic9[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g9.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic9[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic10[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g10.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic10[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic11[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g11.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic11[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic12[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g12.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic12[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic16[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g16.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic16[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic17[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g17.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic17[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic18[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g18.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic18[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic19[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g19.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic19[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic20[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g20.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic20[i])); 
  }
}

for(var i=0;i<n;i++){
  if( site[i]!=0 && connected_to[i]!=0 && traffic21[i]!=0){
      //console.log("connections",site[i],connected_to[i],traffic[i])
      g21.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic21[i])); 
  }
}
//-----------------------------------------------------------------------
var dijkstra7 = new jsgraphs.Dijkstra(g7, s); //important-----------
var dijkstra8 = new jsgraphs.Dijkstra(g8, s); //important-----------
var dijkstra9 = new jsgraphs.Dijkstra(g9, s); //important-----------
var dijkstra10 = new jsgraphs.Dijkstra(g10, s); //important-----------
var dijkstra11 = new jsgraphs.Dijkstra(g11, s); //important-----------
var dijkstra12 = new jsgraphs.Dijkstra(g12, s); //important-----------
var dijkstra16 = new jsgraphs.Dijkstra(g16, s); //important-----------
var dijkstra17 = new jsgraphs.Dijkstra(g17, s); //important-----------
var dijkstra18 = new jsgraphs.Dijkstra(g18, s); //important-----------
var dijkstra19 = new jsgraphs.Dijkstra(g19, s); //important-----------
var dijkstra20 = new jsgraphs.Dijkstra(g20, s); //important-----------
var dijkstra21 = new jsgraphs.Dijkstra(g21, s); //important-----------
//-------------------add edges to flow graph------------------------
// for(var i=0;i<n;i++){
//   if( site[i]!=0 && connected_to[i]!=0 && traffic[i]!=0){
//      // console.log("connections",site[i],connected_to[i],traffic[i])
//       g2.addEdge(new jsgraphs.FlowEdge(site[i], connected_to[i],traffic[i])); 
//   }
// }
// var ff = new jsgraphs.FordFulkerson(g2, s, d);


//-------------------calculate min weight path------------------------

for(var v = 1; v < g7.V; ++v){
  if(dijkstra7.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra7.pathTo(v); //important-----------
      console.log('=====path from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route7.push(e.from())
          
      }
      console.log('=====path at 7am from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra7.distanceTo(v) + '=========');
      console.log('route',route7);
      route.push(route7)
      routeCost.push(dijkstra7.distanceTo(v))
      routeTime.push(7)
  }
}

for(var v = 1; v < g8.V; ++v){
  if(dijkstra8.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra8.pathTo(v); //important-----------
      console.log('=====path at 8am from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route8.push(e.from())
          
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra8.distanceTo(v) + '=========');
      console.log('route',route8);
      route.push(route8)
      routeCost.push(dijkstra8.distanceTo(v))
      routeTime.push(8)
  }
}

for(var v = 1; v < g9.V; ++v){
  if(dijkstra9.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra9.pathTo(v); //important-----------
      console.log('=====path at 9am from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route9.push(e.from())
          
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra9.distanceTo(v) + '=========');
      console.log('route',route9);
      route.push(route9)
      routeCost.push(dijkstra9.distanceTo(v))
      routeTime.push(9)
  }
}

for(var v = 1; v < g10.V; ++v){
  if(dijkstra10.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra10.pathTo(v); //important-----------
      console.log('=====path at 10am from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route10.push(e.from())
          
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra10.distanceTo(v) + '=========');
      console.log('route',route10);
      route.push(route10)
      routeCost.push(dijkstra10.distanceTo(v))
      routeTime.push(10)
  }
}

for(var v = 1; v < g11.V; ++v){
  if(dijkstra11.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra11.pathTo(v); //important-----------
      console.log('=====path at 11am from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route11.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra11.distanceTo(v) + '=========');
      console.log('route',route11);
      route.push(route11)
      routeCost.push(dijkstra11.distanceTo(v))
      routeTime.push(11)
  }
}

for(var v = 1; v < g12.V; ++v){
  if(dijkstra12.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra12.pathTo(v); //important-----------
      console.log('=====path at 12pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route12.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra12.distanceTo(v) + '=========');
      console.log('route',route12);
      route.push(route12)
      routeCost.push(dijkstra12.distanceTo(v))
      routeTime.push(12)
  }
}

for(var v = 1; v < g16.V; ++v){
  if(dijkstra16.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra16.pathTo(v); //important-----------
      console.log('=====path at 16pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route16.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra16.distanceTo(v) + '=========');
      console.log('route',route16);
      route.push(route16)
      routeCost.push(dijkstra16.distanceTo(v))
      routeTime.push(16)
  }
}

for(var v = 1; v < g17.V; ++v){
  if(dijkstra17.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra17.pathTo(v); //important-----------
      console.log('=====path at 17pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route17.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra17.distanceTo(v) + '=========');
      console.log('route',route17);
      route.push(route17)
      routeCost.push(dijkstra17.distanceTo(v))
      routeTime.push(17)
  }
}

for(var v = 1; v < g18.V; ++v){
  if(dijkstra18.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra18.pathTo(v); //important-----------
      console.log('=====path at 18pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route18.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra18.distanceTo(v) + '=========');
      console.log('route',route18);
      route.push(route18)
      routeCost.push(dijkstra18.distanceTo(v))
      routeTime.push(18)
  }
}

for(var v = 1; v < g19.V; ++v){
  if(dijkstra19.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra19.pathTo(v); //important-----------
      console.log('=====path at 19pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route19.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra19.distanceTo(v) + '=========');
      console.log('route',route19);
      route.push(route19)
      routeCost.push(dijkstra19.distanceTo(v))
      routeTime.push(19)
  }
}

for(var v = 1; v < g20.V; ++v){
  if(dijkstra20.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra20.pathTo(v); //important-----------
      console.log('=====path at 20pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route20.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra20.distanceTo(v) + '=========');
      console.log('route',route20);
      route.push(route20)
      routeCost.push(dijkstra20.distanceTo(v))
      routeTime.push(20)
  }
}

for(var v = 1; v < g21.V; ++v){
  if(dijkstra21.hasPathTo(v) && v==d){ // for only one destination d
      var path = dijkstra21.pathTo(v); //important-----------
      console.log('=====path at 21pm from '+ s +' to ' + d + ' start==========');
      for(var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
          route21.push(e.from())
          
      }
      console.log('=====path from '+ s +' to ' + d + ' end==========');
      console.log('=====distance: '  + dijkstra21.distanceTo(v) + '=========');
      console.log('route',route21);
      route.push(route21)
      routeCost.push(dijkstra21.distanceTo(v))
      routeTime.push(21)
  }
}

//-------------------calculate max flow path------------------------
//console.log('max-flow: ' + ff.value);

//-------------------calculate path exits------------------------
   
console.log(route,routeCost)
res.writeHead(200, {
      "Content-Type": "application/json"
    });
    
    console.log("final",JSON.stringify(route));
    res.end(JSON.stringify({time:routeTime,route:route,cost:routeCost}));
    route=[]
    routeCost=[]
    routeTime=[]
})

app.listen(port);
console.log("Server running on "+ port);