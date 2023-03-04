import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import type { NavigateOptions, To } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

export interface LinkProps {
  to: To
  options?: NavigateOptions
}

export default function Link({ children, options = {}, to }: PropsWithChildren<LinkProps>) {
  const { i18n } = useTranslation()

  if (typeof to === 'string')
    return (
      <RouterLink {...options} to={`/${i18n.language}/${to}`}>
        {children}
      </RouterLink>
    )

  return (
    <RouterLink {...options} to={{ ...to, pathname: `/${i18n.language}/${to}` }}>
      {children}
    </RouterLink>
  )
}
