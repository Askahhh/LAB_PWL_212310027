import React, { Component } from 'react';

export default function MyBio (
    {name, age}
){
    return (
        <div>
            <h1>Nama = {name}</h1>
            <h1>Usia = {age}</h1>
        </div>
    )
}
