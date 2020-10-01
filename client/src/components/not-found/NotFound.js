import React from 'react';

export default () => {
  return (
    <div className="row">
      <div className="col col-lg-6 col-md-8 col-sm-12 m-auto text-center p-5">
        <h1 className="formHeader p-2 ">
          {' '}
          <i className="fas fa-exclamation-triangle pageNotFound mr-2" />
          Page Not Found
        </h1>
        <div style={{ backgroundColor: 'white', padding: '10px' }}>
          <h5>Sorry, this page does not exist</h5>
          <p>Please refresh the page and try again</p>
        </div>
      </div>
    </div>
  );
};
