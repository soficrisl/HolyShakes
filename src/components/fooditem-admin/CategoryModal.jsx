import React, { useContext, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import app_firebase from "../../credentials";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { MenuContext } from "../context/MenuContext";

const CategoryModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const { getCategoriesArray } = useContext(MenuContext);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleCategoryNameChange = (event) =>
    setCategoryName(event.target.value);

  async function createCategory(categoryName) {
    const firestore = getFirestore(app_firebase);
    const categoriesCollectionRef = collection(firestore, "categorias"); // Reference to the "categorias" collection

    try {
      await addDoc(categoriesCollectionRef, {
        name: categoryName, // Set the "name" field in the category document
        // You can add additional fields for the category here, e.g., description, image URL, etc.
      });
      console.log("Category created successfully!");
      (async () => {
        const categories = await getCategoriesArray();
        // Do something with the productos array
      })();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your function to create the category with categoryName

    createCategory(categoryName)
    .then(() => console.log(categoryName, " category added"))
    .catch((error) => console.error(error));

    console.log("Create category with name:", categoryName);
    setCategoryName(""); // Clear input after submit
    handleCloseModal();
  };

  return (
    <>
      <button onClick={handleOpenModal}>{props.children}</button>

      <Transition
        as={Dialog}
        appear={showModal}
        show={showModal}
        onClose={handleCloseModal}
        className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex justify-center items-center"
      >
        <div className="bg-white rounded-lg shadow-lg px-10 py-10 text-gray-700">
          <h2>Crear categoría</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="categoryName"
                className="block mb-2 text-sm font-medium"
              >
                Nombre de la categoría:
              </label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={handleCategoryNameChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:w-full"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Crear categoría
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Transition>
    </>
  );
};

export default CategoryModal;
