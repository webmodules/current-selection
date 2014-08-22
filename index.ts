/// <reference path='require.d.ts' />

/**
 * JavaScript dependencies.
 */

var getWindow = require('get-window');

/**
 * Returns a `Selection` instance from the given Window, Document or DOM
 * Element instance.
 *
 * @param {Window|Document|Element} doc - Window, Document or DOM Element
 *   instance to get the current Selection from.
 * @return {Selection} returns a Selection instance, or `null` if there is
 *   no current selection.
 * @public
 */

function currentSelection (doc: any): Selection {
  var win: Window = getWindow(doc);
  if (win) {
    return win.getSelection();
  } else {
    return null;
  }
}

export = currentSelection;
