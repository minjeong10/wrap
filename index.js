console.clear();

// 마우스 올렷을 때
$('.slider-1').mouseenter(function () {
    $(this).attr('data-hover', 'Y');
});

// 마우스 내렸을 때
$('.slider-1').mouseleave(function () {
    $(this).attr('data-hover', 'N');
});

// 기존 버튼형 슬라이더
$('.slider-1 > .page-btns > div').click(function () {
    var $this = $(this);
    var index = $this.index();

    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    var $slider = $this.parent().parent();

    var $current = $slider.find(' > .slides > div.active');

    var $post = $slider.find(' > .slides > div').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});

// 좌/우 버튼 추가 슬라이더
$('.slider-1 > .side-btns > div').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');

    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find(' > .page-btns > div.active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    };

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .page-btns > div:last-child');
        } else {
            $post = $slider.find(' > .page-btns > div:first-child');
        }
    };

    $post.click();
});

setInterval(function () {
    if ($('.slider-1').attr('data-hover') != 'Y') {
        $('.slider-1 > .side-btns > div').eq(1).click();
    }
}, 3000);

/* 탭메뉴*/
function SwiperBox1__init() {
    const swiper = new Swiper('.swiper-box-1 .swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
    });
}

SwiperBox1__init();

/* 탭메뉴 */

