import React from 'react'
import { Link } from 'react-router-dom'
import { ProductoList } from './Cards/ProductoList'
import CardStyle from "../content/Cards/CardStyle.css"
import { motion } from "framer-motion"


export default function All_Screen() {


    return (
        <div>
            <hr></hr>

            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <motion.div whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }} className="card">

                        <Link to={`./sofas`}>
                            <img src={`./assets/portadas/SOFAPORTADA.png`} className="img img-fluid" alt={"SOFA"} />
                        </Link>
                    </motion.div>
                </div>
                <div className="col mb-4">
                    <motion.div whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }} className="card">

                        <Link to={`./sillas`}>
                            <img src={`./assets/portadas/SILLAPORTADA.png`} className="img img-fluid" alt={"SOFA"} />
                        </Link>
                    </motion.div>
                </div>
                <div className="col mb-4">
                    <motion.div whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }} className="card">

                        <Link to={`./mesas`}>
                            <img src={`./assets/portadas/MESAPORTADA.png`} className="img img-fluid" alt={"SOFA"} />
                        </Link>
                    </motion.div>
                </div>
                <div className="col mb-4">
                    <motion.div whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }} className="card">

                        <Link to={`./guardado`}>
                            <img src={`./assets/portadas/GUARDADOPORTADA.png`} className="img img-fluid" alt={"SOFA"} />
                        </Link>
                    </motion.div>
                </div>



            </div>







        </div>
    )
}
