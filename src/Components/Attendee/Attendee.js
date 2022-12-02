import React, { useState } from 'react'
import AttendanceDetails from '../AttendanceDetails/AttendanceDetails';
import './Attendee.css'

const Attendee = (props) => {

    const [detailsOpen, setDetailsOpen] = useState(false);

    const { attendance, branch, id, name, position, profile_pic, username } = props.data

    const details = [];

    for (let key in attendance) {

        details.push({ date: key, info: attendance[key] })
    }

    console.log(details);

    return (
        <>
            <tr>
                <td className='profile_pic'><img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80" alt="" /></td>
                <td className='employee-id'>{id}</td>
                <td className='employee-name'>{name}</td>
                <td className='employee-position'>{position}</td>
                <td className='employee-attendance'><button onClick={() => setDetailsOpen(true)} className='attendance-btn'>Show Attendance</button></td>
            </tr>
            { detailsOpen &&
                <div className="details">
                    <table className='table-details'>
                        <tr className='details-tr-heading details-tr'>
                            <th className='details-date'>Date</th>
                            <th className='details-th'>Status</th>
                            <th className='details-th'>Times</th>
                        </tr>
                        {details.map(detail => <AttendanceDetails data={detail}></AttendanceDetails>)}
                    </table>
                    <button onClick={() => setDetailsOpen(false)} className='close-btn'>X</button>
                </div>
            }
        </>
    );
};

export default Attendee;