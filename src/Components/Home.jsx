import React from 'react';
import Search from './Search';
import Weather from './Weather';

const Home = () => {
  return (
    <>
        <section className='w-100 pt-5'>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='card border-0 shadow rounded'>
                            <div className='card-body'>
                                <h3 className='text-center fs-4 fw-semibold mb-3'>My Weather App</h3>
                                <Search/>
                                <Weather/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home