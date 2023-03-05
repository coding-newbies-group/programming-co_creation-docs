# 创建Mixin机器人

因为隐私原因，有些场景最好是用户自己创建一个机器人去获取一些信息，比如获取自己的所有转账记录，获取多签地址余额等，这是一篇创建一个Mixin机器人的保姆教程，帮助缺少一些计算机知识的朋友创建一个Mixin机器人。

这是一篇文章，有可能的话如果内容不适用了，会持续更新，作为一篇基础文章可以方便被大家引用。

里面的内容不能帮助您搞懂是什么？为什么？能帮助您实现Mixin机器人运行起来。

本文以MAC为例，Windows见[创建Mixin机器人-Windows](./p1-6-1-mixinbot-windows.md),其他操作系统类似。


## 需要使用到的工具

* VSCode
* Nodejs

## 1.工具准备

### 1.1.安装VSCode

VSCode是一个写代码的工具，我们需要在这个软件中，编写代码。

在VSCode[官方网站](https://code.visualstudio.com/)下载VSCode安装包，点击下图中的”Download for Windows“按钮开始下载。
![imgs/Robot2023-02-04_20-37-49.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-37-49.jpg?raw=true)

下载后，双击打开安装包，一路点击下一步，按照默认选项安装。

### 1.2.安装Nodejs

在Nodejs[官方网站](https://nodejs.org/zh-cn/)下载安装包，点击下图中绿色按钮，如”18.14.0长期维护版“开始下载。

![Robot2023-02-04_20-37-50](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-37-50.jpg?raw=true)

双击打开下载后的安装包，开始安装
![Robot2023-02-04_20-40-00](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-40-00.jpg?raw=true)

进入了介绍标签窗口，点击继续
![Robot2023-02-04_20-40-44](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-40-44.jpg?raw=true)

进入许可标签窗口，点击继续

![Robot2023-02-04_20-41-33](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-41-33.jpg?raw=true)

出现提示窗口，点击同意
![Robot2023-02-04_20-42-55.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-42-55.jpg?raw=true)

进入安装类型窗口，点击更改安装位置或直接默认安装位置点击安装
![imgs/Robot2023-02-04_20-45-00.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-45-00.jpg?raw=true)

进入安装窗口，正在安装中
![imgs/Robot2023-02-04_20-45-37.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-45-37.jpg?raw=true)

完成安装，点击关闭

![imgs/Robot2023-02-04_20-45-58.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-45-58.jpg?raw=true)

提示：是否将安装包删除，点击移到废纸篓
![imgs/Robot2023-02-04_20-46-54.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-46-54.jpg?raw=true)

## 2.准备Mixin机器人
### 2.1.登录Mixin开发者后台

首先，我们需要登录开发者后台。

通过浏览器，访问：https://developers.mixin.one/dashboard ，会弹出如下页面。

![imgs/Robot2023-02-04_20-51-00.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_20-51-00.jpg?raw=true)


用Mixin Messenger扫描网页中的二维码，就可以进入到下面的页面：开发者后台。

![imgs/Robot2023-02-04_21-06-02.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-06-02.jpg?raw=true)

这个一个欢迎页面，页面中暂时没有任何应用




### 2.2.填写Mixin机器人信息

点击创建，填写配置信息，创建第一个Mixin机器人
![imgs/Robot2023-02-04_21-25-11.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-25-11.jpg?raw=true)

如图，填写每一项内容，填写完成后，点击页面底部的保存按钮，**记下来您的机器人Mixin ID**，在Mixin Messenger中添加这个机器人。


### 2.3.获取Mixin机器人密钥

要想能利用机器人去做事情，需要拿到机器人的控制权，拥有机器人密钥的人，就拥有机器人的控制权。

如下图，点击”密钥“标签页，然后点击蓝色的”Ed25519私钥“按钮，生成该机器人的私钥信息

![imgs/Robot2023-02-04_21-26-44.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-26-44.jpg?raw=true)

接下来，点击弹出窗口的”是的“按钮，重置（生成）机器人的私钥信息：

![imgs/Robot2023-02-04_21-27-26.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-27-26.jpg?raw=true)

然后，如下图，点击复制按钮将生成的私钥信息复制并保存下来，或直接点击下载按钮，下载一个文件名后缀为json的文件，这些信息我们后面会用到。

![imgs/Robot2023-02-04_21-28-28.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-28-28.jpg?raw=true)

再次强调，只要拥有了机器人的私钥信息，就拥有了机器人的控制权，只要再生成一次新的私钥信息，旧的私钥信息就失效了。

## 3.初始化机器人

打开Terminal终端，按 键盘上的`Command`+`Space`组合键，在弹出的聚集搜索框中输入`Terminal`后回车

![imgs/Robot2023-02-04_21-28-29.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-28-29.jpg?raw=true)

### 3.1.创建目录并初始化

如下图，通过输入`mkdir multisig`命令+按`Return`回车键，创建一个名为`multsig`的文件夹
![imgs/Robot2023-02-04_21-28-30.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-28-30.jpg?raw=true)

然后通过`cd multisig`命令+按`Return`回车键，将命令行切换到`multsig`目录：

![imgs/Robot2023-02-04_21-28-32.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-28-32.jpg?raw=true)

执行`npm init -y`命令+按`Return`回车键，初始化这个目录，我们后面就开始在这个目录下面写代码了

![imgs/Robot2023-02-04_21-28-33.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-28-33.jpg?raw=true)

### 3.2.安装 mixin-node-sdk

执行`npm install mixin-node-sdk`，安装`mixin-node-sdk`:

![imgs/Robot2023-02-04_21-34-38.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-34-38.jpg?raw=true)

执行`code .`用`vscode`打开当前目录
![imgs/Robot2023-02-04_21-28-34.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-28-34.jpg?raw=true)

可以看到里面有一个名为`node_modules`的文件和名为`package-lock.json`和`package.json`的两个文件：

![imgs/Robot2023-02-04_21-35-28.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-35-28.jpg?raw=true)

### 3.3.初始化Mixin机器人

点击新建文件图标，创建一个名为`index.js`的文件：

![imgs/Robot2023-02-04_21-36-39.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-36-39.jpg?raw=true)

将下面的内容复制粘贴到`index.js`文件内

```js
const { BlazeClient } = require("mixin-node-sdk");
const client = new BlazeClient(
  {
    pin: "975262",
    client_id: "b339c419-305a-492d-af4e-85a127305f85",
    session_id: "431e9d82-2a7e-4a88-ae62-fdef10bac0fc",
    pin_token: "slt8tiFJSPpvNyqD1oDgtKErBxiduls85Nag1_3XcQ8",
    private_key:
      "r5qH3113MubFdUwZWyYkj6j7jkwaeBdNFX-abahbwi7RgkBarUz8Rd2_hXYlHj3KglFItT-qpfTRAhhyvZS6Sg",
  },
  // 上面{ }内的信息替换成您自己Mixin机器人的私钥信息
  { parse: true, syncAck: true }
);

client.loopBlaze({
  onMessage(msg) {
    client.sendMessageText(msg.user_id,"我的第一个Mixin机器人")
  },
});
```
其中3-12行内容是前面生成的机器人私钥，将刚才生成的私钥复制粘贴到这个位置替换一下，如果找不到了，再去开发者页面生成一份即可，注意第12行后面需要保留`,`逗号。
![imgs/Robot2023-02-04_21-40-43.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-40-43.jpg?raw=true)

至此，机器人就准备好了。
## 4.让机器人动起来

回到Terminal终端，在命令行中执行`node index.js`，光标会呈现一个闪烁的状态：

![imgs/Robot2023-02-04_21-40-44.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-40-44.jpg?raw=true)

去Mixin，添加你的机器人，跟您的机器人打个招呼：

![imgs/Robot2023-02-04_21-40-45.jpg](https://github.com/Ayan0217/mixchat-docs/blob/master/articles/create-mixin-bot/imgs/Robot2023-02-04_21-40-45.jpg?raw=true)

至此，您的机器人就运行起来了，给它发任何消息，暂时它都只会回您这句话：“我是你的机器人朋友”,等学了更多的编程知识，可以让机器人做更多事情。

希望对您有帮助，如果有任何问题，可以来Mumu的小密圈交流：7000104210


[def]: https://raw.githubusercontent.com/vwumumu/mixchat-docs/master/articles/create-mixin-bot/imgs/image-20230130150035125.png