import React from 'react'
import { Link, NavLink } from 'react-router-dom'


//Hola a todos
export default function NavsBS() {
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active"  id="home-tab" data-toggle="tab" href="/" role="tab" aria-controls="home" aria-selected="true">Todo</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link "  id="all-tab" data-toggle="tab" href="/sofas" role="tab" aria-controls="profile" aria-selected="false">Sofas</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="sillas-tab" data-toggle="tab" href="/sillas" role="tab" aria-controls="contact" aria-selected="false">Sillas</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="guardado-tab" data-toggle="tab" href="/guardado" role="tab" aria-controls="contact" aria-selected="false">Guardado</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="mesas-tab" data-toggle="tab" href="/mesas" role="tab" aria-controls="contact" aria-selected="false">Mesas</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>

        </>
    )
}
