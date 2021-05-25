



(function(b){b.fn.lazyload=function(n,e){if(!this.length){return}var a=("http:"==document.location.protocol)?"../../../www.lady8844.com/images/index/201412/images/w.gif":"../../../www.lady8844.com/images/index/201412/images/w.gif";var k=b.extend({type:null,offsetParent:null,source:"data-src2",placeholderImage:a,placeholderClass:"loading",threshold:300},n||{}),B=this,l,A,o=function(r){var c=r.scrollLeft,p=r.scrollTop,i=r.offsetWidth,q=r.offsetHeight;while(r.offsetParent){c+=r.offsetLeft;p+=r.offsetTop;r=r.offsetParent}return{left:c,top:p,width:i,height:q}},h=function(){var c=document.documentElement,s=document.body,q=window.pageXOffset?window.pageXOffset:(c.scrollLeft||s.scrollLeft),p=window.pageYOffset?window.pageYOffset:(c.scrollTop||s.scrollTop),i=c.clientWidth,r=c.clientHeight;return{left:q,top:p,width:i,height:r}},j=function(p,i){var r,q,v,u,t,c,s=k.threshold?parseInt(k.threshold):0;r=p.left+p.width/2;q=i.left+i.width/2;v=p.top+p.height/2;u=i.top+i.height/2;t=(p.width+i.width)/2;c=(p.height+i.height)/2;return Math.abs(r-q)<(t+s)&&Math.abs(v-u)<(c+s)},f=function(c){if(k.placeholderImage&&k.placeholderClass){c.attr("src",k.placeholderImage).addClass(k.placeholderClass)}},d=function(i,c,p){if(i){p.attr("src",c).removeAttr(k.source);if(e){e(c,p)}}},g=function(){A=h(),B=B.filter(function(){return b(this).attr(k.source)});b.each(B,function(){var c=b(this).attr(k.source);if(!c){return}switch(k.type){case"image":f(b(this));break;default:break}});b.each(B,function(){var c=b(this).attr(k.source);if(!c){return}var i=(!k.offsetParent)?A:o(b(k.offsetParent).get(0)),q=o(this),p=j(i,q);switch(k.type){case"image":d(p,c,b(this));break;default:break}})},m=function(){if(B.length>0){clearTimeout(l);l=setTimeout(function(){g()},10)}};g();if(!k.offsetParent){b(window).bind("scroll",function(){m()}).bind("reset",function(){m()}).bind("resize",function(){m()})}else{b(k.offsetParent).bind("scroll",function(){m()})}}})(jQuery)
!function(a){a.fn.ladySlide=function(b){var c=a.extend({autoPlay:!0,delayTime:5500,interTime:600,trigger:0,triggerEvent:1,defaultIndex:0,panle:"#panle",prev:"#prev",next:"#next",startSlide:null,endSlide:null},b||{});return this.each(function(){function r(){o&&clearInterval(o),o=setInterval(function(){m=d,m++,t(m)},c.delayTime)}function s(){o&&clearInterval(o)}function t(a){n=0;var b=a;a==l&&(b=0),-1==a&&(b=l-1),0!=c.trigger&&e.children().eq(b).addClass("active").siblings().removeClass("active"),f.children().eq(b+1).addClass("active").siblings().removeClass("active"),"function"==typeof c.startSlide&&c.startSlide(f,a),f.stop(!0,!1).animate({left:-a*k},c.interTime,function(){a==l&&(f.css({left:0}),a=0),-1==a&&(f.css({left:-1*(l-1)*k}),a=l-1),n=1,d=a,"function"==typeof c.endSlide&&c.endSlide(f,a)})}var e,m,o,p,q,b=a(this),d=c.defaultIndex,f=b.find(c.panle),g=f.children(),h=b.find(c.prev),i=b.find(c.next),k=(f.parent().height(),f.parent().width()),l=f.children().length,n=1;1==c.trigger?(q='<div class="trigger">',f.children().each(function(a){q+=d==a?'<span class="active">'+(a+1)+"</span>":"<span>"+(a+1)+"</span>"}),q+="</div>",f.parent().after(q),e=b.find(".trigger")):null!=c.trigger&&0!=c.trigger&&(e=a(c.trigger,b)),f.prepend(g.eq(l-1).clone().css("marginLeft",-k)),f.append(g.eq(0).clone()),f.css({width:k*(l+2),left:-d*k}),g.eq(d).addClass("active"),c.autoPlay&&r(),0!=c.trigger&&e.children().bind("mouseenter",function(){if(s(),1==c.triggerEvent){var b=a(this).index();p=setTimeout(function(){t(b)},200)}}).bind("mouseleave",function(){c.autoPlay&&r(),p&&clearTimeout(p)}).bind("click",function(){2==c.triggerEvent&&t(a(this).index())}),h.click(function(){return n?(m=d,m--,t(m),void 0):!1}),i.click(function(){return n?(m=d,m++,t(m),void 0):!1}),f.bind("mouseenter",function(){s()}).bind("mouseleave",function(){c.autoPlay&&r()}),h.bind("mouseenter",function(){s()}).bind("mouseleave",function(){c.autoPlay&&r()}),i.bind("mouseenter",function(){s()}).bind("mouseleave",function(){c.autoPlay&&r()})})}}(jQuery);




$(function() {
 

var focusLen=$("#focus li").length;
$(".copy-2").html($("#focus li:eq(1)").html());
$(".copy-1").html($("#focus li").eq(focusLen-2).html());


$("#focus").ladySlide({
    prev:".focus-prev",
    next:".focus-next",
    trigger: false,
    autoPlay:true,
    startSlide:function(ele, index) {
        if (index == -1) {
            index = focusLen-1;
        } else if (index == focusLen) {
            index = 0;
        }
        $(".trigger-cover").stop(true, false).animate({left:$("#focus .trigger span").eq(index).position().left}, 500);
    }
});






});






