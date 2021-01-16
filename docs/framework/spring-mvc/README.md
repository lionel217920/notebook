# Spring MVC框架

> DispatcherServlet

`MultipartResolver`用户文件上传处理。
https://blog.csdn.net/qq_36850813/article/details/80993462

M项目中配置多个解析器，比如`thymeleaf`和`jsp`，配置没有问题，但是view返回的时候总是到排序靠前的解析器。

为什么上传文件需要`文件解析器`，源码怎么实现？
还要添加`commons-fileupload`的依赖


DispatcherServlet.doService