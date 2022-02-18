import React, { useState } from 'react'
import './FromFields.css'
import axios from 'axios'

export const SingleChoiceAllVisible = (props) => {


    return (
        <div>
            <label for="cars">Choose a car:</label>
            <select id="cars" name="cars" size="4" multiple>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    ) 
}
