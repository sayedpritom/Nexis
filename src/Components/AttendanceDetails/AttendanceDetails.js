import React from 'react';
import './AttendanceDetails.css'

const AttendanceDetails = (props) => {

    const {date, info} = props.data;

    console.log(props.data);

    return (
        <tr className='details-tr'>
            <td className='details-td'>{date}</td>
            <td className='details-td'>{info?.status}</td>
            <td className='details-td'>
                {info.times.map(time => <span>{time}, </span>)}
            </td>
        </tr>
    );
};

export default AttendanceDetails;