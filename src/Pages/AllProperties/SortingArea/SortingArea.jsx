import React from "react";

const SortingArea = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-xl mb-10 md:mb-0">
      <div className="sorting-section p-3">
        <h5>Sort by</h5>
        <form>
          <div className="mb-2 form-control">
            <select  className="select select-primary w-full "
              aria-label="Default select example" name="price" required>
              <option value=""> Sort by price</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
          <div className="form-control  ">
           
            <select
              className="select select-primary w-full "
              aria-label="Default select example"
              name="city"
              required
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
          <h5 className="mt-2">Types of Rent</h5>
          <div>
            <div className="form-control space-y-2">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Apartment Building"
                  className="checkbox "
                />
                <span className="label-text ">Apartment Building</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Flat Rent"
                  className="checkbox "
                />
                <span className="label-text ">Flat Rent</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Commercial Space"
                  className="checkbox "
                />
                <span className="label-text ">Commercial Space</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Office Space"
                  className="checkbox "
                />
                <span className="label-text ">Office Space</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Shop & Restaurant"
                  className="checkbox "
                />
                <span className="label-text ">Shop & Restaurant</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Community Center"
                  className="checkbox "
                />
                <span className="label-text ">Community Center</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Hostel Rent"
                  className="checkbox "
                />
                <span className="label-text ">Hostel Rent</span>
              </label>
            </div>
            {/* <Form.Check name="rentType" type="checkbox" label="Flat Rent" value="Flat Rent" />
          <Form.Check name="rentType" type="checkbox" label="Commercial Space" vale="Commercial Space" />
          <Form.Check name="rentType" type="checkbox" label="Office Space" value="Office Space" />
          <Form.Check name="rentType" type="checkbox" label="Shop & Restaurant" value="Shop & Restaurant" />
          <Form.Check name="rentType" type="checkbox" label="Community Center" value="Community Center" />
          <Form.Check name="rentType" type="checkbox" label="Hostel Rent" value="Hostel Rent" /> */}
          </div>
          <h5 className="mt-2">Select Month</h5>
          <div className="form-control  ">
            <select
              className="select select-primary w-full "
              aria-label="Default select example"
              name="month"
              required
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
          <div className="grid grid-cols-5 gap-4">
            <div className="form-control">
            
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="1"
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text ">1</span>
                </label>{" "}
              </div>

              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="2"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">2</span>
                </label>{" "}
              </div>
              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="3"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">3</span>
                </label>{" "}
              </div>
              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="4"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">4</span>
                </label>{" "}
              </div>
              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="5"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">5</span>
                </label>{" "}
              </div>
          </div>
          <h5 className="mt-2">Wash Room</h5>
          <div className="flex gap-4">
            <div className="form-control">
            
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="1"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">1</span>
                </label>{" "}
              </div>

              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="2"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">2</span>
                </label>{" "}
              </div>
              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="3"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">3</span>
                </label>{" "}
              </div>
              <div className="form-control">
                {" "}
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    value="4"
                    className="checkbox checkbox-sm "
                  />
                  <span className="label-text ">4</span>
                </label>{" "}
              </div>
          </div>
          <div className="my-4 text-center">
            <input className="btn w-full border-0 border-violet-400 border-b-4 " value={" Find Property"} type="submit"/>
             
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default SortingArea;
