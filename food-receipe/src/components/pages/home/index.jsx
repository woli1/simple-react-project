import { useContext } from "react";
import { my_context } from "../../context";
import RecipeItem from "../../RecipeItem";

export default function Home() {
  const { recipeList, loading } = useContext(my_context);
  if (loading) return <div>Loading ...Please wait!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}
