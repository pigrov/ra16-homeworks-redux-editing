import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  editService,
  clearService,
} from "../actions/actionCreators";
import { Button } from "react-bootstrap";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const formState = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (formState.name === items.find((o) => o.id === id).name) {
      dispatch(clearService());
    }
    dispatch(removeService(id));
  };

  const handleEdit = (name, price) => {
    dispatch(editService(name, price));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => handleEdit(o.name, o.price)}
          >
            ✏️
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => handleRemove(o.id)}
          >
            🗑
          </Button>
        </li>
      ))}
    </ul>
  );
}
