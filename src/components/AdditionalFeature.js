import React from 'react';
import { connect } from "react-redux";
import { addFeature, updatePrice } from "../actions/actions";

//Was this line here to begin with?
import AddedFeatures from './AddedFeatures';

const AdditionalFeature = props => {

  const update = () => {
    props.addFeature(props.feature);
    props.updatePrice();
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"  onClick= {update}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//What should actually be here so I don't need to pass down from parent?
const mapStateToProps = (state) => {
  return {
    members: state.additionalFeatures
  };
};


const mapDispatchToProps = { addFeature, updatePrice};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);