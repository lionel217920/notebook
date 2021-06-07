# MacPorts

https://guide.macports.org/#using.port.list


## 环境变量

安装完成后会自动加入到~/.bash_profile中

```bash
# MacPorts Installer addition on 2021-05-20_at_22:35:52: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.
```

## 修改镜像

```bash
sudo /opt/local/etc/macports/sources.conf
```

rsync://mirrors.tuna.tsinghua.edu.cn/macports/release/ports/ [default]


## 重新加载macports文件信息

sudo port -v sync		


## 更新

sudo port -v selfupdate


# 搜索索引中的软件
port search name

# 查看包详细信息
port info name

# 查看包详细信赖信息`
port deps name

# 查看安装时允许客户定制的参数
port variants name

# 安装新软件
sudo port install name

# 安装完毕之后，清除安装时产生的临时文件
sudo port clean --all name



## gcc43

The following dependencies will be installed: 
 autoconf
 automake
 bzip2
 cctools
 cmake
 curl
 curl-ca-bundle
 db48
 expat
 gcc_select
 gdbm
 gettext
 glib2
 gmp
 gperf
 help2man
 icu
 isl
 ld64
 ld64-xcode
 libarchive
 libcxx
 libedit
 libffi
 libgcc
 libgcc10
 libgcc11
 libgcc45
 libgcc6
 libgcc7
 libgcc8
 libgcc9
 libiconv
 libidn2
 libmpc
 libpsl
 libtool
 libunistring
 libunwind-headers
 libuv
 libxml2
 llvm-10
 llvm_select
 lz4
 lzo2
 m4
 mpfr
 ncurses
 openssl
 p5.30-locale-gettext
 pcre
 perl5.30
 pkgconfig
 python39
 python3_select
 python_select
 readline
 sqlite3
 texinfo
 xar
 xz
 zlib
 zstd
Continue? [Y/n]: --->  Fetching archive for gperf


