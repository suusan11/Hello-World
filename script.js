function scrollCheck() {
    const scrollValue = window.scrollY;//上からのスクロール値
    // const headerHeight = document.getElementById('js-header').clientHeight; //headerの高さをとる
    // const scrollTotal = scrollValue + headerHeight; //headerを含んだ高さの取得
    console.log(scrollValue);

    // const breakPoint = document.getElementById('js-breakPoint').clientHeight; //objectの高さ
    // const objectTop = document.getElementById('js-breakPoint').offsetTop; //objectの座標高さ
    // const breakPointTotall = breakPoint + objectTop;
    //
    // const textShow = document.getElementById('js-scroll-show');
    // // const expand = document.getElementById('js-logo-container');
    // // const navHide = document.getElementById('js-nav-container');
    //
    // if(scrollValue > breakPointTotall) {
    //     textShow.classList.add('is-show');
    //     // expand.classList.add('is-expand');
    //     // navHide.classList.add('is-hide');
    // }else {
    //     textShow.classList.remove('is-show');
    //     // expand.classList.remove('is-expand');
    //     // navHide.classList.remove('is-hide');
    // }
}

window.addEventListener('scroll', scrollCheck);