import css from './Notification.module.css';
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <div>
      <h2 className={css.notificationTitle}>{message}</h2>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string,
};
