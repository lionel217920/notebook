
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
