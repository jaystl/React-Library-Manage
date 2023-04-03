import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/SearchBar.css'
import { getCurrentUserDetail } from '../auth/indexS'

function SearchBar({placeholder, data}) {

    let navigate = useNavigate()

    let T = getCurrentUserDetail()

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            
                return value.btitle.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
        
    };

    const issuing = () => {

        // console.warn(book)
    
        let T = getCurrentUserDetail()
        console.log(T)
    
        if(T.uid) {
            navigate("/user/userdashboard")
            
        }else {
            alert("Have To Login As User First !!!")
        }
     }

  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type='text' placeholder={placeholder} onChange={handleFilter} />
        </div>
        {filteredData.length != 0 && (
        <div className='dataResult'>
            {filteredData.map((value, key) => {
                return (
                    <a className='dataItem' onClick={issuing} target='_blank'>
                        {" "}
                        <p>{value.btitle}</p>
                    </a>
                );
            } )}
        </div>
)}
    </div>
  )
}

export default SearchBar