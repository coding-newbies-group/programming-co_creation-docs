---
title: 6.做个Mixin机器人
---

下面让我们来做个最基础的Mixin机器人，后面的教学会结合Mixin机器人和JarvaScript一起来学习。

[Windows版教程](./p1-6-1-mixinbot-windows.md)

[Mac版教程](./p1-6-2-mixinbot-mac.md)


## 认识Mixin的消息结构

当部署好上面的机器人后，用下面的代码：

```js
client.loopBlaze({
  onMessage(msg) {
    console.log(msg);
    if (msg.data === "?" || msg.data === "？") {
      client.sendMessageText(msg.user_id, "帮助信息");
    } else if (msg.data === "/") {
      client.sendMessageText(msg.user_id, "命令信息");
    } else {
      client.sendMessageText(
        msg.user_id,
        "请发送“?”获得帮助，或者“/”获得命令列表"
      );
    }
  },
  onAckReceipt() {},
});
```

替换掉：

```js
client.loopBlaze({
  onMessage(msg) {
    client.sendMessageText(msg.user_id,"我的第一个Mixin机器人")
  },
});
```







