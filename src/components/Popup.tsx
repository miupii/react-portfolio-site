interface Props {
    closeDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement>;
    content: string;
}

const Popup = ({dialogRef, closeDialog, content} : Props) =>{


    return (
        <>
         <dialog ref={dialogRef}>
            {content}
            <div className="center">
                <button onClick={closeDialog}>Close</button>
            </div>
         </dialog>
        </>
    )
    
   
}

export default Popup