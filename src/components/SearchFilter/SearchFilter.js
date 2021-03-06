import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import s from './SearchFilter.module.css';
import PropTypes from 'prop-types';


export default function SearchFilter () {
  const dispatch = useDispatch();
  const onChange = useCallback((ev) => dispatch(changeFilter(ev.target.value)), [dispatch]);
  const value = useSelector(contactsSelectors.getFilter);

  return (
  <label className={s.form__label}>
    Find contacts by name
    <input type='text' name='name' value={value} onChange={onChange} className={s.form__input} />
  </label>
)
};

SearchFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};



// Without hooks

// import React from 'react';
// import { connect } from 'react-redux';
// import { contactsSelectors, changeFilter } from '../../redux/contacts';
// import s from './SearchFilter.module.css';
// import PropTypes from 'prop-types';


// const SearchFilter = ({ value, onChange }) => (
//   <label className={s.form__label}>
//     Find contacts by name
//     <input type='text' name='name' value={value} onChange={onChange} className={s.form__input} />
//   </label>
// );

// SearchFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (ev) => dispatch(changeFilter(ev.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
