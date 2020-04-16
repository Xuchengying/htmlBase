           /*
            提示信息：
            */
          function showTips(spanID, msg) {
              var span = document.getElementById(spanID);
              span.innerHTML = msg;
}
            /*
            校验用户名：
            */
         function checkUsername() {
             var uValue = document.getElementById("userName").value;
             var span = document.getElementById("unameSpan");
             if (uValue.length < 6) {
                 span.innerHTML = "<font color='red' size='2'>用户名太短,请继续输入";
                 return false;
                } else {
                       span.innerHTML = "<font color='green' size='4'> √";
                           return true;
                        }
                    }

            /*
            校验密码：
            */
         function checkPass() {
            var Pass = document.getElementById("pass").value;
            var span = document.getElementById("pwdSpan");
            if (Pass.length < 6) {
                span.innerHTML = "<font color='red' size='2'>密码太短,请继续输入";
                return false;
               } else {
                      span.innerHTML = "<font color='green' size='4'> √";
                          return true;
                       }
                   }

            /*
            确认密码：
            */
           function checkRePass(){
            var Pass = document.getElementById("pass").value;
            var RePass = document.getElementById("repass").value;
            var span = document.getElementById("repwdSpan");
            if(RePass != Pass){
                span.innerHTML = "<font color='red' size='2'>两次密码不一致";
                return false;
            }else{
                span.innerHTML = "<font color='green' size='4'> √"
                return true;
            }
           }

           /*
            校验姓名：
            */
         function checkName() {
            var Name = document.getElementById("Name").value;
            var span = document.getElementById("nameSpan");
            if (Name.length == 0) {
                span.innerHTML = "<font color='red' size='2'>请输入姓名";
                return false;
               } else {
                      span.innerHTML = "<font color='green' size='4'> √";
                          return true;
                       }
                   }

           /*
            校验年龄：
            */
         function checkAge() {
            var Age = document.getElementById("Age").value;
            var span = document.getElementById("ageSpan");
               if(isNaN(Age)){
                span.innerHTML = "<font color='red' size='2'>请输入数字";
                return true;
               }else {
                span.innerHTML = "<font color='green' size='4'> √";
                     return false;
                       }
                   }

                   function checkForm() {
                    var flag = checkUsername() && checkPass() && checkRePass() && checkName() && checkAge();
                        return flag;
                   }