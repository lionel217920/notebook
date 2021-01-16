为什么`Map`不继承`Collection`接口???


```java
MessageType currentType = null;
Map<String, Long> mapCount = behaviorService.unreadMessageCount(userId);
Iterator<Map.Entry<String, Long>> iterator = mapCount.entrySet().iterator();
while (iterator.hasNext()) {
    currentType = MessageType.valueOf(iterator.next().getKey());
}
```
```java
MessageType currentType = null;
Map<String, Long> mapCount = behaviorService.unreadMessageCount(userId);
for (Map.Entry<String, Long> stringLongEntry : mapCount.entrySet()) {
    currentType = MessageType.valueOf(stringLongEntry.getKey());
}
```

map是可以存null，各种map不一样啊


computeIfAbsent