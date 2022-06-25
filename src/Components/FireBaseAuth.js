import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

function FireAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  let click = async () => {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    console.log(res);
  }


  //This is a kind of tracker where it keeps track of user when the state is changed from register to login
  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) =>
      setUser(user))

    return () => {
      unsub(); //Will clean up the event applied
    }
  }, [])

  let signin = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  }

  let signout = async () => {
    await auth.signOut();
  }


  return (
    <>{
      user == null?
        <div>
          <label htmlFor='email'>E-mail</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <label htmlFor='pass'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

          <button onClick={signin}>Sign In</button>
        </div>
        :
        <>
          <div>{user.email}</div>
          <button onClick={signout}>Logout</button>
        </>
    }
    </>
  )
}

export default FireAuth