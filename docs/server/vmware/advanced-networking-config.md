# 桥接模式自定义网络配置

* 修改成网段范围是 **172.16.203.128 - 172.16.203.254**
* 网络配置文件目录位置 **/Library/Preferences/VMware Fusion/**

1. 启动虚拟机，查看IP地址

```yml
vmnet8: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether 00:50:56:c0:00:08 
	inet 192.168.168.1 netmask 0xffffff00 broadcast 192.168.168.255
```

2. 修改**nat.conf**文件

```yml
# NAT gateway address
ip = 172.16.203.2
netmask = 255.255.255.0
```

3. 修改**dhcp.conf**文件

```yml
allow unknown-clients;
default-lease-time 1800;                # default is 30 minutes
max-lease-time 7200;                    # default is 2 hours

subnet 172.16.203.0 netmask 255.255.255.0 {
        range 172.16.203.128 172.16.203.254;
        option broadcast-address 172.16.203.255;
        option domain-name-servers 172.16.203.2;
        option domain-name localdomain;
        default-lease-time 1800;                # default is 30 minutes
        max-lease-time 7200;                    # default is 2 hours
        option netbios-name-servers 172.16.203.2;
        option routers 172.16.203.2;
}
host vmnet8 {
        hardware ethernet 00:50:56:C0:00:08;
        fixed-address 172.16.203.1;
        option domain-name-servers 0.0.0.0;
        option domain-name "";
        option routers 0.0.0.0;
}
```

4. 修改**networking**文件

```yml
answer VNET_8_DHCP yes
answer VNET_8_DHCP_CFG_HASH 15DA9EEAFA7B866650C685E3BA75D31A2584B849
answer VNET_8_HOSTONLY_NETMASK 255.255.255.0
answer VNET_8_HOSTONLY_SUBNET 172.16.203.0
answer VNET_8_NAT yes
answer VNET_8_VIRTUAL_ADAPTER yes
```

5. 重启虚拟机查看IP地址

```yml
vmnet8: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether 00:50:56:c0:00:08 
	inet 172.16.203.1 netmask 0xffffff00 broadcast 172.16.203.255
```

6. 设置服务器静态IP地址

```yml
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=545b4299-ed3a-44d9-8d0c-28c4df0a49b3
DEVICE=ens33
ONBOOT=yes
IPADDR=172.16.203.130
GATEWAY=172.16.203.2
NETMASK=255.255.255.0
DNS1=8.8.8.8
```

7. 重启网卡

```bash
sudo service network restart
```

