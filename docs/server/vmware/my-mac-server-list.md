# 我的电脑服务器分布

- 所有虚拟机上服务器root密码：__root123__
- 所有机器上服务器通用用户
  - 用户名：__lionel__ 
  - 密码：__liuqiang__

## 服务器列表

|  虚拟机名称  | IP地址 | 镜像文件 | 网络配置 |
| :-----------: | :-----------:  | :-----------------: | :------------: |
| CentOS-7-64-1 | 172.16.203.130 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-2 | 172.16.203.140 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-3 | 172.16.203.150 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-4 | 172.16.203.151 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-5 | 172.16.203.152 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-6 | 172.16.203.201 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-7 | 172.16.203.202 | CentOS-7-x86_64-Minimal-2009.iso | NAT |
| CentOS-7-64-8 | 172.16.203.203 | CentOS-7-x86_64-Minimal-2009.iso | NAT |


## 服务器详细说明

- 172.16.203.130

DNS, Nginx

- 172.16.203.140

Nginx, edas-lightweight-server, openjdk, 

- 172.16.203.150

MySQL，RocketMQ，Zookeeper, es，Redis, openJdk

MySQLroot密码：**Lionel123!**

- 172.16.203.151

MySQL，RocketMQ，Zookeeper, es，Redis, openJdk

- 172.16.203.152

MySQL，RocketMQ，Zookeeper, es，Redis, openJdk

- 172.16.203.201

openjdk, tomcat

- 172.16.203.202

openjdk, tomcat

- 172.16.203.203

openjdk, tomcat 