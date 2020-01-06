import {fresh} from "./action/fresh.js"
import {load} from "./action/ls.js"
import {data} from "./data/data.js"
import {unuse} from "./action/click.js"
// 导入初始化函数
if (localStorage.getItem("mys") != null){
	load()
}
fresh()

