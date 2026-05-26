

const Friend = ({ friend }) => {
    console.log(friend)

    const {name, email ,phone} = friend;

    return (
        <div className="card">
            <h4>Name:{friend.name}</h4>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default Friend;