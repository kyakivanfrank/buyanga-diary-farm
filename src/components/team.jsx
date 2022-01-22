export const Team = (props) => {
    return (
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2 id="teamH2">Meet the Team</h2>
            <p>
            Together we are team players at our farm
            </p>
          </div>
  
          {/* <div id="middler"> */}
          <div id='row'>
  
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'>
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4 id="t_name">{d.name}</h4>
                        <p>{d.school}</p>
                        <h4>{d.job}</h4>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }