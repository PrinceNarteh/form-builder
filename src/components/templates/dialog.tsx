import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';

interface DialogTemplateProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  btnLabel?: string
  title?: string
  description?: string
  content: React.ReactNode
  footer?: React.ReactNode
}

export const DialogTemplate = ({ title, description, footer, open, content, onOpenChange, btnLabel }: DialogTemplateProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {
        btnLabel && (
          <DialogTrigger asChild>
            <Button>{btnLabel}</Button>
          </DialogTrigger>
        )
      }
      <DialogContent>
        <DialogHeader>
          {
            title && (
              <DialogTitle>
                {title}
              </DialogTitle>
            )
          }
          {
            description && (
              <DialogDescription>
                {description}
              </DialogDescription>
            )
          }
        </DialogHeader>
        {content}
      </DialogContent>
      {
        footer && (
          <DialogFooter>
            {footer}
          </DialogFooter>
        )
      }
    </Dialog>
  )
}

