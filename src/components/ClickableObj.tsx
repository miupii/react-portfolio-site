import { useRef } from "react";
import IMGSelect from "./IMGSelect";
import Popup from "./Popup";

interface Props {
    source: string;
    altText: string;
    popupContent: string;
    styles: React.CSSProperties;
}

const ClickableObj = ({source, altText, popupContent, styles} : Props) => {

    const dialogRef = useRef<HTMLDialogElement>(null);
    
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();

  return (
    <div className="img-container" style={styles}>
        <IMGSelect 
            source={source} 
            altText={altText} 
            openDialog={openDialog}
        />

        <Popup dialogRef={dialogRef} closeDialog={closeDialog} content={popupContent}/>
    </div>
  )
}

export default ClickableObj