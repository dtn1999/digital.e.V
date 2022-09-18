import React from "react";
import cn from "classnames";
import Headline from "../../Blocks/Headline";
import FormCheckBox from "../../Blocks/Form/FormCheckbox";

interface Props {
  collaborators: any[];
  handleCollaboratorSelect: (collaborator: any, initial: string) => void;
  categories: any[];
  handleCategorySelect: (category: any, initial: string) => void;
  initialCategory: any;
  initialCollaborator: any;
}

const CollectionSidePanel: React.FC<Props> = React.memo(
  ({
    collaborators,
    categories,
    handleCategorySelect,
    handleCollaboratorSelect,
    initialCategory,
    initialCollaborator,
  }) => {
    return (
      <div className="flex w-full flex-col justify-start px-4">
        <div className="w-full border border-[#eeeeee] px-9 pt-11">
          <div className="mt-4 mb-6">
            <Headline
              underline
              underlineAlign="left"
              className="text-3xl"
              value="Categories"
            />
          </div>
          <div>
            {categories.map((category) => (
              <div key={category.id}>
                <div className="flex cursor-pointer items-center justify-start border-b border-[#e8e8e8] py-3 text-base font-light  hover:text-primary">
                  <FormCheckBox
                    defaultChecked={category.name === initialCategory}
                    handleChecked={(checked) => {
                      handleCategorySelect(checked, category.name);
                    }}
                  />
                  <span className="whitespace-nowrap pl-9 lowercase first-letter:uppercase">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <section>
            <div className="mt-4 mb-6">
              <Headline
                underline
                underlineAlign="left"
                value="Sponsors and partners"
              />
            </div>
            <div>
              {collaborators.map((collaborator) => (
                <div key={collaborator.id}>
                  <div className="flex cursor-pointer items-center justify-start border-b border-[#e8e8e8] py-3 text-base font-light  hover:text-primary">
                    <FormCheckBox
                      defaultChecked={collaborator.name === initialCollaborator}
                      handleChecked={(checked) => {
                        handleCollaboratorSelect(checked, collaborator.name);
                      }}
                    />
                    <span className="pl-9 lowercase first-letter:uppercase">
                      {collaborator.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
);
export default CollectionSidePanel;
