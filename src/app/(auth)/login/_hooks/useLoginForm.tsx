import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, LoginType } from '../logics/schema'

export const useLoginForm = () => {
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema)
  })

  const submit: SubmitHandler<LoginType> = (data) => {
    console.log({ data })
  }

  return {
    form,
    submit
  }
}

