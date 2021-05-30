import React from 'react';
import {connect} from "react-redux";
import Loader from "../Loader";
import store, {loadUsers} from "../UsersStore";
import PropTypes from 'prop-types';

import './app.css';
import EmployeeBirthdayList from "../EmployeerBirthdayList";
import Employees from "../Emoloyees/Employees";

export const ActiveUserForUser = React.createContext([]);

function isInArray(id, arr) {
    return arr.some(e => e.id === id);
}

class App extends React.Component {

    state = {
        activeUsers: JSON.parse(localStorage.getItem('activeUsers'))
    }

    async componentDidMount() {
        await this.props.loadUsers();
    }

    addActiveUser = (obj) => {
        let activeUsers = JSON.parse(localStorage.getItem('activeUsers'));
        localStorage.setItem('activeUsers',JSON.stringify([...activeUsers,obj]))

        this.setState({activeUsers: JSON.parse(localStorage.getItem('activeUsers'))})
    }

    removeActiveUser = (removeId) => {

        let activeUsers = JSON.parse(localStorage.getItem('activeUsers'));

        let deleteUserIndex = activeUsers.findIndex(el => el.id === removeId);
         activeUsers.splice(deleteUserIndex,1)

        localStorage.setItem('activeUsers',JSON.stringify([...activeUsers]))

        this.setState({activeUsers: JSON.parse(localStorage.getItem('activeUsers'))})

    }


    render() {
        const {activeUsers} = this.state;

        const {users, isLoading, hasError} = this.props;


        if (isLoading) {
            return <Loader/>
        }
        if (hasError) {
            return <p>Error occurred!!!</p>
        }


        return (


                <div className='Employee'>
                    <div className='Employee-left'>
                        <ActiveUserForUser.Provider value={activeUsers}>
                        <Employees
                            users={users}
                            addActiveUser={this.addActiveUser}
                            removeActiveUser={this.removeActiveUser}
                        />
                        </ActiveUserForUser.Provider>
                    </div>
                        <EmployeeBirthdayList activeUsers={activeUsers}/>
                </div>



        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    isLoading: state.isLoading,
    hasError: state.hasError
})

const mapDispatchToProps = (dispatch) => ({
    loadUsers: () => dispatch(loadUsers()),
})

App.defaultProps = {
    users: [],
}

App.protoType = {
    users: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(App);





