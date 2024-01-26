const getAllTintoVinos = () => {
  return 10;
};

const getAllBlancoVinos = () => {
  return 20;
};

const getAllRosadoVinos = () => {
  return 30;
};

const getAllGenerosoVinos = () => {
  return 40;
};

const getAllDulceVinos = () => {
  return 50;
};

const getAllNaranjaVinos = () => {
  return 60;
};

const getAllVermut = () => {
  return 70;
};

const getAllVinos = () => {
  return (
    getAllTintoVinos() +
    getAllBlancoVinos() +
    getAllRosadoVinos() +
    getAllGenerosoVinos() +
    getAllDulceVinos() +
    getAllNaranjaVinos() +
    getAllVermut()
  );
};

const totalNumberOfVinos = getAllVinos();

export { totalNumberOfVinos };
