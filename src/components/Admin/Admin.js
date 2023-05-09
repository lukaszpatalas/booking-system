import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const getAppointments = async () => {
  const appointmentsRef = collection(db, 'appointments');
  const appointmentSnapshots = await getDocs(appointmentsRef);
  const appointmentList = appointmentSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return appointmentList;
};


const Admin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const appointmentList = await getAppointments();
      console.log("Fetched appointments: ", appointmentList);
      setAppointments(appointmentList);
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="admin-container">
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.date.toDate().toLocaleString()} - {appointment.participant.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
