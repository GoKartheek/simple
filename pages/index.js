import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch';

import { i18n, withTranslation } from '../i18n'
import Link from '../components/Link';
import Router from 'next/router'


import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = ({ t }) => {
  return(
    <React.Fragment>
        <main>
          <Header />
          {/* <div>
            <Link href='/users'>
              <button
                type='button'
              >
                {t('operabase.general.m_GOBUTTON')}
              </button>
            </Link>
            <Link href='/second-page'>
              <button
                type='button'
              >
                {t('operabase.general.ACCOUNT_SETTINGS_DIALOG_ADD_PHONE')}
              </button>
            </Link>
          </div> */}
        </main>
        <Footer />
      </React.Fragment>
  );
  
}

Homepage.getInitialProps = async ({ req }) => {
  return {
    namespacesRequired: ['translation'],
  }
}

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('translation')(Homepage)
