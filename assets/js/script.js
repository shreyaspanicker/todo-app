$("ul").on("click","span",function(){
	$(this).toggleClass("clicked");
})

$("ul").on("click","i",function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
})

$("input").on("keypress",function(event){
	if(event.which===13){
		var a = $(this).val();
		$("ul").append('<li><i class="fa fa-trash" aria-hidden="true"></i><span>'+a+'</span></li>');	
		$(this).val("");
	}
})

$(".fa-plus").on("click",function(){
	$("input").slideToggle(500);
});