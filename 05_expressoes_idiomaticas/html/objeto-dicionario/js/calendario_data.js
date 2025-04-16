// JavaScript Document
	//dicionario de cordialidade
	var dicCalendarioP01 = new Array();
		//linha em branco
		dicCalendarioP01.push({pt:'', es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP01.push({pt:'Dias da semana',    es:'Días de la semana',        audio_es:'dias_de_la_semana.mp3',        en:'Days of the week',           audio_en:'days_of_the_week.mp3'});
		//linha em branco
		dicCalendarioP01.push({pt:'', es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP01.push({pt:"Segunda-feira",   es:'Lunes',              audio_es:'lunes.mp3',      en:'Monday',         audio_en:'monday.mp3'});
		dicCalendarioP01.push({pt:"Terça-feira",     es:'Martes',             audio_es:'martes.mp3',      en:'Tuesday',        audio_en:'tuesday.mp3'});
		dicCalendarioP01.push({pt:"Quarta-feira",    es:'Miércoles',          audio_es:'miercoles.mp3',     en:'Wednesday',      audio_en:'wednesday.mp3'});
		dicCalendarioP01.push({pt:"Quinta-feira",    es:'Jueves',             audio_es:'jueves.mp3',      en:'Thursday',       audio_en:'thursday.mp3'});
		dicCalendarioP01.push({pt:"Sexta-feira",     es:'Viernes',            audio_es:'viernes.mp3',      en:'Friday',         audio_en:'friday.mp3'});
		dicCalendarioP01.push({pt:"Sábado",          es:'Sábado',             audio_es:'sabado.mp3',      en:'Saturday',       audio_en:'saturday.mp3'});
		dicCalendarioP01.push({pt:"Domingo",         es:'Domingo',            audio_es:'domingo.mp3',      en:'Sunday',         audio_en:'sunday.mp3'});
		//linha em branco
		dicCalendarioP01.push({pt:'',es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP01.push({pt:"Final de semana", es:'Fin de semana',      audio_es:'fin_de_semana.mp3',      en:'Weekend',        audio_en:'weekend.mp3'});

	var dicCalendarioP02 = new Array();
		//linha em branco
		dicCalendarioP02.push({pt:'', es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP02.push({pt:"Meses do ano",    es:'Meses del año ',        audio_es:'meses_del_ano.mp3',        en:'Months of the year',           audio_en:'months_of_the_year.mp3'});
		//linha em branco
		dicCalendarioP02.push({pt:'', es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP02.push({pt:"Janeiro",    es:'Enero',     audio_es:'enero.mp3',    en:'January',  audio_en:'january.mp3'});
		dicCalendarioP02.push({pt:"Fevereiro",  es:'Febrero',   audio_es:'febrero.mp3',    en:'February', audio_en:'february.mp3'});
		dicCalendarioP02.push({pt:"Março",      es:'Marzo',     audio_es:'marzo.mp3',    en:'March',    audio_en:'march.mp3'});
		dicCalendarioP02.push({pt:"Abril",      es:'Abril',     audio_es:'abril.mp3',   en:'April',    audio_en:'april.mp3'});
		dicCalendarioP02.push({pt:"Maio",       es:'Mayo',      audio_es:'mayo.mp3',    en:'May',      audio_en:'may.mp3'});
		dicCalendarioP02.push({pt:"Junho",      es:'Junio',     audio_es:'junio.mp3',    en:'June',     audio_en:'june.mp3'});
		dicCalendarioP02.push({pt:"Julho",      es:'Julio',     audio_es:'julio.mp3',    en:'July',     audio_en:'july.wav.mp3'});
		dicCalendarioP02.push({pt:"Agosto",     es:'Agosto',    audio_es:'agosto.mp3',    en:'August',   audio_en:'august.mp3'});
		dicCalendarioP02.push({pt:"Setembro",   es:'Septiembre',audio_es:'septiembre.mp3',    en:'September',audio_en:'september.mp3'});
		dicCalendarioP02.push({pt:"Outubro",    es:'Octubre',   audio_es:'octubre.mp3',    en:'October',  audio_en:'october.mp3'});
		dicCalendarioP02.push({pt:"Novembro",   es:'Noviembre', audio_es:'noviembre.mp3',    en:'November', audio_en:'november.mp3'});
		dicCalendarioP02.push({pt:"Dezembro",   es:'Diciembre', audio_es:'diciembre.mp3',    en:'December', audio_en:'december.mp3'});

	var dicCalendarioP03 = new Array();
		//linha em branco
		dicCalendarioP03.push({pt:'', es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP03.push({pt:"Estações do ano",    es:'Estaciones del año',        audio_es:'estaciones_del_ano.mp3',        en:'Seasons of the year',           audio_en:'seasons_of_the_year.mp3'});
		//linha em branco
		dicCalendarioP03.push({pt:'', es:'',audio_es:'',en:'',audio_en:''});
		dicCalendarioP03.push({pt:"Verão",     es:'Verano',    audio_es:'verano.mp3',   en:'Summer',       audio_en:'summer.mp3'});
		dicCalendarioP03.push({pt:"Outono",    es:'Otoño',     audio_es:'otono.mp3',   en:'Fall/ Autumn', audio_en:'fall_autumn.mp3'});
		dicCalendarioP03.push({pt:"Inverno",   es:'Invierno',  audio_es:'invierno.mp3',   en:'Winter',       audio_en:'winter.mp3'});
		dicCalendarioP03.push({pt:"Primavera", es:'Primavera', audio_es:'primavera.mp3',  en:'Spring',       audio_en:'spring.mp3'});

	var dicCalendario = [dicCalendarioP01,dicCalendarioP02,dicCalendarioP03]
	var en_path = 'mp3/calendario/en/'
	var es_path = 'mp3/calendario/es/'

	console.log(dicCalendario);
