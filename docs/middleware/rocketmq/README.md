# RocketMQ

消息回滚之后，重写发送消息，消息ID与之前的消息ID不一样，说明是新消息。

Name Server 为 producer 和 consumer 提供路由信息

Broker 接收来自生产者的消息，储存以及为消费者拉取消息的请求做好准备。

生产者（Producer）：负责产生消息，生产者向消息服务器发送由业务应用程序系统生成的消息。

消费者（Consumer）：负责消费消息，消费者从消息服务器拉取信息并将其输入用户应用程序。

消息服务器（Broker）：是消息存储中心，主要作用是接收来自 Producer 的消息并存储， Consumer 从这里取得消息。

名称服务器（NameServer）：用来保存 Broker 相关 Topic 等元信息并给 Producer ，提供 Consumer 查找 Broker 信息。