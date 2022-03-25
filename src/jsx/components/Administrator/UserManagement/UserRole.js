import React, { useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import { getUserRolesAction } from '../../../../store/actions/UserAction';
import PageTitle from "../../../layouts/PageTitle";

const UserRole = (props) => {

    const data = props.userroles;

    console.log(data);

    useEffect(() => {
        props.fetchData();
    })

    function showUserRoles(listdata) {
        let result = null;
        if (listdata.length > 0){
            result = listdata.map((data,index) => {
                return (
                    <>
                        <tr>
                            <td className="font-w500">
                                {data.roleid}
                            </td>
                            <td className="font-w500">
                                {data.rolename}
                            </td>
                            <td className="font-w500">
                                {data.roledescription}
                            </td>
                        </tr>
                    </>
                )
            })  
        }
        return result;
    };

    return (
        <Fragment>
            <>
                <PageTitle activeMenu="User Role" motherMenu="User Management" />
                <div className="row">
                    <div className="col-xl-12 col-xxl-12 col-lg-12">
                        <div className="card">
                            <div className="card-header d-block d-sm-flex border-0">
                                <div>
                                    <h4 className="fs-20 text-black">User role</h4>
                                </div>  
                            </div>
                            <div className="card-body tab-content p-0">
                                <div className="table-responsive">
                                    <table className="table shadow-hover card-table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <strong>Role ID</strong>
                                                </th>
                                                <th>
                                                    <strong>Role name</strong>
                                                </th>
                                                <th>
                                                    <strong>Role description</strong>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {showUserRoles(data)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
      </Fragment>
        );
    };

const mapStateToProps = state => {
    return {
        userroles: state.userroles
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchData : () => {
            dispatch(getUserRolesAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserRole);
