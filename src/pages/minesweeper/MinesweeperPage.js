import React, { Component } from "react";
import "./MinesweeperPage.css";
import { generateField, addNumbers, setBomb } from "./Field";
import Modal from "./Modal";

class Minesweeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      active: "inactive",
      bombsAmount: 20,
      flagLeft: 0,
      width: 10,
      gamearray: [],
      bombDisactive:0,
      gameover: false,
      div_width: 400,  
      showModal: false,
      value:10
    };
  }

  
  generateField = () => {
    const { items, width, gamearray } = this.state;
    const newItems = generateField(items, width, gamearray, this.OnClick, this.OnRightClick, this.addNumbers);
    this.setState({ items: newItems }, () => {
      this.addNumbers(); // Додати числа після створення елементів
    });
  }

  addNumbers = () => {
    const { items, width } = this.state;
    const updatedItems = addNumbers(items, width);
    this.setState({ items: updatedItems });
  }

  setBomb = () => {
    const { width, bombsAmount } = this.state;
    const gamearray = setBomb(width, bombsAmount);
    this.setState({ gamearray }, () => {
      this.generateField(); // Додати елементи після встановлення gamearray
    });
  }
    

    OnClick = (index) => {
      if (!this.state.gameover) {
        const updatedItems = [...this.state.items];
        const item = updatedItems[index];
        console.log("Check neighbor flags:", this.checkNeighborFlags(index));
        if (item.props.className.includes("bomb")) {
          this.GameOver();
        } 
        else if(item.props.className.includes("count-0") && item.props.className.includes("unactive")){
          this.IsNull(updatedItems, index)
        }
        else if (this.checkNeighborFlags(index) && !item.props.className.includes("unactive")) {
          this.openNeighborCells(updatedItems, index);
        }
    
        // Перевірка на бомбу повинна бути в кінці
        else if (item.props.className.includes("unactive")) {
          // Відкриваємо тільки поточну клітинку
          const updatedItem = React.cloneElement(item, {
            className: item.props.className.replace("unactive", "active") ,
          });
          updatedItems[index] = updatedItem;
        }
    
        this.setState({ items: updatedItems });
      }
    };

    openNeighborCells = (updatedItems, index) => {
      const item = updatedItems[index];
      if (!item) {
        return updatedItems; // Перериваємо функцію, якщо item не визначений
      }
      const { width } = this.state;
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
                this.IsNull(updatedItems, neighborIndex)
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
  
    
  IsNull = (items, index) => {
    const { width } = this.state;
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
    this.setState({ items: items });
}



    

    checkNeighborFlags = (index) => {
      const { items, width } = this.state;
      const item = items[index];
      const classNames = item ? item.props.className.split(" ") : [];
      const countIndex = classNames.findIndex(className => className.includes("count"));
      const countClass = countIndex !== -1 ? classNames[countIndex] : ""; // Отримуємо клас "count-<цифра>", або пустий рядок, якщо такого класу немає
    
      
      // Отримуємо цифру з класу "count-<цифра>"
      const countNumber = countClass ? parseInt(countClass.split("-")[1]) : 0;
    
      if (!item) {
        return false; // Повертаємо false, якщо items[index] не визначений
      }
      
      const row = Math.floor(index / width);
      const col = index % width;
      const neighbors = [
        index - width - 1, index - width, index - width + 1,
        index - 1,                         index + 1,
        index + width - 1, index + width, index + width + 1,
      ];
      let flagsCount = 0;
      for (let i = 0; i < neighbors.length; i++) {
        const neighborIndex = neighbors[i];
        if (
          neighborIndex >= 0 && neighborIndex < items.length &&
          ((neighborIndex % width === 0 && index % width !== 0) || ((neighborIndex + 1) % width === 0 && (index + 1) % width !== 0)) // Ліва або права границя
        ) {
          continue; // Пропускаємо цей ітерацію циклу
        }
        const neighborItem = items[neighborIndex];
    
        if (neighborItem && neighborItem.props.className.includes("flag")) {
          flagsCount++;
        }
      }
    
      return flagsCount === countNumber;
    }


    

  OnRightClick = (index, e) => {
    e.preventDefault(); // Виклик запобігає відображенню контекстного меню браузера
    if(!this.state.gameover){
    const updatedItems = [...this.state.items];
    const item = updatedItems[index];
    if (item.props.className.includes("flag")) {
      this.setState({ flagLeft: this.state.flagLeft + 1 });
      const updatedItem = React.cloneElement(item, {
        className: item.props.className.replace("flag", "")
      });
      updatedItems[index] = updatedItem;
      this.setState({ items: updatedItems });
    } 
    else if (this.state.flagLeft !== 0 && item.props.className.includes("unactive")) {

        this.setState({ flagLeft: this.state.flagLeft - 1 });
        const updatedItem = React.cloneElement(item, {
          className: `${item.props.className} flag`
        });
        updatedItems[index] = updatedItem;
        this.setState({ items: updatedItems });
        if (item.props.className.includes("bomb")) {
          this.setState({ bombDisactive: this.state.bombDisactive + 1 });
          if(this.state.bombDisactive === this.state.bombsAmount){
            this.Win()
          }
      }
    }
    }

  };
  


  GameOver = () => {
    this.setState({ gameover: true }, () => {
  
  
      const updatedItems = this.state.items.map(item => {
        if (item.props.className.includes('bomb')) {
          return React.cloneElement(item, { className: item.props.className.replace('unactive', 'active') });
        } else {
          return item;
        }
      });
  
      this.setState({ items: updatedItems });
    });
  };
  
  Win =()=>{
    this.setState({ gameover: true }, () => {
      alert("WIN")}
    )

}

smallgrid = () => {
  this.setState({
    items:[],
    gameover: false,
    bombsAmount: 20,
    flagLeft: 20,
    width: 10,
    height: 10,
    gamearray: [],
    bombDisactive:0,
  }, () => {
    this.setState({div_width: this.state.width * 40})
    this.setBomb(); // Викликаємо setBomb після того, як стан буде оновлено
  });
}

mediumgrid = () => {
  this.setState({
    items:[],
    gameover: false,
    bombsAmount: 50,
    flagLeft: 50,
    width: 15,
    height: 15,
    gamearray: [],
    bombDisactive:0
  }, () => {
    this.setState({div_width: this.state.width * 40})
    this.setBomb();
  });
}

biggrid = () => {
  this.setState({
    items:[],
    gameover: false,
    bombsAmount: 70,
    flagLeft: 70,
    width: 20,
    height: 20,
    gamearray: [],
    bombDisactive:0,
  }, () => {
    this.setState({div_width: this.state.width * 40})
    this.setBomb();
  });
}

  
creategrid = () => {
  const value = Math.floor(this.state.value);
  const bombsAmount = Math.floor((value * value) / 5);

  if (isNaN(value) || value <= 0) {
      console.error('Invalid grid size value:', value);
      return;
  }

  this.setState({
      items: [],
      gameover: false,
      bombsAmount: bombsAmount,
      flagLeft: bombsAmount,
      width: value,
      height: value,
      gamearray: [],
      bombDisactive: 0,
  }, () => {
      this.setState({ div_width: value * 40 });
      this.setBomb();
  });
}
  
  handleChange = (event) => {
    this.setState({ value:event.target.value }); // Відкидаємо дробову частину
  };

  render() {
    return (
      <main>
        <div className="first_block">
          <div className="container_game">
            <div id="Flags">Flags left: <span id="flags-left">{this.state.flagLeft}</span></div>
            <div className="buttonDiv">
            <p>{this.state.value}x{this.state.value}</p>
            <input
              type="range"
              min="5"
              max="30"
              step="1"  // Додаємо крок, щоб повзунок рухався по цілих числах
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button onClick={this.creategrid}>Create</button>
            <button onClick={this.smallgrid}>small</button>
            <button onClick={this.mediumgrid}>medium</button>
            <button onClick={this.biggrid}>big</button>

            </div>
            <div className="grid"style={{width: this.state.div_width+"px"}}>{this.state.items}</div>
          </div>
        </div>
        {this.state.showModal && <Modal onClose={this.closeModal} />}
      </main>
    );
  }
}

export default Minesweeper;