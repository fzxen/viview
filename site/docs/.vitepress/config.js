module.exports = {
  title: "ViView",
  description: "High Quality Component Libraty",
  lang: "zh-CN",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "介绍", link: "/introduction/" },
      { text: "组件", link: "/components/" },
    ],
    sidebar: {
      "/introduction": [
        {
          text: "安装",
          link: "/introduction/installation",
        },
      ],
      "/components": [
        {
          text: "布局",
          children: [
            {
              text: "Layout",
              link: "/components/layout",
            },
          ],
        },
      ],
    },
  },
};
