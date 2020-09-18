import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import Dropzone from "react-dropzone";

const AuctionForm = ({
  auction,
  users,
  categories,
  onSave,
  onChange,
  onDrop,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{auction.auctionId ? "Edit" : "Add"} Auction</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        type="title"
        value={auction.title || ""}
        onChange={onChange}
        error={errors.title}
        autoFocus={true}
      />
      <TextInput
        name="description"
        label="Description"
        type="description"
        value={auction.description || ""}
        onChange={onChange}
        error={errors.description}
      />
      <TextInput
        name="startPrice"
        label="Starting Price"
        type="startPrice"
        value={auction.startPrice || ""}
        onChange={onChange}
        error={errors.startPrice}
      />
      {/* <SelectInput
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
      /> */}

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

      <Dropzone
        onDrop={onDrop}
        accept={("image/png", "image/jpg", "image/jpeg")}
        multiple
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section className="db">
            <div className="db-container" {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive && (
                <p>Drag n drop images here, or click to select image</p>
              )}
              {isDragActive && !isDragReject && <p>Drop the image here!</p>}
              {isDragReject && <p>File type not accepted, sorry!</p>}{" "}
            </div>
          </section>
        )}
      </Dropzone>
      <p>
        Attachment:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={auction.attachmentURL}
        >
          {auction.attachment}
        </a>
      </p>

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
      {auction.auctionId && <button className="btn btn-danger">Delete</button>}
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
  onDrop: PropTypes.func,
  saving: PropTypes.bool,
};

export default AuctionForm;
