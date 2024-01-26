import React from 'react'
import { ThemeContext } from '../components/Providers'
import { cn } from '../lib/tailwindClassMerge'
import { Switch } from './Switch/Switch'

export const Card = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const handleSwitchChange = (checked) => {
    if (checked) return setTheme('dark')

    setTheme('light')
  }

  const ThemeLabel = {
    dark: 'Modo oscuro activado',
    light: 'Modo oscuro desactivado',
  }[theme]

  return (
    <div
      className={cn("text-2x1 font-bold  rounded-md p-10 bg-[#1b1b1b] flex flex-col gap-4",
        { 'bg-[#1b1b1b] text-slate-200': theme === 'dark' },
        { 'bg-[#f8f8f8] text-slate-800': theme === 'light' },
      )}
    >
      Prueba con card
      <div className='flex flex-col gap-2'>
        Activar modo oscuro
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={handleSwitchChange}
        >
          {ThemeLabel}
        </Switch>
      </div>
    </div>
  )
}
