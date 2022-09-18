import React from "react";


interface UseProjectsFilterArgs {
    itemsPerPage: number;
    initialCategories: string[];
    initialCollaborators: string[];
}

export const useProjectsFilter = (args: UseProjectsFilterArgs) => {
   const {itemsPerPage, initialCategories, initialCollaborators} = args;
   const projectsMap = React.useRef(new Map());
   const [
        selectedCategories, 
        setSelectedCategories] = React.useState<string[]>(initialCategories);
  
   const [
        selectedCollaborators, 
        setSelectedCollaborators] = React.useState<string[]>(initialCollaborators);
  
   const [skippedItems, setSkippedItems] = React.useState<number>(0);

   const handleItemSelection = React.useCallback(
    (
      checked: boolean,
      item: string,
      itemArray: string[],
      setItemArray: React.Dispatch<React.SetStateAction<string[]>>
    ) => {

    projectsMap.current.clear();
    setSkippedItems(0);

    const isItemAlreadySelected = itemArray.includes(item);
    if (checked && !isItemAlreadySelected) {
        setItemArray([...itemArray, item]);
    } else if (!checked && isItemAlreadySelected) {
        setItemArray(itemArray.filter((i) => i !== item));
    }
    },
    []
  );

  const handleCategorySelect = React.useCallback(
    (checked: boolean, category: string) => {
      handleItemSelection(
        checked,
        category,
        selectedCategories,
        setSelectedCategories
      );
    },
    [selectedCategories, handleItemSelection]
  );


  const handleCollaboratorSelect = React.useCallback(
    (checked: boolean, collaborator: string) => {
      handleItemSelection(
        checked,
        collaborator,
        selectedCollaborators,
        setSelectedCollaborators
      );
    },
    [selectedCollaborators, handleItemSelection]
  );


  const handleLoadMore = React.useCallback(() => {
    setSkippedItems(skippedItems + itemsPerPage);
  }, [skippedItems, setSkippedItems, itemsPerPage]);
  
  return {
    selectedCategories,
    selectedCollaborators,
    handleCategorySelect,
    handleCollaboratorSelect,
    handleLoadMore,
    skippedItems,
    projectsMap
  }
}
  