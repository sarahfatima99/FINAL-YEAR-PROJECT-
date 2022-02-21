import React ,{useState} from "react";
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

                <button style={{ textAlign: "right" }} className='button' onClick={handleClick}>
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