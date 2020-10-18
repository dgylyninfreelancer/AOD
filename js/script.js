$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__list').click(function (event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();

if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        // Наличие стрелок управления
        arrows: false,
        // Точки под слайдером
        dots: true,
        // Автоматическое изменение высоты слайдера
        // Добавить в класс '.slick-track' параметр 'align-items: flex-start;'
        adaptiveHeight: true,
        // Кол-во отображаемых элементов
        slidesToShow: 1,
        // Скорость пролистывания
        speed: 300
    });
}