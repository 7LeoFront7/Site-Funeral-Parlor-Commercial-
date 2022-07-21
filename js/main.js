$(document).ready(function() {
    $('.burger-menu').click(function() {
        if(!$('.burger-icon').hasClass('active')) {
            $('.burger-icon').addClass('active');
            $('.burger-nav').slideDown(500);
        } else {
            $('.burger-icon').removeClass('active');
            $('.burger-nav').slideUp(500);
        }
    })

    function SlickInit(el, arrows) {
        $(el).slick({
            arrows: true,
            appendArrows: $(arrows),
            prevArrow: `<div class="left-arrow">
                            <div>
                                <img src="/img/catalog/left-arrow.png" alt="">
                            </div>
                        </div>`,
            nextArrow: `<div class="right-arrow">
                            <div>
                                <img src="/img/catalog/right-arrow.png" alt="">
                            </div>
                        </div>`
        })
    }

    function slickDisable(el) {
        $(el).slick("unslick")
    }
    
    function slickResize() {
        $(window).on('resize', function() {
            if($(document).width() < 576 && !$('.catalog-items').hasClass('active-slick')) {
                $('.catalog-items').addClass('active-slick')
                $('.works-items').addClass('active-slick')
                SlickInit('.works-items.active-slick', '.catalog-arrows')
                SlickInit('.catalog-items.active-slick', '.catalog-arrows')
            } else if($(document).width() > 576){
                slickDisable('.catalog-items.active-slick')
                $('.catalog-items').removeClass('active-slick')
                slickDisable('.works-items.active-slick')
                $('.works-items').removeClass('active-slick')
                
            }
        })
    }
    if($(window).width() < 576) {
        $('.catalog-items').addClass('active-slick')
        $('.works-items').addClass('active-slick')
        SlickInit('.works-items.active-slick', '.catalog-arrows')
        SlickInit('.catalog-items.active-slick', '.catalog-arrows')
        slickResize()
    } else {
        slickResize()
    }
    
});
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".js__show-modal").forEach(function(item, index){
        item.addEventListener('click', function(){
            ShowModal(document.querySelectorAll(".info")[index]);
        })
    });
});

