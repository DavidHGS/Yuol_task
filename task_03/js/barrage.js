var oBox= document.querySelector('.box');//获取.box元素
var oCon=document.querySelector('.con');//获取input框
var oBtn=document.querySelector('.send-btn');//获取发送按钮
var cW=oBox.offsetWidth;//获取box的宽度
var cH=oBox.offsetHeight;//获取box的高度
var message='';//弹幕内容初始化

        oBtn.onclick= send;//点击发送
        oCon.onkeydown=function(e){//回车发送
                e=e||window.event;
                if(e.keyCode===13){
                        send();
                }
        }
        function send(){
                if(oCon.value.length<=0){
                        alert('请输入弹幕内容');
                        return false;//终止函数的执行
                   }
            message =oCon.value;//生成标签
            console.log(message)
            createEle(message);
            oCon.value='';//收尾工作  清空输入框
         }

    function createEle(txt){//动态生成span标签
        var oMessage=document.createElement('span');//创建标签
        oMessage.innerHTML=txt;//接受参数txt并且替换器内容
        oMessage.style.left=cW+'px'//初始化标签生成位置
        oBox.appendChild(oMessage);//把标签塞到oBox里面
        roll.call(oMessage,{timing:['linear','ease-out'][~~(Math.random()*2)],
                color:'#'+(~~(Math.random()*(1<<24))).toString(16),
                top:random(0,cH),
                fontSize:random(16,32)
        });//call改变函数内部this的指向
     }
     function roll(opt){//弹幕滚动
        //如果对象中不存在timing 初始化timing
        opt.timing=opt.timing||'linear';
        opt.color=opt.color||'#fff';
        opt.top=opt.top|| 0;
        opt.fontSize=opt.fontSize||16;
        console.log(opt.top)
        this._left=parseInt(this.offsetLeft);//获取当前的left值
        this.style.color=opt.color;//初始化颜色
        this.style.top=opt.top+'px';//初始化高度
        this.style.fontSize=opt.fontSize+'px';//初始化字体大小
        this.timer=setInterval(function(){
                if(this._left<=40){
                        clearInterval(this.timer);//终止定时器
                        this.parentNode.removeChild(this);
                        return;
                }
                switch(opt.timing){
                        case'linear':
                        this._left+=-2;
                        break;
                        case'ease-out':
                        this._left+=(0-this._left)*.01;
                        break;
                }                       
                this.style.left=this._left+'px';
        }.bind(this),1000/60)
     }
     function random(start,end){//随机数封装
        return start+~~(Math.random()*(end-start));
     }