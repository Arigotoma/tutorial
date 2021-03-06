# Introduction

Курс для frontend разработчиков

## 1. Введение в React

> Узнаем что такое React и создадим первое приложение.  

**Для чего нужны библиотеки и фреймворки**

> **Фреймворк** — это каркас для написания приложений.
> Он определяет структуру, задаёт правила и предоставляет необходимый набор
> инструментов для разработки.

Библиотеки и фреймворки упрощают программистам разработку ПО. Не нужно тратить
время на решение типовых задач. Использование фреймворка со своими правилами
организации кода позволяет избежать большинства проблем с которыми сталкиваются новички

Фреймворк — это скелет приложения, а задача разработчика оживить его, чтобы
получился рабочий механизм. Можно сказать что это шаблон приложения в котором есть
базовые функциональные и архитектурные решения.

Использование фреймворка безусловно ограничивает возможности программиста при
разработке приложения, но фреймворков существует достаточное количество, чтобы вы
могли выбрать тот, что подходит именно для вашего приложения
(~~ну или сделать свой собственный~~).

Примеры фреймворков:
   1. django — фреймворк для Python, нацеленный на скорость: готовые компоненты для
      баз данных, рисования страниц, админок, окон входа на сайт, шаблонов и
      множества других вещей
   1. Ruby on Rails — тоже сильно ускоряет разработку сайтов.
   1. Next.js — JavaScript фреймворк, созданный поверх React.js для создания веб-приложений.
      Фреймворк был предназначен для решения проблемы React.js,
      связанную с отрисовкой приложения на стороне сервера - SSR.
      
**Итого:**
   - разработка ускоряется
   - упрощается
   - ограничивается правилами фреймворка

> **Библиотека** — это готовый набор функций для решения определенной задачи,
> например аутентификации.

В разработке приложений обычно используются не только фреймворки, но и библиотеки.
Для примера возьмем решение системы линейных уравнений методом Гаусса.
Пути решения: 
   - Написать программу реализующую метод Гаусса
   - Найти функции для манипуляций матрицами в библиотеке
   - Найти готовое решение 
   - Воспользоваться онлайн-калькулятором

Пойдя по пути собственного решения мы потратим довольно много времени на реализацию
и отладку приложения.

Если найти библиотеку для взаимодействия с матрицами мы упростим себе задачу,
в том что совершим меньше ошибок при работе с матрицей и сократим время разработки.

Когда мы найдем готовое решение, то нам нужно будет просто передать данные в
правильном формате, затратим минимальное время.

Воспользовавшись сторонним сервисом мы не только сохраним свое время, но и
не придется ничего вычислять (использовать ресурсы компьютера\компании),
просто сделать запрос со входными данными на нужный сервис и дождаться ответа.

Как видно из примера, библиотеки также помогают сохранить время и ресурсы.
Подобные инструменты можно использовать более свободно, единственным ограничением
является интерфейс взаимодействия.
Одним из таких инструментов является библиотека **React.js**.

**Что такое React**
> **React** — это декларативная JavaScript библиотека для
> создания пользовательских интерфейсов. Она позволяет вам собирать сложный
> UI из маленьких изолированных кусочков кода, называемых «компонентами».

**Почему React**
React подходит для разработки как больших, так и маленьких проектов.
В MVC модели React &ndash; это View.
Нам как frontend разработчикам большего и не надо.

По сути React это интерфейс разработчика для более простого взаимодействия с браузером.
Операции применяемые через JavaScript и HTML чаще всего будут более дорогими в исполнении,
чем при работе через React. Библиотека собирает все необходимые изменения и применяет
их более оптимальным способом.

Благодаря популярности библиотеки существует огромное количество готовых решений,
что также упрощает процесс разработки приложения.

![количество использований react](/coderoad/img/react-libs.png)

![количество использований react](coderoad/img/react-libs.png)

![количество использований react](/react-libs.png)

![количество использований react](react-libs.png)

React достаточно универсальный механизм, его можно использовать для построения 
приложения на сервере, в браузере и на мобильных устройствах.
Подход к разработке приложения на React &ndash; декларативный, то есть приложение &ndash;
заранее известный набор состояний и переходов между этими состояниями.

![alt-декларативный подход][declarative]

Декларативный подход сокращает код и делает его понятным.

React пропагандирует при построении приложения использовать композицию
компонентов, то есть приложение &ndash; набор компонентов.

***Не используйте наследование***.

Композиция позволяет решить все те же задачи, что и наследование,
но при этом взаимодействие частей приложения становится более прозрачным.

![alt-сравнение подходов][comparison]

JSX синтаксис React приложений очень удобен и понятен разработчикам никогда не
встречавшим его ранее, так как он очень похож на HTML.
Приложение представляет собой JS код с вкраплениями HTML-подобного синтаксиса и
возможностью вставки JS выражений внутрь "HTML".

```jsx
const header = text ? <h1>{text}</h1> : null;

const vdom = (
  <div>
    {header}
     <div> Hello world! </div>
  </div>
);
```

Поддержкой библиотеки занимается Facebook, при разработке сотрудники взаимодействую с
разработчиками браузеров, тем самым постоянно улучшая свой продукт.
Так как у React'a есть довольно большое сообщество, то найти ответ на интересующий
вас вопрос не составит труда.

**Первое приложение**

Что нужно для начала работы с React

### 1.1 Level 1 Step 1

Необходимо установить последнюю LTS версию [Node.js]

#### HINTS

- This is a hint to help people through the test
- Second hint for 1.1, don't worry if the hints don't show up yet

### 1.2 Level 1 Step 2

Создаем приложение React. Запустим в консоли следующую команду:

```bash
npx create-react-app my-app --template typescript
```

### 1.3 Level 1 Step 3

Заходим в папку приложения

```bash
cd my-app
```

Удаляем в папке **/src** все файлы и создаем index.tsx
Сделаем "Hello World"

```tsx
// index.tsx
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Привет, мир!</h1>,
  document.getElementById('root')
);
```

### 1.4

Сохраним все что сделали и запустим приложение:

```bash
npm start
```

Команда запустит сервер для разработки, преобразует ваши файлы и
   автоматически откроет окно с браузером полученного приложения.

![alt-Hello world][hello-world]
   
   Теперь можно вносить изменения в файл index.tsx и они автоматически
   будут показываться в окне браузера.

## 2. JSX

> Узнаем что такое jsx 

JSX — расширение языка JavaScript.
JSX напоминает язык шаблонов, наделённый силой JavaScript.

```jsx
const element = <h1>Привет, мир!</h1>;
```

**Что такое JSX?**

React исходит из принципа, что логика рендеринга неразрывно связана с прочей
логикой UI: с тем, как обрабатываются события, как состояние изменяется во времени и
как данные готовятся к отображению.
Вместо того, чтобы искусственно разделить технологии, помещая разметку и логику
в разные файлы, React разделяет ответственность с помощью слабо связанных единиц,
называемых «компоненты», которые содержат и разметку, и логику.

React можно использовать и без JSX, но большинство людей ценит его за наглядность
при работе с UI, живущем в JavaScript-коде.
Помимо этого, JSX помогает React делать сообщения об ошибках и предупреждениях понятнее.
Покажет вложенность компонента в приложении, например:

![alt-ошибка в компоненте react][error-example]

**Встраивание выражений в JSX**

В следующем примере мы объявляем переменную name и затем используем её внутри JSX,
обрамляя фигурными скобками:

```jsx
const name = 'Иван-Царевич';
const element = <h1>Здравствуй, {name}!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

JSX допускает использование любых корректных JavaScript-выражений внутри фигурных
скобок. Например, ```2 + 2```, ```user.firstName``` и ```formatName(user)```
являются допустимыми выражениями.

В примере ниже мы встраиваем результат вызова JavaScript-функции ```formatName(user)```
в элемент ```<h1>```:

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна'
};

const element = (
  <h1>
    Здравствуй, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Чтобы улучшить читаемость, мы разбили JSX на несколько строк. В таких случаях,
хотя это и не обязательно, мы советуем заключать всё выражение целиком в круглые
скобки, чтобы избежать проблем, связанных с автоматической вставкой точек с запятой.

**Использование JSX в внутри JS выражений**

После компиляции каждое JSX-выражение становится обычным вызовом JavaScript-функции,
результат которого — объект JavaScript.

Из этого следует, что JSX можно использовать внутри выражений if и циклов for,
присваивать переменным, передавать функции в качестве аргумента и возвращать из
функции.

**В JSX-выражении обязателен корневой элемент.**

```jsx
function getGreeting(user) {
  if (user) {
    return <h1>Здравствуй, {formatName(user)}!</h1>;
  }
  return <h1>Здравствуй, незнакомец.</h1>;
}
```

***JSX представляет собой объекты***

В старых версиях React (&leq; 17) при сборке приложения JSX элементы преобразуются в вызовы
```React.createElement()```.
Начиная с React 17 используется обновленное преобразование JSX элементов с целью увеличения
производительности

Следующие два примера кода эквивалентны между собой:
```jsx
const element = (
  <h1 className="greeting">
    Привет, мир!
  </h1>
);
```
```jsx
// old versions
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Привет, мир!'
);

// react 17
import {jsx} from 'react';
const element = jsx(
  'h1',
  {className: 'greeting', children: 'Привет, мир!'}
);
```

```React.createElement()``` проводит некоторые проверки с целью выявить баги в коде,
но главное — создаёт объект похожий на такой:

```js
// Примечание: этот код несколько упрощён.
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Привет, мир!'
  }
};
```

Эти объекты называются React-элементами. Можно сказать, что они описывают результат,
который мы хотим увидеть на экране.
React читает эти объекты и использует их, чтобы конструировать и поддерживать DOM.

***Компоненты React должны находиться в области видимости***

***(React older versions)***
Поскольку JSX компилируется в вызов ```React.createElement```, библиотека React должна
всегда быть в области видимости вашего JSX-кода.

**В React после 17 версии** импорт происходит автоматически во время сборки приложения,
**импортировать React вручную не нужно**.

К примеру, в данном коде оба импорта являются необходимыми, даже если на ```React``` и
```CustomButton``` нет прямых ссылок из JavaScript:

```jsx
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

***Использование атрибутов JSX***

Чтобы использовать строковый литерал в качестве значения атрибута, используются
кавычки:

```jsx
const element = <div tabIndex="0"></div>;
```

Если же в значении атрибута требуется указать JavaScript-выражение, то на помощь
приходят фигурные скобки:

```jsx
const element = <img src={user.avatarUrl}></img>;
```

Не ставьте кавычек вокруг фигурных скобок, когда используете JavaScript-выражение
в значении атрибута. Следует либо применить кавычки (для строковых литералов),
либо фигурные скобки (для выражений), но не то и другое вместе.

***Различия в атрибутах***

Есть ряд атрибутов, которые по-разному работают в React и HTML:

***className***

Чтобы указать класс CSS, используйте атрибут ```className```.
Это относится ко всем обычным элементам DOM и SVG, таким как ```<div>```, ```<a>```
и т. д.

Если вы используете React с веб-компонентами (что встречается редко), используйте
вместо этого атрибут ```class```.

***dangerouslySetInnerHTML***

Свойству ```innerHTML``` в DOM браузера соответствует ```dangerouslySetInnerHTML```
в React.
Как правило, вставка HTML из кода рискованна, так как можно случайно подвергнуть
ваших пользователей атаке межсайтового скриптинга.
Таким образом, вы можете вставить HTML непосредственно из React используя
```dangerouslySetInnerHTML``` и передать объект с ключом ```__html```,
чтобы напомнить себе, что это небезопасно. Например:

```jsx
function createMarkup() {
  return {__html: 'Первый &middot; Второй'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

Тем не менее его можно использовать для взаимодействия с внешними библиотеками
и фреймворками

```jsx
class MarkdownEditor extends React.Component {
    
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render('Привет, **мир**!') };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <label htmlFor="markdown-content">
          Что-то в формате Markdown
        </label>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('root')
);
```

***style***

Атрибут style принимает JavaScript-объект со свойствами в camelCase вместо CSS-строк.
Такой подход повышает эффективность и защищает от XSS. Например:

```jsx
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Привет, мир!</div>;
}
```

React автоматически добавит суффикс «px» к свойствам стилей с числовым значением.
Если вы хотите использовать единицы измерения, отличные от «px», укажите значение в
виде строки с желаемой единицей измерения. Например:

```jsx
// Результат: '10px'
<div style={{ height: 10 }}>
  Привет, мир!
</div>

// Результат: '10%'
<div style={{ height: '10%' }}>
  Привет, мир!
</div>
```

Однако не все свойства стилей преобразуются в пиксельные строки. Некоторые из них
остаются без единиц (например, zoom, order, flex).

***value***

Атрибут value поддерживается компонентами ```<input>```, ```<select>``` и ```<textarea>```.
Он устанавливает значение компонента.
Это полезно для создания управляемых компонентов.
```defaultValue``` — это неуправляемый эквивалент, который устанавливает значение
компонента во время первого монтирования.


***Использование дочерних элементов в JSX***

Если тег пуст, то его можно сразу же закрыть с помощью /> точно так же, как и в XML:

```jsx
const element = <img src={user.avatarUrl} />;
```

Но JSX-теги могут и содержать дочерние элементы:

```jsx
function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>;
    }
    return <h1>Здравствуй, незнакомец.</h1>;
}

const element = (
  <div>
      {getGreeting()}
      <h2>Рады вас видеть.</h2>
  </div>
);
```

Часто это бывает полезно при рендере списка JSX-выражений произвольной длины.
Например, эта запись рендерит HTML-список:

```jsx
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['закончить документацию', 'отправить пулреквест', 'снова напомнить Дэну про ревью'];
  return (
    <ul>
      {todos.map((message) => <Item message={message} />)}
    </ul>
  );
}
```

JavaScript-выражения могут быть использованы вместе с другими типами дочерних компонентов.
Они могут рассматриваться как альтернатива шаблонным строкам:

```jsx
function Hello(props) {
  return <div>Привет, {props.addressee}!</div>;
}
```

***Логические значения, null и undefined игнорируются***

Значения ```false```, ```null```, ```undefined``` и ```true``` — валидные дочерние компоненты.
Просто они не рендерятся. Эти JSX-выражения будут рендерить одно и то же:

```jsx
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

Этот подход может быть полезным для рендера по условию.
Вот пример, где JSX рендерит <Header />, если showHeader равняется true:

```jsx
<div>
  {showHeader && <Header />}
  <Content />
</div>
```

Есть один нюанс в том, что React будет рендерить «ложные» (falsy) значения, такие как число 0.
Код ниже ведёт себя не так, как вы могли ожидать, так как 0 будет отображён, если массив props.messages пуст:

```jsx
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
```

Чтобы исправить это, убедитесь что выражение перед оператором && всегда является boolean:
```jsx
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```

И наоборот, если вы хотите, чтобы такие значения как false, true, null или undefined отрисовались,
то сначала вы должны преобразовать их в строку:

```jsx
<div>
  Моя переменная JavaScript - {String(myVariable)}.
</div>
```

***React.Fragment***

Компонент ```React.Fragment``` позволяет возвращать несколько элементов без
создания дополнительного корневого элемента DOM:

```jsx
const element = (
    <React.Fragment>
      Какой-то текст.
      <h2>Заголовок</h2>
    </React.Fragment>
  );
// или сокращенно
const element = (
    <>
        Какой-то текст.
        <h2>Заголовок</h2>
    </>
);
```

Вы также можете использовать его сокращённый синтаксис ```<></>```.

**JSX предотвращает атаки, основанные на инъекции кода**

Данные, введённые пользователем, можно безопасно использовать в JSX:

```jsx
const title = response.potentiallyMaliciousInput;
// Этот код безопасен:
const element = <h1>{title}</h1>;
```

По умолчанию React DOM экранирует все значения, включённые в JSX перед тем как
отрендерить их. Это гарантирует, что вы никогда не внедрите чего-либо,
что не было явно написано в вашем приложении. Всё преобразуется в строчки,
перед тем как быть отрендеренным.
Это помогает предотвращать атаки межсайтовым скриптингом (XSS).

[error-example]: ./2.%20JSX/error_example.png

### 2.1

Add the DOCTYPE

#### HINTS

- Add `<!DOCTYPE html>` at the top of `index.html` and save the file