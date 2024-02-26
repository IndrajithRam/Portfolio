import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    message: "",
  });

  const updateInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <main className="container">
      <div className="card">
        <h4 className="card-title text-center">Let's Connect</h4>
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="name"
              name="name"
              value={data.name}
              onInput={updateInput}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label className="form-label" htmlFor="message">
              Message:
            </label>
            <br />
            <textarea
              className="form-control-sm w-100"
              id="message"
              rows="3"
              name="message"
              value={data.message}
              onInput={updateInput}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-sm submit-btn mt-3 w-100"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:ilogana2@my.centennialcollege.ca?subject=${data.name}-Connect Request&body=${data.message}`;
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
