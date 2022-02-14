import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemDetailContainer from '../components/Item-detail-container/ItemDetailContainer';
import ItemListContainer from '../components/Item-list-container/ItemListContainer';
import NavBar from '../components/NavBar';

export const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/genre/:id" element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Switch>
        </BrowserRouter>
  );
};

export default Routes