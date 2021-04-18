import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';


const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    width: 'inherit'
  },
};

export default function AppBar () {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (<header  style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>)
};



// Without hooks

// import React from 'react';
// import { connect } from 'react-redux';
// import Navigation from '../Navigation';
// import UserMenu from '../UserMenu';
// import AuthNav from '../AuthNav';
// import { authSelectors } from '../../redux/auth';

// const styles = {
//   header: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//     width: 'inherit'
//   },
// };
// const AppBar = ({ isAuthenticated }) => (
//   <header  style={styles.header}>
//     <Navigation />
//     {isAuthenticated ? <UserMenu /> : <AuthNav />}
//   </header>
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state)
// })


// export default connect(mapStateToProps)(AppBar);