// import React, { useState } from 'react'
// import './Form.css'
// import { DragDropContext, Droppable } from 'react-beautiful-dnd'

// export default function From() {


//     const handleDrag = () => setForm(true);

//     const [Form, setForm] = useState(false)



//     const renderHTML = () => {
//         return (
//             <form  >
//                 <label>
//                     Name:
//                     <input type="text" name="name" />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }

//     return (

//         <div>

//             <div className="container">
//             <DragDropContext>
//                 <div className="row">
//                     <div className='menu column'>
//                         <nav class="nav-sidebar">
                           

                                
//                                     <Droppable droppableId='tools'>

//                                         {(provided) => (
//                                             <ul class="nav" ref={provided.innderRed} {...provided.droppableProps}>
//                                             <li class="form_bal_textfield" draggable onDragOver={getButtonFieldHTMLL} >
//                                                 Text Field <i class="fa fa-plus-circle pull-right"></i>
//                                             </li>
//                                              </ul>
//                                         )}


//                                     </Droppable>
//                                     {/* <li class="form_bal_textarea">
//                                     <a href="javascript:;">Text Area <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_select">
//                                     <a href="javascript:;">Select <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_radio">
//                                     <a href="javascript:;">Radio Button <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_checkbox">
//                                     <a href="javascript:;">Checkbox <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_email">
//                                     <a href="javascript:;">Email <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_number">
//                                     <a href="javascript:;">Number <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_password">
//                                     <a href="javascript:;">Password <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_date">
//                                     <a href="javascript:;">Date <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li>
//                                 <li class="form_bal_button">
//                                     <a href="javascript:;">Button <i class="fa fa-plus-circle pull-right"></i></a>
//                                 </li> */}
                               

                            
//                         </nav>
//                     </div>
//                     <div>
//                         {Form ? renderHTML() :
//                             <div></div>}
//                     </div>

//                     <div className='interface column'>

//                     </div>
//                 </div>
//                 </DragDropContext>
//             </div>


//         </div>
//     )
// }
