// ==UserScript==
// @name Test
// @match https://ticket.tv-asahi.co.jp/tp/ticket/access/QbP9lLvsShdV5GvwaN3hmFugbcQ9F1HbdVEIXDtbsXb7bjQFXe3f8sbXeETYSbnS
// ==/UserScript==

(function () {

'use strict';

document.querySelectorAll('.ticket-text-area span').forEach(el => {
  if (el.textContent.includes('■氏名：')) {
    el.innerHTML = el.innerHTML.replace(
      /■氏名：[^<]+/,
      '■氏名：山田 太郎'
    );
  }
});

})();
