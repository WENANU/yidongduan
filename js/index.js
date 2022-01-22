window.addEventListener('load', function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var conte = document.querySelector('.conte');
    var index = +new Date('2022-1-22 19:00:00');
    get();
    var mm = setInterval(get, 1000);
    function get() {
        var date = +new Date();
        var zong = (index - date) / 1000;
        var h = parseInt(zong / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        conte.children[0].innerHTML = h;
        var m = parseInt(zong / 60 % 60);
        m = m < 10 ? '0' + m : m;
        conte.children[1].innerHTML = m;
        var s = parseInt(zong % 60);
        s = s < 10 ? '0' + s : s;
        conte.children[2].innerHTML = s;
    }
    var jiann = document.querySelector('.jiann');
    var beoo = document.querySelector('.beoo');
    var tou = document.querySelector('.sousou');
    document.addEventListener('scroll', function () {
        tou.style.position = 'fixed';
        if (window.pageYOffset > beoo.offsetTop) {
            jiann.style.display = 'block';
        } else {
            jiann.style.display = 'none';
        }
        jiann.addEventListener('click', function () {
            window.scroll(0, 0);
        });

    });
});
