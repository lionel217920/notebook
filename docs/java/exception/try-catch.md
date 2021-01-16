
## try with source
语法糖

```java

```


```java
try {
    this.self.deleteById(oldId);
    GoodsIdChangeMessage message = new GoodsIdChangeMessage();
    message.setId(nowId);
    message.setOldId(oldId);
    this.messageQueueService.sendGoodsIdChange(message);
    this.goodsStatisticService.changeGoodsId(nowId, oldId);
} catch (Throwable var17) {
    var7 = var17;
    throw var17;
} finally {
    if (ignored != null) {
        if (var7 != null) {
            try {
                ignored.close();
            } catch (Throwable var16) {
                var7.addSuppressed(var16);
            }
        } else {
            ignored.close();
        }
    }

}
```

```java
try {
    pushUrls(batchUrls);
} catch (IOException | RuntimeException e) {
    log.error(String.format("Log %s will push again failed by %s", count, e.getMessage()), e);
    urlQueue.addAll(batchUrls); //推送失败放入队列重新推送
    break;
}
```
