import css from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className={css.container}>
      <h3 className={css['heading-third']}>O nas</h3>
      <ul>
        <li className={css['paragraph-first']}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laboriosam voluptatibus assumenda? Distinctio ea voluptate,
            exercitationem earum, omnis sint suscipit molestias dolorem, nemo
            aliquam magnam nostrum obcaecati architecto accusantium fuga.
          </p>
        </li>
        <li className={css['paragraph-first']}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            itaque perferendis nam assumenda repellat ducimus ea temporibus
            laborum laboriosam nihil tempora quisquam, fuga iure. Et porro,
            nisi, incidunt aperiam sit corporis quam commodi, molestiae officia
            aut amet quo eum ex provident fugit! Eius nam consequuntur voluptate
            quia fugiat aut numquam.
          </p>
        </li>
        <li className={css['paragraph-first']}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            tempora nulla at veniam non a iste, recusandae quo minus dolorem?
            Laudantium exercitationem, aut quod quas ab laborum neque non quae
            eveniet omnis alias architecto debitis! Aliquam ipsum nobis veniam
            quas!
          </p>
        </li>
      </ul>
    </section>
  );
};
