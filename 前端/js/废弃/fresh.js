// 导入颜色配置
import {
	td_default_color,
	color_table
} from "../conf/color.js"
// 导入数据配置
import {
	data
} from "../data/data.js"
import {
	add_drag
} from "./drag.js"
export function fresh() {
	//根据宽度数据刷新视图
	$("#content").css("width", data.width);

	$("#table").empty();

	$("#table").append(`
	<thead><tr><th scope="col">#</th></tr></thead>
	<tbody></tbody>
	`);

	fresh_head()
	fresh_body()
	fresh_color()
	add_drag("table")
}

function fresh_head() {
	for (var col of data.cols) {
		var th_str = `<th scope="col">${col}</th>`;
		$("#table thead tr").append(th_str);
	}
}

function fresh_body() {
	for (var i = 0; i < data.rows.length; i++) {
		var th_str = `<th scope="row">${data.rows[i]}</th>`;
		var tds_str = "";
		for (var j = 0; j < data.cols.length; j++) {
			tds_str += `<td class='${data.array[i][j]==1?"on":"off"}'></td>`;
		}
		var tr_str = `<tr>
				${th_str}
				${tds_str}
				</tr>`;
		$("#table tbody").append(tr_str);
	}
}

function fresh_color() {
	var obj = $(".on").get();
	for (var _this of obj) {
		var i = $(_this).parent().index();
		var _color = $(_this).css("background-color");
		$(_this).css("background-color", _color == td_default_color ? color_table[i] : td_default_color);
	}

}
