# Spring Framework

https://www.tutorialspoint.com/spring/spring_bean_scopes.htm

## 应用上下文


ApplicationListener


如何判断service方法中开启了事务？
在springservice中开启事务，如果一个方法没有开启事务，中间调用开启事务的方法，不会开启事务
```java{4}
@Override
public Long post(Post post, String content, List<PostImageGoods> imageGoodsList) {
    final String key = "upload-post-" + post.getTopicId();
    try (AutoUnlock ignored = LockUtils.autoLock(key, 3)) {
        return savePost(post, content, imageGoodsList);
    } catch (InterruptedException e) {
        throw new ValidationRuntimeException(StatusCode.CLIENT_ERROR_ACCESS_TOO_FREQUENTLY_CODE, e);
    }
}
```

Spring事务的配置，传递级别

如果一个方法开启了事务，事务中有一个线程，线程里面的方法抛异常，事务会回滚吗？
