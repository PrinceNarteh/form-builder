'use client'

import React from "react";
import { ImSpinner2 } from "react-icons/im";
import { Form } from "@/components/ui/form";
import { useForms } from "../_hooks/useForms";
import { Button } from "@/components/ui/button";
import { DialogTemplate } from "@/components/templates/dialog";
import { InputField } from "@/components/templates/InputField";
import { TextareaField } from "@/components/templates/Textarea";


export function CreateFormBtn() {
  const { form, onSubmit } = useForms()

  return (
    <DialogTemplate
      title="Create Form"
      description="Create A New Form To Start Collecting Responses"
      btnLabel="Create Form"
      content={<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <InputField name="title" label="Title" />
          <TextareaField name="description" label="Description" rows={4} />
          <Button className="w-full" disabled={form.formState.isSubmitting}>
            {
              form.formState.isSubmitting ? (
                <ImSpinner2 />
              ) : (
                <span>Save</span>
              )
            }
          </Button>
        </form>
      </Form>}
    />
  )
}

