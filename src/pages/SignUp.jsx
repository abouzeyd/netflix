import React, {useState} from 'react'
import {
    Stack,
    Typography,
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    IconButton
} from '@mui/material'
import {Icon} from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import {VerifyErroCode} from '../errorFirebase'


export default function SignUp() {
    const {signUp} = UserAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }


    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/login')
        } catch (error) {
            const error_code = VerifyErroCode(error.code)
            console.log(error_code);
        }
    }

    return (
        <Stack>
            <Box className='w-full h-screen'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7asGZsIW-6nNKHnJQNcK1CfN-R8azUzmhA&usqp=CAU' alt='netflix' className='h-full w-full object-cover sm:block'/>
                <Box className=' absolute top-0 left-0 w-full h-screen py-10'>
                    <Box className='w-full fixed '>
                        <Box className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                            <Box className='max-w-[360] py-[90px]'>
                                <Typography className='text-center' variant='h4'>Sign up</Typography>
                                <form className='flex flex-col p-9'
                                    onSubmit={handleSubmit}>
                                    <TextField className='bg-white my-6' placeholder='email' focused
                                        onChange={handleChangeEmail}
                                        name={email}/>
                                    <TextField className='bg-white my-6' placeholder='password' focused
                                        onChange={handleChangePassword}
                                        name={password}
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        InputProps={
                                            {
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleShowPassword}
                                                            edge="end">
                                                            <Icon icon={
                                                                showPassword ? eyeFill : eyeOffFill
                                                            }/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }
                                        }/>
                                    <Button variant='contained' className='bg-red' type='submit'>Sign up</Button>

                                    <Box className='flex items-center justify-between px-4 text-gray'>
                                        <FormControlLabel control={
                                                <Checkbox
                                            color='primary'/>
                                            }
                                            label="Remember me"/>
                                        <Typography>Need help ?</Typography>
                                    </Box>
                                    <Typography variant='h9' className='px-4'>
                                        Already subsscribed to Netflix ?
                                        <Link to={'/login'}
                                            className='ml-3 text-xs text-blue '>Sign In</Link>
                                    </Typography>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Stack>
    )
}
