import './form.css'
import { useState } from 'react';
import ModalSubmit from '../modalsubmit/modalSubmit';
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const submitFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatório'),
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  number: z.string()
    .nonempty('O número é obrigatório'),
  subject: z.string()
  .nonempty('o assunto é obrigatório'),
})

type submitFormData = z.infer<typeof submitFormSchema>

function Form(){

  const [modalSubmit,setModalSubmit] = useState(false);

  const {register,handleSubmit,formState:{errors}} = useForm<submitFormData>({
    resolver: zodResolver(submitFormSchema),
  })
  
 async function submitForm(data:any){
    console.log(data)
    const x = await setModalSubmit(true)
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  
  return(
    <form onChange={() => setModalSubmit(false)} onSubmit={handleSubmit(submitForm)} className='form'>
          <h4>Nome completo</h4>
          <input {...register('name')} type='text' className='form-input' ></input>
          {errors.name&&<span className='messageErrors'>{errors.name.message}</span>}

          <h4>E-mail</h4>
          <input {...register('email')} type='email' className='form-input' ></input>
          {errors.email&&<span className='messageErrors'>{errors.email.message}</span>}

          <h4>Telefone</h4>
          <input {...register('number')} type='tel' className='form-input' ></input>
          {errors.number&&<span className='messageErrors'>{errors.number.message}</span>}

          <h4>Assunto</h4>
          <textarea {...register('subject')} className='form-input' ></textarea>
          {errors.subject&&<span className='messageErrors'>{errors.subject.message}</span>}

          <button className='button-submit' type='submit'>ENVIAR</button>
          {modalSubmit&&<ModalSubmit/>}
        </form>
  )
}
export default Form;