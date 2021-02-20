import createCards from '../../Components/createCards';

const bears = [];

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const url = document.querySelector('#img-url').value;
  const attempted = 0;
  const obj = {
    name,
    url,
    attempted,
  };
  bears.push(obj);
  createCards(bears);
  document.querySelector('form').reset();
};

const attempt = () => {
  bears.forEach((item) => {
    const element = item;
    element.attempted += 1;
  });
  createCards(bears);
};

export { bears, getFormInfo, attempt };
