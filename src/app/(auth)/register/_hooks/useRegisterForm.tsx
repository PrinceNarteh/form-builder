import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { registerSchema, RegisterType } from '../logics/schema'

export const useRegisterForm = () => {
  const form = useForm<RegisterType>({
    resolver: zodResolver(registerSchema)
  })

  const submit: SubmitHandler<RegisterType> = (data) => {
    console.log({ data })
  }

  return {
    form,
    submit
  }
}

