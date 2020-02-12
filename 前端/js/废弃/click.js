// 导入颜色配置
import {
	td_default_color,
	color_table
} from "../conf/color.js"
// 导入数据配置
import {
	data
} from "../data/data.js"
// 导入刷新函数
import {
	fresh
} from "./fresh.js"
import {
	save,
	_export,
	_import
} from "./ls.js"

$(document).on("dblclick", "[scope=col]", function() {
	var i = $(this).index() - 1;
	if (i == -1) {
		return
	}
	bootbox.prompt("输入修改后的名称", function(result) {
		if (result != "" && result != null) {
			data.cols[i] = result;
			fresh();
		}
	});
});

$(document).on("dblclick", "[scope=row]", function() {
	var i = $(this).parent().index();
	bootbox.prompt("输入修改后的名称", function(result) {
		if (result != "" && result != null) {
			data.rows[i] = result;
			fresh();
		}
	});
});

$(document).on("click", "td", function() {
	var i = $(this).parent().index();
	var j = $(this).index() - 1;
	data.array[i][j] = data.array[i][j] == 1 ? 0 : 1;
	// console.log(data.array);
	fresh();
});

$(document).on("click", "#addrow", function() {
	data.rows.push("#双击修改");
	data.array.push(Array(data.cols.length).fill(0));
	fresh();
});
$(document).on("click", "#removerow", function() {
	data.rows.pop();
	data.array.pop();
	fresh();
});

$(document).on("click", "#addcol", function() {
	data.cols.push("#双击修改");
	data.array.forEach(x => x.push(0));
	fresh();
});
$(document).on("click", "#removecol", function() {
	data.cols.pop();
	data.array.forEach(x => x.pop(0));
	fresh();
});

$(document).on("click", "#save", function() {
	save()
});
$(document).on("click", "#export", function() {
	_export()
});
$(document).on("click", "#import", function() {
	_import()
});

$(document).on("click", "#sizebig", function() {
	scale(1.1);
});

$(document).on("click", "#sizesmall", function() {
	scale(0.9);
});

$(document).on("click", "#recover", function() {
	data.width = "400px";
	fresh()
});

function scale(c) {
	data.width = data.width.split("px")[0] * c + "px"
	// console.log(data);
	fresh()
}

$(document).on("click", "#clear", function() {
	localStorage.clear();
	location.reload();
});

$(document).on("click", "#loadimg", function() {
	html2canvas(document.querySelector("#content")).then(function(canvas) {
		var base64 = canvas.toDataURL();
		var link = document.createElement('a');
		link.textContent = 'download image';
		link.href = base64;
		link.download = "img.jpeg";
		link.click()
	});
});

//参考bootbox,在外层的js对象可以在内层继续使用
Bmob.initialize("0cbb426122c3c827", "194278");
var query = Bmob.Query('this');
var li = [{
		text: '一月',
		value: '1',
	},
	{
		text: '二月',
		value: '2',
	},
	{
		text: '三月',
		value: '3',
	},
	{
		text: '四月',
		value: '4',
	},
	{
		text: '五月',
		value: '5',
	},
	{
		text: '六月',
		value: '6',
	},
	{
		text: '七月',
		value: '7',
	},
	{
		text: '八月',
		value: '8',
	},
	{
		text: '九月',
		value: '9',
	},
	{
		text: '十月',
		value: '10',
	},
	{
		text: '十一月',
		value: '11',
	},
	{
		text: '十二月',
		value: '12',
	},

]


$(document).on("click", "#upload", function() {
	bootbox.prompt("输入一个暗语以方便下次提取信息", function(code) {
		bootbox.prompt({
			title: "选择你的真实生日月份(用于信息加密)",
			inputType: 'select',
			inputOptions: li,
			callback: function(track) {
				//set没有修改外部query
				query.set("code", code)
				query.set("track", track)
				query.set("data", JSON.stringify(data))
				query.save().then(res => {
					console.log("数据已经成功上传到云端")
				}).catch(err => {
					console.log("上传失败")
				})
			}
		});
	});
});
$(document).on("click", "#download", function() {
	bootbox.prompt("输入一个暗语以方便下次提取信息", function(code) {
		bootbox.prompt({
			title: "选择你的真实生日月份(用于信息加密)",
			inputType: 'select',
			inputOptions: li,
			callback: function(track) {
				query.equalTo("code", "==", code);
				query.equalTo("track", "==", track);
				query.find().then(res => {
					// console.log(res[0].data)
					var r = JSON.parse(res[0].data);
					// console.log(r)
					data.width = r.width;
					data.array = r.array;
					data.cols = r.cols;
					data.rows = r.rows;
					fresh();
				})
			}
		});
	});
});

export var unuse = null;
