var ALL_LEVELS = [

	[
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,1,0,0,0,0,0,0,0,0,1,0,],
	    [0,0,0,0,1,0,0,1,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,1,0,0,1,0,0,0,0,],
	    [0,1,0,0,0,0,0,0,0,0,1,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,]
	],
	[
	    [2,0,0,0,3,0,0,3,0,0,0,2,],
	    [0,2,2,0,0,0,0,0,0,2,2,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,2,2,0,0,0,0,0,0,2,2,0,],
	    [2,0,0,0,0,0,0,0,0,0,0,2,]
	],
	[
	    [0,0,0,0,2,0,0,2,0,0,0,0,],
	    [0,3,0,0,2,0,0,2,0,0,3,0,],
	    [0,0,0,0,2,0,0,2,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,2,0,0,2,0,0,0,0,],
	    [0,3,0,0,2,0,0,2,0,0,3,0,],
	    [0,0,0,0,2,0,0,2,0,0,0,0,]
	],
	[
	    [3,0,0,0,0,0,0,0,0,0,0,0,3],
	    [0,0,0,0,2,2,2,2,2,0,0,0,0],
	    [2,2,0,0,0,0,0,0,0,0,0,2,2],
	    [0,0,0,0,0,0,0,0,0,0,0,0,0],
	    [2,2,0,0,0,0,0,0,0,0,0,2,2],
	    [0,0,0,0,2,2,2,2,2,0,0,0,0],
	    [3,0,0,0,0,0,0,0,0,0,0,0,3]
	],
	[
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,],
	    [0,0,0,0,0,0,0,0,0,0,0,0,]
	]
];
function getRandomLevel(){
	var id = 3;//Math.floor(Math.random() * ALL_LEVELS.length);
	//console.log('getRandomLevel id', id);
	return ALL_LEVELS[id];
}