分布式锁的正确实现方式

分布式锁可以用在单机上


使用分布式锁的注意事项：
加了分布式锁，里面的操作要`粒度最小`，举个栗子：

社区发帖功能，社区后台处理发帖逻辑，`savePost`加上了分布式锁，这时有十个线程同时发帖，在发帖逻辑中有上传图片，图片读写操作，加入`savePost`方法执行了10秒中，那么最后一个人就要等待`100`秒中，这样的场景是不太现实的。

加锁的原则，加锁后里面要有`保存的逻辑`，错误示例。一个线程获取楼层数为10，另一个线程也获取楼层数为10，导致楼层数相同，无效加锁

```java
private Integer getPostFloor(Long topicId) {
    final String key = "get-post-floor-";
    try (AutoUnlock autoUnlock = LockUtils.autoLock(key + topicId, 3)) {
        Topic topic = topicService.findByPropertyAndValue(Topic.ID_PROPERTY, topicId);
        return topic.getTotalFloor() + 1;
    } catch (InterruptedException e) {
        throw new ValidationRuntimeException(StatusCode.CLIENT_ERROR_ACCESS_TOO_FREQUENTLY_CODE, e);
    }
}
```

加锁放在读写事务外层
