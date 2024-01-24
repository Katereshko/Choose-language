import './App.css';
import {useState} from 'react';
import {data} from './data';
import Header from './Header';

function App() {
  const [language, setLanguage] = useState(0);
  const {id, name, image, peopleSpeak} = data[language];

  const previousLanguage = () =>{
    setLanguage((language => {
      language--;
      if(language < 0){
        language = data.length - 1;
      }
      return language;
    }))
  }

  const nextLanguage = () =>{
    setLanguage((language => {
      language++;
      if(language > data.length -1){
        language = 0;
      }
      return language;
    }))
  }

  const [list, setList] = useState(data);
  const removeLanguage = (id) => {
    console.log(id);
    let newList = list.filter(item => item.id !== id);
    console.log(newList);
    setList(newList);
  }

  return(
    <div className="App">
      <Header/>

      <div className="block">
        <div className="container">
          <h2>{id} - {name}</h2>
        </div>
        <div className="container">
          <img src={image} width="300px" alt="flag"/>
        </div>
        <div className="container">
          <p>{peopleSpeak} of the world speaks this language</p>
        </div>
        <div className="button-container container">
          <button onClick={previousLanguage}>Previous</button>
          <button onClick={nextLanguage}>Next</button>
        </div>
      </div>

        <div className="block">
          <div className="container">
            <h3>Make a list of languages that you would learn - delete the rest using buttons: ⬇️</h3>
            <h3 className="languages_count">You are going to learn {list.length} languages!</h3>
          </div>

          <div className="container_horizontal">

          {list.map( (element => {
          const {id, name, image} = element;

          return(
            <div key={id}>
              <div className="list_item_vertical">
                <div className="container">
                  <h3>{id} - {name}</h3>
                </div>
                <div className="container">
                  <img src={image} alt="flag_small" width="100px"/>
                </div>
                <div className="container">
                  <button className="btn-remove" onClick={() => removeLanguage(id)}>Remove</button>
                </div>
              </div>
            </div>
          )
        
          }))}

        </div>

        <div className="container">
          <button className="btn-delete" onClick={() => setList([])}>delete all</button>
        </div>

        </div>

    </div>
  )

}

export default App;
