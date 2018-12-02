var jsgraphs = require('js-graph-algorithms');
var arr = require('./array.js');
var weight = arr.weight;
var site = arr.site;
var connected_to = arr.connected_to;
var traffic = arr.traffic7;
var n = site.length
var g = new jsgraphs.FlowNetwork(n);

for(var i=0;i<n;i++){
    if( site[i]!=0 && connected_to[i]!=0 && traffic[i]!=0){
       // console.log("connections",site[i],connected_to[i],traffic[i])
        g.addEdge(new jsgraphs.FlowEdge(site[i], connected_to[i],traffic[i])); 
    }
}

// g.addEdge(new jsgraphs.FlowEdge(0, 1, 10));
// g.addEdge(new jsgraphs.FlowEdge(0, 2, 5));
// g.addEdge(new jsgraphs.FlowEdge(0, 3, 15));
// g.addEdge(new jsgraphs.FlowEdge(1, 4, 9));
// g.addEdge(new jsgraphs.FlowEdge(1, 5, 15));
// g.addEdge(new jsgraphs.FlowEdge(1, 2, 4));
// g.addEdge(new jsgraphs.FlowEdge(2, 5, 8));
// g.addEdge(new jsgraphs.FlowEdge(2, 3, 4));
// g.addEdge(new jsgraphs.FlowEdge(3, 6, 16));
// g.addEdge(new jsgraphs.FlowEdge(4, 5, 15));
// g.addEdge(new jsgraphs.FlowEdge(4, 7, 10));
// g.addEdge(new jsgraphs.FlowEdge(5, 7, 10));
// g.addEdge(new jsgraphs.FlowEdge(5, 6, 15));
// g.addEdge(new jsgraphs.FlowEdge(6, 2, 6));
// g.addEdge(new jsgraphs.FlowEdge(6, 7, 10)); 
 
// g.node(2).label = 'Hello';
// g.edge(0, 1).label = 'World';
 
var source = 1;
var target = 14;
var ff = new jsgraphs.FordFulkerson(g, source, target);
console.log('max-flow: ' + ff.value);
 
var minCut = ff.minCut(g);
 
for(var i = 0; i < minCut.length; ++i) {
    var e = minCut[i];
    console.log('min-cut: (' + e.from() + ", " + e.to() + ')');
}