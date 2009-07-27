$(function() {
  try {
    //display a notification message
    function notify(msg) {
      Titanium.API.debug(msg);
      var n = Titanium.UI.createNotification();
    	n.setMessage(msg);
    	n.show();
    }
    
    //Make XHR request to post picture
    function postPic(pic) {
      var query = 'https://twitpic.com/api/uploadAndPost';
      var xhr = Titanium.Network.createHTTPClient();
    	xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          notify('Picture posted sucessfully!');
        }
    	};
    	xhr.open('POST',query);
    	xhr.send({
    		media:pic,
    		username: $("#username").val(),
    		password: $("#password").val(),
    		message: $("#message").val()
    	});
    }

  	//Handle storing and recalling username/password
    function storeLogin() {
      Titanium.App.Properties.setString('username',$("#username").val());
      Titanium.App.Properties.setString('password',$("#password").val());
    }

    function recallLogin() {
      $("#username").val(Titanium.App.Properties.getString('username'));
      $("#password").val(Titanium.App.Properties.getString('password'));
    }
    
    //Choose an image from the photo gallery
  	$("#choose").click(function() {
  		Titanium.Media.openPhotoGallery({
      	success: function(image,details) {
      		postPic(image);
      	},
      	error: function(e) {
      		notify(e.message);
      	},
      	cancel: function() {
      		//no op
      	},
      	allowImageEditing:true
      });
  	});

  	//Use the camera to take and post a picture
  	$("#take").click(function() {
  		Titanium.Media.showCamera({
      	success: function(image,details) {
      		postPic(image);
      	},
      	error: function(e) {
      		notify(e.message);
      	},
      	cancel: function() {
      		//no op
      	},
      	allowImageEditing:true
      });
  	});

  	//Wire up buttons to save/recall
    $("#store").click(function() {
      storeLogin();
    });
    $("#recall").click(function() {
      recallLogin();
    });

    //recall any saved login information and show UI
    recallLogin();
  	
  } catch(e) {
    Titanium.API.debug(e);
  }
});