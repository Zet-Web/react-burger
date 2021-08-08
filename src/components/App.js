import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';
import base from '../base';

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers',
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    // console.log("addBurger", burger);
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавить новый бургер в переменную объект burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записать наш новый объект burgers в State
    this.setState({
      burgers,
    });
  };

  updateBurger = (key, updatedBurger) => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Обновляем нужный бургер
    burgers[key] = updatedBurger;
    // 3.
    this.setState({
      burgers,
    });
  };

  deleteBurger = (key) => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Удаляем бургер
    burgers[key] = null;
    this.setState({
      burgers,
    });
  };

  deleteFromOrder = (key) => {
    const order = { ...this.state.order };
    // удаляем бургер
    delete order[key];
    this.setState({
      order,
    });
  };

  loadSampleBurgers = () => {
    this.setState({
      burgers: sampleBurgers,
    });
  };

  addToOrder = (key) => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2. Добавить ключ к заказу со значением 1 , либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    // 3. Записать наш новый объект order в State
    this.setState({
      order,
    });
  };
  render() {
    return (
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title='Very hot burger' />
          <ul className='burgers'>
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  key={key}
                  index={key}
                  addToOrder={this.addToOrder}
                  details={this.state.burgers[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order
          burgers={this.state.burgers}
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}
        />
        <MenuAdmin
          title='hello'
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
          burgers={this.state.burgers}
          updatedBurger={this.updateBurger}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}
export default App;
