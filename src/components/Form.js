import Input from "./Input";
import Button from "./Button";
import React, { useState } from "react";

function Form() {
    const [firsName, setFirsName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cardNumber, setcardNumber] = useState("");
    const [cvc, setCvc] = useState("");

    function HandleClear(e) {
        setFirsName("");
        setlastName("");
        setEmail("");
        setExpiryDate("");
        setcardNumber("");
        setCvc("");
    }

    const HandleSubmit = e => {
        e.preventDefault();
        console.log(firsName + " " + lastName + " " + email + " " + expiryDate + " " + cardNumber + " " + cvc + " ");
    }

    //
    const HandleCvcChange = (e) => {
        let currentInput = e.target.value;
        if (currentInput.length > 3) {
            window.alert("CVC shouldn't exceed 3 numbers");
        }
        else
            setCvc(e.target.value);
    }

    const HandleCardNumberChange = (e) => {
        let currentInput = e.target.value;
        if (currentInput.length > 9) {
            window.alert("Card number shouldn't exceed 9 numbers");
        }
        else
            setcardNumber(e.target.value);
    }


    return (
        <form onSubmit={HandleSubmit}>
            <div className="row">
                <Input type='text' value={firsName} placeholder='First Name' onChangeHandler={(e) => setFirsName(e.target.value)} />
                <Input type='text' value={lastName} placeholder='Last Name' onChangeHandler={(e) => setlastName(e.target.value)} />
            </div>
            <Input type='email' value={email} placeholder='E-mail' onChangeHandler={(e) => setEmail(e.target.value)} />
            <Input type='number' value={cardNumber} min='0' max='999999999' placeholder='Card number' onChangeHandler={HandleCardNumberChange} />
            <div className="row">
                <Input type='number' value={expiryDate} placeholder='MM/YYYY' onChangeHandler={(e) => setExpiryDate(e.target.value)} />
                <Input type='number' value={cvc} min='0' max='999' placeholder='CVC' maxlength={3} onChangeHandler={HandleCvcChange} />
            </div>
            <div className="row center padding">
                <Button type="reset" text="Clear" onClickHandler={HandleClear}></Button>
                <Button type="submit" text="Submit" onClickHandler={HandleSubmit}></Button>
            </div>
        </form>
    )


}

export default Form;