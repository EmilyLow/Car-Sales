import React from 'react';
import { connect } from 'react-redux';
import { updatePrice } from "../actions/actions";

const Total = props => {

  // props.updatePrice();

  console.log(props.additionalPrice);
  return (
    <div className="content">
      
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice
  }
}
const mapDispatchToProps = { updatePrice};
export default connect(mapStateToProps, updatePrice)(Total);
