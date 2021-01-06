import clsx from 'clsx'
import React from 'react'
import { Manager, Popper, Reference } from 'react-popper'
import ClickAwayHandler from './ClickAwayHandler'

const Dropdown = ({
  children,
  button,
}: {
  children: React.ReactNode
  button: (data: { opened: boolean }) => React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <ClickAwayHandler className="inline-block" handle={() => setOpen(false)}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <div onClick={() => setOpen(!open)} ref={ref}>
              {button({ opened: open })}
            </div>
          )}
        </Reference>
        <Popper
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 20],
              },
            },
          ]}
        >
          {({ placement, ref, style }) => (
            <div
              ref={ref}
              style={style}
              data-replacement={placement}
              className={clsx(
                'bg-white text-black p-3 rounded-md shadow-lg ring-white ring-2 transition-all',
                {
                  'opacity-0': !open,
                  'pointer-events-none': !open,
                  'mt-3': !open,
                },
              )}
            >
              {children}
            </div>
          )}
        </Popper>
      </Manager>
    </ClickAwayHandler>
  )
}

export default Dropdown
