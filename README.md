[![Build Status](https://travis-ci.org/Samlv9/SRLIB.svg)](https://travis-ci.org/Samlv9/SRLIB)

## 前言 ##

&#160;&#160;&#160;&#160;这是一个偏向底层的 Javascript 类库，旨在解决目前（2015年）许多高级类库不断的编写重
复代码的问题。如果你需要的是一个适用于特定领域的类库或者框架（比如 DOM 操作，Ajax 数据交互，Tween 动画等），那
么或许该类库并不合适你。

参考这样一个例子：
> 1，开发人员 A 需要实现一个计时器功能的类型。<br/>
> 2，开发人员 B 需要实现一个 Tween 动画功能的类型。<br/>
> 3，他们每个人都需要通过使用 `setTimeout/requestAnimationFrame` 来首先实现一个 `Timer` 的基础类型。然
后通过 `Timer` 类型提供的更新事件（update）来更新计时器的值或者更新动画的当前状态。<br/>

在上面的例子中，我们完全可以通过封装 `setTimeout/requestAnimation` 来实现一个公共的 `Timer` 类型，然后开
发人员 A 和 B 在他们的项目的中引用这个公共的 `Timer` 类型，从而达到消除重复代码的目的。这也是目前许多人开发
人员采用的方式。

&#160;&#160;&#160;&#160;为了保证项目中的模块具备良好的通用的性质，因此项目采用最小化设计的原则。通过尽量减少
模块之间的依赖性，来保证模块被引用到多个其他的项目中时，不会发生代码冲突。


## 分支 ##
该项目使用 [Git 分支][git-branch-doc] 来管理项目中的源代码、文档、以及扩展工具等。下面简要介绍这些分支的功能和用途。

* [docs](https://github.com/Samlv9/SRLIB/tree/docs)：文档分支，用于编写帮助文档/使用手册等。
* [master](https://github.com/Samlv9/SRLIB/tree/master)：主分支，其他分支的合并后的分支。用于发布功能，版本管理等。
* [source](https://github.com/Samlv9/SRLIB/tree/source)：源码代码分支，用于编写源代码文件。
* [toolkit](https://github.com/Samlv9/SRLIB/tree/toolkit)：工具分支，用于提供辅助开发的工具。

你可以在 [Branches](https://github.com/Samlv9/SRLIB/branches) 页面找到所有分支的详细情况。通过使用工作分支来
管理工作内容，这样可以使得整个项目不会看起来那样的杂乱无章。每一个分支的作用都是独立并且是唯一的。最终，所有的分支中
的文件都会被合并至 `master` 主分支。然后进行发布。如果你只需要源码文件，可以在你获得仓库的副本后，运行下面这条 git 
命令来检出 `source` 分支：

```shell
git checkout source
```


## 概览 ##
下面这个表列出了项目当前的部分功能模块，完整的功能模块定义可以在 [src](https://github.com/Samlv9/SRLIB/tree/master/SRLIB/src) 目录中找到：<br/>
> _<sub>注：这里显示的并不是实时状态的数据。如果你需要最新的状态数据，请移步[提交日志](https://github.com/Samlv9/SRLIB/commits/master)。</sub>_

 模块                   | 状态                    | 更新日期                | 描述
------------------------|------------------------|------------------------|------------------------
 [core][pkg-core]       | Working...             | 2015/11/05             | 用于提供最顶层核心的函数/类型。
 [codec][pkg-codec]     | N/A                    | N/A                    | 用于提供编码和解码（encoder/decoder）类。包括：UTF8/Base64/Hex，JPEG/PNG/BMP，AAC/MP3，H.264/VP8 等文本，图片，音频，视频解码类型。
 [crypto][pkg-crypto]   | N/A                    | N/A                    | 用于提供安全加密的类。包括：MD4/MD5/SHA-1，RSA，DES/AES 等哈希函数，对称/非对称加密函数。
 [events][pkg-events]   | N/A                    | N/A                    | 用于提供对 [DOM Level 3 Events][wd-level-3-events] 定义的事件系统的 Javascript 版本的实现。
 [network][pkg-network] | N/A                    | N/A                    | 用于提供网络通信的类型。包括：Http 下载/上传、流处理、Socket 连接、P2P 连接等。


## 开发指南 ##
1，使用 [Git Shell](http://git-scm.com/download/)、[Github Windows](https://desktop.github.com/) 或者 [Microsoft Visual Studio][microsoft-visual-studio] 的**团队资源管理器**来获取该项目的副本。

* **Git Shell：** `git clone https://github.com/Samlv9/SRLIB.git`
* **Github Windows：** [Clone in Desktop](github-windows://openRepo/https://github.com/Samlv9/SRLIB)
* **团队资源管理器：** 点击页面右侧栏的 **`Open in Visual Studio`** 按钮

2，将当前目录切换至 `解决方案` 目录中：
> _<sub>注：所有的 git 操作都是在 **`解决方案`** 目录中进行的。如：`git checkout source`。</sub>_

```shell
cd ./SRLIB
```

3，从 `解决方案` 目录切换至 `项目` 目录中：
> _<sub>注：所有针对项目的编译和测试都是在 **`项目`** 目录中进行的。如：`npm build`。</sub>_

```shell
cd ./SRLIB
```

4，安装 [NodeJS](https://nodejs.org/) 依赖项：
```shell
npm install
```

5，编译 `src/main.js` 文件：
```shell
npm build
```

6，将 `dist/main.js` 文件引入你的项目中。
```html
<script src="dist/main.js"></script>
```

7，你可以通过 `npm test` 命令来确保你下载的副本是通过编译的。但通常情况这是不必要的。因为该项目使用 [TRAVIS-CI](https://travis-ci.org/) 
进行持续化集成，当项目编译失败时，我们会第一时间收到通知并处理：
```shell
npm test
```

通过在 `src/main.js` 文件添加 [`<reference>`][javascript-intellisense] 来将项目中的模块编译进 `dist/main.js`
文件中，并在你自己的项目中使用。例如，假设你打算使用 `core/derive` 方法来作为你项目的原型继承函数，编辑 `src/main.js` 
添加下面这条 [`<reference>`][javascript-intellisense] 引用语句，并使用 `npm build`<sup>[步骤5]</sup>重新编译 `src/main.js`。

```javascript
/// <reference path='core/derive.js' />
/// 由于 <reference> 标记只是导入一个局部变量至当前作用域中，因此你可以使用任意一种方式将局部变量 
/// `derive` 公开，比如： `window.derive = derive;`

window.SRLib = { 
    derive: derive
};
```

然后就可以在你的项目中像下面这样使用 `derive` 函数：
```javascript
/// MyProject.js

function SuperClass() {
    /// 父类
}

function ChildClass() {
    /// 子类
}

SRLib.derive(SuperClass, ChildClass);
```

**如果你希望直接包含 `SRLib` 项目中的模块，这样你就不需要通过 `window` 对象来公开局部变量。可以像这样编辑 `src/main.js`：**
```javascript
/// src/main.js
/// <reference path='core/derive.js' />

function SuperClass() {
    /// 父类
}

/// `derive` 函数存在于当前作用域中。
function ChildClass() {
    /// 子类
}

derive(SuperClass, ChildClass);
```

`src/main.js` 不需要添加**函数闭包块**，因为在执行 `npm build` 编译时，会自动给该文件前后添加下面这段：
```javascript
(function main( domain, undefined ) { 'use strict';
/// 这里会被 `src/main.js` 中的内容替换。
}(this || window));
```

下面是一个完整的例子：
```javascript
/// src/main.js
/// <reference path='core/derive.js' />

function SuperClass() {
    /// 父类
}

SuperClass.prorotype.say = function say() {
    console.log("ctor:", this.constructor);
}

function ChildClass() {
    /// 子类
}

derive(SuperClass, ChildClass);

var obj = new ChildClass();
obj.say();
```

执行 `npm build` 后输出的 `dist/main.js`：
```javascript
/// dist/main.js

(function main( domain, undefined ) { 'use strict';
    /// `derive` 函数的源代码会被编译进来。
    function derive() { ... }

    function SuperClass() {
        /// 父类
    }

    SuperClass.prorotype.say = function say() {
        console.log("ctor:", this.constructor);
    }

    function ChildClass() {
        /// 子类
    }

    derive(SuperClass, ChildClass);

    var obj = new ChildClass();
    obj.say();
}(this || window));
```

**使用 [`<reference>`][javascript-intellisense] 标记注意事项：**
* 标记中使用的单行注释是 3 个斜杠（`///`）。
* 标记需要放在 `src/main.js` 文件的头部（该标记之前不能有任何可执行的代码）。
* 更多详情请参考：[Microsoft Javascript Intellisense](https://msdn.microsoft.com/en-us/library/bb385682(v=vs.110).aspx)。


## 工具 ##

 名称                   | 状态                    | 更新日期                | 描述
------------------------|------------------------|------------------------|------------------------
 [reference][toolkit-1] | N/A                    | N/A                    | 用于解析模块的引用以及基于引用关系生成最终代码。


## 问题 ##
1，如果你在使用过程中遇到任何问题，可以将你的问题提交至 [Issus](https://github.com/Samlv9/SRLIB/issues) 中。<br/>
2，如果你希望改进项目中的某个功能，可以参考[开发指南](#开发指南)中的步骤拷贝一份副本至本地，并使用你改进后的代码发起一个 [Pull Request](https://github.com/Samlv9/SRLIB/pulls) 来将你的代码合并至当前项目中。<br/>


[pkg-core]: https://github.com/Samlv9/SRLIB/tree/master/SRLIB/src/core
[pkg-codec]: https://github.com/Samlv9/SRLIB/tree/master/SRLIB/src/codec
[pkg-crypto]: https://github.com/Samlv9/SRLIB/tree/master/SRLIB/src/crypto
[pkg-events]: https://github.com/Samlv9/SRLIB/tree/master/SRLIB/src/events
[pkg-network]: https://github.com/Samlv9/SRLIB/tree/master/SRLIB/src/network
[toolkit-1]: https://github.com/Samlv9/SRLIB/blob/toolkit/SRLIB/toolkit/reference/index.js
[git-branch-doc]: http://git-scm.com/docs/git-branch
[microsoft-visual-studio]: https://www.visualstudio.com/
[javascript-intellisense]: https://msdn.microsoft.com/en-us/library/bb385682(v=vs.110).aspx#ReferenceDirectives
[wd-level-3-events]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120906/