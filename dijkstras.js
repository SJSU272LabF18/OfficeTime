const Graph = require('node-dijkstra')
 
const route = new Graph()
 
route.addNode('A', { B:1 })
route.addNode('B', { A:1, C:2, D: 4, E: 2 })
route.addNode('C', { B:2, D:1 })
route.addNode('D', { C:5, B:4 })
route.addNode('E', { D:4, B:2 })
 
console.log(route.path('A', 'E',{ cost: true })) // => [ 'A', 'B', 'C', 'D' ]