import React from 'react'
import { cn } from '@/lib/utils'
import { Textarea } from '../ui/textarea'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  name: string
  label?: string
  description?: string
  labelClassName?: string
}

export const TextareaField = ({ name, description, label, labelClassName, ...props }: TextareaFieldProps) => {
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
            <Textarea {...props} {...field} className={cn(props.className)} />
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

