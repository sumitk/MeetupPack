# Presenter Notes

The following are some notes that you can use as a companion for the presentation slides
included with the Meetup Pack.  These notes will go slide by slide and point out any talking
points that are not included along with the bullets for the slide its self.

### 1: Title Slide

Obviously, you will want to edit the title slide to contain your name and contact information.
If you have a website, blog, and/or Twitter account, make sure to include that information so
that people will be able to find and refer to you later.

### 2: Road Map

On this slide, explain the agenda of the presentation.  You can modify this to suit the format
of the talk you are giving and freestyle as needed.

### 3: Refer to this Meetup Pack

We would also ask that you encourage your attendees to check out these presentation materials
and give this talk at their company or another user group.  This will help us spread the good
word that is the open source goodness of Titanium!

### 4: What is Titanium?

Titanium is an SDK and a set of tools for developing Desktop and Mobile applications.  Your presentation
of course will be focused on mobile, but you can use Titanium and the Titanium Developer tool to create
Windows, Mac, and Linux desktop apps as well.  Stress the open source goodness!

### 5: Why Titanium?

The value of Titanium is that you can create desktop and mobile apps using the technologies web
developers are already familiar with (HTML, CSS, and JavaScript).  People with these basic skills
are a dime a dozen, and now you can use those skills on a wide variety of new platforms, including
iPhone and Android.  Also, web developers can escape the browser and use native device capabilities
not available to them before.

### 6: Architecture

Follow the diagram to learn more about how an app comes together.  Mobile apps are compiled down
to native binaries, so no source files are served from the internet (although you can still contact
remote services).

### 7: Media APIs

We have sound and video interfaces that integrate with the device's video player.

### 8: More Media APIs

We can also integrate with camera and photo gallery.

### 9: Geo

JavaScript apps can get geolocation data for position-aware apps - example shown is Yelpr,
a Titanium Mobile app that uses Geo and Yelp.com web services to find business reviews near a
user's location.

### 10: Accelerometer

Use device gestures as UI - the example shown is "PhoneSaber", which plays lightsaber sound effects
when the phone is swung.  This is a native iPhone app.

### 11: DB and Filesystem

We have a filesystem (read write open) API, as well as a synchronous and asynchronous DB API.  Developers
can choose either the HTML 5 client side storage spec or use Titanium's own synchronous database API.

### 12: Network

Titanium has a XMLHTTPRequest type object that is used to make remote service calls.  The browser's native
XHR object will not work due to implementation details of the Titanium Mobile SDK.