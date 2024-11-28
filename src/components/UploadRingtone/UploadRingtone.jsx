"use client";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { authApiClient } from "@/utils/api";
import { UPLOAD_API_PATH } from "@/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useRouter } from "next/navigation";

const UploadRingtone = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const { toast } = useToast();

  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !name || !genre) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("genre", genre);
    formData.append("description", description);
    formData.append("tags", tags);

    try {
      const response = await authApiClient.post(UPLOAD_API_PATH, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        console.log("Ringtone uploaded successfully.");

        toast({
          title: "Success",
          description: "Ringtone uploaded successfully!",
        });

        router.push("/ringtones");
      }
    } catch (error) {

      router.push("auth/login")
      // toast({
      //   title: "Error",
      //   description: "Failed to upload ringtone.",
      //   variant: "destructive",
      // });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden dark:border-white/20 dark:border-x-2 dark:border-y-2 border-x-2 border-y-2 border-slate-600/40">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Upload a Ringtone
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div className="form-item">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ringtone Name</label>
          <input
            type="text"
            required
            placeholder="Enter ringtone name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Genre Select */}
        <div className="form-item">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Genre</label>
          <select
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select Genre</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="hiphop">Hip-hop</option>
            <option value="jazz">Jazz</option>
            <option value="classical">Classical</option>
            <option value="electronic">Electronic</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="form-item">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">File</label>
          <input
            type="file"
            accept="audio/*"
            required
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Description Textarea */}
        <div className="form-item">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Tags Input */}
        <div className="form-item">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Upload Ringtone
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadRingtone;
