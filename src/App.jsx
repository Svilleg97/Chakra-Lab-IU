import { Flex } from "@chakra-ui/react"
import { Header } from "./Header"

function App() {

  return (
    <Flex flexWrap='wrap' gap='24px' justifyContent='center' alignContent='center'>
      <Header/>
    </Flex>
  )
}

export default App
