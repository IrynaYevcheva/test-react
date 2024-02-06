// export const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => {
//         return <li>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// С ИСПОЛЬЗОВАНИЕМ КЛЮЧА

// export const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => {
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// С ИСПОЛЬЗОВАНИЕМ КЛЮЧА ПО ИНДЕКСУ (НЕ РЕКОМЕНДУЕТСЯ, КРАЙНИЙ СЛУЧАЙ)

// export const BookList = ({ books }) => (
//   <ul>
//     {books.map((book, index) => {
//       return <li key={index}>{book.name}</li>;
//     })}
//   </ul>
// );

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   backgroundColor: 'gray',
//   color: 'white',
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ children }) => {
//   return <p style={alertStyles}>{children}</p>;
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// import './Alert.css';

// export const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

// export const Alert = ({ variant, children }) => {
//   const classNames = ['alert', variant];

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

// _____________________________________________________________________

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ['alert', variant];

//   if (outlined) {
//     classNames.push('is-outlined');
//   }

//   if (elevated) {
//     classNames.push('is-elevated');
//   }

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

// 1 ВАРІАНТ

import clsx from 'clsx';
import './Alert.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         'alert',
//         variant,
//         outlined && 'is-outlined',
//         elevated && 'is-elevated'
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// 2 ВАРІАНТ

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx('alert', variant, {
        'is-outlined': outlined,
        'is-elevated': elevated,
      })}
    >
      {children}
    </p>
  );
};
