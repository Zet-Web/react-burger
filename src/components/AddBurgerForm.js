import React from 'react';

class AddBurgerForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (event) => {
    event.preventDefault();
    console.log('2');
    // console.log("12", this.nameRef.current.value);
    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value) || 0,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addBurger(burger);
    console.log(event.currentTarget.reset());
  };
  render() {
    return (
      <form className='burger-edit' onSubmit={this.createBurger}>
        <input
          ref={this.nameRef}
          type='text'
          name='name'
          placeholder='name'
          autoComplete='off'
        />
        <input
          ref={this.priceRef}
          type='text'
          name='price'
          placeholder='price'
          autoComplete='off'
        />
        <select ref={this.statusRef} name='status' className='status'>
          <option value='available'>Доступно</option>
          <option value='unavailable'>Убрать из меню</option>
        </select>
        <textarea ref={this.descRef} name='desc' placeholder='desc' />
        <input
          ref={this.imageRef}
          type='text'
          name='image'
          placeholder='image'
          autoComplete='off'
        />
        <button type='submit'>Добавить в меню</button>
      </form>
    );
  }
}
export default AddBurgerForm;
