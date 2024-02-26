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
    <main className="container" style={{ textAlign: "center" }}>
      <h1
        className="display-5 fw-medium"
        style={{ marginTop: "1rem", marginBottom: "3rem", color: "#f04343" }}
      >
        Connect
      </h1>

      <div className="card dark-bg mx-auto">
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control form-control-sm tb-input"
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
              className="form-control-sm w-100 tb-input"
              id="message"
              rows="3"
              name="message"
              value={data.message}
              onInput={updateInput}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-light btn-sm submit-btn mt-3 w-100"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:ilogana2@my.centennialcollege.ca?subject=${data.name}-Connect Request&body=${data.message}`;
            }}
          >
            Connect!
          </button>
        </form>
      </div>
    </main>
  );
}
