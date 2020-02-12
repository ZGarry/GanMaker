// 导入数据配置
import {
	data
} from "../data/data.js"
import {
	fresh
} from "./fresh.js"

export function load() {
	var r = JSON.parse(localStorage.getItem("mys"));
	data.width = r.width;
	data.array = r.array;
	data.cols = r.cols;
	data.rows = r.rows;
	fresh();
}

export function save() {
	localStorage.setItem("mys", JSON.stringify(data));
	alert("已成功保存")
}

function autosave() {
	localStorage.setItem("mys", JSON.stringify(data));
	alert("已自动保存")
}

export function _export() {
	bootbox.alert({
		size: "small",
		title: "请复制下列信息到粘贴板",
		message: JSON.stringify(data),
	});
}

export function _import() {
	bootbox.prompt("请输入复制的数据文件", function(result) {
		try {
			if (result == null) {
				return
			}
			var r = JSON.parse(result);
			data.width = r.width;
			data.array = r.array;
			data.cols = r.cols;
			data.rows = r.rows;
			fresh();
		} catch (e) {
			bootbox.alert("输入有误,请确保进行了正确的复制");
		}

	});
}

//每半分钟自动保存一次
// setInterval(autosave, 100000)
