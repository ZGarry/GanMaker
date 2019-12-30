# 工作日志

#等到GanMaker完成后，就可以使用其本身来制作此日志

## 阶段目标1：一个简单demo

- [x] 1.了解Bootstrap在制作表格上的使用。
- [x] 2.制作一个靠点击改变颜色表格。
- [x] 3.配色系统使用：[普通人的网页配色方案](http://www.ruanyifeng.com/blog/2019/03/coloring-scheme.html)中提到的flatUI。
- [x] 4.每行采用一个颜色。顺序采用。
- [x] Extra.改hover时改变颜色为改变大小，避免影响颜色判断逻辑

## 阶段目标2：配置化读取文件

|              | js-readfile-读取存储数据                          | js-storage                                                   |
| ------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| advantage    | 用户自由选择，存储与传递方便                      | 无需额外点击                                                 |
| disadvantage | 需要用户进行额外点击                              | 传递不方便（可通过导出解决）                                 |
| 参考         | https://www.cnblogs.com/streamwang/p/8056301.html | https://blog.csdn.net/chandddlleerr/article/details/71774238 |

- [x] 1.了解js-readfile方法
  - [x] 使用input获取文件句柄
  - [x] js进行读取&其他操作
- [x] 2.了解js-storage
  - [x] 本地存储，临时存储
- [x] 3.设计data
  - [x] 了解js-列表
  - [x] 循环创建列表
- [ ] 4.设计data与UI交互逻辑
  - [x] 匹配对应位置问题
  - [ ] 数据与表格的绑定
    - [x] class=“on” - 表示被选中
    - [ ] wait-for-more
  - [ ] 

考察：是否需要使用天然绑定了数据和视图的第三方库。

- [ ] [layui](https://www.layui.com/)