# Java中的输入与输出

## switch语句踩坑记录

::: warning
Constant expression required
:::

```java{4}
Map<Integer, Integer> map = orderService.findOrderCountByUserId(userId);
map.forEach((type , count) -> {
    switch (type) {
        case OrderStatusType.WAITING_DELIVERED.value():
            break;
    }
});
```