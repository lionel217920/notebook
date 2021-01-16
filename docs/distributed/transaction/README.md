# 分布式事务

写代码，事务处理的原则，保证数据的一致性
```java
Long postId = postCacheService.saveCachePost(postCache);
postEsService.indexPost(postId);
topicService.operatePostCount(postCache.getTopicId(), 1);
postCacheService.deleteCachePost(postCache);
```

嵌套事务，是传递级别的吗？
事务传递级别，事务隔离，



savePost开启一个读写事务，一个线程过来了，获取楼层，然后楼层+1，这时候事务还没有提交，另一个线程又来了，这样会导致楼层出现重复情况。

::: warning
注意代码第8行，帖子楼层数+1在分布式锁内部完成
:::
``` java{8}
public Long savePost(Post post, String content, List<PostImageGoods> imageGoodsList) {
    final String key = "upload-post-";
    Long postId;
    try (AutoUnlock ignored = LockUtils.autoLock(key + post.getTopicId(), 3)) {
        Topic topic = topicService.findByPropertyAndValue(Topic.ID_PROPERTY, post.getTopicId());
        post.setFloor(topic.getTotalFloor() + 1);
        postId = save(post);
        topicService.incre(post.getTopicId(), Topic.TOTAL_FLOOR_PROPERTY, 1);
    } catch (InterruptedException e) {
        throw new ValidationRuntimeException(StatusCode.CLIENT_ERROR_ACCESS_TOO_FREQUENTLY_CODE, e);
    }
    if (StringUtils.isNotEmpty(content)) {
        postContentService.saveOrUpdate(postId, content);
    }
    if (CollectionUtils.isNotEmpty(imageGoodsList)) {
        postImageService.save(postId, imageGoodsList);
    }
    topicService.operatePostCount(post.getTopicId(), 1);

    return postId;
}
```
