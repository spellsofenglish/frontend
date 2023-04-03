/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Button } from '../../../ui-kit';

export const PoliticsPage = () => {
  return (
    <>
      <div className="background__politics">
        <div className="header__politics">
          <div className="container buttons__politics">
            <button className="button__politics home" />
            <button className="button__politics rules" />
          </div>
        </div>
        <div className="container">
          <button className="button__politics back" />
        </div>
        <article className="politics">
          <h1>Пользовательское соглашение</h1>
          <section>
            <p>(Версия от 16.05.2022)</p>
            <p>
              ПОЖАЛУЙСТА, ВНИМАТЕЛЬНО ПРОЧИТАЙТЕ НАСТОЯЩЕЕ ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ ПЕРЕД
              ИСПОЛЬЗОВАНИЕМ САЙТА, УСТАНОВКОЙ ИГРЫ «Калибр» („Caliber”), ПРИЛОЖЕНИЯ, ПРОГРАММНОГО
              ОБЕСПЕЧЕНИЯ, ЛЮБОГО ЕГО ОБНОВЛЕНИЯ, ИЗМЕНЕНИЯ ИЛИ ДОПОЛНЕНИЯ. Настоящее
              пользовательское соглашение с конечным пользователем (далее – Соглашение) является
              публичной офертой (официальным предложением) в адрес физического лица/конечного
              пользователя и регулирует использование Сайта, а также игры «Калибр» („Caliber”),
              приложения, программного обеспечения, любого его обновления, изменения или дополнения
              (далее – Игра), предоставляемой в настоящее время или которая будет предоставляться
              лицензиаром – компанией 1C-777 Лимитед (1C-777 Limited) и/или её аффилированными
              лицами, в том числе входящими в одну группу (далее – Администратор) на веб-сайте
              playcaliber.com («Веб-сайт»). Настоящее Соглашение является обязательным юридическим
              соглашением между Администратором и покупателями или пользователями («Вы» /
              «Пользователь») Игры, представленной на Веб-сайте, которое предоставляет Пользователю
              ограниченное право на использование Игры на неисключительной основе, не подлежащее
              сублицензированию и передаче, в соответствии с условиями настоящего Соглашения.
              Получая, открывая файловый пакет, устанавливая и / или используя Игру, содержащую
              данное программное обеспечение, Вы соглашаетесь соблюдать законы об интеллектуальной
              собственности и все условия настоящего Соглашения. Пользователь вправе создать аккаунт
              – создаваемую Пользователем и принадлежащую Администратору учетную запись
              Пользователя, которая представляет собой совокупность данных о Пользователе,
              необходимых для использования Пользователем Игры в соответствии с настоящим
              Соглашением, а именно: авторизации (аутентификации) Пользователя в Игре, доступа к
              информации о Пользователе, настройкам, игровым ценностям, статистическим показателям и
              иной подобной информации.Правила поведения расположены по адресу
              playcaliber.com/conduct. Правила поведения – документ, устанавливающий правила участия
              и поведения Пользователя, а также ответственность Пользователя за нарушения. Права
              использования Игры предоставляются Пользователю Администратором на условиях,
              определенных настоящим Соглашением.Лицензиар/Администратор не передает вам право на
              название Игры, и лицензия, предоставленная Вам по настоящему Соглашению, не является
              продажей. Если Вы не согласны соблюдать данное Соглашение, не устанавливайте и не
              используйте Игру и удалите Игру с Вашего устройства.
            </p>
          </section>
          <section>
            <h2>1. АКЦЕПТ СОГЛАШЕНИЯ</h2>
            <p>
              1.1 Факт установки и использования Игры является полным и безоговорочным принятием
              условий данного Соглашения, Правил Игры, а также Политики конфиденциальности,
              размещенных на Веб-сайте, и данное физическое лицо, в соответствии со ст. 434 и ст.
              438 Гражданского кодекса Российской Федерации, рассматривается как лицо, вступившее с
              Администратором в договорные отношения.С момента осуществления действий,
              предусмотренных в настоящем пункте настоящего Соглашения, настоящее Соглашение
              считается заключенным в письменной форме.
            </p>
            <p>
              1.2 Пользователем может стать любое физическое лицо, достигшее возраста 18 лет к
              моменту установки и использования Игры. Несовершеннолетние лица имеют право заключать
              настоящее Соглашение и использовать Игру лишь в том случае, если на момент установки и
              использования Игры имеется согласие их законного представителя. Соответственно,
              Пользователь, устанавливая и используя Игру, подтверждает своё совершеннолетие и
              дееспособность, а в том случае, если Пользователь является несовершеннолетним –
              наличие согласия своего законного представителя. По требованию Администратора
              Пользователь сообщает Администратору личные (паспортные) данные своего законного
              представителя, согласие которого на подписание настоящего Соглашения получено
              Пользователем
            </p>
          </section>
          <section>
            <h2>2. ПРЕДМЕТ СОГЛАШЕНИЯ</h2>
            <p>
              2.1 Администратор предоставляет пользователю ограниченное право, на неисключительной
              основе, непередаваемое, не подлежащее сублицензированию на установку и/или
              использование Игры для частного использования в течение такого времени, пока
              Пользователь или Администратор не расторгнет настоящее Соглашение.
            </p>
            <p>
              {' '}
              2.2 Пользователь не имеет права прямо или косвенно (1) копировать, продавать,
              арендовать, сдавать в аренду, лицензировать, распространять, использовать Игру или
              любую её часть в коммерческих целях, и (2) осуществлять обратное проектирование,
              декомпилировать, модифицировать, изменять или создавать производные работы на основе
              Игры; (3) удалять, изменять, скрывать или изменять информацию об авторских правах и
              товарных знаках или другие уведомления об авторстве и происхождении информации,
              уведомления или обозначения, размещенные в рамках Игры.
            </p>
            <p>
              2.3 За исключением случаев, прямо оговоренных в Соглашении, все права, не
              предоставленные Пользователю по настоящему Соглашению, сохраняются у Администратора.
              Игра и все связанные с ней права остаются собственностью Администратора. Администратор
              сохраняет за собой единоличное и исключительное право собственности на все права,
              титулы и интересы в игре и на все связанные с ней права интеллектуальной
              собственности.
            </p>
            <p>
              2.4 Администратор вправе в любое время без предварительного уведомления Пользователя в
              одностороннем порядке ограничивать, расширять, дополнять, модифицировать и иным
              образом изменять игру, любые ее элементы и части, а также изменять Ключевые
              документы.Модификация игры и ее элементов может осуществляться посредством создания и
              установки новых частей программного обеспечения (патчей). Их целью может являться,
              например, усовершенствование или изменение игрового процесса (геймплея) либо
              добавление в Игру новых данных и команд («features»), что может привести к прекращению
              или приостановлению прав использования определённых игровых элементов и Прав на
              неактивированные данные и команды.Пользователь понимает и настоящим признает, что
              указанные действия являются неотъемлемой частью процесса создания и функционирования
              Игры, а также дает согласие на их совершение Администратору без предварительного
              уведомления Пользователя.
            </p>
            <p>
              2.5 Обновления, апгрейды, патчи и модификации могут быть необходимы для того, чтобы
              иметь возможность продолжать использовать Игру на определенном оборудовании.Соглашение
              не предоставляет право собственности на Игру и не может быть понято как передача и/или
              отчуждение каких-либо прав интеллектуальной собственности на Игру.
            </p>
            <p>
              2.6 ЭТА ИГРА ПЕРЕДАЕТСЯ ВАМ НА ОСНОВАНИИ ЛИЦЕНЗИИ ДЛЯ ЧАСТНОГО ИСПОЛЬЗОВАНИЯ, А НЕ
              ПРОДАЁТСЯ.
            </p>
            <p>
              2.7 При использовании Игры Пользователь обязуется соблюдать все применимые законы,
              правила и положения и не использовать Игру в каких-либо незаконных целях.
            </p>
            <p>
              2.8 Каждая лицензионная копия Игры может быть использована на одном устройстве одним
              Пользователем. Использование Игры означает, что Вы загрузили, установили или запустили
              Игру на компьютере или аналогичном устройстве. Если Вы устанавливаете Игру на
              многопользовательскую платформу, сервер или сеть, то каждый отдельный Пользователь
              Игры должен получить лицензию отдельно.
            </p>
            <p>
              2.9 Об установке следующей версии Игры Администратор уведомляет Пользователей на
              Веб-сайтах. Пользователь соглашается с тем, что для участия в Игре после установки
              следующей версии Игры может потребоваться принятие нового пользовательского соглашения
              и иных обязательных для исполнения документов Администратора, размещенных на
              Веб-сайте. Пользователь соглашается с тем, что установка обновлений, патчей и фиксов
              может привести к невозможности использования игры и как следствие, таких услуг как
              “Премиум аккаунт”, во время процесса установки, без последующей компенсации.
            </p>
            <p>
              2.10 Пользователь принимает к сведению и согласен с тем, что Администратор вправе
              изменить данное Соглашение в одностороннем порядке, публикуя уведомления о таких
              изменениях на Веб-сайте и/или по электронной почте и/или в Игре. Уведомление считается
              полученным Пользователем через сутки после публикации такого уведомления на главной
              странице Веб-сайта либо в разделе новости. Продолжение участия Пользователя в игровом
              процессе означает согласие с измененными условиями Соглашения.
            </p>
          </section>
          <section>
            <h2>3. ПРАВО СОБСТВЕННОСТИ НА ИГРУ</h2>
            <p>
              Пользователь признаёт, что все права, связанные с Игрой и её компонентами (в
              частности, названия, компьютерные коды, темы, персонажи, имена персонажей, сюжеты,
              диалоги, места, концепции, изображения, фотографии, анимация, видео, музыка и текст,
              содержащиеся в игре), а также права, связанные с товарным знаком, авторскими правами,
              связанными с Игрой, являются собственностью Администратора и охраняются актами и
              законами Российской Федерации и международными нормативными актами и иными законами,
              договорами, международными законами и соглашениями, касающимися интеллектуальной
              собственности.
            </p>
          </section>
          <section>
            <h2>4. ИСПОЛЬЗОВАНИЕ ИГРЫ</h2>
            <p>
              4.1 Игра является программой для ЭВМ и представляет собой совокупность данных, команд
              и порождаемых ею аудиовизуальных отображений («данные» и «команды»), активируемых
              последовательно для получения Пользователем определенного результата, предусмотренного
              сценарием Игры, без внесения платы (активированные данные и команды) или после
              внесения лицензионного платежа (неактивированные данные и команды) (Free-to-play).
            </p>
            <p>
              4.2 Права на неактивированные данные и команды, предусмотренные настоящим Соглашением
              и права на использование данных, команд (в частности, внутриигровой валюты,
              премиум-аккаунта, других данных, команд) и порождаемых ими аудиовизуальных отображений
              Игры, активируемых последовательно для получения Пользователем определённого
              результата, предусмотренного сценарием Игры, приобретаемые Пользователем после
              внесения установленного Администратором лицензионного платежа, в момент отражения
              соответствующих неактивированных данных и команд в аккаунте Пользователя. Права на
              неактивированные данные и команды можно приобрести в Премиум магазине – ресурсе
              Администратора, расположенном по адресу playcaliber.com/store. Размер лицензионного
              платежа за Права на неактивированные команды и данные определяется Администратором и
              указывается в Премиум магазине. Приобретая Права на неактивированные данные и команды,
              Пользователь получает права использования расширенного функционала Игры. Администратор
              в одностороннем порядке определяет виды и содержание неактивированных данных и команд.
              Срок использования премиум аккаунта, являющегося частью Игры, исчисляется с момента
              создания записи о нём в аккаунте и действует до истечения установленного
              Администратором срока действия премиум аккаунта. Платежи осуществляются Пользователем
              путем перечисления денежных средств в пользу Администратора через поддерживаемые
              Администратором платёжные методы. Перечень доступных платёжных методов определяется
              Администратором в одностороннем порядке и указывается в Премиум магазине либо в ином
              порядке.
            </p>
            <p>
              4.3 Администратор вправе по своему усмотрению определять территорию, в пределах
              которой предоставляются права использования Игры в соответствии с настоящим
              Соглашением.
            </p>
            <p>
              4.4 Пользователь имеет право использовать Игру в соответствии с инструкциями,
              приведёнными в Правилах поведения.
            </p>
            <p>
              4.5 Пользователь обязуется не использовать стороннее программное обеспечение и другие
              средства для модификации игровых файлов и\или изменения игрового процесса с целью
              получения преимущества относительно других участников игрового процесса.
            </p>
            <p>
              4.6 Пользователь обязуется не продавать, не распространять, не уступать, не
              передавать, не сублицензировать и не сдавать Игру в аренду третьим лицам, а также при
              создании аккаунта предоставлять соответствующую действительности информацию и не
              передавать аккаунт или доступ к нему другим лицам.
            </p>
            <p>
              4.7 Пользователь может безвозвратно передать все свои права в соответствии с
              Лицензионным соглашением получателю, при условии, что получатель согласен с условиями
              Соглашения и Пользователь удаляет Игру с устройства Пользователя. В этом случае
              Пользователь также обязуется передать получателю все компоненты и документацию,
              относящиеся к Игре.
            </p>
            <p>
              4.8 Пользователь соглашается с тем, что Игра может содержать звуковые и видеоэффекты,
              которые при определённых обстоятельствах могут вызывать обострение эпилептических и
              иных расстройств неврологического характера у склонных к ним лиц, и подтверждает, что
              не страдает указанными расстройствами, а в противном случае не будет использовать
              Игру.
            </p>
            <p>
              4.9 Пользователь понимает и соглашается с тем, что регулярное длительное нахождение у
              персонального компьютера или иного технического устройства может вызывать различные
              нарушения здоровья, в том числе ослабление зрения, сколиоз, различные формы неврозов и
              тому подобное. Пользователь гарантирует, что он будет использовать Игру исключительно
              на протяжении разумного времени с перерывами на отдых и профилактику нарушений
              здоровья.
            </p>
            <p>
              4.10 Пользователь понимает и соглашается, что он самостоятельно несёт ответственность
              за любые материалы или иную информацию, которые он размещает в Игре, на Веб-сайте, в
              чатах или иным образом сообщает другим пользователям или доводит до всеобщего
              сведения.
            </p>
            <p>
              4.11 Пользователь соглашается с тем, что Игра не является азартной игрой, игрой на
              деньги, конкурсом или пари. Приобретение Прав на неактивированные данные и команды
              является реализацией собственного волеизъявления и желания Пользователя.
            </p>
            <p>
              4.12 В соответствии с установленными техническими требованиями использование
              Пользователем Игры возможно исключительно в интерактивном (онлайн) режиме, в связи с
              чем Пользователю необходимо обеспечить подключение к интернету для использования Игры.
            </p>
            <p>
              4.13 Пользователь имеет право на возврат денежных средств, внесенных за
              неактивированные данные и команды в Игре, в течение 14 (четырнадцати) дней с момента
              покупки в случае если такие купленные неактивированные данные и команды еще не
              использовались Пользователем и сохранены в купленном объёме. Средства за покупку будут
              полностью возвращены Вам в течение 10 (десяти) дней после одобрения возврата и
              переведены на тот способ оплаты, которым Вы воспользовались при покупке доставленных
              Пользователем.
            </p>
          </section>
          <section>
            <h2>5. ПРЕКРАЩЕНИЕ ДЕЙСТВИЯ ЛИЦЕНЗИИ</h2>
            <p>
              5.1 Соглашение вступает в силу с момента первой установки или использования Игры
              Пользователем.
            </p>
            <p>
              5.2 Соглашение может быть автоматически расторгнуто Администратором без
              предварительного уведомления, если Пользователь не соблюдает условия настоящего
              Соглашения. В таком случае Пользователь должен немедленно уничтожить Игру и удалить
              Игру и любую её часть с устройства Пользователя.
            </p>
            <p>
              5.3 Пользователь может расторгнуть Соглашение в любое время, полностью удалив Игру с
              устройства Пользователя.
            </p>
          </section>
          <section>
            <h2>6. ГАРАНТИЯ</h2>
            <p>Администратор обязан обеспечить техническую поддержку Игры.</p>
          </section>
          <section>
            <h2>7. ОГРАНИЧЕНИЕ ГАРАНТИИ</h2>
            <p>
              7.1 ИГРА ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ“ И ”КАК ДОСТУПНО". АДМИНИСТРАТОР ПРЯМО ОТКАЗЫВАЕТСЯ
              ОТ КАКИХ-ЛИБО ГАРАНТИЙ НА ИГРУ ЛЮБОГО РОДА, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, КРОМЕ ТЕХ,
              КОТОРЫЕ ОПРЕДЕЛЕНЫ В СТАТЬЕ 6 СОГЛАШЕНИЯ.
            </p>
            <p>7.2 Пользователь прямо признает, что он использует Игру на свой страх и риск.</p>
            <p>
              7.3 Пользователь несёт ответственность за любые расходы, связанные с ремонтом и/или
              исправлением Игры.
            </p>
            <p>
              7.4 Администратор не гарантирует, что Игра будет бесперебойной или безошибочной, что
              дефекты будут исправлены или что Игра не содержит вирусов или других вредных
              компонентов.
            </p>
            <p>
              7.5 В той мере, в какой это предусмотрено законом, Администратор прямо отказывается от
              каких-либо гарантий, касающихся рыночной стоимости Игры, удовлетворённости
              Пользователя или его способности осуществлять конкретное использование.
            </p>
            <p>
              7.6 Пользователь несёт ответственность за все риски, связанные с потерей прибыли,
              потерей данных, ошибками и потерей деловой или иной информации в результате владения
              или использования Игры.
            </p>
            <p>
              7.7 Поскольку некоторые юрисдикции не допускают вышеупомянутое ограничение гарантии,
              возможно, что оно не будет применяться к Пользователю.
            </p>
          </section>
          <section>
            <h2>8. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ</h2>
            <p>
              8.1 Ни в коем случае (в том числе, без ограничения, в случае халатности)
              Администратор, его сотрудники, агенты или дистрибьюторы не несут ответственности за
              любой прямой, косвенный, случайный, специальный, вспомогательный или иной ущерб,
              возникший в связи с настоящим Соглашением, в результате использования или
              невозможности использования Игры, а также в результате владения или плохого
              функционирования Игры, даже если Администратор был предупрежден о возможности такого
              ущерба.В частности, Администратор не несёт никакой ответственности за использование
              Игры в нарушение мер предосторожности при использовании, изложенных в руководстве
              пользователя Игры.Поскольку некоторые юрисдикции не допускают освобождения от
              ответственности в случае прямого или случайного ущерба, возможно, что вышеупомянутое
              исключение не распространяется на Пользователя.
            </p>
            <p>
              8.2 Вся ответственность Администратора, без исключения, ограничивается возмещением
              Пользователем покупной цены Игры в обмен на возврат Игры, всех копий, регистрационных
              документов и руководств, а также всех материалов, составляющих передачу лицензии от
              Пользователя обратно Администратору.
            </p>
            <p>
              8.3 Настоящее Соглашение на использование Игры предоставляет Пользователю определенные
              права, и Пользователь может иметь другие права, в зависимости от законодательства
              своей страны.
            </p>
          </section>
          <section>
            <h2>9. ДРУГИЕ ПОЛОЖЕНИЯ</h2>
            <p>
              9.1 Настоящее Соглашение и любые споры, претензии или обязательства (договорные или
              внедоговорные), возникающие из него или в связи с ним, его предметом или образованием,
              регулируются законодательством Республики Кипр, если иное не требуется
              законодательством страны, где Пользователь обычно проживает.
            </p>
            <p>
              9.2 Настоящим Пользователь подтверждает, что он прочитал и понял настоящее Соглашение,
              а также соглашается с тем, что действие по установке и использованию Игры является
              подтверждением согласия Пользователя на обязательность условий настоящего Соглашения.
              Пользователь также признаёт и соглашается с тем, что настоящее Соглашение является
              полным и исключительным изложением соглашения между Администратором и Пользователем.
            </p>
            <p>
              9.3 Настоящее Соглашение может быть изменено Администратором в одностороннем порядке.
              Изменения вступают в силу с момента их публикации на Веб-сайте. Пользователь не вправе
              использовать Игру, если он не согласен с изменениями, внесёнными в Соглашение. В этом
              случае Пользователь может расторгнуть Соглашение в одностороннем порядке в течение
              десяти (10) календарных дней после размещения публикации об изменениях в Соглашении на
              Веб-сайте Игры и/или направления уведомления по электронной почте. В случае принятия
              решения о расторжении Соглашения Пользователь обязан направить Администратору
              уведомление о расторжении Соглашения по электронной почте. Если в течение указанного
              выше срока в десять (10) календарных дней Пользователь не изъявил желания расторгнуть
              настоящее Соглашение, Пользователь считается принявшим условия настоящего Соглашения с
              учётом внесенных в него изменений.
            </p>
          </section>
          <section>
            <h2>10. ПРЕКРАЩЕНИЕ</h2>
            <p>
              Любое несоблюдение положений и условий настоящего Соглашения приведёт к
              автоматическому и немедленному прекращению действия настоящего Соглашения. После
              прекращения действия настоящего Соглашения и лицензии, предоставленной здесь по любой
              причине, Вы соглашаетесь немедленно прекратить использование Игры и уничтожить все
              копии Игры, поставляемые в соответствии с настоящим Соглашением. Финансовые
              обязательства с Вашей стороны остаются в силе после истечения срока действия или
              прекращения действия настоящего Соглашения.
            </p>
          </section>
          <section>
            <h2>11. СРОК ДЕЙСТВИЯ СОГЛАШЕНИЯ</h2>
            <p>
              Настоящее Соглашение вступает в силу в момент принятия его условий Пользователем и
              действует в течение двенадцати (12) месяцев. Действие настоящего Соглашения
              автоматически продлевается на каждые следующие шесть (6) месяцев, если оно не было
              расторгнуто по инициативе одной из Сторон путем направления в адрес другой Стороны
              письменного уведомления не менее чем за тридцать (30) календарных дней до истечения
              текущего срока действия Соглашения. В случае расторжения Соглашения в указанном
              порядке Администратор не осуществляет возврат каких-либо денежных средств и не
              производит иных возмещений, в том числе убытков любого рода.
            </p>
          </section>
          <section>
            <h2>12. СОГЛАСИЕ НА ИСПОЛЬЗОВАНИЕ ДАННЫХ</h2>
            <p>
              12.1 Данные, которые могут быть обработаны Администратором, включают Ваш адрес
              электронной почты.
            </p>
            <p>
              12.2 Пользователь вправе в любой момент получить доступ, исправить, удалить такие
              персональные данные, отозвать свое согласие на обработку персональных данных.Вы можете
              связаться с нами по адресу privacy@playcaliber.com в отношении всех ваших вопросов и
              запросов, связанных с обработкой персональных данных.
            </p>
            <p>
              12.3 Вы соглашаетесь с тем, что Администратор может анонимно собирать и использовать
              информацию, собранную любым способом, в рамках предоставляемых Вам услуг поддержки
              Игры. Администратор также может использовать эту информацию для предоставления
              уведомлений и отправки Вам электронных писем, которые могут быть вам полезны или
              интересны.Администратор имеет право осуществлять рассылку сообщений, используя как
              технические средства, предоставляемые в рамках Соглашения, так и путём их отправки
              непосредственно на электронную почту Пользователя. Администратор уведомляет
              Пользователя, что сообщения могут не иметь прямого отношения к Игре, но при этом
              Пользователь имеет возможность в любой момент отказаться от получения таких сообщений
              при помощи команд или настроек, которые Администратор обязуется предоставить
              Пользователю.
            </p>
            <p>
              12.4 Контролёром персональных данных является компания 1С-777 Лимитед (1С-777 Limited)
              с её зарегистрированным номером HE315619 и зарегистрированным офисом в Республике Кипр
              по адресу 32 Критис стрит, Папакристофороу билдинг, 4й этаж, 3087 Лимассол, Кипр (32
              Kritis Street, Papachristoforou Building, 4th Floor, 3087 Limassol, Cyprus). Компания
              1С-777 Лимитед (1С-777 Limited) является администратором персональных данных, пр
            </p>
          </section>
          <div className="close">
            <Button label="Закрыть" size="medium" />
          </div>
        </article>
      </div>
    </>
  );
};
