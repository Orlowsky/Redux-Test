import React from 'react';
import './App.css';
import List from "./js/components/List";
import Form from "./js/components/Form";



// window.store = store;
//     window.addArticle = addArticle;
//     store.subscribe(() => console.log('Look ma, Redux!!'))
//     store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
//     console.log(store.getState())


const App = () => (
  <div className="row mt-5">
  <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
    <List />
  </div>
  <div className="col-md-4 offset-md-1">
    <h2>Add a new article</h2>
    <Form />
  </div>
</div>
);



export default App;
