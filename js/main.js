jQuery(document).ready(function () {
  // menu (додовання класу при клікє)  //////////////////////////////////////////
  jQuery(".btn-burger").click(function () {
    jQuery(".header").toggleClass("fideIn");
    jQuery(".header").toggleClass("_js--open-menu");
    jQuery(".btn-burger").toggleClass("_js--open-menu");
    jQuery(".menu").toggleClass("_js--open-menu");
    jQuery("body").toggleClass("noscroll");
  });
  jQuery(".menu").on("click", "a", function (event) {
    jQuery(".header").removeClass("_js--open-menu");
    jQuery(".btn-burger").removeClass("_js--open-menu");
    jQuery(".menu").removeClass("_js--open-menu");
    jQuery("body").removeClass("noscroll");
  });
  //////////////////////////додовання класу//////////////////////////////////////////
  if (jQuery(".home-page").length > 0) {
    jQuery(".header").addClass("home-page");
  } else {
    jQuery(".header").addClass("other-page");
  }

  //////////////////////////додовання класу//////////////////////////////////////////
  if (jQuery(".page-heb").length > 0) {
    jQuery("body").addClass("_page-heb");
    jQuery(".lang-link--heb").addClass("_active");
  } else {
    jQuery("body").addClass("_page-eng");
    jQuery(".lang-link--eng").addClass("_active");
  }

  //////////////////////////плавний скрол//////////////////////////////////////////
  jQuery(".link-to-block").on("click", function (event) {
    event.preventDefault();
    var id = jQuery(this).attr("href"),
      top = jQuery(id).offset().top;
    jQuery("body,html").animate({ scrollTop: top }, 800);
  });
  // ініціалізація слайдера slider//////////////////////////////////////////////////
  if (jQuery(".page-heb").length > 0) {
    if (jQuery(this).width() <= 600) {
      jQuery(".blog--slider").addClass("owl-carousel owl-theme");
      jQuery(".blog--slider").owlCarousel({
        rtl: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 0,
        center: true,
        autoHeight: true,
        loop: true,
      });
    } else {
      jQuery(".blog--slider").trigger("destroy.owl.carousel");
      jQuery(".blog--slider").removeClass("owl-carousel owl-theme");
    }
  } else {
    if (jQuery(this).width() <= 600) {
      jQuery(".blog--slider").addClass("owl-carousel owl-theme");
      jQuery(".blog--slider").owlCarousel({
        // rtl: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 0,
        center: true,
        autoHeight: true,
        loop: true,
      });
    } else {
      jQuery(".blog--slider").trigger("destroy.owl.carousel");
      jQuery(".blog--slider").removeClass("owl-carousel owl-theme");
    }
  }
  // ініціалізація слайдера slider//////////////////////////////////////////////////
  if (jQuery(".page-heb").length > 0) {
    jQuery(".reviews__slider").addClass("owl-carousel owl-theme");
    jQuery(".reviews__slider").owlCarousel({
      rtl: true,
      items: 3,
      dots: false,
      loop: true,
      center: true,
      nav: true,
      margin: 30,
      responsive: {
        0: {
          margin: 10,
          items: 1,
        },

        600: {
          items: 3,
        },
      },
    });
  } else {
    jQuery(".reviews__slider").addClass("owl-carousel owl-theme");
    jQuery(".reviews__slider").owlCarousel({
      items: 3,
      dots: false,
      loop: true,
      center: true,
      nav: true,
      margin: 30,
      responsive: {
        0: {
          margin: 10,
          items: 1,
        },

        600: {
          items: 3,
        },
      },
    });
  }
});
//////////////////////////////
//////////////////////////////
//////////////додаваня класу при скролі////////////////
window.addEventListener("scroll", function () {
  var id = document.getElementById("header");
  var widthPage = jQuery(document).width();

  if (widthPage >= 300) {
    if (window.scrollY > 20) {
      id.classList.add("_js_scroll");
    } else {
      id.classList.remove("_js_scroll");
    }
  }
});
//////////////////////////////
///////////функція показати щє////////////////////////////////
const showMore = function (
  list,
  item,
  startLength,
  amountNotHideItem,
  amountShowItem
) {
  let widthPage = jQuery(document).width();
  if (widthPage >= 20) {
    if (jQuery(list).find(item).length > startLength) {
      jQuery(".show-more__btn").css("display", "flex");
      jQuery(".hide__btn").css("display", "none");

      jQuery(".show-more__btn").click(function () {
        jQuery(list)
          .find(`${item}:not(:visible):lt(${amountShowItem})`)
          .show("fast", function () {
            if (jQuery(list).find(`${item}:not(:visible)`).length == 0) {
              jQuery(".show-more__btn").css("display", "none");
              jQuery(".hide__btn").css("display", "flex");
            }
          });
      });
      ///
      jQuery(".hide__btn").click(function () {
        //переход в вгору блока при закритті всіх дітей

        let top = jQuery(list).offset().top;
        let hg = jQuery(list).find(item).height();

        jQuery("body,html").animate(
          { scrollTop: top + hg * amountNotHideItem },
          300
        );
        jQuery(list)
          .find(`${item}:not(:lt(${amountNotHideItem}))`)
          .hide("fast", function () {
            jQuery(".hide__btn").css("display", "none");
            jQuery(".show-more__btn").css("display", "flex");
          });
      });
    }
  }
};

jQuery(document).ready(function () {
  if (jQuery(this).width() <= 600) {
    if (jQuery(".p-blog__blog-list")) {
      showMore(".p-blog__blog-list", ".blog__item", 6, 6, 2);
    }
  } else {
    if (jQuery(".p-blog__blog-list")) {
      showMore(".p-blog__blog-list", ".blog__item", 9, 9, 3);
    }
  }
});
jQuery(window).on("load resize", function () {
  if (jQuery(this).width() <= 600) {
    if (jQuery(".p-blog__blog-list")) {
      showMore(".p-blog__blog-list", ".blog__item", 6, 6, 2);
    }
  } else {
    if (jQuery(".p-blog__blog-list")) {
      showMore(".p-blog__blog-list", ".blog__item", 9, 9, 3);
    }
  }
});

////////////////////////////////////////////////////////////////////
////////////функція для анімаціі при потраплянні блока ввікно////////////////////////////
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_js_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_js_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 200);
}
