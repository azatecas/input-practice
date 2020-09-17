import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import SkillsCont from './components/SkillsCont';
import axios from 'axios';


function App() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    id: null,
    skills_name:'',
    img_url:''
  })



  useEffect(()=>{
    //only handle the initial fetch
    axios
      .get(`https://my-portfolio-luis.herokuapp.com/api/skills/`)
      .then(res => {
        setSkills([...res.data])
      })
      .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    console.log(newSkill)
  },[newSkill])

  return (
    <div className="App">
      <Form 
        newSkill={newSkill}
        setNewSkill={setNewSkill}
        skills={skills}
        setSkills={setSkills}
      />
      <SkillsCont 
        skills={skills}
      />
    </div>
  );
}

export default App;
