import { Description, Dialog as HDialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Button from './Button';

type DialogProps = {
  className?: string;
  button: string;
  title: string;
  description?: string;
}
// export default function Dialog({}) {
//   let [isOpen, setIsOpen] = useState(false)

//   return (
//     <>
//       <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
//       <HDialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//           <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
//             <DialogTitle className="font-bold">Deactivate account</DialogTitle>
//             <Description>This will permanently deactivate your account</Description>
//             <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
//             <div className="flex gap-4">
//               <button onClick={() => setIsOpen(false)}>Cancel</button>
//               <button onClick={() => setIsOpen(false)}>Deactivate</button>
//             </div>
//           </DialogPanel>
//         </div>
//       </HDialog>
//     </>
//   )
// }


export default function Dialog() {
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button>

      <HDialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </HDialog>
    </>
  )
}
