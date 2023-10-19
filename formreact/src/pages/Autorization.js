import React, { useState, useEffect } from 'react';
import axios from 'axios';
function FileUpload() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5Njk2ODMzNywianRpIjoiZWYzODJiMmNjY2Y1NDdkYWE4OWRiZjM5ODE2OTU3NTAiLCJ1c2VyX2lkIjoxNiwiZnVsbF9uYW1lIjoiTWFrcyIsInBvc2l0aW9uIjoiQ0VPIiwiY29tcGFueV9uYW1lIjoiTXV6ZSIsImFjY291bnRfcGhvdG8iOiJwaG90by91c2VyL2RlZmF1bHQvQXZhdGFyLmpwZyIsInJvbGUiOiJIRUFEIiwibmlja25hbWUiOiJNXzEifQ.CPxrM1YvTEgAPAtJx-G5GeaTrT2gsO0aFL-Ptw-EG6A'

  const [fileContent, setFileContent] = useState(null);
  const [title, setTitle] = useState("Take Muze")
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name)
    setTitle(file.name)
    setFileContent(event.target.files[0])
      if (fileContent) {
          const reader = new FileReader();

          reader.readAsArrayBuffer(event.target.files[0]);

          reader.onload = function() {
              setFileContent(reader.result);
            };
        
            reader.onerror = function() {
        console.error(reader.error);
      };
    }
};
const handleChange = (e)=>{
  const { name, value } = e.target;
  setUser({...user, [name]: value})
  console.log(e.target.name)
  
}

const [user, setUser]= useState({
  name: "",
  lastName: "",
  age: ""
})
console.log(user)
const test= ()=>{

  setUser({...user, name: "wefewf"})
}


  const handleSubmit = async () => {
    try {
        // Отправляем данные на бэкэнд
        const response = await axios.post(
            `https://chat.agiledreamers.com/chat/?title=${title}`, 
            {title},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              }
            }
        );
        console.log(response); // Обработка ответа от бэкэнда

    } catch (error) {
        console.error(error);
        

    }
};
  return (
    <div>
      <button onClick={test}>CLICK</button>
      <input type="file" onChange={handleFileChange} multiple/>
      <input type='text' name='name' value={user.name} onChange={handleChange}></input>
      <input type='text' name='lastName' value={user.lastName} onChange={handleChange}></input>
      <input type='text' name='age' value={user.age} onChange={handleChange}></input>
    </div>
  );
}

export default FileUpload;

