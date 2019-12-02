import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { i18n, withTranslation  } from '../i18n';
import Link from '../components/Link';
// import Link from 'next/link';


import Head from 'next/head'

const Header = ({ t }) => {
  const [ select, setSelect ] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(select)
  }, [select])

  let handleSelect = (event) => {
    event.preventDefault();
    setSelect(event.target.value)

  }
  return(
    <div>
        <Head>
          <title>next-i18next</title>

          <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />
          <link href="/static/app.css" rel="stylesheet" />

          <link href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600" rel="stylesheet" />
          <link data-react-helmet="true" rel="icon" href="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media" />
        </Head>
        {/* <h2>
          next-i18next
          <hr />
        </h2>
        <h1>
          
        </h1> */}
        <div className="header-wrapper">
          <div className="header-item">next-i18next</div>
          <div className="header-item">{t('operabase.general.m_INTRODUCTION')}</div>
          <div className="header-links">
            <Link href="/"><a>Home</a></Link>
            {/* <Link href="users"><a>Users</a></Link> */}
            <Link href="employees"><a>Employees</a></Link>
          </div>
          <select value={select} onChange={handleSelect}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="es">ES</option>
          </select>
        </div>

        
        <style jsx>{`
          .header-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100px;
            background-color: white;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            color: gray;
            text-decoration: none;

          }

          .header-links > * {
            padding: 0 20px;
            color: gray;
            text-decoration: none;
          }
        `}</style>
    </div>
  );
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['translation'],
})

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('translation')(Header)

