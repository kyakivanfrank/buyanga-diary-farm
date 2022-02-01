export const Header = ({data}) => {
let num = Math.floor(Math.random()*2)

  return <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          {data ? 
          <div className="slideContainer">
            <div className="imgSpan">
            <img id="img" src={data[num].image} alt=""/>
            </div>
          <div className="slideText">
          <h1>{data[num].slideTitle}</h1>
          <p>{data[num].caption}</p>
          <p><a id="btn_heading" href='#services' className='page-scroll'>learn more  </a></p>
          

        </div>
      </div> 
           : "loading"}

      </div>
      </div>
    </header>
  
}
