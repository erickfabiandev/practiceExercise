import { useState } from 'react'
import './ReportCard.scss'
import Modal from './Modal'


/**
 * Component ReportCard
 * @param {string} title - report card title 
 * @param {string} subtitle - report card subtitle
 * @param {number} qualification - selected rating
 * @param {function} handleQualification - function that handles the selection of the qualification (label)
 * @param {function} handleModal - function that handles the launch of the modal 
 * @returns {Object} - result of the function, which would be a qualification card
 */

const ReportCard = ({
    title,
    subtitle,
    qualification,
    handleQualification,
    handleModal
    })=>{
        
    return(
        <div className='container_card'>
            <h2 className='container_card_title'>{title}</h2>
            <p className='container_card_subtitle'>{subtitle}</p>
            <div className='container__qualification'>
                <label  id='5' className={`qualification ${qualification==5?'activated':''}`} onClick={()=>{handleQualification(5)}}>5</label>
                <label  id='4' className={`qualification ${qualification>=4?'activated':''}`} onClick={()=>{handleQualification(4)}}>4</label>
                <label  id='3' className={`qualification ${qualification>=3?'activated':''}`} onClick={()=>{handleQualification(3)}}>3</label>
                <label  id='2' className={`qualification ${qualification>=2?'activated':''}`} onClick={()=>{handleQualification(2)}}>2</label>
                <label  id='1' className={`qualification ${qualification>=1?'activated':''}`} onClick={()=>{handleQualification(1)}}>1</label>
            </div>
            <button className='container_card-submit'onClick={()=>{handleModal()}}>Submit</button>
            
        </div>

    )


}

export default ReportCard