import { Text, Button, Box, Flex, Icon, Center} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { MdRefresh, MdOutlineDeleteOutline} from 'react-icons/md'

export function TareasRealizadas(params){
    const { tarea, onMarcarPendiente, onBorrarDefinitivo} = params

   
    return (
        <> 
       <Box key={tarea.id}> 
       <Center>
             <Flex bg="red.100" m="4" w="75%" alignItems="center"  justifyContent="center">
                 <Text w="50%"  m="2" p="2" ><CheckIcon p="1"/>{tarea.tarea} </Text>
                 <Button bg="pink.300" variant='outline' size="xs"m="1" onClick={() => onMarcarPendiente(tarea.id)}><Icon as={MdRefresh}/></Button>
                 <Button bg='red.300' variant='outline' size="xs" m="1" onClick={() => onBorrarDefinitivo(tarea.id)}>  <Icon as={MdOutlineDeleteOutline} /> </Button>
             </Flex>   
        </Center>         
        </Box>
       
        </>
    )
}