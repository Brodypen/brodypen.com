import { IconHeart } from '@tabler/icons-react';
import React from 'react'

const MadeWithLove = () => {
  return (
    <div>
      <p className="line-clamp-1">
        Made with{" "}
        <IconHeart className="h-4 w-4 text-red-500 inline-block" /> and
        Sugar
      </p>
      by Brody Pen
    </div>
  );
};

export default MadeWithLove