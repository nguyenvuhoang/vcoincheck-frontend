import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getUsersAction } from '../../../../store/actions/UserAction';
import UserComponent from './UserComponent';

const UserList = (props) => {

    const users = props.users;

    useEffect(() => {
        props.fetchUsers();
    })

    function showUsers(userData) {
        let result = null;
        if (userData.length > 0){
            result = userData.map((user,index) => {
                return (
                    <UserComponent key={index} user={user} index={index}/>
                )
            })  
        }
        return result;
    };

    return (
            <>
                <div className="card-header d-block d-sm-flex border-0">
                    <div>
                        <h4 className="fs-20 text-black">User list</h4>
                    </div>  
                </div>
                <div className="card-body tab-content p-0">
                    <div className="table-responsive">
                        <table className="table shadow-hover card-table">
                            <thead>
                                <tr>
                                    <th>
                                        <strong>No</strong>
                                    </th>
                                    <th>
                                        <strong>User name</strong>
                                    </th>
                                    <th>
                                        <strong>First name</strong>
                                    </th>
                                    <th>
                                        <strong>Last name</strong>
                                    </th>
                                    <th>
                                        <strong>Gender</strong>
                                    </th>
                                    <th>
                                        <strong>Address</strong>
                                    </th>
                                    <th>
                                        <strong>Email</strong>
                                    </th>
                                    <th>
                                        <strong>Role name</strong>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {showUsers(users)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    };

const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUsers : () => {
            dispatch(getUsersAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);
