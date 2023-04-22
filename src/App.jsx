import { useCallback, useState } from 'react'
import { Formulario } from './components/Formulario'
import { Tarea } from './components/Tarea'
import { TareasRealizadas  } from './components/TareasRealizadas'
import { Button, FormControl, Heading, Center } from '@chakra-ui/react'


function App() {

  const [ tarea, setTarea ] = useState('')
  const [ listadoTareas, setListadoTareas ] = useState([])
  const [ tareasRealizadas, setTareasRealizadas ] = useState([])


  function handleSubmit(elem){
    elem.preventDefault()
    
    if (tarea === ""){

      alert("debe ingresar una respuesta")
      return
    }

    const nuevaTarea = {
      id : Date.now(),
      tarea: tarea,
      completed: false
    }

    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea('')
    

  }

    function handleChange(e){
      
      setTarea(e.target.value)
      
    }

    function onBorrarTarea(id){
      const temp = listadoTareas.filter(item=> item.id !== id)
      setListadoTareas(temp)
    }

    function onActualizar(nuevaTarea){
      const {id, tarea} = nuevaTarea

      const temp = [...listadoTareas]
      const elem = temp.find(item => item.id === id)
      elem.tarea = tarea

      setListadoTareas(temp)
    }

    function onMarcarHecha(id){
      //Creo un array sin la tarea hecha, para actualizar listado de pendientes
      const temp = listadoTareas.filter(item=> item.id !== id)
      setListadoTareas(temp)

      //Identifico el elemento realizado, lo individualizo y lo sumo a tareasRealizadas
      const tempHecha = listadoTareas.find(item=> item.id === id)
      const actualizaHecha = [tempHecha, ...tareasRealizadas]
      setTareasRealizadas(actualizaHecha)

    }

      function onMarcarPendiente(id){
        //Individualizo la tarea a marcar, la asigno a un nuevo array con las tareas anteriores
        //Actualizo el valor de listadoTareas

        const tareaPendiente = tareasRealizadas.find((item)=>item.id === id )
        const actPendientes = [tareaPendiente, ...listadoTareas]
        setListadoTareas(actPendientes)

        //Elimino a la tarea de 'tareasRealiadas' 
        const actRealizadas = tareasRealizadas.filter(item=> item.id !== id)
        
        setTareasRealizadas(actRealizadas)
      }

      function onBorrarDefinitivo(id){
        const temp = tareasRealizadas.filter(item=> item.id !== id)
        setTareasRealizadas(temp)
      }

  return (
    <>
      <FormControl bg="blue.200" m="2" p="4" w="80%"> 
        
        <Center><Heading as="h2"> Ingrese aquí una tarea </Heading></Center>
      <Formulario 
        tarea={tarea}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
         />
      </FormControl>

      <FormControl bg="green.200" m="2" p="4" w="80%">  
        <Center><Heading as="h2"> Estas son las tareas pendientes: </Heading></Center>
        {listadoTareas.map( (tarea) => 
        <Tarea 
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          onBorrarTarea={onBorrarTarea}
          onActualizar={onActualizar}
          onMarcarHecha={onMarcarHecha}/> 
        )}
      
      </FormControl>

      <FormControl bg="red.200" m="2" p="4" w="80%">
          <Center><Heading as="h2"> Tareas realizadas </Heading></Center>
       
          {tareasRealizadas.map((tarea) =>
                  <TareasRealizadas 
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  onBorrarTarea={onBorrarTarea}
                  onMarcarPendiente={onMarcarPendiente}
                  onBorrarDefinitivo={onBorrarDefinitivo}/> 
                )}
     
      </FormControl>
    </>
  )
}

export default App
