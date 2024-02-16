import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import Card3 from "../component/Card3.jsx"
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Home2 = (props) => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    const [data, setData] = useState()

    let getdato = async () => {

        let valor = actions.getDetallado(params.userId)
        
        if (valor["uid"]) {
            setData(valor)
            console.log("aqui el primero",valor)
            return

        }
        await actions.getDetalles(params.userId)
        valor = actions.getDetallado(params.userId)
        setData(valor)

        console.log("aqui el segundo",valor)
        store.Detalles = [];
    }

    useEffect(() => {
        getdato()
    }, [params.userId])

    return (
        <div>

            <div className="d-flex m-1">
                <Card3 data2={data ? data : {}} data={data ? data.properties : {}} />

            </div>
        </div>
    )
}
