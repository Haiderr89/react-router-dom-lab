import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {

    const {mailboxId} = useParams();
    
    const selectedBox = props.mailboxes.find((mailbox) => 
        mailbox._id === Number(mailboxId)
      );


    return (
        <>
        <h2>Details</h2>        
        <p><strong>Boxholder:</strong> {selectedBox.boxHolder}</p>
        <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>

        </>
    )
}

export default MailboxDetails