import { useEffect, useState } from "react"
import { getCategory, postCategory } from "../api"
import './NavBar.css'

export const AddCategory = () => {
  const [listCategories, setCList] = useState()
  useEffect(() => {
    getCategory()
      .then(x => {
        debugger
        setCList(x.data)
      })
      .catch(x => {
        if (x && x.status != 200)
          alert("coulden't get the recipe categories")
      })
  }, [])
  const add = (event) => {
    event.preventDefault()
    const category = {
      id: 0,
      name: event.target[0].value
    }
    postCategory(category)
      .then(x => {
        alert('then')
        console.log(x);
      }
      )
      .catch()
  }
  return <>
    <div id="list">
      <section >
        {listCategories && listCategories.map(x =>
        (<div>
          <p>{x.name}</p>
          <br></br>
          <br></br>
        </div>)
        )}
      </section>
      <form style={{marginLeft:240}} onSubmit={e => add(e)}>
        <input placeholder="category name"></input>
        <input type="submit" value={'add'}></input>
      </form>
    </div>
  </>
}