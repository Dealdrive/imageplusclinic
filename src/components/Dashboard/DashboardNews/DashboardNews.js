import React, { useState, useEffect } from 'react'
import DashboardButton, { DashboardDeleteButton, DashboardEditButton, DashboardViewButton } from '../DashboardButton'
import DashboardOverlay from '../DashboardOverlay';
import DashboardNewss from './DashboardNewss';
import DashboardNewsView from './DashboardNewsView';
import axios from 'axios';

const DashboardNewss2 = () => {
    
const [showModal, setShowModal] = useState(false);
const [showViewModal, setshowViewModal] = useState(false);
const [data, setData] = useState([])

const showModalHandler = () => {
  setShowModal((prevVal) => !prevVal);
};
const showModalViewHandler = () => {
  setshowViewModal((prevVal) => !prevVal);
};

useEffect(()=>{
  axios.get('http://localhost:4000/')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
}, [])

  return (
    <>
        <section className="relative pt-7 sm:px-8 "> 
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add News"
        />
            <div className="w-[100%] pt-10 pb-5 px-3 text-white bg-[#2f2f2f] rounded-none  md:pt-6 md:rounded"
               id="News & updates">
                <div className="flex flex-col items-center mb-10"> 
                <h6 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>News & updates</h6>
                 <div className="w-10 h-[3px] bg-[#f97729]" />
               </div>
             </div>  
                {data.map((post,index)=>(
                    <div className="p-4 bg-white mt-5 mx-2" key={index}>
                    <div className=''>
                        <h6 className='text-lg p-5 lg:text-xl font-bold'>{post.title}</h6>
                        <hr className='w[100%]'/>
                        <p className='text-start p-2'>{post.image}</p>
                        <p className='text-start p-2'>{post.body}</p>
                    </div>
                    <div className="flex justify-start gap-4 p-3">
                    <DashboardDeleteButton/>                    <DashboardEditButton/>
                    <DashboardViewButton showModalViewHandler={showModalViewHandler} />
                 </div>
                    </div>
                ))}
                 
                 {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardNewss showModalHandler={showModalHandler} />
          </div>
        )}
        {showViewModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardNewsView showModalViewHandler={showModalViewHandler} />
          </div>
        )}         
        </section>
        {showModal && <DashboardOverlay />}
        {showViewModal && <DashboardOverlay />}

     </>
  )
}

export default DashboardNewss2

