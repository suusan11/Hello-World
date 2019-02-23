function scrollCheck() {
    const scrollValue = window.scrollY;//上からのスクロール値

    const breakPoint = document.getElementById('js-breakPoint').clientHeight; //objectの高さ
    const objectTop = document.getElementById('js-breakPoint').offsetTop; //objectの座標高さ
    const breakPointTotall = breakPoint + objectTop;

    const textShow = document.getElementById('js-scroll-show');

    if(scrollValue > breakPointTotall) {
        textShow.classList.add('is-show');
    }else {
        textShow.classList.remove('is-show');
    }
}

window.addEventListener('scroll', scrollCheck);