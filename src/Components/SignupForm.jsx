import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth,db } from '../firebaseConfig';
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';
import errorMapping from '../Utils/errorMapping';
import { themeOptions } from '../Utils/theme';

const SignupForm = ({handleClose}) => {


  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const {setAlert} = useAlert();
    const {theme} = useTheme();


    const checkUsernameAvailability = async()=>{
        const ref = db.collection('usernames');
        const response = await ref.doc(username).get();
        console.log(response.exists);
        return !response.exists;
    }

    const handleSubmit = async ()=>{
        if(!email || !password || !confirmPassword || !username ){
 
            
            setAlert({
                open: true,
                type: 'warning',
                message: 'fill all details'
            });
            return;
        }
        if(password!==confirmPassword){
            setAlert({
                open: true,
                type: 'warning',
                message: 'Password Mismatch'
            });
            return
        }
        
        if(await checkUsernameAvailability()){
        auth.createUserWithEmailAndPassword(email, password).then(async (response)=>{
            const ref = await db.collection('usernames').doc(username).set({
                uid:  response.user.uid
             });
            setAlert({
                open: true,
                type: 'success',
                message: 'account created!'
            });
            handleClose();
        }).catch((err)=>{
            // console.log("sign up failed",err);
            setAlert({
                open: true,
                type: 'error',
                message: errorMapping[err.code] || "Some error occurred please try again"
                
            });
        });
    }
    else{
        setAlert({
            open: true,
            type: 'warning',
            message: 'username taken'
        });
    }
        
    }
    


  return (
    <Box
        p={3}
        style={{
            display:"flex",
            flexDirection:'column',
            gap:'20px'
        }}
    >
        

        <TextField
            type='text'
            variant='outlined'
            label='Enter Username'
            InputLabelProps={{
                style: {
                    color: theme.title
                }
            }}
            InputProps={{
                style: {
                    color: theme.title
                }
            }}
            onChange={(e)=>setUsername(e.target.value)}/>

        <TextField
            type='email'
            variant='outlined'
            label='Enter Email'

            InputLabelProps={{
                style:{
                    color: theme.title
                }
            }}

            InputProps={{
                style:{
                    color: theme.title
                }
            }}

            onChange={(e)=>setEmail(e.target.value)}/>
        <TextField
            type='password'
            variant='outlined'
            label='Enter Password'

            InputLabelProps={{
                style:{
                    color: theme.title
                }
            }}

            InputProps={{
                style:{
                    color: theme.title
                }
            }}

            onChange={(e)=>setPassword(e.target.value)}/>
        <TextField
            type='password'
            variant='outlined'
            label='Confirm Password'

            InputLabelProps={{
                style:{
                    color: theme.title
                }
            }}

            InputProps={{
                style:{
                    color: theme.title
                }
            }}


            onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <Button
            variant='contained'
            size='large'
            onClick={handleSubmit}>
                Signup
        </Button>

    </Box>
  )
}

export default SignupForm