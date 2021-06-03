import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"



//Hola a todos
export default function NavsBS({ guardarCategoria }) {

    const handleAdd = (nombre) => {
        return () => guardarCategoria(nombre)
    }



    return (
        <>

            <ul className="nav nav-pills " id="myTab" role="tablist">
                {/* */}
                <motion.li whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1}} className="nav-item" role="presentation">

                    <Link onClick={handleAdd("Menu")} className="nav-link " id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">Menu</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1}} className="nav-item" role="presentation">
                    <Link onClick={handleAdd("Mesas")} className="nav-link" id="mesas-tab" data-toggle="tab" to="/mesas" role="tab" aria-controls="contact" aria-selected="false">Mesas</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1}} className="nav-item" role="presentation">
                    <Link onClick={handleAdd("Sofas")} className="nav-link " id="all-tab" data-toggle="tab" to="/sofas" role="tab" aria-controls="profile" aria-selected="false">Sofas</Link>

                </motion.li>
                <motion.li whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1}}className="nav-item" role="presentation">
                    <Link onClick={handleAdd("Sillas")} className="nav-link" id="sillas-tab" data-toggle="tab" to="/sillas" role="tab" aria-controls="contact" aria-selected="false">Sillas</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1}} className="nav-item" role="presentation">
                    <Link onClick={handleAdd("Guardado")} className="nav-link" id="guardado-tab" data-toggle="tab" to="/guardado" role="tab" aria-controls="contact" aria-selected="false">Guardado</Link>
                </motion.li>

            </ul>
            {/*
            backup
            </div> */}

        </>
    )
}
