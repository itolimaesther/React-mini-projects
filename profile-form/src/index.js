import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import asabenehImage from './images/asabeneh.jpg'


const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const title = 'Senior Developer'
const country = 'Finaland'

const skills = ['HTML', 'CSS', 'Sass', 'JS', 
'React', 'Redux', 'Node', 'MongoDB', 
'Python', 'Flask', 'Django', 
'Numpy', 'Pandas', 'Data Analysis', 'MySQL',
 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
]

const date = 'Aug 20, 2020'

const skillStyles = {backgroundColor:'#48d0cf', textAlign:'center', padding: '10px 19px', display: 'inline-block', marginBottom:'12px', marginRight: '12px', borderRadius:'8px', color:'#fff', fontWeight:'bold'}

const skillsFormatted = skills.map((skill) => <div style={skillStyles} key={skill}>{skill}</div>)

const mainStyles = {margin: '0 auto', padding:'30px', borderRadius:'5px', backgroundColor: '#fff'}


const main = (
  <main style={mainStyles}>
      <img style={{borderRadius:'50%', width:'25%'}} src={asabenehImage} alt=""/>
      <h2>{author.firstName} {author.lastName}<i class="fas fa-check-circle"></i></h2>
      <p> {title},{country} </p>
      <h2> Skills </h2>
      <div style={{}}> {skillsFormatted} </div>
      <p style={{marginTop: '5px'}}><i class="far fa-clock"></i>Joined on {date}</p>
  </main>
)


const app = (
  <div>
    {main}
  </div>
)



const rootElement = document.getElementById('root')
// rootElement.style.backgroundColor = '#ddd'

ReactDOM.render(app, rootElement)
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
