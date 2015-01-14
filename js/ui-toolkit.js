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
    },

    fakePlaceholders: function (editor, wrapper) {
      var callback;

      if (UIToolkit.browser.isIE() || UIToolkit.browser.isAndroidStock()) {
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
      }, 0); // Will be 4, it's always 4, but still faster than the eye.
    }
  }

  UIToolkit.scopeBrowser();

  return UIToolkit;
});
