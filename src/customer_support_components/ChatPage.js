
import UseFetch from "./UseFetch";
import Create from "./CreateChats";

const issuePage = () => {

  const { error, isPending, data: chats=[] } = UseFetch('http://localhost:8000/customerSupport/issuePage/');
  const {error_issues, isPending_issues, data:issues=[]}=UseFetch('http://localhost:8000/customerSupport/openissue');

  
  return (
    <div className="issuePage">
      { (error || error_issues ) && <div>{ error }</div> }
      { (isPending || isPending_issues)&& <div>Loading...</div> }
      { (chats && issues) && <Create chats={chats} issues={issues}/> }
    </div>
  );
}


export default issuePage;