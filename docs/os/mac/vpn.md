使用L2TP，没有共享秘钥，mac上添加以下配置

```bash
cat /etc/ppp/options
plugin L2TP.ppp
l2tpnoipsec
```

VPN连上了，ip是10.10.10.1