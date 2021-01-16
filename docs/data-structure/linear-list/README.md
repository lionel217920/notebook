# 线性表 - Linear List

## 线性表的概念

线性表 - Linear List: 由同类数据元素构成有序序列的线性结构。

::: theorem 概念
线性表简称表（List），是零个或多个元素的又穷序列，通常可以表示成a₀,a₁,a₂,........,a𝑛₋₁
:::

- 表目：线性表中的元素
- 索引（下标）：元素在线性表中的位置
- 表的长度：表中元素个数称为线性表的长度
- 空表：长度为0的线性表（n=0）
- 表头：表的起始位置 - Head
- 表尾：表的结束位置 - Tail
- 当前位置 - Current position

## 线性表的逻辑结构

- 有一个唯一的开始节点，它没有前驱，有一个唯一的直接后继
- 有一个唯一的终止节点，它有一个唯一的直接前驱，它没有后继。
- 其它的节点皆成为内部节点，每一个内部节点都有且仅有一个唯一的直接前驱，也有一个唯一的直接有后继。
- < aᵢ , aᵢ+1 > aᵢ是aᵢ+1的前驱，aᵢ+1是aᵢ的后继
- 前驱、后继关系，具有反对称性和传递性

![线性表的逻辑结构](https://image.hualihai.cn/blog/85248ee85b8e40d0a902e454a7ee7203)

## 线性表的特点

操作灵活，其长度可以增长，缩短，易于存储，易于运算

开始元素和终端元素都是唯一的，其余元素都有且仅有一个前驱元素和一个后继元素

同一线性表的各数据元素必定具有相同的数据类型和长度

各数据元素在线性表中都有自己的位置，且数据元素之间的相对位置是线性的

## 线性表的分类

- [顺序表](/data-structure/linear-list/sequence-list)
- [单链表](/data-structure/linear-list/singly-linked-list)
- [双链表](/data-structure/linear-list/double-linked-list)
- [循环链表](/data-structure/linear-list/circularly-linked-list)