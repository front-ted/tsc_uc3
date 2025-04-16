// JavaScript Document

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


	//adiciona linhas na div do dicionario propriamente dita
	function buildUpRow(word, id=null){
		if(id == null){
			id = "#dict";
		}
		//cria a linha
		var row = document.createElement('div');
		row.setAttribute('class','row');
		//palavra em português;
			//cria a div
			var div_pp = document.createElement('div');

			if(word.pt != ''){
				div_pp.setAttribute('class','word pt col fadeIn animated');
				div_pp.setAttribute('tabindex',0);
			}else{
				div_pp.setAttribute('class','word blank col fadeIn animated');
				div_pp.setAttribute('tabindex',-1);
				div_pp.setAttribute('aria-hidden','true');
			}
			//cria a descriçao da palavra
			var sp_pt = document.createElement('span');
			sp_pt.setAttribute('class','spkIns');
			sp_pt.innerHTML = "Palavra em português:";
			//cria o texto
			//var txt_pt = document.createElement('span');
			//txt_pt.innerHTML = word.pt;
			var txt_pt = document.createTextNode(word.pt);
			//adiciona os nós
			div_pp.appendChild(sp_pt);
			div_pp.appendChild(txt_pt);
		//palavra em espanhol
		if(word.es != undefined){
			//cria o link
			var link_es = document.createElement('a');
			link_es.setAttribute('role','button');
			link_es.setAttribute('title','Clique para ouvir a sua pronúncia');
			link_es.setAttribute('tabindex',0);
			link_es.setAttribute('href','Javascript:');
			//link_es.onclick = function(){playAudio(word.audio_es,"Spanish Latin American Female")};
			link_es.onclick = function(){playMp3(es_path+word.audio_es)};
			//cria a div
			var div_es = document.createElement('div');
			if(word.es != ''){
				div_es.setAttribute('class','word es col icon-audio fadeIn animated');
			}	else {
				div_es.setAttribute('class','word blank col fadeIn animated');
				link_es.setAttribute('tabindex',-1);
				link_es.setAttribute('aria-hidden','true');
			}
			//cria o texto oculto
			var sp_es = document.createElement('span');
			sp_es.setAttribute('class','spkIns');
			sp_es.innerHTML = "Palavra em espanhol:";
			//cria o texto
			//var txt_es = document.createElement('span');
			//txt_es.innerHTML = word.es;
			var txt_es = document.createTextNode(word.es);
			//adiciona os nós
			div_es.appendChild(sp_es);
			div_es.appendChild(txt_es);
			link_es.appendChild(div_es);
		}
		//palavra em inglês
			//cria o link
			var link_en = document.createElement('a');
			link_en.setAttribute('role','button');
			link_en.setAttribute('title','Clique para ouvir a sua pronúncia');
			link_en.setAttribute('tabindex',0);
			link_en.setAttribute('href','Javascript:');
			link_en.onclick = function(){playMp3(en_path+word.audio_en)};
			//cria a div
			var div_en = document.createElement('div');
			if(word.en != ''){
				div_en.setAttribute('class','word en col icon-audio fadeIn animated');
		  } else {
				div_en.setAttribute('class','word blank col fadeIn animated');
				link_en.setAttribute('tabindex',-1);
				link_en.setAttribute('aria-hidden','true');
			}
			//cria o texto oculto
			var sp_en = document.createElement('span');
			sp_en.setAttribute('class','spkIns');
			sp_en.innerHTML = "Palavra em Inglês:";
			//cria o texto
			//var txt_en = document.createElement('span');
			//txt_en.innerHTML = word.en;
			var txt_en = document.createTextNode(word.en);
			//adiciona os nós
			div_en.appendChild(sp_en);
			div_en.appendChild(txt_en);
			link_en.appendChild(div_en);

		//monta a linha
		row.appendChild(div_pp);
		if(word.es != undefined) {row.appendChild(link_es); }
		row.appendChild(link_en);
		//adiciona a linha
		$(id).append(row);
	}
	function populateDict(dict,nameDict, id = null){
		console.log(dict);
		console.log(dict.length);
		if (id == null ){
			id = "#dict";
		} 
		$(id).empty();
		for(var i = 0; i < dict.length; i++){
			console.log(i);
			buildUpRow(dict[i], id);
		}
		//cria um espaçador pra evitar de bater no footer em telas pequenas;
		var div_spc = document.createElement('div');
		div_spc.setAttribute('class','spacer');
		$(id).append(div_spc);
		$('body').focus();
		if(nameDict){
			$('#tituloDict').html(nameDict);
		}

	}
	function setActive(e){
		$('.linkNav').removeClass('active');
		e.addClass('active');
	}
	/*$(document).ready(function(e) {
        populateDict(divVocabulario[0],'Vocabulário');
    });*/
