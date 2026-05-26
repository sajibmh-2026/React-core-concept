

const Friend = ({ friend }) => {
    console.log(friend)

    const {name, email} = friend;

    return (
        <div className="card">
            <h4>Name:{friend.name}</h4>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default Friend;