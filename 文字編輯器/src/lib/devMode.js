
$("#logo-img").attr("data-bs-dismiss","offcanvas")
document.querySelector("#logo-img").addEventListener("click", function () {
    console.log("dev mode");
   
    if (!Dev.statue == true) {
         
        PopupAlert("測試人員模式-登入", "輸入通行碼:<input type='text' id='dev-login-user'>", "dismiss", "Dev_login($('#dev-login-user').val())")

        _Offcanvas.isShowing = false;
    } else {

        Toast.toast("你已經是測試人員",3000)
    }


})

const Dev = {}
//Dev.userName = "USER-330561",
    Dev.userCode = "F-178-3200",
    Dev.statue = false,
    Dev.vConsole;



function Dev_login(c) {

    if (c == Dev.userCode) {
        Toast.toast("登入成功", 1500);
        Dev.vConsole = new VConsole({ theme: 'dark' });
        Dev.statue = true;

    } else {
        Toast.toast("登入失敗", 1500);
    }

}
function _Statue() {
    console.log("文字編輯器 -- v1.0.1  2022-06-17 by Jerry");
    console.log("目前的檔案:"+$("#textarea").val());
    console.log("檔案名稱:"+filename);


}
