var index = {
    doFun: function () {
        this.loading();
        this.indexSth();
    },
    loading: function () {
        var num = 0;
        var state = true;
        $('#indicatorContainer').radialIndicator({
            barColor: '#eaeae9',
            barBgColor: '#eaeae9',
            barWidth: 0,
            fontColor: '#231815',
            initValue: 0,
            maxValue: 100,
            frameTime: 49,
            roundCorner: false,
            percentage: true
        });
        function autoPlayAudio() {
            wx.config({
                // 配置信息, 即使不正确也能使用 wx.ready
                debug: false,
                appId: '',
                timestamp: 1,
                nonceStr: '',
                signature: '',
                jsApiList: []
            });
            wx.ready(function() {
                var globalAudio=document.getElementById("myaudio");
                globalAudio.play();
            });
        };
        var radialObj = $('#indicatorContainer').data('radialIndicator');
        //radialObj.animate(100);
        var timer = setInterval(function () {
            num++;
            if (num <= 100) {
                radialObj.value(num);
            } else {
                clearInterval(timer);
                $('.loading').addClass('active');
                setTimeout(function () {
                    $('.audio-music').get(0).play();
                    $('.music-icon').css({
                        opacity: '.5'
                    });
                }, 1000);
                setTimeout(function () {
                    $('.section-panda-big').addClass('section-panda-in');
                    $('.section-canvas').addClass('section-canvas-in');
                    $('.section-canvas3').addClass('section-canvas3-in');
                    $('.section-bg3').addClass('active');
                    $('.section-bg4').addClass('active');
                    setTimeout(function () {
                        $('.section-txt1').addClass('section-txt1-in');
                    }, 2000);
                    setTimeout(function () {
                        $('.section-txt1').removeClass('section-txt1-in');
                        $('.section-txt2').addClass('section-txt2-in');
                    }, 5000);
                    setTimeout(function () {
                        $('.section-txt2').removeClass('section-txt2-in');
                        $('.section-txt3').addClass('section-txt3-in');
                    }, 8000);
                    setTimeout(function () {
                        $('.section-txt3').removeClass('section-txt3-in');
                        $('.section-txt4').addClass('section-txt4-in');
                    }, 11000);
                }, 1000);
            }
        }, 49)
        $('.loading-img').find('.img1').css({
            display: 'none'
        });
        $('.loading-img').find('.img2').attr('src', 'img/section1/panda.gif')
        $('.music-icon').on('touchstart', function () {
            state = !state;
            if (state == true) {
                $('.audio-music').get(0).play();
                $('.music-icon').css({
                    'opacity': '.5'
                });
                // 解决ios音乐不自动播放的问题
                 autoPlayAudio();
            } else {
                $('.audio-music').get(0).pause();
                $('.music-icon').css({
                    'opacity': '1'
                });
            }
        });
    },
    indexSth: function () {
        var count = 0;
        $('.touch1').on('touchstart', function () {
            var touchMove1 = true;
            $('.touch1').on('touchend', function () {
                if (touchMove1 === true) {
                    touchMove1 = false;
                    scene1();
                }
            })
        });
        $('.touch2').on('touchstart', function () {
            var touchMove2 = true;
            $('.touch2').on('touchend', function () {
                if (touchMove2 === true) {
                    touchMove2 = false;
                    scene2();
                }
            })
        });
        $('.touch3').on('touchstart', function () {
            var touchMove3 = true;
            $('.touch3').on('touchend', function () {
                if (touchMove3 === true) {
                    touchMove3 = false;
                    scene3();
                }
            })
        });
        $('.section3-bammer').on('touchstart', function () {
            count++;
            $(this).addClass('active');
            $('.section3-light').addClass('active');
            setTimeout(function () {
                $('.section3-light').removeClass('active');
            }, 1200);
            setTimeout(function () {
                $('.section3-light').addClass('active');
            }, 1600);
            setTimeout(function () {
                $('.section3-light').removeClass('active');
            }, 2200);
            $('.section3-txt').addClass('active');
            setTimeout(function () {
                $('.section3-mountain').attr('src', 'img/section2/mountan1.gif');
            }, 1200);
            setTimeout(function () {
                $('.section3-bammer').removeClass('active');
                $('.section3-bammer').addClass('cur');
            }, 2000);
            setTimeout(function () {
                $('.section3-bammer').addClass('down');
            }, 3000);
            setTimeout(function () {
                $('.section3-txt1').attr('src', 'img/section3/txt1.gif');
            }, 3500);
            setTimeout(function () {
                $('.section3-txt2').attr('src', 'img/section3/txt2.gif');
            }, 4000);
            setTimeout(function () {
                $('.section3-txt3').attr('src', 'img/section3/txt3.gif');
            }, 4500);
            setTimeout(function () {
                $('.section3-txt3').addClass('cur');
                if ($('.section3-txt3').hasClass('cur')) {
                    scene2();
                }
            }, 5500);
        });
        $('.section5-txt4').on('touchstart', function () {
            window.location.reload();
            $('.loading-img').find('.img1').css({
                opacity: 'none'
            });
            $('.loading-img').find('.img2').attr('src', 'img/section1/panda.gif')
        });

        function scene1() {
            $('.section-bg1').addClass('bg1-out');
            $('.section-bg2').addClass('bg2-out');
            $('.section-bg3').addClass('bg3-out');
            $('.section-bg4').addClass('bg4-out');
            $('.section-cloud').addClass('section-cloud-out');
            $('.section-canvas3').addClass('section-canvas3-out');
            $('.section-txt1').removeClass('section-txt1-in');
            $('.section-txt2').removeClass('section-txt2-in');
            $('.section-txt3').removeClass('section-txt3-in');
            $('.section-txt4').addClass('section-txt4-out');
            $('.section-panda-big').addClass('section-panda-out');
            $('.section-two').css({
                display: 'block',
                zIndex: '30'
            });
            $('.section3-bg').addClass('section3-bg-in');
            $('.section3-cloude1').addClass('section3-cloude1-in');
            $('.section3-cloude2').addClass('section3-cloude2-in');
            $('.section3-mountain').addClass('section3-mountain-in');
            $('.section3-txt1').addClass('txt1-in');
            $('.section3-txt2').addClass('txt2-in');
            $('.section3-txt3').addClass('txt3-in');
            $('.section3-hammer').addClass('section3-hammer-in');
            $('.section3-leaf1').addClass('section3-leaf1-in');
            $('.section3-leaf2').addClass('section3-leaf2-in')
            setTimeout(function () {
                $('.section-first').css({
                    'display': 'none'
                });
            }, 2500);
        }

        function scene2() {
            // $('.section3-bg').addClass('section3-bg-out');
            $('.section3-cloude1').addClass('section3-cloude1-out');
            $('.section3-cloude2').addClass('section3-cloude2-out');
            $('.section3-mountain').addClass('section3-mountain-out');
            $('.section3-bammer').addClass('bammer-out');
            $('.section3-txt1').addClass('txt1-out');
            $('.section3-txt2').addClass('txt2-out');
            $('.section3-txt3').addClass('txt3-out');
            setTimeout(function () {
                $('.section-two').css({
                    'display': 'none'
                });
            }, 2500);
            setTimeout(function () {
                $('.section-three').css({
                    display: 'block',
                    zIndex: '31'
                });
                $('.section4-bg').addClass('section4-bg-in');
                $('.section4-cloude1').addClass('section4-cloude1-in');
                $('.section4-cloude2').addClass('section4-cloude2-in');
                $('.section4-pass').addClass('section4-pass-in');
                $('.section4-panda3').addClass('section4-panda3-in');
            }, 10);
        }

        function scene3() {
            // $('.section4-bg').addClass('section4-bg-out');
            $('.section4-cloude1').addClass('section4-cloude1-out');
            $('.section4-cloude2').addClass('section4-cloude2-out');
            $('.section4-pass').addClass('section4-pass-out');
            $('.section4-panda3').addClass('section4-panda3-out');
            setTimeout(function () {
                $('.section-three').css({
                    'display': 'none'
                });
            }, 2500);
            setTimeout(function () {
                $('.section-four').css({
                    display: 'block',
                    zIndex: '32'
                });
                $('.section5-bg').addClass('section5-bg-in');
                $('.section5-cloude1').addClass('section5-cloude1-in');
                $('.section5-cloude2').addClass('section5-cloude2-in');
                $('.section5-leaf1').addClass('section5-leaf1-in');
                $('.section5-leaf2').addClass('section5-leaf2-in');
                $('.section5-man').addClass('section5-man-in');
                $('.section5-txt4').addClass('section5-txt4-in');
            }, 10);
            setTimeout(function () {
                $('.section5-main').addClass('section5-main-in');
                $('.section5-line2').addClass('section5-line2-in');
                $('.section5-info').addClass('section5-info-in');
                $('.section5-qrcode').addClass('section5-qrcode-in');
            }, 400);
        }
    }
};