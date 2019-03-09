/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import parseDate from '../utils/helpers';

const AdminLanding = props => (
  <div className="col-lg-4 card">
    <div className="card-deck">
      <div className="card border-success mb-3" style={{ maxWidth: '40rem' }}>
        <div className="card-header bg-transparent border-success"><h4 className="text-success mt-3">{props.item.product_name}</h4></div>
        <div className="card-body text-dark" id="pdtbody">
          <ul className="list-unstyled">
            <li>
Category:&nbsp;
              {props.item.category_name}
            </li>
            <li>
Date:
              {parseDate(props.item.date_added)}
            </li>
            <li>
Price:
              {props.item.price}
            </li>
            <li>
Code:
              {props.item.product_code}
            </li>
            <li>
Quantity:
              {props.item.product_quantity}
            </li>
          </ul>
        </div>
        <div className="card-footer bg-transparent border-success">
          <button className="btn btn-success" type="submit">Modify</button>
          <button className="btn btn-secondary" id="btndelete" type="submit">Delete</button>
        </div>
      </div>
    </div>
  </div>
);
export default AdminLanding;
