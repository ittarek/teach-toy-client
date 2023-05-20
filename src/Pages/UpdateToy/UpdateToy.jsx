import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const UpdateToy = (props ) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const {handleUpdateMyToy, myToy} = props


 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center text-info w-100 m-auto"
          id="contained-modal-title-vcenter"
        >
          Update My Toy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="container text-center"
          onSubmit={handleSubmit(handleUpdateMyToy)}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="input-fill"
            {...register("price")}
            placeholder="Price"
            defaultValue=""
          />
          <input className=" d-none" {...register("_id")} value={myToy?._id} />
          <input
            className="input-fill"
            {...register("quantity")}
            placeholder="Available Quantity"
            type="number"
          />{" "}
          <input
            className="input-fill"
            {...register("description")}
            placeholder="detail description"
          />
          <input className=" btn btn-outline-success" value="Update Toy" type="submit" />

           
          
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default UpdateToy;
