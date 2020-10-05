import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePortfolio } from '../../actions/profileActions';

class Portfolio extends Component {
  onDeleteClick(id) {
    this.props.deletePortfolio(id);
  }

  render() {
    const portfolio = this.props.portfolio.map((ref) => (
      <tr key={ref._id}>
        <td>{ref.name}</td>
        <td>{ref.link}</td>

        <td>
          <button
            onClick={this.onDeleteClick.bind(this, ref._id)}
            className="btn-small btn-red"
          >
            <i className="fas fa-times fa-sm"></i>
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h5 className="text-info mb-2">Portfolio</h5>
        <table className="table table-responsive table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Link</th>

              <th />
            </tr>
            {portfolio}
          </thead>
        </table>
      </div>
    );
  }
}

Portfolio.propTypes = {
  deletePortfolio: PropTypes.func.isRequired
};

export default connect(null, { deletePortfolio })(Portfolio);
