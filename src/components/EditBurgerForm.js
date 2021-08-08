import React from 'react';
class EditBurgerForm extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    const updateBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateBurger(this.props.index, updateBurger);
  };
  render() {
    return (
      <div className='burger-edit'>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.props.burger.name}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='text'
          placeholder='price'
          value={this.props.burger.price}
          onChange={this.handleChange}
        />
        <select
          name='status'
          className='status'
          value={this.props.burger.status}
          onChange={this.handleChange}
        >
          <option value='available'>Доступно!</option>
          <option value='unavailable'>Недоступно</option>
        </select>
        <textarea
          name='desc'
          placeholder='Описание'
          value={this.props.burger.desc}
          onChange={this.handleChange}
        />
        <input
          name='image'
          type='text'
          placeholder='image'
          value={this.props.burger.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteBurger(this.props.index)}>
          Удалить из меню
        </button>
      </div>
    );
  }
}
export default EditBurgerForm;
