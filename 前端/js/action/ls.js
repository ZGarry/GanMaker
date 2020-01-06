// 导入数据配置
import {
	data
} from "../data/data.js"
import {
	fresh
} from "./fresh.js"

export function load() {
	var r = JSON.parse(localStorage.getItem("mys"));
	data.array = r.array;
	data.cols = r.cols;
	data.rows = r.rows;
	fresh();
}

export function save() {
	localStorage.setItem("mys", JSON.stringify(data));
	alert("已成功保存")
}
