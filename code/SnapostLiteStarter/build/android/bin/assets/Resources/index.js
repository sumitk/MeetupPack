$(function() {
  //Choose an image from the photo gallery
	$("#choose").click(function() {
		Titanium.Media.openPhotoGallery({
			success: function(image,details) {
				var query = 'https://twitpic.com/api/uploadAndPost';
	      var xhr = Titanium.Network.createHTTPClient();
				xhr.onreadystatechange = function() {
	        if (this.readyState === 4) {
	          $("#message").val(this.responseText)
	        }
				};
				xhr.open('POST',query);
	  		xhr.send({
					media:image,
					username: $("#username").val(),
					password: $("#password").val(),
					message: $("#message").val()
				});
				
			},
			error: function(error) {
				Titanium.UI.createAlertDialog( {
					title: "Error from Gallery",
					message: error.message,
					buttonNames: OK
					}).show();
			},
			cancel: function() {
				//no op
			},
			allowImageEditing:true
		});
	});
  
  //Make the input fields a bit user friendly
	$("#username, #password").focus(function() {
		$(this).val('');
	}).blur(function() {
		if ($(this).val() == '') {
			$(this).val('username');
		}
	});
});