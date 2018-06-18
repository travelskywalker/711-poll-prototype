
$(document).ready(function(){
	$('#barcode').keypress(function(e){
		if(e.which == 10 || e.which == 13) {
                // console.log('enter');
                sendForm();
            }
	});

	showPollResult();
	setGraph();
});

function setGraph(){

	$('#result').html('');
	
	var myData = {};

	sendAPI('GET', '/poll/result').then(function(response){
			console.log(response.data);

			$.each(response.data, function( key, value ) {
  				console.log(value);
  				myData['"'+value.school_name+'"'] = value.vote_count;
  				// $.each(value, function (index, data) {
			   //      console.log('index', data)
			   //  })
			});

			var myOptions = {
		    // default: 350
		    'height': 400,
		    // default: ''
		    'title': 'Poll Result',
		    // width of chart
		    'width': 100,
		    // background color
		    'barColor': 'linear-gradient(rgb(144, 164, 237), rgb(122, 139, 204))',
		    // default: 8
		    'fixPadding': 2,
		    // bar font
		    'barFont': [0, 12, "bold"],
		    // label font
		    'labelFont': [0, 13, 0]
		};

		graphite(myData, myOptions, result);

	})
	.catch(function(error){
		console.log(error);
	});




		
		// console.log(myData);
		// myData['Subok'] = 20;

		// console.log(myData);

		

}


function cast(){
	sendAPI('POST', url, data).then(function(response){

	}).catch({
	});
}

function clearVote(){
	$('#school').val('').focus();
	$('#barcode').val('');
}



function sendForm(form, url){
	var data = $('#cast').serializeArray();
	var url = "/poll/cast";

		sendAPI('POST', url, data).then(function(response){
			console.log(response);
			 M.toast({html: 'data has been saved!'});
			setGraph();
			clearVote();
		})
		.catch(function(error){
			console.log(error);
		});
}

function showPollResult(){

	sendAPI('GET', '/poll/result').then(function(response){
			$('.cast-area').html(response);
	})
	.catch(function(error){
		console.log(error);
	});

}



function sendAPI(method,url,data){
	return(
		$.ajax({
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
	        url: url,
	        data: data,
	        datatype:'json',
	        // cache: false,
	        // processData: false,
	        type: method,
	        success: function (dat) {
	            // do something with the result
	            // console.log(dat);
	        }
	    })
	);
}