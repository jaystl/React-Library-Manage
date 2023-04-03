import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/SearchBar.css'
import { getCurrentUserDetail } from '../auth/indexS'
import { deleteBook } from '../services/s-user-service'
import{toast} from 'react-toastify';

function SearchBarS({placeholder, data}) {

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

    function deletePost(post) {

        deleteBook(post.bid).then(res=>{
            console.log(res)
            toast.success("Book Removed Succesfully!!")
            navigate('/staff/afterbookdel')
        })
        .catch(error=>{
            console.log(error)
            toast.error("Error :(")
        })
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
                    <a className='dataItem' onClick={deletePost} target='_blank'>
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

export default SearchBarS