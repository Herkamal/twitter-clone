import React from "react";
import Modal from "@mui/material/modal"

function SignUpModal() {

  const [isOpen, SetIsOpen] = useState(true)
  return (
    <>
      <button className="bg-white  text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]">
        Sign Up
      </button>
      <Modal 
      open={true}
      onClose={}
      >
{/* 1:20 */}
      </Modal>
    </>
  );
}

export default SignUpModal;
