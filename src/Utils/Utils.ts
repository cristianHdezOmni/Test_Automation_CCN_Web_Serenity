// utils/Utils.ts
export class Utils {

  /**
   * Genera un email dinámico basado en el nombre y apellido del usuario
   * @param userData { firstName: string; lastName: string }
   * @returns string - Email generado
   */
  static generateEmail(userData: { firstName: string; lastName: string }): string {
    // Generar un número aleatorio entre 1000 y 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Normalizar nombre y apellido (minúsculas, sin tildes, sin espacios)
    const firstNameClean = userData.firstName
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const lastNameClean = userData.lastName
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    // Construir el email
    return `${firstNameClean}.${lastNameClean}+${randomNumber}@omni.pro`;
  }
}
