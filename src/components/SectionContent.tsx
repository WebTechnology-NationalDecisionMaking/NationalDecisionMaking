interface SectionContentProps {
    title: string;
    legalContent: string;
  }
  
  const SectionContent: React.FC<SectionContentProps> = ({ title, legalContent }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <div className="bg-gray-100 p-4 border-l-4 border-blue-500">
          {legalContent}
        </div>
      </div>
    );
  };
  
  export default SectionContent;
  