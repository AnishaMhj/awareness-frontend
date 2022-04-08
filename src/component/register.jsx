import React, { useState } from 'react'
import axios from "axios";

export default function Register() {

    const handleClick = async () => {
        // 1. Get the form values and validate
        const data = {
            name: username,
            email: email,
            password: password
        }


        //2. If the forms values are valudate correctly then send it to the serve


        axios.post('http://localhost:8000/api/users', {
            name: username,
            email: email,
            password: password
        })
            // 3. If received message is not error then display sucess message 

            .then(function (response) {
                console.log("true", response);
            })
            // 4. else display error message  
            .catch(function (ex) {
                if (ex.response && ex.response.status === 400) {
                    console.log("false", ex.response.data);
                }
            });


    }

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>
                    UserName:
                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="name" value={username} /><br />
                </label>
                <label>
                    Email:
                    <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                </label>
                <label>
                    Password:
                    <input type="text" name="name" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                </label>
                <input type="submit" value="Submit" onClick={handleClick} />
            </form>
        </div>
    )
}
