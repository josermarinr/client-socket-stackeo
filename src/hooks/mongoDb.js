import React, { useContext, useEffect, useState } from 'react'
import axios from './axios'

const DbContext = React.createContext()

export function useDb(){
    return useContext(DbContext)
}

function mongoDb({id, children}) {
    const [pro, setPro] = useState([]);
    
    let gettingProject = ( id )=>{
        useEffect( () =>{
            axios.get(`/projects/${id}`)
              .then( response =>{
                setPro(response.data)
              })
          }, [])

          return [pro, setPro]
    }

    let createProject = (id, name)=>{
        useEffect( () =>{
            axios.post(`/projects/new`, {
                id: id,
                name: name
            })
              .then( response =>{
                setPro(response.data)
              }).catch(error =>{
                  console.log(error)
              })
          }, [])
          return [pro, setPro]

    }

    let createTask = ( id, taskid, name, timestamp, done = false )=>{
        useEffect( () =>{
            axios.post(`/projects/{id}/newtasks`, {
                id: taskid,
                name: name,
                timestamp: timestamp,
                done: done,
            })
              .then( response =>{
                setPro(response.data)
              }).catch(error =>{
                  console.log(error)
              })
          }, [])
          return [pro, setPro]

    }

    let gettingAllTask = (id) =>{
        useEffect( () =>{
            axios.get(`/projects/${id}/tasks`)
              .then( response =>{
                setPro(response.data)
              })
          }, [])

          return [pro, setPro]
        
    }
    

    const value = {
        proyect: pro
    }
     
    return (
        <DbContext.Provider value={value}>

            {children}

        </DbContext.Provider>
    )
}

export default mongoDb
