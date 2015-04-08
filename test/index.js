var test = require('tape'),
    venfix = require('../');

window.onload = function(){

    test('default property', function(t){
        t.plan(1);

        t.equal(venfix('border'), 'border');
    });

    /*
        NOTE: This test only works in a webkit-prefixed environment
    */
    test('vender prefixed property', function(t){
        t.plan(1);

        t.equal(venfix('animation'), '-webkit-animation');
    });

    test('non-existant property', function(t){
        t.plan(1);

        t.equal(venfix('wat'), 'wat');
    });

    /*
        NOTE: This test only works in a webkit-prefixed environment
    */
    test('js property', function(t){
        t.plan(1);

        t.equal(venfix('requestFileSystem', window), 'webkitRequestFileSystem');
    });

};