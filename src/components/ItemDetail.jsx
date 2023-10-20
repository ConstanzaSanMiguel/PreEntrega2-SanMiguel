import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Image, Heading, Text, Stack, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import Contador from './Contador'

const ItemDetail = ({ products }) => {

    const { id } = useParams()

    const filteredProduct = products.filter((producto) => producto.id === id)
    console.log(filteredProduct)

    return (
        <>
            {
                filteredProduct.map((p) => {
                    return (
                        <>
                            <Card maxW='sm' variant='outline' align='center' margin={1} display='flex' >
                                <CardBody>
                                    <Image /> <p>Image here</p>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md' fontSize='2xl'>{p.name}</Heading>
                                    </Stack>
                                    <Text>
                                        {p.description}
                                    </Text>
                                    <Text>
                                        ${p.price}
                                    </Text>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2' mt={1} >
                                            <Contador prods={p.name} />
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default ItemDetail