/* 问好 */
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return greeting;
}
document.getElementById('greeting').textContent = getGreeting();

/* 动态图片轮播 */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.getElementById('avatar');
    const imagePaths = ['img/user1.jpg', 'img/user2.jpg']; // 图片路径数组
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % imagePaths.length; // 循环索引
        images.src = imagePaths[currentIndex];
        setTimeout(changeImage, 3000); // 每1秒切换一次图片
    }

    setTimeout(changeImage, 1000); // 初始延迟1秒后开始切换图片
});

/* 文字淡入淡出效果 */
function fadeIn(element) {
    element.style.opacity = 1; // 设置透明度为1（完全不透明）
}
function fadeOut(element) {
    element.style.opacity = 0; // 设置透明度为0（完全透明）
}
const textElement = document.getElementById('greeting');
fadeIn(textElement); // 调用fadeIn函数使文字淡入
setTimeout(() => fadeOut(textElement), 5000); // 5秒后调用fadeOut函数使文字淡出

  