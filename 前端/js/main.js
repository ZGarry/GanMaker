import {
	fresh
} from "./action/fresh.js"
import {
	load
} from "./action/ls.js"
import {
	data
} from "./data/data.js"
import {
	unuse
} from "./action/click.js"
import {
	add_drag
} from "./action/drag.js"
// 导入初始化函数
if (localStorage.getItem("mys") != null) {
	load()
}
fresh()
add_drag("table")
$("#hook").mouseenter(function() {
	$("#side").css("visibility", "visible")
});

$("#side").mouseleave(function() {
	$("#side").css("visibility", "hidden")
});
