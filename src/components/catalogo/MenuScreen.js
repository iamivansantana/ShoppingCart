import React from 'react';
import ListArticles from '../articles/ListArticles';


const MenuScreen = () => {

        
    return (
        <div>
            <div className="secction1">
            <h2 style={{textAlign:'center'}}>Catalogue</h2>
                <div className="items-cont">
                    <ListArticles />
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
