// JavaScript Document
	//dicionario de cordialidade
	var dicCalendarioP01 = new Array();
		//linha em branco
		dicCalendarioP01.push({pt:"Oi!",es:'¡Hola!.',audio_es:'hola.mp3',en:'Hi!',audio_en:'HI.mp3'});
		dicCalendarioP01.push({pt:"Tudo bem?",es:'¿Qué tal?',audio_es:'que_tal.mp3',en:'How are you? / How are you doing?',audio_en:'how_are_you.mp3'});
		dicCalendarioP01.push({pt:"Qual é o seu nome?",es:'¿Cómo se llama/te llamas?',audio_es:'como_se_llama.mp3',en:'What’s your name?',audio_en:'whats_your_name.mp3'});
		dicCalendarioP01.push({pt:"Desculpe, qual é mesmo o seu nome?",es:'Disculpe, cuál es su nombre/tu nombre?',audio_es:'disculpe_cuel_es_su_nombre.mp3',en:'Sorry, what was your name again?',audio_en:'sorry_what_was_your_name_again.mp3'});
		dicCalendarioP01.push({pt:"Oi, eu sou...",es:'Hola, yo soy...',audio_es:'hola_yo_soy_maria.mp3',en:'Hi, I’m...',audio_en:'hi_im.mp3'});
		dicCalendarioP01.push({pt:"Prazer.",es:'Mucho gusto.',audio_es:'mucho_gusto.mp3',en:'Nice to meet you.',audio_en:'nice_to_meet_you.mp3'});
		dicCalendarioP01.push({pt:"O prazer é meu.",es:'Encantado/encantada.',audio_es:'encantada_encantado.mp3',en:'Nice to meet you too.',audio_en:'nice_to_meet_you_too.mp3'});
		dicCalendarioP01.push({pt:"Você conhece o (Carlos)?",es:'¿Conoce/conoces a (Carlos)?',audio_es:'conoce_a_carlos.mp3',en:'Do you know (Carlos)?',audio_en:'do_you_know_carlos.mp3'});
		dicCalendarioP01.push({pt:"Eu quero apresentá-lo ao...",es:'Quiero presentarle/presentarte a...',audio_es:'quiero_presentarle_a_ana.mp3',en:'I’d like you to meet...',audio_en:'id_like_you_to_meet.mp3'});
		dicCalendarioP01.push({pt:"Já ouvi falar muito de você.",es:'Ya he oído hablar mucho de usted/ti.',audio_es:'ya_he_oido_hablar_mucho_de_usted.mp3',en:'I’ve heard a lot about you.',audio_en:'ive_heard_a_lot_about_you.mp3'});
		dicCalendarioP01.push({pt:"A (Ana) já me falou muito sobre você.",es:'(Ana) ya me ha hablado sobre usted/ti.',audio_es:'ana_ya_me_ha_hablado_sobre_usted.mp3',en:'(Ana) has told me a lot about you.',audio_en:'ana_has_told_me_a_lot_about_you.mp3'});
		dicCalendarioP01.push({pt:"Gostei de conhecê-lo.",es:'Me ha gustado mucho conocerle/conocerte.',audio_es:'me_ha_gustado_mucho_conocerle.mp3',en:'(It was) Nice metting you.',audio_en:'it_was_nice_metting_you.mp3'});
		dicCalendarioP01.push({pt:"Até (mais).",es:'¡Hasta luego!/¡Hasta pronto!',audio_es:'hasta_luego.mp3',en:'See you (later).',audio_en:'see_you.mp3'});

	var dicCalendarioP02 = new Array();
		dicCalendarioP02.push({pt:"Empresa X, bom dia/boa tarde/boa noite.",es:'Empresa X, buenos días/buenas tardes/buenas noches.',audio_es:'empresa_x_buenos_dias.mp3',en:'X company, good morning/good afternoon/good evening.',audio_en:'x_company_good_morning.mp3'});
		dicCalendarioP02.push({pt:"Em que posso ajudá-lo?",es:'¿En qué puedo ayudarlo?',audio_es:'en_que_puedo_ayudarlo.mp3',en:'May I help you?',audio_en:'may_i_help_you.mp3'});
		dicCalendarioP02.push({pt:"Pois não?",es:'¿Sí?¿Cómo no?',audio_es:'si_como_no.mp3',en:'How can I help you?',audio_en:'how_can_i_help_you.mp3'});
		dicCalendarioP02.push({pt:"É... ?",es:'¿Es...?',audio_es:'es.mp3',en:'Is this?',audio_en:'is_this.mp3'});
		dicCalendarioP02.push({pt:"É ele/ela. ",es:'É ele/ela. Fulano/a le habla.',audio_es:'maria_le_habla.mp3',en:'Speaking.',audio_en:'speaking.mp3'});
		dicCalendarioP02.push({pt:"Posso falar com fulano/a?",es:'¿Puedo hablar con fulano/a?',audio_es:'puedo_hablar_con_maria.mp3',en:'May I speak to fulano?',audio_en:'may_i_speak_to_fulano.mp3'});
		dicCalendarioP02.push({pt:"Sobre o que seria?/A respeito do que seria?",es:'¿Sobre qué sería?/¿A respecto de qué sería?',audio_es:'sobre_que_seria.mp3',en:'May I ask what this is regarding?',audio_en:'may_i_ask_what_this_is_regarding.mp3'});
		dicCalendarioP02.push({pt:"Espere, por favor.",es:'Espere, por favor.',audio_es:'espere_por_favor.mp3',en:'Hold, please.',audio_en:'hold_please.mp3'});
		dicCalendarioP02.push({pt:"Um momento, por favor.",es:'Un momento, por favor.',audio_es:'un_momento_por_favor.mp3',en:'One moment, please.',audio_en:'one_moment_please.mp3'});
		dicCalendarioP02.push({pt:"Um minuto, por favor.",es:'Un rato, por favor.',audio_es:'un_rato_por_favor.mp3',en:'Just a minute, please.',audio_en:'just_a_minute_please.mp3'});
		dicCalendarioP02.push({pt:"Fulano não está aqui agora.",es:'Fulano no está aquí ahora.',audio_es:'pedro_no_esta_aqui_ahora.mp3',en:'Fulano isn’t here now.',audio_en:'fulano_isnt_here_now.mp3'});
		dicCalendarioP02.push({pt:"Desculpe-me, não falo espanhol/inglês.",es:'Discúlpeme, no hablo español.',audio_es:'desculpeme_no_hablo_espanol.mp3',en:'I’m sorry. I don’t speak English.',audio_en:'im_sorry_i_dont_speak_english.mp3'});
		dicCalendarioP02.push({pt:"Ligue mais tarde, por favor.",es:'Llame más tarde, por favor.',audio_es:'llame_mas_tarde_por_favor.mp3',en:'Call later, please. ',audio_en:'call_later_please.mp3'});
		dicCalendarioP02.push({pt:"Obrigado.",es:'Gracias.',audio_es:'gracias.mp3',en:'Thank you.',audio_en:'thank_you.mp3'});

	var dicCalendarioP03 = new Array();
		dicCalendarioP03.push({pt:"Bom dia/Boa tarde/Boa noite a todos.",es:'Buenos días/Buenas tardes/Buenas noches para todos.',audio_es:'buenos_dias_para_todos.mp3',en:'Good morning/Good afternoon/Good evening.',audio_en:'good_morning_everyone.mp3'});
		dicCalendarioP03.push({pt:"Obrigado(a) pela pontualidade.",es:'Les agradezco por la puntualidad.',audio_es:'les_agradezco_por_la_puntualidad.mp3',en:'Thank you for coming on time/Thank you for being on time.',audio_en:'thank_you_for_coming_on_time.mp3'});
		dicCalendarioP03.push({pt:"Vamos começar, então?",es:'¿Vamos a empezar, entonces?',audio_es:'vamos_empezar_entonces.mp3',en:'Let’s begin, shall we?',audio_en:'lets_begin_shall_we.mp3'});
		dicCalendarioP03.push({pt:"Podemos começar?",es:'¿Podemos empezar?',audio_es:'podemos_empezar.mp3',en:'Shall we begin?',audio_en:'shall_we_begin.mp3'});
		dicCalendarioP03.push({pt:"Bem, vamos começar.",es:'Bien, vamos a empezar.',audio_es:'bien_vamos_empezar.mp3',en:'So, let’s get started.',audio_en:'so_lets_get_started.mp3'});

	var dicCalendario = [dicCalendarioP01,dicCalendarioP02,dicCalendarioP03]
	var en_path = 'mp3/situacoes/en/'
	var es_path = 'mp3/situacoes/es/'

	console.log(dicCalendario);
