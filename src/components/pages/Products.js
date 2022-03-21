import React, { useEffect } from 'react';
import '../../App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from './BarChart';
import axios from 'axios';
import {getAllclients} from "../../api/Api";

export default function Products() {
  useEffect(()=>{
    const article = {  "type":"totalClients"};
    axios.post('https://us-central1-gatestone-yyte.cloudfunctions.net/campaignAnalytics', article)
        .then(response => console.log("fhfhffh",response.data));
  },[]);
  return(
    <div >
    <div class="page-content fade-in-up px-3 m-2">
    <div class="row mb-4" style={{display:'inline-flex'}}>
      <div class="col-lg-4 col-md-6" style={{width:'200px',height:'200px',border:'1px solid',margin:'23px',padding:'43px'}}>
        <div class="card mb-4">
          <div class="card-body flexbox-b">
            <div>
              <h3 class="font-strong text-success">200</h3>
              <div class="text-muted">No. Of Contacted </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6" style={{width:'200px',height:'200px',border:'1px solid',margin:'23px',padding:'43px'}}>
        <div class="card mb-4">
          <div class="card-body flexbox-b">
            <div>
              <h3 class="font-strong text-primary">200</h3>
              <div class="text-muted">No. of No Responses</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6" style={{width:'200px',height:'200px',border:'1px solid',margin:'23px',padding:'43px'}}>
        <div class="card mb-4">
          <div class="card-body flexbox-b">
            <div>
              <h3 class="font-strong text-pink">400</h3>
              <div class="text-muted">No. of Calls Scheduled </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <BarChart />
  </div>
  )
}
