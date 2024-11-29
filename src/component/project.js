import './project.css'
const UserProfileCard = ({img,name,email,age,phone,address}) => {
    return(
        <div className="card">
            <h1>User Profile Card</h1>
            <hr/>
            <img src={img}/>
            <h2>Name :- {name}</h2>
            <h3>E-mail :- {email}</h3>
            <h3>Age :- {age}</h3>
            <p>Phone No :- {phone}</p>
            <p>Add :- {address}</p>
        </div>
    )
}
export default UserProfileCard;