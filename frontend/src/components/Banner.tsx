//import { useLocation } from "react-router-dom";

const Banner = () => {
  //let location = useLocation();

  return (
    <div className="banner">
      {/* {location.pathname} */}
      <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  )
}

export default Banner