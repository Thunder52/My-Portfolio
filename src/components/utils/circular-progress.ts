export const calculateCircleProgress = (percentage: number) => {
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return {
      radius,
      circumference,
      offset,
    };
  };
  
  