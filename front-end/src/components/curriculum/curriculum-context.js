import { createContext, useContext, useState } from "react";

const CurriculumContext = createContext();

function CurriculumProvider({ ...props }) {
  const [showEditSection, setShowEditSection] = useState(false);
  const values = {
    showEditSection,
    setShowEditSection,
  };
  return <CurriculumContext.Provider value={values} {...props} />;
}

function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (typeof context === "undefined")
    throw new Error("useCurriculum must be used within CurriculumProvider");
  return context;
}
export { useCurriculum, CurriculumProvider };
