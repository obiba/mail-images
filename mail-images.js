/*
 * Copyright (c) 2017 Obiba. All rights reserved.
 *
 * This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function ($) {

	'use strict';

$.transformMail = function(selector){
    document.querySelectorAll(selector).forEach(function(mail, index){
                //is this a mail
        if(mail.innerHTML.match (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)){

                //canvas image parameters
            var fontSize = window.getComputedStyle(mail).getPropertyValue('font-size');
            var heightCanava = parseInt(fontSize);

                //create the canvas image
            var genCanvas =  document.createElement('canvas');
            genCanvas.setAttribute("id", "textCanvas" + index);
            genCanvas.setAttribute("height", heightCanava);
            var tCtx = genCanvas.getContext('2d');

            tCtx.font = fontSize + " Verdana";
            tCtx.fillText(mail.innerHTML, 0, heightCanava);

                //remove the mail tag
			var parentElement = mail.parentElement;
            parentElement.removeChild(mail);

                //add generated canvas image
            parentElement.appendChild(genCanvas);
        }
    });
}

}(jQuery));