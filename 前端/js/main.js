// // 导入初始化函数
// if (localStorage.getItem("mys") != null) {
// 	load()
// }

var vue = new Vue({
	el: "#content",
	data: {
		"width": "400px",
		"cols": ["3.1-3.7", "3.8-3.9", "3.9-3.10"],
		"rows": ["采购", "分发", "核查"],
		"array": [
			[1, 0, 1],
			[1, 1, 1],
			[0, 0, 1]
		],
		colors: [
			"rgb(26, 188, 156)", "rgb(46, 204, 113)", "rgb(52, 152, 219)", "rgb(155, 89, 182)", "rgb(52, 73, 94)",
			"rgb(241, 196, 15)", "rgb(230, 126, 34)", "rgb(231, 76, 60)", "rgb(236, 240, 241)", "rgb(149, 165, 166)",
		],


	},
})

$("#hook").mouseenter(function() {
	$("#side").css("visibility", "visible")
});

$("#side").mouseleave(function() {
	$("#side").css("visibility", "hidden")
});
