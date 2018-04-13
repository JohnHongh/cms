xhEditor 变更日志
=======================

ver 1.2.2 (2015-4-26)
-----------------------

添加：

1. 添加：添加对jquery 1系列所有版本的兼容，内置$.browser，对以下3个版本进行了测试：1.8.0, 1.9.0, 1.11.2

修正：

1. 修正：修复不兼容IE11的问题

ver 1.2.1 (2013-2-24)
-----------------------

添加：

1. 添加：增加以下三个初始化参数，用以分别定义段落标签、颜色列表、字体大小：listBlocktag、listColors、listFontsize
2. 添加：添加grunt构建支持，为开放式的代码贡献打下基础
3. 添加：语言包独立，极大方便今后的开发，同时方便拓展海外市场
4. 添加：插件添加i参数，作为插件初始化函数，编辑器初始化时，同时会调用此函数
5. 添加：添加Markdown可视化编辑支持，请查看demo14
6. 添加：添加IOS6、Android最新浏览器、移动Chrome的富文本支持
7. 添加：添加CKFinder集成演示

修正：

1. 修正：粘贴强制转文本模式下，换行丢失问题的修正(感谢luofei614提供修正方案)
2. 修正：修复IE9第二屏无法选择问题
3. 修正：修正不支持jQuery 1.9问题，需要引用jquery-migrate
4. 修正：修正width:'700'参数无效的问题
5. 修正：修正UBB模块会清除行首全角空格的问题

ver 1.1.14 (2012-7-1)
-----------------------

修正：

1. 修正：IE7浏览器下编辑区域出现滚动条问题的修正
2. 修正：IE浏览器下从Excel粘贴有时会产生大量空白换行问题的修正
3. 修正：Firefox 11浏览器下同页面只显示一个编辑器内容问题的修正
4. 修正：保留所有浏览器下的Word粘贴图片占位，以方便后续手动编辑上传
5. 修正：style颜色值16进制单字符时会造成转换错误问题的修正

调整：

1. 调整：Word简单清理保留字体和字号，尽可能完美的还原出Word里的可视效果

ver 1.1.13 (2012-3-4)
-----------------------

修正：

1. 修正：jQuery 1.6,1.7且在IE6浏览器下上传图片出现`width="auto"`问题的修正
2. 修正：xhEditor操作界面被某些dialog组件覆盖问题的修正
3. 修正：span标签上某些属性丢失问题的修正
4. 修正：Opera 11下无法上传问题的修正
5. 修正：webkit内核下span某些时候style样式会丢失问题的修正
6. 修正：UBB插件在某些特殊代码情况下会输出undefined问题的修正

调整：

1. 调整：Word粘贴内容样式保留字体颜色和字体背景色，且默认改为简单清理
2. 调整：开放IOS5浏览器的富文本支持

ver 1.1.12 (2011-12-4)
-----------------------

修正：

1. 修正：超链接批量插入模式无效问题的修正
2. 修正：某些dialog对话窗口会覆盖操作面板上问题的修正
3. 修正：IE浏览器下右键导致选择内容丢失问题的修正
4. 修正：Firefox浏览器下在编辑内容为空情况下仍显示垂直滚动条问题的修正
5. 修正：IE浏览器下，在内容结尾会额外增加一个空格问题的修正
6. 修正：当加粗、斜体及下划线与删除线混用时，造成删除线之外的效果丢失问题的修正
7. 修正：UBB模式下，非标准br代码，会造成换行丢失问题的修正
8. 修正：Chrome浏览器下全选复制并粘贴，会多出一大段额外代码问题的修正
9. 修正：IE7兼容模式下源代码无法充满编辑区域问题的修正
10.修正：不兼容jQuery 1.7版本问题的修正

调整：

1. 调整：所有皮肤输入框添加焦点样式

ver 1.1.11 (2011-11-1)
-----------------------

添加：

1. 添加：添加Adobe Air平台的兼容支持

修正：

1. 修正：IE8,IE9浏览器下从其它网页复制粘贴到编辑器，出现图片等外部资源是相对路径问题的修正，修正后正常转为绝对路径
2. 修正：某些国内webkit内核的马甲浏览器无法打开iframe模式窗口的修正
3. 修正：非标准注释代码被强制转义问题的修正，例：`<!--[if lte IE 6]><![endif]-->`
4. 修正：HTML5上传模式不兼容Firefox 7问题的修正
5. 修正：WebKit内核浏览器下按钮无法自动换行问题的修正
6. 修正：UBB模块quote引用功能不支持嵌套问题的修正
7. 修正：当内容为空，IE浏览器下必需点击第一行才能设置光标焦点问题的修正
8. 修正：HTML5上传模式下，当文件名为中文时，在某些浏览器下会造成无法在服务器端获取原始文件名问题的修正
9. 修正：urlType网址转换模式下，base64编码的图片文件会被错误转换问题的修正

ver 1.1.10 (2011-9-4)
-----------------------

添加：

1. 添加：添加全局默认设置可修改功能，通过暴露的全局变量xheditor.settings来修改配置，可修改的参数请参考官方技术手册

修正：

1. 修正：当开启urlType转换模式时，页面锚点被错误转换问题的修正
2. 修正：跨域iframe模式在非80端口环境下无法正常使用问题的修正
3. 修正：跨域iframe模式当打开某个面，无法立即callback问题的修正
4. 修正：IE6,7浏览器下点击菜单边缘会造成焦点丢失问题的修正
5. 修正：调用appendHTML接口焦点没定位到文档结尾问题的修正

调整：

1. 调整：在支持CSS3浏览器下，所有输入框和按钮显示为更美观的圆角效果(需要更新所有皮肤文件)
2. 调整：为了使跨域功能更通用，跨域变量由editorhost变更为parenthost
3. 调整：原setCursorFirst接口调整为setTextCursor，并在功能上进行修正和改良

ver 1.1.9 (2011-8-3)
-----------------------

添加：

1. 添加：添加盲人无障碍访问支持：全键盘操作，全程语音向导
2. 添加：添加readTip参数，盲人初次编辑时会听到此文字提示，可用来提示快捷键等信息
3. 添加：当页面有锚点时，插入链接自动提供列表选项供选择
4. 添加：ubb模式添加hr水平线标签支持

修正：

1. 修正：IE6,IE7浏览器下，锚点在hr标签后面无法正常显示问题的修正
2. 修正：php版远程抓图saveremoteimg.php添加文件mime检查功能，以防止抓取一些非图片文件
3. 修正：带name属性的普通超链接被显示为锚点问题的修正
4. 修正：缩进功能错误的绑定tab按键，导致盲人无法正常浏览网页问题的修正
5. 修正：embed标签被错误的当成块标签处理问题的修正
6. 修正：在Opera 11.50版本中无法上传问题的修正
7. 修正：Firefox下，当页面头部是script或者style，出现无法切换源代码问题的修正
8. 修正：某些script代码会丢失问题的修正

调整:

1. 调整：大部分操作系统中不存在Arial Narrow字体，因此从字体列表中删除
2. 调整：触摸屏移动浏览器由于不支持所见即所得，不初始化编辑器，以保留传统文本框编辑功能

ver 1.1.8 (2011-7-7)
-----------------------

添加：

1. 添加：添加非本域名图片远程抓取功能(全浏览器兼容)
2. 添加：添加剪切板图片粘贴上传功能(只支持Firefox 4,5 Chrome 10,11,12)
3. 添加：添加demo12演示(远程抓图&剪切板粘贴上传)
4. 添加：内核添加锚点功能模块
5. 添加：内核添加hr水平线功能模块
6. 添加：添加onPaste回调参数，可在初始化时赋值，用来过滤用户粘贴代码，回调中返回false取消粘贴

修正：

1. 修正：针对`<div id="test"style="color:#ccc;">`这种非标准代码不兼容问题的修正
2. 修正：UBB模式下size标签丢失问题的修正
3. 修正：在IE8下的IE7兼容模式下，模式窗口无法在当前窗口居中问题的修正
4. 修正：插入表格设置高度无效问题的修正
5. 修正：Chrome浏览器中粘贴某些带特殊style属性的代码，无法粘贴问题的修正
6. 修正：IE8浏览器下无法粘贴问题的修正
7. 修正：从Word粘贴到编辑器，出现锚点丢失问题的修正

调整:

1. 调整：google地图调整为API v3版，使用更流畅，且无需申请KEY
2. 调整：当textarea处在隐藏状态，进行初始化操作会提示无法初始化，调整为不提示并设置默认高度150像素

ver 1.1.7 (2011-6-1)
-----------------------

添加：

1. 添加：添加初始化参数：submitID，在非标准submit的ajax提交环境下，可通过此参数在某个按钮上绑定鼠标点击事件，以同步编辑器最新编辑结果

修正:

1. 修正：由于Google地图接口变动，原默认值：“中国”无法返回结果，显示地址错误，因此变更为：“北京市”
2. 修正：IE浏览器下，style属性中包括有空格字体名称时，格式化代码出错问题的修正
3. 修正：当网页有横向滚动条，本应有足够位置向右显示却向左显示问题的修正
4. 修正：Firefox 4浏览器下编辑某些特殊代码会提示：Regular expression too complex错误问题的修正
5. 修正：不规范的HTML代码，例：`<a 测试="">test</a>`，会直接显示为代码问题的修正
6. 修正：Iframe上传模式在早期版本Chrome及Safari浏览器显示空白页问题的修正
7. 修正：对jQuery 1.6系列不兼容问题的修正
8. 修正：IE浏览器下，点击按钮会触发onbeforeunload事件问题的修正
9. 修正：修正IE 6,7,8无法在当前光标插入表情的问题

调整：

1. 调整：由于font-size的small、medium等关键字在各浏览器表现不一致，改为统一输出px固定大小

ver 1.1.6 (2011-4-10)
-----------------------

添加：

1. 添加：添加对IE9浏览器的完美兼容支持
2. 添加：Iframe上传模式添加跨域上传支持

修正：

1. 修正：mms等非HTTP协议的地址被错误转换问题的进一步修正
2. 修正：IE浏览器下，当图片处在有定义宽度或高度的DIV中，会造成无法编辑图片问题的修正
3. 修正：UBB模式下双引号`"`被错误转换成`&quot;`问题的修正
4. 修正：Word简单清理模式会提示JS出错问题的修正
5. 修正：PHP版服务器端上传演示程序upload.php在权限限制相对较严格的WEB服务器上出现无法上传问题的修正
6. 修正：urlType参数对表情路径无效问题的修正
7. 修正：表格编辑时，单元格光标左边多出一个空格问题的修正
8. 修正：UBB模式下Flash代码被清除问题的修正
9. 修正：点击源代码按钮，会造成两个标签之间的空格丢失问题的修正
10.修正：Opera浏览器从Word复制内容到编辑器中不会自动过滤问题的修正
11.修正：Iframe上传模式，当光标处在内页中，按Esc键不会关闭当前Iframe窗口问题的修正

调整：

1. 调整：高亮组件由syntaxhighlighter替换为Google开发更轻量的prettify，如果有需要syntaxhighlighter者可自行更换

ver 1.1.5 (2011-3-1)
-----------------------

添加：

1. 添加：应用户要求，插件演示demo09添加HTML模式下的“代码高亮”演示功能

修正：

1. 修正：繁体版由于转换软件错误将字符转换错，导致编辑内容中的C和R被错误转换问题的修正
2. 修正：<pre>标签内的换行丢失问题的修正
3. 修正：编辑内容中只出现单个或多个字母s，查看源代码会导致内容清空问题的修正
4. 修正：完善cleanWord函数，修正IE浏览器下无法过滤Excel表格粘贴的问题
5. 修正：各浏览器在全选并删除内容会增加额外代码问题的进一步修正

ver 1.1.4 (2011-2-1)
-----------------------

修正：

1. 修正：formatXHTML函数在遇到需要自封闭标签时会出错问题的修正
2. 修正：cleanWord函数在关闭wordDeepClean参数的情况下会出现部分文字样式效果丢失的修正
3. 修正：Chrome浏览器粘贴文本出错问题的修正
4. 修正：IE6,IE7浏览器下，当textarea的父容器设置了css:position为absolute或relative时无法正确全屏问题的修正
5. 修正：IE浏览器中无任何输入或者全选删除，会自动添加额外HTML代码问题的修正

调整:

1. 调整：wordDeepClean和forcePasteText两个参数合并为cleanPaste参数，详细变更细节可参考官方技术手册

ver 1.1.3 (2011-1-1)
-----------------------

调整：

1. 调整：取消删除线的快捷键：Ctrl+S

修正：

1. 修正：IE浏览器下无边框的table没有显示辅助的虚线边框问题的修正
2. 修正：IE浏览器下光标定位在编辑器中，xheditor(false)卸载编辑器会造成当前页面光标被锁死问题的修正
3. 修正：&reg;和&copy;被浏览器强制转为字符问题的修正
4. 修正：从其它网站复制粘贴WORD文档和普通HTML混合的内容时，会导致图片丢失问题的修正
5. 修正：urlType参数开启情况下，mailto:地址被转绝对地址问题的进一步修正
6. 修正：Flash和视频不支持输入百分比数值问题的修正

优化：

1. 优化：优化Word自动文档清理功能，进一步提高代码处理效率并且兼容Excel文档粘贴
2. 优化：优化formatXHTML函数，极大提高代码格式化效率

ver 1.1.2 (2010-12-1)
-----------------------

修正：

1. 修正：IE6浏览器在鼠标没点击编辑区域的情况下点击源代码出错问题的修正
2. 修正：源代码光标定位功能在某些情况下会产生空白行问题的修正
3. 修正：IE6,7浏览器下编辑器高度设置过高会导致上下漏灰问题的修正
4. 修正：IE浏览器下在showModalDialog打开的窗口中无法正常初始编辑器问题的修正
5. 修正：IE浏览器下若开启urlType参数，生成的URL根路径会出现丢失“/”符号问题的修正
6. 修正：不兼容jQuery 1.4.3,1.4.4问题的修正
7. 修正：某些Word文档粘贴后会多出很多换行问题的修正
8. 修正：forcePasteText参数开启情况下，粘贴“<p>ffff”类似文本会被转HTML代码问题的修正
9. 修正：开启urlType参数情况下，“mailto:”、“file:”和“ftp:”等协议的URL地址会被错误转换问题的修正
10.修正：IE浏览器下选择图片的情况下，粘贴会产生JS错误问题的修正
11.修正：IE浏览器环境下，初始化时会删除&符号后面全部代码问题的修正
12.修正：Chrome浏览器按回车键没有输出<br/>问题的修正
13.修正：Firefox浏览器下从其它网页复制文本，其中文本会在超长处被强制加br问题的修正

调整：

1. 调整：为提高兼容性，Word自动检测并清理功能改为只在用户粘贴时执行
2. 调整：优化内核正则表达式，提高代码的清理和格式化的执行效率

ver 1.1.1 (2010-10-2)
-----------------------

添加：

1. 添加：添加background初始化参数，用来定义编辑器编辑区域的背景，此参数格式同CSS的同名参数一致。同时也支持直接定义textarea的CSS background

修正：

1. 修正：原IE内存泄漏解决方案不完美，造成IE焦点丢失的问题修正
2. 修正：Firefox浏览器中文件拖放在空白区域无响应问题的修正
3. 修正：IE6及IE7浏览器粘贴内容产生JS错误问题的修正
4. 修正：IE浏览器下右键菜单焦点混乱问题的修正
5. 修正：IE浏览器下出现`<font>test</font>`代码时会导致JS出错问题的修正
6. 修正：在配置为Iframe式上传的编辑器中拖放文件会产生错误问题的修正
7. 修正：IE浏览器中使用缩略图上传模式会产生类似 `jquery1284539697843="269"`的额外属性修正
8. 修正：IE浏览器中拖动img大小，不更新width和height属性值问题的修正
9. 修正：IE浏览器中粘贴某些视频分享代码出现代码混乱的修正
10.修正：UBB模式下点击“预览”按钮仍显示UBB代码的问题修正
11.修正：Chrome浏览器下某些情况下切换源代码会提示JS错误问题的修正
12.修正：IE浏览器下HTML代码的可视内容前面的script、style或注释会丢失问题的修正
13.修正：HTML代码中的script,style代码段换行丢失导致JS执行错误问题的修正

ver 1.1.0 (2010-9-1)
-----------------------

添加：

1. 添加：添加由网友shiny原创设计的皮肤NoStyle
2. 添加：demo07 UBB演示页面添加Google地图插件，也作为不定宽按钮的演示
3. 添加：添加urlType转非相对路径中合并“..”到上一级路径的功能
4. 添加：添加emotPath初始化参数，以将表情指向其它自定义URL路径下，注意路径必需以“/”结尾
5. 添加：添加urlBase初始化参数，用来定义超链接、图片及Flash等文件的相对根路径，同时也是urlType参数的参考根路径
6. 添加：经用户反馈意见，重新添加“预览”功能按钮
7. 添加：添加双击超链接、图片、Flash和多媒体可直接打开相应修改界面的功能，注：某些浏览器双击Flash和多媒体会有问题
8. 添加：打开面板时可按Esc键隐藏当前的面板
9. 添加：初始化参数添加disableContextmenu，用以禁用浏览器在编辑区域的默认右键菜单，设置为true禁用，默认不禁用
10.添加：Word粘贴自动过滤功能由原先的IE only增加为跨浏览器兼容
11.添加：添加强制粘贴为文本功能，初始化参数forcePasteText设置为true开启此功能，默认不强制文本
12.添加：添加Pidgin和IPB两套表情，并在demo05和demo07中添加相应的配置演示
13.添加：初始化参数添加editorRoot，在某些特殊情况下定位编辑器的根路径
14.添加：将本地电脑中的多个文件拖放至编辑器的编辑区即可上传并插入，此功能需要浏览器支持HTML5上传(Firefox,Chrome)
15.添加：iframe式模式窗口的子窗口添加unloadme接口，用以手动关闭当前模式窗口

修正：

1. 修正：showIframeModal上传模式下onUpload接口无效问题的修正
2. 修正：使用无效按钮名称会导致JS出错问题的修正
3. 修正：IE6,IE7在iframe框架中使用xhEditor会在页面中出现_xhe_cursor问题的修正
4. 修正：IE浏览器在图片、FLASH等控件上按Backspace会导致整个页面后退问题的修正
5. 修正：回车BR模式在IE浏览器下，按下回车只显示一个空格不换行问题的修正
6. 修正：IE浏览器中会造成内存泄漏问题的修正
7. 修正：WebKit内核浏览器回车换行在切换一次源代码后会丢失问题的修正
8. 修正：formatXHTML函数错误的处理转义符\ ，造成合法HTML代码错乱问题的修正

调整：

1. 调整：皮肤框架进行了调整，支持不定宽按钮，需要的用户可自行设计修改
2. 调整：为使按钮配置更直观简便，原按钮分隔符Separator变更为“|”，原按钮换行符BtnBr变更为“/”
3. 调整：原localUrl参数名变更为urlType

ver 1.0.0 Final (2010-7-1)
-----------------------

添加：

1. 添加：添加html5Upload参数，用以关闭HTML5上传功能，若关闭HTML5上传，则upMultiple参数无效
2. 添加：添加delShortcuts API接口，以供插件或者外部动态的删除快捷键

修正：

1. 修正：UBB模块背景色在Firefox浏览器下某些情况会丢失问题的修正
2. 修正：IE6浏览器直接在`<body>`标签内调用初始化JS代码失败问题的修正
3. 修正：插件代码在IE的某些特殊情况会造成焦点丢失问题的修正
4. 修正：Firefox浏览器下用jQuery的load动态加载带编辑器代码页面无效问题的修正
5. 修正：从Word文档粘贴内容在Chrome浏览器中清理不完全问题的修正
6. 修正：inlineStyle参数无效问题的修正
7. 修正：IE浏览器粘贴无法清理Word文档问题的修正

调整：

1. 调整：优化初始化代码以提高初始化速度
2. 调整：考虑到“关于”按钮自动显示容易影响正常用户使用体验，特关闭此按钮的自动显示功能
3. 调整：考虑php的json支持需要5.2版本以上才支持，对演示上传程序upload.php进行了适当的调节以提高兼容性，并同时优化了某些代码流程
4. 调整：upMultiple参数由原先的逻辑值，变更为数值型，代表允许一次最大上传文件数，允许值：大于0的整数，等于1代表关闭多文件选择
5. 调整：缩略图等参数分隔符逗号：“,”在非常多的特殊URL中容易出现，因此变更为：“||”
6. 调整：根据用户反馈意见，将默认表情变更为QQ表情
7. 调整：某些按钮的功能代码中使用title属性传值，会与某些toolTip插件冲突，因此变更传值属性值以提高兼容性
8. 调整：关闭所有textarea在Chrome浏览器中的拖动改变大小功能

ver 1.0.0 RC3 (2010-5-6)
-----------------------

添加：

1. 添加：添加HTML5上传支持：多文件选择上传、真实上传进度显示以及从电脑中直接拖放文件上传，注：相应功能需要浏览器支持
2. 添加：添加upMultiple参数，控制是否允许多文件选择上传，默认为开启，此功能需要浏览器支持HTML5上传
3. 添加：添加全选SelectAll和打印Print两个工具按钮
4. 添加：添加多行完全工具栏组mfull，添加演示在demo01和demo02
5. 添加：对话框面板中的textarea表单项中按Ctrl+Enter自动调用确定按钮，目前仅影响“粘贴文本”按钮
6. 添加：非IE浏览器下对话框面板打开后在第一个可输入表单项设置焦点

修正：

1. 修正：会造成网页中非jquery的submit事件return false无效问题的修正
2. 修正：IE浏览器下从写字板粘贴内容会额外增加多余代码问题的修正
3. 修正：IE浏览器下段落标签无效问题的修正
4. 修正：IE浏览器下插入URL结尾带参数的FLASH和多媒体文件，会造成代码完全失效问题的修正
5. 修正：hr等自结束标签导致代码缩进格式化错误问题的修正
6. 修正：多次初始化编辑器，插件会被重复加载问题的修正
7. 修正：扩展的jQuery方法.val('test')不支持多dom批量写值问题的修正
8. 修正：IE6某些情况下打开按钮面板会造成界面闪动问题的修正
9. 修正：Firefox从全屏返回正常界面会导致当前页面滚动条置顶问题的修正
10.修正：shortcuts参数及addShortcuts函数定义的多个相同快捷键，最早定义才有效的问题修正，并允许在事件代码中return false来取消当前事件
11.修正：使用非强制P标签(BR模式)情况下，列表中无法用回车产生新列表项问题的修正
12.修正：IE浏览器下，菜单、颜色和表情由于代码编写不够完善，造成打开缓慢问题的修正
13.修正：无论是否开启内部代码，都会造成`<script>`标签丢失问题的修正
14.修正：XHTML格式化函数formatXHTML代码出错，造成某些非标准代码修复失败问题的修正
15.修正：解决初始化后焦点定位在编辑器中的问题
16.修正：del标签被处理到块标签外问题的修正
17.修正：卸载时最新值没同步回textarea问题的修正

调整：

1. 调整：o2007blue和o2007silver两个皮肤鼠标悬停时样式进行了优化调整
2. 调整：添加js文件重复加载检测，以防止内核js文件被重复load
3. 调整：loadCSS参数支持加载`<style></style>`内部样式
4. 调整：系统内置Ajax上传添加*参数，不限制任何扩展名
5. 调整：UBB demo07中的高亮组件syntaxhighlighter由原先的2.1.364版更换成更为精简的1.5.1版，需要其它高亮组件请自行更换
6. 调整：批量插入分隔符由原先的制表符(\t)变更为半角空格( )
7. 调整：demos文件夹3个语言版本的upload.php、upload.asp和upload.aspx修改以支持HTML5上传
8. 调整：为遵守W3C标准及提高图片的搜索引擎友好性，UBB模块img标签在第一个参数位添加必填参数alt，例：[img=alt,100,100,center]a.gif[/img]或者[img=alt,center]a.gif[/img]，注：若希望升级至当前UBB版本，之前带参数的img标签，请自行批量转换
9. 调整：鉴于用户反馈Preview“预览”功能实用价值不大，又占相对较大代码量，特删除此功能，由于功能关联并连带删除只读功能
10.调整：由于原API互动接口变量editor某些情况下会造成Firefox产生Security error错误提示，变量名变更为xheditor

取消：

1. 取消：取消GStart和GEnd两个按钮，相应两个按钮会自动在相应位置添加
2. 取消：鉴于字数统计功能依赖的change事件会和其它插件产生严重的冲突问题，暂时取消此事件触发功能

ver 1.0.0 RC2 (2010-4-1)
-----------------------

添加：

1. 添加：添加鼠标悬停延迟自动面板显示功能，提高用户操作效率，延迟时间在初始化时用hoverExecDelay参数设置，单位为毫秒，设置为-1表示关闭此功能
2. 添加：按钮对象添加h参数，h设置为1时代表当前按钮支持鼠标悬停自动显示，此参数同样适用于插件开发
3. 添加：在demo07 UBB演示中添加Flv视频演示
4. 添加：集成MSN表情，可在demo07 UBB演示中查看显示效果
5. 添加：自带Ajax文件上传添加按Esc取消上传功能
6. 添加：pasteHTML和pasteText函数添加第2个参数：bStart，可以是以下值：留空(覆盖粘贴)、true(粘贴在光标选择区域之前)、false(粘贴在光标选择区域之后)
7. 添加：切换到源代码，可视化编辑页面的光标对应源代码相应位置的定位功能
8. 添加：扩展jQuery的标准val函数，使之能够直接读取和设置编辑器的最新值
9. 添加：为方便外部应用的扩展，特将编辑器内部的window和document开放外部调用，变量名：win，doc
10.添加：扩展textarea的change事件，使之可以触发编辑器的change
11.添加：UBB演示demo07添加字节数统计演示
12.添加：内置Ajax上传和showIframeModal接口参数中的url地址可以使用“{editorRoot}”内置变量，用来定位编辑器文件夹中的页面，例如：{editorRoot}xheditor_plugins/test.html

修正：

1. 修正：<pre></pre>已编排格式中的换行符和制表符丢失问题的修正
2. 修正：最终代码提交时没有进行压缩问题的修正
3. 修正：表情没有插入alt信息问题的修正
4. 修正：表情分组切换时产生右移1像素位移问题的修正
5. 修正：当按钮的鼠标悬停样式偶尔失效时，按钮面板会产生右移1像素问题的修正
6. 修正：带面板的按钮包括插件，快捷键触发或者直接外部调用会产生错误问题的修正
7. 修正：IE浏览器预览时，会跑至页面尾部问题的修正
8. 修正：Firefox 3.6从源代码切换回来光标丢失问题的修正
9. 修正：p和div标签内部的`&nbsp;`占位符被清除，造成块标签零高度问题的修正
10.修正：IE拖动img大小不更新width和height属性值问题的修正
11.修正：IE浏览器下在表格中粘贴会位置错乱问题的修正
12.修正：IE浏览器下超链接的链接文字，在超链接是“http://”开头的情况下，输入“http://”开头文字无效的修正
13.修正：UBB模块中`style="text-align:*"`没转换成`[align=*]`问题的修正
14.修正：IE6下打开面板某些情况下会出现方形白色区域问题的修正
15.修正：加载多个编辑器时，用于IE粘贴处理的临时隐藏iframe被重复加载问题的修正
16.修正：IE6下某些情况下全屏后再取消全屏导致浏览器崩溃问题的修正

调整：

1. 调整：所有img图片强制添加alt标签，以使代码符合XHTML标准
2. 调整：对ubb插件进行了适当的调整，以兼容以下不标准情况：无[list]和[/list]结尾的[*]标识
3. 调整：优化formatXHTML函数，提高解析器工作效率
4. 调整：API函数setSource由原先的延迟写入，修改为立即写入
5. 调整：更换为更完善的IE光标丢失问题解决方案
6. 调整：为兼容w3c标准，原xheditor专有属性初始化模式，变更为直接在class中写参数，例：`class="xheditor {skin:'o2007blue'}"`
7. 调整：为兼容电驴、快播等特殊URL，超链接、图片、FLASH和多媒体4个按钮的批量插入分隔符，由原先的“|”变更为制表符(\t)
8. 调整：编辑器初始化代码由原先的xheditor(true,参数)精简为xheditor(参数)

ver 1.0.0 RC1 (2010-3-1)
-----------------------

添加：

1. 添加：demo7 UBB演示结合syntaxhighlighter添加代码高亮示例
2. 添加：之前上传接口的msg变量仅能是字符串，现在可使用数组，但是必需保证数组中有一个变量名：url，其它变量可以任意添加，例：`{err:'',msg:{url:'test.txt',id:'1'}}`
3. 添加：鼠标点击事件传递到textarea中，方便某些特殊应用监控鼠标事件
4. 添加：超链接模块添加批量插入功能，返回链接地址可以为如下方式：test1.html,test1|test2.html,test2，逗号前面为链接url，后面部分为链接文本，多个链接之间用|分隔
5. 添加：demo10添加超链接模块的批量上传功能演示
6. 添加：Flash动画和多媒体文件两个模块在上传接口上添加宽度和高度参数，例：test.swf,100,200，分别代表：url、宽度和高度

修正：

1. 修正：在file://这样的本地环境下，IE等少数几个浏览器工作不正常问题的修正
2. 修正：在编辑器前一个表单项目按tab键，无法直接跳入编辑器区域问题的修正
3. 修正：Firefox等少数浏览器在空内容情况下自动添加<br />问题的修正
4. 修正：Firefox等浏览器在可视化编辑状态下无法强制换行问题的修正
5. 修正：IE7浏览器下模式窗口无法居中问题的修正
6. 修正：处理`<font size="8">test</font>`这样不规则HTML代码，会产生错误问题的修正
7. 修正：IE6,IE7无法编辑Flash和多媒体问题的修正

调整：

1. 调整：JS互动接口对象返回方式变更为：`editor=$('#elm1').xheditor(true)`;，若同时对多个对象初始化，则返回所有成功对象的数组
2. 调整：添加的插件默认插入在full按钮组的Table表格后面，原先必需自己手工调用
3. 调整：jQuery更换为v1.4.2版本
4. 调整：繁体版xhEditor内核中的某些文字修改为更加本地化用词
5. 调整：textarea隐藏情况下，无法获得高度，造成编辑器0高度问题，现强制禁用并提醒开发者必需显示后再初始化
6. 调整：切换成源代码时格式化XHTML的输出格式进行了适当调整
7. 调整：为了和showModal接口保持一致，showIframeModal接口的title和ifmurl两个参数进行了顺序调换


ver 1.0.0 beta2 (2010-2-7)
-----------------------

添加：

1. 添加：增加.NET版上传演示程序upload.aspx，编码：Jediwolf<jediwolf@gmail.com>
2. 添加：添加异步加载，利用loadJS函数动态加载JS文件并初始化编辑器(demo11)
3. 添加：初始化参数列表添加shortcuts参数，可在编辑器初始化时绑定自定义快捷键，例如：`shortcuts:{'ctrl+enter':function(){alert('test');}}`
4. 添加：添加缩略图模式的演示(demo08)
5. 添加：添加按钮多行模式的演示(demo02)
6. 添加：添加localUrl初始化参数，用来强抑转换本地URL地址，默认为不转换，可用参数：abs,root,rel，分别代表：绝对地址、根地址、相对地址，例如设置为rel，所有本地URL会强制转为相对地址
7. 添加：添加localUrl的3个参数的演示(demo04)
8. 添加：超链接允许服务器上传接收程序直接返回超链接的文字内容，例如可以把上传的文件名作为超链接的文字
9. 添加：添加返回超链接文字内容的附件式上传的演示(demo08)
10.添加：表情模块添加多分类功能，并调整模式以兼容UBB转换
11.添加：添加emots初始化参数，用以添加表情分类
12.添加：添加emotMark初始化参数，用以在img代码上添加emot属性，默认为false，若挂接UBB插件或者其它情况，就要设置为true
13.添加：UBB模块添加对表情的转换支持，例：[emot=titter/][emot=qq,2/]
14.添加：添加upBtnText初始化参数，以设置上传按钮的文字，例如可以设置为：“浏览”
15.添加：添加onUpload初始化参数，上传成功时调用此回调函数，唯一参数值是上传的文件URL
16.添加：添加onUpload参数的演示(demo08)
17.添加：添加wordDeepClean初始化参数，用来控制是否深入的清理从Word粘贴的内容，默认为true
18.添加：添加IE浏览器拦截粘贴并清理Word代码的功能
19.添加：添加源代码缩进换行格式化功能，在查看源代码时格式化，但向服务器提交时压缩HTML代码

修正：

1. 修正：ubb模块增加对非标准HTML代码的兼容性，并进一步完善空格转换的问题
2. 修正：showModal模式窗口在IE6浏览器下无法覆盖select下拉框组件的bug修正
3. 修正：getSelect接口在某些情况下会多选择一些HTML代码问题的修正
4. 修正：IE6浏览器下，模式窗口后面的遮盖层，在没出现滚动条情况下无法充满浏览器的问题修正
5. 修正：IE6和IE7浏览器下，模式窗口无法垂直居中问题的修正
6. 修正：Word文档清理函数cleanWord进一步完善，提高代码兼容性
7. 修正：pasteHTML函数在IE无法替换图片等对象问题的修正
8. 修正：IE6浏览器下某些情况下无法完全全屏问题的修正

调整：

1. 调整：快捷键addShortcuts接口可为同一个快捷键绑定多个执行代码，并开放为外部API调用
2. 调整：jQuery更换为v1.4.1版本，同时建议更新为1.4.1版，1.3.2版本会导致图片的缩略图模式在IE6下工作不正常
3. 调整：颜色表更换为Gmail颜色方案，相对更精简实用
4. 调整：批量插入页面模块化，利用url参数进行调用，并添加单文件删除和限制重复文件功能
5. 调整：为了便于统一更新，ASP版ubb2html改为javascript server版本，并添加html2ubb函数

取消：

1. 取消：取消keepValue属性，默认全局保存src和href值
2. 取消：考虑到baseUrl参数使用意义不大并有一定缺陷，在此取消此参数


ver 1.0.0 beta (2010-1-10)
-----------------------

1. 修正：为解决IE6浏览器中某些图片无法显示的问题，按钮菜单等链接href由javascript:;改为javascript:void(0);
2. 修正：链接、图片、动画和视频4个面板中，若没输入任何内容则不插入到编辑器中
3. 修正：UBB插件的服务端ubb2html.php模块不支持重复调用问题的修正
4. 修正：src和href属性中若包括美元符$，会造成被截断问题的修正
5. 修正：IE浏览器下，编辑内容非常多时，点击任意按钮延迟严重问题的修正
6. 调整：UBB插件的[code]编码增加一个类型属性，例：[code=php]
7. 添加：按钮面板showPanel和模式窗口showModal函数添加背景阴影效果，可通过settings.layerShadow参数关闭或者调整阴影深度
8. 修正：IE6浏览器下showModal的遮盖层无法充满整个窗口问题的修正
9. 调整：为防止样式冲突，ui.css样式命名方式进行适当调整
10.添加：添加settings.linkTag属性，用来控制是否清除网页中的link标签(外部样式表)，默认值为清除
11.添加：初始化参数loadCSS支持数组加载，以方便为编辑区域添加多个样式表，例：loadCSS:'1.css',loadCSS:['1.css','2.css']
12.添加：UBB模式下，添加图片仅有宽度或者高度情况的支持，例：[img=100,]test.gif[/img]或者[img=,100,left]test.gif[/img]
13.添加：只需把参数设置在textarea的xheditor属性，无需JS调用即可初始化编辑器，例：`<textarea xheditor="{tools:'mini',skin:'o2007blue'}"></textarea>`
14.添加：超链接模块在没选择任何内容的情况下，可由用户输入链接文字内容
15.调整：attachLinkText参数名修改为defLinkText，意为：默认超链接文本
16.添加：在按钮面板所有输入框按回车键，等于点击“确定”按钮
17.修正：Flash动画和视频在IE6下无法重修改问题的修正
18.修正：字体模块重大修正，解决了大部分中文字体设置无效的问题
19.添加：图片、Flash动画和视频3大模块添加批量插入功能(批量上传)，多个URL之间的分隔符为“|”，例：1.gif|2.gif|3.gif，原缩略图模式的分隔符|现更换为逗号“,”，例：1.gif,1.html|1.gif,2.html
20.修正：showModal内容区域没充满高度问题的修正，并进一步提高对应皮肤的兼容性，可定制性更高
21.添加：showModal模式窗口打开后可按Esc关闭
22.添加：showIframeModal模块加载完成前添加loading效果
23.添加：内置Ajax上传若上传接口发生错误，显示详细错误内容，显示完毕自动关闭上传假进度提示窗口
24.修正：工具面板上的按钮和文本框样式在IE6无效问题的修正
25.添加：所有按钮对话框添加“取消”按钮，并添加clickCancelDialog参数，默认值为true，若设置为false，当打开按钮对话框后，点击任意位置取消的功能无效
26.修正：修正UBB模式下的严重安全漏洞，强烈建议所有使用UBB插件的用户尽快更新，对于旧版编辑器内核也可单独只更新UBB插件(js和服务端脚本)
27.调整：系统自带ajax上传的文件域名称由原来的“upload”变更为“filedata”
28.添加：demos文件夹添加ASP版上传接收演示程序upload.asp
29.添加：增加vista风格皮肤
30.添加：在demo10中添加多文件批量上传演示(结合swfupload实现)
31.修正：超链接的href中存在单引号'的情况下，会导致href属性丢失的问题修正，例：`<a href="javascript:alert('test');">test</a>`
32.修正：当使用baseUrl参数时，IE6浏览器下会导致iframe.css无效问题的修正
33.修正：Firefox浏览器下每插入一次图片会访问一次编辑器所在页面问题的修正，此问题一般情况下不容易发现，建议所有用户升级到当前版本

ver 0.9.9 (2009-11-23)
-----------------------

1. 调整：多语言内核合并成一个发布包，同时提供：简体、繁体和英文，并对内核进行了针对性修改
2. 添加：工具栏改为自动换行模式，添加工具栏强制换行命令：BtnBr，并对相关的样式和脚本进行了针对性修改
3. 调整：自带Ajax上传开始后弹出假上传进度窗口，防止用户意外关闭上传前操作界面导致上传失败
4. 添加：增加缩进为Tab快捷键，减少缩进为Shift+Tab快捷键
5. 修正：编辑内容区在预览状态下点击链接，会导致当前编辑区域失效，现更改为默认打开新窗口(_target)
6. 修正：演示用upload.php增加扩展名限制，以增加文件上传的安全性
7. 添加：UBB模式增加[code]的完美支持，保证`[code][/code]`区域里的内容不做任何修改
8. 修正：图片属性界面中的水平间距和垂直间距反了，在此重新更正
9. 添加：在settings中添加baseUrl参数，应用在需要相对路径的编辑环境中：编辑页面和图片文件不在同一个基础路径下，但是又需要图片等附件保存为相对路径
10.修正：Firefox下切换到源代码再切换回来，会导致无法用删除键和后退键问题的修正
11.调整：showModal函数由原先的单一iframe上传功能，现分离成两个独立函数：showIframeModal和showModal，前者调用内嵌iframe的模式窗口，后者显示普通的模式窗口，都可供插件调用
12.添加：添加getSelect函数，返回编辑器窗口中选中内容的HTML代码或者文本，唯一参数设置为'text'即是返回文本
13.添加：添加link链接的附件模式，不选择任何内容的情况下添加链接为添加附件，附件链接的文字可设置参数attachLinkText
14.修正：强制P标签功能的进一步完善，非P标签模式下，按回车键全部输出换行
15.添加：添加toggleShowBlocktag接口，以方便某些需要添加“显示或者隐藏块标签”按钮的开发者调用
16.修正：formatXHTML兼容性进一步提高，处理某些非标准HTML代码，导致部分内容丢失问题的修正
17.添加：系统自带的Ajax上传和iframe式上传增加“立即添加模式”，只需在返回的参数最前面加感叹号“!”，在上传完成后图片或者链接等内容即自动加入到编辑器内容中
18.修正：系统自带Ajax上传功能在Opera上传失败问题的修正

ver 0.9.8 (2009-8-22)
-----------------------

1. 修正：Word代码检测方式进一步完善，解决某些Word文档无法清理的问题
2. 调整：由于某些时候需要用空span标签来定义样式，因此取消空span标签清理功能
3. 修正：Chrome浏览器环境下，字体大小兼容处理代码的不完善，造成颜色和大小等样式丢失问题的修正，此问题可能在之前很多版本都存在
4. 调整：原先在WORD代码清理功能模块中的清理meta和link标签及清理XML内容功能，移到cleanHTML中以保证每次返回内容都清理
5. 修正：文章最前面的全角空格被清除问题的修正
6. 优化：标签的所有PNG格式背景图片由原先的35K无损压缩至1K左右，3个模板整体减少100K左右
7. 添加：showModal接口添加modalWidth和modalHeight参数，控制弹出窗口的默认宽高
8. 添加：showModal接口添加modalTitle参数，控制是否显示窗口上方的标题栏，默认为显示
9. 调整：clearScript参数改为internalScript，clearStyle参数改为internalStyle
10.添加：添加inlineScript参数控制是否清理内联代码，添加inlineStyle参数控制是否清理内联样式
11.添加：UBB插件添加图片排版功能，图片标签由原先的[img=宽度,高度]，调整为[img=宽度,高度,对齐]，或者[img=对齐]
12.添加：增加图片缩略图功能，添加图片时，可由“|”此符号分隔两个网址，前面网址为缩略图，后面网址是链接的大图地址或者其它网址，例如：small.gif|big.gif，或者small.gif|http://pirate9.com/
13.调整：默认表情移至default文件夹下，为今后开发多分类表情做准备

ver 0.9.7 fix (2009-8-3)
-----------------------

1. 调整：原插入图片后为默认选择状态，在IE下按回退键后导致页面回退而不是向前删除，现改为插入图片后焦点移至图片后方
2. 修正：script和style过滤功能原先由于正则语句严重错误，导致过滤功能无效问题的修正
3. 修正：由于上一版本的相对变绝对修正功能的不完善，造成动画和视频的添加和修改无法正常工作的严重错误，此问题仅出现在0.9.7版中
4. 修正：由于相对变绝对修正功能的不完善，导致opera浏览器返回图片、动画和视频源代码消失的问题

ver 0.9.7 (2009-7-21)
-----------------------

1. 调整：标签显示功能由原先的显示在左上方并增高8像素，改为显示在右上方且不增高
2. 调整：编辑器内部的settings变量由原先的内部变量改为公有变量，以方便从外部动态的对参数进行修改
3. 修正：修正了Chrome浏览器下字体效果转换错误的问题，此问题仅出现在0.9.6版中
4. 修正：在非WebKit内核下，使用3个字符的16进制颜色值无效的问题进行了修正，例：`<span style="color:#999">aaa</span>`
5. 修正：appendHTML和pasteHTML两个函数添加的图片或者链接，相对地址变绝对地址问题的修正
6. 修正：XHTML格式化功能进一步完善，例：`<b>aaa<bbb</b>`，修正前<bbb这部分内容会消失，修正后此BUG消失
7. 修正：之前表情插入后默认是选中当前表情，现修正为插入表情后光标定位在表情之后，这样便于在后面继续插入新表情
8. 添加：ajax上传功能模块化，使链接、动画和视频在不增加代码大小的情况下都具备上传功能
9. 添加：在readonly只读模式下除了全屏和关于按钮可用，其它所有按钮都禁用，并且内容不可编辑，可通过toggleReadonly接口来进行切换状态
10.添加：showModal接口，模仿桌面程序的模式窗口，必需完成窗口内事件或者关闭窗口才能返回窗口，本程序已扩展到ajax上传模块中，并可在插件中调用

ver 0.9.6 (2009-6-14)
-----------------------

1. 修正：span标签的color样式编辑过程中，在某些情况下会丢失或者转变成另一种颜色的问题
2. 修正：IE浏览器下，由于原光标丢失解决方案不理想，造成光标在某些情况会跑到页面结尾的问题
3. 修正：在Chrome和Safari浏览器下，切换到源代码模式无法全窗口的问题(目前仅部分修正)
4. 修正：某些非盒模型浏览器渲染下无法全屏问题的进一步修正
5. 修正：由于XHTML 1.0 Strict DTD和HTML 5规范中都已经完全的禁用`<strike>`，因此输出代码`<strike>`标签统一改为`<del>`
6. 删除：由于某些情况下需要利用css配合HTML路径制作样式效果，因此取消无意义标签(<span>测试</span>)清理功能
7. 添加：某些浏览器(IE等)会自动将src和href等属性自动变为绝对路径，因此添加属性值自动保存功能，并允许在初始化时关闭此功能：keepValue:false
8. 添加：针对IE浏览器添加强制换行，原先若一直输入某个英文字母，会使编辑器窗口产生横向滚动条
9. 修正：修正了编辑器界面初始化时高度和宽度计算错误的问题
10.添加：弹出dialog自适应可视窗口区域范围，超出屏幕右边范围自动靠左显示
11.调整：鉴于网络和大部分权威软件都流行在<br/>中间加上空格，即显示如下：<br />，因此本编辑器也改为带空格的自关闭标签输出
12.添加：添加自定义按钮功能，可自定义按钮的样式、显示名、快捷键及事件代码，具体使用方法请参考demo9

ver 0.9.5 (2009-6-3)
-----------------------

1. 添加：jQuery事件层接管textarea的focus事件，以解决某些表单校验组件由于textarea隐藏后，对textarea的聚焦错误问题(必需要使用jQuery的focus方法)
2. 添加：JS接口添加appendHTML函数，用来向编辑器内部结尾添加HTML代码
3. 添加：过滤类似无意义HTML代码：`<b>aaa</b><b>bbb</b>`，前后标签完全一样且不带任何属性和样式，中间没必要结束并新开
4. 添加：图片上传功能，可以在编辑器初始化时设置uploadUrl参数开启
5. 添加：UBB模式增加背景色和删除线功能，至此支持了全部的标签，删除ubb按钮集
6. 添加：编辑器的focus和blur接口，可在编辑器初始化时指定
7. 添加：添加初始化参数：编辑器初始化默认为源代码模式:sourceMode
8. 修正：某些不支持盒模型的页面标准可能无法全屏的问题，比如不带任何标准定义的<html>头
9. 修正：JS文件调用的时候若在结尾加上类似?v=0.9.4这样的代码，会引起编辑器初始严重错误的问题

ver 0.9.4 (2009-5-2)
-----------------------

1. 修正：全屏模式在IE等浏览器下超出屏幕的BUG
2. 修正：强制P标签在某些情况下无效的BUG
3. 添加：UBB模式添加表格支持
4. 修正：UBB模式某些标签转换错误的BUG
5. 添加：UBB模式服务器脚本转换函数(php,asp)
6. 修正：内核上跳过jQuery的BUG，目前可直接使用官方1.3.2版js引擎
7. 调整：为了避免大小写不统一，插件调用接口统一改为小写，例：`$('#elm1').xheditor(true)；`
8. 修正：内核上的一些细小BUG

ver 0.9.3 (2009-4-28)
-----------------------

1. 添加：UBB可视化插件(添加beforeSetSource和beforeGetSource接口)
2. 添加：强制p标签功能(可选择关闭)
3. 修改：class属性初始化模式增加两个值：xheditor-mini和xheditor-simple，分别调用迷你版和简单版编辑器界面
4. 修改：一些图片和接口上的细小调整

ver 0.9.2 (2009-4-27)
-----------------------

1. 修正：错误的递规式正则表达式导致某些标签无法正常替换的bug
2. 添加：段落标签选择功能：p,h1,h2,h3,h4,h5,h6,pre,address
3. 添加：段落区域及标签显示功能
4. 添加：表格添加功能

ver 0.9.1 (2009-4-25)
-----------------------

1. 修正：Word代码清理导致内容丢失的BUG
2. 修正：style和font之间转换丢失字体大小的BUG