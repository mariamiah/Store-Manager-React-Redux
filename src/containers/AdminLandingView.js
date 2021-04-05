import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminLanding from '../components/AdminLanding';
import FetchProductsAction from '../actions/FetchProductsAction';

export class AdminLandingView extends Component {
  componentDidMount() {
    this.props.FetchProductsAction();
  }

  render() {
    if (this.props.product === []) return null;
    return (
      <div>
        <AdminLanding items={this.props.product}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.FetchProductsReducer.Products,

});
AdminLandingView.propTypes = {
  FetchProductsAction: PropTypes.func.isRequired,

};
export default connect(mapStateToProps, { FetchProductsAction })(AdminLandingView);
