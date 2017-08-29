/**
 * Created by ike on 2017/8/26.
 */
    $('.inactive').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).parent('li').siblings('li').removeClass('inactives');
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
            if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);
            }
        }else{
            $(this).removeClass('inactives');
            $(this).siblings('ul').slideUp(100);
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            $(this).siblings('ul').children('li').children('ul').slideUp(100);
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
        }
    });

    $('.list-children li').click(function() {
        $(this).addClass('now').siblings().removeClass('now');
    });
    $('.line-message li').click(function() {
        $(this).children("a").find('.unread').removeClass('unread');
        $(this).addClass("unreadbg").siblings().removeClass('unreadbg')
    })
