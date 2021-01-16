module.exports = [
    {
        title: 'Installation',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            ['/middleware/activemq/', 'jihe'],
            ['/middleware/rocketmq/', 'RocketMQ']
        ]
    },
    {
        title: 'Index',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            ['/database/mongodb/indexes/index-single', '唯一索引'],
            ['/database/mongodb/indexes/index-ttl', 'TTL-超时索引']
        ]
    }
]