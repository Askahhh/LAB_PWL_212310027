import React, { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    npm: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthdate: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi isian wajib
    if (
      !formData.npm ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.birthdate
    ) {
      alert("Semua isian wajib diisi!");
      return;
    }
    // Validasi NPM hanya angka dan maksimal 10 digit
    if (!/^\d{1,10}$/.test(formData.npm)) {
      alert("NPM harus berupa angka dan maksimal 10 digit!");
      return;
    }
    // Hitung umur berdasarkan tanggal lahir
    const birthdate = new Date(formData.birthdate);
    const today = new Date();
    const ageDiff = today.getFullYear() - birthdate.getFullYear();
    const isTodayBeforeBirthday =
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate());
    const ageValue = isTodayBeforeBirthday ? ageDiff - 1 : ageDiff;
    setAge(`${ageValue}th`);
    // Tampilkan modal dengan informasi
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <h2>Form Data Diri</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NPM:</label>
          <input
            type="text"
            className="form-control"
            name="npm"
            value={formData.npm}
            onChange={handleChange}
            pattern="\d*"
            maxLength="10"
            required
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Middle Name:</label>
          <input
            type="text"
            className="form-control"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Birthdate (YYYY-MM-DD):</label>
          <input
            type="text"
            className="form-control"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            pattern="\d{4}-\d{2}-\d{2}"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Informasi</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>NPM: {formData.npm}</p>
                <p>
                  Fullname: {formData.firstName}{" "}
                  {formData.middleName && formData.middleName + " "}{" "}
                  {formData.lastName}
                </p>
                <p>Age: {age}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormData;
