---
sidebar: auto
---

# Ubuntu18.04搭建开发环境

## 前言
&emsp;&emsp;鉴于新公司统一的开发环境是`ubuntu`操作系统，我开始接触并了解ubuntu系统。一些互联网公司选择ubuntu操作系统作为开发环境，因为ubuntu有如下优点（个人观点）
- Ubuntu是免费的，开源的
- 软件安装，升级方便（通过源安装nginx，nodeJs等）
- UNIX Environment,使用命令行方式连接服务器并上传升级包。
- 作为开发环境Ubntu比Windows更适合

## U盘安装Ubuntu18.04
&emsp;&emsp;同安装Windows操作系统一样，使用U盘安装很简单。首先找一个制作Linux系统的启动盘。使用`UNetbootin`或者`Rufus`或其他工具。
> 这里不做过多描述，同安装Windows操作系统类似

::: warning
安装英文版系统要修改`locale`文件
:::

安装完成后显示中文会有问题。有些地方显示中文会变成方块。比如浏览器中或者navicat里面的数据库记录。这是因为Ubuntu下的`Locale`文件，关于Locale文件，我的理解是就是定义软件运行时的语言环境。具体的含义可自行谷歌。
查看当前系统语言环境
```sh
locale
```
![locale](http://image.hualihai.cn/blog/0ce14a9d-8b53-42b4-8362-3e581e1a5a56)
这里我只修改了`LC_CTYPE`和`LC_COLLATE`，就解决了中文乱码的问题。
修改方法：
```sh
vim /etc/default/locale
```
记得重启机器。


## Ubuntu18.04安装mac主题
&emsp;&emsp;安装完成后就是红色背景的默认主题（太丑！），在`youtube`上找了一个视频，安装了mac主题。上截图：
![壁纸](http://image.hualihai.cn/blog/d52e4424-0316-4239-ba66-1ebae5fc5574)
![Applications](http://image.hualihai.cn/blog/628ccf58-a3a9-4279-a618-735fc966a361)
![文件夹](http://image.hualihai.cn/blog/af2ed86e-8d96-4f60-9399-b289164f9635)

1. 在`Ubuntu Software`中安装应用`GNOME Tweaks`  
**tweak v. 拧；扭；拉；微调** 其意思就是调整配置，可以设置自定义的主题，图标等自定义的配置。

2. 在`Ubuntu Software`中安装扩展`User Themes`

3. [下载mac主题](http://www.gnome-look.org/)，左边菜单栏选择**GTK3 Themes**，根据下载量选择喜欢的主题。我下载的是`macOS High Sierra`
![Mac Themes](http://image.hualihai.cn/blog/1b2a92f7-9f52-40f5-bb0f-a0d7ed6c6797)

4. [下载图标](http://www.gnome-look.org/)，左边菜单栏选择**Icon Themes**，根据下载量选择喜欢的图标。我下载的是`MacOS sierra ct`
![Icon](http://image.hualihai.cn/blog/e7fc6b1a-78df-4571-861a-740dfc45d869)

5. 解压主题和图标，在`home`目录下创建`.themes`文件夹和`.icons`文件夹

  ```sh
  mkdir ~/.themes
  mkdir ~/.icons
  tar -zxvf xxxxx -C ~/.icons
  tar -zxvf xxxxx -C ~/.themes
  ```
6. 打开`Tweaks`
> Appearence -> Themes -> Application -> Sierra-light-solid(你的主题)
>
> Appearence -> Themes -> Icons -> Macos-sierra-CT-0.8(你的图标)

7. 在`Ubuntu Software`中安装扩展`Dash to Dock`，打开系统设置`Settings`，将参数设置如下
> Icon size : 42  
> Positioin on screen : Bottom

8. 在`Ubuntu Software`中安装扩展`Blyr`,这个扩展是选择应用的时候有阴影的效果。

9. [下载Shell主题](http://www.gnome-look.org/)，左边菜单栏选择**Gnome Shell Themes**，根据下载量选择喜欢的主题。我下载的是`macOS High Sierra a21`
![shell themes](http://image.hualihai.cn/blog/cd1f6a2f-aa2e-4cd3-bf27-87d7f16c0558)

10. 解压刚才下载的`Shell Themes`文件，将含有`gnome-shell`文件夹的外层文件夹拷贝到`.themes`文件夹内：copy MacOS_HS to ~/.themes

11. 打开`Tweaks`
> Appearance -> Shell -> Sierra-light-solid(你的主题)

12. 在`Ubuntu Software`中安装扩展`NetSpeed`，可以实时显示网速

13. [下载锁屏主题](https://www.gnome-look.org/)，左边菜单栏选择**GDM Themes**,我下载的是`High Ubunterra`
![GDM Themes](http://image.hualihai.cn/blog/c0cea136-57ec-4015-8c3c-265c692cafc5)

14. 执行文件里面的`install.sh`即可。

15. google搜索mac壁纸，选择你喜欢的壁纸，右键`Set As Wallpaper`。

到此，mac主题安装完成。也可以根据自己的喜好安装其他好看的主题。其原理都和上述差不多。  

安装完成后，我遇到一个问题：在选择应用的时候底部和侧面都出现了应用工具条，并且在锁屏的时候也出现了。在github上搜到了这个问题：
https://github.com/micheleg/dash-to-dock/issues/649
解决办法是：移除默认的`ubuntu-dock`
```sh
sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com ~/
```

## Ubuntu18.04安装常用开发软件

- 安装搜狗输入法
1. 在Ubuntu Software中安装`Fctix`，`Fctix Configuration`，`fctix-qimpanel-configtool`
2. 下载搜狗输入法deb安装包并安装
3. 在系统设置中设置
> Region&Language -> Manage Installed Languages -> Keyboard input method system : fctix
4. 重启然后配置Fctix Configuration即可

- 安装chrome浏览器  
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb  
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb      
> sudo dpkg -i google-chrome-stable_current_i386.deb  
> sudo dpkg -i google-chrome-stable_current_amd64.deb

- 安装`Spring Tool Suite`
1. 下载`spring-tool-suite-3.9.5.RELEASE-e4.8.0-linux-gtk-x86_64.tar.gz`
2. 解压缩到`/opt/sts`
3. 在/usr/share/applications创建桌面图标: `touch STS.desktop`
```xml
[Desktop Entry]
Encoding=UTF-8
Name=STS
Comment=STS IDE
Exec=/usr/lib/opt/sts-bundle/sts-3.9.3.RELEASE/STS
Icon=/usr/lib/opt/sts-bundle/sts-3.9.3.RELEASE/icon.xpm
Terminal=false
StartupNotify=true
Type=Application
Categories=Application;Development;
```
- 安装`IntelliJ IDEA`，可以在Ubuntu Software中安装

- 安装`VIM`

- 安装`Emacs`

- 安装`Atom`
::: warning 警告
在Ubuntu Software中安装会有无法输入中文的问题，所以还是在官网下载deb安装包进行安装
:::

- 安装`GIT`

- 安装`VLC`,在Ubuntu Software中安装

- 安装`virtualBox`，在Ubuntu Software中安装

- 安装`SSH`
```sh
sudo apt install openssh-server
```

- 安装`Shutter`，在Ubuntu Software中安装  
::: warning
编辑图片，在网上有解决办法：https://itsfoss.com/shutter-edit-button-disabled/  
:::

- 安装`Teamviewer`，官网下载安装  
```sh
sudo dpkg -i teamviewer_13.2.13582_amd64.deb
sudo apt install -f
sudo dpkg -i teamviewer_13.2.13582_amd64.deb
```

- 安装`Robo3T`
```sh
tar -zxvf xxxx.tar.gz
mv robo3t-x.x.x-linux-x86_64-xxxxxxx robo3t
sudo mv robo3t /opt
sudo ln -s /opt/robo3t/bin/robo3t /usr/bin/robo3t
cd /usr/share/applications
sudo touch robo3t.desktop
sudo vim robo3t.desktop
```
`robo3t.desktop`
```xml
[Desktop Entry]
Version=1.0
Name=Robo 3T
Comment=Shell-centric MongoDB management tool
Type=Application
Categories=Development;
Exec=robo3t
Terminal=false
StartupNotify=true
Icon=robo3t
Encoding=UTF-8
```

- 安装`Navicat`
```sh
tar -zxvf xxxxx -C /opt/navicat
sudo ln -s /opt/navicat/navicat121_mysql_en_x64/start_navicat /usr/bin/navicat
cd /usr/share/applications
sudo touch navicat.desktop
```
`navicat.desktop`
```xml
[Desktop Entry]
Version=1.0
Name=Navicat
Comment=Mysql management tool
Type=Application
Categories=Development
Exec=/opt/navicat/navicat121_mysql_en_x64/start_navicat
Terminal=false
StartupNotify=true
Icon=/opt/navicat/navicat121_mysql_en_x64/navicat-icon.png
Encoding=UTF-8
```

`jmeter.desktop`

```xml
[Desktop Entry]
Version=1.0
Name=JMeter
Comment=Testing web application
Type=Application
Categories=Development;
Exec=jmeter
Terminal=false
StartupNotify=true
Icon=/opt/JMeter/apache-jmeter-5.1.1/docs/images/jmeter_square.png
Encoding=UTF-8
```

```xml
[Desktop Entry]
Version=1.0
Name=Phpstorm
Comment=Phpstorm
Type=Application
Categories=Development;
Exec=phpstorm
Terminal=false
StartupNotify=true
Icon=/opt/PhpStorm-2019.1.3/PhpStorm-191.7479.51/bin/phpstorm.png
Encoding=UTF-8
```