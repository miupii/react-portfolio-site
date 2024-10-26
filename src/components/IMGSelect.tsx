interface Props {
    source: string;
    altText: string;
    openDialog: () => void;
}

const IMGSelect = ({source, altText, openDialog} : Props) => {
  return (
    <img 
        className="img-obj"
        src={source} 
        alt={altText} 
        onClick={openDialog}
    />
  )
}

export default IMGSelect;