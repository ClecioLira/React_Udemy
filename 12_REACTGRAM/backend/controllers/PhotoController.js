const Photo = require("../models/Photo");
const User = require("../models/User");
const mongoose = require("mongoose");

// Inserir foto com um usuario relacionado a ela
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // criar foto
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  // Se foto foi criada com sucesso
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."],
    });
    return;
  }

  res.status(201).json(newPhoto);
};

// REMOVER FOTO
const deletePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(
      mongoose.Types.ObjectId.createFromHexString(id)
    );

    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada."] });
      return;
    }

    // Checa se a foto pertence ao usuario logado
    if (!photo.userId.equals(reqUser._id)) {
      res.status(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
      return;
    }

    await Photo.findByIdAndDelete(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluida com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada."] });
    return;
  }
};

module.exports = {
  insertPhoto,
  deletePhoto,
};
