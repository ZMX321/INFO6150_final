import './ExpenseCard.css'

function ExpenseCard(props) {
    function cancelCardHandler() {
        props.onDeleteItem(props.item.title);
    }
    return <div className={`expense_card ${props.item.filted}`} >
                <div className="content">
                    <div className="expense_title">{props.item.title}</div>
                    <div className="amount">${props.item.amount}</div>
                </div>
                <div className="expense_button">
                    <button className="card_button">
                        <img src={`./img/${props.item.cate}.png`} alt="" />
                    </button>
                    <button className="card_button" onClick={cancelCardHandler}>
                        <img src="./img/cancel.png" alt="cross symbol on delete button" />
                    </button>
                </div>
            </div>
}

export default ExpenseCard;