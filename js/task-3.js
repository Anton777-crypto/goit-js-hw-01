"use strict";
function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddinqpad = parseFloat(padding);
  const borderbr = parseFloat(border);

  const totalWidth = contentWidth + paddinqpad * 2 + borderbr * 2;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
