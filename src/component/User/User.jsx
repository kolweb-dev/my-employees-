import React, {useState, useRef, useContext} from "react";
import {ActiveUserForUser} from "../app";

import './User.css';



const User = ({user, addActiveUser, removeActiveUser}) => {

    const activeUser = useContext(ActiveUserForUser);
    // console.log(`${user.lastName}`,activeUser,user)
    const {firstName,lastName} = user;
    const [isChecked, setIsChecked] = useState(null);


    let valueForInput = Math.random();
    // console.log('fdgfdg',isChecked === true || user.id === activeUser.id)
    return (
        <div className='User'>
            <h3 className='User__title'
                style={{color: (isChecked || !!(activeUser.find(el => el.id === user.id))) ? 'blue' : 'black'}}
            >{`${lastName} ${firstName}`}</h3>

            <div className='User_radio'>
                <label >
                    <input type="radio"
                           name={`BIRTH${valueForInput}`}
                           value='active'

                           onChange={(e) => {
                               setIsChecked(true);
                               addActiveUser(user)
                           }}
                           checked={isChecked === true || !!(activeUser.find(el => el.id === user.id))}
                    />
                     active
                </label>
                <label>
                    <input type="radio"
                           name={`BIRTH${valueForInput}`}
                           value='notActive'

                           onChange={(e) => {
                               setIsChecked(false)
                               removeActiveUser(user.id)
                           }}
                           checked={isChecked === false}
                    />
                    not active
                </label>

            </div>

        </div>
    )
}

export default User;

