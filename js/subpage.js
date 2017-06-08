mui.init();
var slider = mui("#slider");
slider.slider({
	interval: 2000
});



mui('#tabContainers').on('tap', '.mui-table-view-cell', function(e) {
	mui.openWindow({
		url:'order-to-be-confirm.html',
		id:'order-to-be-confirm',
		styles:{},
		extras:{}
	})
});

var glist='game-list.html';

mui('#gameList1').on('tap','a',function  () {
	mui.openWindow({
		url:'game-list.html',
		id:this.href
	});
})

mui('#gameHotList1').on('tap','dl',function  () {
	mui.openWindow({
		url:'game-list.html',
		id:this.href
	});
})
