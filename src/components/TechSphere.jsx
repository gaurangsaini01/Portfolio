import React, {useEffect, useRef} from 'react'
import TagCloud from 'TagCloud'


const TechSphere = () => {

  const effectRan = useRef(false)
  
    const Texts = [
      'React', 'HTML', 'CSS', 'Javascript', "Typescript",
        'Bootstrap', 'Node',
        'express', 'EJS',
        'C++', 'C', 'Java',
        'Python', 'Git', 'Github',
        "DBMS","C#",
        "SASS", "JSON", "npm", "SQL",
        "Tailwind", "Nextjs", "MongoDB","Docker","Redis"
    ]
    
useEffect(() => {
  if(effectRan.current === false){
    var tagcloud = TagCloud('.Sphere', Texts, {
      radius: 250,
  
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    });

  }
  return () => effectRan.current = true;
  
}, [])

  
  return (
      <div className="Sphere hidden lg:block">
        
      </div>
  )
}

export default TechSphere