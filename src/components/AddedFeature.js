import React from 'react';
import { connect } from 'react-redux';
import { removeFeature, updatePrice } from "../actions/actions";

const AddedFeature = props => {
  // console.log("id", props.id);
  // console.log("key", props.key);

  const update = () => {
    props.removeFeature(props.feature, props.id);
    props.updatePrice();
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick= {update}>X</button>
      {props.feature.name}
    </li>
  );
};

//How do you pull one specific feature here? Without mapping through it in the parent?
const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}


const mapDispatchToProps = { removeFeature, updatePrice};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);



