import css from './Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <div className={css.sectionWrapper}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

Section.prototype = {
  children: PropTypes.node,
  title: PropTypes.string,
};
