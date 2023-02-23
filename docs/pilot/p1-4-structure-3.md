# 程序的基本结构（三）：逻辑判断与分支

如果源代码是我们写出来的故事，那么“逻辑判断与分支”就是故事中的情节编排，是场景之间的关联、排列和衔接——这一点程序和小说、影视剧不那么相近，倒是更像电子游戏。游戏是互动性最强的艺术形式，可以根据玩家的行为走向不同的情节，发生不同的事件和冲突，这种分支多样性极大地增加了表现力和趣味性。

程序也一样，如果一个程序只能顺序一条一条指令执行，能表达的东西就太少了。我们需要根据输入的不同执行不同的指令，最终给出不一样的结果，这样程序才有价值。所以所有的编程语言都会提供逻辑判断和分支执行的能力。

## if...else 语句

所谓分支，其实也很简单，就是“如果这样就 A 否则就 B”，通过这个句式的组合可以实现无穷无尽的变化，这个句式翻译成 Python 的语法就是：

```python
if X:
    A
else:
    B
```

X 是一个“逻辑判断”，其结果要么是真（*True*）要么是假（*False*）；A 和 B 是两个代码段（*code block*），分别缩进以表示从属于 `if` 和 `else`。上面的代码意思是：如果 X 是真就执行代码段 A，否则就执行代码段 B。

Python 还可以连着写好几个 `if`，比如：

```python
if X:
    A
elif Y:
    B
else:
    C
```

这里的 `elif` 是 *else if* 的简化写法，整个意思是：如果 X 是真就执行 A（不管 Y 如何），否则继续判断 Y——如果 Y 是真就执行 B，否则就执行 C。

下面我们重点看看 X、Y 这些所谓“逻辑判断”可以是什么东西。

## 逻辑表达式

只要最终给出一个逻辑真值或假值的东西都可以算作“逻辑判断”，我们大致分分类可以有这么些：
* 布尔类型的变量或者值，要么是 `True` 要么是 `False`；
* 上一章介绍的**大小比较操作符**的运算结果，例如 `a <= 6` `a + b == c` 这类；
* 返回布尔值的函数，例如我们上一章介绍的 `isinstance()`；
* 上面这些东西通过上一章介绍的**逻辑运算操作符**组合起来，例如 `(a > 1) and (a <= 6)` `isinstance(x, int) or isinstance(x, float)`。

这些东西通称“逻辑表达式”，因为其结果最终都是一个逻辑真值或者假值，根据其真假 `if...else` 语句就知道到底应该执行哪一个分支。我们来看例子。


```python
from random import randrange
n = randrange(1, 100)
if n % 2 == 0:
    print(n, '是偶数')
else:
    print(n, '是奇数')
```

    94 是偶数
    

上面的代码首先引入 `random` 模块里的一个函数 `randrange()`，然后调用这个函数来生成一个 1~100 之间的随机数并赋给 n——我们先不去细究这里面的东西，知道这个结果就好，关键是下面的 `if...else` 语句：如果 n 除以 2 的余数是 0（还记得上一章我们介绍的整除操作符 `//` 和 `%` 吧），就打印 ‘n 是偶数’，否则打印 ‘n 是奇数’。由于 n 是随机生成的一个数，所以你可以反复多次运行上面这段代码（运行的方法是选择上面这个 *cell*，按 ⌃+回车），看看不同的结果。

有了逻辑判断和条件分支，我们可以做好多事情了，比如我们可以实现一个算绝对值的函数：


```python
def abs(x):
    if x >= 0:
        return x
    else:
        return -x
```

这个函数非常简单，如果是大于等于零的数就直接返回这个数，否则返回它的相反数，我们可以测试下：


```python
abs(42)
```




    42




```python
abs(-3.14)
```




    3.14



我们还可以实现一个我们自己的 `type()` 函数，和官方的 `type()` 功能也差不多，即返回一个变量或者值的数据类型：


```python
def type_0(x):
    if isinstance(x, bool):
        return 'bool'
    elif isinstance(x, int):
        return 'int'
    elif isinstance(x, float):
        return 'float'
    elif isinstance(x, str):
        return 'str'
    else:
        return 'unknown'
```


```python
type_0(42)
```




    'int'




```python
type_0('abracadabra')
```




    'str'




```python
type_0(False)
```




    'bool'




```python
type_0([1, 2, 3])
```




    'unknown'



最后一个例子显示出我们的 `type_0` 实现和系统的 `type` 还是有点差距，不过没关系，我们才刚开始嘛。

## 万物皆为布尔值

我们上一节列出了几类逻辑表达式，它们都可以放在 `if` 后面做逻辑判断，但可以放在 `if` 后面的远不止这些，事实上**几乎任何东西**都可以。因为 Python 提供了一组规则来判断一个值“相当于”逻辑真还是假，这种定义是在所谓“合理类比”和方便性的基础上做出的，比如：
* 数字 0 “相当于”假，而其他数字都相当于真；
* 空字符串“相当于”假，非空的字符串“相当于”真。

其他很多情形也类似，一般来说 0 啊、空啊之类的都“相当于”假，其他就算真了。如果我们搞不清楚某个东西相当于真还是假，可以借助于内置函数 `bool()`，这个函数可以把任何东西变成布尔值（`True` 或者 `False`），下面是一些例子：


```python
bool(42)
```




    True




```python
bool(0)
```




    False




```python
bool(0.0)
```




    False




```python
bool('')
```




    False




```python
bool('abracadabra')
```




    True




```python
bool('0') # 这是一个非空字符串，不要和 bool(0) 搞混哦~
```




    True




```python
bool([1, 2, 3]) # 和字符串类似，非空列表相当于真，空列表相当于假
```




    True




```python
bool([])
```




    False



这种“相当于”的逻辑，可以帮助我们写出更简洁的代码，比如下面两段代码是完全等价的：


```python
a = 42
if n != 0:
    a = a / n
```


```python
a = 42
if n:
    a = a / n
```

下面两段也完全等价：


```python
s = input('请输入您的姓名')
if s == '':
    print('姓名不可为空，请重新输入')
```

    请输入您的姓名 
    

    姓名不可为空，请重新输入
    


```python
s = input('请输入您的姓名')
if not s:
    print('姓名不可为空，请重新输入')
```

    请输入您的姓名 Neo
    

最后这个例子里的 `input()` 也是 Python 内置函数，它的作用是提示用户输入点什么，并把用户输入的东西作为函数值返回，我们会经常在例子中用到这个东西。

## 小结

* 根据一个逻辑判断做分支执行的能力使得计算机程序真正开始变得“智能”，程序中的角色（变量与值）和交互（操作符与函数）通过它才最终编排成有用的东西；
* `if...else` 的语法简单直观，但通过各种逻辑表达式组合可以实现丰富的逻辑选择；
* Python 中的几乎任何值都能转换为布尔值 `True` 或 `False`，`bool()` 函数可以告诉我们特定值对应的是逻辑真还是假。