# Ubuntu安装根证书

## 场景说明
抓https的包需要安装证书

## 首先要创建证书

```sh
sudo mkdir /usr/share/ca-certificates/extra
```

```sh
sudo cp foo.crt /usr/share/ca-certificates/extra/foo.crt
```

```sh
sudo dpkg-reconfigure ca-certificates
```

```sh
sudo update-ca-certificates
```

## 将.pem证书转换为.crt格式

直接改后缀名即可或者使用ssl工具

```sh
openssl x509 -in foo.pem -inform PEM -out foo.crt
```