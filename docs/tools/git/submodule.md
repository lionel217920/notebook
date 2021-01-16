https://git-scm.com/book/en/v2/Git-Tools-Submodules


## 下载的工程带有submodule

当使用git clone下来的工程中带有submodule时，初始的时候，submodule的内容并不会自动下载下来的，此时，只需执行如下命令

```bash
git submodule update --init
```