import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../api/conexao";

export const verificarEmail = async (nome: string, email: string) => {
  try {
    const usuario = await api.post("/usuario/signup", {
      Nome_usu: nome,
      Email_usu: email,
    });
    return usuario;
  } catch (error: any) {
    if (error.response?.status !== 409) {
      throw new Error("Email invalido aqui!");
    }
  }
  return true;
};

export const login = async (nome: string, email: string) => {
  await verificarEmail(nome, email);

  try {
    const response = await api.post("/usuario/signin", {
      Email_usu: email,
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao gerar OTP");
  }
};

export const validarOtp = async (idOtp: string, codigoOtp: string) => {
  try {
    const response = await api.post("/usuario/usarotp", {
      Id_otp: idOtp,
      Codigo_otp: codigoOtp,
    });

    if (response.data?.token) {
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('usuarioId', String(response.data.usuarioId));
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const getToken = async () => {
  return await AsyncStorage.getItem("token");
};
