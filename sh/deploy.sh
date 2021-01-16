#!/bin/sh

# package.json
#scp ../target/logistics-server.jar lscm@172.16.100.161:~

# config.js
# tar -jcvf -f docs.tar.gz
scp -r ../target/. lionel@111.231.146.191:~/notebook/

# README.md
#scp ../README.md lionel@111.231.146.191:~/docs/

# public
#scp ../vuepress/public/avator.png lionel@111.231.146.191:~/docs/.vuepress/public/
