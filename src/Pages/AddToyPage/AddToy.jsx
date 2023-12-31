import React, { useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import "./AddToy.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Container } from "react-bootstrap";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //  add toy data in database function
  const onSubmit = (data) => {
    data.category = selectedOption;
console.log(data);
    fetch("https://b7-a11-toy-marketplace-server-side.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          // console.log(result);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} Your Toy Add SuccessFul`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // sub-category items
  const options = [
    { value: "Smartphone for Kids", label: "Smartphone for Kids" },
    { value: "Tablet for Kids", label: "Tablet for Kids" },
    { value: "Interactive Storybook", label: "Interactive Storybook" },
    { value: "Kid-Safe Headphones", label: "Kid-Safe Headphones" },
    { value: "Coding Robot", label: "Coding Robot" },
    { value: "Digital Camera for Kids", label: "Digital Camera for Kids" },
    { value: "Smartwatch for Kids", label: "Smartwatch for Kids" },
    { value: "Virtual Reality Headset", label: "Virtual Reality Headset" },
    { value: "Digital Drawing Tablet", label: "Digital Drawing Tablet" },
  ];

  return (
    <Container className="">
      {" "}
      <h1 className=" text-info shadow-lg rounded m-2 p-2 text-center">
        You want To Add Your{" "}
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
