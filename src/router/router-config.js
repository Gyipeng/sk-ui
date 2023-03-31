
export const routerConfig = {
  '开发指南': [
    {
      'name': 'giud',
      'path': '/giud',
      'desc': '介绍'
    },
    {
      'name': 'install',
      'path': '/install',
      'desc': '安装'
    },
    {
      'name': 'start',
      'path': '/start',
      'desc': '快速开始'
    },
    {
      'name': 'index',
      'path': '/',
      'type': 'pages'
    }
  ],
  '组件': [
    {
      'desc': '基础组件',
      'path': '/component',
      'items': [
        {
          'desc': 'Button 按钮',
          'name': 'button',
          'path': '/button'
        }
      ]
    }
  ],
  '视图': [
    {
      'desc': '视图组件',
      'path': '/component',
      'items': [
        {
          'desc': 'Card 卡片',
          'name': 'card',
          'path': '/card'
        },
        {
          'desc': 'DynamicCard  动态卡片',
          'name': 'dynamicCard',
          'path': '/dynamicCard'
        }
      ]
    }
  ],
  '业务': [
    {
      'desc': '业务组件',
      'path': '/bussiness',
      'items': [
        {
          'desc': 'BussinessCard 卡片',
          'name': 'bussinessCard',
          'path': '/bussinessCard'
        }
      ]
    }
  ],
  '测试': [
    {
      'desc': '测试页面',
      'path': '/test1',
      'items': [
        {
          'type': 'pages',
          'desc': '测试',
          'name': 'test',
          'path': '/test'
        }
      ]
    }
  ]
}
