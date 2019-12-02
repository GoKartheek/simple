import React from 'react';
import Link from '../components/Link';

const User = ({ user }) => {
    return(
        <Link href="user">
            <div className="user-wrapper">
                <div className="field">{user.id}</div>
                <div className="field">{user.employee_name}</div>
                <div className="field">{user.employee_age}</div>
                <div clasName="field">{user.employee_salary}</div>
                <style jsx>{`
                    .user-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        padding: 20px;
                    }
                `}</style>
            </div>
        </Link>
    )
}

// User.getInitialProps = async () => {
//     const response = await fetch('http://dummy.restapiexample.com/api/v1/employee/1')
//     const payload = await response.json()
//     return { user: payload }
// }

export default User;