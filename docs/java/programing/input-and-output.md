# Java中的输入与输出

- System.out.println - 打印输出到标准输出流
- System.in - 读取标准输入流

## 读取输入

通过控制台进行输入，首先需要构造`Scanner对象`

```java
Scanner in = new Scanner(System.in);

System.out.print("what is your name?");
String name = in.nextLine();

System.out.print("how old are you?");
int age = in.nextInt();

System.out.print(name + age);
```

## 格式化输出

```java
double x = 10000.0 / 3.0;
System.ou.println("%8.2f", x); // print is 3333.33
```