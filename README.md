# ClassPicker
[中文](https://github.com/aiwandiannaodelele/ClassPicker-nextgen?tab=readme-ov-file#%E7%82%B9%E7%9A%84%E5%B0%B1%E6%98%AF%E4%BD%A0)

A front-end random name picking tool developed with HTML, Tailwind CSS, and JavaScript. No backend support is required—simply open the webpage to use it.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blueviolet)](http://cpng.paydn.cn)
[![License](https://img.shields.io/github/license/aiwandiannaodelele/ClassPicker-Nextgen)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html5.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://javascript.com)

## 🚀 Project Features

- **Pure Front-end Implementation**: No backend support needed; all functions are completed in the browser.
- **Zero Dependencies**: Only uses HTML, CSS, and JavaScript without relying on any frameworks.
- **Responsive Design**: Adapts to different screen sizes and works well on both mobile and desktop devices.
- **Ready to Use**: Directly open the HTML file in a browser after downloading.
- **Lightweight**: Small file size with fast loading speed.

## 🌟 Core Functions

### 1. Random Number Selection
- Customize the student ID range (e.g., 1-45).
- Click the button to randomly scroll and stop at a number.
- Digital scrolling animation effect to enhance visual feedback.

### 2. Instant Result
- After checking the function, clicking the button directly displays the final random number.
- No animation preview needed, improving selection efficiency.
- Suitable for scenarios requiring quick results.

### 3. Interface Optimization
- Modern UI design implemented with Tailwind CSS.
- Disables browser zoom and right-click menu for a better user experience.
- Automatically adjusts the interface zoom ratio according to the window size.
- Disables text selection to avoid accidental operations.

### 4. About Interface
- Simple about interface displaying version information.

## 🛠️ Technical Implementation

### Technology Stack
- **HTML5**: Semantic tags to build the page structure.
- **Tailwind CSS v3**: Implements modern UI design and responsive layout.
- **JavaScript**: Implements random number generation, animation effects, and interaction logic.
- **Font Awesome**: Provides icon support (optional, for the about interface).

### Key Features
- Random number generation algorithm to ensure result randomness.
- Digital scrolling animation effect to enhance user experience.
- Responsive design adapting to different devices.
- Customizable theme colors for easy modification.

## 📦 Installation and Usage

### Usage Methods
1. **Direct Download and Use**:
   - Download the latest version of the HTML file and binary files from [Releases](https://github.com/aiwandiannaodelele/ClassPicker-Nextgen/releases).
   - Open the HTML file in a browser to use it.
2. **Online Use**:
   - Directly visit the [GitHub Pages](https://cpng.paydn.cn) version.

### Resource Requirements
- Icon files (optional):
  - `icon.png`: App icon for the about interface.
  - If the icon file is missing, the about interface will display the default icon.

## 🖥️ Interface Preview
![Interface Preview](https://github.com/user-attachments/assets/0ff43294-a9d3-45c8-a9aa-ae5cae21822c)

### Interface Description
- **Number Display Area**: Shows the current random number, highlighted when selected (yellow theme color).
- **Control Buttons**: Start/stop random selection, switching states when clicked.
- **Student ID Range**: Customizes the random number range, supporting plus/minus buttons for quick adjustment.
- **Function Options**: Instant result toggle with a modern sliding switch.
- **About Button**: Click to display the about interface with version and developer information.

## ⚙️ Custom Configuration

### Theme Color Modification
1. Open the HTML file.
2. Locate the Tailwind configuration section:
   ```javascript
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             primary: '#F59E0B', // Yellow theme color
             secondary: '#D97706', // Dark yellow
             // Other color configurations...
           },
           // Other configurations...
         },
       }
     }
   </script>
   ```
3. Modify the `primary` and `secondary` color values to change the theme color.


## 📝 Notes

### 1. Browser Compatibility
- Modern browsers (Chrome, Firefox, Edge, Safari, etc.) are recommended.
- IE browser is not supported.

### 2. Local Storage
- This application does not use any local storage; all data is only in memory.
- All settings will return to default after refreshing the page.

### 3. macOS Installation
- Open the installation package and drag the software icon into the App folder on the right.
- If a prompt appears saying the installation package is damaged after opening, open Terminal, enter `sudo xattr -r -d com.apple.quarantine /Applications/点的就是你.app`, then enter the password (note that the password will not be displayed), and then open the software again without the prompt.


## 📧 Contact and Feedback

- **Developer**: Ivan (aiwandiannaodelele)
- **Email**: aiwandiannaodelele@outlook.com
- **Issue Feedback**: Submit suggestions or bug reports in [GitHub Issues](https://github.com/aiwandiannaodelele/ClassPicker-Nextgen/issues).
- **Project Address**: https://github.com/aiwandiannaodelele/ClassPicker-Nextgen

## 📄 Open Source License

This project is licensed under the [MIT License](LICENSE). Contributions or improvement suggestions are welcome!

---

✨ Use ClassPicker to make random selection easier!
# 点的就是你

一款基于 HTML、Tailwind CSS 和 JavaScript 开发的前端随机点名工具，无需后端支持，打开网页即可使用。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blueviolet)](http://cpng.paydn.cn)
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
- 自定义主题色，可轻松修改

## 📦 安装与使用

### 使用方式
1. **直接下载使用**：
   - 从 [ Releases ](https://github.com/aiwandiannaodelele/ClassPicker-Nextgen/releases) 下载最新版本的 HTML 文件和二进制文件
   - 在浏览器中打开 HTML 文件即可使用
2. **在线使用**：
   - 直接访问 [ GitHub Pages ](https://cpng.paydn.cn) 版本

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


## 📝 注意事项

### 1. 浏览器兼容性
- 推荐使用现代浏览器（Chrome、Firefox、Edge、Safari 等）
- 不支持 IE 浏览器

### 2. 本地存储
- 本应用不使用任何本地存储，所有数据仅在内存中
- 刷新页面后，所有设置将恢复默认

### 3. macOS 安装
- 打开安装包，把软件图标拖进右侧的 App 文件夹。
- 打开后如果提醒安装包已损坏，那就打开终端，输入`sudo xattr -r -d com.apple.quarantine /Applications/点的就是你.app`，然后输入密码，注意密码不会显示，然后再打开软件，就不会有提示了。


## 📧 联系与反馈

- **开发者**：龚奕帆（aiwandiannaodelele）
- **邮箱**：aiwandiannaodelele@outlook.com
- **问题反馈**：在 [ GitHub Issues ](https://github.com/aiwandiannaodelele/ClassPicker-Nextgen/issues) 提交建议或 Bug 报告
- **项目地址**：https://github.com/aiwandiannaodelele/ClassPicker-Nextgen

## 📄 开源协议

本项目采用 [ MIT License ](LICENSE)，欢迎贡献代码或提出改进建议！

---

✨ 使用 ClassPicker，让随机选择更轻松！
