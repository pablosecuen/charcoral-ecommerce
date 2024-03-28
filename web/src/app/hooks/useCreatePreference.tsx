import { useState } from "react";

// Función para crear la preferencia de pago
const createPreferenceAPI = async (body: any) => {
  try {
    const response = await fetch("/api/payments/preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Error al crear la preferencia de pago");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Custom hook para manejar la llamada a la API de creación de preferencia de pago
const useCreatePreference = () => {
  const [loading, setLoading] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [error, setError] = useState(null);

  const createPreference = async (body: any) => {
    try {
      setLoading(true);
      const result = await createPreferenceAPI(body);
      setPreferenceId(result.preferenceId);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, preferenceId, error, createPreference };
};

export default useCreatePreference;
