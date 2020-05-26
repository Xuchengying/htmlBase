// 轮播效果
var imgs = document.getElementsByClassName('img');//获取图片
        var points = document.getElementsByClassName('point');//获取点
        var goLastBtn = document.getElementById('golast');
        var goNextBtn = document.getElementById('gonext');

        var index = 0;//index代表显示哪一张图片
        var time = 0;//定时器计时

        //清除active
        function clearActive(){
            for(var i = 0; i<imgs.length; i++){
                imgs[i].className = "img";
            }
            for(var i = 0; i<points.length; i++){
                points[i].className = "point";
            }
        }
        //修改类名
        function goIndex(){
            clearActive();
            imgs[index].className = "img active";
            points[index].className = "point active";
        }
        //显示下一张图片
        function goNext(){
            if(index < 4){
                index++;
            }else{
                index = 0;
            }
            goIndex();
        }
        //显示上一张图片
        function goLast(){
            if (index <= 0) {
                index = 4
            }else{
                index--;
            }
            goIndex();
            }
        //添加事件
        goNextBtn.addEventListener('click',function(){
            goNext();
        })
        goLastBtn.addEventListener('click',function(){
            goLast();
        })
        //获取每个点的数据，在显示对应的图片
        for(var i = 0;i < points.length; i++){
            points[i].addEventListener('click',function(){
                index = this.getAttribute('data-num');
                goIndex();
                time = 0;
            })
        }
        //定时器，图片自动跳转
        setInterval(function(){
            time++;
            if(time == 10){
                goNext();
                time = 0;
            }
        }, 300);
        

        // 时钟
        var myCanvas = document.getElementById('myCanvas');
	var c = myCanvas.getContext('2d');
	function clock(){
		c.clearRect(0,0,400,400);
       //		获取当前时间
		var data = new Date();
		var sec =data.getSeconds();//获取秒
		var min =data.getMinutes();//获取小时
		var hour=data.getHours();//获取分钟
		
		c.save();//保存当前状态
		c.translate(200,200);//转换画布坐标系统
		c.rotate(Math.PI/2);//确定旋转点的
		//分钟刻度线
		for(var i=0;i<60;i++){	//画12个刻度线			
			c.beginPath();
			c.strokeStyle = "#f00";
			c.lineWidth = 5 ;
			c.moveTo(117,0);
			c.lineTo(120,0);
			c.stroke();
			c.rotate(Math.PI/30); //每个6deg画一个时钟刻度线
			c.closePath();
		}
		//时钟刻度线
		for(var i=0;i<12;i++){	//画12个刻度线			
			c.beginPath();
			c.strokeStyle = "#000";				
			c.lineWidth = 8 ;
			c.moveTo(100,0);
			c.lineTo(120,0);
			c.stroke();
			c.rotate(Math.PI/6); //每个30deg画一个时钟刻度线
			c.closePath();
		}
		//外表盘
		c.beginPath();
		c.strokeStyle = "pink";
		c.arc(0,0,145,0,Math.PI*2);
		c.lineWidth = 12 ;
		c.stroke();
		c.closePath();
		//画时针
		hour = hour>12?hour-12:hour;
		c.beginPath();
		c.save();
		c.rotate(Math.PI/6*hour+Math.PI/6*min/60+Math.PI/6*sec/3600);
		c.strokeStyle = "yellowgreen";
		c.lineWidth = 4 ;
		c.moveTo(-20,0);
		c.lineTo(50,0);
		c.stroke();
		c.restore();
		c.closePath();
		//画分针
		c.beginPath();
		c.save();
		c.rotate(Math.PI/30*min+Math.PI/30*sec/60);
		c.strokeStyle = "springgreen";
		c.lineWidth = 3 ;
		c.moveTo(-30,0);
		c.lineTo(70,0);
		c.stroke();
		c.restore();
		c.closePath();
		//画秒针
		c.beginPath();
		c.save();
		c.rotate(Math.PI/30*sec);
		c.strokeStyle = "red";
		c.lineWidth = 2 ;
		c.moveTo(-40,0);
		c.lineTo(120,0);
		c.stroke();
		c.restore();
		c.closePath();
		
		c.restore();
	}
	clock();
	setInterval(clock,1000);//定时器，每隔一秒重新绘制钟表