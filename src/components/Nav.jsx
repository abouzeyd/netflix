/* eslint-disable no-whitespace-before-property */
import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
export default function Nav() {

    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    const logout = () => {
        logOut()
        navigate('/login')

    }

    return (
        <Stack className='flex flex-row w-full absolute items-center justify-between z-[100] p-4'>
            <Typography className='text-red text-2xl uppercase items-center'>
                <Link to={'/'}>Netflix</Link>
            </Typography>
            {
            user ?. email ? <Box className=''>
                <Link to={'/account'}>
                    <Button className='text-white lowercase'>
                        Account
                    </Button>
                </Link>

                <Button className='lowercase ml-3 bg-red' variant='contained'
                    onClick={logout}>
                    Logout
                </Button>
            </Box> : <Box className=''>
                <Link to={'/login'}>
                    <Button className='text-white lowercase'>
                        Sign In
                    </Button>
                </Link>
                <Link to={'/signup'}>
                    <Button className='lowercase ml-3 bg-red' variant='contained'>
                        Sign Up
                    </Button>
                </Link>
            </Box>
        } </Stack>
    )
}
