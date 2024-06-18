import React, { useState, useEffect } from 'react';
import DashboardButton, { DashboardDeleteButton, DashboardEditButton, DashboardViewButton } from '../DashboardButton';
import DashboardOverlay from '../DashboardOverlay';
import DashboardDoctorssModal from './DashboardDoctorsModal';
import api from '../../../api/apiurl';
import { useParams } from 'react-router-dom';

const DashboardDoctors = () => {
  const [showModal, setShowModal] = useState(false);
  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    const fetchDoctor = async () =>{
      try {
        const res = await api.get('/teams')
        setDoctors(res.data);
      } catch (err) {
        if(err.res){
          //Not in 200 respond range
        console.log(err.res.data)
        console.log(err.res.status)
        console.log(err.res.headers)
        }
        else{
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchDoctor()
  }, [])


  const showModalHandler = () => {
    setShowModal(prevVal => !prevVal);
  };

  const {id} = useParams();
  const teams = doctors.find(teams  => (teams.id).toString()===id)

  return (
    
    <div>
      <section className="relative pt-7 px-3 sm:px-8">
        <DashboardButton text="Assign Doctors" showModalHandler={showModalHandler} />
        <div className="bg-white shadow-md overflow-x-auto">
          <h4 className="py-2 text-white text-xl text-center bg-[#87a5b9] rounded-t sm:w-full">DOCTORS</h4>

          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">NAME</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">TITLE</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">IMAGE</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">FACEBOOK</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">TWITTER</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">INSTAGRAM</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">LINKEDIN</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">STATE</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">CITY</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">ADDRESS</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">ABOUT</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">SCHEDULE</th>

                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Actions
                </th>
              </tr>
            </thead>
            {teams &&
            <>
            <tbody>
              <tr>
                <td className="py-2 px-2">
                {teams.name}
                </td>
                <td className="py-2 px-2">
                {teams.title}
                </td>
                <td className="py-2 px-2">
                {teams.image}
                </td>
                <td className="py-2 px-2">
                {teams.facebook}
                </td>
                <td className="py-2 px-2">
                {teams.twitter}
                </td>
                <td className="py-2 px-2">
                {teams.instagram}
                </td>
                <td className="py-2 px-2">
                {teams.linkedin}
                </td>
                <td className="py-2 px-2">
                {teams.state}
                </td>
                <td className="py-2 px-2">
                {teams.city}
                </td>
                <td className="py-2 px-2">
                {teams.address}
                </td>
                <td className="py-2 px-2">
                {teams.about}
                </td>
                <td className="py-2 px-2">{teams.schedule}</td>
                <td className="flex justify-center space-x-2 py-2">
                  <DashboardEditButton />
                  <DashboardViewButton text="View more" />
                  <DashboardDeleteButton />
                </td>
              </tr>
            </tbody>
            </>
            }
          </table>
        </div>
        {showModal && (
          <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardDoctorssModal showModalHandler={showModalHandler} />
          </div>
        )}
      </section>

      {showModal && <DashboardOverlay />}
    </div>
  );
};

export default DashboardDoctors;