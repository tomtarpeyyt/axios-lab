import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const initialData = [
    {
      fiz: "buz",
      foo: "bar",
      Baz: "biz",
      BuzResults: [
        {
          id: 1,
          name: "fiz"
        },
        {
            id: 2,
            name: "buz"
        },
        {
            id: 3,
            name: "foo"
        },
        {
            id: 4,
            name: "bar"
        }
      ]
  }
];

function App() {
  const [fizBuz, setFizBuz] = useState([]);

  async function setFizBuzToState() {
    const fizRes = await axios.get('http://localhost:5555/fiz');
    const fizData = fizRes.data;
    // console.log(fizData);
    const buzRes = await axios.get('http://localhost:5555/buz');
    const buzData = buzRes.data;

    const newDataFromFizBuz = { ...fizData, BuzResults: buzData };

    const myData = [];
    myData.push(newDataFromFizBuz);

    setFizBuz(myData);
  }

  useEffect(() => {
    setFizBuzToState();
  }, []);

  return (
    <>
     <h1>time2code</h1>
     {
      fizBuz[0]?.BuzResults.map((item) => (
        <div key={item.id}>
          <h2 className='text-red-500 text-3xl'>{item.name}</h2>
        </div>
      ))
     }
    </>
  )
}

export default App
