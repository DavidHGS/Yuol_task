# 第二周暑期任务
## 前言
不知道怎么回事自己写的切换函数一直有问题，点击图片切换的效果写的一直不对，但是理论上自己也找不出问题，有点苦恼，所以提交上去的任务没有实现点击切换的效果
## 准备
还是和之前一样，在网上查了一些关于轮播的资料，有了一点思路
## 构思
- 先用8张图片+css写好轮播图的样式，在用javascript实现点击切换按钮切换图片以及自动轮播效果
## 实现过程
- 基本样式
  1. 先li包裹8张图片，并用不同class名来区分他们，以及用span标签来写切换按钮并且插入切换按钮的图片
  2. 再用css来布局，构建出轮播图的基本样式（第1,7,8张图片是隐藏的）布局完成后的效果如下

![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/09.jpg)

- JS实现轮播效果
  1.  用getElementsByTagName('li')将这8张图片存在一个数组arr中，在用for in遍历每个图片的css样式存在数组arr里面的6个小数组中 
   代码如下
   
  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/10.jpg)

  2. 在写一个startMove函数，用定时器实现渐变的效果
   代码如下
  
  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/11.jpg)
   
  3. 轮播效果的实现原理就是8张图片相当于数组arr里的8个元素，点击右切换就相当于在在数组最前面添加最后一个元素，再删除添加后数组中的最后一个元素（如12345678-->81234567)        代码如下
  
  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/12.jpg)

  4. 左切换按钮与之相反,在数组最后面添加第一个元素再删除添加后 数组中的第一个元素（12345678-->23456781)
     代码如下

  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/13.jpg)
   
  5. 然后就是自动播放 自动播放即为 定时器+右切换按钮，在一段时间执行一次oNext.onclick()函数  代码如下
   
  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/14.jpg)

  6. 最后的完善 用onmouseover和onmouseout完成当鼠标移动到图片上时停止，移开时继续播放 代码如下
  
  ![image](https://raw.githubusercontent.com/DavidHGS/Yuol_task/master/task_02/images/15.jpg)
  
## 知识总结
-  for...in——来遍历数组内的元素或者遍历对象的属性
- array.push()——在数组array最后面添加一个元素
- array.shift()——删除数组的第一个元素
- array.unshift（）在数组array最前面添加一个元素
- array.pop()——删除数组的第一个元素

## 学习资料
[焦点图轮播特效](http://www.imooc.com/learn/18)——虽然不是木马轮播但是从中理解图片轮播原理（PS：第一次的不合格轮播就是跟着这个视频学的╮(╯﹏╰）╭ ）

[原生JS实现旋转木马式图片轮播](https://yq.aliyun.com/ziliao/177819)——一个大神的代码
## 后记
由于自己粗心没有认真看完组长布置的任务，以为只要做一个轮播图就行，结果第二次在guthub上面看组长的任务要求时才发现，要做木马轮播图。。。没办法又花时间重新做了一个，悲伤到心在滴血 (T＿T)
## 版权
Copyright © 2017 YUOL-贺广胜, All Rights Reserved