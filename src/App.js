import {useState} from "react";
import './App.css';
import ContentMinimized from "./ContentMinimized";
import Content from "./Content";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header from "./Header";

function App() {
  
  const [minimize , setMinimize] = useState(false);
  const [verticalMinimize, setVerticalMinimize] = useState(false);
 
  const onClickHandler = () => {
      setMinimize(!minimize);
  }

  const onClickVerticalHandler = () => {
    setVerticalMinimize(!verticalMinimize);
  };
  return (
  <div className="App">
    {
      verticalMinimize ? (
        <Header3 verticalHandler = {onClickVerticalHandler} />
      ): minimize?(
        <Header2 handler = {onClickHandler} verticalHandler= {onClickVerticalHandler} />
      ): minimize && verticalMinimize ? (
        <Header handler = {onClickHandler} verticalHandler = {onClickVerticalHandler}/>
      ) : (
        <Header handler = {onClickHandler} verticalHandler = {onClickVerticalHandler}/>
      )
    }
     {
    (!minimize && !verticalMinimize)? (
      <Content /> 
    ):
    <ContentMinimized />
    }
      </div>
  );
}

export default App;