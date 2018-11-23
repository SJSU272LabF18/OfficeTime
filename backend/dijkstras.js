const Graph = require('node-dijkstra') //shortest/least cost path
 
const route = new Graph()
 
route.addNode('A', { B:5, C:9 })
route.addNode('B', { D: 4})
route.addNode('C', { D:8, E:3, F:2 })
route.addNode('D', { E:1, F:3 })
route.addNode('E', { F:9})
 
console.log(route.path('A', 'F',{ cost: true })) // => [ 'A', 'B', 'C', 'D' ]