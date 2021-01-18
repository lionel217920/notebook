# Linux中的防火墙

## firewalld

### 基本操作命令

- 启动防火墙

```bash
systemctl start firewalld.service
```

- 关闭防火墙

```bash
systemctl stop firewalld.service
```

- 查看防火墙状态

```bash
systemctl status firewalld.service
```

- 开机启用防火墙

```bash
systemctl enable firewalld.service
```

- 开机禁用防火墙

```bash
systemctl disable firewalld.service
```

### 开放端口配置

- 添加80端口

```bash
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

- 添加8080端口

```bash
firewall-cmd --zone=public --add-port=8080/tcp --permanent 
```

- 查看开放的端口

```bash
firewall-cmd --list-all
```

- 重载防火墙配置

```bash
firewall-cmd --reload
```

- 查看所有打开的端口

```bash
firewall-cmd --zone=public --list-ports
```

### 其他辅助命令

- 查看版本

```bash
firewall-cmd --version
```

- 查看帮助

```bash
firewall-cmd --help
```