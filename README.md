todoMVC [![Build Status](https://travis-ci.org/turn/todoMVC.svg?branch=master)](https://travis-ci.org/turn/todoMVC) [![Coverage Status](https://img.shields.io/coveralls/turn/todoMVC.svg)](https://coveralls.io/r/turn/todoMVC)
=======


### usage

**html**

```html
...
<link rel="stylesheet" href="todoMVC.css">

</head>
<body>

<div ng-controller="fooCtrl">
	<!-- ... -->
</div>
...
<script src="todoMVC.js"></script>
```

**js**

```js
angular
.module('foo', ['turn/todomvc'])
.controller('fooCtrl', function ($scope) {
	
	// ...

});
```

### run the demo

```shell
bower install
npm install
grunt
```

then pop open index.html in a browser.

### run the tests

```
bower install
npm install
grunt test
```

### hack on it

```
bower install
npm install
grunt watch
```

### license

Apache2