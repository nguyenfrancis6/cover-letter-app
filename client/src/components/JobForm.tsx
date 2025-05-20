import React, { useState } from "react";

const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fileName, setFileName] = useState("");
  const [style, setStyle] = useState("formal"); // default style

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ jobTitle, company, location, jobDescription, style });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="">Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <label>Cover Letter Style:</label>
        <div style={{ display: "flex", gap: "12px", margin: "8px 0" }}>
          <label>
            <input
              type="radio"
              name="style"
              value="formal"
              checked={style === "formal"}
              onChange={() => setStyle("formal")}
            />
            Formal
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="confident"
              checked={style === "confident"}
              onChange={() => setStyle("confident")}
            />
            Confident
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="friendly"
              checked={style === "friendly"}
              onChange={() => setStyle("friendly")}
            />
            Friendly
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="creative"
              checked={style === "creative"}
              onChange={() => setStyle("creative")}
            />
            Creative
          </label>
          <label>
            <input
              type="radio"
              name="style"
              value="passionate"
              checked={style === "passionate"}
              onChange={() => setStyle("passionate")}
            />
            Passionate
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
