import React from 'react'
import useSWR from 'swr'
import { Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'


const UserList = () => {
    const { data, error, mutate } = useSWR('http://localhost:7100/swr/user/list/5', {
        // revalidateOnFocus: false,
        // refreshInterval: 1000, // Data will be reloading after 1 sec
    })

    if (error) {
        return console.log(error)
    }

    return (
        <Stack spacing={2}>
            <Button onClick={() => mutate()}>Fetch Data</Button>
            {data?.map((user) => {
                return <Card key={user.id} raised sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={user.avatar}
                            alt={user.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.lorem}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            })}
        </Stack>
    )
}

export default UserList