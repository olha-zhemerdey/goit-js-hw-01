function getElementWidth(content, padding, border) {
    const widthContant = parseFloat(content);
    const widthPadding = parseFloat(padding);
    const widthBorder = parseFloat(border);
    return widthContant + widthPadding * 2 + widthBorder * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200