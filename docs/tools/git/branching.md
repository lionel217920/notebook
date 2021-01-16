---
navbar: false
---

# Git Branching

## How to create a new branch

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


## rebase

```sh
git rebase -i HEAD~15
```

```sh
git rebase -i HEAD~3
```

> CONFLICT (content): Merge conflict in m-model/src/main/java/com/yht/m/enums/ForwardType.java

```sh
git add/rm <conflicted_files>
git rebase --continue
```

## 撤销上一个版本
```sh
git reset --hard HEAD^
```

修改了一个文件，但是没有提交

```bash
git checkout .
```
