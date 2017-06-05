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