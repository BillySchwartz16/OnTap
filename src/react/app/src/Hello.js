import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hello() {
  const [hello, setHello] = useState('');

    useEffect(() => {
        async function fetchData() {
          const res = await axios.get('http://localhost:80/');
          setHello(res.data.Hello);
        }
        fetchData();
      }, []);

      return <h1>{hello}</h1>;
    }

export default Hello;
