import React, { useEffect, useState } from 'react'
import { database } from '../firebase'

function Firebase() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    let createUserInDB = async () => {
        //    let res =  await database.users.add({name,age});
        let res = await database.users.doc("121998").set({ name, age }); //Create operation in Database
        console.log(res);
    }

    useEffect(async () => {
        let uid = "Xocg08z1WxjRNmtmRTP9";
        // let data = await database.users.doc(uid).get();
        let data = await database.users.get();
       data.forEach((obj)=>console.log(obj.data()))
    })

    let update = async()=>{
        let uid = "Xocg08z1WxjRNmtmRTP9"
        await database.users.doc(uid).update({
            name,age
        });
    }
    return (
        <>

            <div >
                <label htmlFor='name'>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} ></input>

                <label htmlFor='age'>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>

                <button onClick={update}>Create</button>
            </div>
            
        </>

    )
}
export default Firebase;