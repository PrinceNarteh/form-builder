import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/lib/utils'

interface InputFieldProps extends React.ComponentProps<"input"> {
  name: string
  label?: string
  description?: string
  labelClassName?: string
}

export const InputField = ({ name, description, label, labelClassName, ...props }: InputFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          {
            label && (
              <FormLabel className={cn('text-gray-500', labelClassName)}>{label}</FormLabel>
            )
          }
          <FormControl>
            <Input {...props} {...field} className={cn(props.className)} />
          </FormControl>
          {
            description && (
              <FormDescription>
                {description}
              </FormDescription>
            )
          }
          <FormMessage className='text-xs' />
        </FormItem>
      )}
    />
  )
}

