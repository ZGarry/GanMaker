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

// 这个代码我并没有加以研究
// https://www.awaimai.com/1615.html
export function add_drag(id) {
	var i,
		self,
		table = document.getElementById(id),
		header = table.rows[0],
		tableX = header.clientWidth,
		length = header.cells.length;

	for (i = 0; i < length; i++) {
		header.cells[i].onmousedown = function() {
			self = this;
			if (event.offsetX > self.offsetWidth - 10) {
				self.mouseDown = true;
				self.oldX = event.x;
				self.oldWidth = self.offsetWidth;
			}
		};
		header.cells[i].onmousemove = function() {
			if (event.offsetX > this.offsetWidth - 10) {
				this.style.cursor = 'col-resize';
			} else {
				this.style.cursor = 'default';
			}
			if (self == undefined) {
				self = this;
			}
			if (self.mouseDown != null && self.mouseDown == true) {
				self.style.cursor = 'default';
				if (self.oldWidth + (event.x - self.oldX) > 0) {
					self.width = self.oldWidth + (event.x - self.oldX);
				}
				self.style.width = self.width;
				table.style.width = tableX + (event.x - self.oldX) + 'px';
				self.style.cursor = 'col-resize';
			}
		};
		table.onmouseup = function() {
			if (self == undefined) {
				self = this;
			}
			self.mouseDown = false;
			self.style.cursor = 'default';
			tableX = header.clientWidth;
		};
	}
};
