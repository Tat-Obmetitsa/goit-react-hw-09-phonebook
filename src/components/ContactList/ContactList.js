import React, {Component} from 'react';
import {connect} from 'react-redux';
import s from '../ContactList/ContactList.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
class ContactList extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contactList, deleteContact, loadingContacts } = this.props;
    return (
      <>
        {loadingContacts && <h1>Loading...</h1>}
        <ul className={s.form__list}>
          {contactList.map(({ id, name, number }) => (
            <li key={id} className={s.form__item}>
              <span className={s.text}>{name}: </span>
              <span className={s.text}>{number}</span>
              <button
                type="button"
                className={s.form__list_button}
                onClick={() => deleteContact(id)}
              >
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const { getIsLoading, filterContacts } = contactsSelectors;

const mapStateToProps = (state) => ({
  loadingContacts: getIsLoading(state),
  contactList: filterContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  loadingContacts: PropTypes.bool,
  deleteContact: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
