import React from 'react';
import Namelist from './Namelist';

function Person({person}){
    return(
        <div>
            <h2>I am a {person.name}. I am {person.age}old. I know {person.skill}.</h2>
        </div>
    )
}
export default Person;