import React, { PropTypes } from 'react';

const Footer = ({ startYear }) => {
  const endYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Part of the{' '}
        <a href="https://energytransitionmodel.com/">Energy Transition Model</a>
        <br />
        Developed by Quintel Intelligence
        &copy; {startYear}{endYear !== startYear ? `-${endYear}` : null}
      </p>
      <p>
        <a href="https://energytransitionmodel.com/privacy">Privacy</a>
        {' '}|{' '}
        <a href="https://energytransitionmodel.com/terms">Terms of Service</a>
        <br />
        Icons by Vectors Market and Freepik at{' '}
        <a href="http://www.flaticon.com/">Flaticon</a>.
      </p>
    </footer>
  );
};

Footer.defaultProps = { startYear: 2016 };
Footer.propTypes = { startYear: PropTypes.number };

export default Footer;
