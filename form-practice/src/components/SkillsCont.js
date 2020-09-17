import React from 'react'

function SkillsCont({skills}) {

    return (
        <div>
              {
                  skills.map((skill, index) => {
                    const {skills_name, img_url} = skill;
                    return <div>
                        <h2>{skills_name}</h2>
                        <img src={img_url} alt={skills_name} style={{height: "300px", width: "300px"}}/>
                    </div>
                  })
              }          
        </div>
    )
}
 

export default SkillsCont

