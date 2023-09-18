import "./App.css";
import * as dfd from "danfojs";
// import { useEffect, useState } from "react";

function App() {

  // const [data,setData]= useState([]);

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then((json) => {
  //       console.log(json)
  //       setData(json);
  //     })
  // },[]);

  const df = new dfd.DataFrame(
    { pig: [20, 18, 489, 675, 1776], horse: [4, 25, 281, 600, 1900] },
    { index: [1990, 1997, 2003, 2009, 2014] }
  );
  df.head().print()


 

  return (
    <div className="App">
          Learn Danfojs 
          {/* <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {df.values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
