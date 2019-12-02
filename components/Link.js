/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.
  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347
  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">
  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.
  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/

import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { withTranslation } from 'react-i18next'

// import { I18n, Config } from '../../types.d'
import { lngPathCorrector, subpathIsRequired } from '../utils'
import nextI18next from '../i18n'
import withInternals from '../hocs/with-internals'

const removeWithTranslationProps = (props) => {
  const strippedProps = Object.assign({}, props)
  delete strippedProps.defaultNS
  delete strippedProps.i18n
  delete strippedProps.i18nOptions
  delete strippedProps.lng
  delete strippedProps.reportNS
  delete strippedProps.t
  delete strippedProps.tReady
  delete strippedProps.forwardedRef
  return strippedProps
}

class Link extends React.Component {

  static defaultProps = {
    as: undefined,
  }

  render() {
    const {
      as, children, href, i18n, nextI18NextInternals, ...props
    } = this.props
    console.log('*', this.props)
    const { language } = i18n
    const { config } = nextI18NextInternals

    if (subpathIsRequired(config, language)) {
      const { as: correctedAs, href: correctedHref } = lngPathCorrector(
        config, { as, href }, language,
      )
      return (
        <NextLink
          href={correctedHref}
          as={correctedAs}
          {...removeWithTranslationProps(props)}
        >
          {children}
        </NextLink>
      )
    }

    return (
      <NextLink
        href={href}
        as={as}
        {...removeWithTranslationProps(props)}
      >
        {children}
      </NextLink>
    )
  }
}

Link.propTypes = {
    as: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    nextI18NextInternals: PropTypes.shape({
        config: PropTypes.shape({
        defaultLanguage: PropTypes.string.isRequired,
        localeSubpaths: PropTypes.object.isRequired,
        }).isRequired,
    }).isRequired,
    i18n: PropTypes.object,
}

const nextI18NextInternals = { config: nextI18next.config, i18n: nextI18next.i18n }

/*
  Usage of `withTranslation` here is just to
  force `Link` to rerender on language change
*/
export default withInternals(withTranslation()(Link), nextI18NextInternals)