import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { ClipLoader, FadeLoader } from 'react-spinners';
import { debounce } from 'lodash';


const Catalog = () => {
    const [jewelries, setJewelries] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false); 
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []); 

    useEffect(() => {
        setLoading(true);
        getAllJewelry();
    }, []);


    useEffect(() => {
        axios.get('http://localhost:5500/api/jewelry', {
            params: {
                category: selectedFilters,
                searchTerm: searchTerm,
            },
        })
        .then((res) => {
        })
        .catch((error) => {
            console.error('Error fetching filtered jewelry data:', error);
        });
    }, [selectedFilters, searchTerm]);


    const getAllJewelry = async () => {
        try {
            const res = await axios.get('http://localhost:5500/api/jewelry');

            if (res.status !== 200) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const jewelriesData = res.data; 
            console.log(jewelriesData);
            setJewelries(jewelriesData);
        } catch (error) {
            console.error('Error fetching jewelry data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        getAllJewelry();
    }, []);

    const Search = debounce((event) => {
        setSearchTerm(event.target.value);
        setFilteredItems(
            jewelries.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
        );
    }, 300);
    

    const filters = ["ring", "necklace"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            const updatedFilters = selectedFilters.filter((filter) => filter !== selectedCategory);
            setSelectedFilters(updatedFilters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            const filteredData = jewelries.filter((item) => selectedFilters.includes(item.category));
            setFilteredItems(filteredData);
        } else {
            setFilteredItems([...jewelries]);
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="input-group">
                <input
                    className="form-control"
                    placeholder="Search..."
                    // aria-label="Search"
                    // aria-describedby="search-addon"
                    onChange={Search}
                />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="search">
                        <AiOutlineSearch />
                    </i>
                </span>
            </div>

            <div className="buttons-container">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters.includes(category) ? "active" : ""}`}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <p>Loading...</p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
                        <ClipLoader color='#3a6159' loading={loading} size={150} speedMultiplier={2} />
                        <FadeLoader color="#36d7b7" speedMultiplier={2} />
                    </div>
                </div>
            ) : (
                <div className="items-container">
                    {filteredItems.map((item, idx) => (
                        <div key={`items-${idx}`} className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={item.image} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                            <p className="category">{item.category}</p>
                            <button
                                className="secondary-button-item"
                                onClick={() => navigate(`/item/${item.id}`, { state: { detail: item } })}
                            >
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Catalog;