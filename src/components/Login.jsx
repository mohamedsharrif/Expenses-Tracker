// import React, { useState } from 'react'

// const Login = ({setUser,setPass}) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('')
// function handleSubmit(event){
//     event.preventDefault();
//     setUser(username);
//     setPass(password);
//     console.log(username);
// }
//   return (
//     <div className='login-contaner'>
//       <form onSubmit={handleSubmit}>
//         <input className='username' type="text" placeholder='Username'
//         onChange={(e)=> setUsername(e.target.value)}
//         />
//         <input className='password' type="text" placeholder='password' 
//         onChange={(e)=> setPassword(e.target.value)}
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   )
// }

// export default Login
// React Component
import React, { useState } from 'react';

const Login = ({ setUser, setPass }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
    setPass(password);
    console.log(username);
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
