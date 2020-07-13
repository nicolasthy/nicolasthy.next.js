module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4K3U");


/***/ }),

/***/ "4K3U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_posts_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jy8j");
/* harmony import */ var _data_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qMHi");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Posts = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_posts_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_1__[/* PostsList */ "a"], {
    posts: props.posts
  }));
};

Posts.getInitialProps = async function () {
  const posts = Object(_data_Posts__WEBPACK_IMPORTED_MODULE_2__[/* getPosts */ "b"])();
  return {
    posts
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AtI2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FONTS; });
const COLORS = {
  primary: "#9B5DE5",
  secondary: "#CFF7B9",
  light: "#F7F7FF",
  dark: "#191716"
};
const FONTS = {
  sansSerif: '"Poppins", sans-serif',
  serif: '"Lora", serif'
};

/***/ }),

/***/ "CyYL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Hello World 3\"\nauthor: Nicolas Thiry\ncreated_at: 2020-01-08 21:00:00 Z\ntags: [\"ruby\"]\n---\n\nEarlier this year, the concentration of carbon dioxide in the atmosphere reached 400 parts per million (ppm). The last time there was that much CO2 in our atmosphere was three million years ago, when sea levels were 24 meters higher than they are today. Now sea levels are rising again. Last September, Arctic sea ice covered the smallest area ever recorded. All but one of the ten warmest years since 1880, when global records began to be kept, have occurred in the twenty-first century.\n\nSome climate scientists believe that 400 ppm of CO2 in the atmosphere is already enough to take us past the tipping point at which we risk a climate catastrophe that will turn billions of people into refugees. They say that we need to get the amount of atmospheric CO2 back down to 350 ppm. That figure lies behind the name taken by 350.org, a grassroots movement with volunteers in 188 countries trying to solve the problem of climate change.\n\nOther climate scientists are more optimistic: they argue that if we allow atmospheric CO2 to rise to 450 ppm, a level associated with a two-degree Celsius temperature rise, we have a 66.6% chance of avoiding catastrophe. That still leaves a one-in-three chance of catastrophe – worse odds than playing Russian roulette. And we are forecast to surpass 450 ppm by 2038.\n\nOne thing is clear: if we are not to be totally reckless with our planet’s climate, we cannot burn all the coal, oil, and natural gas that we have already located. About 80% of it – especially the coal, which emits the most CO2 when burned – will have to stay in the ground.\n\nIn June, US President Barack Obama told students at Georgetown University that he refused to condemn them and their children and grandchildren to “a planet that’s beyond fixing.” Saying that climate change cannot wait for Congress to overcome its “partisan gridlock,” he announced measures using his executive power to limit CO2 emissions, first from new fossil-fuel power plants, and then from existing ones.\n\nObama also called for an end to public financing of new coal plants overseas, unless they deploy carbon-capture technologies (which are not yet economically viable), or else there is, he said, “no other viable way for the poorest countries to generate electricity.”\n\nAccording to Daniel Schrag, Director of Harvard University’s Center for the Environment and a member of a presidential science panel that has helped to advise Obama on climate change, “Politically, the White House is hesitant to say they’re having a war on coal. On the other hand, a war on coal is exactly what’s needed.”\n\nSchrag is right. His university, like mine and many others, has a plan to reduce its greenhouse-gas emissions. Yet most of them, including Schrag’s and mine, continue to invest part of their multi-billion-dollar endowments in companies that extract and sell coal.\n\nBut pressure on educational institutions to stop investing in fossil fuels is beginning to build. Student groups have formed on many campuses, and a handful of colleges and universities have already pledged to end their investment in fossil fuels. Several US cities, including San Francisco and Seattle, have agreed to do the same.\n\nNow financial institutions, too, are coming under fire for their involvement with fossil fuels. In June, I was part of a group of prominent Australians who signed an open letter to the heads of the country’s biggest banks asking them to stop lending to new fossil-fuel extraction projects, and to sell their stakes in companies engaged in such activities.\n\nSpeaking at Harvard earlier this year, former US Vice President Al Gore praised a student group that was pushing the university to sell its investments in fossil-fuel companies, and compared their activities to the divestment campaign in the 1980’s that helped to end South Africa’s racist apartheid policy.\n\nHow fair is that comparison? The dividing lines may be less sharp than they were with apartheid, but our continued high level of greenhouse-gas emissions protects the interests of one group of humans – mainly affluent people who are alive today – at the cost of others. (Compared to most of the world’s population, even the American and Australian coal miners who would lose their jobs if the industry shut down are affluent.) Our behavior disregards most of the world’s poor, and everyone who will live on this planet in centuries to come.\n\nWorldwide, the poor leave a very small carbon footprint, but they will suffer the most from climate change. Many live in hot places that are getting even hotter, and hundreds of millions of them are subsistence farmers who depend on rainfall to grow their crops. Rainfall patterns will vary, and the Asian monsoon will become less reliable. Those who live on this planet in future centuries will live in a hotter world, with higher sea levels, less arable land, and more extreme hurricanes, droughts, and floods.\n\nIn these circumstances, to develop new coal projects is unethical, and to invest in them is to be complicit in this unethical activity. While this applies, to some extent, to all fossil fuels, the best way to begin to change our behavior is by reducing coal consumption. Replacing coal with natural gas does reduce greenhouse-gas emissions, even if natural gas itself is not sustainable in the long term. Right now, ending investment in the coal industry is the right thing to do.\n");

/***/ }),

/***/ "EFP3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Hello World 4\"\nauthor: Nicolas Thiry\ncreated_at: 2020-01-08 22:00:00 Z\ntags: [\"html\"]\n---\nEarlier this year, the concentration of carbon dioxide in the atmosphere reached 400 parts per million (ppm). The last time there was that much CO2 in our atmosphere was three million years ago, when sea levels were 24 meters higher than they are today. Now sea levels are rising again. Last September, Arctic sea ice covered the smallest area ever recorded. All but one of the ten warmest years since 1880, when global records began to be kept, have occurred in the twenty-first century.\n\nSome climate scientists believe that 400 ppm of CO2 in the atmosphere is already enough to take us past the tipping point at which we risk a climate catastrophe that will turn billions of people into refugees. They say that we need to get the amount of atmospheric CO2 back down to 350 ppm. That figure lies behind the name taken by 350.org, a grassroots movement with volunteers in 188 countries trying to solve the problem of climate change.\n\nOther climate scientists are more optimistic: they argue that if we allow atmospheric CO2 to rise to 450 ppm, a level associated with a two-degree Celsius temperature rise, we have a 66.6% chance of avoiding catastrophe. That still leaves a one-in-three chance of catastrophe – worse odds than playing Russian roulette. And we are forecast to surpass 450 ppm by 2038.\n\nOne thing is clear: if we are not to be totally reckless with our planet’s climate, we cannot burn all the coal, oil, and natural gas that we have already located. About 80% of it – especially the coal, which emits the most CO2 when burned – will have to stay in the ground.\n\nIn June, US President Barack Obama told students at Georgetown University that he refused to condemn them and their children and grandchildren to “a planet that’s beyond fixing.” Saying that climate change cannot wait for Congress to overcome its “partisan gridlock,” he announced measures using his executive power to limit CO2 emissions, first from new fossil-fuel power plants, and then from existing ones.\n\nObama also called for an end to public financing of new coal plants overseas, unless they deploy carbon-capture technologies (which are not yet economically viable), or else there is, he said, “no other viable way for the poorest countries to generate electricity.”\n\nAccording to Daniel Schrag, Director of Harvard University’s Center for the Environment and a member of a presidential science panel that has helped to advise Obama on climate change, “Politically, the White House is hesitant to say they’re having a war on coal. On the other hand, a war on coal is exactly what’s needed.”\n\nSchrag is right. His university, like mine and many others, has a plan to reduce its greenhouse-gas emissions. Yet most of them, including Schrag’s and mine, continue to invest part of their multi-billion-dollar endowments in companies that extract and sell coal.\n\nBut pressure on educational institutions to stop investing in fossil fuels is beginning to build. Student groups have formed on many campuses, and a handful of colleges and universities have already pledged to end their investment in fossil fuels. Several US cities, including San Francisco and Seattle, have agreed to do the same.\n\nNow financial institutions, too, are coming under fire for their involvement with fossil fuels. In June, I was part of a group of prominent Australians who signed an open letter to the heads of the country’s biggest banks asking them to stop lending to new fossil-fuel extraction projects, and to sell their stakes in companies engaged in such activities.\n\nSpeaking at Harvard earlier this year, former US Vice President Al Gore praised a student group that was pushing the university to sell its investments in fossil-fuel companies, and compared their activities to the divestment campaign in the 1980’s that helped to end South Africa’s racist apartheid policy.\n\nHow fair is that comparison? The dividing lines may be less sharp than they were with apartheid, but our continued high level of greenhouse-gas emissions protects the interests of one group of humans – mainly affluent people who are alive today – at the cost of others. (Compared to most of the world’s population, even the American and Australian coal miners who would lose their jobs if the industry shut down are affluent.) Our behavior disregards most of the world’s poor, and everyone who will live on this planet in centuries to come.\n\nWorldwide, the poor leave a very small carbon footprint, but they will suffer the most from climate change. Many live in hot places that are getting even hotter, and hundreds of millions of them are subsistence farmers who depend on rainfall to grow their crops. Rainfall patterns will vary, and the Asian monsoon will become less reliable. Those who live on this planet in future centuries will live in a hotter world, with higher sea levels, less arable land, and more extreme hurricanes, droughts, and floods.\n\nIn these circumstances, to develop new coal projects is unethical, and to invest in them is to be complicit in this unethical activity. While this applies, to some extent, to all fossil fuels, the best way to begin to change our behavior is by reducing coal consumption. Replacing coal with natural gas does reduce greenhouse-gas emissions, even if natural gas itself is not sustainable in the long term. Right now, ending investment in the coal industry is the right thing to do.");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HPG3":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2020-01-08-hello-world-2.md": "cEFT",
	"./2020-01-08-hello-world-3.md": "CyYL",
	"./2020-01-08-hello-world-4.md": "EFP3",
	"./2020-01-08-hello-world-5.md": "c2DG",
	"./2020-01-08-hello-world.md": "m57l"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "HPG3";

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c2DG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Hello World 5\"\nauthor: Nicolas Thiry\ncreated_at: 2020-01-08 23:00:00 Z\ntags: [\"javascript\"]\n---\n\nEarlier this year, the concentration of `carbon dioxide` in the atmosphere reached 400 parts per million (ppm). The last time there was that much CO2 in our atmosphere was three million years ago, when sea levels were 24 meters higher than they are today. Now sea levels are rising again. Last September, Arctic sea ice covered the smallest area ever recorded. All but one of the ten warmest years since 1880, when global records began to be kept, have occurred in the twenty-first century.\n\n## Landscape Images\n\n![Pigalle Basketball court](../static/basket-court-pigalle-studio-architecture-public-leisure-paris-france-_dezeen_hero-b.jpg)\n\nSome climate scientists believe that 400 ppm of CO2 in the atmosphere is already enough to take us past the tipping point at which we risk a climate catastrophe that will turn billions of people into refugees.\n\n![Pigalle Basketball player](../static/nicolas-steave-OA3n9Azqt7I-unsplash.jpg)\n\nSome climate scientists believe that 400 ppm of CO2 in the atmosphere is already enough to take us past the tipping point at which we risk a climate catastrophe that will turn billions of people into refugees. They say that we need to get the amount of atmospheric CO2 back down to 350 ppm. That figure lies behind the name taken by 350.org, a grassroots movement with volunteers in 188 countries trying to solve the problem of climate change.\n\n## Javascript Code Highlight\nThis is an example of Javascript code highlighting\n\n```JavaScript{1,4}\nimport { Prism as SyntaxHighlighter } from \"react-syntax-highlighter\";\nimport { okaidia } from \"react-syntax-highlighter/dist/cjs/styles/prism\";\n\nconst SyntaxHighlight = props => {\n    console.log(props);\n    const { value, language = null } = props;\n    return (\n        <SyntaxHighlighter language={language} style={okaidia}>\n            {value}\n        </SyntaxHighlighter>\n    );\n};\n\nexport default SyntaxHighlight;\n```\n\n## HTML Code Highlight\nThis is an example of HTML code highlighting\n\n```HTML{2}\n<span class=\"status\">\n    <svg class=\"status-success-icon iOutputs_checkSmall\" ng-show=\"item.Correction === 1\" >\n        <use xlink:href=\"#Outputs_checkSmall\"></use>\n    </svg>\n    <svg class=\"status-error-icon iOutputs_cross\" ng-show=\"item.Correction !== 1\" >\n        <use xlink:href=\"#Outputs_cross\"></use>\n    </svg>\n</span>\n```\n\n## Ruby Code Highlight\nThis is an example of Ruby code highlighting\n\n```Ruby{2}\nFile.open(\"ordinal\").grep /d$/ do |line|\n  print line\nend\n```\n\nOther climate scientists are more optimistic: they argue that if we allow atmospheric CO2 to rise to 450 ppm, a level associated with a two-degree Celsius temperature rise, we have a 66.6% chance of avoiding catastrophe. That still leaves a one-in-three chance of catastrophe – worse odds than playing Russian roulette. And we are forecast to surpass 450 ppm by 2038.\n\nOne thing is clear: if we are not to be totally reckless with our planet’s climate, we cannot burn all the coal, oil, and natural gas that we have already located. About 80% of it – especially the coal, which emits the most CO2 when burned – will have to stay in the ground.\n\nIn June, US President Barack Obama told students at Georgetown University that he refused to condemn them and their children and grandchildren to “a planet that’s beyond fixing.” Saying that climate change cannot wait for Congress to overcome its “partisan gridlock,” he announced measures using his executive power to limit CO2 emissions, first from new fossil-fuel power plants, and then from existing ones.\n\nObama also called for an end to public financing of new coal plants overseas, unless they deploy carbon-capture technologies (which are not yet economically viable), or else there is, he said, “no other viable way for the poorest countries to generate electricity.”\n\nAccording to Daniel Schrag, Director of Harvard University’s Center for the Environment and a member of a presidential science panel that has helped to advise Obama on climate change, “Politically, the White House is hesitant to say they’re having a war on coal. On the other hand, a war on coal is exactly what’s needed.”\n\nSchrag is right. His university, like mine and many others, has a plan to reduce its greenhouse-gas emissions. Yet most of them, including Schrag’s and mine, continue to invest part of their multi-billion-dollar endowments in companies that extract and sell coal.\n\nBut pressure on educational institutions to stop investing in fossil fuels is beginning to build. Student groups have formed on many campuses, and a handful of colleges and universities have already pledged to end their investment in fossil fuels. Several US cities, including San Francisco and Seattle, have agreed to do the same.\n\nNow financial institutions, too, are coming under fire for their involvement with fossil fuels. In June, I was part of a group of prominent Australians who signed an open letter to the heads of the country’s biggest banks asking them to stop lending to new fossil-fuel extraction projects, and to sell their stakes in companies engaged in such activities.\n\nSpeaking at Harvard earlier this year, former US Vice President Al Gore praised a student group that was pushing the university to sell its investments in fossil-fuel companies, and compared their activities to the divestment campaign in the 1980’s that helped to end South Africa’s racist apartheid policy.\n\nHow fair is that comparison? The dividing lines may be less sharp than they were with apartheid, but our continued high level of greenhouse-gas emissions protects the interests of one group of humans – mainly affluent people who are alive today – at the cost of others. (Compared to most of the world’s population, even the American and Australian coal miners who would lose their jobs if the industry shut down are affluent.) Our behavior disregards most of the world’s poor, and everyone who will live on this planet in centuries to come.\n\nWorldwide, the poor leave a very small carbon footprint, but they will suffer the most from climate change. Many live in hot places that are getting even hotter, and hundreds of millions of them are subsistence farmers who depend on rainfall to grow their crops. Rainfall patterns will vary, and the Asian monsoon will become less reliable. Those who live on this planet in future centuries will live in a hotter world, with higher sea levels, less arable land, and more extreme hurricanes, droughts, and floods.\n\nIn these circumstances, to develop new coal projects is unethical, and to invest in them is to be complicit in this unethical activity. While this applies, to some extent, to all fossil fuels, the best way to begin to change our behavior is by reducing coal consumption. Replacing coal with natural gas does reduce greenhouse-gas emissions, even if natural gas itself is not sustainable in the long term. Right now, ending investment in the coal industry is the right thing to do.\n");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cEFT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Hello World 2\"\nauthor: Nicolas Thiry\ncreated_at: 2020-01-08 20:00:00 Z\n---\nEarlier this year, the concentration of carbon dioxide in the atmosphere reached 400 parts per million (ppm). The last time there was that much CO2 in our atmosphere was three million years ago, when sea levels were 24 meters higher than they are today. Now sea levels are rising again. Last September, Arctic sea ice covered the smallest area ever recorded. All but one of the ten warmest years since 1880, when global records began to be kept, have occurred in the twenty-first century.\n\nSome climate scientists believe that 400 ppm of CO2 in the atmosphere is already enough to take us past the tipping point at which we risk a climate catastrophe that will turn billions of people into refugees. They say that we need to get the amount of atmospheric CO2 back down to 350 ppm. That figure lies behind the name taken by 350.org, a grassroots movement with volunteers in 188 countries trying to solve the problem of climate change.\n\nOther climate scientists are more optimistic: they argue that if we allow atmospheric CO2 to rise to 450 ppm, a level associated with a two-degree Celsius temperature rise, we have a 66.6% chance of avoiding catastrophe. That still leaves a one-in-three chance of catastrophe – worse odds than playing Russian roulette. And we are forecast to surpass 450 ppm by 2038.\n\nOne thing is clear: if we are not to be totally reckless with our planet’s climate, we cannot burn all the coal, oil, and natural gas that we have already located. About 80% of it – especially the coal, which emits the most CO2 when burned – will have to stay in the ground.\n\nIn June, US President Barack Obama told students at Georgetown University that he refused to condemn them and their children and grandchildren to “a planet that’s beyond fixing.” Saying that climate change cannot wait for Congress to overcome its “partisan gridlock,” he announced measures using his executive power to limit CO2 emissions, first from new fossil-fuel power plants, and then from existing ones.\n\nObama also called for an end to public financing of new coal plants overseas, unless they deploy carbon-capture technologies (which are not yet economically viable), or else there is, he said, “no other viable way for the poorest countries to generate electricity.”\n\nAccording to Daniel Schrag, Director of Harvard University’s Center for the Environment and a member of a presidential science panel that has helped to advise Obama on climate change, “Politically, the White House is hesitant to say they’re having a war on coal. On the other hand, a war on coal is exactly what’s needed.”\n\nSchrag is right. His university, like mine and many others, has a plan to reduce its greenhouse-gas emissions. Yet most of them, including Schrag’s and mine, continue to invest part of their multi-billion-dollar endowments in companies that extract and sell coal.\n\nBut pressure on educational institutions to stop investing in fossil fuels is beginning to build. Student groups have formed on many campuses, and a handful of colleges and universities have already pledged to end their investment in fossil fuels. Several US cities, including San Francisco and Seattle, have agreed to do the same.\n\nNow financial institutions, too, are coming under fire for their involvement with fossil fuels. In June, I was part of a group of prominent Australians who signed an open letter to the heads of the country’s biggest banks asking them to stop lending to new fossil-fuel extraction projects, and to sell their stakes in companies engaged in such activities.\n\nSpeaking at Harvard earlier this year, former US Vice President Al Gore praised a student group that was pushing the university to sell its investments in fossil-fuel companies, and compared their activities to the divestment campaign in the 1980’s that helped to end South Africa’s racist apartheid policy.\n\nHow fair is that comparison? The dividing lines may be less sharp than they were with apartheid, but our continued high level of greenhouse-gas emissions protects the interests of one group of humans – mainly affluent people who are alive today – at the cost of others. (Compared to most of the world’s population, even the American and Australian coal miners who would lose their jobs if the industry shut down are affluent.) Our behavior disregards most of the world’s poor, and everyone who will live on this planet in centuries to come.\n\nWorldwide, the poor leave a very small carbon footprint, but they will suffer the most from climate change. Many live in hot places that are getting even hotter, and hundreds of millions of them are subsistence farmers who depend on rainfall to grow their crops. Rainfall patterns will vary, and the Asian monsoon will become less reliable. Those who live on this planet in future centuries will live in a hotter world, with higher sea levels, less arable land, and more extreme hurricanes, droughts, and floods.\n\nIn these circumstances, to develop new coal projects is unethical, and to invest in them is to be complicit in this unethical activity. While this applies, to some extent, to all fossil fuels, the best way to begin to change our behavior is by reducing coal consumption. Replacing coal with natural gas does reduce greenhouse-gas emissions, even if natural gas itself is not sustainable in the long term. Right now, ending investment in the coal industry is the right thing to do.");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__("UXZV");

var _Promise = __webpack_require__("eVuF");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  true && (_cachedData = this.sdc[pathname]) ? _Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (false) {}

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jy8j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__("rpFx");

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: ./src/themes/constants.js
var constants = __webpack_require__("AtI2");

// CONCATENATED MODULE: ./src/components/posts/PostsList/styles/index.js


const languageHighlightColors = {
  html: {
    background: "rgba(1, 55, 162, 1)",
    border: "rgba(1, 55, 162, 1)"
  },
  css: {
    background: "rgba(1, 55, 162, 1)",
    border: "rgba(1, 55, 162, 1)"
  },
  javascript: {
    background: "rgba(248, 179, 25, 1)",
    border: "rgba(248, 179, 25, 1)"
  },
  ruby: {
    background: "rgba(255, 49, 91, 1)",
    border: "rgba(255, 49, 91, 1)"
  }
};
const Container = styled_default.a.ul`
  list-style: none;
  padding: 0;
  cursor: pointer;

  > li {
    background: ${({
  theme
}) => theme.posts.item};
    box-shadow: ${({
  theme
}) => theme.posts.itemShadow};
    border-radius: 25px;
    margin: 20px 0;
    padding: 25px 25px;
    transition: background 0.2s linear, box-shadow 0.2s linear;

    &:hover {
      background: ${({
  theme
}) => theme.posts.itemHover};
      box-shadow: ${({
  theme
}) => theme.posts.itemHoverShadow};
    }

    h3 {
      margin: 0;
      color: ${({
  theme
}) => theme.posts.itemTitleColor};
      font-weight: 500;
    }

    p {
      &:first-of-type {
        margin: 0 0 5px;
        opacity: 0.7;
      }

      color: ${({
  theme
}) => theme.textLight};
      margin: 0;
    }
  }
`;
const TagsList = styled_default.a.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
`;
const TagsItem = styled_default.a.li`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 20px;
  font-family: ${constants["b" /* FONTS */].sansSerif};
  background: ${({
  tag
}) => languageHighlightColors[tag].background};
  border-radius: 50px;
  color: #f7f7ff;
`;
// CONCATENATED MODULE: ./src/components/posts/PostsList/PostsList.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsList; });

var __jsx = external_react_default.a.createElement;




const PostsList = ({
  posts
}) => {
  const theme = Object(external_emotion_theming_["useTheme"])();

  const renderPosts = () => {
    console.log(posts);
    return posts.map(post => {
      return __jsx(external_react_default.a.Fragment, {
        key: post.slug
      }, __jsx(link_default.a, {
        href: "/posts/[slug]",
        as: `/posts/${post.slug}`
      }, __jsx("li", null, __jsx("h3", null, post.data.title), __jsx("p", null, __jsx("time", null, new Date(post.data.created_at).toLocaleDateString("en", {
        month: "long",
        day: "numeric"
      })), __jsx("small", null, " - "), __jsx("span", null, post.readingTime, " min read ", __jsx("small", null, "\u2615\uFE0F"))), __jsx("p", null, post.excerpt), __jsx(TagsList, null, post.data.tags && post.data.tags.map((tag, index) => __jsx(TagsItem, {
        key: index,
        tag: tag
      }, tag))))));
    });
  };

  return __jsx(Container, {
    theme: theme
  }, renderPosts());
};



/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "m57l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Hello World\"\nauthor: Nicolas Thiry\ncreated_at: 2020-01-08 15:00:00 Z\n---\nThundercats four dollar toast beard, everyday carry flexitarian squid kinfolk shabby chic. Fixie pitchfork master cleanse waistcoat heirloom gochujang. Ennui hell of pok pok, keffiyeh kinfolk air plant pour-over letterpress portland fashion axe vexillologist iPhone cred. Selvage lomo normcore bespoke gentrify banjo. Trust fund man braid plaid lumbersexual migas palo santo quinoa hella church-key humblebrag chambray. IPhone cliche chartreuse, shoreditch prism biodiesel vice. Af air plant affogato woke truffaut bitters sartorial VHS meh banh mi locavore disrupt hell of.\n\nNarwhal pinterest banjo mlkshk helvetica pour-over butcher yuccie swag marfa. Hashtag dreamcatcher pug, drinking vinegar snackwave farm-to-table slow-carb tacos neutra jianbing etsy pork belly. Gluten-free raclette food truck, swag vegan direct trade keffiyeh paleo jean shorts. Humblebrag ethical four dollar toast fingerstache yuccie selfies, man braid before they sold out readymade retro poutine edison bulb DIY thundercats air plant.\n\nAffogato brooklyn sartorial, jianbing fingerstache leggings wolf chicharrones plaid forage adaptogen roof party. Tilde lyft gluten-free sriracha lo-fi fixie schlitz hot chicken. Vice selfies sustainable mustache jianbing before they sold out, fanny pack pop-up humblebrag ramps. Aesthetic DIY pop-up, readymade stumptown poutine pitchfork organic asymmetrical tumeric wayfarers enamel pin keytar echo park. Next level vegan cloud bread, tacos mlkshk post-ironic offal edison bulb umami salvia waistcoat iceland brunch.\n\nPitchfork vice whatever jianbing coloring book, church-key tousled chambray try-hard locavore direct trade banh mi woke air plant. Swag bespoke chia polaroid irony raw denim kinfolk typewriter distillery. Pok pok heirloom activated charcoal dreamcatcher. Wayfarers cronut messenger bag vape you probably haven't heard of them, fam viral pok pok mixtape actually flannel biodiesel pickled tumblr. Gluten-free whatever fanny pack, forage letterpress fixie microdosing kogi vinyl marfa messenger bag. Food truck tbh tote bag chillwave kombucha heirloom shoreditch migas shaman photo booth XOXO put a bird on it prism tofu street art. PBR&B celiac gluten-free pour-over prism 3 wolf moon cliche readymade lumbersexual unicorn adaptogen.\n\nPok pok retro lomo adaptogen pork belly skateboard. Kinfolk hoodie health goth freegan. Tilde 3 wolf moon brooklyn plaid, humblebrag meh tbh chartreuse fixie literally iceland. Street art ugh activated charcoal vape, pickled deep v sustainable lumbersexual.\n\nOh. You need a little dummy text for your mockup? How quaint.\n\nI bet you’re still using Bootstrap too…");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qMHi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__("uo/4");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);

// CONCATENATED MODULE: ./src/helpers/PostsHelper.js


function getExcerpt(file, options) {
  file.excerpt = file.content.substr(0, file.content.lastIndexOf(" ", options.excerptLimit)) + "...";
}

function readingTime(text = "") {
  return Math.ceil(text.split(/s/g).length / 200);
}

function processMarkdown(value) {
  return external_gray_matter_default()(value.default, {
    excerpt: getExcerpt,
    excerptLimit: 150
  });
}


// CONCATENATED MODULE: ./src/data/Posts.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPostBySlug; });








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



function getPosts(count = null) {
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").split(".").slice(0, -1).join(".");
      const value = values[index];
      const post = processMarkdown(value);
      return _objectSpread({}, post, {
        readingTime: readingTime(post.content),
        slug
      });
    });
    return data;
  })(__webpack_require__("HPG3"));

  return posts.sort((a, b) => new Date(b.data.created_at) - new Date(a.data.created_at)).slice(0, count || posts.length);
}

async function getPostBySlug(slug) {
  const data = await __webpack_require__("waDe")(`./${slug}.md`);
  const post = processMarkdown(data);
  return post;
}



/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rpFx":
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "waDe":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2020-01-08-hello-world-2.md": "cEFT",
	"./2020-01-08-hello-world-3.md": "CyYL",
	"./2020-01-08-hello-world-4.md": "EFP3",
	"./2020-01-08-hello-world-5.md": "c2DG",
	"./2020-01-08-hello-world.md": "m57l"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "waDe";
module.exports = webpackAsyncContext;

/***/ })

/******/ });