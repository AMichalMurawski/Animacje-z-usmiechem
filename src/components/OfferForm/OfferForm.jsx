import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOfferType } from 'redux/user/userSelectors';
import css from './OfferForm.module.scss';

export const OfferForm = () => {
  const offerType = useSelector(selectOfferType);
  const navigate = useNavigate();

  const today = () => {
    const newDay = new Date(Date.now());
    console.log(newDay);
    console.log(newDay.getFullYear());
    console.log(newDay.getMonth().toString().padStart(2, '0'));
    console.log(newDay.getDay().toString().padStart(2, '0'));
    const stringDate =
      newDay.getFullYear() +
      '-' +
      newDay.getMonth().toString().padStart(2, '0') +
      '-' +
      newDay.getDay().toString().padStart(2, '0');
    console.log(stringDate);
    return stringDate;
  };

  const handleChangeOfferType = e => {
    let toLocation = '';
    switch (e.currentTarget.value) {
      case 'wedding':
        toLocation = 'wesela';
        break;
      case 'communion':
        toLocation = 'komunie';
        break;
      case 'christening':
        toLocation = 'chrzciny';
        break;
      case 'birthday':
        toLocation = 'urodziny';
        break;
      case 'others':
        toLocation = 'inne';
        break;
      default:
        toLocation = 'wesela';
    }
    navigate(toLocation);
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
          <input type="date" id="date" name="date" value={today()}></input>
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
