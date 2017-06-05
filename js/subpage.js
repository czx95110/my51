mui.init();
var slider = mui("#slider");
slider.slider({
	interval: 2000
});

var item = document.querySelectorAll('#tabItems a');
var container = document.querySelectorAll('#tabContainers>div');

function changeTabs(item, container) {
	
}

mui('#tabContainers').on('tap', '.mui-table-view-cell', function(e) {
	mui.openWindow({
		url:'order-to-be-confirm.html',
		id:'order-to-be-confirm',
		styles:{},
		extras:{}
	})
});