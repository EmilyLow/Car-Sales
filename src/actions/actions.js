export const addFeature = (feature) => {
    console.log("Adding feature");
    return { type: "ADD_FEATURE", payload: feature };
  };
  