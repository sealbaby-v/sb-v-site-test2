// タブ切り替え機能
function openTab(evt, tabName) {
    // すべてのタブコンテンツを非表示にする
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // すべてのタブボタンから active クラスを削除する
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // クリックされたタブを表示し、ボタンをアクティブにする
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 簡易パスワード保護機能
function checkPassword(targetId, correctPassword) {
    const input = prompt("パスワードを入力してください (テスト用: 0000)");
    
    if (input === correctPassword) {
        document.getElementById(targetId).classList.remove("hidden");
    } else if (input !== null) {
        alert("パスワードが違います。");
    }
}
