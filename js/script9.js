const menuToggle = document.querySelector('.toggle'); // 取得漢堡選單按鈕元素
const showcase = document.querySelector('.showcase'); // 取得主展示區塊元素

menuToggle.addEventListener('click', ()=>{ // 當漢堡選單按鈕被點擊時
    menuToggle.classList.toggle('active'); // 切換按鈕的 active 類別
    showcase.classList.toggle('active'); // 切換主展示區塊的 active 類別
});