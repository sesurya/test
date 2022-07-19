import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const Create = ({chats,issues}) => {


  

  const {id}=useParams();// Here id is the issue id
  const required_chats= chats.filter((e)=>e.issueId===id);// The required_chats is corresponding to the chats of particular user id
  const issueData_given_issue_id =issues.filter((e)=>e._id===id);
  console.log(issueData_given_issue_id);

  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('Customer');
  const [reciever, setReciever] = useState('');
  const [issueId, setIssueId] = useState('');
  const [isPending, setIsPending] =useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {message, sender, reciever,issueId};
    console.log(id);
    setIsPending(true);
    fetch('http://localhost:8000/customerSupport/issuePage/chat', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
        setIsPending(false);
      console.log('new blog added');
      window.location.reload(false);
    })
  }


  
  
//This method is used to update the status of the order. So once the order is an open issue. It will not show up again.
const edit = () => {
  const dataToUpdate = {id:id,issueStatus:2};
  const requestOptions = {

    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToUpdate)
    };
    fetch('http://localhost:8000/customerSupport/updateStatusInIssues', requestOptions)
        .then(()=>{
          console.log("The status is updated");
        }

        )
       
}  

  return (
    <Container maxWidth='xl' >
        <Box display="flex" flexDirection="row" style={{borderStyle:"dotted"}} m={3} p={3}>
          <Box sx={{width:1/2}} style={{borderStyle:"dotted"}} m={3} p={3}>
                    <div className="create">
                <h2>Issue page</h2>
                <form onSubmit={handleSubmit}>
                  <label>Issue ID:</label>
                
                  <p style={{borderStyle:"solid", backgroundColor:'#D3D3D3'}}>{id}</p>
                  <label>Order Id:</label>
                  <p style={{borderStyle:"solid", backgroundColor:'#D3D3D3'}}>{issueData_given_issue_id[0].orderId}</p>
                  
                  <label>Issue_Description:</label>
                  <p style={{borderStyle:"solid", backgroundColor:'#D3D3D3'}}>{issueData_given_issue_id[0].issueDescription}</p>
                  <label>Message:</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => {setMessage(e.target.value);
                      setIssueId(id);
                      setReciever('ADMIN');
                      }}
                  ></textarea>
                  
                 
                    
                
                  {isPending && <button>Adding message...</button>}
                  {!isPending &&<button>Add message</button>}
                </form>
              
                
              </div>
              <div>
                <button onClick={()=>{
                  edit();
                }} style={{margin:"10px"}} >close issue</button>
              </div>
          </Box>
          <Box sx={{width:1/2}} style={{borderStyle:"dotted"}} m={3} p={3}>
       
          <div className="blog-list">
         
          {(required_chats).map((e) =>
                  (
                    
                    <Box display="flex" flexDirection="row">
                    <Box>
                        <div className="blog-preview" key={e._id} >
                            <p>{e.sender}</p>
                      
                        </div>
                    </Box>
                    <Box>
                    <div className="blog-preview" key={e._id} >
                            <p>{e.message}</p>
                      
                        </div>
                    </Box>

                  </Box>
                )
                )}
            </div>
          </Box>

     
        </Box>
    </Container>



  );
}
 
export default Create;