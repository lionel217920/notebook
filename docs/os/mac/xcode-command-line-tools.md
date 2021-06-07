
## Xcode Command Line Tools

Xcode is a large suite of software development tools and libraries from apple.
Xcode Command Line Tools are part of Xcode
Installation of many common Unix-based tools requires the `GCC compiler`,The Xcode Command Line Tools include a GCC compiler

## Is Xcode Already Installed?

You don’t need the full Xcode package to get the Xcode Command Line Tools

```bash
xcode-select -p
```

## Install Xcode Command Line Tools

```bash
xcode-select --install
```

Verify that you’ve successfully installed Xcode Command Line Tools:

```bash
xcode-select -p
```

```bash
gcc --version
```

## The relationship between homebrew and xcode command line tools

## ReInstall Xcode Command Line Tools

```bash
sudo rm -rf /Library/Developer/CommandLineTools
```

删除文件夹后执行：gcc -v

xcrun: error: active developer path ("/Library/Developer/CommandLineTools") does not exist
Use `sudo xcode-select --switch path/to/Xcode.app` to specify the Xcode that you wish to use for command line developer tools, or use `xcode-select --install` to install the standalone command line developer tools.
See `man xcode-select` for more details.

```bash
xcode-select --install
```

## /Library/Developer/CommandLineTools

http://railsapps.github.io/xcode-command-line-tools.html

https://github.com/kennethreitz/osx-gcc-installer

https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/

http://railsapps.github.io/xcode-command-line-tools.html

https://segmentfault.com/a/1190000018045211?utm_source=tag-newest

https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/