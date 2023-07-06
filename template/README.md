## 介绍
moga-component是moga官方提供基础的react组件模板，可以在此基础上进行组件开发。

#### 特点
1. moga-component的编译底层使用了[render-builder](https://www.npmjs.com/package/render-builder)编译器。
2. moga-component组件使用的插件为[moga-component-build-plugin](https://www.npmjs.com/package/moga-component-build-plugin)。
3. 使用 npm run start命令即可运行组件，组件的编写只需要关注src目录的index文件即可，无额为操作
4. 使用 npm run build名利，即可构建umd、esm、cjs规范下的组件，满足多种场景使用。
5. 工程使用[moga-lint](https://www.npmjs.com/package/moga-lint)来做项目提交、编写等各个环节的代码校验，保证规范性。
6. 项目工程中的app.json用于moga应用配置，schema.json用于组件接入moga低代码平台时候的数据协议配置，当然你是普通的react组件开发，无需关注它们的配置，它们并不影响你组件的开发。

#### 用法

```javascript
import MogaC from 'moga-component';

function App(){
  return <MogaC />;
}

export default App;
```