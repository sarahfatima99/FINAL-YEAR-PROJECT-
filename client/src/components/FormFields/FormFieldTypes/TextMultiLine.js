import React, { useState } from 'react'
import './FromFields.css'
import axios from 'axios'

export const TextMultiLine = (prpos) => {

    return (
        <center>
        <form>
        <input type="textarea" rows="14" cols="15" placeholder='Enter Question' />
            <input type="textarea" rows="14" cols="15" placeholder='Enter Answer' />

        </form>
        </center>

    )
}