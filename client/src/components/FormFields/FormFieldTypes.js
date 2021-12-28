import React, { useState } from 'react'
import './FromFields.css'
export const SingleLine = () => {
    const [label, setLabel] = useState()
    const [editable, setEditable] = useState(true)
    const [count, setCount] = useState(true);
    const handleChange = e => {
        setLabel(e.target.value)
    }

    return (
        <div>
            <form onSubmit=
                {e =>
                    e.preventDefault()
                }>

                {
                    editable ?
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
            
                <button style={{textAlign:"right"}}className='button' onClick={() => setEditable(!editable)}>
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

export const RadioButton = () => {

    const [options, setOptions] = useState([])
    const list = [{ name: 'yoo' }, { name: 'hii' }, { name: 'yoo' }]
    const [optionsList, setOptionsList] = useState([])
    const [label, setLabel] = useState()
    const [editable, setEditable] = useState(true)
    const [count, setCount] = useState(true);
    const handleChange = e => {
        setLabel(e.target.value)
    }

    const handleKeyDown = e => {
        if (e.key == 'Enter') {
            // setOptions(false)

            setOptionsList([...optionsList,
            {
                name: e.target.value
            }])
            e.target.value=""
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
            

                <button style={{textAlign:"right"}}className='button' onClick={() => setEditable(!editable)}>
                    {
                        editable ?
                            <p > done</p> :
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

export const TextMultiLine = () => {

    return (

        <form>
            <label>Enter yourname:

            </label>
            <input type="textarea" rows="14" cols="15" />

        </form>

    )
}

export const SingleChoiceAllVisible = () => {
    return (
        <form>
            <label for="pet-select">Choose a pet:</label>

            <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
        </form>
    )
}
