


function Button({ type, text, value, onClickHandler }) {

    return (
        <div>
            <button className="button overflow-hidden" type={type} value={value} onClick={onClickHandler}> {text} </button>
        </div>
    );
}



export default Button;