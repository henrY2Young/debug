/**
 * Created by licaifan on 2018/8/3.
 */
window.onerror = function (message, url, line, column, error) {
    console.log('log---onerror::::', message, url, line, column, error);
    $('.debug>.container>.info').html(
        `<p style="color: white"> 错误信息:<span style="color: red ;line-height: .4rem;">${message}</span></p>
                 <p style="color: white">文件名:<span style="color: red;line-height: .4rem;">${url}</span></p>
                 <p style="color: white">所在行列:<span style="color: red;line-height: .4rem;">at${line}行,${column}</span></p>
                 <p style="color: white">detail:<span style="color: red;line-height: .4rem;">${error}</span></p>`
    );
}
var handlerErrorMsg = function (message, url, line, column, error) {

}
$(function () {
    var debug = {
        showFlag: true,
        init: function () {
            var html = `<div class="debug" style="padding: 0 2px 20px 2px ">
    <div class="pop-up">hide</div>
    <div class="item">
        <ul>
            <li class="tab active" data-id ='0'>错误信息</li>
            <li class="tab" data-id ='1'>console</li>
        </ul>
    </div>
    <div class="container">
        <div class="info ">
        </div>
        <div class="script-exc" style="display: none;">
            <textarea id="script" style="width: 100%;height: 50px">  </textarea>
            <div class="script-post">执行</div>
        </div>
    </div>
</div>

<style>
    .debug{
        position: fixed;
        bottom: 0px;
        width: 100%;
        z-index: 99999999999;
        background-color: skyblue;
    }
    .debug>.pop-up{
        width: 100%;
        height: 20px;
        text-align: center;
        color: white;
    }
    .debug >.item >ul {
        width: 100%;
    }
    .debug >.item >ul>li {
        width: 49%;
        display: inline-block;
        color: white;
        font-size: .3rem;
        text-align: center;
        height: 20px;
    }
    .debug >.item >ul>.active{
        color: red;
    }
    .debug>.container>.info{
        width: 100%;
    }
    .debug>.container>.script-exc >.script-post{
        width: 30px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: white;
        margin: auto;
    }
</style>
`;
            $('body').append(html);
        },
        handlerPop: function () {
            $('.pop-up').on('click', function () {
                if (debug.showFlag) {
                    $('.container').hide();
                    $('.pop-up').text('hide');
                    debug.showFlag = false;
                } else {
                    $('.container').show();
                    $('.pop-up').text('show');
                    debug.showFlag = true;
                }
            })
        },
        handlerTab: function () {
            $('.debug>.item>ul>.tab').on('click', function () {
                var id = $(this).data('id');
                console.log(id);
                for (var i = 0; i <= $('.debug>.item>ul>.tab').length; i++) {
                    $('.debug>.item>ul>.tab').eq(i).removeClass('active')
                }
                if (id == 0) {
                    $('.debug>.container>.info').show();
                    $('.debug>.container>.script-exc').hide();
                    $('.debug>.item>ul>.tab').eq(id).addClass('active')
                } else if (id == 1) {
                    $('.debug>.container>.script-exc').show();
                    $('.debug>.container>.info').hide();
                    $('.debug>.item>ul>.tab').eq(id).addClass('active')
                }
            })
        },
        handlerScript: function () {
            $('.script-post').on('click', function () {
                var text = $('#script').val();
                eval(text);
            });

        }

    };
    debug.init();
    debug.handlerPop();
    debug.handlerTab();
    debug.handlerScript();
    console.log(fasdf);
})

