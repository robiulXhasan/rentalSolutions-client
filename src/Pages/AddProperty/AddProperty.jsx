import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;


const AddProperty = () => {
  const {user} = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);


    const image_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    fetch(image_hoisting_url, {
      method: "POST",
      body: formData,
    }) 
      .then((res) => res.json())
      .then((imgData) => {
        console.log("imagedata :", imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            address: data.address,
            rent: parseInt(data.rent),
            month: data.month,
            area: data.area,
            bath: parseInt(data.bath),
            category: data.category,
            city: data.city,
            details: data.details,
            elevator: data.elevator,
            email: user?.email,
            garage: parseInt(data.garage),
            gas: data.gas,
            kitchen: parseInt(data.kitchen),
            phone: data.phone,
            propertySize: parseInt(data.propertySize),
            room: parseInt(data.room),
            title: data.title,
            image: imgData.data.url,
          };

      // Save Products information to the database
      fetch(
        "http://localhost:5000/product",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(product),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          // toast.success(`${data.name} is added successfully`);
         // navigate("/allProperty");
        });
        }
    })
  };
  return (
    <div className="w-11/12 md:w-3/4 mx-auto border p-10 shadow">
      <h3 className="text-center text-violet-500 font-semibold text-2xl mb-5 border-b border-violet-400">Add Your Property For Rent</h3>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="">
          <h4 className="text-xl text-violet-500 font-semibold">
            Personal Information
          </h4>

          <div className="flex justify-between gap-5">
            <div className="form-control w-full">
              <label className="label">Name*</label>
              <input
                className="input input-bordered w-full "
                {...register("name", {
                  required: "Name is Required",
                })}
                type="text"
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label" label>
                Phone No*
              </label>
              <input
                className="input input-bordered w-full "
                {...register("phone", {
                  required: "Phone Number is Required",
                })}
                type="number"
              />
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">Email*</label>
              <input
                className="input input-bordered w-full "
                type="email"
                defaultValue={user?.email}
                disabled
              />
            </div>
          </div>

          <h4 className="text-xl text-violet-500 font-semibold mt-3">
            {" "}
            Rental information
          </h4>

          <div className="form-control">
            <label className="label">Property Title*</label>
            <input
              className="input input-bordered w-full "
              {...register("title", {
                required: "Property title is Required",
              })}
              type="text"
              placeholder="Enter property title"
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">Property Details*</label>
            <textarea
              className="input input-bordered w-full h-24 "
              {...register("details", {
                required: "Property Details is Required",
              })}
              type="textarea"
              as="textarea"
              rows={3}
              placeholder="write details of a property"
            />
            {errors.details && (
              <p className="text-danger">{errors.details.message}</p>
            )}
          </div>

          <div className="flex justify-center gap-5">
            <div className="form-control w-full ">
              <label className="label">Rent*</label>
              <input
                className="input input-bordered w-full "
                {...register("rent", {
                  required: "Rent amount is Required",
                })}
                type="number"
                placeholder="rent amount"
              />
              {errors.rent && (
                <p className="text-danger">{errors.rent.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">Available From*</label>
              <select
                className="select select-bordered"
                {...register("month", {
                  required: "Available month is Required",
                })}
                aria-label="Default select example"
              >
                <option value="">Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              {errors.month && (
                <p className="text-danger">{errors.month.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="form-control w-full">
              <label className="label">Property Size*</label>
              <input
                className="input input-bordered w-full "
                {...register("propertySize", {
                  required: "Property size is Required",
                })}
                type="number"
                placeholder="size of a property in sqft."
              />
              {errors.propertySize && (
                <p className="text-danger">{errors.propertySize.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">City*</label>
              <select
                className="select select-bordered"
                {...register("city", {
                  required: "city is Required",
                })}
                aria-label="Default select example"
              >
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
              {errors.city && (
                <p className="text-danger">{errors.city.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">Area*</label>
              <select
                className="select select-bordered"
                {...register("area", {
                  required: "Area is Required",
                })}
                aria-label="Default select example"
              >
                <option value="">Choose Area</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Mohammadpur">Mohammadpur</option>
                <option value="Mirpur">Mirpur</option>
                <option value="Uttara">Uttara</option>
                <option value="Bashundhara">Bashundhara</option>
                <option value="Badda">Badda</option>
                <option value="Khilkhet">Khilkhet</option>
                <option value="Farmgate">Farmgate</option>
              </select>
              {errors.area && (
                <p className="text-danger">{errors.area.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <div className="form-control w-full">
              <label className="label">Rent Category*</label>
              <select
                className="select select-bordered"
                {...register("category", {
                  required: "Category is Required",
                })}
                aria-label="Default select example"
              >
                <option value="">Choose</option>
                <option value="Commercial Space">Commercial Space</option>
                <option value="Office Space">Office Space</option>
                <option value="Apartment Building">Apartment Building</option>
                <option value="Flat Rent">Flat Rent</option>
                <option value="Hostel Rent">Hostel Rent</option>
                <option value="Only For Boys">Only For Boys</option>
                <option value="Only For Girls">Only For Girls</option>
                <option value="For Family">For Family</option>
                <option value="Community Center">Community Center</option>
                <option value="Shop & Restaurant Space">
                  Shop & Restaurant Space
                </option>
              </select>
              {errors.category && (
                <p className="text-danger">{errors.category.message}</p>
              )}
            </div>

            <div className="form-control col-span-2 w-full" controlId="">
              <label className="label">Address*</label>
              <textarea
                className="input input-bordered"
                {...register("address", {
                  required: "Address is Required",
                })}
                type="text"
                as="textarea"
                rows={3}
                placeholder="Location / address of your property"
              />
              {errors.address && (
                <p className="text-danger">{errors.address.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="form-control w-full">
              <label className="label">Room</label>
              <input
                className="input input-bordered w-full "
                {...register("room", {})}
                type="number"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">Bath</label>
              <input
                className="input input-bordered w-full "
                {...register("bath", {})}
                type="number"
              />
            </div>

            <div className="form-control">
              <label className="label">Kitchen</label>
              <input
                className="input input-bordered w-full "
                {...register("kitchen", {})}
                type="number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="form-control w-full">
              <label className="label">Garage</label>
              <input
                className="input input-bordered w-full "
                {...register("garage", {})}
                type="number"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">Gas</label>
              <select
                className="select select-bordered"
                {...register("gas", {})}
                aria-label="Default select example"
              >
                <option></option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">Elevator</label>
              <select
                className="select select-bordered"
                {...register("elevator", {})}
                aria-label="Default select example"
              >
                <option></option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>
          <div className="form-control" controlId="formFileLg">
            <label className="label">Upload Property Image</label>
            <input
              className="file-input file-input-bordered file-input-primary w-full "
              {...register("image", {
                required: "Image is Required",
              })}
              type="file"
              size="lg"
            />
          </div>

          <div className="flex justify-center">
            <input
              className="btn border-0  border-b-4 border-violet-400 hover:border hover:text-violet-500 hover:border-violet-400 w-full md:w-1/2   mt-5"
              value="Submit"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
