import baseWindow from '../src/library/imgs/Client_base_window.png'
import logoCB from '../src/library/imgs/Logo_CB.png'

import backgroundH from '../src/library/imgs/background_header.png'
import backgroundF from '../src/library/imgs/background_footer.png'

import aboutCB from '../src/library/imgs/About_CB.png'
import client1 from '../src/library/imgs/client1.png'
import client2 from '../src/library/imgs/client2.png'
import contactImg from '../src/library/imgs/contact.png'

import cbType1 from '../src/library/imgs/cb_type1.svg'
import cbType2 from '../src/library/imgs/cb_type2.svg'

import vkIc from '../src/library/imgs/vk.svg'
import fbIc from '../src/library/imgs/facebook.svg'
import tgIc from '../src/library/imgs/telegram.svg'
import ytIc from '../src/library/imgs/YouTube.svg'
import iIc from '../src/library/imgs/instagram.svg'

function App() {
  return (
    <>
      {/* Хедер */}
      <div
        className="header"
        style={{ backgroundImage: `url(${backgroundH})` }}
      >
        <div className="header-logo">
          <img src={logoCB} alt="Logo company" />
        </div>
        <h1>Привет, будущий партнер!</h1>
      </div>

      {/* Мы — платформа */}
      <div className="client-window">
        <div style={{ width: '86%' }}>
          <p>
            Мы — платформа «Клиентская база» для разработки персональных
            CRM-систем для компаний со сложной бизнес-логикой. Когда бизнесу
            нужны сложные вычисления и нестандартные решения, разработчики
            используют наш продукт. Вот тут наш сайт, а здесь видео обзор
            настроек.
          </p>

          <img src={baseWindow} alt="Base Window" />
          <p>
            Знаем, вы уже внедряете CRM-системы. Это отлично, мы альтруисты —
            хотим, чтобы каждый бизнес нашел свою идеальную CRM. Поэтому,
            предлагаем вам включить нашу CRM в стек ваших решений и заработать
            на нашем продукте. Тем более, он поможет расширить ваши возможности.
            А вот каким образом, рассказываем дальше.
          </p>
        </div>
      </div>

      {/* Чем мы круты? */}
      <div className="about-company">
        <h1>Чем мы круты?</h1>
        <div style={{ width: '86%' }}>
          <p>
            Настройки «Клиентской базы» помогают перенести и автоматизировать
            любые бизнес-процессы клиентов. Попался заказчик со сложным
            запросом, — предложите ему простое решение оптимальное по цене и
            срокам.
          </p>
          <img src={aboutCB} alt="About client base" />
          <p>
            «Клиентская база» имеет самый гибкие настройки для разработчиков на
            российском рынке: режим конструктора для бизнесменов, и режим
            эксперт для разработчиков. На конструкторе можно собрать любые
            таблицы, отчеты, вычисления и доп.действия, а в режиме эксперт —
            делать вставки с самописным кодом на PHP/Mysql.
          </p>
          <p>
            Если вы занимаетесь описанием бизнес-процессов и не любите
            программировать — работайте на конструкторе. Например, с помощью
            конструктора отчетов мы{' '}
            <a href="">автоматизировали работу руководителя</a> отдела продаж.
          </p>
        </div>
        <div style={{ width: '86%' }}>
          <p style={{ textAlign: 'center' }}>
            Иногда лучше один раз увидеть, чем тысячу раз прочитать. Поэтому,
            посмотрите как все устроено.
          </p>

          <div className="about-links">
            <div className="style-link">
              <p className="text-link">Подробный обзор программы</p>
            </div>

            <div className="style-link">
              <p className="text-link">Общий обзор настроек</p>
            </div>
          </div>
        </div>
      </div>

      {/* Кто наши клиенты? */}
      <div className="reviews">
        <h1>Кто наши клиенты?</h1>
        <div>
          <p>
            Малый и средний бизнес со сложной логикой. Готовые CRM им не
            подходят, на свои с нуля не хватает бюджета.{' '}
            <a href="">
              Они выбирают «Клиентскую базу» не за красивый интерфейс
            </a>
            , а за содержание и возможности.
          </p>
        </div>

        <div className="review-container">
          <div className="review-1" style={{ width: '60%' }}>
            <img src={client1} alt="Client comment" />
          </div>

          <p>
            Чтобы реализовать их гениальную логику, не нужно перерабатывать ядро
            или много программировать. Плюс, им не всегда нужна CRM.
          </p>

          <div className="review-2" style={{ width: '60%' }}>
            <img src={client2} alt="Client comment" />
          </div>
        </div>
      </div>

      {/* Что мы предлагаем? */}
      <div className="prices">
        <h1>Что мы предлагаем?</h1>
        <div>
          <p>
            Зарабатывать на нашем продукте: внедрять CRM «Клиентскую базу»,
            вести техподдержку клиента и вносить доработки по улучшению
            бизнес-процессов. Еще вы можете разрабатывать свои интеграции и
            решения, а продвигать их через на наш сайт. Например, интеграция с
            WhatsApp и Speech Analytics — разработки нашего партнера.
          </p>
        </div>

        <div className="containers">
          <div
            className="style-link"
            style={{
              padding: '15px',
              width: '40%',
              height: 'inherit',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ width: '190px' }}>
              Средний чек наших партнеров за внедрение CRM «Клиентской базы» под
              ключ — 100 тысяч рублей. На доработках и поддержке за год с одного
              клиента заработали до миллиона рублей прибыли.
            </p>
          </div>

          <div className="discount-container" style={{ marginLeft: '15px' }}>
            <p>Наши официальные партнеры так же зарабатывают дополнительно:</p>
            <p style={{ fontWeight: 'bold' }}>
              <a title="About...">30%</a> с первой покупки лицензии
            </p>
            <p style={{ fontWeight: 'bold' }}>
              <a title="About...">20%</a> с последующих покупок
            </p>
            <p style={{ fontWeight: 'bold' }}>
              <a title="About...">10%</a> с продления обновлений и апгрейда
              лицензий
            </p>
          </div>
        </div>

        <p>
          «Клиентская база» бывает двух типов:
          <a href="#iid1">коробочная лицензия</a> с разовой оплатой от 13 500 до
          126 000 рублей и <a href="#iid2">SAAS-аккаунт</a> с ежемесячной
          оплатой от 300 до 12 000 рублей. Официальные партнеры получают 7%
          скидку на покупку лицензии — оплачивайте покупки клиентов сами, и
          получайте еще больше прибыли.
        </p>

        <div className="cb_types">
          <div className="discount-container" style={{ alignItems: 'center' }}>
            <div style={{ width: '100px' }}>
              <img src={cbType1} alt="Price 1" />
            </div>
            <h2>SAAS-аккаунт</h2>
            <p>от 300 до 12 000 рублей в месяц</p>
          </div>

          <div
            style={{ marginLeft: '15px', alignItems: 'center' }}
            className="discount-container"
          >
            <div style={{ width: '77px' }}>
              <img src={cbType2} alt="Price 2" />
            </div>
            <h2>Коробочная лицензия</h2>
            <p>от 13 500 до 126 000 рублей</p>
          </div>
        </div>

        <p>
          Чтобы <a href="">стать партнером</a> «Клиентской программы», нужно
          только зарегистрироваться в <a href="">реферальной программе</a>. Если
          хотите изучить программу подробно, пройдите курс «Конфигуратор». У нас
          есть <a href="">документация</a>, где мы подробно рассказали о каждом
          конструкторе и настройках.
        </p>
        <p>
          После регистрации у вас будет персональный менеджер, который всегда
          оперативно поможет и подскажет решение по любому вопросу.
        </p>
      </div>

      {/* В чем подвох? */}
      <div className="privilege">
        <h1>В чем подвох?</h1>
        <p>
          Его нет. Вы устанавливаете свои цены за внедрение, доработки и
          интеграции, забираете всю прибыль себе. Не скрываем,
          заинтересованность у нас есть — хотим, чтобы как можно больше
          бизнесменов внедряли себе нашу CRM. А без вашей помощи мы не
          справимся.
        </p>
        <p>
          Прикрепили коммерческое предложение, в нем рассказали больше о работе
          по реферальной программе. Будут вопросы — пишите — поможем
          разобраться.
        </p>
        <div className="style-link" style={{ margin: '30px 0' }}>
          <p className="text-link">Стать партнером</p>
        </div>
      </div>

      {/* Подвал */}
      <div
        className="footer"
        style={{
          backgroundImage: `url(${backgroundF})`,
        }}
      >
        <div className="contact-conteiner">
          <div className="contact">
            <img
              src={contactImg}
              alt="Contact"
              style={{ height: '70px', padding: '10px' }}
            />
            <div>
              <h2 className="contact-title">У вас остались вопросы?</h2>
              <p>
                Позвоните менеджеру Константину 8-800-1000-936 внутр. 135 или
                напишите ему в скайп (логин). Константин с удовольствием вам
                поможет.
              </p>
            </div>
          </div>
        </div>

        <div className="icons-container">
          <img className="link-icons" src={vkIc} alt="VK" />
          <img className="link-icons" src={fbIc} alt="Facebook" />
          <img className="link-icons" src={tgIc} alt="Telegram" />
          <img className="link-icons" src={ytIc} alt="YouTube" />
          <img className="link-icons" src={iIc} alt="Instagram" />
        </div>
      </div>
    </>
  )
}

export default App
