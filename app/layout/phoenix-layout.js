import './phoenix-layout.scss';

const app = angular.module('phoenix-layout', []);

app.component('phoenixHeader', {
    templateUrl: './layout/header/phoenix-header.html'
});

app.component('phoenixBody', {
    templateUrl: './layout/body/phoenix-body.html'
});