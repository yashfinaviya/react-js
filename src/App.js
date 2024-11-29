import './App.css';
import UserProfileCard from './component/project';

function App() {
  return (
    <div className="App">
      <UserProfileCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQvNh-gFXfuM_022WG3t-Bbd57aPzPCwjYQ&s" name="Yash" email="yash@gmail.com" age={20} phone={216546516} address="rnw"/>
      <UserProfileCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFx28Mr4QL5Y9YbDEQW94myfF75u-EV6vpA&s" name="Krish" email="krish@gmail.com" age={22} phone={326465454} address="rnw"/>
      <UserProfileCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s" name="Jay" email="jay@gmail.com" age={19} phone={25654564} address="rnw"/>
      <UserProfileCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZBQPeHYaB9fmPL2RjIHPLhf69kxW2dX7xA&s" name="Zeel" email="zeel@gmail.com" age={25} phone={24545451} address="rnw"/>
    </div>
  );
}

export default App;
