import React, { useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import "./AddToy.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Container } from "react-bootstrap";
import { Form } from "react-router-dom";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // sub-category items
  const options = [
    { value: "Smartphone for Kids", label: "Smartphone for Kids" },
    { value: "Tablet for Kids", label: "Electronic Learning Kit" },
    { value: "Interactive Storybook", label: "Interactive Storybook" },
    { value: "Kid-Safe Headphones", label: "Kid-Safe Headphones" },
    { value: "Coding Robot", label: "Coding Robot" },
    { value: "Digital Camera for Kids", label: "Digital Camera for Kids" },
    { value: "Smartwatch for Kids", label: "Smartwatch for Kids" },
    { value: "Virtual Reality Headset", label: "Virtual Reality Headset" },
    { value: "Digital Drawing Tablet", label: "Digital Drawing Tablet" },
  ];
//  add toy data in database function
  const onSubmit = (data) => {
    data.toy = selectedOption;

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };
 

  return (
    <Container className="">
      {" "}
      <h1 className=" text-info shadow-lg rounded m-2 p-2 text-center">
        You want To Add You{" "}
        <span className="text-success fw-bold fst-italic">Toys</span> ?
      </h1>
      <div className=" row w-100 mx-auto  justify-content-center align-items-center">
        <div className="col-lg-6 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="input-fill"
              {...register("ToyName")}
              placeholder="Toy Name"
              defaultValue=""
            />
            <input
              className="input-fill"
              {...register("SellerName")}
              placeholder="Seller Name"
              defaultValue={user.displayName}
            />
            {/* <input
              className="input-fill"
              value=""
          //     {...register("sellerMail")}
              placeholder="Seller email"
              type="text"
            /> */}
              <input
              className="input-fill"
              value={user?.email}
              {...register("sellerMail")}
              placeholder="your email"
              type="email"
            />
            <input
              className="input-fill"
              {...register("price")}
              placeholder="Price"
              defaultValue=""
            />

            <input
              className="input-fill"
              {...register("quantity")}
              placeholder="Available Quantity"
              type="number"
            />

            <input
              className="input-fill"
              {...register("photo")}
              placeholder="Photo URL"
              type="url"
              defaultValue=""
            />
            <input
              className="input-fill"
              {...register("rating")}
              placeholder="Rating"
              type="number"
            />

            <input
              className="input-fill"
              {...register("description")}
              placeholder="detail description"
            />

            <CreatableSelect
              className="select-category "
              defaultValue=""
              onChange={setSelectedOption}
              options={options}
              placeholder="Sub-Category"
            />

            <input
              className="add-button fw-bold bg-success text-white rounded-5 fs-3 p-2 m-2 border-0 shadow "
              value="ADD Your Toy"
              type="submit"
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddToy;
