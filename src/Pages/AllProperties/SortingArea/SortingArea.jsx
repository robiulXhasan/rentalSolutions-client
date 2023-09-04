import React from "react";
import { useForm } from "react-hook-form";

const SortingArea = ({ handleSideBarSearch }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-white p-2 rounded-lg shadow-xl mb-10 md:mb-0">
      <div className="sorting-section p-3">
        <h5 className="text-2xl mb-2">Sort by</h5>
        <form onSubmit={handleSubmit(handleSideBarSearch)}>
          <div className="mb-2 form-control">
            <select
              className="select select-bordered  w-full text-lg font-normal"
              aria-label="Default select example"
              {...register("price")}
            >
              <option value=""> Sort by price</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
          <div className="form-control  ">
            <select
              className="select select-bordered w-full text-lg font-normal "
              aria-label="Default select example"
              required
              {...register("city")}
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
          </div>
          <h5 className="my-2 text-xl font-medium ">Types of Rent</h5>
          <div>
          {errors.category?.type === 'required' && <p className="text-red-600 ">Please select an item*</p>}

            <div className="form-control " >
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Apartment Building"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Apartment Building</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Flat Rent"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Flat Rent</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Commercial Space"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Commercial Space</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Office Space"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Office Space</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Shop & Restaurant"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Shop & Restaurant</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Community Center"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Community Center</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Hostel Rent"
                  className="checkbox checkbox-sm "
                  {...register("category", {
                    required: true,
                  })}
                />
                <span className="label-text text-lg">Hostel Rent</span>
              </label>
            </div>

          </div>
          <h5 className="mt-2">Select Month</h5>
          <div className="form-control  ">
            <select
              className="select select-primary w-full text-lg font-normal "
              aria-label="Default select example"
              name="month"
              required
              {...register("month")}
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
          </div>
          <h5 className="mt-2">Bed Room</h5>
          {errors.bed?.type === 'required' && <p className="text-red-600 ">Please select an item*</p>}
          <div className="grid grid-cols-5 gap-4">
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="1"
                  className="checkbox  checkbox-sm"
                  
                  {...register("bed",{required:true})}
                />
                <span className="label-text text-lg">1</span>
              </label>{" "}
            </div>

            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="2"
                  className="checkbox checkbox-sm "
                  
                  {...register("bed",{required:true})}
                />
                <span className="label-text text-lg">2</span>
              </label>{" "}
            </div>
            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="3"
                  className="checkbox checkbox-sm "
                  
                  {...register("bed",{required:true})}
                />
                <span className="label-text text-lg">3</span>
              </label>{" "}
            </div>
            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="4"
                  className="checkbox  checkbox-sm "
                  
                  {...register("bed",{required:true})}
                />
                <span className="label-text text-lg">4</span>
              </label>{" "}
            </div>
            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="5"
                  className="checkbox  checkbox-sm "
                  
                  {...register("bed",{required:true})}
                />
                <span className="label-text text-lg">5</span>
              </label>{" "}
            </div>
          </div>
          <h5 className="mt-2">Wash Room</h5>
          {errors.washRoom?.type === 'required' && <p className="text-red-600 ">Please select an item*</p>}

          <div className="flex gap-4">
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="1"
                  className="checkbox checkbox-sm "
                  
                   {...register("washRoom",{required:true})}
                />
                <span className="label-text text-lg">1</span>
              </label>{" "}
            </div>

            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="2"
                  className="checkbox  checkbox-sm "
                  
                   {...register("washRoom",{required:true})}
                />
                <span className="label-text text-lg">2</span>
              </label>{" "}
            </div>
            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="3"
                  className="checkbox  checkbox-sm "
                  
                   {...register("washRoom",{required:true})}
                />
                <span className="label-text text-lg">3</span>
              </label>{" "}
            </div>
            <div className="form-control">
              {" "}
              <label className="cursor-pointer flex items-center gap-1">
                <input
                  type="checkbox"
                  value="4"
                  className="checkbox  checkbox-sm "
                  
                   {...register("washRoom",{required:true})}
                />
                <span className="label-text text-lg">4</span>
              </label>{" "}
            </div>
          </div>
          <div className="my-4 text-center">
            <input
              className="btn w-full border-0 border-violet-400 border-b-4 "
              value={" Find Property"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SortingArea;
