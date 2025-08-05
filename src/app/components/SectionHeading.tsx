// components/SectionHeading.tsx
interface sectionHeadProps{
  heading:string;
}

const SectionHeading: React.FC<sectionHeadProps> = ({
heading

}) => {
  return (
    <div className="d-flex align-items-center mb-4">
      <h5 className="mb-0 fw-bold me-2 fs-3">{heading}</h5>
      <span className="fw-bold me-2">&rsaquo;</span>
      <div className="flex-grow-1 border-bottom" style={{ height: '2px', backgroundColor: '#ccc' }}></div>
    </div>
  )
}

export default SectionHeading;
