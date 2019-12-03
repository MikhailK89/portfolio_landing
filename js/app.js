$(function() {
    
    const worksSlider = $('[data-slider="slick"]');

/* Filter
================================== */
    
    const filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        if (cat === 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');
                
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });


/* Modals
================================== */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal'); // значение атрибута
        
        // в селекторе требуется #
        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
        
        setTimeout(function() {
            $(modalId).find('.modal__dialog').css({
                transform: 'scale(1)'
            });
        }, 0); // требуется задержка
        
        worksSlider.slick('setPosition');
    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        
        // к какому модальному окну относится иконка закрытия
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
        modalParent.find('.modal__dialog').css({
            transform: 'scale(0)'
        });
        
        // требуется время для выполнения анимации
        setTimeout(function() {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });
    
    $('.modal').on("click", function(event) {
        let $this = $(this);
        
        $this.find('.modal__dialog').css({
            transform: 'scale(0)'
        });
        
        setTimeout(function() {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });
    
    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation();
    });
    
    
/* Slider: https://kenwheeler.github.io/slick/
================================== */
    
    const slickOptions = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    };
    
    worksSlider.slick(slickOptions);
    
    /*
    
    $(window).resize(function() {
        worksSlider.slick('unslick');
        worksSlider.slick(slickOptions);
    });
    
    */
    
    $('.slickPrev').on("click", function(event) {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick('slickPrev');
    });
    
    $('.slickNext').on("click", function(event) {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick('slickNext');
    });


/* Mobile Nav
================================== */
    
    const navToggle = $('#navToggle');
    const nav = $('#nav');
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass('show');
    });





});