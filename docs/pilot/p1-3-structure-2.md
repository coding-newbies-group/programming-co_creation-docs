# 程序的基本结构（二）：操作符与函数

如果源代码是我们写出来的故事，那么“操作符与函数”就是故事中的事件，是电影中的一幕幕场景。

上一章里我们说过，数据就是程序里的角色，同类型的数据之间可以对话和互动，而操作符与函数就是他们之间互动的方式。我们先来看操作符。

## 常用操作符

Python（其他编程语言也差不多）有好多类操作符，我们这里介绍最常用的四类：算术操作符、大小比较操作符、赋值操作符和逻辑运算操作符。

### 算术操作符

算术操作符就是加减乘除之类的，专门针对整数和小数。


```python
a = 6
b = 30
f = 3.14
g = 0.7
```


```python
a + b
```




    36




```python
a - b
```




    -24




```python
a * b
```




    180




```python
b / a
```




    5.0




```python
a * g
```




    4.199999999999999




```python
g / f
```




    0.22292993630573246



我们可以看出，整数之间的加减乘结果还是整数，而除法结果是浮点数（即使除尽了也是）；而浮点数无论是和整数还是浮点数运算，结果都是浮点数。

除了加减乘除，还有一个乘方操作符 `x ** y`，做幂运算，就是
$$
x^y
$$
（x 的 y 次方），其中 x 和 y 都可以是整数或者浮点数，如果都是整数结果也是整数，否则结果是浮点数：


```python
b ** 2
```




    900




```python
b ** a
```




    729000000




```python
f ** a
```




    958.4685972127362




```python
g ** f
```




    0.3262930666604556



最后两个算术运算符是 `//` 和 `%`，是整除运算符，分别用来计算 x 除以 y 的商和余数：


```python
# 计算 30 除以 6 的商
b // a
```




    5




```python
# 计算 30 除以 6 的余数
b % a
```




    0




```python
# 计算 30 除以 4 的商
b // 4
```




    7




```python
# 计算 30 除以 4 的余数
b % 4
```




    2




```python
# 浮点数也可以的
f // 2
```




    1.0




```python
f % 2
```




    1.1400000000000001




```python
g // f # 浮点数除浮点数也没问题
```




    0.0




```python
g % f
```




    0.7



上面算 `f`（值为 `3.14`）除以 2 的余数 `f % 2` 出现了奇怪的结果，这是计算机浮点误差导致的，下面会解释。

### 插播：代码注释

上面的代码中井号 `#` 开始的部分叫做“注释”（井号这个名字是我们中国人才懂的，在英语世界里这个符号有好些个名字，比如 *number*、*pound*、*hash*），注释是源代码里被编译器和解释器忽略的部分，也就是说这部分写了机器也不看，是写给我们人类的。程序复杂起来之后，不管编程语言本身多么易懂或者多么接近自然语言，还是会有看不明白的可能，所以作为一种好习惯我们应该在需要时写下一些重要的注释，方便别人阅读和理解我们写的代码，也方便自己，因为难保过些时自己都忘了为啥这么写！

有不少编程语言还提供配套的工具，可以自动分析源代码里的注释来生成程序文档，比如 Python 的 [pydoc](https://docs.python.org/2/library/pydoc.html)。

注释并非越多越好，注释一定是“光看源代码难以知晓的重要信息”，我个人的风格是程序尽量写得不需要注释，然后再写少量必须注释的内容。比如写了一个经典算法的实现，参考的算法说明可以作为一个链接附上，方便不了解这个算法原理的人参考；再比如某处代码用到了一个临时假定，是未来有可能变化的，也很适合记录下来，并且标记一个 TODO 之类的标签，这样以后你只要全文检索 TODO 就能找出所有这类假定，检查是不是情况已经变化或者有了更好的解决方案，而做出相应修改。

`#` 既可以用在行首也可以在中间，总之 `#` 之后直到行尾的部分就是注释。

因为对编译器和解释器来说，注释无非就是“人类自己看而我不需要理”的意思，所以有时候我们想暂时移除某行代码又不想删掉（因为等下可能还要用），就可以临时在这行代码前加个 `#`，想加回来的时候去掉 `#` 就好了，这也是个常用的手法。

### 大小比较操作符

比较大小的一组操作符，`> < >= <= == !=` 分别是大于、小于、大于或等于、小于或等于、等于和不等于关系。这几个操作符比较它左右的数据的大小关系，如果符合操作符的含义就返回布尔值真（`True`），否则返回布尔值（`False`）。在 Python 里这些操作符不仅可以比较数字，还可以比较其他很多类型的数据，下面有一些简单的例子。


```python
a < b
```




    True




```python
a >= a
```




    True




```python
a <= f
```




    False




```python
a + b == 36
```




    True




```python
a + b != 36
```




    False




```python
'aaa' < 'aab'
```




    True




```python
a * g == 4.2
```




    False



上面的比较有没有什么问题？前面都没啥，但是注意最后一个，a 的值是 6，而 g 的值是 0.7，他们乘起来就是 4.2 啊，为啥最后一个比较返回是 `False` 呢？我们来看看计算机算出来的 `a * g` 是多少：


```python
a * g
```




    4.199999999999999



这是什么鬼啊？不要惊慌，这叫浮点误差，下面来简单解释下。

### 插播：浮点误差

目前我们用的计算机叫“电子计算机”，用电平的高低表示数，电平高的是 1，低的是 0，只有这两种状态，也就是说计算机只认识 0 和 1。要用 0 和 1 表示我们要用到的各种数字，就要采用[二进制](https://zh.wikipedia.org/zh-cn/%E4%BA%8C%E8%BF%9B%E5%88%B6)计数法。

二进制计数法对于整数来说没啥问题，每一个十进制整数都对应唯一的二进制表示，但对于小数来说问题就来了，**绝大部分十进制小数是没法用有限位数表示为二进制小数的**，如果想知道为什么，可以看看[这篇文章](https://www.taowong.com/blog/2018/07/10/principle-of-computer-float-num.html)，如果看不明白也没关系，反正记住这个结论就行了。这个结论决定了在计算机里小数是以一种“近似值”的方式表示的，0.7 在计算机里是个近似等于 0.7 的二进制小数，这个小数乘上 6 之后的结果也是有微小的误差的，转换回十进制小数给我们看结果时就会出现上面那样的奇怪现象。

那么我们怎么解决这个问题呢？分两种情况：
1. 如果需要绝对精确的结果，那么不要用小数，只用整数进行运算，然后自己计算小数点的位置，绝大部分计算器就是这么做的；
2. 如果不需要绝对精确，那么只要结果的误差足够小就可以了，这时候可以用浮点数进行运算，但比较时不要直接比较结果是不是相等（`==`），而用误差范围来比较：


```python
s = 4.2 # 这是预期结果
r = 0.001 # 这是可容忍误差

abs(a * g - s) < r # 如果 (a * g - s) 的绝对值比 r 小，就算结果合格
```




    True



上面的代码里又出现了新东西，`abs(...)` 是什么呢？这是个函数，函数也是一个值，`abs` 函数的值等于后面括号里的值的绝对值。关于函数我们下面会讲到，这是个提前引用（*forward reference*）的例子。

### 赋值操作符

赋值操作符我们都见过和用过了，就是上一章赋值语句里的等号 `=`，正是为了避免和这个操作符冲突，大小比较中的“等于”才会采用双等号 `==` 表示。

赋值操作符本身很简单，就是**把右边的值赋给左边的变量（无论右边的东西多复杂，都先算出它的值）**。比如：


```python
c = a + b # 先计算赋值等号右边的部分，a + b 得到值为 36，把 36 赋给左边的变量 c
c
```




    36



赋值操作符有一些变体，比如下面这个:


```python
c += 2
c
```




    38



上面的 `c += 2` 等价于 `c = c + 2`，你可能觉得 `c = c + 2` 有点怪，赋值操作符左右都有 `c`，但回顾一下赋值操作符的定义，就能理解了：永远要先算出右边的值，`c` 这时的值是 36，那么 `c + 2` 的值就是 38，把 38 赋给左边的变量 `c`，于是 `c` 的值成为 38。而 `c += 2` 没啥特别，就是 `c = c + 2` 的一种简化写法。

类似的还有 `-= *= /= %= **= //=` 这一组赋值操作符的变体，与 `+=` 同理。

### 逻辑运算操作符

逻辑运算操作符是布尔值之间的运算，结果也是布尔值。我们知道布尔值是逻辑上的真和假，而逻辑运算操作符就对应了逻辑代数（也叫布尔代数）里的各种运算。

顺便说一句，逻辑代数可是很有来头的东西，它是数理逻辑的基础，由乔治·布尔（George Boole）创立，所以布尔代数和布尔值都是因为这位奠基人得名；这些理论是逻辑电路的基础，逻辑电路又是电子计算机的基础，所以可以说我们能坐在这里学编程，完全是因为有这些东西存在！

另外逻辑运算也是我们下一章介绍程序中的逻辑判断和分支的基础，所以真的是非常重要的部分。

基本的逻辑运算就三个：`and`、`or`、`not`，即 **与**、**或**、**否**。
* 两个布尔值如果都是“真”，他们的 **与** 运算结果也为“真”，其他情况下结果都是“假”；
* 两个布尔值中只要有一个是“真”，他们的 **或** 运算结果就为“真”，如果两个都是“假”，那么 **或** 运算结果为“假”；
* 布尔值“真”的 **否** 运算结果为“假”，布尔值“假”的 **否** 运算结果为“真”。

通过这三个操作符我们可以组合复杂的逻辑运算：


```python
t = True
f = False
```


```python
t and f
```




    False




```python
t or f
```




    True




```python
not t
```




    False




```python
t and (not f)
```




    True




```python
(not t) or f
```




    False



请务必搞清楚上面每一个式子的含义以及为什么是这个结果。

### 操作符小结

* 操作符是对数据进行操作的一些符号，最常用的有算术运算、大小比较、赋值、逻辑运算等；
* 通过例子学习和掌握常用的这几类操作符；
* 了解代码注释的语法和意义；
* 了解浮点表示误差和规避方法。

## 函数

程序里的函数概念完全来自数学里的函数。我们先来看看数学里的函数。

### 函数的基本概念

在数学里，我们可以定义一个函数，函数有一些*自变量*，也就是一些**输入**，**函数定义**就是定义如何通过这些输入计算出*函数的值*，也就是**输出**。下面是个典型的函数定义的例子：

$$
f(a, b) = \sqrt{a^2 + b^2}
$$
函数定义好之后，随时可以用具体的值送进去算出一个具体的函数值，比如：



$$
f(1, 2) = \sqrt{5}
$$

$$
f(3, 4) = 5
$$

$$
f(2, 6) = 2\sqrt{10}
$$

程序里的函数也是这样，我们先要定义函数，也就是定义它的名字（叫做 **函数名** *function name*）、若干输入变量（叫做 **参数** *argument*）以及如何通过输入变量算出函数的值（叫做 **返回值** *return value*）；一旦定义好，就可以在程序的其他地方随时使用这个函数，给它具体的参数值，它就给出具体的返回值。

### 调用现成的函数

我们先看看怎么用函数，术语叫做函数**调用**（*call*），因为 Python 本身自带了很多已经定义好的函数，我们可以直接拿来用。其中有一些我们之前已经用过了：
* `print(a, b,...)`：在命令行输出界面打印输入的参数（可以是各种类型的数据）；
* `type(x)`：返回参数 x 的数据类型；
* `abs(x)`：返回参数 x（整数或者浮点数）的绝对值。

这几个都是 Python 的内置函数，可以直接用。我们下面来看两个其他的例子。

第一个例子是另一个 Python 内置函数，叫做 `isinstance(x, c)`，它有两个输入参数，第一个是一个数据，第二个是一个数据类型，如果第一个数据是第二个数据类型，`isinstance` 函数返回 `True`，否则就返回 `False`。所以 `isinstance` 可以用来判断某个值或者变量是不是某种类型，下面是例子：


```python
isinstance(a, int)
```




    True




```python
isinstance(a, float)
```




    False




```python
isinstance(g, float)
```




    True




```python
isinstance(True, str)
```




    False




```python
isinstance(True, bool)
```




    True




```python
isinstance('abracadabra', str)
```




    True




```python
isinstance(True, bool) and not isinstance('abracadabra', float)
```




    True



同样的，请务必搞清楚上面每一个式子的含义以及为什么是这个结果。

第二个例子是 Python 的平方根函数 `math.sqrt(x)`，这个函数前面有个 `math`，这表示函数 `sqrt(x)` 不在 Python 的内置环境中，而是放在一个叫 `math` 的函数包（学名叫 **模块** *module*）里，关于模块我们以后会专门介绍。要使用这种函数，第一种方法是：
* 先 **引入**（*import*）对应的函数包；
* 使用时函数名前面要带上模块的名字，中间加个 `.`。

就像下面这样：


```python
import math
math.sqrt(16)
```




    4.0



另外一种方法是，从对应的模块里指明引入这一个函数，使用时就不用带上模块名了：


```python
from math import sqrt
sqrt(40)
```




    6.324555320336759



我们可以看到 `sqrt(x)` 函数可以接受整数或者浮点数输入，返回值是浮点数。

### 定义函数

有了 `sqrt(x)` 这个函数，我们可以定义一个函数来实现前面举例的那个数学里的函数 `f(a, b)` 了。在 Python 里函数的定义以关键字 `def` 开始，后面依次是函数名、小括号括起来的参数列表和一个冒号，之后的代码就是函数的算法定义，直到关键字 `return` 开始的 **返回语句**，这个返回语句会终止函数的运行，并把 `return` 后面的值作为函数的返回值，回到调用函数的地方。看起来有点抽象，我们看看例子： 


```python
from math import sqrt

def f(a, b):
    return sqrt(a**2 + b**2)

result = f(3, 4)
print(result)
```

    5.0


上面的代码很短，但是很重要，我们务必要搞懂这里的每一个细节。

首先第一行是引入 `sqrt(x)` 函数，因为我们下面定义的函数要用到它。

然后是函数定义 `def f(a, b):`，关键字 `def` 打头，后面是函数名 `f`、参数列表 `(a, b)` 和一个冒号，这表示函数 `f` 接受两个参数，一个叫 `a` 一个叫 `b`。下面一行就是**函数体**（*function body*），里面可以写很多东西，只要最后有一个 `return` 指明函数返回值就行，注意 Python 的函数可以没有返回值（`return` 后面什么都不写就行了），也可以返回多个值（`return` 后面写多个值，用逗号隔开）。

我们这个例子因为很简单，就一句话就能搞定：函数返回值等于 a 平方加 b 平方再开方。注意函数体的代码缩进了一些，和其他的行都是顶着行首书写不一样，这是 Python 的缩进规则要求的，下面的插播会做出解释。

然后是调用函数的例子，它是这么进行的：
1. 首先用 3 和 4 作为参数来调用 `f()` 函数；
2. 函数 `f()` 开始执行，把值 3 赋给参数变量 a，4 赋给 b，然后执行函数体；
3. 函数体计算出返回值 5.0 并返回；
4. 用返回值 5.0 替换掉 `f()` 的位置，相当于执行赋值 `result = 5.0`
5. 用 5.0 作为参数值调用内置的 `print()` 函数，打印出 5.0（`print()` 没有返回值）。

顺便说一句，熟练之后我们可以把后两行简化成一句 `print(f(3, 4))`，效果是完全一样的。

### 插播：代码缩进

所谓代码缩进就是一行代码不顶格写，而是在行首空若干格再写。缩进可以很多层，比如 Python 中第一层缩进空四格，第二层缩进空八格，第三层缩进空十二格，依此类推。程序员都喜欢用“**等宽字体**（*fix-width font*）”，就是因为等宽字体在缩进时非常整齐美观。

缩进是为了让代码层次更加鲜明地呈现出来。比如上面函数定义的代码，函数体的部分是“隶属于”函数定义 `def` 语句的，是它的组成部分，所以缩进一层表示这个从属关系；而后面的函数调用则不是，所以最后两行不缩进，和 `def` 语句平齐，代表是同一层级的代码。

在 Python 中缩进是强制的，如果不进行正确的缩进，比如如果函数体没有正确的缩进，解释器会因为找不到必须的部分而报错。

目前主流的程序编辑器都提供了自动缩进、自动排版的功能，在 VSCode 和 Jupyter Notebook 中书写代码时大部分时候都会自动正确的缩进，所以很方便。

对于初学者来说，知道有这么回事，然后多看，慢慢就会习惯成自然，和多听多看学语言是差不多的道理。

### 函数的意义

函数是编程中最重要的概念之一。实现它有助于我们实现程序的“**模块化**（*modulization*）”，我们可以把特定的工作用一个函数来实现，然后在需要的地方反复地调用它。这是一种代码重用的方法，一个函数就好像乐高积木里的一个组件，我们可以通过组合各种不同功能的函数来实现复杂的目标。

函数还是协作编程的基础。如果我们实现了一个很有用的函数，我们可以写一个文档说明函数的输入参数和返回值是什么，这样的文档叫做**调用接口**（*interface*），别人都可以照此使用我们写的函数，甚至不需要了解它是怎么实现的（比如我们就直接拿了 `math.sqrt()` 来用而不需要自己写一个）。函数天生就把自己的接口和实现分离开，让协作和复用成果更容易。

**模块化** 和 **接口独立** 是编程时最重要的两个思维模型（没有之一），我们在后面还会深入介绍。

### 函数小结

* 我们可以通过声明函数名、函数参数列表以及计算函数返回值的算法来定义一个函数；在 Python 中通过 `def` 和 `return` 两个关键字来做这件事；
* 定义好的函数可以随时被调用，送入具体的参数值，得到函数返回值，返回值可以用于赋值也可以用作参数值来调用其他函数；
* 函数是编程中重要的概念，我们在第四部分还会深入讲解；
* 了解 Python 的缩进规则。