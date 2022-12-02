import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div className='spinner-container'>
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;