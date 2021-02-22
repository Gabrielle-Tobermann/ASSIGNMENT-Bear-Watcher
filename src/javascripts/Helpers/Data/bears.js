import createCards from '../../Components/createCards';

const bears = [];

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const url = document.querySelector('#img-url').value;
  const attempted = 0;
  const succeeded = 0;
  const timeAttempt = Date();
  const timeSucceed = Date();
  const obj = {
    name,
    url,
    attempted,
    succeeded,
    timeAttempt,
    timeSucceed,
  };
  bears.push(obj);
  createCards(bears);
  document.querySelector('form').reset();
};

const attempt = (e) => {
  if (e.target.id === 'attempted') {
    bears.forEach((item) => {
      const element = item;
      element.attempted += 1;
      element.timeAttempt = new Date();
    });
  }
  createCards(bears);
};

const succeed = (e) => {
  if (e.target.id === 'succeeded') {
    bears.forEach((item) => {
      const element = item;
      element.succeeded += 1;
      element.timeSucceed = new Date();
    });
  }
  createCards(bears);
};

export {
  bears, getFormInfo, attempt, succeed
};
