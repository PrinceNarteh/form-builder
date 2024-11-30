'use client'

import React from "react";
import { ImSpinner2 } from "react-icons/im";
import { Form } from "@/components/ui/form";
import { useForms } from "../_hooks/useForms";
import { Button } from "@/components/ui/button";
import { DialogTemplate } from "@/components/templates/dialog";
import { InputField } from "@/components/templates/InputField";
import { TextareaField } from "@/components/templates/Textarea";
import { BsFileEarmarkPlus } from "react-icons/bs"


export function CreateFormBtn() {
  const { form, onSubmit } = useForms()

  return (
    <DialogTemplate
      title="Create Form"
      description="Create A New Form To Start Collecting Responses"
      triggerBtn={
        <Button
          variant={"outline"}
          className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4">
          <BsFileEarmarkPlus className="h-8 w-8 group-hover: text-primary" />
          <p className="font-bold text-xl group-hover: text-primary">
            Create new form
          </p>
        </ Button>
      }
      content={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <InputField name="name" label="Title" />
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

