import React, { useState } from 'react'
import { Link} from 'react-router-dom'


//Hola a todos
export default function NavsBS() {

    const handleAdd = (e) => {
        return ()=> console.log("hola")
    }

    return (
        <>
         
            <ul className="nav nav-pills " id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link onClick={handleAdd()} className="nav-link active"  id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">Todo</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link "  id="all-tab" data-toggle="tab" to="/sofas" role="tab" aria-controls="profile" aria-selected="false">Sofas</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="sillas-tab" data-toggle="tab" to="/sillas" role="tab" aria-controls="contact" aria-selected="false">Sillas</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="guardado-tab" data-toggle="tab" to="/guardado" role="tab" aria-controls="contact" aria-selected="false">Guardado</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="mesas-tab" data-toggle="tab" to="/mesas" role="tab" aria-controls="contact" aria-selected="false">Mesas</Link>
                </li>
            </ul>
            {/*
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div> */}
       
        </>
    )
}
