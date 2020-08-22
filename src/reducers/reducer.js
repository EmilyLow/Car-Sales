
const initialState =  {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case "ADD_FEATURE":
        
        return {...state, car: {...state.car, features: [...state.car.features, action.payload ]}
        
        }
        //Cleaner way to do this?
      case "REMOVE_FEATURE":
        return {...state, car: {...state.car, features: state.car.features.filter( (feature) => {
            if (!(feature.id === action.payload.id)) {
              return feature;
            }
        })
        
        }}
      case "UPDATE_PRICE":
        let initialValue = 0;
        const reducer = (accumulator, item) => {
          return accumulator + item.price;
        }
        const updatedPrice = state.car.features.reduce(reducer, initialValue);
       
        // console.log("Updated price", updatedPrice);
        return {...state, additionalPrice: updatedPrice};

       default: 
        return state;
    }


}