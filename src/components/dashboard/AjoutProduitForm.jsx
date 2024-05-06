import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddProductForm.css";

const AjoutProduitForm = () => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productExpirationDate, setProductExpirationDate] = useState("");
  const [userId, setUserId] = useState("");

  // Définissez une fonction pour gérer le changement de type de produit
  const handleTypeChange = (e) => {
    setProductType(e.target.value);
    // Réinitialisez la catégorie sélectionnée lorsque le type de produit change
    setProductCategory("");
  };

  useEffect(() => {
    const userIdFromStorage = sessionStorage.getItem("id");
    if (userIdFromStorage) {
      setUserId(userIdFromStorage);
    }
  }, []);

  // Définissez une liste d'options de catégorie en fonction du type de produit sélectionné
  const getCategoryOptions = () => {
    if (productType === "Matières Premières") {
      return [
        // Catégories pour le type "Matières Premières"
        "Résidus végétaux",
        "Déchets alimentaires organiques",
        "Fumier animal",
        "Compost",
        "Algues marines",
        "Farine de poisson",
        "Mélasse",
        "Marc de café",
        "Tourbe",
        "Guano",
      ];
    } else if (productType === "Fertilisant Bio") {
      return [
        // Catégories pour le type "Fertilisant Bio"
        "Engrais organique",
        "Engrais à base de compost",
        "Engrais à base d'algues marines",
        "Engrais à base de farine de poisson",
        "Engrais à base de mélasse",
        "Engrais à base de marc de café",
        "Engrais à base de tourbe",
        "Engrais à base de guano",
        "Engrais à base d'extrait de plantes",
        "Engrais à base de bactéries bénéfiques",
      ];
    } else {
      return []; // Retourne une liste vide si aucun type de produit n'est sélectionné
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertDateToYYYYMMDD = (dateString) => {
      // Implement your desired date formatting logic here
      // Example (assumes dateString is in YYYY-MM-DD format):
      const dateParts = dateString.split("-");
      return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
    };

    const formattedDate = convertDateToYYYYMMDD(productExpirationDate); // Call conversion function

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("type", productType);
    formData.append("category", productCategory);
    formData.append("description", productDescription);
    formData.append("expirationDate", formattedDate);
    formData.append("userId", userId);
    if (imageFile) {
      // Redimensionner l'image avant de l'ajouter au formulaire
      const resizedImageFile = await resizeImage(imageFile);
      formData.append("image", resizedImageFile);
    }

    if (imageFile) {
      try {
        const response = await axios.post(
          "http://localhost:8080/produit/ajouter",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Réponse du serveur :", response.data);
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire :", error);
      }
    } else {
      console.warn("Aucune image sélectionnée pour le produit.");
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  const resizeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const image = new Image();
        image.onload = function () {
          const canvas = document.createElement("canvas");
          const targetWidth = 416; // Largeur souhaitée après recadrage
          const targetHeight = 200; // Hauteur souhaitée après recadrage
          const width = image.width;
          const height = image.height;

          let offsetX = 0;
          let offsetY = 0;
          let scaleX = width / targetWidth;
          let scaleY = height / targetHeight;

          // Calculer les dimensions et les coordonnées pour le recadrage
          if (scaleX > scaleY) {
            // Si l'image est plus large que haute
            offsetX = (width - targetWidth * scaleY) / 2;
          } else {
            // Si l'image est plus haute que large
            offsetY = (height - targetHeight * scaleX) / 2;
          }

          canvas.width = targetWidth;
          canvas.height = targetHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(
            image,
            offsetX,
            offsetY,
            width - 2 * offsetX,
            height - 2 * offsetY,
            0,
            0,
            targetWidth,
            targetHeight
          );

          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: "image/jpeg" }));
          }, "image/jpeg");
        };
        image.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImageSrc(event.target.result); // Met à jour l'image source pour l'aperçu
        setImageFile(file); // Met à jour le fichier d'image pour l'envoi
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null); // Réinitialise l'aperçu de l'image si aucun fichier n'est sélectionné
      setImageFile(null); // Réinitialise le fichier d'image si aucun fichier n'est sélectionné
    }
  };

  return (
    <form
      className="add-product-form d-flex align-items-center justify-content-center"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          onChange={handleImageChange}
          type="file"
          id="images"
          accept="image/*"
          required
        ></input>

        {imageSrc && (
          <div>
            <label htmlFor="images">Aperçu de l'image</label>
            <img src={imageSrc} alt="Preview" />
          </div>
        )}
      </div>
      <input
        type="text"
        name="nomProduit"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
        placeholder="Nom du produit..."
      />
      <input
        type="number"
        name="prixProduit"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        onKeyPress={(e) => {
          // Empêche la saisie de lettres
          const charCode = e.which ? e.which : e.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
          }
        }}
        placeholder="Prix du produit..."
      />

      <input
        type="date"
        name="datePeremption"
        value={productExpirationDate}
        onChange={(e) => setProductExpirationDate(e.target.value)}
        placeholder="Date de péremption..."
      />
      <select
        name="type"
        className="drop-container"
        value={productType}
        onChange={handleTypeChange} // Utilisez le gestionnaire d'événements pour mettre à jour le type de produit sélectionné
      >
        <option value="" disabled>
          Choisir le type
        </option>
        <option value="Matières Premières">Matières Premières</option>
        <option value="Fertilisant Bio">Fertilisant Bio</option>
      </select>
      <select
        name="categorie"
        className="drop-container"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      >
        <option value="" disabled>
          Choisir la catégorie
        </option>
        {/* Utilisez une liste d'options dynamique basée sur le type de produit sélectionné */}
        {getCategoryOptions().map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <textarea
        name="description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        placeholder="Description du produit..."
      />
      <button type="submit" value="Ajouter">
        Ajouter
      </button>
    </form>
  );
};

export default AjoutProduitForm;
