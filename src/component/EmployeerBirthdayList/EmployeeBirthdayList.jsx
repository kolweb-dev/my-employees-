import React from "react";

import './EmployeeBirthdayList.css';
import EmployeeBirthday from "../EmployeeBirthday";

const EmployeeBirthdayList = ({activeUsers}) => {



    return(
        <div className='EmployeeBirthday'>
            <h2>Employees birthday</h2>
            <div className='EmployeeBirthday__list'>
                <ul>
                    {
                        activeUsers.map(user => (
                            <li className='EmployeeBirthday__list-li' key={`${user.id + Math.random()}`}>
                                <EmployeeBirthday
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    birthday={user.dob}
                                />
                            </li>
                        ))
                    }


                </ul>
            </div>
        </div>

    )
}

export default EmployeeBirthdayList;