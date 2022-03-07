import React from 'react'
import "./Cell.css"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';


const Cell = ({isLit, flipCellsAroundMe}) => {

    return (
        <td>
            <div className="Cell" onClick={handleClick}>
                <LocalFloristIcon id="icon" sx={{ color: 'pink', fontSize: 40 }} />  
            </div>
        </td>
    )

}
export default Cell