export const Blog = (props) => {

  return <div id="blog">
  <div className="container blog-sroll">
    <h2 id="ourblog">articles and extracts</h2>
    <div className="blog-scroll">
    {props.data ? props.data.map((d, i)=> <div key={`${d.title}-${i}`} className="row">
    <div className="col-xs-8 col-md-3">
      {" "}
      <img src={d.img} className="img-responsive" alt="" />{" "}
    </div>
    <div className="col-xs-12 col-md-9">
      <div className="about-text">
        <h2>{d.title}</h2>
        <p>{d.article}</p> 
        <h5>" {d.extract} "</h5>
      </div>
    </div>
  </div>)
: "loading"}</div>

</div></div>
};
