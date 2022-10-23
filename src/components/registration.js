import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './sign_img';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Registration() {
    const [inputValue, setInputValue] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    const toLogin = useNavigate()
    console.log(inputValue)
    // array of form data to store in local server
    const [data, setData] = useState([])

    // const [lastName, setLastName] = useState(null)
    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)
    
    const getData = event =>{
        const {value, name} = event.target;

        setInputValue(()=>{
                return{
                    ...inputValue,
                    [name] : value
                }
            } 
        )
           
        // console.log (name, value) will print the key as name and value as user inpur
        // if (event.id = "firstName"){
        //     setFirstName = event.target.value;
        // }
        // if (event.id = "lasttName"){
        //     setLastName = event.target.value;
        // }
        // if (event.id = "email"){
        //     setEmail = event.target.value;
        // }
        // if (event.id = "password"){
        //     setPassword = event.target.value;
        // }
    }

    // Adding data to the local server
    const addData = (props)=>{
        // Avoid default behaviour of submit button to reload the page
        props.preventDefault();
        // Vlaidating the user information properly
        const {firstname, lastname, email, password} = inputValue
        // adding alerts for blank inputs
        if (firstname === ""){
            alert("First name field is required")
        }else if (lastname === ""){
            alert("Last name field is required")
        }else if (email === "" || !email.includes("@")){
            alert("Please enter a valid email address")
        }else if (password === ""){
            alert("Password field is required")
        }else if (password.length < 6 || password.length > 12){
            alert("password length should be between 6-12")
        }else{
            // if all the if conditions are false then the data is filled successfully so we will now add it in the local server
            // storing the stringified value in JSON with key as user1 to the localStorage
            // first blank data will be saved and after that the inputValue data will be added to the file
            // to form the array of objects.
            alert("Congratulations !, you have registered successfully." )
            
            localStorage.setItem("user1", JSON.stringify([...data,inputValue]))
            toLogin("/login")
        }
    }   

    return (
        <div className='container mt-3'>
            <section className='d-flex justify-content-around align-items-center'style = {{height:"35rem"}} >
                <div className='left-data mt-3 style = {{width:100%}}'>
                    <h3 className='text-center'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-12" controlId="formBasicName">
                            <Form.Control name = "firstname" type="text"  onChange = {getData} placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-12" controlId="formLastName">
                            <Form.Control name = "lastname" type="text"  onChange = {getData} placeholder="Enter Last Name" />
                        </Form.Group>

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
                            Register
                        </Button>
                    </Form>
                    <div className='d-flex justify-content-between pt-4' >
                        <p>Already have an account?</p>
                        <NavLink to = "/login" >
                            <p>Log in</p>
                        </NavLink>
                        
                    </div>
                </div>
                <SignImg />
            </section>
        </div>
    );
}