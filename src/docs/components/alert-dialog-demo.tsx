"use client"

import { AlertDialog } from "@/components/ui/alert-dialog"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger variant='danger'>Discard draft</AlertDialog.Trigger>
      <AlertDialog.Popup>
        <AlertDialog.Header>
          <AlertDialog.Title>Discard draft?</AlertDialog.Title>
          <AlertDialog.Description>
            You can’t undo this action.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer className='flex justify-end gap-2'>
          <AlertDialog.Close>Cancel</AlertDialog.Close>
          <AlertDialog.Close variant='danger'>Discard</AlertDialog.Close>
        </AlertDialog.Footer>
      </AlertDialog.Popup>
    </AlertDialog>
  )
}
