import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

export class CsvDataManager {
  private filePath: string;

  constructor(relativePath: string = '../features/data/testData.csv') {
    // 📌 Resolver ruta absoluta desde la raíz del proyecto
    this.filePath = path.resolve(__dirname, relativePath);

    // Crear archivo si no existe
    if (!fs.existsSync(this.filePath)) {
      fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
      fs.writeFileSync(
        this.filePath,
        'email,orderNumber,totalPrice,status\n',
        'utf-8'
      );
    }
  }

  // 📌 Leer todos los registros
  getAll(): any[] {
    const content = fs.readFileSync(this.filePath, 'utf-8');
    return parse(content, {
      columns: true,
      skip_empty_lines: true,
    });
  }

  // 📌 Buscar un registro por columna
  findBy(column: string, value: string): any | undefined {
    const records = this.getAll();
    return records.find((row) => row[column] === value);
  }

  // 📌 Actualizar un registro y reescribir el archivo
  updateRow(column: string, value: string, newData: Record<string, string>) {
    const records = this.getAll();
    let updated = false;

    const updatedRecords = records.map((row) => {
      if (row[column] === value) {
        updated = true;
        return { ...row, ...newData }; // merge con datos nuevos
      }
      return row;
    });

    if (!updated) {
      throw new Error(
        `⚠️ No se encontró registro con ${column}="${value}" en el archivo CSV`
      );
    }

    const output = stringify(updatedRecords, { header: true });
    fs.writeFileSync(this.filePath, output, 'utf-8');
  }
}
