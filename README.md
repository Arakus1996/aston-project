# Getting Started with Create React App

Status of Last Deployment:<br>
<img src="https://github.com/Arakus1996/aston-project/actions/workflows/github-deploy.yml/badge.svg"><br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/87170444-5f6a-46e5-8882-c975b3ee071f/deploy-status)](https://app.netlify.com/sites/keen-palmier-158688/deploys)

## [keen-palmier-158688.netlify.app](https://keen-palmier-158688.netlify.app/)



# Что выполнено:

## 1 уровень (обязательный - необходимый минимум)
- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется **Firebase.**

### React

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты.**
      Умные: [Favorites](https://github.com/Arakus1996/aston-project/blob/main/src/pages/Favorites/Favorites.tsx), [Registration](https://github.com/Arakus1996/aston-project/blob/main/src/pages/Registration/Registration.tsx) и т.д
      Глупые: [ValidateIput](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/shared/ValidateInput/ValidateInput.tsx), [ButtonTheme](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/shared/ButtonTheme/ButtonTheme.tsx) и т.д.
- [x] Есть **рендеринг списков**. [MovieCards](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/MovieCards/MovieCards.tsx) и т.д.
- [x] Реализована хотя бы одна **форма**. [LoginForm](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/Forms/LoginForm/LoginForm.tsx) и т.д.
- [x] Есть применение **Контекст API**. [ThemeContext](https://github.com/Arakus1996/aston-project/blob/main/src/app/theme/ThemeProvider.tsx)
- [x] Есть применение **предохранителя**. ErrorBoundary в [App](https://github.com/Arakus1996/aston-project/blob/main/src/routes/RootRouter.tsx)
- [x] Есть хотя бы один **кастомный хук**. [UseDebounce](https://github.com/Arakus1996/aston-project/blob/main/src/hooks/useDebounce.ts) и т.д
- [x] Хотя бы несколько компонентов используют **PropTypes**. [MovieCard](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/Card/MovieCard/MovieCard.tsx), [Button](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/shared/Button/Button.tsx) и т.д.
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**). [Suggest](https://github.com/Arakus1996/aston-project/blob/main/src/componetns/SearchBar/Suggest/Suggest.tsx)
- [x] Есть применение **lazy + Suspense**. [RootRouter](https://github.com/Arakus1996/aston-project/blob/main/src/routes/RootRouter.tsx)
 
### Redux

- [x] Используем **Modern Redux with Redux Toolkit**. [store](https://github.com/Arakus1996/aston-project/blob/main/src/store/store.tsx)
- [x] Используем **слайсы**. [slices](https://github.com/Arakus1996/aston-project/tree/main/src/store/slices)
- [x] Есть хотя бы одна **кастомная мидлвара**. [logger](https://github.com/Arakus1996/aston-project/blob/main/src/store/middleware/logger.ts)
- [x] Используется **RTK Query**. [moviesApi](https://github.com/Arakus1996/aston-project/blob/main/src/store/rtkquery/moviesApi.ts)
- [x] Используется **Transforming Responses**. [moviesApi](https://github.com/Arakus1996/aston-project/blob/main/src/store/rtkquery/moviesApi.ts)

## 2 Уровень (необязательный)
- [x] Использование **TypeScript**.
- [x] Использование **Firebase** для учетных записей пользователей и их Избранного и Истории поиска. firebase
- [x] Настроен **CI/CD**.

# Дополнительно:
- использована библиотека react-hook-form для форм регистрации и входа
- использована библиотека react-paginate для пагинации
- использовались CSS Modules и библиотека claccnames
- использовалась react-error-boundary
- используется API по поиску фильмов [omdbapi](https://www.omdbapi.com/)
