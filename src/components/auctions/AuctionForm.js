import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const AuctionForm = ({
  auction,
  users,
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
        name="description"
        label="Description"
        value={auction.description}
        onChange={onChange}
        error={errors.description}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={auction.authorId || ""}
        defaultOption="Select Author"
        options={users.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={auction.category}
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
  auction: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default AuctionForm;
