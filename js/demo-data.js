var games=[
	{
		gameId:10000,
		gameName:'英雄联盟',
		gameSection:[
		{	sectionId:20000,
			sectionName:"电信1区",
			server:['ABC服','DEF服']
		},
		{ 
			sectionId:20001,
			sectionName:"电信2区",
			server:['ABC服','DEF服']
		},
		{
			sectionId:20002,
			sectionName:"电信3区",
			server:['ABC服','DEF服']
		}],
	},
	
	
	
	{
		gameId:10001,
		gameName:'游戏2',
		gameSection:['电信21'],
	},
	{
		gameId:10002,
		gameName:'游戏3',
		gameSection:['电信31'],
	},
	
	
	
	{
		gameId:10003,
		gameName:'游戏4',
		gameSection:['电信41'],
	}
];
var str='天地玄黄宇宙洪荒赵钱孙李周吴郑王';
function randomNum (min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

function gameSectionInsert (gid,s) {
		s.sectionId = gid + 10000;
	for (var i=0;i<5;i++) {
		s.sectionName='电信'+i+'区';
	}
}
function gameServerInsert (s) {
	
}

for (var i = 0; i < games.length; i++) {
	console.log(games[i].gameSection);
	console.log(games[i].gameSection.length);
	console.log(games[i].gameId);
	for (var j=0;j<games[i].gameSection.length;j++) {
		gameSectionInsert(games[i].gameId,games[i].gameSection[j]);		
	}
	
}


		console.log(games);		
