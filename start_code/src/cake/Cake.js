const Cake = ({info}) => {

  const cakeName = info.cakeName;
  console.log(info.ingredients);
  const cakeIngredients = info.ingredients.map((ingredient, index) =>
    <li key={index}>{ingredient}</li>);

  const price = info.price;

  const rating = info.rating;



  return (
    <>
        <h2>{cakeName}</h2>
        <p>This {cakeName} cost £ {price} and has a rating of {rating}</p>
        <ul>{cakeIngredients}</ul>

    </>
  )
}

export default Cake;