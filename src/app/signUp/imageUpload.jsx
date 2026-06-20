"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const ImageUpload = ({ onUpload }) => {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  // Handle file selection
  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // Drag events
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    handleFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  // Fake upload (replace with real API later)
  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);

          if (onUpload) onUpload(file);

          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="w-full">
      {/* Drop Area */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative cursor-pointer rounded-2xl border
          border-dashed p-6 text-center transition-all
          backdrop-blur-xl
          ${
            dragActive
              ? "border-indigo-500 bg-indigo-500/10"
              : "border-white/20 bg-white/5"
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {!preview ? (
          <div className="text-gray-500 dark:text-gray-300">
            <p className="font-medium">
              Drag & drop image here or click to upload
            </p>
            <p className="text-xs mt-1 opacity-70">PNG, JPG, JPEG supported</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Image
              height={100}
              width={100}
              src={preview}
              alt="preview"
              className="w-40 h-40 object-cover rounded-xl border border-white/20 shadow-lg"
            />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {file?.name}
            </p>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {uploading && (
        <div className="mt-4">
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs mt-2 text-gray-500">Uploading... {progress}%</p>
        </div>
      )}

      {/* Upload Button */}
      {file && !uploading && (
        <button
          onClick={handleUpload}
          className="mt-4 w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
        >
          Upload Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
