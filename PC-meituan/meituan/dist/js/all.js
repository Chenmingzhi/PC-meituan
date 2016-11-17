var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    
   var color = ['#fd9d21','#ff6767','#8a90fa','#fed030','#fd9d21','#fed030','#4dc6ee','#ff80c2','#fd9d21','#599eec','#A8DD99','#00d3be','#fed030','#fd9d21','#FF7360','#ff80c2','#84d23d','#ff80c2','#599eec','#00d3be'];
   $.each(color, function(i,e) {
   	$('nav span').eq(i).css('background',e);
   });
   
   
   var index = 1;
   //加载页面先执行一遍
   ajax();
   $(window).on('scroll',function(){
   	var scrollTop = $(this).scrollTop();
   	var docHeight = $(document).height();
   	var winHeight = $(this).height();
   	//判断滚动到底后再加载
   	if(scrollTop>=docHeight-winHeight){
   		if(index>5){
   			return;
   		}
	   		index++;
	   		ajax();
   	}
   	
   	if(scrollTop>=winHeight/2){
   		$('#backTop').show();
   	}else{
   		$('#backTop').hide();
   	}
   	$("#backTop").click(function(){
   		$('body').stop().animate({scrollTop:0},600)
   })
   	})
   
   $('h3 a').click(function(e){
   	index++;
   	ajax();
   	e.stopPropagation()
   })
   
   function ajax(){
   	var i = (index == 1) ? index : index * 10;
   	$.ajax({
	   		url:'http://diviner.jd.com/diviner?p=610009&cb=jsonpCallbackMoreGood&lid='+i+'&uuid=122270672.1523410622.1470034348.1478769570.1478771437.16&pin=&lim=10&ec=utf-8&_=1478771438687',
	   	dataType:'jsonp',
	   	jsonp: 'callback',
		jsonpCallback: 'jsonpCallbackMoreGood',
	   	success:function(res){
	   		var data = res.data;
	   		$.each(data, function(ind,ele) {
	   			var elett = ele.t;
	   			var el = elett.substr(0,20);
	   			var e = el+'...'
	   			$('article ul').append('<li><a href="##"><img src="http://img13.360buyimg.com/n1/s200x200_'+ele.img+'" /><div><span>京东超市</span><i>'+e+'</i><p><em>'+ele.jp+'</em><span>元</span><b>新用户5元抢</b><small>已售'+ele.c3+'</small></p></div></a></li>')
	   		});
	   	}
   })
   }
   
   
// $('#backTop').mousedown(function(evt){
// 		var evtt = evt||event;
// 		$(document).mousemove(function(evt){
// 			var evee = evt||event;
// 			$('#backTop').css('left',evee.clientX-evtt.offsetX+'px');
// 			$('#backTop').css('top',evee.clientY-evtt.offsetY+'px');
// 		})
// 		$(document).mouseup(function(){
// 			$(this).unbind('mousemove');
// 		})
// })

   
   
// function show(){
// 	$('article ul li').each(function(){
// 		$(this).animate({opacity:1},1000)
// 	})
// }
