function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Goosng Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return greeting;
}

document.getElementById('greeting').textContent = getGreeting();

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
