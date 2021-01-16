# 跨域

什么事跨域

为什么会出现跨域

浏览器同源策略

使用jsonp跨域？

哪些静态资源是不跨域的


https://m.1haitao.com/app/buy/activity/694377
换成http就跨域了？？？？可能原因：http协议不支持CORS，只有https支持CORS

## 跨域是怎么产生的
由浏览器的同源策略造成的
浏览器执行javascript脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。

## 浏览器同源策略
浏览器安全的基石是"同源政策"

所谓同源是指，`域名`，`协议`，`端口`均相同，不同的话就是跨域

- 域名：
主域名不同，跨域，http://www.hualihai.cn 调用 http://www.1haitao.com
子域名不同，跨域，http://m.1haitao.com 调用 http://www.1haitao.com

- 端口
端口不同，跨域

- 协议
http://www.1haitao.com 调用 https://www.1haitao.com

非同源带来的影响
1. 不能发送AJax请求
2. Cookie不能获取

## 跨域发生在什么场景



## 有哪些办法可以解决

### JSONP

### CORS

```java
    String origin = request.getHeader("origin");
    if(StringUtils.isNotBlank(origin)) {
        response.setHeader("Access-Control-Allow-Origin", origin);
        response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    }
```