import React,{useState}from 'react'
let App=()=>{
    let [search,setSearch]=useState('')
    let [data,setdata]=useState([])

    let SubmitHandler=(event)=>{
        event.preventDefault();
        // console.log(search)
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
    .then(Response=>Response.json())                     
    .then(value=>setdata(value.Search))          //Converted json data we r getting as a value//
    }
    const download = url => {
        fetch(url).then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png");
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    return (
        <div>
            <center>
                <h3>Search Ur Fav Movie</h3><br/>
                {/* <pre>{JSON.stringify(search)}</pre> */}
                <form onSubmit={SubmitHandler}>
                    <input type="text" value={search} onChange={(event)=>setSearch(event.target.value)}/><br/><br/>
                    <input type="submit" value="Search" />
                </form>
              {/* {data.map(movie=><li>${movie.Title}</li>)} */}
                          <div className="row">
                        {data.map(movie=>
                        <div className='col-md-4'>
                        <div className="card" style={{"width":"18rem"}}>
                        <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
                        <div className="card-body">
                          <h5 className="card-title">{movie.Title}</h5>
                          <a className="btn btn-primary" onClick={()=>{download(movie.Poster)}}>Download Poster</a>
                        </div>
                        </div>
                      </div>
                            )}
                            </div>
                  
            </center>
            
        </div>
    )
}

export default App
