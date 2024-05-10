// utils.js
import React from "react";

export function generateField(items, width, gamearray, OnClick, OnRightClick, addNumbers) {
  const newItems = Array.from({ length: width * width }, (_, index) => (
    <div
      key={items.length + index}
      id={`${items.length + index}`}
      className={`grid_cell unactive ${gamearray[index % gamearray.length]}`}
      onClick={() => OnClick(index)}
      onContextMenu={(e) => OnRightClick(index, e)}
    ></div>
  ));

  return [...items, ...newItems];
}

export function addNumbers(items, width) {
  const updatedItems = items.map((item, index) => {
    let total = 0;
    const isLeftEdge = index % width === 0;
    const isRightEdge = index % width === width - 1;
    let class_name = '';
    if (item.props.className.includes('valid')) {
      if (index > width - 1 && !isLeftEdge && items[index - 1 - width].props.className.includes('bomb')) total++;
      if (index > width - 1 && items[index - width].props.className.includes('bomb')) total++;
      if (index > width - 1 && !isRightEdge && items[index + 1 - width].props.className.includes('bomb')) total++;
      if (index > 0 && !isLeftEdge && items[index - 1].props.className.includes('bomb')) total++;
      if (index > 0 && !isRightEdge && items[index + 1].props.className.includes('bomb')) total++;
      if (index < width * width - width && !isLeftEdge && items[index + width - 1].props.className.includes('bomb')) total++;
      if (index < width * width - width && items[index + width].props.className.includes('bomb')) total++;
      if (index < width * width - width && !isRightEdge && items[index + width + 1].props.className.includes('bomb')) total++;
      class_name = `count-${total}`;
    }
    return React.cloneElement(item, {
      className: `${item.props.className} ${class_name}` // Додаємо клас "active"
    });

  });

  return updatedItems;
}

export function setBomb(width, bombsAmount) {
  const validArr = Array(width * width - bombsAmount).fill('valid');
  const bombsArr = Array(bombsAmount).fill('bomb');

  let gamearr = validArr.concat(bombsArr);
  gamearr = gamearr.sort(() => Math.random() - 0.5);

  return gamearr;
}
