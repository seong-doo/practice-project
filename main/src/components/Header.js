import React, { useState } from 'react'
import Switch from './Switch'

const Header = () => {
  const [getSelectOption, setGetSelectOption] = useState("Home")

 

    return (
      <div>
        <header className = "header">
          <h1>Personal Project List</h1>
            <select className = "select-project"
            onChange = {(e)=>{
              const selectProject = e.target.value;
              setGetSelectOption(selectProject);
            }}>
                <option value = "Home">Home</option>
                <option value = "project-COVID19">project-COVID19</option>
                <option value = "project2">project2</option>
            </select>
        </header>
        <body>
            <Switch props = {getSelectOption} />
          </body>
        </div>
    
    )
}

export default Header
