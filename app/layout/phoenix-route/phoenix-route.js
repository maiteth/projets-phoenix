import '@uirouter/angularjs';

import './phoenix-route.scss';

import homeHtml from './home/home.html';
import planningHtml from './planning/planning.html';
import gallerieHtml from './gallerie/gallerie.html';
import aProposHtml from './a-propos/a-propos.html';
import liveHtml from './live/live.html';
import videosHtml from './videos/videos.html';
import projetsHtml from './projets/projets.html';

const app = angular.module('phoenix-route', ['ui.router']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state({
		name: 'home',
		url: '/',
		template: homeHtml,
	});

	$stateProvider.state({
		name: 'planning',
		url: '/planning',
		template: planningHtml,
	});

	$stateProvider.state({
		name: 'gallerie',
		url: '/gallerie',
		template: gallerieHtml,
	});

	$stateProvider.state({
		name: 'a-propos',
		url: '/a-propos',
		template: aProposHtml,
	});

	$stateProvider.state({
		name: 'live',
		url: '/live',
		template: liveHtml,
	});

	$stateProvider.state({
		name: 'videos',
		url: '/videos',
		template: videosHtml,
	});

	$stateProvider.state({
		name: 'projets',
		url: '/projets',
		template: projetsHtml,
	});

	$urlRouterProvider.otherwise('/');
});