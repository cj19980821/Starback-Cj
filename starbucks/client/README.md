>>技术栈
vue2 + vuex + vue-router  + sass + flex 

>>项目运行
vue init webpack starbacks
cd starbacks
cnpm install 
npm run dev

>>关于接口数据
此项目的所有接口数据都来源于文档提供的接口和配选参数。
此时启动本项目的命令为：npm run dev。

>>说明
如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
开发环境 vue
另外一个 vue2 + vuex 的入门项目，比当前的项目简单很多，非常适合入门练习。地址在这

>>目标功能
 登录 注册功能 -- 完成
 主页面标题切换 -- 完成
 任务列表 -- 完成
 加班详情数据 -- 完成
 休假详情数据 -- 完成
 提交加班 -- 完成
 提交休假 -- 完成
 更新任务状态 -- 完成
 上传附件 -- 完成
 蒙层 -- 完成
 审批历史 -- 完成

>>总结
1、vue因其轻量级的框架在中小型项目中表现亮眼，在大型单页面应用中因为vuex的存在，表现依然出色，在处理复杂交互逻辑的时候，vuex的存在是不可或缺的。所以说利用 vue + vuex 完全可以去做大型的单页面项目。
2、项目写到现在，从 登录注册到、首页、任务列表、加班详情数据、休假详情数据、提交加班、休假、审批历史 一个流程走完之后、不但对vue的理解更深一层，而且对以后掌控大型项目的时候也有非常多的帮助，做一个实际的项目才能对自己有很大的提升。
3、项目已经完成，共7个页面。

>>项目布局
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── node_modules                                // 包管理
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   │── ├── headers.vue                    
│   │       └── head.vue                        // 头部公共组件
│   ├── api                                 
│   ├── directives    
├   ├── plugins── base-ui.js  
├   ├── router ── index.js                       //配置路由
    ├── static
│   │   ├── fonts                                //字体图标
│   │   ├── imgs                                 //全部图片
        ├── scss                                 //公共样式
    ├── store                                     //仓库
│   │   ├── mudules                             
            ├── user.js  
        ├── index.js  
    ├── utils                                     //仓库                          
        ├── flexible.js  
        ├── request.js                             //封装request
│   ├── views
│   │   ├──detail                       // 详情页
│   │   │   ├── index.vue                       
│   │   ├── home                                //主界面
│   │   │   ├── index.vue                     
│   │   │   └── components                      //划分组件
│   │   │       ├── tableMenu.vue                 // 菜单切换
│   │   │       ├── tableTitle.vue                  // 菜单标题
│   │   │       ├── todolist.vue                // 列表渲染   
│   │   ├── login
│   │   │   └── index.vue                        // 登录
│   │   ├── search
│   │   │   └── index.vue                    // 搜索
│   │   ├── homefirst
│   │   │   └── index.vue                        // 跳转添加
        ├── tk
│   │   │   └── index.vue                        // 蒙层
        ├── history
│   │   │   └── index.vue                        // 历史页面
├── App.vue                                  // 
├── main.js                                  // 静态资源文件
│   ├── static                                  // 静态资源文件

├── server      