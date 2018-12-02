var jsgraphs = require('js-graph-algorithms');
var arr = require('./array.js');

//var weight = [[0,5.0,0,0,9.0,0,0,8.0]]
var weight = arr.weight;
var site = arr.site;
var connected_to = arr.connected_to;
var traffic = arr.traffic7;
var n = site.length
var g = new jsgraphs.Graph(n);

// g.addEdge(0, 5);
// g.addEdge(2, 4);
// g.addEdge(2, 3);
// g.addEdge(1, 2);
// g.addEdge(0, 1);
// g.addEdge(3, 4);
// g.addEdge(3, 5);
// g.addEdge(0, 2);

console.log(site.length)

for(var i=0;i<n;i++){
        if( site[i]!=0 && connected_to[i]!=0 && traffic[i]!=0){
            console.log("connections",site[i],connected_to[i],traffic[i])
            //g.addEdge(new jsgraphs.Edge(site[i], connected_to[i],traffic[i])); 
            g.addEdge(site[i], connected_to[i]);
        }
    }
var s = 1;
var bfs = new jsgraphs.BreadthFirstSearch(g, s); //important-------
 
 
for(var v=s; v < g.V; ++v) {
 if(bfs.hasPathTo(v)) {
    console.log(s + " is connected to " + v);
    console.log("path: " + bfs.pathTo(v)); //important---------
 } else {
     console.log('No path from ' + s + ' to ' + v);
 }
} 