import "bootswatch/dist/solar/bootstrap.min.css";
import Header from './components/Header';
import RestaurantListItem from './components/RestaurantListItem';
import useRestaurantSearch from './hooks/useRestaurantSearch';
import RestaurantDetails from './components/RestaurantDetails';
import { useState, useEffect } from 'react';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Route, Link, Router } from "wouter";



function App() {

  const { search, restaurants } = useRestaurantSearch();
  const [searched, setSearched] = useState(false);


  const handleSearch = (e) => {
    search(e.target.value);
    setSearched(true);
  };

  useEffect(() => {
    search('');
  }, []);

  const handleSearchReset = () => {
    search('');
  };

  return (
    <>
      <Header />
      <Router>
        <Container className="d-flex flex-column justify-content-center" style={{ maxWidth: '90%', width: '30vw' }}>

          <Row className="mt-5">
            <h1>Ramen Shop Dashboard</h1>
          </Row>

          <Row className="mt-2">
            <Route path="/">
              <input
                type="text"
                placeholder="Filter by restaurant name"
                onChange={handleSearch}
              />
              <h4 className="mt-3">Click on a ramen shop to see details</h4>
              <ul>
                {restaurants.map((restaurant) => (
                  <li key={restaurant.id}>
                    <Link href={`/restaurant/${restaurant.id}`} className="active">
                      <RestaurantListItem
                        {...restaurant}
                      />
                    </Link>
                  </li>
                ))}
                {searched && restaurants.length === 0 && (
                  <li>No restaurant found</li>
                )}
              </ul>
            </Route>

            <Route path="/restaurant/:id">
              {params => <RestaurantDetails id={params.id} onClick={handleSearchReset} />}
            </Route>

          </Row>
        </Container>
      </Router>
    </>
  )
}

export default App
