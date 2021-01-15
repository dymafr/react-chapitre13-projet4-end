import React from 'react';

const Loader = () => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className="d-flex flex-row justify-content-center align-items-center w-100"
    >
      <img alt="loading gif" src="https://i.redd.it/ounq1mw5kdxy.gif" />
    </div>
  );
};

export default Loader;
