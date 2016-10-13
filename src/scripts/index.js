//js的入口文件

//引入swiper
var Swiper = require('./components/swiper/swiper.min.js');

//引入swiper animate
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

//引入iscroll
var IScroll = require('./components/iscroll/iscroll.js');

// console.log(Iscroll);



var $ = require('./components/zepto-modules/_custom');

var mySwiper = new Swiper('.swiper-container', {
    // effect: 'cube',//滑动特效
    // loop: true,//循环滑动
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})

$('#mainContent').hide();
$('.swiper-container').hide();

$('.btn1').tap(function() {
    $('#mainContent').show();
    $('.swiper-container').hide();

    // 需要进行post请求，然后请求/api/skill,并且将数据列表显示在页面上
    $.post('/api/skill', {}, function(response) {
        var html = '';
        for (var i = 0; i < response.length; i++) {
            html += '<li>' + response[i].category + '</li>';
        }
        $('#scroller ul').html(html);
        // console.log(response);
        var myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    })
})


$('#footer div').tap(function() {
    var job = ($(this).attr('id'));

    $('#mainContent').show();
    $('.swiper-container').hide();

    // 需要进行post请求，然后请求/api/skill,并且将数据列表显示在页面上
    if (job == 'like') {
        $.post('/api/' + job, {}, function(response) {
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += '<li>' + response[i].name + '</li>';
            }
            $('#scroller ul').html(html);
            // console.log(response);
            var myScroll = new IScroll('#wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        })
    } else if (job == 'project') {
        $.post('/api/' + job, {}, function(response) {
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += '<li>' + response[i].name + '</li>';
            }
            $('#scroller ul').html(html);
            // console.log(response);
            var myScroll = new IScroll('#wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        })
    } else if (job == 'skill') {
        $.post('/api/' + job, {}, function(response) {
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += '<li>' + response[i].name + '</li>';
            }
            $('#scroller ul').html(html);
            // console.log(response);
            var myScroll = new IScroll('#wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        })
    } else if (job == 'work') {
        $.post('/api/' + job, {}, function(response) {
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += '<li>' + response[i].name + '</li>';
            }
            $('#scroller ul').html(html);
            // console.log(response);
            var myScroll = new IScroll('#wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        })
    } else if (job == 'user') {
        $.post('/api/' + job, {}, function(response) {
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += '<li>' + response[i].name + '</li>';
            }
            $('#scroller ul').html(html);
            // console.log(response);
            var myScroll = new IScroll('#wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        })
    }


})

var interval = setInterval(function() {
    if (document.readyState === 'complete') {
        clearInterval(interval);
        $('#preload').hide();
        $('.swiper-container').show();
        mySwiper.updateContainerSize();
        mySwiper.updateSlidesSize();
    } else {
        $('#preload').show();
    }
}, 100)
