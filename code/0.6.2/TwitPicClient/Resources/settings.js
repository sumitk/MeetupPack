window.onload = function() {
	//Initialize twitter username and password from system properties
	var u = Titanium.App.Properties.getString('username');
  var p = Titanium.App.Properties.getString('password');
  if (u !== '') {
    document.getElementById('username').value = u;
  }
  if (p !== '') {
    document.getElementById('password').value = p;
  }
  
  //Capture any username and password data when the fields change
  document.getElementById('username').onchange = function() {
    Titanium.App.Properties.setString('username', this.value);
  };
  document.getElementById('password').onchange = function() {
    Titanium.App.Properties.setString('password', this.value);
  };
};