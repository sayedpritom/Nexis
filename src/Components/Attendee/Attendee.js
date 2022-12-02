import React from 'react'
import './Attendee.css'

const Attendee = (props) => {
    const { attendance, branch, id, name, position, profile_pic, username } = props.data
    console.log(profile_pic);
    return (
        <tr>
            <td className='profile_pic'><img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80" alt="" /></td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{position}</td>
            <td><button className='attendance-btn'>Show Attendance</button></td>

        </tr>
    );
};

export default Attendee;