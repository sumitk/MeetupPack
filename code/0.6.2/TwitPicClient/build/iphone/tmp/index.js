window.onload = function() {
  var currentImage = null;
  var currentImageDetails = null;
  var tweetValue = 'Just posted this photo with #titanium from @appcelerator!';
  
  //Create click handler for camera
  document.getElementById('camera').onclick = function() {
    Titanium.Media.showCamera({
			success: function(image,details) {
				currentImage = image;
				currentImageDetails = details;
				stageImage();
			},
			error: function(e) {
				var a = Titanium.UI.createAlertDialog({title:'Whoops!',message:'There was a problem with your device camera.'});
    		a.show();
			},
			cancel: function() {
				//no op
			},
			allowImageEditing:true
		});
  };
  
  //Handle request for photo gallery
  document.getElementById('gallery').onclick = function() {
    Titanium.Media.openPhotoGallery({
			success: function(image,details) {
				currentImage = image;
				currentImageDetails = details;
				stageImage();
			},
			error: function(e) {
				var a = Titanium.UI.createAlertDialog({title:'Whoops!',message:'There was a problem with your photo gallery.'});
    		a.show();
			},
			cancel: function() {
				//no op
			},
			allowImageEditing:true
		});
  };
  
  //Cancel the current image and go back to select state
  document.getElementById('different').onclick = function() {
    showSelect();
  };
  
  //Create native text input
  var tf = Titanium.UI.createTextField({
		id:'input',
		value:tweetValue,
		enableReturnKey:true,
		keyboardType:Titanium.UI.KEYBOARD_ASCII,
		autocorrect:false,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
	});

	tf.addEventListener('return',function(e) {
	  tf.blur();
	});
	
	tf.addEventListener('change', function(e) {
	  tweetValue = e.value;
	});
  
  //Create native button
	var postButton = Titanium.UI.createButton({
		id:'btn',
		backgroundImage:'blue.png',
		backgroundSelectedImage:'blue_pressed.png',
		title:'Post Image!',
		color:'#ffffff',
		height:47
	});
	
	//Handle button click and send picture
	postButton.addEventListener('click',function(e) {
	  if (Titanium.Network.NETWORK_NONE) {
	    var a = Titanium.UI.createAlertDialog({
 	      title:'Whoa There!',
 	      message:'We can\'t detect a network connection.  Are you connected to a wifi or mobile network?'
 	    });
 	    a.show();
	  }
	  else if (currentImage == null) {
	    var a = Titanium.UI.createAlertDialog({
 	      title:'Whoa There!',
 	      message:'Easy there shooter - you should probably select an image first.'
 	    });
 	    a.show();
	  }
	  else {
	    showUploading();
	    var query = 'https://twitpic.com/api/uploadAndPost';
      var xhr = Titanium.Network.createHTTPClient();
  		xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          // Check the response to see if we're okay
          // TwitPic API reference: http://twitpic.com/api.do
          // Using jQuery ($ macro functions) for XML parsing - for more 
          // info on jQuery, visit http://www.jquery.com
          var parser = new DOMParser();
          var doc = parser.parseFromString(this.responseText, "text/xml");
          $(doc).find("rsp").each(function() {
            var stat = $(this).attr('stat'); //We only get this on an error
            if (stat == null || stat !== 'fail') {
              showSuccess();
              setTimeout(function() {
                showSelect();
              },3000);
            }
            else {
              $(doc).find("err").each(function() {
                var a = Titanium.UI.createAlertDialog({
           	      title:'TwitPic API Error',
           	      message:$(this).attr('msg')
           	    });
           	    a.show();
           	    showSelect();
              });
            }
          });
        }
  		};
  		xhr.open('POST',query);
  		xhr.send({
  			media:currentImage,
  			username: Titanium.App.Properties.getString('username'),
  			password: Titanium.App.Properties.getString('password'),
  			message: tweetValue
  		});
	  }
	});
	
	//Utility functions to manage the photo select 'view stack'
	function showSelect() {
	  currentImage = null;
	  currentImageDetails = null;
	  document.getElementById("select").style.display = 'block';
    document.getElementById("selected_photo").style.display = 'none';
    document.getElementById("uploading").style.display = 'none';
    document.getElementById("success").style.display = 'none';
	}
	
	function showSelected() {
	  document.getElementById("select").style.display = 'none';
    document.getElementById("selected_photo").style.display = 'block';
    document.getElementById("uploading").style.display = 'none';
    document.getElementById("success").style.display = 'none';
	}
	
	function showUploading() {
	  document.getElementById("select").style.display = 'none';
    document.getElementById("selected_photo").style.display = 'none';
    document.getElementById("uploading").style.display = 'block';
    document.getElementById("success").style.display = 'none';
	}
	
	function showSuccess() {
	  document.getElementById("select").style.display = 'none';
    document.getElementById("selected_photo").style.display = 'none';
    document.getElementById("uploading").style.display = 'none';
    document.getElementById("success").style.display = 'block';
	}
	
	//Stage an image for viewing in the center window
  function stageImage() {
    document.getElementById('theImage').src = currentImage.url;
    showSelected();
  }
  
};