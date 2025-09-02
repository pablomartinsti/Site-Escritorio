export const variants = {
  fadeUp: { hidden: { y: 100, opacity: 0 }, show: { y: 0, opacity: 1 } },
  fadeDown: { hidden: { y: -100, opacity: 0 }, show: { y: 0, opacity: 1 } },
  fadeLeft: { hidden: { x: -100, opacity: 0 }, show: { x: 0, opacity: 1 } },
  fadeRight: { hidden: { x: 100, opacity: 0 }, show: { x: 0, opacity: 1 } }
};

export const listStagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
export const listItem = { hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } };

export const transition = { duration: 0.5, ease: 'easeOut' };
export const viewport = { once: true, amount: 0.2 };
