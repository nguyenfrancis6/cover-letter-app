export interface JobInformation {
  jobTitle: string;
  company: string;
  location: string;
  jobDescription: string;
}

export interface ResumeUpload {
  fileName: string;
  file: File | null;
}