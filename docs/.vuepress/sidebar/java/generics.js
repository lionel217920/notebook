module.exports = [
    {
        title: '泛型程序设计',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            ['/java/generics/', '泛型的基本概念'],
            ['/java/generics/generic-jvm', '泛型原理与虚拟机'],
            ['/java/generics/generic-class', '泛型类'],
            ['/java/generics/generic-method', '泛型方法'],
            ['/java/generics/generic-interface', '泛型接口'],
            ['/java/generics/generic-type-parameter', '类型参数的限定与继承'],
            ['/java/generics/generic-wildcard-type', '通配符类型'],
            ['/java/generics/generic-reflect', '结合反射的使用'],
            ['/java/generics/generic-restrict', '约束与局限性'],
        ]
    },
    {
        title: '使用泛型要注意的',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            ['/java/generics/', 'JSON序列化问题'],
        ]
    }
]