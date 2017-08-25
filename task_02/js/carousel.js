    var oPic=document.getElementById('pic');
	var oLi=oPic.getElementsByTagName('li');
	var oPrev=document.getElementsByClassName('prev')[0];
	var oNext=document.getElementsByClassName('next')[0];
	var arr=[];
	var timer=0;

	for (var i = 0; i < oLi.length; i++) {//循环遍历每个li的样式储存到数组
		arrL=parseInt(getComputedStyle(oLi[i]).left);
		arrT=parseInt(getComputedStyle(oLi[i]).top);
		arrW=parseInt(getComputedStyle(oLi[i]).width);
		arrH=parseInt(getComputedStyle(oLi[i]).height);
		arrP=parseFloat(getComputedStyle(oLi[i]).opacity*100);
		arrZ=getComputedStyle(oLi[i]).zIndex;
		arr.push([arrL,arrT,arrW,arrH,arrP,arrZ])
	}
    /*自动播放与停止*/
    function play(){
    	timer=setInterval(function(){
    		oNext.onclick();
    	},2500);
    }
    function stop(){
    	clearInterval(timer);
    }

    /*上一个元素的位置的属性更替给下一个元素*/
    oPrev.onclick=function(){
    	arr.push(arr[0]);//在数组最后面添加第一个元素
    	arr.shift();//删除添加后 数组的第一个元素
    	for (var i = 0; i < oLi.length; i++) {
			oLi[i].style.zIndex = arr[i][5];
			startMove(oLi[i],{left:arr[i][0],top:arr[i][1],width:arr[i][2],height:arr[i][3],opacity:arr[i][4]});
		}
    }
    /*下一个元素的位置的属性更替给上一个元素*/
	oNext.onclick=function(){
		arr.unshift(arr[arr.length-1]);//在数组最前面添加最后一个元素
		arr.pop();//删除添加元素后 数组的最后一个元素
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].style.zIndex = arr[i][5];
			startMove(oLi[i],{left:arr[i][0],top:arr[i][1],width:arr[i][2],height:arr[i][3],opacity:arr[i][4]});
		}
	}
   /*失败的点击移动
	   for (var i = 0; i < oLi.length; i++){
				oLi[i].onclick=function(){
					if(parseInt(getComputedStyle(oLi[i]).left)>480){ 
						for(j=0;j<5-getComputedStyle(oLi[i]).zIndex;j++){
							oPrev.onclick();
						}
					}
				    else{for(j=0;j<5-getComputedStyle(oLi[i]).zIndex;j++){
							oNext.onclick();
						}
				    }
				};
			};
			*/
	/*鼠标经过时停止*/
	for(i=1;i<=6;i++){
		oLi[i].onmouseover=stop;
		oLi[i].onmouseout=play;
	}
	oPrev.onmouseover=stop;
	oNext.onmouseover=stop;
	play();