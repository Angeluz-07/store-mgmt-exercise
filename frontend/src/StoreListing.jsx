
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState} from 'react';
import { useAppContext } from './AppContext';

function StoreListing() {
    //const [data, setData] = useState([])
    const { stores, fetchStores } = useAppContext();
    
    // todo: read HIW
    useEffect(() => {
      // const fetchData = async () => {
      //   try {
      //     const { data: response } = await axios.get('http://localhost:8080/products');
      //     setData(response);// this seems to set the data
      //   } catch (error) {
      //     console.error(error)
      //   }
      // };
  
      // fetchData();
      fetchStores();
    }, []);
    
    
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del Local</th>
        </tr>
      </thead>
      <tbody>
        {stores.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item?.name}</td>
              </tr>
            );
          })}
          
          <tr>
            <td></td>
            <td></td>
          </tr>
      </tbody>
    </Table>
    </>
  )
}

export default StoreListing;
