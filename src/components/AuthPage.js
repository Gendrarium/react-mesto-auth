import React from 'react';

function AuthPage({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  title,
  buttonTitle,
  children,
  onSubmit
}) {

  return (
    <section className="auth main__auth">
      <h1 className="auth__title">{title}</h1>
      <form
        onSubmit={onSubmit}
        className="auth__form"
        target="_self"
        name="auth-form"
        method="get"
      >
        <input
          className="auth__input"
          value={email}
          onChange={handleEmailChange}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
        />
        <input
          className="auth__input"
          value={password}
          onChange={handlePasswordChange}
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="200"
          required
        />
        <button className="auth__button">{buttonTitle}</button>
      </form>
      {children}
    </section>
  );
}

export default AuthPage;
