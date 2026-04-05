import axios from "axios";

const API = axios.create({
  baseURL: "https://ast-based-plagiarism-detector.onrender.com",
});

export const analyzeFiles = async(file1, file2) => {
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    const response = await API.post("/analyze/", formData); 
    console.log("API response:", response.data);
    return response.data;
};