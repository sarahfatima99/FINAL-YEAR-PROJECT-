import React, { useState } from 'react'
import './FromFields.css'
import axios from 'axios'
export const SingleLine = (props) => {
    const [label, setLabel] = useState()
    const [editable, setEditable] = useState(true)
    const [question, setQuestion] = useState()
    const [count, setCount] = useState(true);
    const handleChange = e => {
        setLabel(e.target.value)

    }
    const handleClick = e => {
        e.preventDefault()

        setEditable(!editable)
        if (editable && label) {
            setQuestion(props.Ques_no)
            update_ques_text()
        }
    }


    const update_ques_text = () => {

        const quest_no = props.Ques_no
        const form_id = localStorage.getItem('currentform')
        const Ques_data = {
            Ques_no: quest_no,
            label: label,
            form_id: form_id
        }
        axios.post("http://localhost:9000/form/question", Ques_data)
            .then((res) => {
                if (res.data.message) {
                    console.log(res.data.message)
                }
                else {
                    console.log("err")
                }

            })

    }

    return (
        <div>
            <form onSubmit=
                {e =>
                    e.preventDefault()
                }
            >
                {editable ?
                    <input type="textarea"
                        rows="44"
                        cols="15"
                        enabled="true"
                        value={label}
                        onChange={handleChange} /> :
                    <lable>
                        {label}
                    </lable>
                }

                <br />
                <input placeholder='enter text' />
                <br />

                <button style={{ textAlign: "right" }} className='button' onClick={handleClick}>
                    {
                        editable ?
                            <p > done</p> :
                            <p >  edit</p>
                    }
                </button>
            </form>
        </div>
    );



}

export const RadioButton = (props) => {
    const [question, setQuestion] = useState()
    const [options, setOptions] = useState([])
    const list = [{ name: 'yoo' }, { name: 'hii' }, { name: 'yoo' }]
    const [optionsList, setOptionsList] = useState([])
    const [label, setLabel] = useState()
    const [editable, setEditable] = useState(true)
    const [count, setCount] = useState(true);
    const handleChange = e => {
        setLabel(e.target.value)
    }



    const handleClick = e => {
        e.preventDefault()

        setEditable(!editable)
        if (editable && label) {
            setQuestion(props.Ques_no)
            update_ques_text()
        }
    }



    const update_ques_text = () => {

        const quest_no = props.Ques_no
        const form_id = localStorage.getItem('currentform')
        const Ques_data = {
            Ques_no: quest_no,
            label: label,
            form_id: form_id
        }
        axios.post("http://localhost:9000/form/question", Ques_data)
            .then((res) => {
                if (res.data.message) {
                    console.log(res.data.message)
                }
                else {
                    console.log("err")
                }

            })

    }

    const handleKeyDown = e => {
        if (e.key == 'Enter') {
            // setOptions(false)

            setOptionsList([...optionsList,
            {
                name: e.target.value
            }])
            e.target.value = ""
            console.log(optionsList)
        }

    }
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>

                {
                    editable ?
                        <input type="textarea" rows="44"
                            cols="15"
                            value={label}
                            placeholder="enter your lable"
                            onChange={handleChange}
                        /> :
                        <lable>
                            {label}
                        </lable>
                }


                <button style={{ textAlign: "right" }} className='button' onClick={handleClick}>
                    {
                        editable ?
                            <p > done</p>
                            :
                            <p >  edit</p>
                    }



                </button>
                {
                    optionsList != null ?

                        optionsList.map((item, key) => {
                            return (
                                <div>
                                    <input type="radio"
                                        id="css"
                                        name="fav_language"
                                        value="CSS" />
                                    <label for="css">
                                        {item.name}
                                    </label>
                                    <br />
                                </div>)
                        }) : null
                }
                {
                    options ?
                        <input type="textarea"
                            rows="44"
                            cols="15"
                            onKeyDown={handleKeyDown}
                        /> :
                        null
                }
                <button onClick={() => setOptions(true)}>add options</button>
            </form>

        </div>
    )
}




export const TextMultiLine = (prpos) => {

    return (

        <form>
            <label>Enter yourname:

            </label>
            <input type="textarea" rows="14" cols="15" />

        </form>

    )
}

export const SingleChoiceAllVisible = (props) => {

    const [question, setQuestion] = useState()
    const [options, setOptions] = useState([])
    const list = [{ name: 'yoo' }, { name: 'hii' }, { name: 'yoo' }]
    const [optionsList, setOptionsList] = useState([])
    const [label, setLabel] = useState()
    const [editable, setEditable] = useState(true)
    const [count, setCount] = useState(true);
    const handleChange = e => {
        setLabel(e.target.value)
    }



    const handleClick = e => {
        e.preventDefault()

        setEditable(!editable)
        if (editable && label) {
            setQuestion(props.Ques_no)
            update_ques_text()
        }
    }



    const update_ques_text = () => {

        const quest_no = props.Ques_no
        const form_id = localStorage.getItem('currentform')
        const Ques_data = {
            Ques_no: quest_no,
            label: label,
            form_id: form_id
        }
        axios.post("http://localhost:9000/form/question", Ques_data)
            .then((res) => {
                if (res.data.message) {
                    console.log(res.data.message)
                }
                else {
                    console.log("err")
                }

            })

    }

    const handleKeyDown = e => {
        if (e.key == 'Enter') {
            // setOptions(false)

            setOptionsList([...optionsList,
            {
                name: e.target.value
            }])
            e.target.value = ""
            console.log(optionsList)
        }

    }
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>

                {
                    editable ?
                        <input type="textarea" rows="44"
                            cols="15"
                            value={label}
                            placeholder="enter your lable"
                            onChange={handleChange}
                        /> :
                        <lable>
                            {label}
                        </lable>
                }


                <button style={{ textAlign: "right" }} className='button' onClick={handleClick}>
                    {
                        editable ?
                            <p > done</p>
                            :
                            <p >  edit</p>
                    }

                </button>

                <select>

                    {
                        optionsList != null ?

                            optionsList.map((item, key) => {
                                return (



                                        <option value="volvo">{item.name}</option>
                                  
                                )
                            }) : null
                    }

                </select>
                {
                    options ?
                        <input type="textarea"
                            rows="44"
                            cols="15"
                            onKeyDown={handleKeyDown}
                        /> :
                        null
                }
                <button onClick={() => setOptions(true)}>add options</button>
            </form>

        </div>
    )
}
