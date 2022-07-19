import { Link } from "react-router-dom";
import {Box} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";


const BlogList = ({orders,openissues,closedissues}) => {

  const [isPending, setIsPending] =useState(false);


const handleSubmit = (e) => {
   
    const issues = {orderId:e._id,issueDescription:"There is an issue in "+e.order,issueStatus:1};
    const options= {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issues)
    };
    setIsPending(true);
    fetch('http://localhost:8000/customerSupport/raiseissue',options).then(() => {
        setIsPending(false);
        console.log(issues);
      console.log('new issue added');
      window.location.reload(false);
      
    })
  }  

//This method is used to update the status of the order. So once the order is an open issue. It will not show up again.
const edit = (e) => {
  const dataToUpdate = {id:e._id,issueStatus:1};
  const requestOptions = {

    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToUpdate)
    };
    fetch('http://localhost:8000/customerSupport/updateStatusInOrders', requestOptions)
        .then(()=>{
          console.log("The status is updated");
        }

        )
       
}
//filteredOrders basically gets the orders whose issuStatus is 0.
const filteredOrders= orders.filter((e)=>e.issueStatus===0);

  return (
      <Container  maxWidth="xl" className="blog-container">
        <Box  display="flex" flexDirection="row " >
          <Box  sx={{width:1/2}} m={3} p={3} >
              <div className="blog-list">
                          {filteredOrders.map((e) => (
                            <div className="blog-preview" key={e._id} >
                              <h2>{ e.order }</h2>
                            <button onClick={()=>{
                              
                              handleSubmit(e);
                              edit(e);
                            }}>create issue</button>
                            </div>
                          ))}
              </div>
          </Box>
          <Box  sx={{width:1/4}} m={3} p={3} >
                <div className="blog-list">
                                {openissues.map((e) => (
                                  <div className="blog-preview" key={e.id} >
                                    <h2>{ e.issueDescription }</h2>
                                  <Link to={`/create/${e._id}`}>
                                    
                                    <p>Raise issue { e._id }</p>
                                  </Link>
                                  </div>
                                )).reverse()}
                </div>
          </Box>
          <Box  sx={{width:1/4}} m={3} p={3} >
                <div className="blog-list">
                                {closedissues.map((e) => (
                                  <div className="blog-preview" key={e.id} >
                                    <h2>{ e.issueDescription }</h2>
                                     <p>Issue is closed</p>
                                  </div>
                                )).reverse()}
                </div>
          </Box>
        </Box>
      </Container>
  );
  }

  export default BlogList;