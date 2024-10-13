"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("./components/Home.vue"));

var _About = _interopRequireDefault(require("./components/About.vue"));

var _Contact = _interopRequireDefault(require("./components/Contact.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/about',
  name: 'About',
  component: _About["default"]
}, {
  path: '/contact',
  name: 'Contact',
  component: _Contact["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;