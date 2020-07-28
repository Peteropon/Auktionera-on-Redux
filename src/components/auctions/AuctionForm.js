import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const AuctionForm = ({
  auction,
  users,
  categories,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{auction.id ? "Edit" : "Add"} Auction</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={auction.title || ""}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="user"
        label="Seller"
        value={auction.user || ""}
        defaultOption="Select user"
        options={users.map((user) => ({
          value: user.id,
          text: user.name,
        }))}
        onChange={onChange}
        error={errors.user}
      />

      <SelectInput
        name="category"
        label="Category"
        value={auction.category || ""}
        defaultOption="Select category"
        options={categories.map((c) => ({
          value: c.id,
          text: c.name,
        }))}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

AuctionForm.propTypes = {
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  auction: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default AuctionForm;
