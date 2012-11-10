
/**	`css-built` is a version of the `css` plugin to be used after optimization.
	before optimization, the method is to load the css file by a `link` element.
	after optimization, since the content of the css file is already embedded
	into the built file into a module, the method is to inject the styles
	into the HTML doc by a `style` element.
 */

define('css',[],function() {
	var loaded=false;

	return {
		load: function (name, require, load, config) {
			if( !loaded)
			{
				loaded=true;
				embed_css = function (content)
				{
					var head = document.getElementsByTagName('head')[0],
						style = document.createElement('style'),
						rules = document.createTextNode(content);

					style.type = 'text/css';
					if(style.styleSheet)
						style.styleSheet.cssText = rules.nodeValue;
					else style.appendChild(rules);
					head.appendChild(style);
				}
				require(['cssout'], function(data){
					embed_css(data.content);
					load(true);
				});
			}
			else
				load(false);
		},
		pluginBuilder: './css-build'
	}
});

define("cssout", { content:
".bi {  font-weight: bold;  font-style: italic; } #tag {  border: 1px solid black; } "});

define('a',{
	call: function(X)
	{
		document.getElementById('tag').innerHTML=X;
	}
});

define('b',['a'],function(a){
	return {
		call: function(X)
		{
			a.call(X);
		}
	}
});

define('c',['b'],function(b){
	return {
		say: function(X)
		{
			b.call(X);
		}
	}
});

requirejs(['css!style.css','css!more.css','c'],function(css1,css2,c){
	c.say('Hello this is a test for using requirejs to load css files.');
	console.log(css1+','+css2);
});

define("main", function(){});
