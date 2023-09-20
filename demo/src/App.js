import './App.css';
import * as dfd from "danfojs";
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]= useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        const df = new dfd.DataFrame(json);
        console.log(df);
        setData(df);
      });
  }, []);
  return (
    <div className="App">
      Learn Danfojs 
      {data? (
        <table>
          <thead>
            <tr>
              {data.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.values.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ):"Loading"}
    </div>
  );
}

export default App;
