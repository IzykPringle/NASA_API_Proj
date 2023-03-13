import './headerComponent.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VolcanoContext } from '../../App.js';
import SearchBar from '../searchBar';

function HeaderComponent() {

    const {favVolcanos, searchShow } = React.useContext(VolcanoContext);
    const navigate = useNavigate();

    return (
        <>
            <div id='wrapper'>
                <div id='navPages'>
                    <div>
                        <img id='logo' style={{ 'cursor': "pointer" }} onClick={() => navigate('/')} src='./Volcano_Logo.png' alt='Volcano Logo'></img>
                    </div>
                    <div id='navButtons'>
                        <button onClick={() => navigate('/')} className='buttons'>Home</button>
                        <button onClick={() => navigate("/about")} className='buttons'>About</button>
                        <button onClick={() => navigate("/favorites")} className='buttons'>Favorites ({favVolcanos.length})</button>
                        <div>
                            <button onClick={() => navigate("/daily")} className="buttons">Volcano of the Day</button>
                        </div>
                    </div>
                </div>
                <h2 id='title'>Fantastic Volcanoes and Where to Find Them</h2>
                <div id='search'>
                    {searchShow ? <SearchBar /> : ''}
                </div>
            </div>
        </>
    )
}

export default HeaderComponent