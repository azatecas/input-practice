import React from 'react'
import Axios from 'axios';


function Form({newSkill, setNewSkill, skills, setSkills}) {

    //onchange
    const onChange = e => {
        const {name, value} = e.target;

        setNewSkill({
            ...newSkill,
            [name]:value
        })
    }

    //onsubmit
    const onSubmit = e => {
        e.preventDefault();
        // Axios.post('url', newSkill)
        //     .then(() => {
        //         setNewSkill({
        //             id: null,
        //             skills_name:'',
        //             img_url:''
        //         })
        //     })
        //     .catch(err => console.log(err))
        skills.push(newSkill)
        setNewSkill({
            id: null,
            skills_name:'',
            img_url:''
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Skill Name:</label>
                <input
                    type="text"
                    name="skills_name"
                    value={newSkill.skills_name}
                    onChange={onChange}                
                />
                <label>IMG URL:</label>
                <input
                    type="text"
                    name="img_url"
                    value={newSkill.img_url}
                    onChange={onChange}                
                />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}


export default Form

