import React from "react";
import "./Carrousel.css";
import { motion, useMotionValue, useDragControls } from "framer-motion";

const Carrousel = ({ name, photos }) => {
  const y = useMotionValue(0);
  const yHeader = useMotionValue(0);
  const yImages = useMotionValue(0);
  const dragControls = useDragControls();

  const handleDrag = (_, info) => {
    // Calcula la diferencia de posición y aplica al desplazamiento de imágenes
    const deltaY = info.point.y - info.point.yStart;
    yImages.set(yImages.get() + deltaY);
  };

  const handleDragEnd = (_, info) => {
    // Actualiza la posición después de soltar
    yHeader.set(info.point.y);
  };

  return (
    <div className="h-screen relative w-1/5 overflow-hidden">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        style={{ y }} 
        dragControls={dragControls}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        className="h-12 w-full z-10 flex items-center justify-start pl-2 absolute bg-slate-800 font-medium text-white "
      >
        <span>{name}</span>
      </motion.div>
      <motion.div 
      style={{ y: yImages }}
      className="w-full h-full overflow-y-auto ">
        {photos.map((foto, index) => (
          <img src={foto} className="w-full"></img>
        ))}
      </motion.div>
    </div>
  );
};

export default Carrousel;
