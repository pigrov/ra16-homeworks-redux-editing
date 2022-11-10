import uuid from "react-uuid";
import { ADD_SERVICE, REMOVE_SERVICE } from "../actions/actionTypes";

const initialState = [
  { id: uuid(), name: "Замена стекла", price: 21000 },
  { id: uuid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      if (state.find((o) => o.name === name)) {
        return state.map((o) => {
          if (o.name === name) {
            return { ...o, price };
          }
          return o;
        });
      } else {
        return [...state, { id: uuid(), name, price: Number(price) }];
      }
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);

    default:
      return state;
  }
}
