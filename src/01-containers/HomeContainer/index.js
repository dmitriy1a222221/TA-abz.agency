import { connect } from 'react-redux';

import Home from '00-components/Home';
import { getUsers } from '03-actions/users';

const mapStateToProps = ({ users }) => ({
  users: users
});

const mapDispatchToProp = dispatch => ({
  getUsers: (params) => dispatch(getUsers(params))
});

export default connect(mapStateToProps, mapDispatchToProp)(Home);
