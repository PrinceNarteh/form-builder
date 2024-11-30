import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToast } from '@/hooks/use-toast'
import { formSchema, FormType } from '@/schemas/form'
import { CreateForm } from '@/actions/form'
import { useRouter } from "next/navigation";

export const useForms = () => {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    toast({
      title: "Loading...",
      description: "Please wait creating the form"
    })
    try {
      const formId = await CreateForm(data)
      router.push(`/builder/${formId}`)
    } catch (error) {
      toast({
        title: "Something Went Wrong!",
        description: "Error Creating Form",
        variant: "destructive"
      })
    }
  }

  return {
    form, onSubmit
  }
}

