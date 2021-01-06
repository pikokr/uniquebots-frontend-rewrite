import clsx from 'clsx'
import React from 'react'
import { Manager, Popper, Reference } from 'react-popper'
import ClickAwayHandler from './ClickAwayHandler'

const Dropdown = ({
  children,
  button,
  leftOffset = 0,
}: {
  children: React.ReactNode
  button: (data: { opened: boolean }) => React.ReactNode
  leftOffset?: number
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <ClickAwayHandler handle={() => setOpen(false)}>
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
                offset: [leftOffset, open ? 20 : 30],
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
