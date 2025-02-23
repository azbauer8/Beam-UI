"use client"
import { Dialog } from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger>View notifications</Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>Notifications</Dialog.Title>
          <Dialog.Description>
            You are all caught up. Good job!
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer className='flex justify-end'>
          <Dialog.Close>Close</Dialog.Close>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  )
}
