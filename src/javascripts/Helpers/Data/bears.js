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
  const bearIds = bears.map((bear) => (bear.id)).sort((a, b) => a - b);
  const id = bearIds.length ? bearIds[(bearIds.length - 1)] + 1 : 1;
  const obj = {
    name,
    url,
    attempted,
    succeeded,
    timeAttempt,
    timeSucceed,
    id,
  };
  bears.push(obj);
  createCards(bears);
  document.querySelector('form').reset();
};

const attempt = (e) => {
  if (e.target.id === 'attempted') {
    const bearIndex = bears.findIndex((bear) => bear.id === e.target.id);
    console.warn(bearIndex);
    bearIndex.attempted += 1;
    bearIndex.timeAttempt = new Date();
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
