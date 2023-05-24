import React from "react";


export const ListsSection = ({dataLocalStorage}) => {
    /const list = dataLocalStorage.map(item => <li className="list-group-item" key={item.task}>{item.task}</li>);
     //console.log('es este' + list)
    return (
        <ul className="list-group mt-4 p-0">
            {list}
        </ul>
    )
}