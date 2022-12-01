import React, { useEffect } from 'react';

const Attendance = () => {
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("access_token")}`
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    console.log(localStorage.getItem("access_token"));
    return (
        <div>

        </div>
    );
};

export default Attendance;
