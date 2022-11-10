import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";
import { Button } from "react-bootstrap";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  const handleEdit = (id) => {
    dispatch(editService(id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => handleEdit(o.id)}
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
