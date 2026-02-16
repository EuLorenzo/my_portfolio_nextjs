export const floatClassic = {
  animate: {
    y: [0, -10, 0],
    x: [0, 3, 0],

    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

export const floatRotate = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1.5, 0, -1.5, 0],

    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

export const floatOrbital = {
  animate: {
    x: [0, 8, 0, -8, 0],
    y: [0, -8, 0, 8, 0],

    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

export const floatBreathing = {
  animate: {
    y: [0, -6, 0],
    scale: [1, 1.03, 1],

    transition: {
      duration: 3.2,
      repeat: Infinity,
    },
  },
};

export const returnRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
};

export const floatingArray = [
  floatClassic,
  floatRotate,
  floatOrbital,
  floatBreathing,
];
