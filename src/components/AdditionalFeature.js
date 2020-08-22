import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";

//Was this line here to begin with?
import AddedFeatures from './AddedFeatures';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"  onClick= {() => props.addFeature(props.feature)}>Add</button>
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


const mapDispatchToProps = { addFeature};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);