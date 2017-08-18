import React from 'react';
//import PropTypes from 'prop-types';

import propTypes from './propTypes';

const Contact = (props) => (
    <div>
        {props.name} {props.phone}
    </div>
);

Contact.defaultProps = {};
Contact.propTypes = {
    ...propTypes
};

export default Contact;






