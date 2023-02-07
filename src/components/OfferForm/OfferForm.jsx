import { usePage } from 'hooks';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOfferType } from 'redux/user/userSelectors';
import css from './OfferForm.module.scss';

export const OfferForm = () => {
  const { offer } = usePage();
  const offerType = useSelector(selectOfferType);
  const navigate = useNavigate();

  const today = () => {
    const newDay = new Date(Date.now());
    newDay.setDate(newDay.getDate() + 1);
    const stringDate =
      newDay.getFullYear() +
      '-' +
      (newDay.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      newDay.getDate().toString().padStart(2, '0');
    return stringDate;
  };

  const handleChangeOfferType = e => {
    const query = e.currentTarget.value;
    for (let route of Object.keys(offer.routes)) {
      if (offer.routes[route].name === query) {
        navigate(offer.routes[route].location);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { offerType, name, email, phone, date, place, feedback } =
      form.elements;
    window.alert(
      `Wysyłam zapytanie o treści -> imię: ${name.value}, email: ${email.value}, kontakt: ${phone.value} || typ animacji: ${offerType.value}, data: ${date.value}, miejsce: ${place.value} || dodatkowe informacje: ${feedback.value}`
    );
    form.reset();
  };

  return (
    <section className={css.container}>
      <form name="offer" onSubmit={handleSubmit}>
        <h3>Zapytaj o ofertę</h3>
        <div>
          <label htmlFor="offerType">Okazja</label>
          <select
            id="offerType"
            name="offerType"
            value={offerType}
            onChange={handleChangeOfferType}
          >
            <option value="wedding">Wesela</option>
            <option value="communion">Komunie</option>
            <option value="christening">Chrzciny</option>
            <option value="birthday">Urodziny</option>
            <option value="others">Inne</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Imię</label>
          <input type="text" id="name" name="name" required></input>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="phone">Telefon</label>
          <input type="tel" id="phone" name="phone"></input>
        </div>
        <div>
          <label htmlFor="date" required>
            Termin
          </label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={today()}
          ></input>
          <label htmlFor="place" required>
            Miejscowość
          </label>
          <input type="text" id="place" name="place"></input>
        </div>
        <div>
          <label htmlFor="feedback">Dodatkowe informacje</label>
          <textarea id="feedback" name="feedback"></textarea>
        </div>
        <button type="submit">Zapytaj</button>
      </form>
    </section>
  );
};
