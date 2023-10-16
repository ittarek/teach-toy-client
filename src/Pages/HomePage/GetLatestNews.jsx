import React from 'react';

const GetLatestNews = () => {
    return (
      <div className="container my-5 p-5   d-lg-flex justify-content-between align-content-center" style={{backgroundColor: "#F4EDDD"}}>
        <div>
          <h1 className='fw-bold '>Get Our Latest News</h1>
          <p>
            You may unsubscribe at any moment. For that purpose, please find our
            contact info in the legal notice.
          </p>
        </div>
        <form action="" className='-mb-5'>
          <input className='w-75 p-2 me-1 rounded' type="text" placeholder="Enter Your Email" />
          <input className='btn btn-dark p-2' type="button" value="GET" />
        </form>
      </div>
    );
};

export default GetLatestNews;