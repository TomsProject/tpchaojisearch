var helangSearch = {
    els: {},
    searchIndex: 0,
    hot: {
        color: ['#ff2c00', '#ff5a00', '#ff8105', '#fd9a15', '#dfad1c', '#6bc211', '#3cc71e', '#3cbe85', '#51b2ef', '#53b0ff'],
        list: ['www.projectoms.com']
    },
    init: function () {
        var _this = this;
        this.els = {
            pickerBtn: $(".picker"),
            pickerList: $(".picker-list"),
            logo: $(".logo"),
            hotList: $(".hot-list"),
            input: $("#search-input"),
            button: $(".search")
        };
        this.els.hotList.html(function () {
            var str = '';
            $.each(_this.hot.list, function (index, item) {
                str += '<a href="https://www.baidu.com/s?ie=utf8&oe=utf8&tn=98010089_dg&ch=11&wd=' + item + '" target="_blank">' +
                    '<div class="number" style="color: ' + _this.hot.color[index] + '">' + (index + 1) + '</div>' +
                    '<div>' + item + '</div>' +
                    '</a>';
            });
            return str;
        });
        this.els.pickerBtn.click(function () {
            if (_this.els.pickerList.is(':hidden')) {
                setTimeout(function () {
                    _this.els.pickerList.show();
                }, 100);
            }
        });
        this.els.pickerList.on("click", ">li", function () {
            _this.els.logo.css("background-image", ('url(img/' + $(this).data("logo") + ')'));
            _this.searchIndex = $(this).index();
            _this.els.pickerBtn.html($(this).html())
        });
        this.els.input.click(function () {
            if (!$(this).val()) {
                setTimeout(function () {
                    _this.els.hotList.show();
                }, 100);
            }
        });
        this.els.input.on("input", function () {
            if ($(this).val()) {
                _this.els.hotList.hide();
            }
        });
        this.els.button.click(function () {
            var searchArr = ['https://www.baidu.com/s?ie=utf8&oe=utf8&tn=98010089_dg&ch=11&wd=', 'https://www.sogou.com/web?query=', 'https://cn.bing.com/search?q=', 'https://www.google.com/search?q=', 'https://zh.wikipedia.org/w/index.php?search=', 'https://search.yahoo.com/search?p=', 'https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=', 'https://yandex.com/search/?text=', 'https://search.aol.com/aol/search?q=', 'https://www.webcrawler.com/serp?&sc=XbenjapqsieeS3h2OjfvCPHFJt4EMnl0FDPlmF4mn2a-LgNVEywnXIDX95nEokqoR6-eYLIYGhhIONPws7zlp9oI_wHWWfu-1pT5w5EhOBm1tj6kLa-q1j8PyJZWaIf0wKfvVrZwVpAEyRY-Mkm20e1FJhqtt5e9vx4iYKW7-8IxE1c5bxcEmU7IR5PXZCL2eXJXPJQt91tGh9zMLcjkoLB9gSyfL8gsqaN1jCO6XxdjxVgh2YVHNxNtCYetUcMNUvHLINgkTkZm6I2aJ5XoXKUFrOG3HHSMuqfeH1ELC84Q34WEpUdp18YRfnoG2C1HGAKHYdZSMucVj_ZvymwRYqR2ttqvSpsIjE5nYcdLz3pjsgDGEW8brkhqYUx8AgafCqijRHU-kn7pTNrx__5F4fmj3B8nU8-uCt-Kta61fA1qyIjaf690_LyS4cX39uZCXUWD_xCdZu6qAdbXgngUggxQHvhXiLNBkW2x-mCmOEBxRSO5Q5IHl_LxMN2qZml7zCY9Tg2Cw5VssUxN5MaB7-dTSCKdfNiOZQ70dMgbkgOa9gUqVoNAenoL5bfdKXw8zX3sFZBkC5h6GzFJCL8kAj2r2krX1hINiVGLUGiEb5Cc76Jt9Z2Xdtt8H1YE7eK7NG8dOpnyWBzFP-axrjglR83gV9nUCfFEE8monyDXsqeR7Sy8DrEzBWKeUAhbcn8-w8eT_KgjMI0wbenbEFkF_vJ7yjIS7x8yhFSu85YZnrzuzSRvFntFG1wBTzjzqnhUBd-58DWRe24wGzUf9aBkSGL2Kh7RLRJlseyiMVw6Og3cB-DKYr_rKiYdiO_AQTr3athpW8W0dSAd0aA-w70q0XqgeQ3KabG8LlcOON9fL6R4oLO2ByUAYFjBvy3ixjoT5IAvsLCAMEuxVhAuE5GyA6pWyk9HwYQByiQ2bx6L0kN1uyX1tMllyAoAByNtOjffuge8vPNSYfQBtp8qGHrcYa0K-8pa2lpACx0vSq1Nomtk9094iiBxneJzfQT2stjKZmRUGG5aNwPHunfwhJO_6RijdUO9FgsLV2zgg4cyFuN0wSvAr2LS0iKFWpX5Q-Hx9KyqN_h5e6VJDt8OE1km2U9wW2jX-nm1eHgQpGnoae1944fRyP1iSQid3qf1Pga262zadCMoCxvlvgCLLqVb0fp7NG_-NxQae3mFD33Hx1WoRdmjxrCM_BKKzdciSyAiyCk9OpG1jL-DbT__Sm89JRBaLbITZQ33YKSj1VDn5Sp0qjRjD2iiRUJ-_otMUiopJ84_y42JN4J-tGwyjCRUXvUeole-C-GfJxLQjBPZMtYppJv6xwGMsEm8pCAoWUH-9u8VG57fy5ySoiuEtpfbw7v6DdXj_6qqoxCXQhCQWMGvzg_a7VVKsPLlbDj8d2FRuBYPA5EGZkbTV_C5CiXS6wPVY9CoROoEyzp3pMEwEGOx7ZgzZKz1MjGs1q1CQNYkuON_I9Pbi-D3BIFlzI8tBm04taej29alEw0uaVPoOOfmc_2eFUveHjWbAJlClIlk4TJ0FHEFKtVVIJy0vi7sWSzvT8gCjnref5d5m36uVTx4-NAod8oFLaSKIrzW1gSmW4WbzOLDm2UePcqp9cKhzta6b0Ne0SxUsbupAasbzA&q=', 'https://duckduckgo.com/?q=', 'https://www.alibaba.com/trade/search?SearchText=', 'https://www.ebay.com/sch/i.html?_nkw=', 'https://search.naver.com/search.naver?query=', 'https://www.ask.com/web?q=', 'https://www.amazon.com/s?k='];
            window.open(searchArr[_this.searchIndex] + _this.els.input.val());
        });
        $(document).click(function () {
            _this.els.pickerList.hide();
            _this.els.hotList.hide();
        });
    }
};