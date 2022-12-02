import React, { useEffect, useState } from 'react';
import AttendanceDetails from '../../Components/AttendanceDetails/AttendanceDetails';
import Attendee from '../../Components/Attendee/Attendee';
import './Attendance.css'

const Attendance = () => {

    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("access_token")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                const array = []
                for (let key in data) {
                    array.push(data[key])
                }
                setAttendance(array)
            })
    }, [])

    console.log(attendance);

    return (
        <div>
            <h1 className='attendance-heading'>Attendance Information</h1>
            <table className='table'>
                <tr className='table-head'>
                    <th className='profile-pic-row'>Profile Picture</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Attendance</th>
                </tr>
                {
                    attendance.map(data => <Attendee data={data} />)
                }
            </table>
        </div>
    );
};

export default Attendance;
