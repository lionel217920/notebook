module.exports = [
    { text: 'Java', 
      items: [
        {
          text: 'Base',
          items: [
            {text: 'Basics', link: '/java/basic/'},
            {text: 'Class', link: '/java/class/'},
            {text: 'Generic', link: '/java/generics/'},
            {text: 'Collection', link: '/java/collection/'},
            {text: 'I/O', link: '/java/io/'},
            {text: 'OOP', link: '/java/oop/'},
          ]
        },
        {
          text: 'Advanced',
          items: [
            {text: 'Concurrency', link: '/java/concurrency/'},
            {text: 'JVM', link: '/java/jvm/' },
            {text: 'Java8', link: '/java/jdk8/'},
            {text: 'JSRs', link: '/java/jsr/'},
          ]
        },
        {
          text: 'Coding',
          items: [
            {text: 'Specifaction', link: '/java/specification/'},
            {text: 'Design Pattern', link: '/design-pattern/'},
            {text: 'Algorithm', link: '/algorithm/'},
            {text: 'Data Structure', link: '/data-structure/'}
          ]
        }
      ] 
    },
    { text: 'NetWorking', 
      items: [
        {text: 'Http', link: '/networking/http/'},
        {text: 'Https', link: '/networking/https/'},
        {text: 'SSH', link: '/networking/ssh/'},
      ]
    },
    { text: 'DataBase',
      items: [
        {
          text: 'RDBMS',
          items: [
            {text: 'MySQL', link: '/database/mysql/'}
          ]
        },
        {
          text: 'NoSQL',
          items: [
            {
              text: 'Redis',
              link: '/database/redis/'
            },
            {
              text: 'MongoDB',
              link: '/database/mongodb/'
            },
            {
              text: 'Memcached',
              link: '/database/memcached/'
            }
          ]
        }
      ]
    },
    { text: 'Front end',
      items: [
        {
          text: 'Node',
          items: [
            {text: 'Npm', link: '/front-end/npm/'},
            {text: 'Yarn', link: '/front-end/yarn/'}
          ]
        },
        {
          text: 'Vue',
          items: [
            {text: 'Vue.js', link: '/front-end/vuejs/'},
            {text: 'VuePress', link: '/front-end/vuepress/'},
          ]
        },
        {
          text: 'Javascript',
          items: [
            {text: 'ES6', link: '/front-end/ecmascript/'},
          ]
        },
        {text: 'Webpack', link: '/front-end/webpack/'},
      ]
    },
    { text: 'Web', 
      items: [
        {text: 'Website', link: '/web/website/'},
        {text: 'Servlet', link: '/web/servlet/'}
      ]
    },
    { text: 'Server',
      items: [
        {text: 'Tomcat', link: '/server/tomcat/'},
        {text: 'Nginx', link: '/server/nginx/'},
        {text: 'Proxy', link: '/server/proxy/'}
      ]
    },
    { text: 'FrameWork',
      items: [
        {text: 'Hibernate', link: '/framework/hibernate/'},
        {text: 'Netty', link: '/framework/netty/'},
        {
          text: 'Spring',
          items: [
            {text: 'Spring MVC', link: '/framework/spring-mvc/'},
            {text: 'Spring Framework', link: '/framework/spring-framework/'},
            {text: 'Spring Boot', link: '/framework/spring-boot/'},
          ]
        },
        {
          text: 'RPC',
          items: [
            {text: 'gRPC', link: '/framework/grpc/'}
          ]
        }
      ]
    },
    {
      text: 'Middleware',
      items: [
        {
          text: 'MQ',
          items: [
            {text: 'ActiveMQ',link: '/middleware/activemq/'},
            {text: 'RocketMQ',link: '/middleware/rocketmq/'},
            {text: 'RabbitMQ',link: '/middleware/rabbitmq/'},
            {text: 'Kafka',link: '/middleware/kafka/'}
          ]
        },
        {
          text: 'Big Data',
          items: [
            {text: 'Elastic Search', link: '/big-data/elasticsearch/'},
            {text: 'Canel',link: '/middleware/canel/'}
          ]
        },
        {
          text: 'Others',
          items: [
            {text: 'Zookeeper',link: '/middleware/zookeeper/'},
            {text: 'Sentinel',link: '/middleware/sentinel/'}
          ]
        }
      ]
    },
    { text: 'DevOps',
      items: [
        {
          text: 'Developer',
          items: [
            {text: 'Git', link: '/tools/git/'},
            {text: 'Maven', link: '/tools/maven/'},
            {text: 'IDEA', link: '/tools/idea/'},
            {text: 'VS Code', link: '/tools/vscode/'}
          ]
        },
        {
          text: 'Test',
          items: [
            {text: 'Charles', link: '/tools/charles/'},
            {text: 'Jmeter', link: '/tools/jmeter/'},
          ]
        },
        {
          text: 'Operation',
          items: [
            { text: 'Linux', link: '/linux/' },
            { text: 'Docker', link: '/docker/' },
          ]
        }
      ]
    },
    { text: 'Service', 
      items: [
        { text: 'Distributed', link: '/distributed/' },
        { text: 'Microservice', link: '/microservice/' },
        { text: 'Monitor', link: '/service/monitor/' }
      ]
    }
  ]
  