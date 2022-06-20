function NewProject() {
    textarea.val('');
    use_csvtools = false;
    use_jsontools = false

    $("#file-sec-name-center").val(".txt");
    $(".rename-display").html("未命名.txt");
    $("#rename-center").val("");
    filename = '未命名' + '.txt';
    txtHistory = new window.UndoRedojs(5);

    Toast.toast('已新增專案', 3000);
}

function Rename() {
    if ($('#rename-center').val() == '') {
        filename = '未命名' + $('#file-sec-name-center').val();
        $('.file-name').html(filename);

        rename_istoggle = false;
    } else if ($('#rename-center').val().includes('*') || $('#rename-center').val().includes('|') || $('#rename-center').val().includes('/') || $('#rename-center').val().includes('<') || $('#rename-center').val().includes('>') || $('#rename-center').val().includes('&') || $('#rename-center').val().includes(':') || $('#rename-center').val().includes('"')) {
        Toast.toast('檔案名稱無效', 5000);

    } else {
        filename = $('#rename-center').val() + $('#file-sec-name-center').val();
        $('.file-name').html(filename);

        rename_istoggle = false;
    }
}
function rename_for_modal(submit) {

    if (submit !== "submit") {

        PopupAlert("重新命名", "請在下方重新命名<br>目前名稱:<span class='file-name'></span><br><input id='rename-center' type='text' placeholder='重新命名...'>&nbsp;<select id='file-sec-name-center'><option value='.txt'>.txt</option><option value='.csv'>.csv</option><option value='.json'>.json</option></select>", "dismiss", "rename_for_modal('submit');")
    } else {
        console.log("submit");
        console.log($('#file-sec-name-center').val())
        Rename()


    }
    $('.file-name').html($('.rename-display').html());

}


function dl() { saveTextAs($("#textarea").val(), filename); }
function download() {
    let body_1 = "預覽:<br><textarea id='preview-area' readonly placeholder='(沒有內文)'></textarea><br>檔名:<span class='file-name'></span><button class='btn btn-primary' onclick='rename_for_modal()' data-bs-dismiss='modal'>重新命名</button><br><button onclick='dl()' class='btn btn-primary'>下載</button>";
    let alert_1 = "<div class='alert alert-danger'>建議:將檔案類型<a href='#' onclick='rename_for_modal()' data-bs-dismiss='modal'>變更</a>成.csv檔案</div>";
    let alert_2 = "<div class='alert alert-danger'>建議:將檔案類型<a href='#' onclick='rename_for_modal()' data-bs-dismiss='modal'>變更</a>成.json檔案</div>";
    let alert_3 = "<div class='alert alert-danger'>自動檢查無法確認你的檔案類型，請<a href='#' onclick='rename_for_modal()' data-bs-dismiss='modal'>確認</a>檔案名稱</div>";
    if (use_csvtools && (filename.includes(".txt") || filename.includes(".json")) && !use_jsontools) {
        PopupAlert("下載專案", alert_1 + body_1, "x", "dismiss");
    }
    else
        if (use_jsontools && (filename.includes(".txt") || filename.includes(".csv")) && !use_csvtools) {
            PopupAlert("下載專案", alert_2 + body_1, "x", "dismiss");
        }
        else
            if (use_csvtools && use_jsontools) {
                PopupAlert("下載專案", alert_3 + body_1, "x", "dismiss");
            }

            else {
                PopupAlert("下載專案", body_1, "x", "dismiss")
            }


    $("#preview-area").val($("#textarea").val());
    $(".file-name").html($(".rename-display").html());

    if (localStorage.getItem("TextEditor_Setting_Theme") == "black") {
        $("textarea").css("background-color", "#000");
        $("textarea").css("color", "#fff");
    }
}

function json_write() {
    if ($('#jsontool-select').val() == '花括號') {
        textarea.val(textarea.val() + '{}');
        _textarea.focus()
        _textarea.setSelectionRange(_textarea.selectionStart - 1, _textarea.selectionEnd - 1);


    }
    else if ($('#jsontool-select').val() == '中括號') {
        textarea.val(textarea.val() + '[]');
        _textarea.focus()
        _textarea.setSelectionRange(_textarea.selectionStart - 1, _textarea.selectionEnd - 1);

    }
    else if ($('#jsontool-select').val() == '小括號') {
        textarea.val(textarea.val() + '()');
        _textarea.focus()
        _textarea.setSelectionRange(_textarea.selectionStart - 1, _textarea.selectionEnd - 1);

    }
    else if ($('#jsontool-select').val() == '引號') {
        textarea.val(textarea.val() + '""');
        _textarea.focus()
        _textarea.setSelectionRange(_textarea.selectionStart - 1, _textarea.selectionEnd - 1);

    }
    else if ($('#jsontool-select').val() == '冒號') {
        textarea.val(textarea.val() + ':');



    }
    else if ($('#jsontool-select').val() == '逗號') {
        textarea.val(textarea.val() + ',');


    }

    //---------------------------------//

    if (filename.includes('.txt') || filename.includes('.csv')) {
        Toast.toast('請將檔案另存成.json檔案', 5000)
    }
    use_jsontools = true;
    dirty();
    txtHistory.record(textarea.val())
}


var alert_1 = '<div class="alert alert-success">您的瀏覽器支援此功能</div><br>',
    alert_2 = '<div class="alert alert-danger">您的瀏覽器不支援此功能</div><br>',
    body = '',
    body_text = '<div style="display: flex;"><div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16" id="mic-spk" title="語音辨識已啟用"><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16" id="no-mic-spk" title="語音辨識未啟用"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z" /><path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16" id="mic-q-spk" title="麥克風授權取得中..."><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" /></svg></div><div id="micStatue">&nbsp;麥克風已關閉</div></div><div>辨識語言：<select id="langCombo"><option value="en-US">英文(美國)</option><option value="cmn-Hant-TW">中文(台灣)</option></select><input id="startStopButton" type="button" value="開始辨識" class="btn btn-primary" onclick="startButton(event)" /><BR /><label id="infoBox"></label><br><labal id="textBox"></labal></div>'


function LabAlert() {
    if (!('webkitSpeechRecognition' in window)) {  // 如果找不到 window.webkitSpeechRecognition 這個屬性

        body = alert_2 + body_text;
        $("#langCombo").attr('disabled', true);
        $("#startStopButton").attr('disabled', true);

    } else {
        body = alert_1 + body_text;
    }
    PopupAlert('實驗性功能:語音辨識', body, 'recognition.stop();', 'recognition.stop();str1 = textarea.val().substr(0,_textarea.selectionStart);str2 = textarea.val().substr(_textarea.selectionEnd);textarea.val(str1+textBox.html()+str2);  txtHistory.record(textarea.val())', false);
    document.getElementById('mic-spk').style.display = "none";
    document.getElementById('no-mic-spk').style.display = "";
    document.getElementById('mic-q-spk').style.display = "none";
}





var infolabel;// 訊息 label
var textBox; // 最終的辨識訊息 text input
var tempBox; // 中間的辨識訊息 text input
var startStopButton; // 「辨識/停止」按鈕
var final_transcript = ''; // 最終的辨識訊息的變數
var recognizing = false; // 是否辨識中


var recognition = new webkitSpeechRecognition(); // 建立語音辨識物件 webkitSpeechRecognition
recognition.continuous = true; // 設定連續辨識模式
recognition.interimResults = true; // 設定輸出中先結果。




function startButton(event) {
    infolabel = document.getElementById("infoBox"); // 取得訊息控制項 infoBox
    console.log(infolabel)
    textBox = $("#textBox") // 取得最終的辨識訊息控制項 textBox
    tempBox = $("#tempBox"); // 取得中間的辨識訊息控制項 tempBox
    startStopButton = document.getElementById("startStopButton"); // 取得「辨識/停止」這個按鈕控制項
    langCombo = document.getElementById("langCombo"); // 取得「辨識語言」這個選擇控制項


    recognition.onstart = function () { // 開始辨識
        document.getElementById('mic-spk').style.display = "";
        document.getElementById('no-mic-spk').style.display = "none";
        document.getElementById('mic-q-spk').style.display = "none";
        recognizing = true; // 設定為辨識中
        startStopButton.value = "停止辨識"; // 辨識中...按鈕改為「按此停止」。  
        infolabel.innerText = "辨識中...";  // 顯示訊息為「辨識中」...
        $("#micStatue").html("&nbsp;麥克風開啟中");

    };

    recognition.onend = function () { // 辨識完成
        document.getElementById('mic-spk').style.display = "none";
        document.getElementById('no-mic-spk').style.display = "";
        document.getElementById('mic-q-spk').style.display = "none";
        recognizing = false; // 設定為「非辨識中」
        startStopButton.value = "開始辨識";  // 辨識完成...按鈕改為「開始辨識」。
        infolabel.innerText = ""; // 不顯示訊息
        $("#micStatue").html("&nbsp;麥克風已關閉")
    };

    recognition.onresult = function (event) { // 辨識有任何結果時
        var interim_transcript = '', // 中間結果
            LastResult = '';
        for (let i = event.resultIndex; i < event.results.length; i++) { // 對於每一個辨識結果
            if (event.results[i].isFinal) { // 如果是最終結果
                final_transcript += event.results[i][0].transcript; // 將其加入最終結果中
                console.log(final_transcript)
                LastResult = event.results[i][0].transcript;
            } else { // 否則
                interim_transcript += event.results[i][0].transcript; // 將其加入中間結果中
            }
        }
        if (final_transcript.trim().length > 0) // 如果有最終辨識文字
            console.log(final_transcript)
        textBox.html(textBox.html() + final_transcript.replace(final_transcript, LastResult)); // 顯示最終辨識文字
        if (interim_transcript.trim().length > 0) // 如果有中間辨識文字
            tempBox.value = interim_transcript; // 顯示中間辨識文字
    };
    if (recognizing) { // 如果正在辨識，則停止。
        recognition.stop();

    } else { // 否則就開始辨識
        textBox.val(''); // 清除最終的辨識訊息
        tempBox.val(''); // 清除中間的辨識訊息
        final_transcript = ''; // 最終的辨識訊息變數
        recognition.lang = langCombo.value; // 設定辨識語言
        document.getElementById('mic-spk').style.display = "none";
        document.getElementById('no-mic-spk').style.display = "none";
        document.getElementById('mic-q-spk').style.display = "";
        $("#micStatue").html("&nbsp;麥克風授權取得中")
        recognition.start(); // 開始辨識
    }


}












//////----------------------------------fileReader-----------------------------------//////


function upload() {
    PopupAlert('上傳檔案', '<p>請選擇.txt、.csv或.json檔案，上傳完畢請按下&nbsp;確定</p><p><div class="alert alert-warning">注意:如未儲存目前專案，變更將會遺失</div></p><br><input type="file" id="file-input" accept="text/plain, .csv , .json,application/json" />', 'dismiss', 'readURL(document.querySelector("#file-input"))')

}


//readURL(document.querySelector('#file-input'))

function readURL(input) {
    if (input.files && input.files.length >= 0) {
        for (var i = 0; i < input.files.length; i++) {
            var reader = new FileReader();
            textarea.focus();
            textarea.click();
            txtHistory = new window.UndoRedojs(5);
            reader.onload = function (e) {
                console.log(e.target.result)
                // $("#textarea").val(e.target.result);

                txtHistory.record(textarea.val())

                is_uploaded_file = true;
                textarea.val(e.target.result)


            }
            reader.readAsText(input.files[i]);
            filename = input.files[i].name;
            $(".file-name").html(filename)
            console.log(filename);

            Toast.toast('已開啟&nbsp;<wbr>"' + filename + '"', 2000)
            txtHistory.record(textarea.val());
            dirty()




        }
    } else {

        // PopupAlert('請選擇檔案','你尚未選擇任何檔案，請選擇檔案')
    }
}
/*
function checkTextLength(element) {
    txtCount = $(element).val().length + ($(element).val().match(/\n/g) || []).length;
    return txtCount; 
  }*/

  function checkTextLength(str) {
    var matches = $(str).val().match(/[\u00ff-\uffff]|\S+/g);
    return matches ? matches.length : 0;
}