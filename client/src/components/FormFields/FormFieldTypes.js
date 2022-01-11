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
            <center>
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
                            placeholder='Enter Question' 
                            onChange={handleChange} /> :
                        <lable>
                            {label}
                        </lable>
                }
                <br style={{margin: "5px"}} />
                <input placeholder='Enter Answer'/>
                <br />
            
                <button style={{textAlign:"right"}}className='button' onClick={() => setEditable(!editable)}>
                    {
                        editable ?
                            <p > done</p> :
                            <p >  edit</p>
                    }
                </button>
            </form>
            </center>
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
            <center>
            <form onSubmit={e => e.preventDefault()}>

                {
                    editable ?
                        <input type="textarea" rows="44" style={{margin:"5px"}}
                            cols="15"
                            value={label}
                            placeholder="Enter your Question "
                            onChange={handleChange}
                        /> :
                        <lable>
                            {label}
                        </lable>
                }
                {
                    optionsList != null ?

                        optionsList.map((item, key) => {
                            return (
                                <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-around"}}>
                                    <input type="radio"
                                        id="css"
                                        name="fav_language"
                                        value="CSS" />
                                    <label  for="css">
                                        {item.name}
                                    </label>
                                    <br />
                                </div>)
                        }) : null

                }
               
                {
                    options ?
                    <center>
                        <input  style={{margin:"5px" ,textAlign:"center"}} type="textarea" placeholder='Enter Options'
                            rows="44"
                            cols="15"
                            onKeyDown={handleKeyDown}
                        /> 
                        </center>:
                        null
                }
                {/* <button onClick={() => setOptions(true)}>Add Options</button> */}
                <button style={{textAlign:"right"}}className='button' onClick={() => setEditable(!editable)}>
                    {
                        editable ?
                            <p  style={{margin:"5px",textAlign:"right"}} > Done</p> :
                            <p  style={{margin:"5px",textAlign:"right"}}>  Edit Question</p>
                    }



                </button>
            </form>
            </center>
        </div>
    )
}

export const TextMultiLine = () => {

    return (
        <center>
        <form>
        <input type="textarea" rows="14" cols="15" placeholder='Enter Question' />
            <input type="textarea" rows="14" cols="15" placeholder='Enter Answer' />

        </form>
        </center>

    )
}

export const SingleChoiceAllVisible = () => {
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
            <center>
            <form onSubmit={e => e.preventDefault()}>

                {
                    editable ?
                        <input type="textarea" rows="44" style={{margin:"5px"}}
                            cols="15"
                            value={label}
                            placeholder="Enter your Question "
                            onChange={handleChange}
                        /> :
                        <lable>
                            {label}
                        </lable>
                }
                {
                    optionsList != null ?

                        optionsList.map((item, key) => {
                            return (
                                <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-around"}}>
                                   <ol id='css' name="fav_language" value="CSS">
                                   
                                       </ol> 
                                    {/* <input type="radio"
                                        id="css"
                                        name="fav_language"
                                        value="CSS" /> */}
                                  
                                  <label  for="css">
                                        {item.name}
                                    </label>
                                    <br />
                                </div>)
                        }) : null

                }
               
                {
                    options ?
                    <center>
                        <input  style={{margin:"5px" ,textAlign:"center"}} type="textarea" placeholder='Enter Options'
                            rows="44"
                            cols="15"
                            onKeyDown={handleKeyDown}
                        /> 
                        </center>:
                        null
                }
                {/* <button onClick={() => setOptions(true)}>Add Options</button> */}
                <button style={{textAlign:"right"}}className='button' onClick={() => setEditable(!editable)}>
                    {
                        editable ?
                            <p  style={{margin:"5px",textAlign:"right"}} >Done</p> :
                            <p  style={{margin:"5px",textAlign:"right"}}> Edit Question</p>
                    }



                </button>
            </form>
            </center>
        </div>
    )
}
