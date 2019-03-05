import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {
  const { profile } = props;

  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li>
        <button onClick={props.signOut} style={buttonStyles}>
          Log Out
        </button>
      </li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

const buttonStyles = {
  background: 'none', 
  border: 'none', 
  color: 'white',
  cursor: 'pointer'
}

export default connect(null, mapDispatchToProps)(SignInLinks);
