import React, { useState, useReducer, useEffect } from 'react'
import FormFields from './FormFields'
import axios from 'axios';
import Navbar from 'components/Navbar/Navbar';




const Form = () =>{
    const [showDropdown , setShowDropdown] = useState(false);
    const [getText , setGetText] = useState(false);

    const getLiData = (d) =>{
            console.log(d);
    }
    return(<>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-3  col-12' style={{border:"2px solid rgb(220, 220, 220)",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                <div  className="mt-3">
                    <div className='d-flex flex-row justify-content-between'>
                        <h6>Content</h6>
                        <button style={{width:"auto",height:"auto",fontWeight:"bold",backgroundColor:"#DCDCDC",borderRadius:"5px",padding:"10px",paddingTop:"2px",paddingBottom:"2px"}} onClick={() =>{setShowDropdown(true);}}>+</button>
                    </div>
                </div>
            </div>
            {showDropdown ? (
                <div class="section-dropdown" style={{position: "absolute",padding: "5px",
                    backgroundColor: "white",
                    boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    top: "70px",
                    left: "20rem",
                    width: "100%",
                    borderRadius: "4px"}}> 
                <a href="#" style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}} onClick={getLiData("Single Line")}>Single Line  <i class="uil uil-arrow-right"></i></a>
                
                
                <div class="section-dropdown-sub"> 
                    <a href="#" style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}}>Short Text <i class="uil uil-arrow-right"></i></a>
                    <a href="#" style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}}>Radio Button <i class="uil uil-arrow-right"></i></a>
                    <a href="#" style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}}>Single Choice All Visible <i class="uil uil-arrow-right"></i></a>
                </div>
                <a href="#" style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}}> Text Multi Line<i class="uil uil-arrow-right"></i></a>
                <a href='#' style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}}>Phone no</a>
                <a href='#' style={{position: "relative",color: "black",transition: "all 200ms linear",fontWeight: "500",fontSize: "15px",borderRadius: "2px",padding: "5px 0",paddingLeft: "20px",paddingRight: "15px",textAlign: "left", textDecoration: "none",display: "-ms-flexbox",display: "flex",  webkitAlignItems: "center",mozAlignItems: "center",msAlignItems: "center",  alignItems: "center",justifyContent: "space-between",msFlexPack: "distribute",cursor: "pointer",}}>Email</a>
                
            </div>
        
            ) : null}
            <div className='col-lg-6 col-md-12 col-12'>

            </div>
            <div className='col-lg-3  col-12'>

            </div>
        </div>
    </div>
    
    </>)
}
// function Form() {
//     const [fromid, SetformId] = useState();

//     useEffect(() => {
//         console.log("in forms")
//         var user_id = parseInt(localStorage.getItem("userinfo"))
//         console.log(user_id)
//         axios.post("http://localhost:9000/form", { user_id })
//             .then((res) => {
//                 if (res.data.form_id) {
//                     const form_id = res.data.form_id
//                     localStorage.setItem("currentform", form_id)
//                 }
//                 else {
//                     console.log(res.data.message)
//                 }

//             })
//     });


//     return (
//         <div>

//             <FormFields />

//         </div>
//     )
// }

export default Form
