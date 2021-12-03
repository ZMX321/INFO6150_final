
import ExpenseCard from "./ExpenseCard";
import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import './Expense.css'


const initial_lists = [
    {id : 1,
    title : 'Z&Y Restaurant',
    amount:65.73,
    cate: 'meal',
    filted:'no_filted'
    },
    {id : 2,
    title : 'Panda Express',
    amount:22.35,
    cate: 'meal',
    filted:'no_filted'
    },
    {id : 3,
    title : 'IHG in LA',
    amount:105.34,
    cate: 'hotel',
    filted:'no_filted'
    }
];

function Expense(){
    const [expense_lists,setExpense_lists] = useState(initial_lists);
    const [switch_status,setSwitch_status] = useState(false);
    function deleteItemHandler(title){
        setExpense_lists(expense_lists.filter((list) => {
            return list.title !== title;
        }));
    }

    function addItemHandler(newItem){
        setExpense_lists(
            [...expense_lists,
            newItem]
        );
    }

    function searchItemHandler(e){
        let content = e.target.value.toLowerCase();
        
        setExpense_lists(
            expense_lists.map((list) =>{
                !list.title.toLowerCase().includes(content) ? list.filted = 'filted' : list.filted = 'no_filted';
                return list
            })
        );
    }

    function switchHandler(){
        setSwitch_status(!switch_status);
    }
    
    return <div className="expense_page" id="main">
        <div className="search_item">
            <input type="text" onChange={searchItemHandler}/>
            <img src="./img/search.png" alt="" />
        </div>
        {
            expense_lists.length === 0 ? 
            (<div className="no_element">
                Add Your First Expense Now！
            </div>) :
            (expense_lists.map(item => {
                return (
                    <ExpenseCard key={item.id} item={item} onDeleteItem={deleteItemHandler}/>
                );
            })
            )
        }
        <hr className="expense_line"/>
        <button className="switch" onClick={switchHandler}>
            <img src="./img/plus.png" alt="plus sign on add button"  className={switch_status ? 'switch_on' : ''}/>
        </button>
        <div className={`add_show ${switch_status ? '' : 'hide'}`}>
            <AddExpenseForm onAddItem={addItemHandler}/>
        </div>
        
    </div>
}

export default Expense;