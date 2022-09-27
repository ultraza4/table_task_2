import './App.css';
import Table from './components/table/table';
import Pagination from './components/pagination/pagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Filtration from './components/filtration/filtration';
import InputForm from './components/inputForm/inputForm';

function App() {
  const baseURL = "http://localhost:4000/api/distance";
  const [tableData, setTableData] = useState([]);

  // хуки для пагинаций
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(8);
  const [numberOfPages, setNumberOfPages] = useState(1);

  // хуки для фильтраций таблицы
  const [query, setQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState('name');
  const [selectedMethod, setSelectedMethod] = useState('includes');

  // Берем данные с нашего сервера
  useEffect(() => {
    axios.get(baseURL, {
      params: {
        selectedColumn,
        selectedMethod,
        inputQuery: query,
        rowsPerPage,
        currentPage
      }
    }).then((res) => {
      setNumberOfPages(res.data.numberOfPages);
      setTableData(res.data.result.rows);
    })
  }, [selectedColumn, selectedMethod, query, currentPage, rowsPerPage])


  //коллбэки для компоненты с пагинацией
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const columnHandler = (value) => setSelectedColumn(value);
  const methodHandler = (value) => setSelectedMethod(value);
  const queryHandler = (value) => {
    setQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Filtration
        columnHandler={columnHandler}
        methodHandler={methodHandler}
        queryHandler={queryHandler}
        query={query}
        selectedColumn={selectedColumn}
        selectedMethod={selectedMethod} />
      <InputForm baseURL={baseURL} />
      <Table data={tableData} />
      <Pagination numberOfPages={numberOfPages} paginate={paginate} currentPage={currentPage} />
    </div>
  );
}

export default App;
