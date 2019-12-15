## webpack4-react-antd-spa

### 目录结构

```
├── dist  -------------------------  打包后的静态资源文件夹
├── package.json  -----------------  项目配置
├── README.md  --------------------  说明文件
├── webpack.config.js  ------------  webpack的配置文件
└── src  --------------------------  源码目录
    ├── common  -------------------  通用工具的文件夹
    │   ├── io-context.js  --------  配置 nattay-fetch
    │   └── util.js  --------------  异步 require 需要的工具
    │   └── common.styl  ----------  通用样式
    ├── frame ---------------------  整体框架组件
    │   ├── index.js  -------------  组件入口文件，不需要异步
    │   ├── frame.js  -------------  整体框架视图逻辑
    │   └── frame.styl  -----------  组件样式
    ├── images --------------------  图片资源
    ├── mods ----------------------  自定义组件
    └── pages --------------------  页面集合目录
        └── xxx ------------------  xxx页面目录
            ├── index.js  -------------  页面入口文件,异步按需加载
            ├── io.js  ----------------  接口配置
            ├── xxx.js  ---------------  页面视图逻辑
            └── xxx.styl  -------------  页面样式
```

### 已定义别名

```
src: resolve('src')
common: resolve('src/common')
images: resolve('src/images')
mods: resolve('src/mods')
pages: resolve('src/pages')
```

