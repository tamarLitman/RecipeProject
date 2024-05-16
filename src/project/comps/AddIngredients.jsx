export const AddIngredients = (props) => {
 
    return <>
        <div class="login-box">
            <h2>add an ingredient</h2>
            <form onSubmit={(e) => (e)}>
                <div class="user-box">
                    <input type="text" required="true"></input>
                    <label></label>
                </div>
                <div class="user-box">
                    <input type="text" required="true"></input>
                    <label>password</label>
                </div>
                <a   value={'log in'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input style={{width:100}}  type="submit" value={'submit'}></input>
                </a>
            </form>
        </div>
    </>

}