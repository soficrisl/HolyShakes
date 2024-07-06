import React, { useState, useEffect, useContext } from "react";
import { Transition, Dialog } from "@headlessui/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import app_firebase from "../../credentials";
import { MenuContext } from "../context/MenuContext";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const ProductModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [productId, setProductId] = useState(props.uid);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const firestore = getFirestore(app_firebase);
  const storage = getStorage(app_firebase);
  const { getProductosArray } = useContext(MenuContext);
  const [imageUrl, setImageUrl] = useState(null);
  const { new_categories } = useContext(MenuContext);
  const [categories, setCategories] = useState(new_categories);
  useEffect(() => {
    setCategories(null);
    setCategories(new_categories);
  }, [new_categories]);

  const handleOpenModal = (productId = null) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleProductNameChange = (event) => setProductName(event.target.value);
  const handleProductDescriptionChange = (event) =>
    setProductDescription(event.target.value);
  const handleProductPriceChange = (event) =>
    setProductPrice(parseInt(event.target.value));
  const handleProductImageChange = (event) => {
    handleUpload(event.target.files[0]);
  };
  const handleProductCategoryChange = (event) =>
    setProductCategory(event.target.value);

  async function getProductByUID(uid) {
    try {
      const productsRef = collection(firestore, "productos"); // Replace with your actual collection name
      const productDocRef = doc(productsRef, uid);
      const productSnapshot = await getDoc(productDocRef);

      if (productSnapshot.exists()) {
        console.log(productSnapshot.data());
        setProductName(productSnapshot.data().nombre);
        setProductDescription(productSnapshot.data().descripcion);
        setProductPrice(productSnapshot.data().precio);
        setProductCategory(productSnapshot.data().categoria);
        setImageUrl(productSnapshot.data().imagen);
      } else {
        console.log("Product with UID:", uid, "not found.");
        return undefined;
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error; // Re-throw the error for proper handling
    }
  }

  useEffect(() => {
    if (isEditing) {
      getProductByUID(productId);
    }
  }, [isEditing, productId]);

  const handleDeleteProduct = async () => {
    try {
      const productRef = doc(firestore, "productos", productId);
      await deleteDoc(productRef); // Delete the product document
      console.log("Product deleted successfully!");
      (async () => {
        const productos = await getProductosArray();
        // Do something with the productos array
      })();
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  async function handleUpload(image) {
    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);

      const url = await getDownloadURL(imageRef);
      setImageUrl(url);
      console.log(imageUrl);
    } catch (error) {
      console.error(error); // Log the error for debugging
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      nombre: productName,
      descripcion: productDescription,
      precio: productPrice,
      categoria: productCategory,
      imagen: imageUrl,
    };

    const updateProduct = async (productData, uid) => {
      try {
        // Get a reference to the Firestore instance
        const productosCollection = collection(firestore, "productos");

        // Create a reference to the specific product document
        const productRef = doc(productosCollection, uid);

        // Set the entire document with the updated data
        await setDoc(productRef, productData);

        console.log("Product updated successfully!");
        (async () => {
          const productos = await getProductosArray();
          // Do something with the productos array
        })();
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };

    async function createProduct(product) {
      try {
        const productosRef = collection(firestore, "productos"); // Reference to the "productos" collection
        const newProductRef = await addDoc(productosRef, product);
        console.log("Product added with ID:", newProductRef.id); // Success message
        (async () => {
          const productos = await getProductosArray();
          // Do something with the productos array
        })();
        setProductCategory("");
        setProductDescription("");
        setProductId(null);
        setProductName("");
        setImageUrl(null);
        setProductPrice("");
      } catch (error) {
        console.error("Error adding product:", error); // Error handling
      }
    }

    if (isEditing) {
      updateProduct(productData, productId) // Función para actualizar un producto existente
        .then(() => {
          handleCloseModal();
          // Mostrar mensaje de éxito o realizar otra acción
        })
        .catch((error) => {
          // Mostrar mensaje de error
        });
    } else {
      createProduct(productData) // Función para crear un nuevo producto
        .then(() => {
          handleCloseModal();
          // Mostrar mensaje de éxito o realizar otra acción
        })
        .catch((error) => {
          // Mostrar mensaje de error
        });
    }
  };

  useEffect(() => {
    setProductId(props.uid);
  }, []);

  useEffect(() => {
    setIsEditing(productId !== null);
  }, [productId]);

  useEffect(() => {
    setIsEditing(productId !== null);
  }, [props.uid]);

  return (
    <>
      <button onClick={() => handleOpenModal()}>{props.children}</button>

      <Transition
        as={Dialog}
        appear={showModal}
        show={showModal}
        onClose={handleCloseModal}
        className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex justify-center items-center"
      >
        <div className="bg-white rounded-lg shadow-lg px-10 py-10 text-gray-700">
          {isEditing ? (
            <>
              <h2>Editar producto</h2>
              <p>ID del producto: {productId}</p>
            </>
          ) : (
            <h2>Crear producto</h2>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block mb-2 text-sm font-medium"
              >
                Nombre del producto:
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={handleProductNameChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productDescription"
                className="block mb-2 text-sm font-medium"
              >
                Descripción del producto:
              </label>
              <textarea
                id="productDescription"
                value={productDescription}
                onChange={handleProductDescriptionChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:w-full"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productPrice"
                className="block mb-2 text-sm font-medium"
              >
                Precio del producto:
              </label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={handleProductPriceChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productImage"
                className="block mb-2 text-sm font-medium"
              >
                Imagen del producto:
              </label>
              <input
                type="file"
                id="productImage"
                onChange={handleProductImageChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productCategory"
                className="block mb-2 text-sm font-medium"
              >
                Categoría del producto:
              </label>
              <select
                id="productCategory"
                value={productCategory}
                onChange={handleProductCategoryChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:w-full"
              >
                {categories.map((item) => {
                  return (
                    <option value={item.name}>{item.name}</option>
                  );
                })}
              </select>
            </div>

            <div className="flex justify-content-between mt-4">
              {isEditing ? (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Guardar cambios
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Crear producto
                </button>
              )}
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancelar
              </button>
              {isEditing ? (
                <button
                  type="button"
                  onClick={handleDeleteProduct}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </Transition>
    </>
  );
};

export default ProductModal;
