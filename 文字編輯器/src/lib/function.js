function NewProject() {
    textarea.val('');

    $("#file-sec-name-center").val(".txt");
    $(".rename-display").html("未命名.txt");
    $("#rename-center").val("");
    txtHistory = new window.UndoRedojs(5);

    Toast.toast('已新增專案', 3000);
}

function Rename() {
    if ($('#rename-center').val() == '') {
        filename = '未命名' + $('#file-sec-name-center').val();
        $('.file-name').html(filename);  

        rename_istoggle = false;
    } else if ($('#rename-center').val().includes('\ ') || $('#rename-center').val().includes('/') || $('#rename-center').val().includes('<') || $('#rename-center').val().includes('>') || $('#rename-center').val().includes('&') || $('#rename-center').val().includes(':')) {
        Toast.toast('檔案名稱無效', 5000);

    } else {
        filename = $('#rename-center').val() + $('#file-sec-name-center').val();
        $('.file-name').html(filename);

        rename_istoggle = false;
    }
}
function rename_for_modal(submit) {

    if (submit !== "submit") {

        PopupAlert("重新命名", "請在下方重新命名<br>目前名稱:<span class='file-name'></span><br><input id='rename-center' type='text' placeholder='重新命名...'>&nbsp;<select id='file-sec-name-center'><option value='.txt'>.txt</option><option value='.csv'>.csv</option></select>", "dismiss", "rename_for_modal('submit');")
    } else {
        console.log("submit");
        console.log($('#file-sec-name-center').val())
        Rename()


    }
    $('.file-name').html($('.rename-display').html());

}

function Rename() {
    if ($('#rename-center').val() == '') {
        filename = '未命名' + $('#file-sec-name-center').val();
        $('.file-name').html(filename); $('#rename-center').hide(); $('#file-sec-name-center').hide(); 

        
    } else if ($('#rename-center').val().includes('\ ') || $('#rename-center').val().includes('/') || $('#rename-center').val().includes('<') || $('#rename-center').val().includes('>') || $('#rename-center').val().includes('&') || $('#rename-center').val().includes(':')) {
        Toast.toast('檔案名稱無效', 5000);

    } else {
        filename = $('#rename-center').val() + $('#file-sec-name-center').val();
        $('.file-name').html(filename); $('#rename-center').hide(); $('#file-sec-name-center').hide(); 

        
    }
}
function dl() { saveTextAs($("#textarea").val(), filename); }
function download() {
    let body_1 = "預覽:<br><textarea id='preview' readonly></textarea><br>檔名:<span class='file-name'></span><button class='btn btn-primary' onclick='rename_for_modal()' data-bs-dismiss='modal'>重新命名</button><br><button onclick='dl()' class='btn btn-primary'>下載</button>";
    let alert_1 = "<div class='alert alert-danger'>請將檔案類型<a href='#' onclick='rename_for_modal()' data-bs-dismiss='modal'>變更</a>成.csv檔案</div>";


    if (use_csvtools && filename.includes(".txt")) {
        PopupAlert("下載專案", alert_1 + body_1, "x", "dismiss");
    }
    else {
        PopupAlert("下載專案", body_1, "x", "dismiss")
    }

    $("#preview").val($("#textarea").val());
    $(".file-name").html($(".rename-display").html())
}
