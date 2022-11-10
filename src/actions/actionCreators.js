import {
  ADD_SERVICE,
  EDIT_SERVICE,
  CLEAR_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
} from "./actionTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function editService(name, price) {
  return { type: EDIT_SERVICE, payload: { name, price } };
}

export function clearService() {
  return { type: CLEAR_SERVICE };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
