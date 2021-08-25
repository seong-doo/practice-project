import React, { useState } from 'react'


const Header = () => {
  const [getSelectOption, setGetSelectOption] = useState("Home")

    return (
        <header className = "header">
          <h1>Personal Project List</h1>
            <select className = "select-project"
            onChange = {(e)=>{
              const selectProject = e.target.value;
              setGetSelectOption(selectProject);
            }}>
                <option value = "Home">Home</option>
                <option value = "project1">project1</option>
                <option value = "project2">project2</option>
            </select>
        </header>
    )
}

export default Header
