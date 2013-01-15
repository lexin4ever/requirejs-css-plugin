# a requirejs plugin to load or embed css files
## take the best of both methods

before optimization, the method is to load the css file by a `link` element.

during optimization, the optimizer writes the content of css files into modules.

after optimization, the modules inject styles into the HTML doc by a `style` element.

## Usage
you'll need two files,
```
css.js			//before optimization
css-build.js	//for optimization
```
load css files by the requirejs plugin syntax
```
requirejs(['css!style.css','css!more.css','othermodules'],function(css1,css2,c){
	//css loaded, but I cannot be sure that they are already parsed by browser.
});
```
perform optimization by
```
node r.js -o build.js
```

## Example
This repository is a perfect usage example.

## Notes
There is a more powerful library having same intention as this one. If you need more power, try [guybedford/require-css](http://github.com/guybedford/require-css).

## License
Copyright (c) 2012 Chris Tsang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
