//        定义三个变量：控件组，下一个，上一个
var current_fs, next_fs, previous_fs;
//        获取li元素也就是进度条的集合
var lis=document.getElementsByTagName("li");

//点击下一步按钮调用该方法
function nextbtn(obj,num){
    current_fs=obj.parentNode;
    next_fs= getNearEle(current_fs,0);
//            通过js来控制空间组的显示隐藏
    next_fs.style.display="block";
    current_fs.style.display="none"
//            通过js为某个li元素添加class="active";,来控制进度条的样式
    lis[num].className+="active";

}
//点击上一步按钮调用该方法
function prevbtn(obj,num){
    current_fs=obj.parentNode;
    previous_fs= getNearEle(current_fs,1);
    //            通过js来控制空间组的显示隐藏
    current_fs.style.display="none";
    previous_fs.style.display="block";
    lis[num].className="";
}

/**
 * 获取相邻元素
 * @param ele 参考物元素
 * @param type 类型，上一个(1)or下一个(0)
 * @return 返回查找到的元素Dom对象，无则返回null
 */
function getNearEle(ele, type) {
    type = type == 1 ? "previousSibling" : "nextSibling";
    var nearEle = ele[type];
    while(nearEle) {
        if(nearEle.nodeType === 1) {
            return nearEle;
        }
        nearEle = nearEle[type];
        if(!nearEle) {
            break;
        }
    }
    return null;
}

// 效验表单
function showTips(spanID, msg) {
    var span = document.getElementById(spanID);
    span.innerHTML = msg;
}

//验证用户名
function checkUsername(){
    var username = document.getElementsByClassName('username')
}