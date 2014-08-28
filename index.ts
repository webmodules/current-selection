/// <reference path='require.d.ts' />

/**
 * JavaScript dependencies.
 */

var getWindow = require('get-window');

/**
 * Returns a `Selection` instance from the given Window, Document, DOM
 * Element or Selection instance.
 *
 * @param {Window|Document|Element|Selection} doc - Window, Document or DOM Element
 *   instance to get the current Selection from. If a Selection instance is passed
 *   in, then it gets returned directly.
 * @return {Selection} returns a Selection instance, or `null` if there is
 *   no current selection.
 * @public
 */

function currentSelection (doc: any): Selection {
  if (doc && 'function' === typeof doc.getRangeAt) {
    // user passed in a Selection instance directly
    return doc;
  }
  var win: Window = getWindow(doc) || window;
  if (win) {
    return win.getSelection();
  } else {
    return null;
  }
}

export = currentSelection;
