import React, { useState } from 'react'
import Covid from './project-COVID19'
import MainPage from './mainPage'
import Project from './projet'

const projectSwitch = function({props}){

        switch(props){
            case 'Home':  return <MainPage />
               break;
            case 'project-COVID19': return <Covid />
                break;
             case 'project2': return <Project />
               break;
            }

}

export default projectSwitch