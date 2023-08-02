import React from 'react';

const Profile = (props) => {
    // Props : adalah 'Parameter yang diberikan dari parent Component
    const { name,full_name,position,number } = props;
    return (
        <div>
        <h2> Welcome to Manchester, Sr. {full_name} </h2>
        <h3> Your nickname shall be {name} </h3>
        <p> 
            You have been ASSIGNED as {position}
        </p>
        <p>
            On coming season you will wear number {number} 
            <hr/>
        </p>
        </div>
    ); 
}

export default Profile;