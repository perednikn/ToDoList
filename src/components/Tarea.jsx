import { useState } from 'react'
import { Text, Button, Input, Flex, Icon, Center} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

import { MdOutlineModeEditOutline, MdOutlineDownloadDone, MdSaveAs, MdOutlineDeleteOutline } from 'react-icons/md'


export function Tarea(params){
    const { tarea, onBorrarTarea, onActualizar, onMarcarHecha} = params

    const [ modoEdicion, setModoEdicion ] = useState(false)




    function ModoEdicionActivado () {

        const [valor, setValor] = useState(tarea.tarea)

        function handleChange(e){
            const nuevaTarea = e.target.value
            setValor(nuevaTarea)
        }

        function handleClick(e){
            e.preventDefault()
            onActualizar({
                id: tarea.id, tarea: valor})
            setModoEdicion(false)
        }
        return(
            <>
            <Center>
        <Flex bg="gray.100" m="4" w="75%" alignItems="center"  justifyContent="center">
            <Input w="50%" m="2" p="2" bg="white.100"
                type="text" 
                value={valor}
                onChange={handleChange}/>

            <Button colorScheme='green' variant='outline' onClick={handleClick} size="xs" m="1">
                <Icon as={MdSaveAs}/>
            </Button>  
            <Button colorScheme='red' variant='outline' size="xs"  m="1" onClick={() => setModoEdicion(false)}> Cancel</Button>
            {/* <Button colorScheme='red' variant='outline' size="xs"  m="1" onClick={() => onBorrarTarea(tarea.id)}> Borrar </Button> */}
            </Flex>
           </Center> 
           </>
        )
    }

   

    function ModoEdicionDesactivado(){
        return(
            <>
            <Center>
            <Flex bg="green.100" m="4" w="75%" alignItems="center"  justifyContent="center">
             <Text w="50%" m="2" p="2"><ArrowRightIcon p="1"/>{tarea.tarea} </Text>
              <Button  variant='outline' size="xs"m="1" bg="blue.300" onClick={() => setModoEdicion(true)}> <Icon as={MdOutlineModeEditOutline} /> </Button>
              <Button  variant='outline' size="xs" m="1" bg="green.300" onClick={() => onMarcarHecha(tarea.id)}> <Icon as={MdOutlineDownloadDone} />  </Button>
              <Button  variant='outline' size="xs" m="1" bg="red.300" onClick={() => onBorrarTarea(tarea.id)}> <Icon as={MdOutlineDeleteOutline} /> </Button>
            </Flex>
            </Center>
            </>
        )
    }
    
    return (
        <>
            <div key={tarea.id}> 
                {modoEdicion 
                ? <ModoEdicionActivado />
                : <ModoEdicionDesactivado />}

            </div>

        </>
    )
}