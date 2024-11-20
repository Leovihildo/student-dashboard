import './App.css';
import CoursesTable from './components/CoursesTable';
import Navbar from './components/DashboardNav';
import SearchBar from './components/searchbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <h1>Student Course Dashboard</h1>
        <SearchBar />
        <CoursesTable />
    </div>
  );
}

export default App;
