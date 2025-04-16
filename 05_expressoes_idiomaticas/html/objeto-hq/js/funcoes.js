// JavaScript Document
//data
		
function playAudio(param,lang){		
		responsiveVoice.speak(param,lang);
		console.log('param='+param);
		console.log('lang='+lang);
}
function playMp3(mp3){
	console.log(mp3);
	$('#player').attr('src',mp3);
	document.getElementById('player').play();
}
	
function hideP(param){
		$(param).hide();
}



$(document).ready(function(e) {
    
	$('#sncloader').fadeOut(50);	
	$('.en').hide();
	$('.es').hide();    
	
	$('.readEs').on('click',function(){
		/*playAudio($(this).attr('data-audio'),'US English Female');*/
		//playAudio($(this).text(),'Spanish Latin American Female');
		console.log('audio es');
		console.log($(this).attr('data-audio'));
		playMp3($(this).attr('data-audio'));
	});
	$('.readEn').on('click',function(){
		/*playAudio($(this).attr('data-audio'),'Spanish Latin American Female');*/
		//playAudio($(this).text(),'Spanish Latin American Female');
		console.log('audio en');
		console.log($(this).attr('data-audio'));
		playMp3($(this).attr('data-audio'));
		
	});
	
	$('.btEs').on('click',function(){
		//hideP('.en'+$(this).attr('data-q'));
		//$('.es'+$(this).attr('data-q')).show(200);
		hideP('.en'+$(this).attr('data-q'));	
		$('.es'+$(this).attr('data-q')).toggle(300);
	});
	$('.btEn').on('click',function(){
		//hideP('.es'+$(this).attr('data-q'))
		//$('.en'+$(this).attr('data-q')).show(200);
		hideP('.es'+$(this).attr('data-q'));	
		$('.en'+$(this).attr('data-q')).toggle(300);	
	});
});
/*
var contentWidth = $('#hq').width();
var contentHeight = $('#hq').height();

var q01w = $('#q01').width();
var q02w = $('#q02').width();
var q03w = $('#q03').width();
var q04w = $('#q04').width();
var q05w = $('#q05').width();
var q06w = $('#q06').width();
var q07w = $('#q07').width();

var q01l = $('#q01').position().left;
var q01t = $('#q01').position().top;
console.log('t'+q01l);
console.log('l'+q01t);
var q02l = $('#q02').position().left;
var q02t = $('#q02').position().top;
var q03l = $('#q03').position().left;
var q03t = $('#q03').position().top;
var q04l = $('#q04').position().left;
var q04t = $('#q04').position().top;
var q05l = $('#q05').position().left;
var q05t = $('#q05').position().top;
var q06l = $('#q06').position().left;
var q06t = $('#q06').position().top;
var q07l = $('#q07').position().left;
var q07t = $('#q07').position().top;

var q01h = $('#q01').height();
var q02h = $('#q02').height();
var q03h = $('#q03').height();
var q04h = $('#q04').height();
var q05h = $('#q05').height();
var q06h = $('#q06').height();
var q07h = $('#q07').height();*/


/*window.onresize = function(){
	var availableWidth = window.innerWidth;
	var availableHeight = window.innerHeight;
	
	var scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight);
	console.log(scale);
	$('#hq').height(contentHeight * scale);
	$('#hq').width(contentWidth * scale);
	$('#q01').width(q01w * scale);
	$('#q02').width(q02w * scale);
	$('#q03').width(q03w * scale);
	$('#q04').width(q04w * scale);
	$('#q05').width(q05w * scale);
	$('#q06').width(q06w * scale);
	$('#q07').width(q07w * scale);
	
	$('#q01').css({top:(q01t*scale)+'px',left:(q01l*scale)+'px'});
	$('#q02').css({top:(q01t*scale)+'px',left:(q02l*scale)+'px'});
	$('#q03').css({top:(q01t*scale)+'px',left:(q03l*scale)+'px'});
	$('#q04').css({top:(q01t*scale)+'px',left:(q04l*scale)+'px'});
	$('#q05').css({top:(q01t*scale)+'px',left:(q05l*scale)+'px'});
	$('#q06').css({top:(q01t*scale)+'px',left:(q06l*scale)+'px'});
	$('#q07').css({top:(q01t*scale)+'px',left:(q07l*scale)+'px'});
	
	$('#q01').height(q01h * scale);
	$('#q02').height(q02h * scale);
	$('#q03').height(q03h * scale);
	$('#q04').height(q04h * scale);
	$('#q05').height(q05h * scale);
	$('#q06').height(q06h * scale);
	$('#q07').height(q07h * scale);
	
}*/