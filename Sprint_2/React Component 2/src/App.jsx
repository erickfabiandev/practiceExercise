import { useState } from 'react'
import ReportCard from './components/ReportCard'
import Modal from './components/Modal'
import './App.scss'


function App() {
  
  const title='How did we do?';
  const subtitle='Please let us know did with your support request.All feedback is appreciated to help us improve our offering';

  /**
   * Hook to update the value of the rating, when rating is selected
   */
  const [qualification,setQualification]=useState(0);  
  const updateQualification =(id)=>{
      setQualification(id);
  }

   /**
   * Hook that allows you to control the modal that will be launched when submit is pressed
   */
  const [modal,setModal]=useState(false)
  const updateModal =()=>{
    setModal(!modal)
    if(modal)setQualification(0)//For asking if this line is a good practice to reset the painting
  }     

  return (
    <div className='container_app'>
      <h1 className='container_app_title'>Make It Real - Interactive rating component</h1>
      <ReportCard 
          title={title} 
          subtitle={subtitle}
          qualification={qualification} 
          handleQualification={updateQualification}
          handleModal={updateModal}
          />
      <Modal 
          visibility={modal} 
          close={updateModal} 
          qualification={qualification}/>
    </div>
  )
}

export default App
