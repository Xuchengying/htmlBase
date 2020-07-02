//实例化Vue
new Vue({
    el:'#vue-app',
    data(){
        return{
            name:'徐成英',
            wechat:'13996690470',
        }
    },
    methods:{
        greet(time){
            return `good ${time} ${this.name}`;
        },
    haveLunch(){
        return`吃了午饭没？`;
    }
}
});