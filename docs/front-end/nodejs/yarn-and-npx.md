---
sidebarDepth: 3
---

Npx is a very powerful command that’s been available in npm starting version 5.2. `npx` lets you run code built with Node and published through the npm registry.

npx is a tool intended to help round out the experience of using packages from the npm registry — the same way npm makes it super easy to install and manage dependencies hosted on the registry, npx makes it easy to use CLI tools and other executables hosted on the registry. It greatly simplifies a number of things that, until now, required a bit of ceremony to do with plain npm

Install
````
npm install -g npx
````

## npm常用命令

- 安装  
```shell
npm install moduleNames
```
https://www.npmjs.com/package/npx
https://www.npmjs.com/package/npx



Yarn is a JavaScript package manager compatible with npm that helps you automate the process of installing, updating, configuring, and removing npm packages.

It was created to solve a set of problems with the npm such as speeding up the packages installation process by parallelizing operations and reducing errors related to network connectivity.

# Install Yarn on your Ubuntu 18.04 system via the Yarn APT package repository

1. Enable the Yarn repository
  ````SHELL
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  ````
  Add the Yarn APT repository to your system’s software repository list
  ````SHELL
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  ````
2. update the package list and install Yarn
  ````SHELL
  sudo apt update
  sudo apt install yarn
  ````
3. Verify that Yarn installed successfully
  ````SHELL
  yarn --version
  ````
# Using Yarn

## Creating a new project
To create a new Yarn project use the `yarn init` command
````SHELL
yarn init my_yarn_project
````

## Adding dependency
If you want to use another package in your project, you need to add it to the project dependencies
````SHELL
yarn add [package_name]
````

## Upgrading dependency
To upgrade a dependency use one of the following
````SHELL
yarn upgrade [package_name]
yarn upgrade [package_name]@[version_or_tag]
````

## Removing dependency
Use the yarn remove command followed by the package name to remove a dependency
````SHELL
yarn remove [package_name]
````

## installing all project dependencies
To install all project dependencies that are specified in the `package.json` file run:
````SHELL
yarn install
````

# Installing Yarn on CentOS

1. If you already don’t have `Node.js` installed on your system, enable the Nodesource repository with the following `curl` command:
  ````SHELL
  curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
  ````
2. Install the Node.js package by typing:
  ````SHELL
  sudo yum install nodejs
  ````
3. To enable the Yarn repository and import the repository’s GPG key issue the following commands:
  ````SHELL
  curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
  sudo rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg
  ````
4. Install Yarn
  ````SHELL
  sudo yum install yarn
  ````
5. Verify the installation
  ````SHELL
  yarn --version
  ````

# Yarn VS Npx

如果yarn.lock文件更新了，如何自动更新项目里面的依赖
