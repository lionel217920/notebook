# Authenticating to GitHub

[官方文档地址](https://docs.github.com/en/github/authenticating-to-github)

## Connecting to GitHub with SSH

[官方文档地址](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

### 创建SSH

1. 检查已经存在的SSH Key

```bash
ls -al ~/.ssh
```

2. 检查路径列表下是否已经存在一个公共的SSH Key

- 如果你没有存在的公私秘钥对，或者你不希望使用已存在的去连接GitHub，你可以生成一个新的SSH Key.
- 如果你看到了已经存在的公私秘钥对，并且你也想使用它们去连接GitHub，你可以将你的SSH Key导入到ssh-agent中。

3. 创建一个新的SSH Key

复制如下代码，并将邮箱替换成你的GitHub Email

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

这将会使用你提供的email作为标签，创建一个新的SSH Key

4. 当你确认“输入文件保存key”，按回车键。将会保存到默认的地址，也可以自定义保存地址：
    
```bash
/C/User/Lionel/.github/id_rsa
```

5. 在确认的时候输入一个安全口令。

### 将SSH Key添加到ssh-agent

1. 确保ssh-agent正在运行

```bash
eval $(ssh-agent -s)
```

输出：Agent pid 432

2. 添加你的SSH私钥到ssh-agent，输入之前设置的安全口令
    
```bash
ssh-add ~/.github/id_rsa
```

检查你的私钥添加到ssh-agent：

```bash
ssh-add -l
```

3. 添加SSH Key到你的Github账户

### 测试SSH连接

```bash
ssh -T git@github.com
```

## Troubleshooting commit signature verification

[文档地址](https://docs.github.com/en/github/authenticating-to-github/troubleshooting-commit-signature-verification)

**配置的用户名和邮箱不匹配**

```bash
git config user.name "Lionel"
git config user.email "lionel217920@163.com"
```

### 重置之前的提记录

1. Rebase之前的提交记录

```bash
git rebase -i HEAD~8
```

2. 需要修改某一次的提交

切换至英文输入法, 按下i字母, 即可进入编辑模式, 此时用光标定位到需要修改的那一条记录, **将pick修改成edit**

3. 重置用户信息

```bash
git commit --amend --reset-author
```

4. 继续Rebase

```bash
git rebase --continue
```

当出现 **Successfully rebased and updated refs/heads/master.** 结束

    
    
    
