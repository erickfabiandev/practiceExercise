import './Modal.scss'

/**
 * Component ReportCard
 * @param {boolean} visibility - visible or not visible state in the window
 * @param {function} close - function that handles the closing of the modal
 * @param {number} qualification - the selected grade that will be displayed in the modal
 * @returns {Object} - result of the function, It is a modal where the selection of the user's rating will be displayed
 */

const Modal=({
    visibility,
    close,
    qualification
})=>{

    return(
        <>
            {visibility?
                <div className='container__modal' onClick={(e)=>close()}>
                    <div className='modal'>
                        <h3 className='modal__title'>Thank you very much for the rating!</h3>
                        <button className='modal--bclose'onClick={(e)=>close()}>x</button>
                        <p className='modal__subtitle'>Qualification: {qualification}</p>
                    </div>                    
                </div>
            :null}
        </>
        
    )
    

}

export default Modal