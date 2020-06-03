import * as yup from 'yup';
export const SchemaElement: yup.ObjectSchema = yup.object({
  name: yup
    .string()
    .required('Nombre de producto requerido')
    .min(3, 'Debes ingresar 3 letras mínimo'),
  cantidad: yup
    .number()
    .required('Cantidad de producto requerida')
    .min(1, 'La cantidad minima es 1'),
});
