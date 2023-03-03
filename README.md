# roc-cli-koa-template

roc 脚手架 koa 项目模板

个人网站: [http://rocyuan.top](http://rocyuan.top)

## 环境

`以下版本为本人使用环境，其他版本未测`

- node v14.18.2
- mysql v5.7.26
- redis v7.0.4

# roc-cli

[![npm version](https://img.shields.io/npm/v/roc-cli.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/roc-cli)
[![npm downloads](https://img.shields.io/npm/dt/roc-cli.svg?style=flat-square)](https://www.npmjs.com/package/roc-cli)

## 介绍

平时开发项目用 vue 或 react 等脚手架创建的项目，都需要手动删除一堆原始无用代码并且配置非常多的库及相关配置，非常麻烦，roc-cli 会帮你创建没有原始无用代码并且有常用的库及配置的项目模板，提高开发效率，目前提供 vue2.x、vue3.x、uni-app、react、koa 项目，后续会一直维护项目模板。

## 安装教程

全局安装：` npm i -g roc-cli`

## 使用说明

全局下安装了 roc-cli 后就可以在命令行使用 `roc create <project-name>` 命令创建项目；创建项目会询问项目类型，上下键进行选择，回车确定。

```bash
roc create project-name

⭐ Please select the project type to create:  (Use arrow keys)
  vue2.x
  vue3.x
  uniapp
  react
> koa
```
