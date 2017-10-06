$(document).ready(function() {
	
	$('.bannerSlider').bxSlider({
  		captions: true,
		adaptiveHeight: true,
		auto:true,
		pager:false,
		pause: 60000
	});
	
	
	//anchor tag scroll 
	$(".scroll").click(function(event){	
	$(".scroll").removeClass("active");
	$(this).addClass("active");
	$(".anchor_div").css({"display":"block"}); 
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
	
	
	
	
	
	
	
	
	/*---------FancyBox--------*/
	$('.fancybox').fancybox();

	$('.fancybox-buttons').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		closeBtn  : false,
			helpers : {
			title : {
			type : 'inside'
			},
			buttons	: {}
			},
		
		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
	
	new WOW().init();
	
});


window.onscroll = function() {myFunction()};
	function myFunction() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        document.getElementById("enP").className = "enquireShow";
    } else {
        document.getElementById("enP").className = "enquireHide";
    }
}	



$('select option').each(function(a,b){
    if(b.value.length > 50){
      b.text= b.text.substring(0, 50)+ a+ '..';
    }
});






