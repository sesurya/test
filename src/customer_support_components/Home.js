
import OrderList from "./OrderList";
import useFetch from "./UseFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/customerSupport/orders');
  const { error_issues, isPending_issues, data: issues } = useFetch('http://localhost:8000/customerSupport/openissue');
  const { error_issues_closed, isPending_issues_closed, data: issues_closed } = useFetch('http://localhost:8000/customerSupport/closedissue');
  return (
    <div className="home">
      { (error || error_issues || error_issues_closed) && <div>{ error }</div> }
      { (isPending || isPending_issues || isPending_issues_closed) && <div>Loading...</div> }
      { (blogs && issues_closed && issues) && <OrderList orders={blogs} openissues={issues} closedissues={issues_closed} /> }
    </div>
  );
}
 
export default Home;