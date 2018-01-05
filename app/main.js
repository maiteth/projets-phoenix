'use strict';

import 'angular';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

// import layout module
import './layout/phoenix-layout.js';

// import intelligence module
import './layout/phoenix-route/phoenix-route.js';

const app = angular.module('main', ['phoenix-layout', 'phoenix-route']);
