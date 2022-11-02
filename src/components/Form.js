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

    function HandleSubmit(e) {
        console.log(firsName + " " + lastName + " " + email + " " + expiryDate + " " + cardNumber + " " + cvc + " ");
    }



    return (
        <div>
            <div className="row">
                <Input type='text' value={firsName} placeholder='First Name' onChangeHandler={(e) => setFirsName(e.target.value)} />
                <Input type='text' value={lastName} placeholder='Last Name' onChangeHandler={(e) => setlastName(e.target.value)} />
            </div>
            <Input type='email' value={email} placeholder='E-mail' onChangeHandler={(e) => setEmail(e.target.value)} />
            <Input type='number' value={cardNumber} min='0' max='999999999' placeholder='Card number' onChangeHandler={(e) => setcardNumber(e.target.value)} />
            <div className="row">
                <Input type='number' value={expiryDate} placeholder='MM/YYYY' onChangeHandler={(e) => setExpiryDate(e.target.value)} />
                <Input type='number' value={cvc} min='0' max='999' placeholder='CVC' maxlength={3} onChangeHandler={(e) => setCvc(e.target.value)} />
            </div>
            <div className="row center padding">
                <Button type="reset" text="Clear" onClickHandler={HandleClear}></Button>
                <Button type="submit" text="Submit" onClickHandler={HandleSubmit}></Button>
            </div>
        </div>
    )


}

export default Form;