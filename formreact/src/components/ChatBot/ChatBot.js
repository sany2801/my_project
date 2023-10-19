import React, { useState } from 'react';
import axios from 'axios';
import OpenAI from 'openai';
import './bot';


const ChatBot = () => {



  
  const apiKey = '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';
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loader, setLoader] = useState(false)

  const openAi = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  })


const handleSubmit = async ()=>{
  setLoader(true)
try{
  const res = await openAi.chat.completions.create({
    model:"gpt-3.5-turbo-16k-0613",
    messages: [{"role": "user", "content": inputText}],
    temperature: 0.8,
    max_tokens: 1000
  })
  console.log(res.choices[0])
  console.log(res.choices[0].message.content)
  setOutputText(res.choices[0].message.content)
  setLoader(false)
}catch(error){
  console.log(error)
  setLoader(false)
}
}



  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Отправить</button>
      </div>
      <div>
        <p>Вход: {inputText}</p>
        <p>Выход: {outputText}</p>
            {loader ? <p>Looding...</p> : ""}

      </div>
    </div>
  );
};

export default ChatBot;
