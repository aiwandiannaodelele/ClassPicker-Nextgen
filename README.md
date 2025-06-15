# ClassPicker - 点的就是你 (HTML 版本)

一款基于 HTML、Tailwind CSS 和 JavaScript 开发的前端随机点名工具，无需后端支持，打开网页即可使用。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blueviolet)](https://aiwandiannaodelele.github.io/ClassPicker-Nextgen/)
[![License](https://img.shields.io/github/license/aiwandiannaodelele/ClassPicker-Nextgen)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html5.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://javascript.com)

## 🚀 项目特点

- **纯前端实现**：无需后端支持，所有功能在浏览器中完成
- **零依赖**：仅使用 HTML、CSS 和 JavaScript，不依赖任何框架
- **响应式设计**：适配不同屏幕尺寸，在手机和桌面设备上均可良好运行
- **即开即用**：下载 HTML 文件后直接在浏览器中打开即可使用
- **轻量级**：文件体积小，加载速度快

## 🌟 核心功能

### 1. 随机数字选择
- 自定义学号范围（如1-45）
- 点击按钮随机滚动并停止在某个数字
- 数字滚动动画效果，增强视觉反馈

### 2. 瞬间出结果
- 勾选功能后，点击按钮直接显示最终随机数
- 无需动画预览，提高选择效率
- 适合需要快速得出结果的场景

### 3. 界面优化
- 现代化 UI 设计，使用 Tailwind CSS 实现
- 禁止浏览器缩放和右键菜单，提供更好的使用体验
- 自动根据窗口大小调整界面缩放比例
- 禁止文字选中，避免误操作

### 4. 关于界面
- 简洁的关于界面，显示版本信息
- 包含应用图标，提升品牌识别度

## 🛠️ 技术实现

### 技术栈
- **HTML5**：语义化标签，构建页面结构
- **Tailwind CSS v3**：实现现代化 UI 设计和响应式布局
- **JavaScript**：实现随机数生成、动画效果和交互逻辑
- **Font Awesome**：提供图标支持（可选，用于关于界面）

### 关键特性
- 随机数生成算法，确保结果随机性
- 数字滚动动画效果，增强用户体验
- 响应式设计，适配不同设备
- 窗口置顶功能（通过 CSS 实现）
- 自定义主题色，可轻松修改

## 📦 安装与使用

### 使用方式
1. **直接下载使用**：
   - 从 [ Releases ](https://github.com/aiwandiannaodelele/ClassPicker-Nextgen/releases) 下载最新版本的 HTML 文件和二进制文件
   - 在浏览器中打开 HTML 文件即可使用
2. **在线使用**：
   - 直接访问 [ GitHub Pages ](https://aiwandiannaodelele.github.io/ClassPicker/) 版本

### 资源要求
- 图标文件（可选）：
  - `icon.png`：应用图标，用于关于界面
  - 若缺少图标文件，关于界面将显示默认图标

## 🖥️ 界面预览
![界面预览](https://github.com/user-attachments/assets/0ff43294-a9d3-45c8-a9aa-ae5cae21822c)

### 界面说明
- **数字显示区**：显示当前随机数，选中时突出显示（黄色主题色）
- **控制按钮**：开始/停止随机选择，点击后切换状态
- **学号范围**：自定义随机数范围，支持加减按钮快速调整
- **功能选项**：瞬间出结果开关，使用现代化滑动开关
- **关于按钮**：点击显示关于界面，包含版本信息和开发者信息

## ⚙️ 自定义配置

### 主题色修改
1. 打开 HTML 文件
2. 找到 Tailwind 配置部分：
   ```javascript
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             primary: '#F59E0B', // 黄色主题色
             secondary: '#D97706', // 深黄色
             // 其他颜色配置...
           },
           // 其他配置...
         },
       }
     }
   </script>
   ```
3. 修改 `primary` 和 `secondary` 颜色值，即可更改主题色

### 图标修改
1. 准备好自定义图标 `icon.png`
2. 将图标文件放在与 HTML 文件相同的目录下
3. 图标会自动加载到关于界面

## 📝 注意事项

### 1. 浏览器兼容性
- 推荐使用现代浏览器（Chrome、Firefox、Edge、Safari 等）
- 不支持 IE 浏览器

### 2. 本地存储
- 本应用不使用任何本地存储，所有数据仅在内存中
- 刷新页面后，所有设置将恢复默认

## 📧 联系与反馈

- **开发者**：Ivan/龚奕帆（aiwandiannaodelele）
- **邮箱**：aiwandiannaodelele@outlook.com
- **问题反馈**：在 [ GitHub Issues ](https://github.com/aiwandiannaodelele/ClassPicker-Nextgen/issues) 提交建议或 Bug 报告
- **项目地址**：https://github.com/aiwandiannaodelele/ClassPicker-Nextgen

## 📄 开源协议

本项目采用 [ MIT License ](LICENSE)，欢迎贡献代码或提出改进建议！

---

✨ 使用 ClassPicker，让随机选择更轻松！
