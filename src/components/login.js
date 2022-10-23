import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './sign_img';
import { NavLink,useNavigate } from 'react-router-dom';

export default function Login (){
    const [inputValue, setInputValue] = useState({
        email:"",
        password:""
    })
    console.log(inputValue)
    const toFibonacci = useNavigate()

    // array of form data to store in local server
    const [data, setData] = useState([])

    const getData = event =>{
        const {value, name} = event.target;

    setInputValue(()=>{
                return{
                    ...inputValue,
                    [name] : value
                }
            } 
        )
    }

    // onClick event of submit button
    const addData = (props)=>{

        // Avoid default behaviour of submit button to reload the page
        props.preventDefault();
        // Getting user data from the local storage
        const getuserArray = localStorage.getItem("user1")
        console.log(getuserArray)
        // Vlaidating the user information properly
        const {email, password} = inputValue
        // adding alerts for blank inputs
        if (email === "" || !email.includes("@")){
            alert("Please enter a valid email address")
        }else if (password === ""){
            alert("Password field is required")
        }else if (password.length < 6 || password.length > 12){
            alert("password length should be between 6-12")
        }else{
            if (getuserArray && getuserArray.length){
                // using JSON.parse the JSON file output converted to array of object and passed through the variable userData
                const userData = JSON.parse(getuserArray)
                // email and password are stored in userLogin variable only if they are equal to the email and password
                // otherwise the userLogin will be a blank array
                const userLogin = userData.filter((el, k)=>{
                    return el.email === email && el.password === password
                })

                // therefore it the array is blank then show the alert as invalid entry
                if (userLogin.length === 0){
                    alert("Invalid Details!")
                }else{
                    console.log("User Login Successful")
                    alert("User Login Successful")
                    toFibonacci("/fibonacci")
                }
            }
        }
    }   


    return(
            <section className='d-flex justify-content-around align-items-center' style = {{height:"36rem"}}>
                <div className='left-data mt-3 style = {{width:100%}}'>
                    <h3 className='text-center'>Log In</h3>
                     <Form>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                            <Form.Control name = "email" type="email"  onChange = {getData} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                            <Form.Control name = "password" type="password" onChange = {getData} placeholder="Password" />
                        </Form.Group>
                        {/* Adding useState data to the local server for further use */}
                        <Button className = "col-lg-12" onClick={addData} variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form> 

                    <div className='d-flex justify-content-between pt-4' >
                        <p>Haven't registered yet?</p>
                        <NavLink to = "/">
                            <p>Sign Up</p>
                        </NavLink>
                    </div>
                </div>
                <SignImg />
            </section>
    );
}