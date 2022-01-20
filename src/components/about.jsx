export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Our story</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Our area of concentration</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="statements">
        <h2>Our Mission</h2>
        <h3>{props.data ? props.data.mission : "loading..."}</h3>
        <h2>Our Vision for the future</h2>
        <h3>{props.data ? props.data.vision : "loading..."}</h3>
        </div>
        


      </div>
    </div>
  );
};
