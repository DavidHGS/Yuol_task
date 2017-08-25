# 第三周暑期任务
这一周的内容是写一个类似于b站的弹幕
## 准备
刚开始没有多少头绪，于是在网上找到了很多的资料和视频，慢慢的有了一定的思路
## 构思
- 还是和之前的一样，先用HTML+css布局
  1. 用div做一个大的盒子
  2. 盒子里面包括2大部分 一个是视频框 一个是弹幕发射框
  3. 做好后效果如下
![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_03/images/01.jpg)
## 实现过程
- 然后开始写javascript了
   对于弹幕的发送我是这么想的
  1. 弹幕在网页上实现一般是用span标签，于是我的思路是
  2. 用一个函数动态的创建span标签
  3. 再用一个txt做参数接收发射框的数据，替换span标签的内容，并在屏幕上显示
  
  4. 实现的代码如下
  
  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_03/images/02.jpg)

  5. 最后就是用random（）函数随机出现弹幕的字体大小，颜色，运动曲线，以及出现在屏幕的位置（即top值的改变）
  实现代码如下

  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_03/images/03.jpg)
  
  6. 完善功能  加了一个回车来执行发送按钮，以及输入完成后清空发射框
  实现代码如下

  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_03/images/04.jpg)
  
## 知识总结
- this在调用的时候 指向调用函数的主体对象
- .call（）函数能改变函数内部的指向
- Math.random()可以去0~1中的随机数（包括0不包括1）
- offset+属性（首字母大写）可以获取当前的元素属性
## 后记
刚开始插入的视频只有声音没有画面，最后百度了一下，不仅是要将原来在billbill下载的.blv后缀的视频转换成mp4 而且还要转换成MP4的avc 720p 才能在网页上显示 为了能在网页上显示， 百度转化格式 弄了好长时间  ╭(╯^╰)╮
## 学习资料
- [js实现弹幕1](http://www.cnblogs.com/Chenshuai7/p/7091508.html)——教程1
- [js实现弹幕2](http://blog.csdn.net/qq377751971/article/details/65446236)
——教程2
- [JavaScript教程](http://www.w3school.com.cn/js/index.asp)——查询手册
## 版权
Copyright © 2017 YUOL-贺广胜, All Rights Reserved