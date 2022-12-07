import React, { useState } from 'react'
import style from './Forms.module.css'
import { validationUserName, validationPass } from './validation.js'


function validate(inputs) {
    
    let errors = {};


    if(!validationUserName(inputs.username)){
        errors.username = 'Debe ingresar un correo electronico válido' 
     }else if(!validationPass(inputs.password)){
        errors.password = 'El password debe tener una letra Mayuscula, un caracter especial, un numero y minimo 8 caracteres' 
     }



     return errors;
}


export default function Forms({login}) {

const [userDate, setUserDate] = useState({

    username: '',
    password: '',

})

const [errors, setErrors] = useState({

    username: '',
    password: '',

})



const handleSubmit = (e)=>{
e.preventDefault();
  login(userDate)
 
}


const handleInputChange = (e) => {

setUserDate({...userDate, [e.target.name] : e.target.value})

setErrors(validate({...userDate, [e.target.name] : e.target.value}))


}



  return (

    <form onSubmit={handleSubmit}>
    <div className={style.containerLogin}>

<p>Log In!</p>


<input title='Pruebe con admin' placeholder='Usuario' className={errors.username && style.warning} type="text" name='username' onChange={handleInputChange} value = {userDate.username} autoComplete='sds'/>
{errors.username && <p  className={style.errors}>{errors.username}</p>}




<input placeholder='Password' className={errors.password && style.warning} type="password" name="password" onChange={handleInputChange} value = {userDate.password} autoComplete='sds'/>
{errors.password && <p className={style.errors}>{errors.password}</p>}

<button type='submit'>LOGIN</button>



    </div>
    </form>
  )
}
