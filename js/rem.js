/*
* @Author: TAO
* @Date:   2018-11-16 11:25:50
* @Last Modified by:   TAO
* @Last Modified time: 2018-11-16 11:33:34
*/
   (function (doc, win) {
            var docEl = doc.documentElement,
                    resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        if(clientWidth>=475){
                            docEl.style.fontSize = '16px';
                        }else{
                            docEl.style.fontSize = 16 * (clientWidth /475) + 'px';
                        }
                    };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);