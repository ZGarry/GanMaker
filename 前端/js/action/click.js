// 导入颜色配置
import {td_default_color,color_table} from "../conf/color.js"
// 导入数据配置
import {data} from "../data/data.js"
// 导入刷新函数
import {fresh} from "./fresh.js"
import {save,_export,_import} from "./ls.js"

$(document).on("dblclick", "[scope=col]", function() {
	var i = $(this).index() - 1;
	if (i == -1) {
		return
	}
	bootbox.prompt("输入修改后的名称", function(result) {
		data.cols[i] = result;
		fresh();
	});
});

$(document).on("dblclick", "[scope=row]", function() {
	var i = $(this).parent().index();
	bootbox.prompt("输入修改后的名称", function(result) {
		data.rows[i] = result;
		fresh();
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
	data.width="400px";
	fresh()
});

function scale(c){
	data.width=data.width.split("px")[0]*c+"px"
	// console.log(data);
	fresh()
}

$(document).on("click", "#clear", function() {
	localStorage.clear();
	location.reload();
});

export var unuse=null;