import React from "react";
import { useState } from "react";

import { SearchInput } from "./SearchInput";
import { ListsSection } from "./ListsSection";
export const App = () => {
    
  
  const [data, setData] = useState([]);
  const [storage, setStorage] = useState([]);
  

  const saveDataLocalStorage = (data) => {
    data!=[]?localStorage.setItem('dataList', JSON.stringify(data)):null;
    
  }

  const getTasksFromLocalStorage = () => {
    setStorage(() => [...[localStorage.getItem('dataList')]]) ;
  }
  
  const createTask = (task) => {
    setData(() => [...data, {'task':task, 'show': false}]);
    saveDataLocalStorage(data);
    getTasksFromLocalStorage();
  }
  console.log('data' + data)
  console.log('storage' + storage)
  console.log('data' + storage)
  

  
  return (
    <>
      <section className="container d-flex justify-content-center">
        <div className="row text-center">
          <h1>To do List</h1>
          <SearchInput createTask = {createTask} />
          <ListsSection dataLocalStorage={storage}/>
        </div>
      </section>
    </>
  );
};
