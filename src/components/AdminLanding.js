import React from 'react';
import parseDate from '../utils/helpers';

const AdminLanding = ({items}) => {
  return (
    <div>
      {items?.map((item, idx) => {
        return (
          <div id={idx} className="col-lg-4 card">
            <div className="card-deck">
            <div className="card border-success mb-3" style={{ maxWidth: '40rem' }}>
            <div className="card-header bg-transparent border-success"><h4 className="text-success mt-3">{item.product_name}</h4></div>
            <div className="card-body text-dark" id="pdtbody">
            <ul className="list-unstyled">
            <li>
Category:&nbsp;
              {item.category_name}
            </li>
            <li>
Date:
              {parseDate(item.date_added)}
            </li>
            <li>
Price:
              {item.price}
            </li>
            <li>
Code:
              {item.product_code}
            </li>
            <li>
Quantity:
              {item.product_quantity}
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
        )
      })}
    </div>

  )
}

export default AdminLanding;
