import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { useSitePluginOpts } from '../hooks/useSitePluginOpts'
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
type LinkProps = {
  children?: React.ReactNode | React.ElementType[]
  to: string
  [x: string]: any // To improve types, might want to inherit from  GatsbyLinkProps<TState> instead
}

// replace anything with /workers or / prepended to just /workers or whatever is in publicPath
const stripWorkers = (url: string, path: string) => {
  const regex = new RegExp('^(\\/' + path + '){1,3}')
  console.log('regex', regex)

  return url.replace(regex, '').replace(/^\/(?!\/)/, '/' + path + '/')
}

export const Src = (src: string) => {
  const { publicPath } = useSitePluginOpts()

  // export const Src: React.FC<LinkProps> = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(src)

  // Use Gatsby Link for internal links, and <a> for others
  return internal ? stripWorkers(src, publicPath) : src
}
export const Link: React.FC<LinkProps> = ({ children, to, ...other }) => {
  const { publicPath } = useSitePluginOpts()

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={stripWorkers(to, publicPath)} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
type ImageProps = {
  children: React.ElementType
  src: string
}
export const Image: React.FC<ImageProps> = ({ children, src, ...props }) => {
  const internal = /^\/(?!\/)/.test(src)
  const { publicPath } = useSitePluginOpts()

  if (internal) {
    return (
      <img src={'/' + publicPath + src} {...props}>
        {children}
      </img>
    )
  }
  return (
    <img src={src} {...props}>
      {children}
    </img>
  )
}
