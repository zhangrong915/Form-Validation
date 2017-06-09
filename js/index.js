$(document).ready(function(){

function fun(input,RegExp,warning){
   input.blur(function(){
           let value=input.val();
           let flag=RegExp.test(value);
           flag===false? warning.css({"display":"block"}):warning.css({"display":"none"})
           //console.log(value+"----"+flag);
       });
}
function foo(passworda,passwordb,warning){
   passwordb.blur(function(){
           let f=passworda.val()===passwordb.val();
           f===false?warning.css({"display":"block"}):warning.css({"display":"none"});
           //console.log(passworda.val()+"----"+passwordb.val()+"-----"+f);
       });
}
  (function(){
      /**账号 */
       let account=$(".account");
       let accountWarning=$(".account-Alert");
       fun(account,/^[a-zA-Z]{1}(\w{5,19})$/, accountWarning);
       /*let accountValue=account.val();
        console.log(accountValue);*/
       

       /**密码 */
       let passworda=$(".passworda");
       let passwordaWarning=$(".passworda-Alert");
       fun(passworda,/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/, passwordaWarning);
  

      /**确认密码 */
       let passwordb=$(".passwordb");
       let passwordbWarning=$(".passwordb-Alert");
       foo(passworda,passwordb,passwordbWarning);
      
      /**邮箱 */
       let email=$(".email");
       let emailWarning=$(".email-Alert");
       fun(email,/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,emailWarning);

        $(".button").click(function(){
           /* console.log("@@@@");*/
            let accountValue=account.val();
            let passwordaValue=passworda.val();
            let passwordbValue=passwordb.val();
            let emailValue=email.val();
            //console.log(accountValue+"----"+passwordaValue+"-----"+passwordbValue+"---"+emailValue);
             let flagAccount=/^[a-zA-Z]{1}(\w{5,19})$/.test(accountValue);
             let flagPassworda=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(passwordaValue);
             let flagPasswordb=passwordaValue===passwordbValue;
             let flagEmail=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(emailValue);
            // console.log(flagAccount+"----"+flagPassworda+"-----"+flagPasswordb+"---"+flagEmail);
             let f=flagAccount&&flagPassworda&&flagPasswordb&&flagEmail;
             f===false? $(".submit-Alert").css({"display":"block"}):$(".submit-Alert").css({"display":"none"});
             if(f){
                 alert("注册成功！！");
             }
     });


})()


});