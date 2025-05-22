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
      <h2 style={{textAlign:"left", marginTop:"-10px"}}>Job Info</h2>
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
      <div style={{ marginBottom: "12px" }}>
        <label htmlFor="">Upload Resume (.pdf, .doc, .docx)</label>
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
          <select
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            required
            style={{
              marginTop: "8px",
              padding: "10px",
              borderRadius: "4px",
              width: "110px",
            }}
          >
            <option value="formal">Formal</option>
            <option value="confident">Confident</option>
            <option value="friendly">Friendly</option>
            <option value="creative">Creative</option>
            <option value="passionate">Passionate</option>
          </select>
        </div>
      </div>
      <button type="submit" style={{ marginTop: "8px" }}>
        Generate Cover Letter
      </button>
    </form>
  );
};

export default JobForm;
