# Building OpenJDK

```bash
brew install autoconf
```

```bash
brew install ccache
```

## Building OpenJDK 11

bash configure 
--with-toolchain-type=clang 
--with-debug-level=slowdebug 
--enable-dtrace 
--with-jvm-variants=server 
--with-target-bits=64 
--enable-ccache 
--with-num-cores=8 
--with-memory-size=8000  
--disable-warnings-as-errors 
--with-sysroot=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk 
--with-boot-jdk=/Users/lionel/Environment/openjdk/10/jdk-10.jdk/Contents/Home

```bash
clang --version
```

```bash
clang++ --version
```

```bash
autoconf --version
```

```bash
make --version
```
