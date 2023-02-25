---
title: 6.第一段Python代码
sidebar_position: 6
---

## 1.安装python

### 1.1.Windows

1. 访问 [Python官方下载页面](https://www.python.org/downloads/)，然后直接点击“Download Python 3.11.2”开始下载Python安装包：

![](p0-6-python.assets/image-20230222195705541.png)

2. 点击另存为，将Python安装包保存在电脑上，比如选择“桌面”：

![](p0-6-python.assets/image-20230222195857243.png)

3. 如果系统弹出如下提示，选择运行即可：

   ![](p0-6-python.assets/image-20230222200252815.png)


4. 注意：勾选“Add python.exe to PATH”，这项默认是不勾选的，然后点击“Install Now”，开始安装Python：

   ![](p0-6-python.assets/image-20230222200409378.png)

5. 点击“Disable path length limit”，然后点击右下角的“Close”：

   ![](p0-6-python.assets/image-20230222200550262.png)

### 1.2.Mac

1.访问 [Python官方下载页面](https://www.python.org/downloads/)，会自动识别为Download the latest version for macOS，直接点击“Download Python 3.11.2”开始下载Python安装包：
![Alt text](MacPython00001.jpg)
2.双击下载好的安装包运行
![Alt text](MacPython00002.jpg)
3.从介绍页签点击继续
![Alt text](MacPython00003.jpg)
![Alt text](MacPython00004.jpg)
![Alt text](MacPython00005.jpg)
4.弹出许可协议，点击同意
![Alt text](MacPython00006.jpg)
5.点击安装
![Alt text](MacPython00007.jpg)
6.点击关闭
![Alt text](MacPython00009.jpg)
7.您要将“Python”安装器移到废纸篓吗？点击保留。
![Alt text](MacPython00010.jpg)
8.检查Python 3.11.2是否安装完成，在Terminal中输入命令后按回车键
查看python解释器版本
`python3 --version`
查看python解释器版本并可以直接输入代码运行
`python3`
输入第一段代码
`print("Hello Python")`
退出python
`exit()`
![Alt text](p0-6-python.assets/MacPython00011.jpg)
其他安装方式:用Git安装
`brew install git python`



## 2.在终端中打开Python

打开Windows PowerShell，输入`py`，进入Python

```powershell
py
```

![](p0-6-python.assets/image-20230222200829479.png)

接着输入下面的内容，让Python在终端中“打印”出“Hello Python”：

``` python
print("Hello Python")
```

![](p0-6-python.assets/image-20230222201018915.png)

再试试下面的命令，“见识”一下一个错误的输入，Python的报错是什么样的，好像没什么可怕的

```python
print(Hello Python)
```

![](p0-6-python.assets/image-20230222201127859.png)

最后，我们输入下面的命令，退出Python终端，但仍然在PowerShell终端中，请注意观察区别：

```python
exit()
```

![](p0-6-python.assets/image-20230222201251544.png)

好了，后面就可以开始我们编程课的正式学习了。