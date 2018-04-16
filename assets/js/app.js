//maneira mais top de escrever js
// $.fricks = {
// 		animate: function(direction){
// 			$('.anim'+direction).each(function(){
// 				$(this).addClass("slide"+direction);
// 			});
// 		}
// 	},


//carrega as paginas e da start nas animacoes apos carregar
//$(window).load(function() {
	//$(".loader").delay(2000).fadeOut("500", function() {

		//$.fricks.animate("Right");
		//$.fricks.animate("Left");

//		$('.animRight').each(function(){
//			$(this).addClass("slideRight");
//		});
//
//		$('.animLeft').each(function(){
//			$(this).addClass("slideLeft");
//		});

	//});
//});

//carrega as paginas
$(window).load(function() {
	$(".loader").fadeOut(2000);
});

//animacao css via scroll down
$(document).ready(function() {

	

	// Initialize the plugin
      $('.overlay-djs').popup({
      	//color: '#7cc8d6',
      	opacity: 1,
      	transition: '0.3s',
      	scrolllock: true
      });

	// video bg
	var videobackground = new $.backgroundVideo($('#bgVideo'), {
            "align" : "centerXY",
            "path" : "video/",
            "width": 1280,
            "height": 720,
            "filename" : "preview",
            "types" : ["mp4", "ogg", "webm"]
        });

	//form2
	$("#formSent").hide();
	$("#submit").click(function(){
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		/**
		* Bloco de validação
		**/
		var assuntoVal = $("#formAssunto");
		if(assuntoVal.val() == '') {
			assuntoVal.attr('placeholder','Ops! Você esqueceu de preencher o assunto!');
			hasError = true;
		}

		var nameVal = $("#formName");
		if(nameVal.val() == '') {
			nameVal.attr('placeholder','Ops! Você esqueceu de preencher seu nome!');
			hasError = true;
		}

		var emailFromVal = $("#formAdress");
		if(emailFromVal.val() == '') {
			emailFromVal.attr('placeholder', 'Ops! Você esqueceu de preencher seu e-mail!');
			hasError = true;
		} else if(!emailReg.test(emailFromVal.val())) {
			emailFromVal.val('').attr('placeholder','Por favor preencha um e-mail válido!');
			hasError = true;
		}

		var messageVal = $("#message");
		if(messageVal.val() == '') {
			messageVal.attr('placeholder','Por favor escreva alguma mensagem!');
			hasError = true;
		}

		// se n tem erros
		if(hasError == false) {
			// esconde o btn de submit
			$(this).hide();

			// faz o ajax
			$.ajax({
			  type: 'POST',
			  url: 'sendmail.php',
			  data: { name: nameVal.val(), emailFrom: emailFromVal.val(), message: messageVal.val(), subject: assuntoVal.val() },
			  success: 	function(data){
			  		// desliza as paradas
			  		$("#formToSend").slideUp('slow');
					$("#formSent").slideDown('slow');
			  },
			 //dataType: dataType
			});
		}

		return false;

	});
});

// **** HEADER COLAPSE
// $(window).scroll(function(){
//     var scroll=$('body').scrollTop()||$(window).scrollTop()
//     if(scroll > 153){
//         $("#header.colapse").animate({"top":0},909);
//     }else{
//         $("#header.colapse").stop(true,true).animate({"top":-300},909);
//     }
// });

$(window).scroll(function() {
	$('.mainTitle').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("slideUp");
		}
	});
	// $('.mainP').each(function(){
	// var imagePos = $(this).offset().top;

	// var topOfWindow = $(window).scrollTop();
	// 	if (imagePos < topOfWindow+200) {
	// 		$(this).addClass("fadeIn");
	// 	}
	// });
	$('.mainIcon').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("fadeIn");
		}
	});
	// $('.boxR').each(function(){
	// var imagePos = $(this).offset().top;

	// var topOfWindow = $(window).scrollTop();
	// 	if (imagePos < topOfWindow+400) {
	// 		$(this).addClass("slideRight");
	// 	}
	// });
	// $('.boxF').each(function(){
	// var imagePos = $(this).offset().top;

	// var topOfWindow = $(window).scrollTop();
	// 	if (imagePos < topOfWindow+400) {
	// 		$(this).addClass("slideLeft");
	// 	}
	// });

});

// set height 100%
$(window).resize(function() {
    var sH = $(window).height();
    $('div.main-slider').css({'height':(($ (window).height())) + 'px'});
   // $('section:not(.header-10-sub):not(.content-11)').css('height', sH + 'px');
});


// Parallax
        // $('.main-slider').each(function() {
        //     $(this).parallax('100%', 1, true);
        // });

	//form
	// 	$("#formSent").hide();
	// $("#submit").click(function(){
	// 	$(".error").hide();
	// 	var hasError = false;
	// 	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


	// 	var emailFromVal = $("#formAdress").val();
	// 	if(emailFromVal == '') {
	// 		//$("#formAdress").val('Oups, you forgot to write an email adress !');
	// 		$("#formAdress").val('Ops! Você esqueceu de preencher seu e-mail!');
	// 		hasError = true;
	// 	} else if(!emailReg.test(emailFromVal)) {
	// 		//$("#formAdress").val('Oups, your email adress is not a valid one !');
	// 		$("#formAdress").val('Por favor preencha um e-mail válido!');
	// 		hasError = true;
	// 	}

	// 	var subjectVal = $("#formName").val();
	// 	if(subjectVal == '') {
	// 		//$("#formName").val('Oups, you forgot to write your name');
	// 		$("#formName").val('Ops! Você esqueceu de preencher seu nome!');
	// 		hasError = true;
	// 	}

	// 	var messageVal = $("#message").val();
	// 	if(messageVal == '') {
	// 		//$("#message").val('No really, what is it all about ?');
	// 		$("#message").val('Por favor escreva alguma mensagem!');
	// 		hasError = true;
	// 	}


	// 	if(hasError == false) {
	// 		$(this).hide();

	// 						$("#formToSend").slideUp('slow');
	// 						$("#formSent").slideDown('slow');
	// 						//alert('OK');
	// 		// $.post("sendemail.php",
	// 		//    				{ name: subjectVal, emailFrom: emailFromVal, subject: 'Mensagem de João Paulo Fricks', message: messageVal },
	// 		//    					function(data){
	// 		//
	// 		//
	// 		//
	// 		//    					}
	// 		// 				 );
	// 			$.ajax({
	// 			  type: 'POST',
	// 			  url: 'sendmail.php',
	// 			  data: { name: subjectVal, emailFrom: emailFromVal, subject: 'Mensagem de João Paulo Fricks', message: messageVal },
	// 			  success: 	function(data){



 // 					}
	// 			 // dataType: dataType
	// 			});
	// 	}

	// 	return false;

	// });

// $(document).ready(function() {
// $('.boxR2').each(function(){
// 	var imagePos = $(this).offset().top;

// 	var topOfWindow = $(window).scrollTop();
// 		if (imagePos < topOfWindow+400) {
// 			$(this).addClass("slideRight");
// 		}
// 	});
// });
