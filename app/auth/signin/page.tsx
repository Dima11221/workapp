"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Неверный email или пароль");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.formWrapper}>
        <h1>Вход в систему</h1>
        <p className={style.subtitle}>База знаний Markway</p>

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your-email@markway.com"
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Введите пароль"
            />
          </div>

          {error && <div className={style.error}>{error}</div>}

          <button type="submit" className={style.submitButton}>
            Войти
          </button>
        </form>

        <div className={style.note}>
          <p>Доступ только для сотрудников Markway с корпоративной почтой</p>
        </div>
      </div>
    </div>
  );
}