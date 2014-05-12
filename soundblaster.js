/**
 * @author       Dima Rudenko <dimchik.ru@gmail.com>
 */
(function() {
    "use strict";
    var SoundBlaster = {
        version: "0.0.1"
    };

    function extend(obj) {
        var sources = Array.prototype.slice.call(arguments, 1),
            src;
        for (var j = 0, len = sources.length; j < len; j++) {
            src = sources[j];
            for (var i in src) {
                obj[i] = src[i];
            }
        }
        return obj;
    }

    var Sound = function(id, options) {

    };
    Sound.prototype = {

    };

    SoundBlaster.Sound = Sound;
    SoundBlaster.sound = function() {
        return new Sound();
    };

    var SoundManager = function() {

    };
    SoundManager.prototype = {

    };
    SoundManager.prototype.constructor = SoundManager;

    SoundBlaster.SoundManager = SoundManager;
    SoundBlaster.soundManager = function() {
        return new SoundManager();
    };

    if (typeof window !== 'undefined') {
        window.SoundBlaster = SoundBlaster;
    }
})();