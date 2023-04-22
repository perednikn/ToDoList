import { Button, Input, Flex } from '@chakra-ui/react'
import  { FormControl, Icon, Center} from '@chakra-ui/react'
import { MdOutlineLibraryAdd } from 'react-icons/md'


export function Formulario(props){

    const {tarea, handleSubmit, handleChange} = props

    return(
        <>
        <Center>
        <FormControl onSubmit={handleSubmit} bg="blue.200" m="2" p="4" alignItems="center"  justifyContent="center">
          
            <Flex bg="blue.100"  alignItems="center"  justifyContent="center" m="3">

                <Input 
                    p="1" m="1" 
                    type="text" 
                    placeholder="Ingresa la tarea" 
                    onChange={handleChange}
                    value={tarea} 
                    />

                <Button  p="1" m="1" variant='outline' onClick={handleSubmit} bg="green"><Icon as={MdOutlineLibraryAdd} /></Button>   
            </Flex> 
           
        </FormControl> 
        </Center>  
        </>
    )
}