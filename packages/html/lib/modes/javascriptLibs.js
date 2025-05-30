"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLibrary = loadLibrary;
var path_1 = require("path");
var fs_1 = require("fs");
var contents = {};
var serverFolder = (0, path_1.basename)(__dirname) === 'dist' ? (0, path_1.dirname)(__dirname) : (0, path_1.dirname)((0, path_1.dirname)(__dirname));
var TYPESCRIPT_LIB_SOURCE = (0, path_1.join)(serverFolder, '../../node_modules/typescript/lib');
var JQUERY_PATH = (0, path_1.join)(serverFolder, 'lib/jquery.d.ts');
function loadLibrary(name) {
  var content = contents[name];
  if (typeof content !== 'string') {
    var libPath;
    if (name === 'jquery') {
      libPath = JQUERY_PATH;
    } else {
      libPath = (0, path_1.join)(TYPESCRIPT_LIB_SOURCE, name); // from source
    }
    try {
      content = (0, fs_1.readFileSync)(libPath).toString();
    } catch (e) {
      console.log("Unable to load library ".concat(name, " at ").concat(libPath));
      content = '';
    }
    contents[name] = content;
  }
  return content;
}