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
- [x] 4.设计data与UI交互逻辑
  - [x] 匹配对应位置问题
  - [x] 数据与表格的绑定
    - [x] class=“on” - 表示被选中
    - [x] 可不断刷新和寻找来完成绑定

考察：是否需要使用天然绑定了数据和视图的第三方库。

- [x] [layui](https://www.layui.com/) 不够流行
- [x] vue 数据绑定方便

最终考虑到自己的对这些框架的不了解，遂放弃。

- [x] 5.继续设计data与UI交互
  - [x] 已经陷入js的变量作用于，模块作用域的泥沼野兽中。（网络上缺乏此方面的基础资料）
  - [x] 最终确定了fresh手动刷新的交互方式
- [x] 6.拆分文件到不同位置
  - [x] js-module学习
  - [x] 添加新的功能（有了框架之后添加新功能就方便很多了）
    - [x] 存储&读取
    - [x] Question:按钮润色不一致 (后续通过更加详细规划完成)
    - [x] 基于按钮在末尾add&remove功能+save功能
- [x] 发布第一个版本v1.0
  - [x] 写readme+发布
  
  - [x] 交给sheryl试用
  
  - [x] 挂上服务器 http://49.233.132.28/访问
  
    - [x] 先夺回自己闲置的腾讯云服务器
      - [x] 找回了服务器密码
      - [x] 了解了mac上如何登陆win服务器
      - [x] 服务器自己翻墙能力比较差（网速也是比较差，所本地可以打开，服务器上反而不可）
      - [x] 手机上打开
        - [x] 显示良好（当然可以更好）
        - [ ] 手机上的双击被缩放所替代
      - [ ] 重新构建基于FTP的服务器挂载模式
  
  - [ ] 于知乎进行一些宣传
  
  - [x] 导出不使用文件逻辑，转而用字符串负责导出和接入（明文传递）(放弃自动录入粘贴板-繁杂且非核心)
  
  - [ ] 一些美化
  
    - [x] 进行了居中
  
    - [x] 宽度滑块（花里胡哨，后放弃）
  
    - [x] Idea：现阶段美化的问题
  
      - [ ] 比例不协调
  
      - [ ] 最好通过侧边栏来设置功能
  
      - [ ] 考虑增加快捷键来便于操作，侧边栏只放置快捷键按钮
  
      - [ ] 将宽度加入可以更改的数据部分。所有修改对数据进行。
  

## 阶段目标3：侧边栏、可拖拽

- [x] github-pages（需要开启）不止可以提供.md转html的服务，也可以直接提供更底层的静态网站。（这就替代了绝大多数简单服务器能提供的/再转一个域名岂不是可以直接为小网站提供全部访问需求？）
- [x] 手疼/需要不断休息，进行一些硬编码（至少是硬打字写文档工作时容易如此）
- [ ] aim-high：下一个版本实现把按钮加入快捷键或者侧边栏！/可以输出一个基于文本的输出工具！？另外的主要心思放在推广上

评价：国内的github水平的确不大行（？），很多个人在撰写github文档上不够给力。当然可能这些人也就是完成一下作业顺便把作业内容放在GitHub上一些，并不能过于指望。

- [ ] 查询右侧导航栏实现技术
  - [x] 自己使用visible和hover等实现（并不好看，但是也先将就着用一用）
  - [ ] h&v看似时髦，其实不需要，改为使用按钮点击，并向左方弹出
  - [ ] 导航栏内如何布局，值得考虑
  - [ ] 工具+信息真的是越看越多的。

- [x] 使用了一个来自网络的片段来添加列拖动调节宽度

## 阶段目标4：使用了bmob托管数据库建立了账号系统

- [x] 发现了这个好用工具（先猜测有这种工具，后来发现果然有，那我这种小项目，还配个屁的数据库呀～～～啦啦啦）
- [x] 用之建立了一个net存储系统（但是登陆不是强制的）（实际上，我做的不是登陆，而是根据蜜语取得信息）
- [ ] task：
  - [ ] 重新梳理整个架构、简化重复代码部分（底层逻辑重用）
  - [x] 学习bootbox构建更加合理的异常处理机制（阅读仔细点）（bootbox官网就很值得我学习）
  - [ ] 炫酷的侧边效果（console）
  - [ ] 又设置暗语又设置啥的，本质上还不如直接拉一个用户呢，只记录用户一个数据就好了。
  - [x] html 对象导出图片(一下子依赖了两个小js？这么多依赖不大好的样子。)
  - [x] 果然是api斗士，一个截图，没有api便做不了了。（或者说做起来就玉无限的问题了）
- [x] 投靠大项目：（大项目是完善的，多方面的，能为你的生产赋能的）
  - [x] 再次系统阅读bootstrap官网(很多有价值的工具)
  - [ ] 学习ydoc
    - [ ] 学习npm文件管理体系（包管理体系）

## 阶段目标5：使用vue重写逻辑

vue显然更加擅长数据双向绑定，先部分将体系改为基于vue。

- [x] 挂载vue
- [x] 逐步取消jq
  - [x] 数据同步取消jq
  - [x] 点击修改可见性质取消jq（二维数组传播问题.push强制观察）
  - [x] 颜色挂载取消jq

- [x] vue多文档模式，只要最终挂载上了，就直接从挂载的内容中查值

- [x] 继续阅读vue文档，暂缓考虑其他(基于web的文档有颜色，更简明，实在优秀)（pdf模式的最大好处就是提供了一些废话，一些demo）（一个感慨，文档阅读到一定程度后，就需要一定演练，才可以继续消化更多内容）

//question：对于js的模块体系不够熟悉