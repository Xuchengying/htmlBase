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
        