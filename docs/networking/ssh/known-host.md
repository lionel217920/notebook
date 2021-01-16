# 关于known_host文件

删除`known_hosts`上的一个入口：

```sh
ssh-keygen -R <hostname or IP address>
```

`known_hosts` and `authorized_keys`