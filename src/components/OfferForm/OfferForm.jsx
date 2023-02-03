import css from './OfferForm.module.scss';

export const OfferForm = () => {
  return (
    <section className={css.container}>
      <form name="offer">
        <h3>Zapytaj o ofertę</h3>
        <div>
          <label for="offerType">Okazja</label>
          <select id="offerType" name="offerType">
            <option value="wedding">Wesela</option>
            <option value="communion">Komunie</option>
            <option value="christening">Chrzciny</option>
            <option value="birthday">Urodziny</option>
            <option value="others">Inne</option>
          </select>
        </div>
        <div>
          <label for="name">Imię</label>
          <input type="text" id="name" name="name"></input>
          <label for="email">Email</label>
          <input type="email" id="email" name="email"></input>
          <label for="phone">Telefon</label>
          <input type="tel" id="phone" name="phone"></input>
        </div>
        <div>
          <label for="date">Termin</label>
          <input type="date" id="date" name="date"></input>
          <label for="place">Miejscowość</label>
          <input type="text" id="place" name="place"></input>
        </div>
        <div>
          <label for="feedback">Dodatkowe informacje</label>
          <textarea id="feedback" name="feedback"></textarea>
        </div>
      </form>
    </section>
  );
};
