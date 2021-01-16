# SSH协议

守护线程`sshd`

SSH服务端由两部分组成：openssh(提供ssh服务)、openssl(提供加密的程序)

SSH免密登录

ssh-agent表示ssh-client启动，sshd表示ssh-server启动了

ssh vs ssh-agent vs sshd

ssh是客户端
sshd是服务端
ssh-agent启动之后，如果通过公钥做身份验证，只需第一次输入密码

ssh协议为什么安全

通信原理