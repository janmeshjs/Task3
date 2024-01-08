import {useState, useEffect} from 'react'
import './Login.css' 
import backgroundImage from './Assets/background.png'; 


const Login = () => {
    const f_values = { username: "", password: "" };
    const [formValues, setFormValues] = useState(f_values);
    const [formErrors, setFormErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value }); 
        console.log(formValues);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsLoggedIn(true);
    };

    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isLoggedIn){
            console.log("Login Successful");
    }
    }, [formErrors]);



    const validate = (values) => {
        const errors = {}
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passregex = /^(?=.*[A-Z])(?=.*\d)(?=.*[A-Za-z\d@]).{8,}$/;
        if(!values.username) {
            errors.username = 'Username is required';
        }else if(!emailregex.test(values.username)){
            errors.username = "Invalid Email Format!"
        }
        if(!values.password) {
            errors.password = 'Password is required';
        }
        if(!passregex.test(values.password)) {
            errors.password = 'Invalid password format';
        }

        return errors;
    };

    return(
    <div className='wrapper'>

        <img src={backgroundImage} alt="Task 3">
            </img>
        <form onSubmit={handleLogin}>
            {Object.keys(formErrors).length === 0 && isLoggedIn ? (<div className='success-message'>Logged In Successfully!</div>) : null }
            <div className='input-box'>
                <input type='text' name = "username" placeholder='Username' value = {formValues.username}
                onChange={handleChange}/>
            </div>
            <p>{formErrors.username}</p>
            <div className='input-box'>
                <input type='password' name = "password" placeholder='Password' value = {formValues.password} onChange={handleChange}/>
            </div>
            <p>{formErrors.password}</p>
            <button type='submit'>Login</button>
            <div className='forget-pass'>
                <a href='#'>Forgot your Password?</a>

            </div>

        </form>
    </div>
    )
}

export default Login;
