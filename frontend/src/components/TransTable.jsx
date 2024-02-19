import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TransTable = () => {
  const items = useSelector((state) => state.items.items);
  const month = useSelector((state) => state.month.month);

  return (
    <div className="overflow-x-auto m-5">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Title</th>
            <th className="text-center">Description</th>
            <th className="text-center">Price</th>
            <th className="text-center">Category</th>
            <th className="text-center">Sold</th>
            <th className="text-center">Image</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.sold}</td>
                  <td>{item.image}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TransTable;
