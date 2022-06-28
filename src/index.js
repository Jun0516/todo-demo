import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const onCrickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncomplateList(inputText);
};
//未完了リストから指定の要素を削除 関数にして簡略化
const deleteFromInCompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のリストについかする作成

const createIncomplateList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // alert(inputText)

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // console.log(li);

  // button（完了）生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromInCompleteList(completeBtn.parentNode);

    //完了リストに追加する要素
    const addTarget = completeBtn.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget)

    // li タグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // ボタン生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deletetarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deletetarget);
      const text = backBtn.parentNode.firstElementChild.innerText;
      //てkし雨とを取得
    });

    // div タグに書く用を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);
    // console.log(addTarget)

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    // const deletetarget = deleteBtn.parentNode;
    // document.getElementById("incomplete-list").removeChild(deletetarget);
    deleteFromInCompleteList(deleteBtn.parentNode);
  });
  // console.log(deleteBtn);

  // divタグの子要素に各要素設定する
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  //　未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onCrickAdd());
