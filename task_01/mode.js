var timer=null;
function move(){
	var alter =document.getElementById("alter");
	stareMove();

}
function stareMove(){
	var alter =document.getElementById("alter");
	timer=setInterval(function move(){
		if(alter.offsetLeft==580){
			clearInterval(timer);}
		else{
		alter.style.left=alter.offsetLeft+20+'px';}
	},30);
}	