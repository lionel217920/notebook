# JQuery选择器的一些注意事项

## 用`$([子节点],[父节点])`分割的选择器
```html
<div class="form-group verify-param">
    <label class="col-sm-2 control-label">型号</label>
    <div class="col-sm-10">
        <select class="form-control" name="model_number">
            <option>请选择</option>
        </select>
    </div>
</div>
<div class="form-group verify-param">
    <label class="col-sm-2 control-label">含量</label>
    <div class="col-sm-10">
        <select class="form-control" name="content">
            <option>请选择</option>
        </select>
    </div>
</div>
```

```js{3}
function selector() {
  $(".verify-param").each(function() {
    $(this, "label").text();
    $("label", this).text(); // 错误示例，会获取全部内容
  });
}
```

## `parent > child`子节点选择器
::: warning
适用于元素，子节点和父节点都是元素选择器
:::
```html

```
