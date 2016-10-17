/*! react-onsenui v1.0.0 - Thu Sep 15 2016 22:37:15 GMT+0900 (JST) */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('onsenui')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'onsenui'], factory) :
  (factory((global.Ons = global.Ons || {}),global.React,global.ReactDOM,global.ons));
}(this, (function (exports,React,ReactDOM,ons) { 'use strict';

React = 'default' in React ? React['default'] : React;
var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
ons = 'default' in ons ? ons['default'] : ons;

var Util = {
  sizeConverter: function sizeConverter(item) {
    if (typeof item === 'number') {
      return item + 'px';
    } else {
      return item;
    }
  },
  numberConverter: function numberConverter(item) {
    return item + 'px';
  },
  animationOptionsConverter: function animationOptionsConverter(options) {
    var keys = Object.keys(options);
    var innerString = keys.map(function (key) {
      return key + ': "' + options[key] + '"';
    });
    return '{' + innerString.join(',') + '}';
  },
  convert: function convert(dict, name) {
    var additionalDict = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var fun = additionalDict.fun ? additionalDict.fun : function (x) {
      return x;
    };
    var newName = additionalDict.newName ? additionalDict.newName : name;

    var val = dict[name];
    if (val) {
      if (newName !== name) {
        delete dict[name];
      }
      dict[newName] = fun(val);
    } else {
      dict[newName] = null;
    }
    return dict;
  }
};
