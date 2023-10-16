import React from 'react';
import  "./BestCollection.css"
const BestCollection = () => {

    const bestCollections = [
      {
        img: "https://images.unsplash.com/photo-1621344301800-0dae3dee2769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        collectionName: "Baby Car",
      },
      {
        img: "https://images.unsplash.com/photo-1605382165091-443eff32caf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        collectionName: "Baby Shows",
      },
      {
        img: "https://images.unsplash.com/photo-1507077630565-b23bbbe732ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
        collectionName: "Kid BOY",
      },
      {
        img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80",
        collectionName: "Accessories",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1682309746089-f84f2da69060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80",
        collectionName: "Best Seller",
      },
    ];
    return (
        <div className='container my-5'>
            <h1 className='text-center fw-bold text-info mb-5'>Best Collection</h1>

            <div className='d-lg-flex justify-content-between align-content-center gap-3 '>
                {
                    bestCollections.map((collection, index)=> <div key={index} className='card border-0 best-collection-card'>
                        <img className='w-50 rounded-circle mx-auto' src={collection.img} alt="" />
                        <p className='text-center fs-4 mt-5'>{collection.collectionName}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BestCollection;