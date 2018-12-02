var jsgraphs = require('js-graph-algorithms');
var arr = require('./array.js');

//var weight = [[0,5.0,0,0,9.0,0,0,8.0]]
var weight = arr.weight;
var site = arr.site;
var connected_to = arr.connected_to;
var traffic = arr.traffic7;
var n = site.length
var g = new jsgraphs.WeightedDiGraph(n);
var s = 1; //source
var d = 14 // destination

              
console.log(site.length)


for(var i=0;i<n;i++){
        if( site[i]!=0 && connected_to[i]!=0 && traffic[i]!=0){
            //console.log("connections",site[i],connected_to[i],traffic[i])
            g.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic[i])); 
        }
    }
 
var dijkstra = new jsgraphs.Dijkstra(g, s); //important-----------

for(var v = 1; v < g.V; ++v){
    if(dijkstra.hasPathTo(v) && v==d){ // for only one destination d
        var path = dijkstra.pathTo(v); //important-----------
        console.log('=====path from 1 to ' + v + ' start==========');
        for(var i = 0; i < path.length; ++i) {
            var e = path[i];
            console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
        }
        console.log('=====path from 1 to ' + v + ' end==========');
        console.log('=====distance: '  + dijkstra.distanceTo(v) + '=========');
    }
}

// for(var i=0;i<1;i++){
//     for(var j=0;j<7;j++){
//         if(weight[i][j]!=0){
//             g.addEdge(new jsgraphs.Edge(i, j,weight[i][j])); 
//         }
//     }
    
// }
// g.addEdge(new jsgraphs.Edge(0, 1,weight[0][1]));
// g.addEdge(new jsgraphs.Edge(0, 4, 9.0));
// g.addEdge(new jsgraphs.Edge(0, 7, 8.0));
// g.addEdge(new jsgraphs.Edge(1, 2, 12.0));
// g.addEdge(new jsgraphs.Edge(1, 3, 15.0));
// g.addEdge(new jsgraphs.Edge(1, 7, 4.0));
// g.addEdge(new jsgraphs.Edge(2, 3, 3.0));
// g.addEdge(new jsgraphs.Edge(2, 6, 11.0));
// g.addEdge(new jsgraphs.Edge(3, 6, 9.0));
// g.addEdge(new jsgraphs.Edge(4, 5, 5.0));
// g.addEdge(new jsgraphs.Edge(4, 6, 20.0));
// g.addEdge(new jsgraphs.Edge(4, 7, 5.0));
// g.addEdge(new jsgraphs.Edge(5, 2, 1.0));
// g.addEdge(new jsgraphs.Edge(5, 6, 13.0));
// g.addEdge(new jsgraphs.Edge(7, 5, 6.0));
// g.addEdge(new jsgraphs.Edge(7, 2, 7.0));  

// var dijkstra1 = new jsgraphs.Dijkstra(g, 0);
// var v1=7 //destination
// if(dijkstra.hasPathTo(v1)){
//     var path = dijkstra.pathTo(v1);
//     console.log('=====path from 0 to ' + v1 + ' start==========');
//     for(var i = 0; i < path.length; ++i) {
//         var e = path[i];
//         console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
//     }
//     console.log('=====path from 0 to ' + v1 + ' end==========');
//     console.log('=====distance: '  + dijkstra.distanceTo(v1) + '=========');
// }
 
