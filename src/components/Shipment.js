import React from 'react';

class Shipment extends React.Component {
  render() {
    const { total } = this.props;
    const shipping = total > 0 && total < 500 ? 350 : 99;
    const shippingNeon =
      shipping === 99 ? (
        <span className='font-effect-neon total_wrap-cheap'>{shipping} Р</span>
      ) : (
        <span>{shipping} Р</span>
      );
    return (
      <div>
        <div className='total'>
          <div className='total_wrap'>
            <div>
              <div>Доставка : {total > 0 ? shippingNeon : null}</div>
              <div className='total_wrap-free'>
                {total < 500
                  ? `Закажите еще на ${500 - total} Р для доставки за 99 Р`
                  : null}
              </div>
            </div>
            <div className='total_wrap-final'>Итого: {total}Р</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shipment;
