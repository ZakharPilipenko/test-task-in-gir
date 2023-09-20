import { useContext, useState } from "react"
import { Container } from "react-bootstrap"
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";


interface FormData  {
  email: string;
  password: string;
}

export default function () {  
  const {register, handleSubmit, formState: { errors }} = useForm<FormData>();
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = data => {
  setIsAuth(true);
  localStorage.setItem('auth', 'true')
  navigate('/todo');
  }

  let [authMode, setAuthMode] = useState("signin")


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <Container>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Авторизоваться</h3>
            <div className="text-center">
              Еще не зарегистрированы?{" "}
              <span className="link-primary" onClick={changeAuthMode} style={{cursor: "pointer"}}>
                Регистрация
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                {...register("email", { 
                  required: true,
                  minLength: 6,
                  maxLength: 46,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                })}
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Введите email"
                style={{borderColor: errors.email ? "red" : ""}}
              />
            </div>
            {errors.email && <span style={{color: "red"}}>Обязательно к заполнению</span>}
            <div className="form-group mt-3">
              <label>Пароль</label>
              <input
                {...register("password", { 
                  required: true,
                  minLength: 6,
                  maxLength: 46,
                })}
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Введите пароль"
                style={{borderColor: errors.password ? "red" : ""}}
              />
            </div>
            {errors.password && <span style={{color: "red"}}>Обязательно к заполнению</span>}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Авторизоваться
              </button>
            </div>
          </div>
        </form>
      </div>
      </Container>
    )
  }

  return (
    <Container>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Регистрация</h3>
          <div className="text-center">
            Уже имеете аккаунт?{" "}
            <span className="link-primary" onClick={changeAuthMode} style={{cursor: "pointer"}}>
              Авторизоваться
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
                {...register("email", { 
                  required: true,
                  minLength: 6,
                  maxLength: 46,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                })}
                name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Введите email адрес"
              style={{borderColor: errors.email ? "red" : ""}}
            />
          </div>
          {errors.email && <span style={{color: "red"}}>Обязательно к заполнению</span>}
          <div className="form-group mt-3">
            <label>Пароль</label>
            <input
                {...register("password", { 
                  required: true,
                  minLength: 6,
                  maxLength: 46,
                })}
              type="password"
              className="form-control mt-1"
              placeholder="Пароль"
              style={{borderColor: errors.password ? "red" : ""}}
            />
          </div>
          {errors.password && <span style={{color: "red"}}>Обязательно к заполнению</span>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </form>
    </div>
    </Container>
  )
}