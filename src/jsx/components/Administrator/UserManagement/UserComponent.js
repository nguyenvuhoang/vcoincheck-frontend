const UserComponent = ( {user,index} ) => {
    return (
        <tr>
            <td className="font-w500">
                {index + 1}
            </td>
            <td className="font-w500">
                {user.username}
            </td>
            <td className="font-w500">
                {user.firstname}
            </td>
            <td className="font-w500">
                {user.lastname}
            </td>
            <td className="font-w500">
                {user.gender === 1 ? "Male":"Female"}
            </td>
            <td className="font-w500">
                {user.address}
            </td>
            <td className="font-w500">
                {user.email}
            </td>
            <td className="font-w500">
                {user.role}
            </td>
        </tr>
    );
};

export default UserComponent;
