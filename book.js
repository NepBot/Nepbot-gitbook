module.exports = {
  // 书籍信息
  title: 'Nepbot guide',
  description: '描述',
  isbn: '图书编号',
  author: 'Nepbot',
  lang: 'en',

  // 插件列表
  plugins: ["-lunr", "-search", "search-pro", "splitter", "insert-logo", "anchor-navigation-ex", "flexible-alerts", "hide-element", "expandable-chapters", "favicon"],

  // 插件全局配置
  pluginsConfig: {
    "insert-logo": {
      "url": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdc38b35a-1cd8-498b-bc27-607f24766911%2Fnepbot_logo-_color.png?table=block&id=8987307d-cbdd-43c5-a26c-c2554a98c482&spaceId=dd5abf6f-f4a4-45f8-b5b8-5944df730a2b&width=250&userId=e6d2f283-9f7f-4749-992c-cc4c6ca8d3a0&cache=v2",
      "style": "background: none; max-height: 100px; min-height: 30px"
    },
    "flexible-alerts": {
      "style": "callout",
      "comment": {
        "label": "Comment",
        "icon": "fa fa-comments",
        "className": "info"
      }
    },
    "hide-element": {
      "elements": [".gitbook-link"]
    },
    "favicon": {
      "shortcut": "./assets/nepbot_logo.png",
      "bookmark": "./assets/nepbot_logo.png",
      "appleTouch": "./assets/nepbot_logo.png",
      "appleTouchMore": {
          "120x120": "./assets/nepbot_logo.png",
          "180x180": "./assets/nepbot_logo.png"
      }
  }
  },

  // 模板变量
  variables: {
  },
  
};