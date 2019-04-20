// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.title-cube'
})
.setClassToggle('.title-cube', 'show')
.addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    colorStart: 'pink',
    colorEnd: 'black'
})
.addTo(controller); // assign the scene to the controller

var boxStack = new ScrollMagic.Scene({
    triggerElement: '#smallSquare'
  })
  .setClassToggle('.start', 'end')
  .addTo(controller); // assign the scene to the controller
  

	// define images
	var images = [
		"svg/house_01.svg",
		"svg/house_02.svg",
		"svg/house_03.svg",
		"svg/house_04.svg",
		"svg/house_05.svg",
		"svg/house_06.svg",
		"svg/house_07.svg",
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 1,									// repeat 1 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2100})
					.setTween(tween)
					.addIndicators({
						name: 'img sequenece',
						colorTrigger: 'black',
						colorStart: 'pink',
						colorEnd: 'black'
					}) // add indicators (requires plugin)
					.addTo(controller);











