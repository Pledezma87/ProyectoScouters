import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import Image from "../models/middelwareModels.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.mimetype.split("/")[1];
    cb(null, `${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage });
const app = express();

// Controlador para subir imágenes
export const uploadImage = (req, res) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: "Error al subir la imagen" });
    }

    return res.status(200).json({ message: "Imagen subida correctamente" });
  });
};

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { originalname, filename } = req.file;
    const imagePath = req.file.path;

    // Guardar la información de la imagen en MongoDB
    const newImage = new Image({
      name: originalname,
      path: imagePath,
    });
    await newImage.save();

    res.status(200).json({ message: "Imagen subida correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al subir la imagen" });
  }
});