import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses = [
    {
      id: 'jdj120',
      title: 'Car Insurance',
      amount: 300,
      date: new Date(2021, 4, 15)
    },
    {
      id: 'jdj121',
      title: 'Toilet Paper',
      amount: 14.44,
      date: new Date(2021, 5, 16)
    },
    {
      id: 'jdj122',
      title: 'New Desk',
      amount: 400,
      date: new Date(2020, 1, 19)
    },
    {
      id: 'jdj123',
      title: 'New TV',
      amount: 600,
      date: new Date(2019, 11, 25)
    },
  ]

  return (

    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
