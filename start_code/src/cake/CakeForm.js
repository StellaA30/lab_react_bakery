import { useState } from "react";


const CakeForm = ({listOfCakes, setListOfCakes}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

    
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const updatedcakes = [...listOfCakes]; 

        const newCake = {
            cakeName: cakeName,
            ingredients:ingredients,
            price: price,
            rating: rating
      };

      // condition to check cake already exist 
        const isCakeAlreadyAdded = updatedcakes.some(
        (cake) => cake.cakeName === newCake.cakeName
      );
    // if case exists then let the user know it does exist
      if (isCakeAlreadyAdded) {
        setMessage("Cake already exists on the list.");
      } 
      // if not then add the cake to the page
      else {
        updatedcakes.push(newCake); // Add new cake
        setListOfCakes(updatedcakes); // Set the updated array of cakes
        setMessage("Cake added successfully!");
      }

    //   updatedcakes.push(newCake); //add new cake

    //   setListOfCakes(updatedcakes);  // set the updated array of cakes
  
    }
    
    
        
    return (  
        <>
        <h3>Complete form to add a new cake!!</h3>
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            name="cakeName"
            placeholder="cake name"
            value={cakeName}
            onChange={(e) => setCakeName(e.target.value)}

            />

            <input 
            type="text"
            name="ingredients"
            placeholder="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value.split(","))}
            />

            <input 
            type="text"
            name="price"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <input 
            type="text"
            name="rating"
            placeholder="cake rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
            <input 
            type="submit"
            value="Submit"/>
        </form>
        <p>{message}</p>
        </>

    );
}
 
export default CakeForm;