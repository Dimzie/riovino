// import BackBtn from 'components/BackBtn/BackBtn';
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation, useParams } from 'react-router-dom';
// import { getProducts } from '../../../redux/products/operations';
// import { useProducts } from 'hooks/useProducts';
// import TypeItem from 'components/Items/TypeItem/TypeItem';
// import { BackBtnSpan, H2Title, List } from './TypeList.styled';
// import { allSubTypes } from 'data/data';

// const TypeList = () => {
//   const [page, setPage] = useState(1);
//   const location = useLocation();
//   const backLink = location?.state?.from ?? '/';
//   const dispatch = useDispatch();
//   const { subType } = useParams();
//   const { isProductsLoading, products } = useProducts();

//   const loadMore = () => {
//     if (!isProductsLoading) {
//       setPage(prev => prev + 1);
//     }
//   };

//   const getSubTypeByParams = subType => {
//     const result = allSubTypes.find(type => type.href === subType);
//     return result;
//   };
//   const result = getSubTypeByParams(subType);

//   useEffect(() => {
//     const result = getSubTypeByParams(subType);
//     dispatch(
//       getProducts({
//         subType: result.id,
//         page,
//       })
//     );
//   }, [dispatch, page, subType]);

//   return (
//     <>
//       <H2Title>{result.title}</H2Title>
//       <List>
//         {products.products.map(({ id, name, price, stock, desc, taxes }) => {
//           return (
//             <TypeItem
//               key={id}
//               name={name}
//               price={price}
//               id={id}
//               stock={stock}
//               desc={desc}
//               taxes={taxes}
//               state={{ from: location }}
//             />
//           );
//         })}
//       </List>
//       {products.products.length !== products.totalProducts && (
//         <BackBtnSpan onClick={loadMore}>
//           {isProductsLoading && page !== 1 ? 'LOADING' : 'LOAD MORE'}
//         </BackBtnSpan>
//       )}
//       <BackBtn backLink={backLink} />
//     </>
//   );
// };

// export default TypeList;

// import BackBtn from 'components/BackBtn/BackBtn';
// import React, { useEffect, useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation, useParams } from 'react-router-dom';
// import { getProducts } from '../../../redux/products/operations';
// import { useProducts } from 'hooks/useProducts';
// import TypeItem from 'components/Items/TypeItem/TypeItem';
// import { H2Title, List } from './TypeList.styled';
// import { allSubTypes } from 'data/data';

// const TypeList = () => {
//   const [page, setPage] = useState(1);
//   const location = useLocation();
//   const backLink = location?.state?.from ?? '/';
//   const dispatch = useDispatch();
//   const { subType } = useParams();
//   const { isProductsLoading, products } = useProducts();

//   const result = allSubTypes.find(type => type.href === subType);

//   const loadMore = useCallback(() => {
//     if (!isProductsLoading) {
//       setPage(prev => prev + 1);
//     }
//   }, [isProductsLoading]);

//   useEffect(() => {
//     if (result?.id) {
//       dispatch(getProducts({ subType: result.id, page }));
//     }
//   }, [dispatch, page, result?.id]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const visibleHeight = window.innerHeight;
//       const fullHeight = document.documentElement.scrollHeight;

//       // When user is within 300px of the bottom, load more
//       if (scrollY + visibleHeight >= fullHeight - 60) {
//         if (
//           !isProductsLoading &&
//           products.products.length < products.totalProducts
//         ) {
//           loadMore();
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [loadMore, isProductsLoading, products]);

//   return (
//     <>
//       <H2Title>{result?.title}</H2Title>
//       <List>
//         {products.products.map(({ id, name, price, stock, desc, taxes }) => (
//           <TypeItem
//             key={id}
//             name={name}
//             price={price}
//             id={id}
//             stock={stock}
//             desc={desc}
//             taxes={taxes}
//             state={{ from: location }}
//           />
//         ))}
//       </List>
//       <BackBtn backLink={backLink} />
//     </>
//   );
// };

// export default TypeList;

import BackBtn from 'components/Buttons/BackBtn/BackBtn';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';
import TypeItem from 'components/Items/TypeItem/TypeItem';
import { H2Title, List } from './TypeList.styled';
import { allSubTypes } from 'data/data';

const TypeList = () => {
  const [page, setPage] = useState(1);
  const isFetching = useRef(false); // 🔐 локальный флаг
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { subType } = useParams();
  const { isProductsLoading, products } = useProducts();

  const result = allSubTypes.find(type => type.href === subType);

  const loadMore = useCallback(() => {
    if (isFetching.current || isProductsLoading) return;

    isFetching.current = true;
    setPage(prev => prev + 1);
  }, [isProductsLoading]);

  useEffect(() => {
    if (!result?.id) return;

    dispatch(getProducts({ subType: result.id, page }))
      .finally(() => {
        isFetching.current = false; // 🔓 разблокировка после завершения запроса
      });
  }, [dispatch, page, result?.id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const visibleHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (
        scrollY + visibleHeight >= fullHeight - 140 &&
        products.products.length < products.totalProducts
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, products]);

  return (
    <>
      <H2Title>{result?.title}</H2Title>
      <List>
        {products.products.map(({ id, name, price, stock, desc, taxes }) => (
          <TypeItem
            key={id}
            name={name}
            price={price}
            id={id}
            stock={stock}
            desc={desc}
            taxes={taxes}
            state={{ from: location }}
          />
        ))}
      </List>
      <BackBtn backLink={backLink} />
    </>
  );
};

export default TypeList;