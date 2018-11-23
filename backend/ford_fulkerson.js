var fordFulkerson = require("graph-theory-ford-fulkerson");  //maximum flow possible through a graph
 
// var graph09_10 = [
//     [ 0, 16,  13, 0,  0,  0 ],
//     [ 0,  0, 10, 12,  0,  0 ],
//     [ 0,  4,  0,  0, 14,  0 ],
//     [ 0,  0,  9,  0,  0, 20 ],
//     [ 0,  0,  0,  7,  0,  4 ],
//     [ 0,  0,  0,  0,  0,  0 ]
// ];

var graph09_10 = [
    [ 0, 5,  9, 0,  0,  0 ],
    [ 0,  0, 0, 4,  0,  0 ],
    [ 0,  0,  0,  8, 3,  2 ],
    [ 0,  0,  0,  0,  1, 3 ],
    [ 0,  0,  0,  0,  0,  9 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph10_11 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph11_12 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph12_13 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph13_14 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph14_15 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph15_16 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph16_17 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph17_18 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph18_19 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph19_20 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph20_21 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph21_22 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var graph22_23 = [
    [ 0, 16,  13, 0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
];

var i=0,j=0,n;
var graphX_Y=[n][n]

for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        graphx_y[i][j] = 0;
    }
}



 
console.log("The maximum possible flow between 09:00 to 10:00 is " + fordFulkerson(graph09_10, 0, 5));

console.log("The maximum possible flow between 10:00 to 11:00 is " + fordFulkerson(graph10_11, 0, 5)); 

console.log("The maximum possible flow between 11:00 to 12:00 is " + fordFulkerson(graph11_12, 0, 5)); 

console.log("The maximum possible flow between 12:00 to 13:00 is " + fordFulkerson(graph12_13, 0, 5)); 

console.log("The maximum possible flow between 13:00 to 14:00 is " + fordFulkerson(graph13_14, 0, 5)); 

console.log("The maximum possible flow between 14:00 to 15:00 is " + fordFulkerson(graph14_15, 0, 5)); 

console.log("The maximum possible flow between 15:00 to 16:00 is " + fordFulkerson(graph15_16, 0, 5)); 

console.log("The maximum possible flow between 16:00 to 17:00 is " + fordFulkerson(graph16_17, 0, 5)); 

console.log("The maximum possible flow between 17:00 to 18:00 is " + fordFulkerson(graph17_18, 0, 5)); 

console.log("The maximum possible flow between 18:00 to 19:00 is " + fordFulkerson(graph18_19, 0, 5)); 

console.log("The maximum possible flow between 19:00 to 20:00 is " + fordFulkerson(graph19_20, 0, 5)); 

console.log("The maximum possible flow between 20:00 to 21:00 is " + fordFulkerson(graph20_21, 0, 5)); 

console.log("The maximum possible flow between 21:00 to 22:00 is " + fordFulkerson(graph21_22, 0, 5)); 

console.log("The maximum possible flow between 22:00 to 23:00 is " + fordFulkerson(graph22_23, 0, 5)); 