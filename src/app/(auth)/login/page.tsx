'use client'

import React from 'react'
import Link from 'next/link'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { InputField } from '@/components/templates/InputField'
import { useLoginForm } from '@/app/(auth)/login/_hooks/useLoginForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const LoginPage = () => {
  const { form, submit } = useLoginForm()

  return (
    <div className='h-dvh w-dvw flex justify-center items-center'>
      <Card className='max-w-sm w-full'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className='space-y-3'>
              <InputField name='email' type='email' label='Email Address' />
              <InputField name='password' type='password' label='Password' />
              <p className='text-sm text-gray-500'>Don't have an account? <Link href="/register" className='text-blue-500'>Register</Link></p>
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

export default LoginPage
