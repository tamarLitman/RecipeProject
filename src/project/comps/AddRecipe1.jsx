// import { useSelector } from 'react-redux'
// import './NavBar.css'
// import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Popover, Select, Typography } from '@mui/material'
// import { useEffect, useRef, useState } from 'react'
// import { getCategory, getIngredients, getLevel, postRecipe } from '../api'
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// //import { Inbox } from '@mui/icons-material'
// // import {OutlinedInput} from '@mui/material/OutlinedInput';
// // import {InputLabel} from '@mui/material/InputLabel';
// // import {MenuItem} from '@mui/material/MenuItem';
// // import {FormControl} from '@mui/material/FormControl';
// // import {Select} from '@mui/material/Select';
// //import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


// export const AddRecipe1 = () => {
//     const levelRef = useRef()
//     const categoryRef = useRef()
//     const ingredientRef = useRef()
//     const amountRef = useRef()
//     const user = useSelector(x => x.currentUser)
//     const [listCategories, setCList] = useState()
//     const [listLevels, setLList] = useState()
//     const [listIngredients, setIList] = useState()
//     // let ingredient = {}
//     const [ingredient, setIngredient] = useState({})
//     // let thisIngredients = []
//     const [thisIngredients, setThisIngredients] = useState([])
//     //const amountRef = useRef()
//     //const [anchor, setAnchor] = useState(null);
//     const [personName, setPersonName] = useState([]);
//     const ITEM_HEIGHT = 48;
//     const ITEM_PADDING_TOP = 8;
//     const MenuProps = {
//         PaperProps: {
//             style: {
//                 maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//                 width: 250,
//             },
//         },
//     };
//     const theme = useTheme();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//     const id = open ? 'simple-popover' : undefined;
//     const [Open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         debugger
//         let i = listIngredients.filter(x => x.id == ingredientRef.current.id)[0]
//         setIngredient(i)
//         debugger
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
//     function getStyles(name, personName, theme) {
//         return {
//             fontWeight:
//                 personName.indexOf(name) === -1
//                     ? theme.typography.fontWeightRegular
//                     : theme.typography.fontWeightMedium,
//         };
//     }
//     //     const handleClick = (event) => {
//     //         setAnchor(anchor ? null : event.currentTarget);
//     //     };
//     //     return (
//     //         <div>
//     //             <Button aria-describedby={id} type="button" onClick={handleClick}>
//     //                 Toggle Popup
//     //             </Button>
//     //             <BasePopup id={id} open={open} anchor={anchor}>
//     //                 <PopupBody>The content of the Popup.</PopupBody>
//     //             </BasePopup>
//     //         </div> //);
//     // }


//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     // const handleClose = () => {
//     //     setAnchorEl(null);
//     // };
//     useEffect(() => {
//         getCategory()
//             .then(x => { setCList(x.data) })
//             .catch(x => {
//                 if (x && x.status != 200)
//                     alert("coulden't get the recipe categories")
//             })
//         getLevel()
//             .then(x => { setLList(x.data) })
//             .catch(x => {
//                 if (x && x.status)
//                     alert("couldn't get the recipe's levels")
//             })
//         getIngredients()
//             .then(x => { setIList(x.data) })
//             .catch(x => {
//                 if (x && x.status != 200)
//                     alert("coulden't get the list of ingredients")
//             })
//     }, [])


//     const add = (event) => {
//         debugger
//         console.log(categoryRef.current.id);
//         const category = listCategories.find(x => x.id == categoryRef.current.id)
//         const level = listLevels.find(x => x.id == levelRef.current.id)
//         const recipe = {
//             "name": event.target[0].value,
//             "pic": event.target[1].value,
//             "preperationTime": event.target[2].value,
//             "userId": user.id,
//             "userName": `${user.firstName + user.lastName}`,
//             "categoryId": categoryRef.current.id,
//             "categoryName": category.name,
//             "levelId": levelRef.current.id,
//             "levelName": level.name,
//             "note": event.target[5].value,
//             "instructions": event.target[6].value
//         }
//         postRecipe(recipe)
//             .then(
//                 x => {
//                     thisIngredients.forEach(y => {
//                         const ingredientToRecipe = {
//                             "id": 0,
//                             "recipeId": x.data.id,
//                             "ingredientId": y.id,
//                             "ingredientName": y.name,
//                             "amount": y.amount
//                         }
//                     })
//                 }
//             )
//             .catch()
//     }
//     const addIngredient = () => {
//         debugger
//         let ing = ingredient
//         ing.amount = amountRef.current.value
//         // setIngredient({ ...ingredient, amount: amountRef.current.value })
//         setIngredient(ing)
//         debugger
//         // ingredient.amount = amountRef.current.value
//         let arr = thisIngredients
//         arr.push(ing)
//         setThisIngredients(arr)
//         // setThisIngredients([...thisIngredients, ingredient])
//         // thisIngredients.push(ingredient)
//         console.log(thisIngredients);
//         handleClose()
//     }
//     const handleChange = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setPersonName(
//             typeof value === 'string' ? value.split(',') : value,
//         );
//     };

//     return <>
//         <div class="login-box">
//             <form onSubmit={e => add(e)} style={{ height: 1000 }}>
//                 <h2>add a recipe</h2>

//                 <div class="user-box">
//                     <input type="text" required="true"></input>
//                     <label>name</label>
//                 </div>
//                 <div class="user-box">
//                     <input type="picture" required="true"></input>
//                     <label>picture</label>
//                 </div>
//                 <div class="user-box">
//                     <input type="text" required="true"></input>
//                     <label>preperation time</label>
//                 </div>
//                 <FormControl style={{ width: 150 }}>
//                     <InputLabel >categories</InputLabel>
//                     <Select>
//                         <MenuItem value="">
//                             <em>all categories</em>
//                         </MenuItem>
//                         {listCategories && listCategories.map(x =>
//                             <MenuItem id={x.id} className="{x.category}" ref={categoryRef}>
//                                 {x.name}
//                             </MenuItem>)}
//                     </Select>

//                 </FormControl>

//                 <FormControl style={{ width: 150 }}>

//                     <InputLabel >levels</InputLabel>
//                     <Select>
//                         <MenuItem value="">
//                             <em>all levels</em>
//                         </MenuItem>
//                         {listLevels && listLevels.map(x =>
//                             <MenuItem id={x.id} ref={levelRef}>
//                                 {x.name}
//                             </MenuItem>)}
//                     </Select>
//                 </FormControl>


//                 {/* 
//                 <div class="user-box">
//                     <input type="text" required="true"></input>
//                     <label>note</label>
//                 </div>
//                 <div class="user-box">
//                     <input type="text" required="true"></input>
//                     <label>instructions</label>
//                 </div>
//                 <a>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <input style={{ width: 100 }} type="submit" value={'send'}></input>
//                 </a>
//                        */}



//                 <FormControl sx={{ m: 1, width: 300 }}>
//                     <InputLabel id="demo-multiple-name-label">ingredients</InputLabel>
//                     <Select
//                         labelId="demo-multiple-name-label"
//                         id="demo-multiple-name"
//                         multiple
//                         value={personName}
//                         onChange={handleChange}
//                         input={<OutlinedInput label="ingredients" />}
//                         MenuProps={MenuProps}>
//                         {listIngredients && listIngredients.map((x) => (
//                             <MenuItem
//                                 ref={ingredientRef}
//                                 id={x.id}
//                                 key={x.id}
//                                 value={x.id}
//                                 style={getStyles(x.name, personName, theme)}>
//                                 {x.name}
//                                 {/* <Button aria-describedby={x.id} variant="contained" onClick={handleClick}>
//                                     Open Popover
//                                 </Button>
//                                 <Popover
//                                     id={x.id}
//                                     open={open}
//                                     anchorEl={anchorEl}
//                                     onClose={handleClose}
//                                     anchorOrigin={{
//                                         vertical: 'bottom',
//                                         horizontal: 'left',
//                                     }}
//                                 >
//                                     <Typography sx={{ p: 2 }}>
                                       
//                                         </Typography>
//                                 </Popover> */}
//                                 <Button variant="outlined" onClick={handleClickOpen}>
//                                     Open form dialog
//                                 </Button>
//                                 <Dialog
//                                     open={Open}
//                                     onClose={handleClose}
//                                     PaperProps={{
//                                         component: 'form',
//                                         onSubmit: (event) => {
//                                             // event.preventDefault();
//                                             const formData = new FormData(event.currentTarget);
//                                             const formJson = Object.fromEntries(formData.entries());
//                                             const amount = formJson.amount;
//                                             console.log(amount);
//                                             handleClose();
//                                         },
//                                     }}>
//                                     <DialogTitle>Add an Ingredient</DialogTitle>
//                                     <DialogContent>
//                                         <DialogContentText>
//                                             to add an ingredient input the wanted amount
//                                         </DialogContentText>
//                                         <TextField
//                                             // autoFocus
//                                             required
//                                             margin="dense"
//                                             id="name"
//                                             name="amount"
//                                             label="amount"
//                                             value={1}
//                                             type="number"
//                                             fullWidth
//                                             variant="standard"
//                                         />
//                                         <input type='text' value={1} placeholder='amount' ref={amountRef}></input>
//                                     </DialogContent>
//                                     {/* </DialogContent> */}
//                                     <DialogActions>
//                                         <Button onClick={handleClose}>Cancel</Button>
//                                         <Button onClick={addIngredient}>Add</Button>
//                                     </DialogActions>
//                                 </Dialog>
//                             </MenuItem>))}
//                     </Select>
//                 </FormControl>
//                 <div class="user-box">
//                     <input type="text" required="true"></input>
//                     <label>note</label>
//                 </div>
//                 <div class="user-box">
//                     <input type="text" required="true"></input>
//                     <label>instructions</label>
//                 </div>
//                 <a>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <input style={{ width: 100 }} type="submit" value={'send'}></input>
//                 </a>
//             </form>
//         </div>

//     </>
// }
