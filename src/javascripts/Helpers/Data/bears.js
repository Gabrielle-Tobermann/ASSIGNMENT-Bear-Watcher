import createCards from '../../Components/createCards';

const bears = [];

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const url = document.querySelector('#img-url').value;
  const obj = {
    name,
    url,
  };
  bears.push(obj);
  createCards(bears);
  document.querySelector('form').reset();
};

export { bears, getFormInfo };
