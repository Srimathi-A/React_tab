import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Admin = () =>{
  return(
        <div class="center">
          <table >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Sri</td>
    <td>Mathi</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Kavi</td>
    <td>Priya</td>
    <td>19</td>
  </tr>
  <tr>
    <td>Indhu</td>
    <td>Mathi</td>
    <td>20</td>
  </tr>
   <tr>
    <td>Sathya</td>
    <td>priya</td>
    <td>23</td>
  </tr>
   <tr>
    <td>banu</td>
    <td>priya</td>
    <td>28</td>
  </tr>
   <tr>
    <td>Sakthi</td>
    <td>priya</td>
    <td>29</td>
  </tr>
   <tr>
    <td>sri</td>
    <td>priya</td>
    <td>20</td>
  </tr>
</table>
<ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</div>

          
       
        
  )
      };

export default Admin;