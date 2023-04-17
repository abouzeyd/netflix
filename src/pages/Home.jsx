/* eslint-disable no-whitespace-before-property */
import React from 'react'
import {Stack} from '@mui/material'
import Main from '../components/Main'
import Row from '../components/Row'
import {request} from '../request'


export default function Home() {


    return (
        <Stack>
            <Main/>
            <Row title='Popular'
                fetchURL={
                    request ?. requestPopular
                }
                rowID='1'/>
            <Row title='Up coming'
                fetchURL={
                    request ?. requestUpcoming
                }
                rowID='2'/>
        </Stack>
    )
}
