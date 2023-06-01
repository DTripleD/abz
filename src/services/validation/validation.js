import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const validation = data => {
  if (data?.fails?.phone) {
    Notify.warning(data?.fails?.phone.join(' '), { timeout: 3000 });
    return;
  }

  if (data?.fails?.email) {
    Notify.warning(data?.fails?.email.join(' '), { timeout: 3000 });
    return;
  }

  if (data?.fails?.name) {
    Notify.warning(data?.fails?.name.join(' '), { timeout: 3000 });
    return;
  }

  if (data.message) {
    Notify.warning(data.message, { timeout: 3000 });
    return;
  }
};
