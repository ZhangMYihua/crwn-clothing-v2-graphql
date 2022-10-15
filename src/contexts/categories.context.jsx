import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const COLLECTIONS = gql`
  query GetCollections {
    collections {
      id,
      title,
      items{
        id,
        name,
        price,
        imageUrl
      }
    }
  }
`
///this is testing #2
export const CategoriesProvider = ({ children }) => {
  const {loading, error, data} = useQuery(COLLECTIONS)
  const [categoriesMap, setCategoriesMap] = useState({});

  console.log(data)

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
