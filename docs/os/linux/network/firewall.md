# Linux中的防火墙

## firewalld

添加80端口

```bash
firewall-cmd --zone=public --add-port=80/tcp --permanent
```