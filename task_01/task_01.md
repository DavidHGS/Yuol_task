# 第一周暑期任务
开始的任务组长布置的比较简单，就是用jscss写一个类似与alter（）的弹窗 但是要有动画效果 弹出页面不要太僵硬
## 准备
- 在慕课网上看了一下关与javascipt的视频教程就开始做了
## 构思
 1. 就是用input样式为button写一个弹出按钮
 2. 在用javascript写一个从左到右滑出的效果
## 实现过程
1. 先用html+css写一个弹出框，并将其left值为负值 使其隐藏在屏幕外
2. 用js写一个startMove函数，用定时器，让left值累加，达到从左至又不断累加的动画效果
3. 再用if语句判断，当其达到预定位置时，清除定时器，就完成了一个简单的弹出效果
##知识总结
- setInterval（function，time）函数用来设置一个定时器
- clearInterval（）用来清除定时器
## 后记
第一周的任务比较简单，组长应该是想用这个过度一下，感觉接下来的任务应该就没这么轻松了 O-O
## 学习资料
[JS动画效果](http://www.imooc.com/learn/167)——一个学js动画很不错的教学视频
## 版权
Copyright © 2017 YUOL-贺广胜, All Rights Reserved


