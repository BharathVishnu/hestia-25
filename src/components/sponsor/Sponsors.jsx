import React from "react";
import {BASE_URL} from '../../constants/urls.js';
import useFetch from "../../hooks/useFetch.js";


function Sponsors(props) {


    const { error, isPending, data: sponsors } = useFetch(BASE_URL+'/sponsors');


  return (
    <div className="w-full min-h-screen text-small py-4 px-4 md:px-8">
      <div className="w-full flex flex-col items-center border border-secondary-dark rounded-xl overflow-hidden z-10 bg-primary-dark text-smedium mb-4 p-4">
        <p className="w-full text-center text-medium pb-4 headerFont">
          SPONSORS
        </p>
        { error && <div>{ error }</div> }
        <div className="w-2/3  grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 lg:w-4/6 lg:p-4">


        
        { sponsors &&
            
              sponsors.results.map((sponsor) => (
                <div className="c w-full py-2">
                <figure className="rounded-xl overflow-hidden relative">

                { sponsor.title.length > 0 && <div class="badge badge-ghost absolute z-10 m-4 py-3">{sponsor.title}</div>}

                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                  />

                </figure>
                <h1 className="text-center pt-2 border-b border-secondary-dark">{sponsor.name}</h1>
              </div>
              ))
          }
          


        </div>
      </div>
    </div>
  );
}

export default Sponsors;