// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React,{useState} from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
import friendData from '../dummy-data/friends'





export default function App() {
  
  const[data,setData]=useState(friendData)//数据来源 array
  const[search,setSearch]=useState("")

  //state中的value只能靠setfunction 才能改变，所以为了用这个value值就只能创建一个新的
  //变量newData进行储存，然后再带入到set Function中进行改变state
  //这个changeStatus（）的目的就是当点击button的时候可以将指定的板块进行改变，
  //这个就要找到唯一标识id,达到我们的目的
  const changeStatus=(id)=>{
    //点击之后触发的事件：1，找出需要改变的值并付以新的名字
    const newdata=data.map(item=>{
      if(item.id===id){
        return { ...item, married:(!item.married)}
      }else{
        return item
      }
      

    })
    //2.然后将新的值带入到state中将其原来的数据进行改变
    //3.回到onClick事件的地方，带入function，一定要记得重新生成一个function，不能之间带入state
    //function(()=>{ setData(newdata)})
    setData(newdata)

  }
  //trim()method表示删除string前后的空格
   const changeSearch=()=>{
    const searchContent=search.trim().toLowerCase()
    if (! searchContent){
      return data
    }else{
      return data.filter(item=>{
        return (item.name.toLowerCase().includes(searchContent))
      })
    }
    

    
   }
  

  return (
    <div className='app-friends container'>
      < Search setSearch={setSearch} />
      
      <FriendsList friends={changeSearch()} changeStatus={changeStatus}/>
    </div>
  )
  //changeSearch()之所以有（）是表示这个函数立即使用并返回return值，不是仅仅与changeStatus一样只调
  //函数内容
}
