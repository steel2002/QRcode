
const userData =[
    {
       
        name: "John",
        city: "New York",
        description: "Front-end developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        online: false,
        profile: "no3.jpg"
    },
    {
      
        name: "Jane",
        city: "Los Angeles",
        description: "Back-end developer",
        skills: ["Python", "Django", "Flask"],
        online: true,
        profile: "no1.jpg"
    },
    {
        name: "Mike",
        city: "Chicago",
        description: "Full-stack developer",
        skills: ["Java", "Spring", "React"],
        online: true,
        profile: "no1.jpg"
    },
    {
      
        name: "Jane",
        city: "Los Angeles",
        description: "Back-end developer",
        skills: ["Python", "Django", "Flask"],
        online: false,
        profile: "no1.jpg"
    },
    
];



function User(props) {
    return <div className='container'>
        <span className={props.online ? 'pro online' : 'pro offline'}> {props.online ? 'Online' : 'Offline'} </span>

        <img src={props.profile} className='img' alt="user" />

        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
          <button className='follow'>Follow</button>
          <button className='message'>Message</button>
        </div>
        <div className='skills'>
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
         </div>
    

}

const UserCard = () => {
  return (
    <>
    {userData.map((user,index)=>(
      <User 
        key={index}
        name={user.name} 
        city={user.city} 
        description={user.description} 
        skills={user.skills} 
        online={user.online} 
        profile={user.profile} 
      />
    ))}
      
    </>
  )
}

{/* <User  name="John" city="New York" description="Front-end developer" skills={["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]} online ={true} profile ="no3.jpg"/> */}


export default UserCard
