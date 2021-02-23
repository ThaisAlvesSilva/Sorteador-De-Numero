import React from 'react'

export default (props) =>{
    return(
        <div>
            <label htmlFor="minInput">Mínimo: </label>
            <input id="minInput" type="number" value={props.min} onChange={(e)=>props.alteraMin(+e.target.value)}/>

            <label htmlFor="maxInput">Máximo:</label>
            <input id="maxInput" type="number" value={props.max} onChange={(e)=>props.alteraMax(+e.target.value)}/>

        </div>
    );

}
    