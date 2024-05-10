import React from 'react';

export function openNeighborCells(updatedItems, index, width){
  const item = updatedItems[index];
  if (!item) {
    return updatedItems; // Перериваємо функцію, якщо item не визначений
  }
  const row = Math.floor(index / width);
  const col = index % width;
  const neighbors = [
      index - width - 1, index - width, index - width + 1,
      index - 1, index + 1,
      index + width - 1, index + width, index + width + 1,
  ];

  // Відкриваємо всі сусідні 8 клітинок
  neighbors.forEach(neighborIndex => {
      const neighborRow = Math.floor(neighborIndex / width);
      const neighborCol = neighborIndex % width;

      if (
          neighborIndex >= 0 &&
          neighborIndex < updatedItems.length && // Перевіряємо, чи індекс в межах масиву
          Math.abs(neighborRow - row) <= 1 && // Перевіряємо, чи сусідня клітина належить сусідньому рядку
          Math.abs(neighborCol - col) <= 1 && // Перевіряємо, чи сусідня клітина належить сусідньому стовпцю
          updatedItems[neighborIndex]
      ) {
          if (
              updatedItems[neighborIndex].props.className.includes("bomb") &&
              !updatedItems[neighborIndex].props.className.includes("flag")
          ) {
              this.GameOver();
          }
          else if(updatedItems[neighborIndex].props.className.includes("count-0")){
            IsNull(updatedItems, neighborIndex)
          } else if (
              neighborIndex >= 0 && neighborIndex < this.state.items.length &&
              !updatedItems[neighborIndex].props.className.includes("flag")
          ) {
              const neighborItem = updatedItems[neighborIndex];
              const updatedNeighborItem = React.cloneElement(neighborItem, {
                  className: neighborItem.props.className.replace("unactive", "active")
              });
              updatedItems[neighborIndex] = updatedNeighborItem;
          }
      }
  });

  return updatedItems;
}


export function IsNull  (items, index, width)  {
  const row = Math.floor(index / width);
  const col = index % width;
  const neighbors = [
      index - width - 1, index - width, index - width + 1,
      index - 1,                         index + 1,
      index + width - 1, index + width, index + width + 1,
  ];

  // Перевірка, чи є поточна клітина з цифрою 0
  const currentItem = items[index];
  if ( currentItem.props.className.includes('unactive')) {
      // Встановлюємо поточну клітинку як активну
      const updatedItem = React.cloneElement(currentItem, {
          className: currentItem.props.className.replace('unactive', 'active')
      });
      items[index] = updatedItem;

      // Рекурсивно викликаємо IsNull для всіх сусідніх клітинок
      neighbors.forEach(neighborIndex => {
        const neighborRow = Math.floor(neighborIndex / width);
        const neighborCol = neighborIndex % width;
          if (neighborIndex >= 0 && 
            neighborIndex < items.length &&
            Math.abs(neighborRow - row) <= 1 && // Перевірка, чи сусідня клітина належить сусідньому рядку
            Math.abs(neighborCol - col) <= 1) {
              const neighborItem = items[neighborIndex];
              // Якщо сусідня клітина не є бомбою і не має прапорця, то відкриваємо її
              if (currentItem.props.className.includes('count-0') ) {
                  this.IsNull(items, neighborIndex);
              }
          }
      });
  }
  // Оновлюємо стан ігрових елементів тільки після завершення рекурсії
  return currentItem
}

  