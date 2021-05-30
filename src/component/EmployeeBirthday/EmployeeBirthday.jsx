import React from 'react';

import './EmployeeBirthday.css';



const EmployeeBirthday = ({firstName, lastName, birthday}) => {
    const date = new Date(birthday);
    let month = date.toLocaleString('eng', { month: 'long' });
    let user = `${firstName} ${lastName}`;
    let textAboutBirthday = `${user} - ${date.getDay()} ${month}, ${date.getFullYear()} year`

    return (
        <>
            <h3 className='EmployeeBirthday__title'>{month}</h3>
            <span className='EmployeeBirthday-date'>
                {textAboutBirthday}
            </span>
        </>
    )
}

export default EmployeeBirthday;