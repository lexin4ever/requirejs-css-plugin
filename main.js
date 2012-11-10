requirejs(['css!style.css','css!more.css','c'],function(css1,css2,c){
	c.say('Hello this is a test for using requirejs to load css files.');
	console.log(css1+','+css2);
});
