import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch';

import { i18n, withTranslation } from '../../i18n';
import Link from '../../components/Link';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Employee from '../../components/employee'

const Employees = ({ t, users }) => {
  return(
    <React.Fragment>
        <main>
          <Header />
          <div>
            {/* <Link href="users"><a>Go to users</a></Link> */}
            {
              users.slice(0,5).map((user, index) => {
                return(
                  <Employee user={user} key={`user-${index}`} />
                );
              })
            }

          </div>
        </main>
        {/* <Footer /> */}
      </React.Fragment>
  );
  
}

Employees.getInitialProps = async () => {
  const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
  const payload = await response.json();
  return { 
    users: payload,
    namespacesRequired: ['translation'],
  }
}

Employees.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('translation')(Employees)
