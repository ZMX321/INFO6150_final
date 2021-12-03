import './AddExpenseForm.css'
import {useState} from 'react'

function AddExpenseForm(props){

    const [submitTitle,setSubmitTitle] = useState('');
    const [submitAmount,setSubmitAmount] = useState('');
    const [submitCate,setSubmitCate] = useState('');

    function getTitleValue(e){

        setSubmitTitle(e.target.value);
    }

    function getAmountValue(e){
        setSubmitAmount(e.target.value);
    }

    function getCateValue(e){
        setSubmitCate(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        
        const item = {
            id:Math.random(),
            title:submitTitle,
            amount:submitAmount,
            cate:submitCate,
            filted:'no_filted'
        }
        setSubmitTitle('');
        setSubmitAmount('');
        setSubmitCate('');

        props.onAddItem(item);
    }

    return <div className="form_container">
                <div className="form_pic">
                    <img src="./img/money.jpg" alt="" />
                </div>
                <form className="form_content" onSubmit={submitHandler}>
                    <label htmlFor="title">Title <span className="required">required</span></label>
                    <input type="text" name="title" onChange={getTitleValue} value={submitTitle} required/ >
            
                    <label htmlFor="amount">Amount <span className="required">required</span></label>
                    <input type="number" min="0.01" step="0.01" onChange={getAmountValue} value={submitAmount} required/>

                    <select name="cate" onChange={getCateValue} value={submitCate} required>
                        <option value="">Please select</option>
                        <option value="meal">meal</option>
                        <option value="play">play</option>
                        <option value="hotel">loading</option>
                    </select>

                    <button type="submit">Add</button>
                </form>
            </div>
    
}

export default AddExpenseForm;