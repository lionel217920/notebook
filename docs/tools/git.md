# Git

## Git配置

 Committer: 刘强 <lionel@liuqiangdeMacBook-Pro.local>
您的姓名和邮件地址基于登录名和主机名进行了自动设置。请检查它们正确
与否。您可以对其进行设置以免再出现本提示信息。运行如下命令在编辑器
中编辑您的配置文件：

    git config --global --edit

设置完毕后，您可以用下面的命令来修正本次提交所使用的用户身份：

    git commit --amend --reset-author

- 全局配置

git config --global user.email “you@example.com”
git config --global user.name “Your Name”

## 重置提交用户信息

1. 修改正确的用户名和邮箱

```bash
git config user.name 'xxx'
git config user.email 'xxx@xx.com'
```

2. Rebase之前的提交记录

```bash
git rebase -i HEAD~8
```

3. 需要修改某一次的提交

切换至英文输入法, 按下i字母, 即可进入编辑模式, 此时用光标定位到需要修改的那一条记录, 将pick修改成edit

4. 重置用户信息

```bash
git commit --amend --reset-author
```

5. 继续Rebase

```bash
git rebase --continue
```

当出现 **Successfully rebased and updated refs/heads/master.** 结束

6. 全部rebase完成之后强退代码到远端

```bash
git push --force  origin  master
```

## 下载的工程带有submodule

https://git-scm.com/book/en/v2/Git-Tools-Submodules

当使用git clone下来的工程中带有submodule时，初始的时候，submodule的内容并不会自动下载下来的，此时，只需执行如下命令

```bash
git submodule update --init
```

## 本地新建项目推送到远端git仓库

- 创建新版本库
git clone git@code.aliyun.com:lionel/txp-framework.git
cd txp-framework
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

- 已存在的文件夹或 Git 仓库
cd existing_folder
git init
git remote add origin git@code.aliyun.com:lionel/txp-framework.git
git add .
git commit
git push -u origin master

## 分支管理

### branch

```sh
git branch feature_transport_specs
```

切换分支

```sh
git checkout hotfix_online
```

将本地分支推送到远端
```sh
git push origin hotfix_transport_property:hotfix_transport_property
```

删除远端分支

```bash
git push origin --delete feature_simple_version
```

### rebase

```bash
git rebase -i HEAD~15
```

```bash
git rebase -i HEAD~3
```

> CONFLICT (content): Merge conflict in m-model/src/main/java/com/yht/m/enums/ForwardType.java

```bash
git add/rm <conflicted_files>
git rebase --continue
```

### 撤销上一个版本
```sh
git reset --hard HEAD^
```

修改了一个文件，但是没有提交

```bash
git checkout .
```

## Gitk

`gitk`is a very powerful GUI tool.