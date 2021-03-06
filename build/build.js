/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gameField = __webpack_require__(1);

var appDirector = {

    gameField: new _gameField.GameField()

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(2);

var _invader = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameField = exports.GameField = function () {
    function GameField() {
        _classCallCheck(this, GameField);

        this.initInvadersIcon();
    }

    _createClass(GameField, [{
        key: 'initInvadersIcon',
        value: function initInvadersIcon() {
            var _this = this;

            this.img = document.createElement('img');

            this.img.src = '/space-invaders/img/up.png';

            this.img.addEventListener('load', function () {

                _this.init();
            }, false);
        }
    }, {
        key: 'init',
        value: function init() {

            this.createField();

            this.createInvaders();

            this.createPlayer();

            this.startGame();

            this.listenEvents();
        }
    }, {
        key: 'createField',
        value: function createField() {

            this.dataField = {

                sizeX: 50,

                sizeY: 30

            };

            this.gameField = document.querySelector('[data-field]');

            this.gameContext = this.gameField.getContext('2d');
        }
    }, {
        key: 'createInvaders',
        value: function createInvaders() {

            var invader = void 0;

            this.invaders = [];

            for (var i = 0; i < 5; i++) {

                for (var j = 0; j < 10; j++) {

                    invader = new _invader.Invader({

                        x: j * 30,

                        y: i * 30

                    }, this.img);

                    this.invaders.push(invader);

                    // invader.draw(this.gameContext);
                }
            }
        }
    }, {
        key: 'createPlayer',
        value: function createPlayer() {

            this.player = new _player.Player({ x: 300, y: 50 });
        }
    }, {
        key: 'startGame',
        value: function startGame() {

            this.draw();
        }
    }, {
        key: 'listenEvents',
        value: function listenEvents() {
            var _this2 = this;

            this.invaders.forEach(function (invader) {

                invader.on('fire', _this2.createBullet, _this2);
            });
        }
    }, {
        key: 'createBullet',
        value: function createBullet() {

            //    TODO bullet instances creation

        }
    }, {
        key: 'draw',
        value: function draw() {
            var _this3 = this;

            this.gameContext.fillStyle = '#000';

            this.gameContext.fillRect(0, 0, this.gameField.width, this.gameField.width);

            this.invaders.forEach(function (invader) {

                invader.draw(_this3.gameContext);
            });

            this.player.draw(this.gameContext);
        }
    }]);

    return GameField;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = exports.Player = function () {
    function Player(position) {
        _classCallCheck(this, Player);

        this.position = position;
    }

    _createClass(Player, [{
        key: 'draw',
        value: function draw(context) {

            var width = 10;

            var height = 10;

            context.fillStyle = '#FFF';

            context.fillRect(this.position.x, this.position.y, width, height);
        }
    }]);

    return Player;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Invader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(4);

var _eventsMixin = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Invader = exports.Invader = function () {
    function Invader(position, icon) {
        _classCallCheck(this, Invader);

        _eventsMixin.eventsMixin.extend(this);

        this.position = position;

        this.icon = icon;
    }

    _createClass(Invader, [{
        key: 'init',
        value: function init() {

            this.startFire();
        }
    }, {
        key: 'startFire',
        value: function startFire() {
            var _this = this;

            this.fireInterval = setInterval(function () {

                _this.fire();
            }, _utils.utils.randomize(10) * 1000);
        }
    }, {
        key: 'fire',
        value: function fire() {

            this.trigger('fire', {

                position: this.position

            });
        }
    }, {
        key: 'draw',
        value: function draw(context) {

            var upLeft = {

                x: this.position.x,

                y: this.position.y

            };

            var width = 25;

            var height = 25;

            // context.fillStyle = '#FFF';

            // context.fillRect(upLeft.x, upLeft.y, width, height);

            context.drawImage(this.icon, upLeft.x, upLeft.y, width, height);
        }
    }]);

    return Invader;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var utils = exports.utils = {
    randomize: function randomize(range) {

        return Math.floor(Math.random() * (range + 1));
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var eventsMixin = exports.eventsMixin = {

    events: {},

    on: function on(event, callback, context) {

        if (this.events.hasOwnProperty(event)) {

            this.events[event].push({

                fnk: callback,

                context: context || this

            });
        } else {

            this.events[event] = [{

                fnk: callback,

                context: context || this

            }];
        }
    },
    trigger: function trigger(event, data) {

        var args = [];

        if (this.events[event]) {

            if (data) {

                args = Array.prototype.splice.call(arguments, 1);
            }

            this.events[event].forEach(function (handler) {

                handler.fnk.apply(handler.context, args);
            });
        }
    },
    extend: function extend(nested) {

        nested.events = {};

        nested.on = this.on;

        nested.trigger = this.trigger;
    }
};

/***/ })
/******/ ]);