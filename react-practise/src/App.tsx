import { useEffect, useState } from "react";
import List from "./components/List";
import { academicYearList } from "./Data";

const App = () => {
  const dataList = academicYearList;
  const [list, setList] = useState<any>();
  
  useEffect(()=>{
    setList(dataList)
  },[dataList])
  
function clickRow(list:any) {
  setList(list)
}

  return (
    <>
      <h1>List Practise - Day 02</h1>
     <List clickRow={clickRow}  itemList={list}/>
    </>
  )
}

export default App;