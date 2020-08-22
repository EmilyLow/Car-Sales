export const addFeature = (feature) => {
    console.log("Adding feature");
    return { type: "ADD_FEATURE", payload: feature };
  };
  
  export const removeFeature = (feature) => {
    console.log("Removing feature");
    return { type: "REMOVE_FEATURE", payload: feature };
  };


  export const updatePrice = (feature) => {
      console.log("Updating price");
      //possibly could have gone without feature here
      return {type: "UPDATE_PRICE", payload: feature};
  }