import React, { useEffect, useState } from 'react';
import AttendanceDetails from '../../Components/AttendanceDetails/AttendanceDetails';
import Attendee from '../../Components/Attendee/Attendee';
import Loading from '../../Components/Loading/Loading';
import './Attendance.css'

const Attendance = () => {

    const [loading, setLoading] = useState(true)
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
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='attendance-heading'>Attendance Information</h1>
            <table className='table'>
                <thead className='table-head'>
                    <tr className='table-row'>
                        <th className='profile-pic-row table-heading'>Profile Picture</th>
                        <th className='table-heading'>Id</th>
                        <th className='table-heading'>Name</th>
                        <th className='table-heading'>Position</th>
                        <th className='table-heading'>Attendance</th>
                    </tr>
                </thead>
                <tbody className='tablebody'>
                    {
                        attendance.map(data => <Attendee data={data} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;
