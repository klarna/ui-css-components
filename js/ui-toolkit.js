'use strict';

(function (name, definition) {

  // AMD
  if (typeof define === 'function') {
    define(definition);
  }

  // Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  }

  // Browser
  else {
    window[name] = definition();
  }

})('UIToolkit', function () {

  var UIToolkit = {

    browser: {
      isIE: function () {
        return navigator.userAgent.toLowerCase().indexOf('msie') > -1;
      },

      isIE8: function () {
        return navigator.userAgent.toLowerCase().indexOf('msie 8') > -1;
      },

      isAndroidStock: function () {
        return  navigator.userAgent.toLowerCase().indexOf('mozilla/5.0') > -1 &&
                navigator.userAgent.toLowerCase().indexOf('android') > -1 &&
                navigator.userAgent.toLowerCase().indexOf('applewebkit') > -1 &&
                navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
      }
    },

    scopeBrowser: function () {
      if (UIToolkit.browser.isAndroidStock()) {
        document
          .querySelector('html')
          .setAttribute('data-cui-browser-android--stock', 'true');
      }

      if (UIToolkit.browser.isIE()) {
        document
          .querySelector('html')
          .setAttribute('data-cui-browser-ie', 'true');
      }

      if (UIToolkit.browser.isIE8()) {
        document
          .querySelector('html')
          .setAttribute('data-cui-browser-ie8', 'true')
      }
    },

    fakePlaceholders: function (editor, wrapper) {
      var callback;

      if (UIToolkit.browser.isIE() || UIToolkit.browser.isAndroidStock()) {
        UIToolkit.toggleFakePlaceholders(editor, wrapper);

        callback = function () {
          UIToolkit.toggleFakePlaceholders(editor, wrapper);
        }

        if (editor.addEventListener) {
          editor.addEventListener('keydown', callback, false);
          editor.addEventListener('change', callback, false);
          editor.addEventListener('mouseup', callback, false);
        }

        else {
          editor.attachEvent('onkeydown', callback);
          editor.attachEvent('onchange', callback);
          editor.attachEvent('onmouseup', callback);
        }
      }
    },

    toggleFakePlaceholders: function (editor, wrapper) {
      setTimeout(function () {
        var className = wrapper.className;
        var classes;
        var newClasses = [];
        var i;

        if (! editor.value) {
          classes = className.split(' ');

          for (i = 0; i < classes.length; i ++) {
            if (classes[i] !== 'is-placeholder-hidden') {
              newClasses.push(classes[i]);
            }
          }
        }

        else {
          newClasses = className.split(' ');
          newClasses.push('is-placeholder-hidden');
        }

        wrapper.className = newClasses.join(' ');

        // In IE8, adding/removing the class "is-placeholder-hidden"
        // isn't triggering a repaint on the element. This is a fix
        // to force a repaint by _touching_ the attr in question.
        // Derp, deeerp....
        if (UIToolkit.browser.isIE8()) {
          wrapper.setAttribute(
            'data-placeholder',
            wrapper.getAttribute('data-placeholder') );
        }
      }, 0); // Will be 4, it's always 4, but still faster than the eye.
    }
  }

  UIToolkit.scopeBrowser();

  return UIToolkit;
});
