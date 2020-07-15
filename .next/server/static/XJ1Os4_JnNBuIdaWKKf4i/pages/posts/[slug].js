module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kPCp");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5BHX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/parse-int");

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

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "T0ZK":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "WdT2":
/***/ (function(module, exports) {

module.exports = require("medium-zoom");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "cPFx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5BHX");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "jpsF":
/***/ (function(module, exports) {

module.exports = {
  siteMetadata: {
    title: "Nicolas Thiry",
    description: "Starter for Next.js."
  }
};

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kPCp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__("rpFx");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/config/site-config.js
var site_config = __webpack_require__("jpsF");

// EXTERNAL MODULE: ./src/data/Posts.js + 2 modules
var Posts = __webpack_require__("qMHi");

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: external "medium-zoom"
var external_medium_zoom_ = __webpack_require__("WdT2");
var external_medium_zoom_default = /*#__PURE__*/__webpack_require__.n(external_medium_zoom_);

// CONCATENATED MODULE: ./src/components/posts/Image.js

var __jsx = external_react_default.a.createElement;





const PostImage = ({
  alt,
  src
}) => {
  const imagePreloader = src.replace(src.match(/(?:\.([^.]+))?$/)[0], `.min${src.match(/(?:\.([^.]+))?$/)[0]}`);
  const theme = Object(external_emotion_theming_["useTheme"])();
  const imageRef = Object(external_react_["useRef"])();
  const {
    0: image,
    1: setImage
  } = Object(external_react_["useState"])(imagePreloader);
  Object(external_react_["useEffect"])(() => {
    external_medium_zoom_default()(imageRef.current);
    const imageFull = new Image();

    imageFull.onload = () => {
      setImage(imageFull);
    };

    imageFull.src = src;
    return () => {
      imageFull.onload = null;
    };
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(StyledImage, {
    theme: theme,
    style: {
      backgroundImage: `url(${image.src || image})`,
      transition: '0.5s filter linear',
      filter: `${image.src ? '' : 'blur(25px)'}`
    }
  }, __jsx("img", {
    ref: imageRef,
    alt: alt,
    src: image.src || image
  })), __jsx(StyledAlt, null, alt));
};

const StyledImage = styled_default.a.span`
    max-width: 120%;
    margin: 40px -10% 20px;
    display: block;
    position: relative;

    img {
        opacity: 0;
        display: block;
        width: 100%;
        position: relative;
        z-index: 2;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: inherit;
        background-size: cover;
        background-position: center center;
    }

    &::before {
        top: 10px;
        filter: blur(25px);
        backface-visibility: visible;
        transform: scale(1.03) translate3d(0, 0, 0);
        z-index: 0;
        opacity: ${({
  theme
}) => theme.posts.imageShadowOpacity};
        transition: opacity 0.2 linear;
    }

    &::after {
        z-index: 1;
    }
`;
const StyledAlt = styled_default.a.span`
    display: block;
    text-align: center;
    margin: 0 0 40px;
    font-size: 12px;
    opacity: 0.5;
    font-family: "Poppins", sans-serif;
`;
/* harmony default export */ var posts_Image = (PostImage);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js
var parse_int = __webpack_require__("cPFx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/hljs"
var hljs_ = __webpack_require__("T0ZK");

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// EXTERNAL MODULE: external "copy-to-clipboard"
var external_copy_to_clipboard_ = __webpack_require__("oLBY");

// CONCATENATED MODULE: ./src/components/posts/SyntaxHighlight.js


var SyntaxHighlight_jsx = external_react_default.a.createElement;

/** @jsx jsx */








const SyntaxHighlight = ({
  value,
  language = null
}) => {
  const theme = Object(external_emotion_theming_["useTheme"])();
  const {
    0: copied,
    1: setCopied
  } = Object(external_react_["useState"])(false);
  const lines = language.match(/{([^}]+)}/);
  const highlights = lines && lines[1].split(",").map(highlight => parse_int_default()(highlight));
  const codeLanguage = lines ? language.replace(language.match(/{([^}]+)}/)[0], "") : language;

  const handleCopyToClipboard = () => {
    external_copy_to_clipboard_(value);
    if (!copied) setCopied(true);
  };

  const renderCopyLink = () => {
    if (!copied) return Object(core_["jsx"])("span", null, Object(core_["jsx"])(external_react_feather_["Copy"], null), " Copy to clipboard");
    return Object(core_["jsx"])("span", {
      css: copyLinkCheckedStyles
    }, Object(core_["jsx"])(external_react_feather_["Check"], null), " Copied!");
  };

  return Object(core_["jsx"])("div", {
    css: containerStyles
  }, Object(core_["jsx"])("div", null, Object(core_["jsx"])("span", {
    css: copyLinkStyles,
    onClick: () => handleCopyToClipboard()
  }, renderCopyLink()), Object(core_["jsx"])("span", {
    css: languageLabelStyles(codeLanguage)
  }, codeLanguage)), Object(core_["jsx"])(external_react_syntax_highlighter_default.a, {
    language: codeLanguage.toLowerCase(),
    style: hljs_[theme.posts.syntaxHighlightTheme],
    customStyle: customStyles,
    wrapLines: true,
    lineProps: lineNumber => {
      let style = {};

      if (highlights && highlights.includes(lineNumber)) {
        style.backgroundColor = languageHighlightColors[codeLanguage.toLowerCase()].background;
        style.borderLeft = `3px solid ${languageHighlightColors[codeLanguage.toLowerCase()].border}`;
      }

      return {
        style
      };
    },
    css: core_["css"]`
                    background: ${theme.posts.syntaxHighlightBackground} !important;
                    box-shadow: ${theme.posts.itemHoverShadow};
                `
  }, value));
};

const languageHighlightColors = {
  html: {
    background: "rgba(1, 55, 162, 0.1)",
    border: "rgba(1, 55, 162, 1)"
  },
  css: {
    background: "rgba(1, 55, 162, 0.1)",
    border: "rgba(1, 55, 162, 1)"
  },
  javascript: {
    background: "rgba(248, 179, 25, 0.1)",
    border: "rgba(248, 179, 25, 1)"
  },
  ruby: {
    background: "rgba(255, 49, 91, 0.1)",
    border: "rgba(255, 49, 91, 1)"
  }
};
const containerStyles = core_["css"]`
    position: relative;
`;
const copyLinkStyles = core_["css"]`
    position: absolute;
    top: 0;
    left: -10%;
    margin: 10px 0 0 25px;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    opacity: 0.3;
    cursor: pointer;
    transition: opacity 0.2s linear;

    > span {
        display: flex;
        align-items: center;
    }

    svg {
        width: 16px;
        margin-right: 10px;
    }

    &:hover {
        opacity: 0.6;
    }
`;
const copyLinkCheckedStyles = core_["css"]`
    animation: pop 0.4s ease-out;

    @keyframes pop {
        from {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        to {
            transform: scale(1);
        }
    }
`;

const languageLabelStyles = codeLanguage => core_["css"]`
    position: absolute;
    top: 0;
    right: -10%;
    margin: 10px 10px 0 0;
    padding: 3px 10px;
    border-radius: 50px;
    min-width: 45px;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    opacity: 1;
    color: #fff;
    text-align: center;
    background: ${languageHighlightColors[codeLanguage.toLowerCase()].border};
`;

const customStyles = {
  fontSize: "16px",
  lineHeight: 1,
  fontFamily: "Menlo",
  padding: "50px 0 15px",
  margin: "25px 0 25px -10%",
  borderRadius: "4px",
  width: "120%"
};
/* harmony default export */ var posts_SyntaxHighlight = (SyntaxHighlight);
// CONCATENATED MODULE: ./src/pages/posts/[slug].js

var _slug_jsx = external_react_default.a.createElement;

/** @jsx jsx */









const Post = ({
  post
}) => {
  const theme = Object(external_emotion_theming_["useTheme"])();
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(head_default.a, null, Object(core_["jsx"])("title", null, post.data.title, " - ", site_config["siteMetadata"].title), Object(core_["jsx"])("meta", {
    name: "description",
    content: post.excerpt
  })), Object(core_["jsx"])("h1", {
    css: core_["css"]`
                    font-size: 52px;
                    font-weight: 700;
                `
  }, post.data.title), Object(core_["jsx"])(external_react_markdown_default.a, {
    source: post.content,
    renderers: {
      code: posts_SyntaxHighlight,
      image: posts_Image
    },
    css: core_["css"]`
                    font-size: 18px;
                    line-height: 2.125;
                    p {
                        color: ${theme.textLight};
                    }
                `
  }));
};

Post.getInitialProps = async function (context) {
  const {
    slug
  } = context.query;
  const post = await Object(Posts["a" /* getPostBySlug */])(slug);
  return {
    post
  };
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Post);

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

/***/ "oLBY":
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

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

/***/ "rpFx":
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

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

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });