import React, {useState} from "react";
import './Employees.css';
import User from "../User";


const Employees = ({users, addActiveUser, removeActiveUser}) => {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    users.sort((a, b) => {
        let lastNameA = a.lastName.toLowerCase();
        let lastNameB = b.lastName.toLowerCase();

        if (lastNameA < lastNameB) {
            return -1;
        }
        if (lastNameA > lastNameB) {
            return 1;
        }

        return 0;
    });




    let arr = [];
    arr_EN.forEach((el) => {
        arr.push({
            [el]:[...users].filter((user) => user.lastName[0] === el)
        })
    })


    return (
        <div className='Employees'>
            <h2>Employees</h2>
            <div className='Employees__inner'>
                {

                    arr.map((el,index) => (
                        <span className='Employee__item'>
                            <h2>{arr_EN[index]}</h2>
                        <ul className='Employees__list' >
                            {
                                (el[arr_EN[index]].length === 0) ?
                                    (<li className='not-users'> ----- </li>):(
                                        el[arr_EN[index]].map(user => (
                                            <li key={user.id} className='Employees__list-li'>
                                                <User
                                                    user={user}
                                                    addActiveUser={addActiveUser}
                                                    removeActiveUser={removeActiveUser}
                                                />
                                            </li>
                                        ))
                                    )
                            }

                        </ul>
                        </span>
                    ))
                }

            </div>
        </div>
    )
}

export default Employees;

// <ul className='Employees__list' >
//     {
//         (el.length === 0) ?
//             (<li> ----- </li>):(
//                 el[arr_EN[index]].map(user => (
//                     <li key={user.id} className='Employees__list-li'>
//                         <User
//                             user={user}
//                             addActiveUser={addActiveUser}
//                             removeActiveUser={removeActiveUser}
//                         />
//                     </li>
//                 ))
//             )
//     }
//
// </ul>

// arr.map((el,index) => {
//     // console.log(el[arr_EN[index]].length)
//     if (el[arr_EN[index]].length === 0){
//         return (<li>
//             ----
//         </li>)
//     }else {
//
//         return (
//
//         )
//     }
//
// })