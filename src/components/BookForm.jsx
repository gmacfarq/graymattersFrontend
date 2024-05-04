import { useState } from "react";
import Alerts from "./Alerts";

const INITIAL_FORM_DATA = {
  title: "",
  genre: "",
  image: "",
  isbn: "",
  rating: "",
  review: "",
};

function BookForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [alerts, setAlerts] = useState([]);

  /** handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        genre: formData.genre,
        image: formData.image,
        isbn: formData.isbn,
        rating: formData.rating,
        review: formData.review,
      }),
      credentials: "include", // Necessary for cookies to be sent and received
    });

    if (response.ok) {
      setAlerts(["Book submitted successfully"]);
    } else {
      // Handle errors, e.g., show a login error message
      const data = await response.json();
      setAlerts([data.detail]);
    }
  }

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((currFormData) => ({
      ...currFormData,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="isbn">ISBN</label>
          <input
            id="isbn"
            name="isbn"
            onChange={handleChange}
            value={formData.isbn}
            className="form-control rounded"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            onChange={handleChange}
            value={formData.image}
            className="form-control rounded"
            type="url"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            name="rating"
            onChange={handleChange}
            value={formData.rating}
            className="form-control rounded"
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            name="review"
            onChange={handleChange}
            value={formData.review}
            className="form-control rounded"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            className="form-control rounded"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            name="genre"
            onChange={handleChange}
            value={formData.genre}
            className="form-control rounded"
            type="text"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit Book
        </button>
      </form>
      {alerts && <Alerts messages={alerts} />}
    </div>
  );
}

export default BookForm;
