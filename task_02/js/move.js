function startMove(obj,json){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json ){
		//1.获取当前值(width height top left)
			var cur= 0 ;
			if(attr=="opacity"){
				cur=Math.round(parseFloat(getComputedStyle(obj)[attr])*100);
			}
			else{
				cur = parseInt(getComputedStyle(obj)[attr]);
			}
		//2.计算运动速度
			var speed=(json[attr]-cur)/6;
			if(speed>0){
				speed=Math.ceil(speed);
			}
			else{
				speed=Math.floor(speed);
			}
			if(cur!=json[attr]) bStop=false;
			if(attr=="opacity"){
	            obj.style[attr]=(cur+speed)/100;
			}
			else{
			    obj.style[attr]=cur+speed+'px';			
			}
		}
			if(bStop){
				clearInterval(obj.timer);
			}	
	},30);
}