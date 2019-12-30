//默认色:白色
dcolor = "rgb(255, 255, 255)"
// 具体颜色请参考: https://flatuicolors.com/palette/defo
colors = [
	"rgb(26, 188, 156)", "rgb(46, 204, 113)", "rgb(52, 152, 219)", "rgb(155, 89, 182)", "rgb(52, 73, 94)",
	"rgb(241, 196, 15)", "rgb(230, 126, 34)", "rgb(231, 76, 60)", "rgb(236, 240, 241)", "rgb(149, 165, 166)",
]

//数据(行列均有扩展性)
var cols = ["3.1-3.7", "3.8-3.9", "3.9-3.10"]
var rows = ["采购", "分发", "核查"]
var data = []
for (i = 0; i < rows.length; i++) {
	row=[]
	for (j = 0; j < cols.length; j++) {
		row[j]=0;
	}
	data[i]=row;
}

//添加列名
function add_col_name(mes){
	th_str=`<th scope="col">${mes}</th>`;
	$("#table thead tr").append(th_str);
}
cols.forEach(add_col_name);

//添加一行
function add_row(mes){
	th_str=`<th scope="row">${mes}</th>`;
	td_str="<td class='on'></td>";
	tr_str=`<tr>
			${th_str}
			${td_str.repeat(cols.length)}
			</tr>`;
	
	$("#table tbody").append(tr_str);
}
rows.forEach(add_row);


//我们有理由认为代码是顺序执行的
$(document).ready(function() {
	// console.log("hello")
	$("td").click(function() {
		i = $(this).parent().index();

		_color = $(this).css("background-color");
		$(this).css("background-color", _color == dcolor ? colors[i] : dcolor);
	});
	$(".on").click();
});
