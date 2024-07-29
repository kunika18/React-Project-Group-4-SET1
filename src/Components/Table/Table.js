import React from 'react';
import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Edit Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kunika</td>
          <td>Singh</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Lavanya</td>
          <td>Pathak</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Navneet</td>
          <td>Kaur</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>4</td>
          <td >Lipi</td>
          <td>Jain</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>5</td>
          <td >Manasvi</td>
          <td>Jain</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>6</td>
          <td >Latasha</td>
          <td>Sharma</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>7</td>
          <td >Larry </td>
          <td>Thornton</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>8</td>
          <td >Harry</td>
          <td>Thornton</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>9</td>
          <td >Carry</td>
          <td>Thornton</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
        <tr>
          <td>10</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td><button type="button" class="btn btn-info">Edit</button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;