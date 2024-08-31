import { ModalOverlay, ModalContent, WinnerText, CloseButton } from "./styles";

type WinnerModalProps = {
  winnerText: string;
  onClose: () => void;
};

const WinnerModal: React.FC<WinnerModalProps> = ({ winnerText, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <WinnerText>{winnerText}</WinnerText>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WinnerModal;
