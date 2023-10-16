

const blogContent = [
  {
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    date: "10/16/2023",
    title: "THE CUTEST BABY GIRL DRESSES",
    details:
      "That special moment of the year when all the kids get excited about the Easter celebrations is almost here. The Egg hunt, the family gathering, and all the spring activities will make everyone full of joy and gratitude. Spring makes...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    date: "10/15/2023",
    title: "ORGANIC COTTON BABY CLOTHES",
    details:
      "Looking back to the days that are gone, it’s so interesting to observe the fashion tendencies that illustrate the moods of those days. It’s also a well-known fact that fashion comes back in a certain period of time, and today...",
  },
];


const ProductBlog = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-semibold text-info">OUR BLOG</h1>
      <div className="d-lg-flex justify-content-between align-content-center gap-2">
        {blogContent.map((blog, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundColor: "#F9F8F7" }}
          >
            <img className="h-75" src={blog.image} alt="" />
            <div className="text-center mx-5 py-3">
              <p>{blog.date}</p>
              <h3 className="fw-semibold">{blog.title}</h3>
              <p className="text-secondary">{blog.details}</p>
     <button className="btn text-info fw-bold fs-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBlog;