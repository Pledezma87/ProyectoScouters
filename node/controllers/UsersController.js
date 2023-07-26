import User from "../models/UsersModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      surname,
      password,
      nif,
      club,
      country,
      city,
      phone,
      email,
      post,
    } = req.body;
    if (req.body.role) {
      return res.status(400).json({
        message: "ERROR",
      });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "El email está en uso" });
    }

    if (!PWD_REGEX.test(password)) {
      return res.status(400).json({
        message:
          "La contraseña debe tener entre 8 y 24 caracteres,incluir al menos un número,un caracter especial y una letra masyuscúla.",
      });
    }

    const newUser = new User({
      name,
      surname,
      password,
      nif,
      club,
      country,
      city,
      phone,
      email,
      post,
    });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hashedPassword;

    const userCreate = await newUser.save();
    console.log(userCreate);

    if (userCreate) {
   
      const token = jwt.sign(
        { userId: userCreate._id, username: userCreate.name },
        "jswtoken"
      );
      console.log("Token:", token);
      userCreate.confirmationToken = token;
      userCreate.confirmationTokenCreatedAt = new Date();
      await userCreate.save();

      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "Scouters_Es@outlook.es",
          pass: "cualquiercosa12345",
        },
      });

      const mailOptions = {
        from: "Scouters_Es@outlook.es",
        to: userCreate.email,
        subject: "Confirmación de correo electrónico",
        html: `<div style="height: 60vh; background-image: url('https://images.unsplash.com/photo-1590179406383-a8e59a4ff117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'); background-size: cover;">
        <p style="background-color: rgba(0, 0, 0, 0.7); color: white; font-size: 16px; padding: 40px; width: 90%; margin-left: 10px; margin-top: 25px; text-align: justify;">
        ${userCreate.name}, Recientemente te has registrado en nuestra página Scouters. Si no has sido tú quien se ha registrado, por favor ignora este mensaje. Si has sido tú, por favor haz clic en el siguiente enlace para activar tu cuenta: <a href="http://localhost:8000/users/confirm/${userCreate.confirmationToken}" style="color: #007bff; text-decoration: none;">Confirmation_Scouters</a>
      </p>
      </div>`,
      
        
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Correo electrónico enviado: " + info.response);
        }
      });

      return res
        .status(201)
        .json({ message: "Usuario registrado correctamente" });
    }

    return res.status(500).json({ message: "Error al registrar el usuario" });
  } catch (error) {
    console.error("Error al guardar el usuario:", error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const {name, email, password } = req.body;
    const existingUser = await User.findOne({ name });

    if (!existingUser) {
      return res.status(400).json({ message: "Usuario o contraseña incorrecta" });
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      } else {
        if (existingUser.active === 0) {
          return res.status(400).json({
            message: "El usuario no está validado,porfavor revisa tu email.",
            active: existingUser.active,
          });
        }
      }
    }

    const token = jwt.sign(
      { userId: existingUser._id, username: existingUser.name },
      "dssdgsggsdds" // Reemplaza con tu secreto para el token
    );


    res.status(200).json({ token, active: existingUser.active });
    console.log(token);
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

export const generateNewToken = async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar si el correo electrónico existe en la base de datos
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    // Generar un nuevo token de confirmación
    const newToken = uuidv4();

    // Asignar el nuevo token y guardar en la base de datos
    user.confirmationToken = newToken;
    user.confirmationTokenCreatedAt = new Date();
    await user.save();

    // Enviar el nuevo token al correo electrónico del usuario
    await sendEmailWithNewToken(email, newToken);

    return res
      .status(200)
      .json({ message: "Nuevo token de confirmación generado" });
  } catch (error) {
    console.error("Error al generar un nuevo token de confirmación,verifique si es correcto su email:", error);// modificque aqui también
    res
      .status(500)
      .json({ message: "Error al generar un nuevo token de confirmación" });
  }
};

// Función para enviar el correo electrónico con el nuevo token
export const sendEmailWithNewToken = async (email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "Scouters_Es@outlook.es", // Reemplaza con tu dirección de correo electrónico de Outlook
        pass: "cualquiercosa12345", // Reemplaza con tu contraseña de Outlook
      },
    });

    const mailOptions = {
      from: "Scouters_Es@outlook.es", // Remitente del correo electrónico
      to: email,
      subject: "Nuevo token de confirmación",
      html: `<div style="height: 60vh; background-image: url('https://images.unsplash.com/photo-1590179406383-a8e59a4ff117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'); background-size: cover;">
      <p style="font-size: 16px; color: white; margin-left: 20px; margin-top: 30px; padding: 20px;">
        Aquí está tu nuevo token de confirmación: <a href="http://localhost:8000/users/confirm/${token}" style="color: #007bff; text-decoration: none;">Confirmation_Scouters</a>
      </p>
    </div>
    `,
    };
    

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};



// RESET PASSWORD
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params; // Obtén el token desde los parámetros de la URL
    const { email, newPassword } = req.body;

    // Busca al usuario por el email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email no encontrado" });
    }

    // Actualiza la contraseña del usuario con la nueva contraseña elegida por el usuario
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    user.password = hashedPassword;
    await user.save();

    // Envía el correo de confirmación
    await sendPasswordChangeConfirmation(email);

    return res.status(200).json({ message: "Contraseña restablecida exitosamente" });
  } catch (error) {
    console.error("Error al restablecer la contraseña:", error);
    return res.status(500).json({ message: "Error al restablecer la contraseña" });
  }
};



const  sendPasswordChangeConfirmation = async (email, ) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "Scouters_Es@outlook.es", // Reemplaza con tu dirección de correo electrónico de Outlook
        pass: "cualquiercosa12345", // Reemplaza con tu contraseña de Outlook
      },
    });

    const mailOptions = {
      from: "Scouters_Es@outlook.es", // Remitente del correo electrónico
      to: email,
      subject: "Has cambiado tu contraseña",
      html: `<div style="height: 60vh; background-image: url('https://images.unsplash.com/photo-1590179406383-a8e59a4ff117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'); background-size: cover;">
      <p style="font-size: 16px; color: white; margin-left: 20px; margin-top: 30px; padding: 20px;">
        Ya puedes acceder con tu nueva contraseña pincha en este enlace: <a href="http://localhost:3000/login" style="color: #007bff; text-decoration: none;">Confirmation_ChangePassword</a>
      </p>
    </div>
    `,
    };
    

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};


