socket.on('result', function (data) {
	if(data['check'] == 'cpu') {
		$('#cpu_user').html(data['success']['cpu_user']);
		$('#cpu_system').html(data['success']['cpu_system']);
		$('#cpu_idle').html(data['success']['cpu_idle']);
	}
	if(data['check'] == 'load_average') {
		$('#load_average_1m').html(data['success']['load_average_1m']);
		$('#load_average_5m').html(data['success']['load_average_5m']);
		$('#load_average_15m').html(data['success']['load_average_15m']);
	}
});

// $(document).ready( function() {
// 	$('#load_average').hide();

// 	setInterval(function() {
// 		if ($('#cpu').is(":visible")) {
// 			$('#cpu').fadeOut('slow', function() {
// 				$('#load_average').fadeIn('slow');
// 			});
// 		}
// 		else if ($('#load_average').is(":visible")) {
// 			$('#load_average').fadeOut('slow', function() {
// 				$('#cpu').fadeIn('slow');
// 			});
// 		}
// 	}, 10000);
// });
