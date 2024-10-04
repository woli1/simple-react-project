import { useContext } from "react";
import { my_context } from "../../context";
import RecipeItem from "../../RecipeItem";

export default function Favorites() {
  const { favoritesList } = useContext(my_context);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
