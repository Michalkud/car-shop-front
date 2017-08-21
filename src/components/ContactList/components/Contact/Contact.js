import React from 'react';
import { Button } from 'antd';
//import PropTypes from 'prop-types';

import propTypes from './propTypes';

const Contact = (props) => (
    <Button onClick={(e) => props.onClick(props.id)}>
        {props.name} {props.phone}
    </Button>
);

Contact.defaultProps = {};
Contact.propTypes = {
    ...propTypes
};

export default Contact;






