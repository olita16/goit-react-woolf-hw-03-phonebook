import css from '../Message/Message.module.css';
import PropTypes from 'prop-types';

const NoContactsMessage = ({ name }) => {
  return <p className={css.message}>No contacts with name: {name}</p>;
};

NoContactsMessage.propTypes = {
  name: PropTypes.string,
};

export default NoContactsMessage;