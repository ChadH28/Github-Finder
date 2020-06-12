import React, {useContext} from 'react'
import alertContext from '../../Context/Alert/AlertContext'

 const Alert = () => {
    const AlertContext = useContext(alertContext);
    const { alert } = AlertContext;
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle">{alert.msg}</i>  
            </div>
        )           
    )
}

export default Alert;