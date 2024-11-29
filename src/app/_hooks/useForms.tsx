import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
})
type FormType = z.infer<typeof formSchema>

export const useForms = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log({ data })
  }

  return {
    form, onSubmit
  }
}

