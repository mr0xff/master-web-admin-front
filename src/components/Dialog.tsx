import { Description, Dialog as HDialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import clsx from 'clsx';

type DialogProps = React.PropsWithChildren<{
  button: string;
  title: string;
  description?: string;
  center?: boolean;
  action?: (e: FormData) => void;
}>

export default function Dialog({
  title,
  description,
  button,
  children,
  center,
  action,
}:DialogProps) {
  let [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Button
        onClick={open}
      >
        {button}
      </Button>

      <HDialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md bg-white shadow rounded-xl 5 p-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                {title}
              </DialogTitle>
              <p className="mt-2 text-sm/6">
                {description}
              </p>
              {children}
              <div className="mt-4 flex gap-x-3">
                <Button
                  onClick={close}
                  kind='cancel'
                >
                  Fechar
                </Button>
                {!!children && <Button onClick={()=>{}}>Enviar</Button>}
              </div>
            </DialogPanel>
          </div>
        </div>
      </HDialog>
    </>
  )
}
