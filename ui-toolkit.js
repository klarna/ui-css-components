(function (name, definition) {

  'use strict';

  // AMD
  if (typeof define === 'function') {
    define(definition);

  // Node.js
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();

  // Browser
  } else {
    window[name] = definition();
  }

})('UIToolkit', function () {

  'use strict';

  var ua = (navigator.userAgent || '').toLowerCase(),
      rootEl = document.documentElement;

  var UIToolkit = {

    browser: {
      isIE: function () {
        return  ua.indexOf('msie') > -1 ||
                ua.indexOf('trident');
      },

      isIE8: function () {
        return ua.indexOf('msie 8') > -1;
      },

      isAndroidStock: function () {
        return  ua.indexOf('mozilla/5.0') > -1 &&
                ua.indexOf('android') > -1 &&
                ua.indexOf('applewebkit') > -1 &&
                ua.indexOf('chrome') > -1;
      }
    },

    scopeBrowser: function () {
      if (UIToolkit.browser.isAndroidStock()) {
        rootEl.setAttribute('data-cui-browser-android--stock', 'true');
      }

      if (UIToolkit.browser.isIE()) {
        rootEl.setAttribute('data-cui-browser-ie', 'true');
      }

      if (UIToolkit.browser.isIE8()) {
        rootEl.setAttribute('data-cui-browser-ie8', 'true');
      }
    },

    fakePlaceholders: function (editor, wrapper) {
      var callback;

      // Only for IE and Android Stock, that behave differently from others
      if (UIToolkit.browser.isIE() || UIToolkit.browser.isAndroidStock()) {

        UIToolkit.toggleFakePlaceholders(editor, wrapper);

        callback = function () {
          setTimeout(function () {
            UIToolkit.toggleFakePlaceholders(editor, wrapper);
          }, 0);
        };

        wrapper.setAttribute(
          'data-placeholder',
          editor.getAttribute('placeholder'));

        editor.removeAttribute('placeholder');

        if (editor.addEventListener) {
          editor.addEventListener('keydown', callback, false);
          editor.addEventListener('change', callback, false);
          editor.addEventListener('mouseup', callback, false);
        } else {
          editor.attachEvent('onkeydown', callback);
          editor.attachEvent('onchange', callback);
          editor.attachEvent('onmouseup', callback);
        }
      }
    },

    toggleFakePlaceholders: function (editor, wrapper) {
      var className = wrapper.className || '',
          classes, i, length,
          newClasses = [];

      if (! editor.value) {
        classes = className.split(' ');
        length = classes.length;

        for (i = 0; i < length; i ++) {
          if (classes[i] !== 'is-placeholder-hidden') {
            newClasses.push(classes[i]);
          }
        }
      } else {
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
    }
  };


  UIToolkit.scopeBrowser();

  return UIToolkit;
});
