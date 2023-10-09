import React from 'react'

function Basic(props) {
    const age = props.age;
    if(age>=18)
    {
        return `hey you're eligible`;
    }

    else if(age>=15){
        return `hey bruh still ${18-age} wait and fuck`;
    }

    else{
        return `You can't even fuck`;
    }
}

export default Basic