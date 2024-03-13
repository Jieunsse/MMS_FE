import axios from 'axios';
import { useState } from 'react';
const App = () => {

    const [data, setData] = useState();


    const handleClick = () => {
        axios.get("http://localhost:8080/test/api").then(
            (res) => {setData(res.data); alert('연결 성공');}
        ).catch(err => alert(err))
    }



    return (

        <div style={{marginLeft: "100px"}}>
            <button onClick={handleClick}>
                성공했나?
            </button>
            <br/>
            <br/>
            <div>
                성공했다면 받아온 데이터가 표시됨 ⬇️️ <div style={{color: "orange", fontSize: "50px"}}>{data}</div>
            </div>
        </div>


    );
};

export default App;
