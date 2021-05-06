import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expenses) => {
        return (expenses.date.getFullYear().toString() === filteredYear)
    })


    return (
        <li>
            <div>
                <Card className="expenses">
                    <ExpensesFilter
                        selected={filteredYear}
                        onChangeFilter={filterChangeHandler}
                    />
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </div>
        </li>
    );

};

export default Expenses;