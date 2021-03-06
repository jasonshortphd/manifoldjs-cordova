'use strict';

var manifoldjsLib = require('manifoldjs-lib');

var imageGroupValidation =  manifoldjsLib.manifestTools.imageGroupValidation;

var constants = require('../../constants');

module.exports = function (manifestContent, callback) {
  var description = 'A small square logo of any of the following sizes is required for Windows: 24x24, 30x30, 42x42, 54x54',
      platform = constants.platform.subPlatforms.windows.id,
      validIconSizes = ['24x24', '30x30', '42x42', '54x54'];

  imageGroupValidation(manifestContent, description, platform, validIconSizes, callback);
};
