import React from 'react';
import Person from './Person';

function Namelist(){
   
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 22,
            skill: 'React'
        },
        {
            id: 1,
            name: 'Ana',
            age: 23,
            skill: 'angular'
        }
    

    ]
const personlist=persons.map(person => <Person key={person.id}  person={person}/>)
        return(
            <div>
                {personlist}
            </div>
        )
    }
 export default Namelist;