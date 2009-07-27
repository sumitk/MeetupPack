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

### 13-16: Native UI

Titanium exposes a number of native UI components, such as table views, tabs, text fields, and more.  To
get an idea of what is available, check out [the Kitchen Sink example](http://github.com/kwhinnery/KitchenSink).
You may or may not want to actually demo the Kitchen Sink in your presentation - it's actually a good tool
for getting a feel for what is possible using Mobile SDK components.  As pointed out on slide 16, the API
for creating components is, where possible, uniform across platforms.

### 17: More APIs

Some additional APIs are listed on this slide.  Point out that the team consistently releases more APIs
to expose a larger number of device capabilities, and that while the process is not yet well documented,
the mobile SDK is built on an extensible architecture that can be augmented by anyone to add additional
native functionality to the mobile SDK.

### 18: More Examples

The resources linked on this slide point out the examples on our doc site.  These are points for further
exploration for attendees.

### 19: Titanium Developer

On this slide, you will explore the capabilities of the Titanium Developer (capital "D" Developer for short), 
which is the app you download from appcelerator.com.  This app requires that you log in the Developer Network 
(or sign up for an account).  To create mobile apps, you will need Beta access, as described in `/notes/Setup.md`.  
Point out that Developer is its self an open source Titanium Desktop application.

Developer helps app devs deploy to simulator, device, and package for distribution.  

### 20: Hello World

At this point, attendees should fire up Developer and create their first mobile project (or at least follow the
presenter through the process).  Go over the code structure of the newly generated project.  Areas of interest
include:

- `/build` -- Build artifacts generated from Developer.  DON'T TOUCH unless you know what you are doing.
- `/Resources` -- The logical webroot of the application, where all assets, HTML, CSS, and JS source goes.
- `/Resources/iphone` -- Any assets in this directory will be deployed over the top of anything in /Resources on iPhone
- `/Resources/android` -- Same as above - this is for Android-specific assets. 
- `/tiapp.xml` -- Your app's configuration file.  Default windows, tabs, and app options.

### 21: Resources

This is a compendium of resources new devs should have at their disposal - we respond ASAP to support issues,
and hang out on IRC most of the day.  The people to ping are:

- Kevin Whinnery - `kwhinnery` - Titanium and Entourage developer and scribe
- Marshall Culpepper - `marshall_law` - Titanium Desktop Lead
- Don Thorp - `donthorp` - Mobile project lead (Android)
- Blain Hamon - `blainH` - Mac OS X and iPhone Guru
- Nolan Wright - `nwright` - CTO/Tech Lead for Appcelerator
- Jeff Haynie - `jhaynie` - CEO/Head Honcho

### 22: Mobile Lab

Requires all folks have beta access (or at least presenter, so the group can follow along).  Slide describes objective
and APIs used.  Highlight that no 3rd party JS library is required to run Titanium, though jQuery is currently
used for convenience in this example.

### 23: Bootstrapping

Anyone attempting this demo will need to have the Titanium Developer installed, plus any mobile SDK they plan on
targeting.  Android developers will need the 1.5 SDK installed, and iPhone developers (on Mac) will need the 3.0 or
3.1 beta SDK installed.  This demo was coded to the 0.4.0 version of the Titanium Mobile APIs.  It should work on
any version, but your mileage may vary.  The 0.4.0 SDK version is located in the `/code` directory along with the sample.

### 24 - 35: Code by numbers

These slides will take you step by step through the development process, highlighting pieces of the API for making remote
service calls, storing properties, and more.  The code for these samples is hosted on gist.github.com - if you're going
to be offline, you may want to stash these snippets away before presenting.  At some point I might bring them into the
documentation also.  Proceed through numbered examples, pasting in the code from the corresponding number.  The sample
application code will be stubbed out, and will reference a number in a comment that should be replaced with the actual 
code contained in the Gist.

## Conclusion

If you're doing a 3 hour session, you would encourage your attendees at this point to experiment on their own
with whatever apps they plan on creating.  This will allow them to get comfortable with the SDK and the doc/support
resources available so that they can independently continue developing Titanium applications.	