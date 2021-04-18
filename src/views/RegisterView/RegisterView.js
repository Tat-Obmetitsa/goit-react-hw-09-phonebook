import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterView.module.css';



export default function RegisterView () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  


  const handleChange = ({ target: { name, value } }) =>  {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:  console.warn(`Option ${name} is not processed!`);
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }))
    setName('');
    setEmail('');
    setPassword('');
  };
    return (
      <div >
        <h1 className={s.form__title}>Registration</h1>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={s.form}
        >
          <label className={s.form__label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className={s.form__input}
            />
          </label>

          <label className={s.form__label} >
            Email
            <input
              type="email"
              name="email"
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              value={email}
              onChange={handleChange}
              className={s.form__input}
            />
          </label>

          <label className={s.form__label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={s.form__input}
            />
          </label>

          <button type="submit" className={s.form__button}>Sign in</button>
        </form>
      </div>
    );
}


// Without hooks

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authOperations } from '../../redux/auth';
// import s from './RegisterView.module.css';



// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div >
//         <h1 className={s.form__title}>Registration</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//           className={s.form}
//         >
//           <label className={s.form__label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               className={s.form__input}
//             />
//           </label>

//           <label className={s.form__label} >
//             Email
//             <input
//               type="email"
//               name="email"
//               pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
//               value={email}
//               onChange={this.handleChange}
//               className={s.form__input}
//             />
//           </label>

//           <label className={s.form__label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//               className={s.form__input}
//             />
//           </label>

//           <button type="submit" className={s.form__button}>Sign in</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps )(RegisterView);