// 程序入口
window.onload = function(){
    // 1.获取元素
    var lis = document.getElementById("header").getElementsByTagName("li");
    var divs = document.getElementById("content").getElementsByTagName("div");
    //遍历li标签
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i ;
        lis[i].onclick = function(){
            //遍历对应标题的内容
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
                divs[i].className = '';
            }
            this.className = 'bgc';
            divs[this.index].className = 'show';
        }
    }
}
