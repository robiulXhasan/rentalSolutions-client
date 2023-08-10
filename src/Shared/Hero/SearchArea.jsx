import React from 'react';

const SearchArea = () => {
    return (
        <div className=" hero-property">
        <form className=" grid md:grid-cols-4 gap-2 md:gap-5 justify-between items-center search-property">
          <div className="form-control col-span-4 md:col-span-1 md:border-e md:px-3 ">
            <label className="label">
              <span className="label-text text-primary">City</span>
            </label>
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
          <div className="form-control col-span-2 md:col-span-1 md:border-e md:px-3 w-full">
            <label className="label">
              <span className="label-text text-primary">Area</span>
            </label>
            <select
              className="select select-primary w-full " aria-label="Default select example" name="area" required>
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
          </div>
          <div className="form-control col-span-2 md:col-span-1 md:border-e md:px-3">
            <label className="label">
              <span className="label-text  text-primary">Category</span>
            </label>
            <select
              className="select select-primary w-full " aria-label="Default select example" name="rent" required>
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
          </div>
          <div className="pt-9 col-span-4 md:col-span-1  form-control">
            <input type="submit" value='Browse Properties' className=" btn-primary  input input-bordered"/>
          </div>
        </form>
      </div>
    );
};

export default SearchArea;