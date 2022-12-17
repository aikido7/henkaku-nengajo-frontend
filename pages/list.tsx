import type { NextPage } from 'next'
import {
  Box,
  Button,
  Image,
} from '@chakra-ui/react'
import Layout from '@/components/Layout'
import { SimpleGrid } from '@chakra-ui/react'
import { useShoppingCart , DebugCart } from 'use-shopping-cart'
import cartimage from 'public/cart.png'
import React from 'react';
const Lists: NextPage = () => {

    const nengajoLists = [...Array(20)].map((data,index)=>{
        return {
          name: '',
          description:
            'Nengajo description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      })

    return (
        <Layout>
          <SimpleGrid
            columns={{ sm: 3, md: 4 }}
            spacing="30px"
            p="0"
            minChildWidth='150px'
            textAlign="center"
            rounded="lg"
          >

            {nengajoLists &&
            nengajoLists.map((nengajoList, index) => (
              <div key={index}>
                <SimpleGrid
                  textAlign="right">
                    <Box
                      bg='' w='100%' p={1} color='white'>
                    </Box>
                </SimpleGrid>

                <Image src='https://via.placeholder.com/500' alt='' />
                {nengajoList.name}
                <Box
                  bg='' w='100%' p={1.5} color='white'>
                </Box>

                <SimpleGrid
                  textAlign="right">
                    <Button
                      colorScheme='gray'>
                      Add cart
                    </Button>
                </SimpleGrid>
              </div>
            ))}
          </SimpleGrid>
        </Layout>
      )
    }

export default Lists


