import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const MotionButton = motion.custom(Button)

export default function Home() {
  return (
    <Container maxW='2xl'>
      <Head>
        <title>Indrajit Sarkar.</title>
      </Head>

      <Center flexDirection='column' minH='100vh'>
        <Image
          borderRadius='full'
          boxSize={{base: '120px', md: '150px'}}
          src='/profile.jpg'
          alt='Indrajit Sarkar'
          mb={5}
        />
        <Text mb={2} fontSize='sm' fontFamily='Fira Mono' color='primary'>
          Hello, my name is
        </Text>
        <Heading size='2xl' letterSpacing={1}>
          Indrajit Sarkar.
        </Heading>
        <Box mt={2}>
          <Text fontSize='sm' textAlign='center' letterSpacing={1}>
            I’m a student, currently pursuing BCA. I love building/designing
            websites and applications. Currently working with various web
            technologies.
          </Text>
        </Box>
        <Link href='/about'>
          <MotionButton
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            mt={5}
            bg='primary'
            color='primaryDark'
            borderRadius='full'>
            Get in touch
          </MotionButton>
        </Link>
      </Center>
    </Container>
  )
}
