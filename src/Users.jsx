import { use } from "react";

const Users = ({ fetchUsers }) => {

    const users = use(fetchUsers);
    // console.log(users);
    
    
    return (
        <div className="card">
            <h2>User: {users.length} </h2>
        </div>
    );
};

export default Users;