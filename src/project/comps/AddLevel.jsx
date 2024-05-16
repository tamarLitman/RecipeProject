import { useEffect, useState } from "react"
import { getLevel, postLevel } from "../api"
import './NavBar.css'

export const AddLevel = () => {
  const [listLevel, setLList] = useState()
  useEffect(() => {
    getLevel()
      .then(x => {
        debugger
        setLList(x.data)
      })
      .catch(x => {
        if (x && x.status != 200)
          alert("coulden't get the recipe categories")
      })
  }, [])
  const add = (event) => {
    event.preventDefault()
    const level = {
      id: 0,
      name: event.target[0].value
    }
    postLevel(level)
      .then(x => {
        console.log(x);
        alert('then')
      }
      )
      .catch()
  }
  return <>
    <div id="list">
      <section>
        {listLevel && listLevel.map(x =>
        (<div>
          <p>{x.name}</p>
          <br></br>
          <br></br>
        </div>)
        )}
      </section>
      <form style={{ marginLeft: 240 }} onSubmit={e => add(e)}>
        <input placeholder="level name"></input>
        <input type="submit" value={'add'}></input>
      </form>
    </div>
  </>
}