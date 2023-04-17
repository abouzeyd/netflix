/* eslint-disable no-undef */
import React from 'react'
import {Box, Typography} from '@mui/material'
import SavedShows from '../components/SavedShows'

export default function Account() {
    return (
        <Box>
            <Box className='absolute w-full h-[550px] bg-gradient-o-r from-black'/>
            <Box className='w-full h-full'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7asGZsIW-6nNKHnJQNcK1CfN-R8azUzmhA&usqp=CAU' alt='text' className='h-full w-full object-cover'/>
            </Box>
            <Box className='absolute top-[20%] w-full p-4 md:p-8'>
                <Typography className='text-xl md:text-4xl mb-3 text-white'>My Shows</Typography>
            </Box>
            <SavedShows/>
        </Box>
    )
}
