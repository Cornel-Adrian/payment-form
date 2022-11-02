


function Input({ type, placeholder, onChangeHandler, value, maxlength=undefined }) {

    return (
        <div className='padding'>
            <input type={type} placeholder={placeholder} onChange={onChangeHandler} value={value}  maxLength={maxlength}></input>
        </div >
    );
}


export default Input;