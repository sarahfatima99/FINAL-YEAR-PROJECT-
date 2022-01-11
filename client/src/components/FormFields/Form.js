import React, { useState, useReducer, useEffect } from 'react'
import FormFields from './FormFields'
import axios from 'axios'
function Form() {
    const [fromid, SetformId] = useState();

    useEffect(() => {
        console.log("in forms")
        var user_id = parseInt(localStorage.getItem("userinfo"))
        console.log(user_id)
        axios.post("http://localhost:9000/form", { user_id })
            .then((res) => {
                if (res.data.form_id) {
                    const form_id = res.data.form_id
                    localStorage.setItem("currentform", form_id)
                }
                else {
                    console.log(res.data.message)
                }

            })
    });


    return (
        <div>

            <FormFields />

        </div>
    )
}

export default Form
