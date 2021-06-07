## configure help

Running generated-configure.sh
`configure' configures OpenJDK jdk8 to adapt to many kinds of systems.

Usage: ./common/autoconf/configure [OPTION]... [VAR=VALUE]...

To assign environment variables (e.g., CC, CFLAGS...), specify them as
VAR=VALUE.  See below for descriptions of some of the useful variables.

Defaults for the options are specified in brackets.

Configuration:
  -h, --help              display this help and exit
      --help=short        display options specific to this package
      --help=recursive    display the short help of all the included packages
  -V, --version           display version information and exit
  -q, --quiet, --silent   do not print `checking ...' messages
      --cache-file=FILE   cache test results in FILE [disabled]
  -C, --config-cache      alias for `--cache-file=config.cache'
  -n, --no-create         do not create output files
      --srcdir=DIR        find the sources in DIR [configure dir or `..']

Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]

By default, `make install' will install all the files in
`/usr/local/bin', `/usr/local/lib' etc.  You can specify
an installation prefix other than `/usr/local' using `--prefix',
for instance `--prefix=$HOME'.

For better control, use the options below.

Fine tuning of the installation directories:
  --bindir=DIR            user executables [EPREFIX/bin]
  --sbindir=DIR           system admin executables [EPREFIX/sbin]
  --libexecdir=DIR        program executables [EPREFIX/libexec]
  --sysconfdir=DIR        read-only single-machine data [PREFIX/etc]
  --sharedstatedir=DIR    modifiable architecture-independent data [PREFIX/com]
  --localstatedir=DIR     modifiable single-machine data [PREFIX/var]
  --libdir=DIR            object code libraries [EPREFIX/lib]
  --includedir=DIR        C header files [PREFIX/include]
  --oldincludedir=DIR     C header files for non-gcc [/usr/include]
  --datarootdir=DIR       read-only arch.-independent data root [PREFIX/share]
  --datadir=DIR           read-only architecture-independent data [DATAROOTDIR]
  --infodir=DIR           info documentation [DATAROOTDIR/info]
  --localedir=DIR         locale-dependent data [DATAROOTDIR/locale]
  --mandir=DIR            man documentation [DATAROOTDIR/man]
  --docdir=DIR            documentation root [DATAROOTDIR/doc/openjdk]
  --htmldir=DIR           html documentation [DOCDIR]
  --dvidir=DIR            dvi documentation [DOCDIR]
  --pdfdir=DIR            pdf documentation [DOCDIR]
  --psdir=DIR             ps documentation [DOCDIR]

X features:
  --x-includes=DIR    X include files are in DIR
  --x-libraries=DIR   X library files are in DIR

System types:
  --build=BUILD     configure for building on BUILD [guessed]
  --host=HOST       cross-compile to build programs to run on HOST [BUILD]
  --target=TARGET   configure for building compilers for TARGET [HOST]

Optional Features:
  --disable-option-checking  ignore unrecognized --enable/--with options
  --disable-FEATURE       do not include FEATURE (same as --enable-FEATURE=no)
  --enable-FEATURE[=ARG]  include FEATURE [ARG=yes]
  --enable-openjdk-only   suppress building custom source even if present
                          [disabled]
  --enable-debug          set the debug level to fastdebug (shorthand for
                          --with-debug-level=fastdebug) [disabled]
  --disable-headful       disable building headful support (graphical UI
                          support) [enabled]
  --enable-hotspot-test-in-build
                          run the Queens test after Hotspot build [disabled]
  --enable-unlimited-crypto
                          Enable unlimited crypto policy [disabled]
  --disable-debug-symbols disable generation of debug symbols [enabled]
  --disable-zip-debug-info
                          disable zipping of debug-info files [enabled]
  --enable-macosx-runtime-support
                          Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --disable-freetype-bundling
                          disable bundling of the freetype library with the
                          build result [enabled on Windows or when using
                          --with-freetype, disabled otherwise]
  --enable-sjavac         use sjavac to do fast incremental compiles
                          [disabled]
  --disable-precompiled-headers
                          disable using precompiled headers when compiling C++
                          [enabled]
  --disable-ccache        disable using ccache to speed up recompilations
                          [enabled]

Optional Packages:
  --with-PACKAGE[=ARG]    use PACKAGE [ARG=yes]
  --without-PACKAGE       do not use PACKAGE (same as --with-PACKAGE=no)
  --with-custom-make-dir  use this directory for custom build/make files
  --with-target-bits      build 32-bit or 64-bit binaries (for platforms that
                          support it), e.g. --with-target-bits=32 [guessed]
  --with-sys-root         pass this sys-root to the compilers and tools (for
                          cross-compiling)
  --with-tools-dir        search this directory for compilers and tools (for
                          cross-compiling)
  --with-devkit           use this directory as base for tools-dir and
                          sys-root (for cross-compiling)
  --with-jdk-variant      JDK variant to build (normal) [normal]
  --with-jvm-interpreter  JVM interpreter to build (template, cpp) [template]
  --with-jvm-variants     JVM variants (separated by commas) to build (server,
                          client, minimal1, kernel, zero, zeroshark, core)
                          [server]
  --with-debug-level      set the debug level (release, fastdebug, slowdebug)
                          [release]
  --with-conf-name        use this as the name of the configuration [generated
                          from important configuration options]
  --with-builddeps-conf   use this configuration file for the builddeps
  --with-builddeps-server download and use build dependencies from this server
                          url
  --with-builddeps-dir    store downloaded build dependencies here
                          [/localhome/builddeps]
  --with-builddeps-group  chgrp the downloaded build dependencies to this
                          group
  --with-cacerts-file     specify alternative cacerts file
  --with-milestone        Set milestone value for build [internal]
  --with-update-version   Set update version value for build [b00]
  --with-user-release-suffix
                          Add a custom string to the version string if build
                          number isn't set.[username_builddateb00]
  --with-build-number     Set build number value for build [b00]
  --with-copyright-year   Set copyright year value for build [current year]
  --with-boot-jdk         path to Boot JDK (used to bootstrap build) [probed]
  --with-boot-jdk-jvmargs specify JVM arguments to be passed to all
                          invocations of the Boot JDK, overriding the default
                          values, e.g --with-boot-jdk-jvmargs="-Xmx8G
                          -enableassertions"
  --with-add-source-root  for each and every source directory, look in this
                          additional source root for the same directory; if it
                          exists and have files in it, include it in the build
  --with-override-source-root
                          for each and every source directory, look in this
                          override source root for the same directory; if it
                          exists, use that directory instead and ignore the
                          directory in the original source root
  --with-adds-and-overrides
                          use the subdirs 'adds' and 'overrides' in the
                          specified directory as add-source-root and
                          override-source-root
  --with-override-langtools
                          use this langtools dir for the build
  --with-override-corba   use this corba dir for the build
  --with-override-jaxp    use this jaxp dir for the build
  --with-override-jaxws   use this jaxws dir for the build
  --with-override-hotspot use this hotspot dir for the build
  --with-override-nashorn use this nashorn dir for the build
  --with-override-jdk     use this jdk dir for the build
  --with-import-hotspot   import hotspot binaries from this jdk image or
                          hotspot build dist dir instead of building from
                          source
  --with-msvcr-dll        copy this msvcr100.dll into the built JDK (Windows
                          only) [probed]
  --with-dxsdk            Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --with-dxsdk-lib        Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --with-dxsdk-include    Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --with-jtreg            Regression Test Harness [probed]
  --with-extra-cflags     extra flags to be used when compiling jdk c-files
  --with-extra-cxxflags   extra flags to be used when compiling jdk c++-files
  --with-extra-ldflags    extra flags to be used when linking jdk
  --with-x                use the X Window System
  --with-cups             specify prefix directory for the cups package
                          (expecting the headers under PATH/include)
  --with-cups-include     specify directory for the cups include files
  --with-freetype         specify prefix directory for the freetype package
                          (expecting the libraries under PATH/lib and the
                          headers under PATH/include)
  --with-freetype-include specify directory for the freetype include files
  --with-freetype-lib     specify directory for the freetype library
  --with-alsa             specify prefix directory for the alsa package
                          (expecting the libraries under PATH/lib and the
                          headers under PATH/include)
  --with-alsa-include     specify directory for the alsa include files
  --with-alsa-lib         specify directory for the alsa library
  --with-giflib           use giflib from build system or OpenJDK source
                          (system, bundled) [bundled]
  --with-zlib             use zlib from build system or OpenJDK source
                          (system, bundled) [bundled]
  --with-stdc++lib=<static>,<dynamic>,<default>
                          force linking of the C++ runtime on Linux to either
                          static or dynamic, default is static with dynamic as
                          fallback
  --with-num-cores        number of cores in the build system, e.g.
                          --with-num-cores=8 [probed]
  --with-memory-size      memory (in MB) available in the build system, e.g.
                          --with-memory-size=1024 [probed]
  --with-jobs             number of parallel jobs to let make run [calculated
                          based on cores and memory]
  --with-sjavac-server-java
                          use this java binary for running the sjavac
                          background server [Boot JDK java]
  --with-ccache-dir       where to store ccache files [~/.ccache]

Some influential environment variables:
  PKG_CONFIG  path to pkg-config utility
  CC          C compiler command
  CFLAGS      C compiler flags
  LDFLAGS     linker flags, e.g. -L<lib dir> if you have libraries in a
              nonstandard directory <lib dir>
  LIBS        libraries to pass to the linker, e.g. -l<library>
  CPPFLAGS    (Objective) C/C++ preprocessor flags, e.g. -I<include dir> if
              you have headers in a nonstandard directory <include dir>
  CXX         C++ compiler command
  CXXFLAGS    C++ compiler flags
  OBJC        Objective C compiler command
  OBJCFLAGS   Objective C compiler flags
  CPP         C preprocessor
  CXXCPP      C++ preprocessor
  XMKMF       Path to xmkmf, Makefile generator for X Window System
  FREETYPE_CFLAGS
              C compiler flags for FREETYPE, overriding pkg-config
  FREETYPE_LIBS
              linker flags for FREETYPE, overriding pkg-config
  ALSA_CFLAGS C compiler flags for ALSA, overriding pkg-config
  ALSA_LIBS   linker flags for ALSA, overriding pkg-config
  LIBFFI_CFLAGS
              C compiler flags for LIBFFI, overriding pkg-config
  LIBFFI_LIBS linker flags for LIBFFI, overriding pkg-config

Use these variables to override the choices made by `configure' or to help
it to find libraries and programs with nonstandard names/locations.

Report bugs to <build-dev@openjdk.java.net>.
OpenJDK home page: <http://openjdk.java.net>.

Additional (non-autoconf) OpenJDK Options:
  --openjdk-target=TARGET cross-compile with TARGET as target platform
                          (i.e. the one you will run the resulting binary on).
                          Equivalent to --host=TARGET --target=TARGET
                          --build=<current platform>
  --debug-configure       Run the configure script with additional debug
                          logging enabled.

Please be aware that, when cross-compiling, the OpenJDK configure script will
generally use 'target' where autoconf traditionally uses 'host'.

# Building OpenJDK

```bash
brew install freetype
```

### configure problem

cannot execute binary file mac -> 安装mac版本的bootJDK



GCC compiler is required. Try setting --with-tools-dir.

1. 
configure: error: GCC compiler is required. Try setting --with-tools-dir.

注释掉两行：

20323
21833

https://blog.csdn.net/quantum7/article/details/98939646
https://blog.csdn.net/quantum7/article/details/98939646
https://blog.csdn.net/manageer/article/details/72812149

2. 
configure: error: Could not find freetype!  

configure: error: Need both freetype lib and include paths. Consider using --with-freetype instead.

https://blog.csdn.net/lizhengjava/article/details/60138890


## environment

export COMPILER_WARNINGS_FATAL=false

export LANG=C
export CC=clang
export CXX=clang++
export USE_CLANG=true
export COMPILER_WARNINGS_FATAL=false

### configure

bash ./configure --with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-sys-root=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/


bash ./configure --with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home  --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/

--host=x86_64-linux-gnu


### configure result 

liuqiangdeMacBook-Pro-2:openjdk lionel$ bash ./configure --with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-sys-root=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/
Running generated-configure.sh
configure: Configuration created at Wed May 19 23:49:36 CST 2021.
configure: configure script generated at timestamp 1573688723.
checking for basename... /usr/bin/basename
checking for bash... /bin/bash
checking for cat... /bin/cat
checking for chmod... /bin/chmod
checking for cmp... /usr/bin/cmp
checking for comm... /usr/bin/comm
checking for cp... /bin/cp
checking for cpio... /usr/bin/cpio
checking for cut... /usr/bin/cut
checking for date... /bin/date
checking for gdiff... no
checking for diff... /usr/bin/diff
checking for dirname... /usr/bin/dirname
checking for echo... /bin/echo
checking for expr... /bin/expr
checking for file... /usr/bin/file
checking for find... /usr/bin/find
checking for head... /usr/bin/head
checking for ln... /bin/ln
checking for ls... /bin/ls
checking for mkdir... /bin/mkdir
checking for mktemp... /usr/bin/mktemp
checking for mv... /bin/mv
checking for printf... /usr/bin/printf
checking for rm... /bin/rm
checking for sh... /bin/sh
checking for sort... /usr/bin/sort
checking for tail... /usr/bin/tail
checking for tar... /usr/bin/tar
checking for tee... /usr/bin/tee
checking for touch... /usr/bin/touch
checking for tr... /usr/bin/tr
checking for uname... /usr/bin/uname
checking for uniq... /usr/bin/uniq
checking for wc... /usr/bin/wc
checking for which... /usr/bin/which
checking for xargs... /usr/bin/xargs
checking for gawk... no
checking for mawk... no
checking for nawk... no
checking for awk... awk
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking for fgrep... /usr/bin/grep -F
checking for a sed that does not truncate output... /usr/bin/sed
checking for nawk... no
checking for gawk... no
checking for awk... /usr/bin/awk
checking for cygpath... no
checking for readlink... /usr/bin/readlink
checking for df... /bin/df
checking for SetFile... /usr/bin/SetFile
checking build system type... x86_64-apple-darwin18.2.0
checking host system type... x86_64-apple-darwin18.2.0
checking target system type... x86_64-apple-darwin18.2.0
checking openjdk-build os-cpu... macosx-x86_64
checking openjdk-target os-cpu... macosx-x86_64
configure: --with-target-bits are set to build platform address size; argument has no meaning
checking compilation type... native
checking for presence of closed sources... no
checking if closed source is suppressed (openjdk-only)... no
checking which variant of the JDK to build... normal
checking which interpreter of the JVM to build... template
checking which variants of the JVM to build... server
checking which debug level to use... slowdebug
checking what configuration name to use... macosx-x86_64-normal-server-slowdebug
checking for apt-get... no
checking for yum... no
checking for port... no
checking for pkgutil... pkgutil
checking for gmake... no
checking for make... /usr/bin/make
configure: Testing potential make at /usr/bin/make, found using make in PATH
configure: Resolving FOUND_MAKE (as /usr/bin/make) failed, using /usr/bin/make directly.
configure: Using GNU make 3.81 (or later) at /usr/bin/make (version: GNU Make 3.81)
checking if find supports -delete... yes
checking for unzip... /usr/bin/unzip
checking for zip... /usr/bin/zip
checking for ldd... no
checking for otool... /usr/bin/otool
checking for readelf... no
checking for greadelf... no
checking for hg... no
checking for stat... /usr/bin/stat
checking for time... /usr/bin/time
checking for dsymutil... /usr/bin/dsymutil
checking for xattr... /usr/bin/xattr
checking for codesign... /usr/bin/codesign
checking if openjdk_codesign certificate is present... no
checking for pkg-config... no
checking for 7z... no
checking for unzip... unzip
checking for wget... wget
checking headful support... include support for both headful and headless
configure: Found potential Boot JDK using configure arguments
checking for Boot JDK... /Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home
checking Boot JDK version... java version "1.7.0_80" Java(TM) SE Runtime Environment (build 1.7.0_80-b15) Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode) 
checking for java in Boot JDK... ok
checking for javac in Boot JDK... ok
checking for javah in Boot JDK... ok
checking for javap in Boot JDK... ok
checking for jar in Boot JDK... ok
checking for rmic in Boot JDK... ok
checking for native2ascii in Boot JDK... ok
checking flags for boot jdk java command ...  
checking flags for boot jdk java command for big workloads...  -Xms64M -Xmx1600M -XX:ThreadStackSize=1536 -XX:PermSize=32m -XX:MaxPermSize=160m
checking flags for boot jdk java command for small workloads...  -XX:+UseSerialGC -Xms32M -Xmx512M
checking for jtreg... no
checking for gcc... /usr/bin/gcc
configure: Resolving CC (as /usr/bin/gcc) failed, using /usr/bin/gcc directly.
checking resolved symbolic links for CC... /usr/bin/gcc
checking if CC is disguised ccache... no, keeping CC
configure: The C compiler (located as /usr/bin/gcc) does not seem to be the required GCC compiler.
configure: The result from running with --version was: "Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/usr/include/c++/4.2.1"
configure: Using  C compiler version  (located at /usr/bin/gcc)
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether /usr/bin/gcc accepts -g... yes
checking for /usr/bin/gcc option to accept ISO C89... none needed
checking for g++... /usr/bin/g++
configure: Resolving CXX (as /usr/bin/g++) failed, using /usr/bin/g++ directly.
checking resolved symbolic links for CXX... /usr/bin/g++
checking if CXX is disguised ccache... no, keeping CXX
configure: The C++ compiler (located as /usr/bin/g++) does not seem to be the required GCC compiler.
configure: The result from running with --version was: "Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/usr/include/c++/4.2.1"
configure: Using  C++ compiler version  (located at /usr/bin/g++)
checking whether we are using the GNU C++ compiler... yes
checking whether /usr/bin/g++ accepts -g... yes
checking for gcc... gcc
checking whether we are using the GNU Objective C compiler... yes
checking whether gcc accepts -g... yes
configure: Rewriting OBJC to "/usr/bin/gcc"
checking for ar... ar
configure: Rewriting AR to "/usr/bin/ar"
checking how to run the C preprocessor... /usr/bin/gcc -E
configure: Resolving CPP (as /usr/bin/gcc) failed, using /usr/bin/gcc directly.
checking how to run the C++ preprocessor... /usr/bin/g++ -E
configure: Resolving CXXCPP (as /usr/bin/g++) failed, using /usr/bin/g++ directly.
checking for nm... nm
configure: Rewriting NM to "/usr/bin/nm"
checking for strip... strip
configure: Rewriting STRIP to "/usr/bin/strip"
checking for gobjdump... no
checking for objdump... objdump
configure: Rewriting OBJDUMP to "/usr/bin/objdump"
checking for lipo... /usr/bin/lipo
configure: Resolving LIPO (as /usr/bin/lipo) failed, using /usr/bin/lipo directly.
checking for ANSI C header files... yes
checking for sys/types.h... yes
checking for sys/stat.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for memory.h... yes
checking for strings.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for unistd.h... yes
checking stdio.h usability... yes
checking stdio.h presence... yes
checking for stdio.h... yes
checking size of int *... 8
checking for target address size... 64 bits
checking whether byte ordering is bigendian... no
checking if compiler supports "-m64"... yes
checking if compiler supports "-m64"... yes
checking if we should generate debug symbols... true
checking if we should zip debug-info files... yes
checking what is not needed on MacOSX?... alsa pulse x11
checking for Mac OS X Java Framework... no
checking for X... no
checking for X11/extensions/shape.h... no
checking cups/cups.h usability... yes
checking cups/cups.h presence... yes
checking for cups/cups.h... yes
checking cups/ppd.h usability... yes
checking cups/ppd.h presence... yes
checking for cups/ppd.h... yes
configure: Found freetype include files at /usr/local/include/freetype2 using --with-freetype
checking for freetype includes... /usr/local/include/freetype2
checking for freetype libraries... /usr/local/lib
checking if we can compile and link with freetype... yes
checking if we should bundle freetype... yes
checking for main in -ljpeg... no
configure: Will use jpeg decoder bundled with the OpenJDK source
checking for which giflib to use... bundled
checking for compress in -lz... yes
checking for which zlib to use... system
checking for cos in -lm... yes
checking for dlopen in -ldl... yes
checking if elliptic curve crypto implementation is present... yes
checking for appropriate number of jobs to run in parallel... 5
checking whether to use sjavac... no
checking that precompiled headers work... yes
checking for ccache... /usr/local/bin/ccache
checking if ccache supports precompiled headers... no, disabling ccache
checking if build directory is on local disk... yes
configure: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/config.status
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/spec.gmk
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/hotspot-spec.gmk
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/bootcycle-spec.gmk
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/compare.sh
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/spec.sh
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/Makefile
config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/config.h

====================================================
A new configuration has been successfully created in
/Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug
using configure arguments '--with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-sys-root=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/'.

Configuration summary:
* Debug level:    slowdebug
* JDK variant:    normal
* JVM variants:   server
* OpenJDK target: OS: macosx, CPU architecture: x86, address length: 64

Tools summary:
* Boot JDK:       java version "1.7.0_80" Java(TM) SE Runtime Environment (build 1.7.0_80-b15) Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode)  (at /Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home)
* C Compiler:      version  (at /usr/bin/gcc)
* C++ Compiler:    version  (at /usr/bin/g++)

Build performance summary:
* Cores to use:   5
* Memory limit:   8000 MB
* ccache status:  installed, but disabled (version older than 3.1.4)

Build performance tip: ccache gives a tremendous speedup for C++ recompilations.
You have ccache installed, but it is a version prior to 3.1.4. Try upgrading.


## make problem

error: include path for stdlibc++ headers not found; pass '-stdlib=libc++' on the command line to use the libc++ standard library instead [-Werror,-Wstdlibcxx-not-found]

error: include path for stdlibc++ headers not found; pass '-stdlib=libc++' on the command line to use the libc++ standard library instead [-Werror,-Wstdlibcxx-not-found]

error: include path for stdlibc++ headers not found; pass '-stdlib=libc++' on the command line to use the libc++ standard library instead [-Werror,-Wstdlibcxx-not-found]



安装stdlibc++

最开始安装在

/Library/Developer/CommandLineTools/usr下，

后来被我删除了，我是拷贝过去的，当时执行脚本没成功，告知没有权限。

后来安装在/Library/Developer/CommandLineTools/SDKs

MacOSX.sdk/usr 和 MacOSX10.14.sdk/usr 都是软连接。

/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include

/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/usr/include



https://blog.csdn.net/lizhengjava/article/details/105629780
https://blog.csdn.net/isea533/article/details/80234007
https://www.jianshu.com/p/38e697dcbaa5
https://www.zhoujunwen.com/2019/building-openjdk-8-on-mac-osx-catalina-10-15/
https://segmentfault.com/q/1010000013353434/a-1020000023446234
https://quantum6.blog.csdn.net/article/details/108466760
https://www.yht7.com/news/98196
https://blog.csdn.net/lizhengjava/article/details/105629780


https://blog.csdn.net/quantum7/article/details/108466864
https://blog.csdn.net/j754379117/article/details/53695426
https://www.jianshu.com/p/a7ac81d38bb1


## 修改源码了

https://www.jianshu.com/p/0e6300eddcf4
https://blog.0xff000000.com/2019/04/26/compile-debug-openjdk8-on-osx/
https://www.zhoujunwen.com/2019/building-openjdk-8-on-mac-osx-catalina-10-15/


https://www.jianshu.com/p/b92adbb0c4a8





