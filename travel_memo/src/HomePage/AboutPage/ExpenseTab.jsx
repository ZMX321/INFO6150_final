

function ExpenseTab() {
    return <div className="tabs_content">
        <div className="tab_content">
            <p className="intro_expense">The expense page is used to record all expenses during the trip. Here, the user can complete the record and search of the corresponding expenses during the trip.</p>
            <ul className="expense_fea">
                <li>Searching function： the user can enter the expense item containing the keyword through the input box at the top of the page, the page does not need to click other buttons, and the unqualified expense item can be filtered out in real time by monitoring the value change in the search box.</li>
                <li>
                    Adding function, click the plus sign in the lower right corner of the page to call up the form of new price adjustment items. After entering the legal information, click Add to complete the addition of the item.
                    <ul>
                        <li>The plus button in the bottom right corner implements the animation effect. When clicked once, the "plus" will be rotated into a "cross", and click again, the added form will be collapsed, and the "cross" will be rotated into a "plus" again.</li>
                        <li>The add form has a validation function. All the fields are currently required, and the amount field requires a number with a maximum of two decimal places. When illegal fields appear in the form, the form will not be submitted, and the user will be prompted to enter the fields as required.</li>
                    </ul>
                </li>
                <li>
                    Deleting function: By clicking the cross button after each expense item, the item can be deleted.
                </li>
            </ul>
        </div>
    </div>
}

export default ExpenseTab;