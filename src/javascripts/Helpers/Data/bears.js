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
  const targetId = e.target.id;
  if (targetId.includes('attempted')) {
    const bearId = Number(targetId.split('--')[1]);
    const bearIndex = bears.findIndex((bear) => bear.id === bearId);
    bears[bearIndex].attempted += 1;
    bears[bearIndex].timeAttempt = new Date();
  }
  createCards(bears);
};

const succeed = (e) => {
  const targetId = e.target.id;
  if (targetId.includes('succeeded')) {
    const bearId = Number(targetId.split('--')[1]);
    const bearIndex = bears.findIndex((bear) => bear.id === bearId);
    bears[bearIndex].succeeded += 1;
    bears[bearIndex].timeSucceed = new Date();
  }
  createCards(bears);
};

export {
  bears, getFormInfo, attempt, succeed,
};
