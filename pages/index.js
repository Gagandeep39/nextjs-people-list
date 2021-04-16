import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur
        elementum ante. Maecenas in consectetur nulla, eu tempus ipsum. Sed id
        mi id massa lacinia tincidunt in vel sapien. Quisque nec nibh id magna
        consequat pretium. Sed vel ligula leo. Proin commodo diam vitae urna
        vulputate, id varius magna placerat. Proin convallis malesuada nulla in
        pellentesque. Phasellus ac bibendum purus, eget malesuada enim. Vivamus
        in felis luctus, imperdiet tellus vel, pharetra quam. Nam quis felis
        egestas, iaculis ex sed, fringilla quam. Fusce accumsan massa eget dolor
        sagittis, vel aliquam nibh elementum. Cras nec tortor maximus, tincidunt
        turpis sed, bibendum turpis. Proin at nunc id nibh convallis malesuada
        in eu leo. Nam eu risus vitae est pulvinar auctor. Nunc aliquet sodales
        dolor sit amet auctor.
      </p>
      <p className={styles.text}>
        Fusce non eros viverra, aliquet metus eget, dictum ipsum. Sed nec eros
        ac lectus vestibulum elementum. Sed eros elit, vestibulum vitae mauris
        nec, blandit blandit arcu. Aliquam a egestas dolor, non tristique neque.
        Aliquam augue sapien, tempus in lectus sit amet, malesuada venenatis
        diam. Curabitur nec consectetur massa. Duis tincidunt nunc facilisis
        tellus tempus feugiat. Mauris vitae diam purus. Curabitur sollicitudin
        eros eu egestas iaculis. Nullam fringilla eleifend turpis non
        pellentesque. Integer suscipit ultricies nisl in elementum. Duis sapien
        elit, viverra vel lectus volutpat, vestibulum vulputate enim. Ut nec
        odio lacinia, elementum est eu, efficitur libero. In eleifend erat nec
        ante venenatis, nec laoreet quam tristique. Donec finibus vehicula dolor
        ac volutpat. Maecenas laoreet urna eu vulputate vulputate.
      </p>
      <Link href="/people">
        <a className={styles.btn}>See People Listing</a>
      </Link>
    </div>
  );
}
