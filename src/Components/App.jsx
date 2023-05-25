import React from "react";
import { useState } from "react";

import { SearchInput } from "./SearchInput";
import { ListsSection } from "./ListsSection";
export const App = () => {
    
  
  const [data, setData] = useState([]);
  const [storage, setStorage] = useState([]);
  

  const saveDataLocalStorage = (data) => {
    data?.length&&localStorage.setItem('dataList', JSON.stringify(data));
    
  }

  const getTasksFromLocalStorage = () => {
    setStorage(() => JSON.parse(localStorage.getItem('dataList'))) ;
  }
  
  const createTask = (task) => {
    setData((prevValue) => {
      const newState = [...prevValue, {'task':task, 'show': false}];
      saveDataLocalStorage(newState);
      return newState;
  });
    getTasksFromLocalStorage();
  }
  //console.log('data' + data)
  //console.log('storage' + storage)
  //console.log('data' + storage)
  

  
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
