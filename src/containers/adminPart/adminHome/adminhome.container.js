import React from 'react';

import AdminHomeComponent from './adminhome.component.js';
import { Footer } from '../../Footer/footer.js';

const AdminHomeContainer = ({user,setUser}) => {
    return (
        <>
        {/* <Container> */}
            <AdminHomeComponent user ={user } setUse={setUser}/>
            <Footer />
        {/* </Container> */}
        </>
    )

}

export default AdminHomeContainer;

