'use client'

import { InputField } from '@/components/templates/InputField'
import { Form } from '@/components/ui/form'
import React from 'react'
import { useRegisterForm } from './_hooks/useRegisterForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const RegisterPage = () => {
  const { form, submit } = useRegisterForm()

  return (
    <div className='h-dvh w-dvw flex justify-center items-center'>
      <Card className='max-w-lg w-full'>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Fill the form below to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className='space-y-3'>
              <div className="flex gap-5">
                <InputField name='firstName' label='First Name' />
                <InputField name='lastName' label='Last Name' />
              </div>
              <InputField name='email' type='email' label='Email Address' />
              <div className="flex gap-5">
                <InputField name='password' type='password' label='Password' />
                <InputField name='confirmPassword' type='password' label='Confirm Password' />
              </div>
              <p className='text-sm text-gray-500'>Already have an account? <Link href="/login" className='text-blue-500'>Login</Link></p>
              <div className="flex justify-end">
                <Button>Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPage
