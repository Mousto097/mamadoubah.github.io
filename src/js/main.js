$(document).ready(function() {
    // open modal
    $('#open_modal').click(function() {
        $('#modal_to_open').css( {
            'display': 'block'
        });
    });
    //close modal
    $('#close_modal').click(function() {
        $('#modal_to_open').css({
            'display': 'none'
        });
    });

    // //send mail with ajax, traitement impossible sans hebergeur, à completer plus tard
    // $('#send_mail').click(function(e){
	// 	e.preventDefault();
	// 	var data = {
	// 		email: $('#email').val(),
	// 		name: $('#firstname').val(),
	// 		objet: $('#lastname').val(),
	// 		message: $('#message').val()
    //     };
    //     // Code Ajax
	// 	$.ajax({
	// 		url: "mail.php",
	// 		type: 'POST',
	// 		data: data,
	// 		success: function(data) {
	// 			$('#js_alert_success').css({'display' : 'block'});
	// 			setTimeout(function(){
	// 				$('#js_alert_success').css({'display' : 'none'});
	// 				$('#email').val("");
	// 				$('#firstname').val("");
	// 				$('#lastname').val("");
	// 				$('#message').val("")
	// 			}, 3000);
	// 		},
	// 		error: function(data) {
	// 			$('#js_alert_danger').css({'display' : 'block'});
	// 			setTimeout(function(){
	// 				$('#js_alert_danger').css({'display' : 'none'});
	// 				$('#email').val("");
	// 				$('#firstname').val("");
	// 				$('#lastname').val("");
	// 				$('#message').val("")
	// 			}, 3000);
	// 		 }
	// 	  });
	//   });
});