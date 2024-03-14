import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = [  
      {id: 1, name: "Jade Cordero", email: "jade.cordero90@gmail.com"},
      {id: 2, name: "Jess Cordero", email: "jessica.cordero@gmail.com"},
      {id: 3, name: "Cj Cabrera", email: "CJcabrreraisGay@gmail.com"},
      {id: 4, name: "Bowen Suico", email: "BowenisIgat@gmail.com"},
      {id: 5, name: "Charles Saturninas", email: "CharlesisTomboy@gmail.com"},

    ];

    setStudents(data);
  }, [])
  
  console.log(students);
  return(
      <>
      <Header/>      
      {students && students.map((stud) => <Card key={stud.id} name={stud.name} email={stud.email} />)}
      <Footer/>
      </>
    );
}

export default App