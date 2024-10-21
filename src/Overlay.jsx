import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button onClick={handleShow} title="Save" style={{backgroundColor:''}} class="cursor-pointer flex items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 active:border active:border-lime-400 rounded-md duration-100 p-2">
      <span class="text-sm text-white">Buy Now</span>
      </Button> */}
            <button title="Save" class="cursor-pointer flex items-center fill-violet-400 bg-violet-800 hover:bg-violet-900 active:border active:border-lime-400 rounded-md duration-100 p-2" onClick={handleShow}>

                <span class="text-sm text-white">Buy Now</span>
            </button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton style={{backgroundColor:'black',color:'white'}}>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{backgroundColor:'black',color:'white'}}>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default Example


// import React from "react";
// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
 
// export function DrawerDefault() {
//   const [open, setOpen] = React.useState(false);
 
//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);
 
//   return (
//     <React.Fragment>
//       <Button onClick={openDrawer}>Open Drawer</Button>
//       <Drawer open={open} onClose={closeDrawer} className="p-4">
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//           <Button size="sm">Get Started</Button>
//         </div>
//       </Drawer>
//     </React.Fragment>
//   );
// }
// export default DrawerDefault