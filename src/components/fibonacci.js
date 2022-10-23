import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import SignImg from './sign_img';
import { NavLink } from "react-router-dom";

export default function Fibonacci() {
    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState(null)

    const [list, setList] = useState([]);



    function printFibonacci() {

        let a = Number(firstNumber)
        let b = Number(secondNumber)
        let fibo = 0;
        let tempArr = list;

        for (let i = 0; i < 10; i++) {
            fibo = a + b;
            tempArr.push(fibo.toString())
            console.log(fibo)
            a = b;
            b = fibo;
        }
        setList(tempArr)
        setFirstNumber(null)
        setSecondNumber(null)

    }
    const listItems = list.map((number) => <li className="mt-2" key={number}>{number}</li>)


    return (
            <section className='d-flex justify-content-around align-items-center' style = {{height:"36rem"}} >
                <div className='left-data mt-3 style = {{width:100%}}'>
                    <h3 className='text-center'>Fibonacci Numbers:</h3>
                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                        <Form.Control id="firstNumber" value={firstNumber} type="number" onChange={(e) => setFirstNumber(e.target.value)} placeholder="Enter First Number " />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                        <Form.Control id="secondNumber" value={secondNumber} type="number" onChange={(e) => setSecondNumber(e.target.value)} placeholder="Enter Second Number " />
                    </Form.Group>
                    {/* Adding useState data to the local server for further use */}
                    <Button className="col-lg-12 " onClick={printFibonacci} variant="primary" >
                        Submit
                    </Button>
                    
                    <NavLink className = "mt-5" to = "/login">
                        <Button className="col-lg-12 mt-2"  variant="secondary" active >
                            Log Out
                        </Button>
                    </NavLink>
                </div>
                <ol className="mt-5 ms-5">
                        {listItems}
                    </ol>
                <SignImg  />
            </section>


    );
}