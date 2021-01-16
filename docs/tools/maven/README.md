
```xml
<dependency>
    <groupId>com.yhtframework.dao</groupId>
    <artifactId>yht-dao-mongo</artifactId>
    <scope>provided</scope>
</dependency>
```

Mavend scope的几个属性值使用场景

- compile
编译范围，默认的scope，编译和打包都有效，会包含在war包中。

- provided(已提供范围)
只在编译中加载使用，不会包含在目标包中。

- runtime

- test
测试范围，在编译环境加入classpath，打包时不会加入。

- system
系统范围，需要通过systemPath指定本地jar文件路径，避免使用。

父模块中可以声明`<dependencyManagement>`，这个标签不会真的引入依赖，只是定义公用的坐标，子模块继承后仍然需要指定`<groupId>`和`<artifactId>`，可省略`<version>`标签
